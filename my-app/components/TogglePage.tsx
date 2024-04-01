"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const TogglePage = () => {
  const router = useRouter();
  return (
    <div className=" flex gap-5 justify-between mx-[0.65rem]">
      <Button
        className=" rounded-md my-2"
        onClick={() => {
          router.push(`/form/`);
        }}
      >
        Form
      </Button>
      <Button
        className=" rounded-md my-2"
        onClick={() => {
          router.push(`/list/`);
        }}
      >
        List
      </Button>
    </div>
  );
};

export default TogglePage;
