import { motion } from "framer-motion";
import Image from "next/image";

export default function NuestroEstudio() {
  return (
    <section
      id="nuestro-estudio"
      className="lg:flex border border-white border-l-0 border-r-0"
    >
      <div className="bg-main-color w-full py-36 text-white p-6 flex-col items-center justify-center lg:border-r border-white lg:flex lg:py-auto">
        <div className="text-left max-w-lg">
          <motion.p
            className="text-2xl text-white mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Nuestro estudio se dedica con exclusividad al ejercicio del derecho
            penal.
          </motion.p>
          <div className="flex gap-7 items-center mb-4">
            <Image
              src="/law-icon.svg"
              alt="martillo derecho sentencia"
              width={64}
              height={64}
            />
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, x: 250 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Ofrecemos nuestro servicio especializado de representación
              judicial y consultoría.
            </motion.p>
          </div>
          <div className="flex gap-7 items-center">
            <Image
              src="/trust-icon.svg"
              alt="apreton de manos confianza"
              width={64}
              height={64}
            />
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, x: 250 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              Confidencialidad, relación personal y rigor profesional son
              nuestro compromiso.
            </motion.p>
          </div>
        </div>
      </div>
      <Image
        src="/facultad-derecho.jpg"
        width={1576}
        height={1718}
        alt="Facultad de Derecho Buenos Aires"
        className="lg:w-1/2"
      />
    </section>
  );
}
