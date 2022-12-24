import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Profil/Sidebar";
import Annonces from "../components/Profil/Annonces";
import Commentaires from "../components/Profil/Commentaires";

export default function Profil() {
  return (
    <>
      <Navbar />
      <div className="flex px-12 space-x-24 mb-16">
        <div className="flex-1">
          <Sidebar />
        </div>
        <div className="flex-[2] bg-[#F3F3F3] px-6 py-4">
          <Tab.Group>
            <Tab.List className="flex justify-center space-x-16 rounded-xl p-1">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className={selected && "text-blue-500"}>
                    Annonces
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className={selected && "text-blue-500"}>
                    Commentaires
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <Annonces />
              </Tab.Panel>
              <Tab.Panel>
                <Commentaires />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
