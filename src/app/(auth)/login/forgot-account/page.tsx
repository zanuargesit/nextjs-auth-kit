"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchAccount } from "@/lib/auth/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = await searchAccount(email);

    if (found) {
      router.push(
        `/login/forgot-account/forgot-password?email=${encodeURIComponent(
          email
        )}`
      );
    } else {
      router.push("/sign-up")
  };

  };
  return (
    <form
      onSubmit={handleSearch}
      className="p-6 max-w-md mx-auto space-y-4 container"
    >
      <h1 className="text-xl font-semibold">Find Your Account</h1>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
