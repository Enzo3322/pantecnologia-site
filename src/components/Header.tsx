"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(window.scrollY < 100);
    });

    console.log(isTop);
    return () => {
      window.removeEventListener("scroll", () => {
        setIsTop(window.scrollY < 100);
      });
    };
  }, [isTop]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#171F67] text-white">
      <div
        className={`flex justify-between max-w-screen-xl m-auto ${
          isTop ? "py-8" : "py-4"
        }`}
      >
        <h1 className="flex gap-4 items-center">
          <img src="logo.svg" alt="Logo Pan Tecnologia" /> Pan Tecnologia
        </h1>
        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Our Services</li>
          <li>Portfolio</li>
          <li>Testimonial</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
