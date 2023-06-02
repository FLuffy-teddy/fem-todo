import Image from "next/image";

interface AcceptedProps {
  Background: string;
}

export default function Header({Background}:AcceptedProps) {

  return (
    <div className="absolute w-full h-1/3 z-2">
      <Image
        src={Background}
        height={1000}
        width={2000}
        alt={"Background"}
      />
    </div>
  );
}
