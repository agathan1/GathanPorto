import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

export default function JourneySection() {
  return (
    <>
      <div className=" font-poppins text-black border-b-2 border-dashed border-black pb-8">
        <h2 className="text-3xl font-bold">Experience</h2>
        <p className="text-base text-slate-700/80 font-poppins">
          My professional Experience journey
        </p>
      </div>
      <div className="mt-8 border-b-2 border-dashed border-black">
        <Card className=" bg-transparent border-none shadow-none p-0">
          <Card className="border-2 bg-[#bdd5ea]/30 border-black shadow-[5px_5px_0px_black] hover:translate-x-[1px] hover:translate-y-[1px] duration-150 hover:shadow-none">
            <CardHeader className="font-poppins">
              <h2 className="text-base font-bold bg-black text-white p-2 w-fit">
                Full Stack Developer
              </h2>
              <h3>Mei 2024 - Mei 2025</h3>
              <h4>Yayasan Karya Bakti UT, Jakarta</h4>
            </CardHeader>
            <CardContent className="font-poppins w-[80%] ">
              <section className="border-l-4 border-black">
                <h5 className="text-[14px]  ml-4">
                  Working on various website and web application projects
                  according to client requirements with technology tailored to
                  project needs.
                </h5>
              </section>
            </CardContent>
            <CardFooter className="font-poppins flex max-md:flex-col max-md:items-start gap-3 text-[12px] w-fit">
              {/* component card stack */}
              <section className="flex gap-2">
                <p className="border-2 border-black p-1 rounded-[5px]">React</p>
                <p className="border-2 border-black p-1 rounded-[5px]">Odoo</p>
                <p className="border-2 border-black p-1 rounded-[5px]">
                  Postgres
                </p>
              </section>
              <section className="flex gap-2">
                <p className="border-2 border-black p-1 rounded-[5px] h-fit">
                  Postman
                </p>
                <p className="border-2 border-black p-1 rounded-[5px] h-fit">
                  Python
                </p>
                <p className="border-2 border-black p-1 rounded-[5px] h-fit">
                  React Query
                </p>
                <p className="border-2 border-black p-1 rounded-[5px] h-fit">
                  Tailwind
                </p>
              </section>
            </CardFooter>
          </Card>
          <Card className="border-2 bg-[#bdd5ea]/30 border-black shadow-[5px_5px_0px_black] hover:translate-x-[1px] hover:translate-y-[1px] duration-150 hover:shadow-none">
            <CardHeader className="font-poppins">
              <h2 className="text-base font-bold bg-black text-white p-2 w-fit">
                Junior Web Developer
              </h2>
              <h3>Mei 2024 - Mei 2025</h3>
              <h4>PT United Tractors Tbk., Jakarta</h4>
            </CardHeader>
            <CardContent className="font-poppins w-[80%] ">
              <section className="border-l-4 border-black">
                <h5 className="text-[14px] ml-4 ">
                  Working on various website and web application projects
                  according to client requirements with technology tailored to
                  project needs.
                </h5>
              </section>
            </CardContent>
            <CardFooter className="font-poppins">stack technology</CardFooter>
          </Card>
        </Card>
      </div>
    </>
  );
}
