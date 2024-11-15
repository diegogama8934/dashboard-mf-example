import "./globalStyles.css";

import { DashboardLink } from "./components";
import { pages } from "./constants";
import { BrowserRouter } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter> {/* Solo para que los elementos Link tengan un contexto, la definición de rutas estará en la root config */}
      <div>
        <h1>Nombre del microfrontend: {props.name}</h1>
        <div className="dashboardLinkContainer">
          {pages.map((page, index) => <DashboardLink key={index} {...page} />)}
        </div>
      </div>
    </BrowserRouter>
  );
}
