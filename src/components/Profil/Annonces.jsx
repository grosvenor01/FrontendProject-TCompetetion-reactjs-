import addIcon from "../../assets/icons/add.svg";
import car1 from "../../assets/car35.svg";
import car2 from "../../assets/car35(1).svg";
import _3dots from "../../assets/icons/thenounproject.png";
import { useState } from "react";

export default function Annonces() {
  const [selectedAnnonce, setSelectedAnnonce] = useState();
  const onSelectAnnonce = (annonce) => {
    setSelectedAnnonce(annonce);
  };
  const clearSelectedAnnonce = () => {
    setSelectedAnnonce();
  };
  return (
    <div className="mt-8">
      <div className="flex justify-between px-4  my-4  font-bold">
        <div>Mes annonces</div>
        <button className="text-[#268FF0] flex">
          <img alt="" src={addIcon} className="mr-2" />
          Ajouter
        </button>
      </div>
      {!selectedAnnonce && (
        <div className="flex flex-col space-y-6 overflow-y-scrollh-[35rem]">
          {annonces.map((annonce) => (
            <div
              className="flex cursor-pointer"
              onClick={() => onSelectAnnonce(annonce)}
            >
              <img alt="" src={annonce.image} className="flex-1" />
              <div className="flex-1 bg-[#D9D9D9] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between py-2 items-center px-8 ">
                    <div className="font-bold">{annonce.name}</div>
                    <img
                      alt=""
                      src={_3dots}
                      width={40}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="py-2 px-8">
                    <div className="text-gray-500 font-sm">
                      <span className="text-black font-normal">Moteur: </span>
                      {annonce.moteur}
                    </div>
                    <div className="text-gray-500 font-sm">
                      <span className="text-black font-normal">Distance: </span>
                      {annonce.distance}
                    </div>
                  </div>
                </div>
                <div className="bg-black text-white py-3 px-3 self-end w-[50%]">
                  <span className="font-bold mr-1">Prix:</span> {annonce.prix}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedAnnonce && (
        <ViewAnnonce
          annonce={selectedAnnonce}
          clearSelectedAnnonce={clearSelectedAnnonce}
        />
      )}
    </div>
  );
}

const annonces = [
  {
    image: car1,
    name: "Mercedes AMG - 2019",
    prix: "240 miliions",
    moteur: "2.0 GTI",
    transmition: "Manuelle",
    distance: "140000 km",
    typeMoteur: "Essence",
    cheveaux: 96,
    forceMaximale: 150,
  },
  {
    image: car2,
    name: "Clio 4 - 2016",
    prix: "190 miliions",
    moteur: "2.0 GTI",
    transmition: "Manuelle",
    distance: "140000 km",
    typeMoteur: "Essence",
    cheveaux: 96,
    forceMaximale: 150,
  },
  {
    image: car1,
    name: "Ford fiesta - 2014",
    prix: "100 miliions",
    moteur: "2.0 GTI",
    transmition: "Manuelle",
    distance: "140000 km",
    typeMoteur: "Essence",
    cheveaux: 96,
    forceMaximale: 150,
  },
  {
    image: car1,
    name: "Mercedes AMG - 2019",
    prix: "700 miliions",
    moteur: "2.0 GTI",
    distance: "140000 km",
    typeMoteur: "Essence",
    transmition: "Manuelle",
    cheveaux: 96,
    forceMaximale: 150,
  },
  {
    image: car2,
    name: "Clio 4 - 2016",
    prix: "1200 miliions",
    moteur: "2.0 GTI",
    distance: "140000 km",
    transmition: "Manuelle",
    typeMoteur: "Essence",
    cheveaux: 96,
    forceMaximale: 150,
  },
];

const ViewAnnonce = (props) => {
  const { annonce } = props;
  return (
    <div className="border-2 py-8 px-4 space-x-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <div className="font-bold py-2">Ford Fiesta 2014</div>
          <div className="text-[#0036BF] py-2">Caractéristiques</div>
          <div className="flex justify-between px-5">
            <ul>
              <li>Kilometrage</li>
              <li>Type - Moteur</li>
              <li>Transimition</li>
              <li>Moteur</li>
              <li>Nombre de cheveaux</li>
              <li>Force maximale</li>
            </ul>
            <ul>
              <li>{annonce.kilometrage}</li>
              <li>{annonce.typeMoteur}</li>
              <li>{annonce.transmition}</li>
              <li>{annonce.moteur}</li>
              <li>{annonce.cheveaux} cheveaux</li>
              <li>{annonce.forceMaximale}</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-[#0036BF] py-2 cursor-pointer">
            Modifier les informations
          </div>
          <img alt="" src={annonce.image} />
        </div>
      </div>
      <button
        onClick={props.clearSelectedAnnonce}
        className="mt-6 bg-[#0036BF] text-white px-4 py-2 rounded-md hover:bg-[#1d4abb]"
      >
        Return
      </button>
    </div>
  );
};
