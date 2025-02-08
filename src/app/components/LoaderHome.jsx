'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoopAnimationLoader from './loader';

export default function Loader({ onComplete }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <LoopAnimationLoader/>
  );
}
