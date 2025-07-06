"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { forgetPassword } from '@/lib/auth/auth-client';

export default function ForgotPasswordPage() {
  const params = useSearchParams();
  const emailFromQuery = params.get("email") || "";
  const [email, setEmail] = useState(emailFromQuery);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await forgetPassword({
      email,
      redirectTo: `${window.location.origin}/login/forgot-account/forgot-password/reset-password`, // This page will be created next
    });

    if (error) {
      setMessage("Something went wrong. Please try again.");
    } else {
      setMessage("Check your email for the reset link.");
    }
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-md mx-auto space-y-4 container"
    >
      <h1 className="text-xl font-bold">Forgot Password?</h1>
      <Input
        type="email"
        required
        value={email}
        placeholder="Your email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2"
      />
      <div className="grid grid-cols-3 gap-2">
        <Button type="submit">Send Reset Link</Button>
        <Button asChild variant={"outline"}>
          <Link href="/login">Sign In</Link>
        </Button>
      </div>
      {message && <p>{message}</p>}
    </form>
  );
}
