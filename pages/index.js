import Image from "next/image";
import Link from "next/link";
import Header from "/components/header";
import NuestroEstudio from "/components/nuestro-estudio";

import { motion } from "framer-motion";

export default function IndexPage() {
  return (
    <div>
      <div className="bg-almost-white flex flex-col min-h-screen bg-hero-image-main-sm bg-no-repeat bg-contain bg-bottom lg:bg-fixed lg:bg-hero-image-main lg:bg-[length:auto_100%] lg:bg-right">
        <Header />
        <main className="w-full flex-1 flex flex-col lg:justify-center lg:container px-6 py-6 mx-auto md:py-12">
          <h1 className="text-xl mb-12 text-main-color py-3 mt-12 lg:my-auto md:text-5xl">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-sans block"
            >
              Especialistas en
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-7xl block"
            >
              Derecho Penal
            </motion.span>
          </h1>
          <motion.div
            animate={{ y: [0, -10, 0] }} // Move up (-10px) and then back to the original position
            transition={{
              duration: 1.5, // Time for one complete animation cycle
              repeat: Infinity, // Repeat the animation infinitely
              repeatType: "loop", // Makes the animation loop continuously
              ease: "easeInOut", // Smooth easing for the motion
            }}
          >
            <Link href="#nuestro-estudio" passHref>
              <Image
                src="/down-icon.svg"
                alt="Scroll"
                width={72}
                height={70}
                className="w-12 lg:w-auto mt-auto"
                priority
              />
            </Link>
          </motion.div>
        </main>
      </div>

      <NuestroEstudio></NuestroEstudio>

      <section
        id="areas-de-practica"
        className="bg-areas-practica bg-contain bg-top bg-no-repeat border bg-main-color pt-24 pb-12 border-white border-l-0 border-r-0 lg:bg-[length:100%_auto]"
      >
        <div className="py-12 max-w-5xl w-full mx-auto text-white flex flex-col items-center justify-center border-white lg:py-64">
          <motion.h2
            className="text-4xl text-white p-3 mb-6 my-auto md:text-5xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Áreas de práctica
          </motion.h2>

          <ul className="flex justify-center flex-wrap gap-4 px-6 max-w-6xl font-sans lg:px-0">
            <motion.li
              className="pill"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              Derecho Penal en <span className="font-bold">General</span>
            </motion.li>
            <motion.li
              className="pill"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              Derecho Penal en <span className="font-bold">Tributario</span>
            </motion.li>
            <motion.li
              className="pill"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            >
              Derecho Penal en <span className="font-bold">Económico</span>
            </motion.li>
            <motion.li
              className="pill"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            >
              Lavado de Activos
            </motion.li>
            <motion.li
              className="pill"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
            >
              Derecho Penal en <span className="font-bold">Cambiario</span>
            </motion.li>
            <motion.li
              className="pill"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
            >
              Responsabilidad Penal de las Personas Jurídicas
            </motion.li>
          </ul>
        </div>
      </section>

      <section id="el-equipo" className="">
        <div className="px-6 py-12 max-w-5xl w-full lg:mx-auto flex flex-col items-center justify-center lg:py-48">
          <motion.h2
            className="text-4xl text-main-color p-3 mb-6 my-auto md:text-5xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            El Equipo
          </motion.h2>

          <div className="md:flex gap-6">
            <Link href="/alejandro-david" passHref>
              <motion.div
                className="team-member mb-6 lg:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/alejandro-david.png"
                  alt="Alejandro David"
                  width={800}
                  height={1104}
                  className="w-100"
                />
                <div className="details">
                  <h3 className="text-white text-center p-12">
                    H. ALEJANDRO DAVID
                  </h3>
                </div>
              </motion.div>
            </Link>
            <Link href="/ignacio-olivar" passHref>
              <motion.div
                className="team-member mb-6 lg:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/ignacio-olivar.png"
                  alt="Ignacio Olivar"
                  width={800}
                  height={1104}
                  className="w-100"
                />
                <div className="details">
                  <h3 className="text-white text-center p-12">
                    IGNACIO OLIVAR
                  </h3>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
