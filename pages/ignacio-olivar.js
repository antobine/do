import Image from "next/image";
import Link from "next/link";
import Header from "/components/header";
import NuestroEstudio from "/components/nuestro-estudio";

import { motion } from "framer-motion";

export default function IgnacioOlivar() {
  return (
    <div className="">
      <div className="bg-almost-white bg-about-law bg-contain bg-right-bottom bg-no-repeat px-6 lg:px-0">
        <Header />
        <div className="lg:container mx-auto mt-12 mb-12">
          <p className="text-main-color uppercase">Nuestros Profesionales</p>
        </div>
        <section className="lg:flex lg:container mx-auto gap-6 pb-48">
          <div className="min-w-80 mb-6">
            <h2 className="mb-3 text-5xl">
              <span className="text-xl block">Ignacio</span>Olivar
            </h2>

            <p className="mb-4">
              olivar@david-olivar.com
              <br />
              11 5400 2499
            </p>

            <Link
              passHref
              href="https://www.linkedin.com/in/ignacio-olivar-562b9ba2/"
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
          </div>

          <motion.div>
            <Image
              alt="Ignacio Olivar"
              src="/ignacio-olivar.png"
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
              Abogado con{" "}
              <span className="font-bold">
                especialización en Derecho Penal por la Facultad de Derecho y
                Ciencias Sociales
              </span>{" "}
              de la Universidad de Buenos Aires.
            </p>
            <p className="text-lg mb-4">
              <span className="font-bold">Magister en Derecho Penal</span> por
              la Universidad Austral.
            </p>
            <p className="text-lg mb-4">
              Profesor Coordinador del Área de Derecho Penal de la Clínica
              Jurídica de la{" "}
              <span className="font-bold">
                Facultad de Derecho de la Universidad Austral
              </span>
              . Profesor de Derecho Penal II y Práctica Profesional II en la
              <span className="font-bold">UNLAM</span>.
            </p>
            <p className="text-lg mb-4">
              Autor de{" "}
              <span className="font-bold">publicaciones y ponencias</span> en el
              ámbito nacional e internacional. Evaluador externo de distintas
              Universidades.
            </p>
            <p className="text-lg mb-4">
              Se desempeñó en la{" "}
              <span className="font-bold">
                Justicia Criminal y Correccional en el Poder Judicial de la
                Nación
              </span>{" "}
              durante 10 años, hasta su paso al sector privado.
            </p>
          </motion.div>
        </section>
      </div>

      <NuestroEstudio></NuestroEstudio>
    </div>
  );
}
