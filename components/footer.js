import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-main-color">
      <div className="px-6 container lg:mx-auto my-16 lg:flex justify-between">
        <div className="text-[rgba(242,242,242,0.6)]">
          <Image
            src="/do-david-olivar-logo-line.png"
            width={404}
            height={50}
            alt="David & Olivar Abogados"
            className="w-100 mb-6"
          />
          <div className="lg:flex gap-6 mb-4">
            <p>Reconquista 336. Piso 6to P C1003. Ciudad de Buenos Aires.</p>
            <div className="flex gap-2">
              <svg
                width="24"
                height="23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.528 22.735c-.923 0-1.83-.24-2.63-.698l-.113-.064A35.088 35.088 0 0 1 2.13 9.587l-.59-.982a5.244 5.244 0 0 1 .79-6.413l1.174-1.174a2.53 2.53 0 0 1 3.576 0l2.585 2.586a2.538 2.538 0 0 1 .416 3.028L9.11 8.358a.19.19 0 0 0 .032.229l5.757 5.757a.193.193 0 0 0 .23.03l1.723-.97.001-.002a2.54 2.54 0 0 1 3.029.416l2.586 2.588a2.53 2.53 0 0 1 0 3.575l-1.225 1.225a5.244 5.244 0 0 1-3.714 1.53ZM5.292 2.072a.733.733 0 0 0-.52.215L3.598 3.46a3.452 3.452 0 0 0-.52 4.22l.59.982A33.288 33.288 0 0 0 15.67 20.413l.113.064c1.368.783 3.09.561 4.189-.54l1.226-1.224a.737.737 0 0 0 0-1.04l-2.587-2.588a.739.739 0 0 0-.881-.12l-1.724.97a1.992 1.992 0 0 1-2.377-.325L7.873 9.854a1.989 1.989 0 0 1-.325-2.377l.972-1.725a.739.739 0 0 0-.122-.88L5.812 2.287a.733.733 0 0 0-.52-.215Z"
                  fill="#999DA0"
                />
              </svg>
              <p>11 5400 2499</p>
            </div>
          </div>
          <ul className="mb-12 lg:flex gap-2 lg:gap-6 lg:mb-0">
            <li className="mb-4 flex gap-2 lg:gap-6 lg:mb-0">
              <svg
                width="28"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 .01c7.73 0 14 6.27 14 14s-6.27 14-14 14-14-6.27-14-14 6.27-14 14-14Zm-1.126 25.504c.06 0 .122 0 .213.03V18.94c-1.583-.03-3.013-.06-4.322-.152 1.157 3.56 3.318 5.935 4.109 6.726Zm2.252 0c.822-.822 2.952-3.196 4.109-6.726-1.279.091-2.74.152-4.322.152v6.604c.06 0 .122-.03.213-.03Zm10.44-11.505c0-.76-.092-1.521-.214-2.252-.67-.121-1.948-.304-3.743-.487.152.883.243 1.796.243 2.77s-.091 1.887-.213 2.74c1.765-.184 3.074-.366 3.744-.488.09-.76.182-1.522.182-2.283Zm-5.57 0c0-1.034-.122-2.008-.305-2.921-1.4-.091-2.982-.183-4.778-.183v6.209c1.765-.03 3.378-.091 4.809-.213.152-.883.274-1.857.274-2.892ZM12.904 2.505c-.821.822-2.921 3.257-4.108 6.726a60.092 60.092 0 0 1 4.291-.152V2.475c-.06 0-.122.03-.183.03Zm2.009-.03v6.604c1.583.03 3.013.061 4.291.152-1.156-3.47-3.287-5.904-4.078-6.726-.091 0-.152-.03-.213-.03Zm-1.826 14.639v-6.209c-1.765.03-3.378.091-4.778.183a14.886 14.886 0 0 0-.03 5.844c1.4.09 3.012.151 4.808.182ZM6.422 11.27c-1.796.183-3.074.366-3.744.487-.152.73-.243 1.492-.243 2.252 0 .761.091 1.522.213 2.253.67.121 1.948.304 3.743.487a16.226 16.226 0 0 1-.213-2.77c0-.913.092-1.856.244-2.709ZM3.226 9.81a84.21 84.21 0 0 1 3.622-.427c.73-2.617 2.009-4.717 3.074-6.208A11.6 11.6 0 0 0 3.226 9.81Zm14.852-6.635c1.096 1.46 2.344 3.56 3.074 6.178 1.522.122 2.74.304 3.622.426a11.722 11.722 0 0 0-6.696-6.604Zm6.696 15.034c-.852.122-2.07.274-3.591.427a18.84 18.84 0 0 1-3.044 6.178 11.707 11.707 0 0 0 6.635-6.605ZM9.86 24.814a18.656 18.656 0 0 1-3.044-6.148c-1.521-.122-2.739-.304-3.59-.426a11.745 11.745 0 0 0 6.634 6.574Z"
                  fill="#999DA0"
                />
              </svg>
              <p>david-olivar.com.ar</p>
            </li>
            <li className="flex gap-2 lg:gap-6">
              <svg
                width="26"
                height="23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M22.454 2.055H3.546a2.37 2.37 0 0 0-2.363 2.364V18.6a2.37 2.37 0 0 0 2.363 2.364h18.91a2.37 2.37 0 0 0 2.363-2.364V4.42a2.37 2.37 0 0 0-2.364-2.364Z"
                  stroke="#999DA0"
                  strokeWidth="1.182"
                  strokeLinecap="round"
                  trokeLinejoin="round"
                />
                <path
                  d="M1.182 4.419 13 12.69 24.818 4.42"
                  stroke="#999DA0"
                  strokeWidth="1.182"
                  strokeLinecap="round"
                  trokeLinejoin="round"
                />
              </svg>
              <p>david@davidolivar.com</p>
            </li>
            <li className="flex gap-6">
              <p>olivar@davidolivar.com</p>
            </li>
          </ul>
        </div>

        <ul className="flex flex-col justify-center gap-4 pt-12  text-white border-white border-t md:px-6 lg:pt-0 lg:border-l lg:pl-6">
          <li>
            <Link href="/#nuestro-estudio">Nuestro Estudio</Link>
          </li>
          <li>
            <Link href="/#el-equipo">El Equipo</Link>
          </li>
          <li>
            <Link href="/#areas-de-practica">Áreas de práctica</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
