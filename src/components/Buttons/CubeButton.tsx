"use client";

import React, { useEffect, useState } from "react";

interface CubeButtonProps {
  text: string;
  onClick?: () => void;
}

const CubeButton: React.FC<CubeButtonProps> = ({ text, onClick }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <button
      className="downloadButton cube cube-hover"
      type="button"
      onClick={onClick}
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
        <span className="align-middle">{text}</span>
      </div>
    </button>
  );
};

export default CubeButton;
