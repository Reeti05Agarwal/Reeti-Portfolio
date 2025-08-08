"use client";

import React, { useEffect, useState } from "react";

export default function DownloadButton() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // only set to true on the client
  }, []);

  const handleDownload = () => {
    if (typeof window !== "undefined") {
      window.open("/resume.pdf", "_blank");
    }
  };

  if (!isClient) return null; // don't render until mounted on client

  return (
    <button
      className="downloadButton cube cube-hover"
      type="button"
      onClick={handleDownload}
    >
      <div className="bg-top">
        <div className="bg-inner"></div>
      </div>
      <div className="bg-right">
        <div className="bg-inner"></div>
      </div>
      <div className="bg">
        <div className="bg-inner"></div>
      </div>
      <div className="text">
        <span className="align-middle">Open My Resume</span>
      </div>
    </button>
  );
}