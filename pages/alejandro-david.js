import Image from "next/image";
import Link from "next/link";
import Header from "/components/header";
import NuestroEstudio from "/components/nuestro-estudio";

import { motion } from "framer-motion";

export default function AlejandroDavid() {
  return (
    <div className="">
      <div className="bg-almost-white bg-about-law bg-cover lg:bg-contain bg-right-bottom bg-no-repeat px-6 lg:px-0">
        <Header />
        <div className="mx-auto mt-12 mb-12 lg:container">
          <p className="text-main-color uppercase">Nuestros Profesionales</p>
        </div>
        <section className="lg:flex lg:container mx-auto gap-6 pb-48">
          <div className="min-w-80 mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-3 text-5xl"
            >
              <span className="text-xl block">H. Alejandro</span>David
            </motion.h2>

            <p className="mb-4">
              david@david-olivar.com
              <br />
              11 7853 0505
            </p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link
                passHref
                href="https://www.linkedin.com/in/alejandro-david-47753988/"
                className="rounded-full border border-main-color px-6 py-4 flex gap-4 flex-wrap"
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2.486c0-.514.18-.939.54-1.274C.9.878 1.37.71 1.947.71c.566 0 1.024.165 1.374.495.36.34.541.782.541 1.328 0 .494-.175.906-.525 1.235-.36.34-.834.51-1.42.51H1.9c-.567 0-1.025-.17-1.375-.51C.175 3.428 0 3.001 0 2.486ZM.2 16V5.683h3.43V16H.2Zm5.329 0h3.429v-5.76c0-.361.04-.639.123-.835a2.24 2.24 0 0 1 .656-.888c.294-.242.662-.363 1.105-.363 1.153 0 1.73.778 1.73 2.332V16H16v-5.915c0-1.524-.36-2.68-1.081-3.467-.72-.788-1.673-1.182-2.857-1.182-1.328 0-2.363.572-3.104 1.715v.03h-.016l.016-.03V5.683H5.529c.02.33.03 1.354.03 3.074 0 1.72-.01 4.134-.03 7.243Z"
                    fill="#373F47"
                  />
                </svg>
                <span className="pl-4 border-l border-main-color py-3 -my-4 flex-auto">
                  Ver perfil
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              alt="H. Alejandro David"
              src="/alejandro-david.png"
              width={800}
              height={1104}
              className="w-full max-w-md mb-6 lg:mb-0"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-100 max-w-lg"
          >
            <p className="text-base lg:text-lg mb-4">
              Héctor Alejandro David se graduó de abogado en la{" "}
              <span className="font-bold">
                Facultad de Derecho y Ciencias Sociales de la Universidad
                Nacional de Buenos Aires
              </span>
              , en 1985 con Diploma de Honor.
            </p>
            <p className="text-lg mb-4">
              En el año 2007 egresó de la Universidad Austral con el título de{" "}
              <span className="font-bold">Especialista en Derecho Penal</span> y
              en el año 2011 obtuvo el título de{" "}
              <span className="font-bold">Magíster en Derecho Penal</span>.
            </p>
            <p className="text-lg mb-4">
              Doctor en Derecho de la Universidad Austral, aprobado con la
              calificación <span className="font-bold">suma cum laude</span>.
              Tesis doctoral dirigida por el Prof. Dr. Urs Kindhäuser, Director
              del Departamento de Derecho Penal de la{" "}
              <span className="font-bold">Universidad de Bonn, Alemania</span>.
            </p>
            <p className="text-lg mb-4">
              Profesor en diferentes claustros universitarios.
            </p>
            <p className="text-lg mb-4">
              Posee una{" "}
              <span className="font-bold">
                amplia experiencia profesional en el sistema financiero
              </span>
              . Fue funcionario del Deutsche Bank AG y del BankBoston N.A..
              Trabajó en la República Federal de Alemania durante los años 1989
              y 1991.
            </p>
            <p className="text-lg">
              Domina alemán, inglés, portugués e italiano.
            </p>
          </motion.div>
        </section>
      </div>

      <NuestroEstudio></NuestroEstudio>
    </div>
  );
}
