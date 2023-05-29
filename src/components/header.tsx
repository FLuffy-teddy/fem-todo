import Image from "next/image";

interface AcceptedProps {
  Background: string;
}

export default function Header({Background}:AcceptedProps) {

  return (
    <>
      <Image
        src={Background}
        height={500}
        width={1000}
        alt={"Background"}
      />
    </>
  );
}
