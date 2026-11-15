// lib/actions/auth.actions.ts
"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function loginWithCredentialsAction(formData: FormData) {
  // Extract the raw data submitted in the input fields
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const supabase = await createClient();

  // Pass the user's input directly to Supabase
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // Supabase will automatically return errors for wrong passwords or unfound users
    console.error("Login failed:", error.message);
    throw new Error("Invalid login credentials");
  }

  redirect("/boards");
}

export async function loginWithGoogleAction() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      // This is crucial. After Google verifies the user, it must send them here.
      // We will build this route handler in the next step.
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/callback`,
    },
  });

  if (error) {
    console.error("Google login failed:", error.message);
    throw new Error("Failed to initialize Google login");
  }

  // signInWithOAuth doesn't log the user in directly.
  // It returns a Google authorization URL that we must redirect the user to.
  if (data.url) {
    redirect(data.url);
  }
}
