import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";
import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <div className="bg-[#007FF3] text-white">
      <Navbar inLanding />
      <div className="mb-16 flex">
        <div className="flex-1 py-8 px-12">
          <div className="py-8 font-bold">Une meilleure façon de vendre</div>
          <div>
            Si vous cherchez une platform pour achat ou vente des voitures,
            alors vous êtes dans le bon chemin
          </div>
          <button className="px-4 my-5 py-3 font-sm bg-white text-black rounded-lg">
            Aller explorer
          </button>
          <div className="flex space-x-12">
            <div className="flex">
              <StarIcon aria-hidden="true" color="yellow" />
              <StarIcon aria-hidden="true" color="yellow" />{" "}
              <StarIcon aria-hidden="true" color="yellow" />{" "}
              <StarIcon aria-hidden="true" color="yellow" />{" "}
              <StarIcon aria-hidden="true" color="yellow" />
              <StarIcon
                className="w-1/3 h-1/3"
                aria-hidden="true"
                color="yellow"
              />
            </div>
            <div className="font-bold text-xl">
              L'un des plus grand sites d'achats dans l'Algérie
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
