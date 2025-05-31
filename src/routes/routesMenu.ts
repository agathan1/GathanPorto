import react, { type ComponentType } from "react";
import {HOME_PAGE} from "./route"

interface Route {
    path: string;
    element: React.LazyExoticComponent<ComponentType>;
}

const LandingPage = react.lazy(() => import("../pages/landingpage/LandingPage"));

const ROUTES_MENU: Array<Route> = [
    {
        path: HOME_PAGE,
        element: LandingPage,
    },
];

export default ROUTES_MENU