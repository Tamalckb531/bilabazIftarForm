import CardWrapper from "@/components/CardWrapper";
import TogglePage from "@/components/TogglePage";
import React from "react";

const page = () => {
  return (
    <>
      <TogglePage />
      <main className="flex min-h-screen min-w-full flex-col items-center justify-center p-2">
        <div className="container border-2 min-w-full items-center rounded-xl p-5 bg-slate-900">
          <CardWrapper />
        </div>
      </main>
    </>
  );
};

export default page;
