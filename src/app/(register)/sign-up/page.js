"use client"

import { signUp } from "@/app/services/register";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";

function SignUpPage() {

    const {register , handleSubmit}=useForm()

    // async function onSubmit(data){
    //     await signUp(data)
    // }
  return (
    <>
      <form>
        <div className="flex  gap-10 justify-center items-center">
          <div className="flex flex-col gap-3 mt-16">
            <div className="self-start text-3xl font-bold">Sign Up</div>
            <div className="flex gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">First Name: </span>
                </div>
                <Input
                  type="text"
                  placeholder="Enter your name.."
                  className="border border-black w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <Input
                  type="text"
                  placeholder="Enter your name..."
                  className="border border-black w-full max-w-xs"
                />
              </label>
            </div>
            <div className="flex gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email:</span>
                </div>
                <Input
                  type="text"
                  placeholder="info@gmail.com"
                  className="border border-black w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Mobile No:</span>
                </div>
                <Input
                  type="text"
                  placeholder="+855 123456789"
                  className="border border-black w-full max-w-xs"
                />
              </label>
            </div>
            <div className="flex gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <Input
                  type="text"
                  placeholder="xxxxxxxxxxxx"
                  className="border border-black w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-black">Confirm Password</span>
                </div>
                <Input
                  type="text"
                  placeholder="xxxxxxxxxxxx"
                  className="border border-black w-full max-w-xs"
                />
              </label>
            </div>
            <Button className="  text-white w-full bg-blue-500">
              Sign Up
            </Button>
            <div className="self-start">
            <div className="flex gap-2">
              Have an account?
              <span className="text-blue-500">
                <Link href="/login">Login</Link>
              </span>
            </div>
          </div>
          </div>
          
          <div className="lg:mt-0 mt-20">
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

export default SignUpPage;
