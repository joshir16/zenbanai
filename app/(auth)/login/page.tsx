import {
  loginWithCredentialsAction,
  loginWithGoogleAction,
} from "@/lib/actions/auth.actions";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-xl border border-neutral-800 bg-neutral-900">
      <h1 className="text-2xl font-semibold text-white mb-6">
        Sign in to Zenban
      </h1>

      {/* The Form calls the Server Action directly */}
      <form action={loginWithCredentialsAction} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-neutral-400" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue="demo@zenban.com" // Pre-filled for zero friction
            className="px-4 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-neutral-400" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            defaultValue="zenban-demo-2026" // Pre-filled
            className="px-4 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-white"
          />
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
        >
          Sign In
        </button>
      </form>

      <div className="my-6 flex items-center justify-center space-x-4">
        <div className="flex-1 border-t border-neutral-800"></div>
        <span className="text-sm text-neutral-500">or</span>
        <div className="flex-1 border-t border-neutral-800"></div>
      </div>

      <form action={loginWithGoogleAction}>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
}
