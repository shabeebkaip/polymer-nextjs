"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

export default function PageProgressBar() {
  const pathname = usePathname(); // Detects page changes
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    NProgress.start();

    const timer = setTimeout(() => {
      setLoading(false);
      NProgress.done();
    }, 500); // Artificial delay to show progress

    return () => clearTimeout(timer);
  }, [pathname]); // Runs when pathname changes

  return null;
}
