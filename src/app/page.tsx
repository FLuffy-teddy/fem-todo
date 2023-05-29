"use client";

import Image from "next/image";
import Header from "../components/header";
import Notes from "../components/notes";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  const backgroundImage = toggle
    ? "/bg-desktop-light.jpg"
    : "/bg-desktop-dark.jpg";
  const buttonImage = toggle ? "/icon-moon.svg" : "/icon-sun.svg";

  return (
    <main>
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
      </div>
    </main>
  );
}
