"use client";

// import Image from "next/image";
import { usePathname } from "next/navigation";

// import FuturisticRobotLoader from "./components/Home/Robot";
// import LoopAnimationLoader from "./components/loader";

export default function Loading() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if(isHome) {
    return null;
  }

  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img
        src="/ame/Gears.gif"
        alt="Logo"
        width={400}
        height={400}
        className=""
      />
    </div>
  );
}
