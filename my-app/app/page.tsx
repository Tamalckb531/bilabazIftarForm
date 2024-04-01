import { MainText } from "@/components/MainText";
import Image from "next/image";

const img =
  "data:image/jpeg;base64,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";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center p-2">
      <img src={img} alt="" className="m-5" />
      <MainText heading='Welcome to "Bilabaz Ifter Mahfil joining Form"' />
    </main>
  );
}