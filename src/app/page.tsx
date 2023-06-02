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
    heading: "stone-600",
    body: "indigo-950",
    check: "icon-check.svg",
    g1: "bg-check-1",
    g2: "bg-check-2",
  };
  const lightTheme = {
    background: "/bg-desktop-light.jpg",
    icon: "/icon-moon.svg",
    heading: "neutral-400",
    body: "indigo-100",
    check: "icon-cross.svg",
    g1: "bg-check-1",
    g2: "bg-check-2",
  };

  const backgroundImage = toggle ? lightTheme.background : darkTheme.background;
  const buttonImage = toggle ? lightTheme.icon : darkTheme.icon;
  const Theme = toggle ? lightTheme : darkTheme;
  const backgroundColor = toggle ? "bg-white" : "bg-black";

  return (
    <main className={`flex justify-center min-h-screen ${backgroundColor} transition-all duration-1000 ease-in delay-75`}>
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

        <Notes Theme={Theme} />
      </div>
    </main>
  );
}
