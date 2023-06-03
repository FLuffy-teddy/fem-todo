"use client";

import Image from "next/image";
import Header from "../components/header";
import Notes from "../components/notes";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  const darkTheme = {
    background: "/bg-desktop-dark.jpg",
    icon: "/icon-sun.svg",
  };
  const lightTheme = {
    background: "/bg-desktop-light.jpg",
    icon: "/icon-moon.svg",
  };

  const backgroundImage = toggle ? lightTheme.background : darkTheme.background;
  const buttonImage = toggle ? lightTheme.icon : darkTheme.icon;
  const backgroundColor = toggle ? "bg-white" : "bg-black";
  const transition = 'transition-all duration-1000 ease-in delay-75';

  return (
    <main className={`flex justify-center min-h-screen ${backgroundColor} ${transition}`}>
      <Header Background={backgroundImage} />

      <div className="w-1/2 flex flex-col items-center p-4 relative z-1 w-1/2">
        <div className="flex justify-between w-full py-8">
          <h1 className="text-xl md:text-5xl">TODO</h1>
          <button onClick={() => setToggle(!toggle)}>
            <Image
              src={buttonImage}
              height={50}
              width={50}
              alt={"Button Toggle"}
            />
          </button>
        </div>

        <Notes toggle={toggle} transition={transition} />
      </div>
    </main>
  );
}
