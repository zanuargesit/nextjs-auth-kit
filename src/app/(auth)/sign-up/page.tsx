import SignUpForm from '@/components/auth/sign-up-form';
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from '@/lib/auth/actions';
import Link from "next/link";

export default function Page() {
  return  <SignUpForm />


}
