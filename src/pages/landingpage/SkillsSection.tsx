import React from "react";
import Marquee from "react-fast-marquee";
import { CodeXml } from "lucide-react";

export default function SkillsSection() {
  return (
    <>
      <div className=" font-poppins text-black border-b-2 border-dashed border-black pb-6">
        <h2 className="text-3xl font-bold flex shrink-0 gap-2">
          <span className="my-auto">
            <CodeXml />
          </span>
          Skills
        </h2>
        <p className="text-base text-slate-700/80 font-poppins">
          Coding Skills
        </p>
      </div>
      <div className="mt-8">
        <Marquee
          speed={50}
          autoFill
          gradient
          gradientWidth="100px"
          gradientColor="#f7f7ff"
          className="w-[50%] h-fit space-y-4"
          direction="right"
          // gradient
          // gradientWidth={200}
          // gradientColor="rgba(248, 251, 253, 0.8)"
        >
          <div className="space-x-12 flex">
            <span className="text-2xl font-bold">HTML</span>
            <span className="text-2xl font-bold">CSS</span>
            <span className="text-2xl font-bold">Javascript</span>
            <span className="text-2xl font-bold">React</span>
            <span className="text-2xl font-bold">Tailwind</span>
            <section className="flex gap-12">
              <p className="border-2 border-black p-1 rounded-[5px]">Postman</p>
              <p className="border-2 border-black p-1 rounded-[5px]">Python</p>
              <p className="border-2 border-black p-1 rounded-[5px]">
                React Query
              </p>
              <p className="border-2 border-black p-1 rounded-[5px]">
                Tailwind
              </p>
            </section>
          </div>
        </Marquee>
        <Marquee>
          <span className="text-2xl font-bold">HTML</span>
          <span className="text-2xl font-bold">CSS</span>
          <span className="text-2xl font-bold">Javascript</span>
          <span className="text-2xl font-bold">React</span>
          <span className="text-2xl font-bold">Tailwind</span>
        </Marquee>
      </div>
    </>
  );
}
