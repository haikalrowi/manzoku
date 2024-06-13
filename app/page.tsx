"use client";

import { Spinner } from "@nextui-org/react";
import { useEffect } from "react";

export default function App() {
  const manzoku =
    "https://github.com/haikalrowi/satisfying-command/blob/main/README.md";
  const redirectToManzoku = () => {
    window.location.assign(manzoku);
  };
  useEffect(() => {
    setTimeout(redirectToManzoku, 1000);
  }, []);
  return (
    <div className="flex h-screen items-center justify-center">
      <Spinner label={`Redirecting to ${manzoku}`} />
    </div>
  );
}
