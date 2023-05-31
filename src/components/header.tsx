import Image from "next/image";

interface AcceptedProps {
  Background: string;
}

export default function Header({Background}:AcceptedProps) {

  return (
    <>
      <Image
        src={Background}
        height={1000}
        width={2000}
        alt={"Background"}
      />
    </>
  );
}
