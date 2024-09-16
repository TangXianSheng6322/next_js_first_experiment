import React from "react";
import Link from "next/link";

//Utilities
import Logo from "./dojo-logo.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Image
          src={Logo}
          alt="Dashboard Logo with Ninja"
          width={70}
          quality={100}
          placeholder="blur"
        />
        <h1>DOJO Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
    </div>
  );
}
