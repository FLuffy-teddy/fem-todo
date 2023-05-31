"use client";

import Image from "next/image";
import Header from "../components/header";
import Notes from "../components/notes";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  const darkTheme = {
    "background": "/bg-desktop-dark.jpg",
    "icon": "/icon-sun.svg",
    "heading": "dark-gray-blue",
    "body": "light-grayish-blue",
    "check": "icon-check.svg"
  }
  const lightTheme = {
    "background": "/bg-desktop-light.jpg",
    "icon": "/icon-moon.svg",
    "heading": "light-gray-blue",
    "body": "light-grayish-blue",
    "check": "icon-cross.svg"
  }

  const backgroundImage = toggle
    ? lightTheme.background
    : darkTheme.background;
  const buttonImage = toggle ? lightTheme.icon : darkTheme.icon;



  return (
    <main className="min-h-screen">
      <Header Background={backgroundImage} />

      <div className="w-full flex justify-between items-center p-4">
        <h1 className="text-xl md:text-5xl">TODO</h1>
        <button onClick={() => setToggle(!toggle)}>
          <Image
            src={buttonImage}
            height={50}
            width={50}
            alt={"Button Toggle"}
          />
        </button>
        <Notes/>
      </div>
    </main>
  );
}
