"use client";

import { useUser } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import THeader from "@/components/THeader";
import TStarterKit from "@/components/TStarterKit";

export default function Home() {

  // console the clerk user
  const { isLoaded, isSignedIn } = useUser();
  const { syncUser } = useAuthStore();

  useEffect(() => {
    if (isSignedIn) {
      syncUser();
    }
  }, [isSignedIn, syncUser]);

  // Loader state while Clerk initializes
  if (!isLoaded) {
    return (
      <div className="fixed inset-0 z-[999] w-screen h-screen bg-slate-100 overflow-hidden dark:bg-black flex items-center justify-center py-4">
        <Loader className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="font-sans grid grid-rows-[0px_1fr_20px] items-center justify-items-center">

      <THeader />

      {/* Starter Kit here */}
      <main className="w-full min-h-[77vh] h-full max-[767px]:h-full flex flex-col gap-12 items-center justify-center mx-auto px-6 py-16 flex flex-col gap-12">
        <div className="w-full container flex flex-col gap-12 items-center justify-center mx-auto max-[767px]:px-1 px-6 py-16 flex flex-col gap-12">
          <TStarterKit />
        </div>
      </main>
    </div>
  );
}