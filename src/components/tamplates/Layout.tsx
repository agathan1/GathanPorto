import React from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout() {
  // export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto bg-[#f7f7ff] min-h-screen">
      {/* <div className="w-full"> */}
        <NavBar />
      {/* </div> */}
      <div className="mx-auto px-8 min-md:py-12">
        <Outlet />
      </div>
      {/* <Footer /> */}
      {/* <Navbar /> */}
      {/* {children} */}
      {/* <section className="p-8">{children}</section> */}
      {/* <div className="p-20"> */}
      {/* </div> */}
      {/* <Footer /> */}
    </main>
  );
}
