"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";


function LoginCard() {
  return (
    <div
      className="w-110  bg-[#efeaf1f3] border border-[#04030a1f] rounded-2xl flex justify-center items-center p-4
      shadow-[_0px_1px_1px_0px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.04),0_2px_3px_rgba(0,0,0,0.04)]
      "
    >
      <div className="flex p-8 flex-col justify-center items-center">
        <h1 className="text-2xl font-bold tracking-tigh text-zinc-900 ">
          Sign Up to Start!
        </h1>
        <p className="mt-2 font-light text-zinc-600 font-sm mb-8 tracking-wide">
          sing up to get start with canva app
        </p>
        <Button
          onClick={async () => {
            await signIn("google", { callbackUrl: "/" });
          }}
          variant={"destructive"}
          className="text-zinc-900 border border-[#04030a36] cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in 
                 shadow-[_0px_1px_1px_0px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.04),0_2px_3px_rgba(0,0,0,0.04)]
                "
        >
          Login with Google
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default LoginCard;
