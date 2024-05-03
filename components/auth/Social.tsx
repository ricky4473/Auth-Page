"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={"lg"}
        variant={"outline"}
        className=" w-full"
        onClick={() => {
          onClick("google");
        }}
      >
        <FcGoogle className="size-5" />
      </Button>
      <Button
        size={"lg"}
        variant={"outline"}
        className=" w-full"
        onClick={() => {
          onClick("github");
        }}
      >
        <FaGithub className="size-5" />
      </Button>
    </div>
  );
};

export default Social;
