"use client";

import React, { useEffect } from "react";

const WhatsApp = () => {
  const phone = "01616292567";
  const baseUrl = "https://api.whatsapp.com/send/";
  const encodingMgs = "Hey there, How's going?";
  const url = `${baseUrl}?phone=${phone}&text=${encodingMgs}&type=phone_number&app_absent=0`;

  useEffect(() => {
    const el = document.querySelector(".whatsapp-link");

    const handleScroll = () => {
      if (window.scrollY < 100) {
        el?.classList.add("visible");
      } else {
        el?.classList.remove("visible");
      }
    };

    const checkScroll = () => {
      const height = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (height > clientHeight) {
        window.addEventListener("scroll", handleScroll);
      } else {
        el?.classList.add("visible");
      }
    };

    checkScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href={url}
      className="whatsapp-link relative"
      target="_blank"
      rel="noreferrer noopener">
      <span className="absolute top-2 left-2 -z-50 size-10">
        <span className="flex justify-center items-center size-full animate-ping rounded-full bg-green-500/75"></span>
      </span>

      <img
        className="whatsapp-icon z-50"
        src="/whatsapp.png"
        alt="whatsapp"
        width={40}
        height={40}
      />
    </a>
  );
};

export default WhatsApp;

/**
 * .whatsapp-link {
  position: fixed;
  bottom: -80px;
  right: 40px;
  z-index: 50;
  transition: bottom 0.3s ease-in-out;
}

.whatsapp-link.visible {
  bottom: 40px;
}

.whatsapp-icon {
  width: 55px;
  height: 55px;
  transition: transform 0.3s ease;
}

.whatsapp-icon:hover {
  transform: scale(1.2);
}

 */
