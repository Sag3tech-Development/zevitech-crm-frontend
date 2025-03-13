"use client";

import React, { useState } from "react";

import { PiBellSimpleLight, PiBellSimpleRingingFill } from "react-icons/pi";

const Notification = () => {
  const [hasNotification, setHasNotification] = useState(false);

  return (
    <>
      {hasNotification ? (
        <PiBellSimpleRingingFill
          size={20}
          className="text-yellow-500 animate-pulse cursor-pointer"
        />
      ) : (
        <PiBellSimpleLight
          size={20}
          className="text-heading hover:scale-105 cursor-pointer"
        />
      )}
    </>
  );
};

export default Notification;
