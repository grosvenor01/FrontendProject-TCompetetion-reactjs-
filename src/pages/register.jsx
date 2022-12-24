import { Link } from "react-router-dom";
import carBg from "../assets/car.svg";
import google from "../assets/google.svg";

export default function Register() {
  return (
    <div className="flex">
      <img alt="perfect car" src={carBg} className="h-screen" />

      <div className="flex-1 flex flex-col justify-evenly py-12 items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="font-bold mb-2">Inscription</div>
          <div>Entrer vos information pour connecter</div>
        </div>
        <div class="flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div class="max-w-md w-full space-y-8">
            <form class="mt-8 space-y-6">
              <input type="hidden" name="remember" value="True" />
              <div class="shadow-sm space-y-4">
                <div>
                  <label for="username" class="sr-only">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="username"
                    autocomplete="username"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                  />
                </div>
                <div>
                  <label for="email-address" class="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label for="email-address" class="sr-only">
                    Numero de telephone
                  </label>
                  <input
                    id="num"
                    name="num"
                    type="num"
                    autocomplete="num"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Numero de telephone"
                  />
                </div>
                <div>
                  <label for="password" class="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#007FF3] hover:bg-[#0b6fcc] focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  S'inscrire
                </button>
                <button
                  type="submit"
                  class="group relative w-full flex justify-center my-4 py-2 px-4 border border-black text-sm rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <img alt="google" src={google} width={20} />
                  </span>
                  Connecter avec Google
                </button>
              </div>
            </form>
            <div className="">
              Vous avez deja un compte ?
              <Link to="/">
                <span className="cursor-pointer text-[#007FF3] mx-4">
                  Connecter vous ici
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
