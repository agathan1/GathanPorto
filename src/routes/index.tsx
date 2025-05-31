import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from '@/components/tamplates/Layout'
// import ROUTES_MENU  from "./routesMenu";
// import { RouteObject } from 'react-router-dom';

// const Routes = () => {
//     return <div>Routes</div>
// }


const router = createBrowserRouter(
  [
    {
      id: "root",
      path: "/",
      element: <Layout />,
      errorElement: <div>Halaman tidak ditemukan</div>,
      children: [
        {
          index: true,
          async lazy() {
            const LandingPage = await import("@/pages/landingpage/LandingPage");
            return { element: <LandingPage.default /> };
          },
        },
        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ],
//   {
//     basename: "/", // bisa diubah jadi "/olympiad" kalau di-deploy di subfolder
//   }
);

export default router

// export default function Routes() {
//     return useRoutes(router);
// }