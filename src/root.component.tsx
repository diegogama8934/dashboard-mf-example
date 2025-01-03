import "./globalStyles.css";

import { DashboardLink } from "./components";
import { pages } from "./constants";
import { BrowserRouter } from "react-router-dom";
import { LogoutButton } from "./components/LogoutButton";

import { alertFromKronoxUI } from "@kronox/ui";

export default function Root({ logout, authToken, name }) {

  return (
    <BrowserRouter>
      <div className="flex flex-col gap-4">
        <h1>Nombre del microfrontend: {name}</h1>
        <div className="dashboardLinkContainer">
          {pages.map((page, index) => <DashboardLink key={index} {...page} />)}
        </div>
        <LogoutButton logout={logout} />
        <button
          className="px-6 py-4 bg-amber-500 rounded-md w-fit"
          onClick={() => { alertFromKronoxUI() }}
        >
          Funcion ejecutada por un modulo de utilidad
        </button>
      </div>
    </BrowserRouter>
  );
}
