"use client";

import FuturisticRobotLoader from "./components/Home/Robot";
import LoopAnimationLoader from "./components/loader";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center min-h-screen">
      Loading...
    </div>
  );
}
