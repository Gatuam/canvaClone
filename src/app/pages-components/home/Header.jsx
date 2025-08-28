"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Search } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function TopHeader() {
  const { data: session } = useSession();
  const signOutHandler = () => {
    signOut();
  };
  return (
    <div className="header h-[8vh] border-b border-[#11111120] bg-[#f3f3f3e8] p-7 z-10 flex  items-center justify-between relative ">
      <Link href={"/"}>
        <div
          className=" w-20 h-8 bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg)",
          }}
        ></div>
      </Link>

      <div className="flex justify-center items-center">
        <div className="text-neutral-800 bg-neutral-200 flex justify-between items-center border border-[#11111109] h-12 px-3 py-1 rounded-md ">
          <Search className="text-neutral-500 ml-1 mr-2"></Search>
          <input className=" outline-0 text-sm " />
        </div>
        <div className="flex items-center gap-5 ml-4 cursor-pointer  rounded-full w-10 h-10 justify-center ">
          <DropdownMenu>
            <DropdownMenuTrigger aschild="true">
              <div className="flex justify-center items-center focus:outline-none">
                <Avatar>
                  <AvatarFallback>
                    {session?.user?.name?.[0] || "U"}
                  </AvatarFallback>
                  <AvatarImage src={session?.user?.image}></AvatarImage>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className={
                "flex justify-center items-center ml-3 bg-[#e5e5e5] text-black border border-[#11111114] cursor-pointer"
              }
            >
              <DropdownMenuItem
                className="w-full h-full cursor-pointer "
                onClick={signOutHandler}
              >
                <LogOut className="mr-1 w-5 h-6 block"> </LogOut>
                <span className="text-neutral-800 inline-block">Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
