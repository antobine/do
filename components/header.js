import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="">
      <div className="flex flex-wrap items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <div className="w-3/4 flex items-center lg:w-auto">
          <Link href="/" className="ml-3" passHref>
            <Image
              src="/do-david-olivar-logo.svg"
              width={400}
              height={87}
              priority
              alt="David Olivar Abogados logo"
            />
          </Link>
        </div>

        <button
          className="items-center block px-3 py-2 text-main-color border border-main-color rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={cn(
            "font-sans my-12 text-main-color text-center md:flex flex-col md:flex-row md:items-center md:justify-center w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "Nuestro Estudio", route: "/#nuestro-estudio" },
            { title: "Áreas de Práctica", route: "/#areas-de-practica" },
            { title: "El Equipo", route: "/#el-equipo" },
          ].map(({ route, title }) => (
            <motion.li
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="my-12 md:my-0 md:ml-6"
              key={title}
            >
              <Link href={route} passHref className="block">
                {title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </header>
  );
}
