"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function MainText({ heading }: { heading: string }) {
  const router = useRouter();

  return (
    <div className="container  text-center ">
      <h1 className="scroll-m-20 text-xl text-current font-extrabold tracking-tight">
        {heading}
      </h1>
      <Button
        className="m-5 p-5"
        size={"lg"}
        onClick={() => {
          router.push(`/form/`); // Use router.push for client-side navigation
        }}
      >
        Join Now
      </Button>
    </div>
  );
}
