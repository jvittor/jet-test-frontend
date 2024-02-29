"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsList, BsX } from "react-icons/bs";


const styles = {
  navLinks:
    "text-xs ml-10 uppercase border-b border-white hover:border-[#F6B519] text-xl",
};
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="">
      <nav className="w-full h-20 shadow-xl bg-[#1D1C1C] ">
        
        {/* desktop menu */}
        <div className="flex items-center justify-between h-full px-4 w-full">
          <Link href="/">
            <img
              src="https://r2.easyimg.io/5d60ya7mb/carbytelogo.png"
              alt="Logo"
              width={200}
              height={20}
              className="cursor-pointer"
            />
          </Link>
          <div className=" text-white hidden sm:flex">
            <ul className="hidden sm:flex">
              <li className={styles.navLinks}>
                <Link href="/about">Minha Conta</Link>{" "}
              </li>
              <li className={styles.navLinks}>
                <Link href="/contact">Contato</Link>{" "}
              </li>
              <li className="flex items-center space-x-5 text-[#F6B519] ml-10">
                <h3 className="cursor-pointer border border-[#f6b519] px-4 py-1 rounded-full text-xs bg-[#f5b519] text-black hover:bg-black hover:text-[#f6b519] ease-in-out duration-300">
                  Meu carrinho
                </h3>
              </li>
            </ul>
          </div>
          
          {/* mobile menu */}
          <div
            onClick={(e) => setMenuOpen(!menuOpen)}
            className="sm:hidden cursor-pointer pl-24"
          >
            <BsList className="h-8 w-8 text-[#f6b519]" />
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#1D1C1C] p-10 ease-in-out duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500 "
          }
        >
          <div className="flex w-full items-center justify-end">
            <div
              onClick={(e) => setMenuOpen(!menuOpen)}
              className="cursor-pointer"
            >
              <BsX className="h-8 w-8 text-[#F6B519] " />
            </div>
          </div>
          {/* Mobile Menu Links */}
          <div className="flex-col py-4 ">
            <ul>
              <li
                onClick={(e) => setMenuOpen(false)}
                className="py-4 hover:underline hover:decoration-[#f6b519]"
              >
                <Link href="/about">Minha Conta</Link>
              </li>
              <li
                onClick={(e) => setMenuOpen(false)}
                className="py-4 hover:underline hover:decoration-[#f6b519]"
              >
                <Link href="/contact">Contato</Link>
              </li>
              <li className="flex items-center py-4 text-[#f6b519]">
                <p className="cursor-pointer px-4 py-1 rounded-full bg-[#f6b519] text-black hover:bg-black hover:text-[#f6b519] ease-in-out duration">
                  Meu Carrinho
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Socials Medias */}
      </nav>
    </header>
  );
};

export default Header;