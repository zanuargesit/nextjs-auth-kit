"use client";

import { signIn } from '@/lib/auth/auth-client';
import { Button } from "../ui/button";

export default function SignInSocial({
  provider,
  children,
}: {
  provider:
    | "github"
    | "apple"
    | "discord"
    | "facebook"
    | "google"
    | "microsoft"
    | "spotify"
    | "twitch"
    | "twitter"
    | "dropbox"
    | "linkedin"
    | "gitlab"
    | "tiktok"
    | "reddit"
    | "roblox"
    | "vk"
    | "kick";
  children: React.ReactNode;
}) {
  return <Button onClick={async() => {
    await signIn.social({
      provider,
      callbackURL: `/dashboard`
    })
  }}
  type='button'
  variant={"outline"}>{children}</Button>;
}
