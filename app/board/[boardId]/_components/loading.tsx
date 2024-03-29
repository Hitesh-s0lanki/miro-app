"use client";

import { Loader } from "lucide-react";
import Toolbar from "./toolbar";
import { InfoSkeleton } from "./info";
import { ParticipantSkeleton } from "./participants";

const Loading = () => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
      <InfoSkeleton />
      <ParticipantSkeleton />
      <Toolbar.Skeleton />
    </main>
  );
};

export default Loading;
