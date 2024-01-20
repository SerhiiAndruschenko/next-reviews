"use client";

import { useState } from "react";

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1500);
  };

  return (
    <button className="font-gentium" onClick={handleClick}>
      {clicked ? "Link copied" : "Share Link"}
    </button>
  );
}
