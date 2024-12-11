import React from "react";
import { NavLink } from "react-router-dom";

interface Part1Props {
  // Add any props you need for your component here
}

const Part1: React.FC<Part1Props> = (
  {
    /* destructure props here */
  }
) => {
  // Add your component logic here

  return (
    <>
      <div className="flex flex-wrap w-full py-12 md:py-16">
        <div className="w-full p-2 md:w-1/2">
          <a
            href="https://surveysapp.acidjelly.com/"
            target="_blank"
            className="relative flex flex-col items-center justify-center h-52 cursor-pointer"
            rel="noreferrer"
          >
            <img
              className="absolute h-full w-full object-cover object-bottom rounded-3xl"
              src="/images/services/portada_modelos_de_encuestas.png"
              alt="under_construction"
            />
            <div className="flex flex-col items-center justify-center z-10 h-full w-full text-center bg-stone-300/70 dark:bg-slate-900/80 rounded-3xl">
              <div className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                <h1>App de examenes</h1>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                <h2>Listo para usar</h2>
              </div>
              <div className="font-bold text-gray-900 dark:text-gray-50 w-full pl-4">
                <small>
                  Stack:
                  <span className="p-1"></span>
                  <em>{"React(Ts) + Netcore + Net 7"}</em>
                </small>
              </div>
            </div>
          </a>
        </div>
        <div className="w-full p-2 md:w-1/2">
          <NavLink
            to="/chatbot"
            className="relative flex flex-col items-center justify-center h-52 cursor-pointer"
          >
            <img
              className="absolute h-full w-full object-cover object-left-bottom rounded-3xl"
              src="/images/services/chatbot_service.png"
              alt="under_construction"
            />
            <div className="text-center flex flex-col items-center justify-center z-10 h-full w-full bg-stone-300/70 dark:bg-slate-900/80 rounded-3xl">
              <div className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                <h1>Chatbot</h1>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                <h2>En construcción</h2>
              </div>
              <div className="font-bold text-gray-900 dark:text-gray-50 w-full pl-4">
                <small>
                  Stack:
                  <span className="p-1"></span>
                  <em>
                    {
                      "NodeJs(Express,Ts) + Chat GPT + React(Ts,Redux) + Django + Any Database"
                    }
                  </em>
                </small>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="w-full p-2 md:w-1/2">
          <a
            href="https://anguland.acidjelly.com/"
            target="_blank"
            className="relative flex flex-col items-center justify-center h-52 cursor-pointer"
            rel="noreferrer"
          >
            <img
              className="absolute h-full w-full object-cover object-left-bottom rounded-3xl"
              src="/images/services/angular_landing_page.png"
              alt="under_construction"
            />
            <div className="text-center flex flex-col items-center justify-center z-10 h-full w-full bg-stone-300/70 dark:bg-slate-900/80 rounded-3xl">
              <div className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                <h1>Landing Page Empresarial</h1>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                <h2>Hecho en angular</h2>
              </div>
              <div className="font-bold text-gray-900 dark:text-gray-50 w-full pl-4">
                <small>
                  Stack:
                  <span className="p-1"></span>
                  <em>Angular + Node + MongoDb</em>
                </small>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="flex flex-wrap w-full py-12 md:py-16 text-stone-50">
        <div className="flex flex-wrap w-full md:w-1/2 items-center">
          <div className="m-auto">
            <h2 className="text-2xl text-left w-full font-bold">
              Gestionamos tu ingreso a Google Maps aun en los lugares más
              complicados.
            </h2>
            <p className="mr-auto">Entregamos exactamente lo que quieres</p>
          </div>
        </div>
        <div className="flex flex-wrap w-full md:w-1/2 h-full">
          <iframe
            title="map"
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d776.811972929213!2d-76.99707689722705!3d-12.081181672498799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9dfbc23e961%3A0xe04f55f77edd16b2!2sAcid%20Jelly!5e0!3m2!1ses!2spe!4v1696753828472!5m2!1ses!2spe"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 relative flex items-center justify-center md:h-96 h-40">
          <img
            src="/images/logos/jenkins.svg"
            alt="logo"
            className="relative w-20 z-10"
          />
          <img
            src="/images/backgrounds/jenkins.png"
            alt="logo"
            className="absolute top-0 h-full w-full object-cover"
          />
        </div>
        <div className="p-4 w-full md:w-1/2 flex items-center justify-center text-right">
          <div className="w-full h-full relative flex flex-col items-center justify-center dark:text-stone-50">
            <h2 className="font-bold text-xl md:text-3xl">
              Te entregamos un Jenkins o automatizador
            </h2>
            <p className="text-sm md:text-lg">
              Esto te permitira automatizar tus procesos de desarrollo, o si no
              eres desarralodor, te permitira automatizar tus procesos de
              negocio. Como recibir nuevas actualizaciones nuestras o de tus
              proveedores y esperar al momento adecuado para implementarlos. Asi
              no arriesgas tu negocio a errores en la applicacion.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative flex flex-wrap items-center justify-center p-2 text-slate-700 dark:text-stone-50">
          <div className="w-full">
            <h3 className="font-bold text-lg py-4">
              Conoce más sobre Jenkins y las mejores practicas de DevOps
            </h3>
          </div>
          <img
            src="/images/backgrounds/jenkins_2.png"
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="w-full md:w-1/2 relative flex flex-wrap items-center justify-center p-2">
          <img
            src="/images/icons/jenkins_play.png"
            alt="logo"
            className="h-20 rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Part1;
