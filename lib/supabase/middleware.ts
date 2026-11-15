import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  // Create an unmodified response first
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // 1. Update the request cookies (so server components get the fresh token)
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );

          // 2. Update the response cookies (so the browser gets the fresh token)
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // This line is the heartbeat of your auth. It silently refreshes the token
  // if it has expired, triggering the setAll block above.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // ROUTE GUARDING LOGIC
  const isDashboardRoute =
    request.nextUrl.pathname.startsWith("/boards") ||
    request.nextUrl.pathname === "/";
  const isAuthRoute = request.nextUrl.pathname.startsWith("/login");

  // If trying to access the dashboard without being logged in, kick to /login
  if (isDashboardRoute && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // If trying to access /login while already logged in, redirect to dashboard
  if (isAuthRoute && user) {
    const url = request.nextUrl.clone();
    url.pathname = "/boards"; // or '/' depending on your main route
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
