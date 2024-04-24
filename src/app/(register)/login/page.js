"use client";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label"

function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    const response = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });
    console.log(response);
    if (response.status === 200) {
      router.push("/todo-list");
      router.refresh();
      toast({
        className: "bg-green-500 font-bold text-white text-2xl",
        description: "Login Success!",
        description: "Welcome to TO-DO Lists",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Wrong credential",
        description: "Please make sure you type in correct email or password",
      });
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex  gap-10 justify-center">
          <div className="flex flex-col gap-5 w-[25rem] mt-16">
            <div className="self-start text-3xl font-bold">Login</div>
            <div className="w-full  items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      
      <Input type="email" id="email" placeholder="Email"className="border border-black"  {...register("email")} />
    </div>
            <div className="w-full  items-center gap-1.5">
      <Label htmlFor="password">Password</Label>
      
      <Input type="password" id="password" placeholder="Password" className="border border-black" {...register("password")} />
    </div>
           
            <Button
              type="submit"
              className="text-white w-full bg-blue-500"
            >
              Login
            </Button>
        
            <div className="self-start">
              <div className="flex gap-2">
                Don't have an account?
                <span className="text-blue-500">
                  <Link href="/sign-up">Register</Link>
                </span>
              </div>
            </div>
            <div className="text-sm">
              ---------------- Continue with -------------
            </div>
          </div>
          <div>
            <Image
              src="/images/login.jpg"
              width={400}
              height={400}
              alt="Login img"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
