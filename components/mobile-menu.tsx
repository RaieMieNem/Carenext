'use client';

import Image from "next/image";
import { useState } from "react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const HandleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:hidden w-[30px] cursor-pointer" onClick={HandleMenuToggle}>
        <Image src="/menu.svg" alt="Menu" width={40} height={40} />
      </div>

      <div className={`lg:hidden fixed top-0 right-0 w-full h-full bg-white z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="absolute top-4 right-4 text-2xl" onClick={HandleMenuToggle}>
          &times;
        </button>

        <nav className="flex flex-col items-center mt-16 gap-10 space-y-4">
          <button className="cursor-pointer p-[10px] text-[12px] border border-black text-black rounded-[20px] hover:bg-[#DDDDDD] transition-all">
            Connexion
          </button>
          <button className="cursor-pointer px-[12px] py-[10px] text-[12px] bg-black text-white rounded-[20px] border border-black hover:bg-[#DDDDDD] hover:text-black transition-all">
            Essayer CareInvest
          </button>
          <button>MA SITUATION</button>
          <button>MES PROJETS</button>
          <button>MES RAPPORTS</button>
          <button>MES SIMULATEURS</button>
        </nav>
      </div>
    </>
  );
};
