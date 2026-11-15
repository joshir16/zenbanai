// app/(auth)/layout.tsx

import Logo from "@/components/ui/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white selection:bg-green-600/30">
      <Logo />

      <main className="w-full max-w-md px-4">{children}</main>
    </div>
  );
}
