import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { Pengalaman } from "@/lib/dataDummy";

export default function JourneySection() {
  return (
    <>
      <div className=" font-poppins text-black">
        <h2 className="text-3xl font-bold">Experience</h2>
        <p className="text-base text-slate-700/80 font-poppins">
          My professional Experience journey
        </p>
      </div>
      <div className="mt-8 border-y-10 border-dashed py-8 border-black">
        {Pengalaman.map((item) => (
          <Card className=" bg-transparent border-none shadow-none p-0 mb-8">
            <Card className="border-2 bg-[#bdd5ea]/30 border-black shadow-[5px_5px_0px_black] hover:translate-x-[1px] hover:translate-y-[1px] duration-150 hover:shadow-none">
              <CardHeader className="font-poppins">
                <h2 className="text-base font-bold bg-black text-white p-2 w-fit">
                  {item.title}
                </h2>
                <h3>{item.masa_kerja}</h3>
                <h4>{item.perusahaan}</h4>
              </CardHeader>

              <CardContent className="font-poppins w-[80%] ">
                <section className="border-l-4 border-black">
                  <h5 className="text-[14px]  ml-4">{item.deskripsi}</h5>
                </section>
              </CardContent>
              <CardFooter className="font-poppins max-md:flex-col max-md:items-start gap-3 text-[12px] w-fit">
                <section className="flex gap-2 flex-wrap">
                  {item.stack.map((item) => (
                    <p className="border-2 border-black p-1 rounded-[5px]">
                      {item}
                    </p>
                  ))}
                </section>
              </CardFooter>
            </Card>
          </Card>
        ))}
      </div>
    </>
  );
}
