"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

function EyeIcon({ open }) {
  if (open) {
    return (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
        />
      </svg>
    );
  }

  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function Footer() {
  return (
    <div className="flex justify-between">
      <div className="text-sm text-zinc-500/80">
        <p>@2026 Orion. All rights reserved.</p>
      </div>
      <div className="flex gap-4">
        <p className="text-sm text-zinc-500/80">Privacy Policy</p>
        <p className="text-sm text-zinc-500/80">Support</p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/";

  const [layout, setLayout] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Login failed. Please try again.");
        return;
      }

      toast.success(data.message || "Login successful!");
      localStorage.setItem("token", data.token);
      router.push(nextPath);
    } catch {
      toast.error("Unable to connect to the server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Registration failed. Please try again.");
        return;
      }

      toast.success(data.message || "Account created successfully!");
      setLayout("login");
      setPassword("");
    } catch {
      toast.error("Unable to connect to the server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const switchLayout = (nextLayout) => {
    setLayout(nextLayout);
    setShowPassword(false);
  };

  return (
    <div className="flex h-screen w-full items-center gap-4 bg-black p-4">
      <div className="relative flex h-[95%] w-[45%] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0a0a]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_140%_100%_at_top_right,rgba(245,62,50,0.35)_0%,rgba(201,53,43,0.18)_15%,transparent_85%)]" />
        <div className="relative mt-auto px-8 pb-10 pt-6">
          <h1 className="bg-gradient-to-r from-white to-[#666666] bg-clip-text text-center text-2xl font-semibold leading-tight tracking-tight text-transparent">
            One Platform to Streamline
            <br />
            All Product Analytics
          </h1>
          <p className="mt-4 text-center text-sm text-zinc-500">
            Sign in to unlock a seamless shopping experience.
          </p>
        </div>
      </div>

      <div className="flex h-[95%] w-[55%] flex-col justify-center overflow-hidden rounded-[24px] border border-white/10 bg-white">
        {layout === "login" ? (
          <div className="mx-auto flex h-[95%] w-[95%] flex-col justify-between gap-4 p-10">
            <div>
              <p className="text-right text-sm text-zinc-500/80">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  className="font-medium text-zinc-900 underline"
                  onClick={() => switchLayout("register")}
                >
                  Register
                </button>
              </p>
            </div>

            <div className="mx-auto flex h-[80%] w-[80%] flex-1 flex-col justify-center">
              <div className="mx-auto w-full max-w-md">
                <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900">
                  Welcome back to Orion!
                </h2>
                <p className="mt-2 text-center text-sm text-zinc-500">
                  Please enter your details to sign in to your account
                </p>

                <div className="mt-10">
                  <form onSubmit={handleLoginSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-zinc-900">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="johndoe@mail.com"
                        className="w-[80%] rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100"
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="mb-2 block text-sm font-semibold text-zinc-900">
                        Password
                      </label>
                      <div className="relative w-[80%]">
                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          required
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          placeholder="Enter your password"
                          className="w-full rounded-xl border border-zinc-200 px-4 py-3 pr-11 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-600"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          <EyeIcon open={showPassword} />
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex h-12 w-[80%] items-center justify-center gap-2 rounded-xl bg-[#F53E32] text-sm font-semibold text-white transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isLoading ? "Signing in..." : "Sign In"}
                    </button>
                  </form>
                </div>

                <p className="mt-8 text-center">
                  <button
                    type="button"
                    className="text-sm font-semibold text-zinc-900 underline underline-offset-2"
                  >
                    Forgot password?
                  </button>
                </p>
              </div>
            </div>

            <Footer />
          </div>
        ) : (
          <div className="mx-auto flex h-[95%] w-[95%] flex-col justify-between gap-4 p-10">
            <div>
              <p className="text-right text-sm text-zinc-500/80">
                Already have an account?{" "}
                <button
                  type="button"
                  className="font-medium text-zinc-900 underline"
                  onClick={() => switchLayout("login")}
                >
                  Login
                </button>
              </p>
            </div>

            <div className="mx-auto flex h-[80%] w-[80%] flex-1 flex-col justify-center">
              <div className="mx-auto w-full max-w-md">
                <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900">
                  Welcome to Orion!
                </h2>
                <p className="mt-2 text-center text-sm text-zinc-500">
                  Please enter your details to register your account
                </p>

                <div className="mt-10">
                  <form onSubmit={handleRegisterSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="userName" className="mb-2 block text-sm font-semibold text-zinc-900">
                        User Name
                      </label>
                      <input
                        id="userName"
                        type="text"
                        autoComplete="username"
                        required
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                        placeholder="Enter your user name"
                        className="w-[80%] rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100"
                      />
                    </div>

                    <div>
                      <label htmlFor="register-email" className="mb-2 block text-sm font-semibold text-zinc-900">
                        Email
                      </label>
                      <input
                        id="register-email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                        className="w-[80%] rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100"
                      />
                    </div>

                    <div>
                      <label htmlFor="register-password" className="mb-2 block text-sm font-semibold text-zinc-900">
                        Password
                      </label>
                      <div className="relative w-[80%]">
                        <input
                          id="register-password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="new-password"
                          required
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          placeholder="Enter your password"
                          className="w-full rounded-xl border border-zinc-200 px-4 py-3 pr-11 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-600"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          <EyeIcon open={showPassword} />
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex h-12 w-[80%] items-center justify-center gap-2 rounded-xl bg-[#F53E32] text-sm font-semibold text-white transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isLoading ? "Signing up..." : "Sign Up"}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}
