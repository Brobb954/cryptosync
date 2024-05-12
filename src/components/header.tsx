import React from "react";
import Link from "next/link.js";
// import { SignUp } from "@clerk/nextjs";
import UserItem from "./useritem";

export default function Header() {
  return (
    <div className="bg-jetBlack fixed flex h-[100px] w-full items-center justify-between">
      <input type="search" placeholder="Search..." />
      <div>
        <UserItem />
      </div>
      <div>
        <Link href="/settings">
          <i className="settings-icon">⚙️</i>
        </Link>
        <div></div>
      </div>
    </div>
  );
}
