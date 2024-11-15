import { Link } from "react-router-dom";
import { DashboardLinkInterface } from "../interfaces";
import "../globalStyles.css"


export function DashboardLink({ href, pageName, icon }: DashboardLinkInterface) {

  
  return <Link className="dashboardLink" to={href}>{pageName}</Link>
}