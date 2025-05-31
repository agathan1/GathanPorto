import Marquee from "react-fast-marquee";
import { CodeXml } from "lucide-react";
import { Skill } from "@/lib/dataDummy";

export default function SkillsSection() {
  console.log("skill", Skill);
  return (
    <>
      <div className=" font-poppins text-black border-b-2 border-dashed border-black pb-6">
        <h2 className="text-3xl font-bold flex shrink-0 gap-2 ">
          <span className="my-auto drop-shadow-xl/50">
            <CodeXml />
          </span>
          Skills
        </h2>
        <p className="text-base text-slate-700/80 font-poppins">
          Coding Skills
        </p>
      </div>
      <div className=" font-poppins">
        <Marquee
          speed={50}
          autoFill
          gradient
          gradientWidth="100px"
          gradientColor="#f7f7ff"
          className="w-[50%] h-fit flex gap-8"
          direction="right"
        >
          <div className="space-x-8 flex">
            {Skill.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 w-fit border-2 p-2 border-black"
              >
                {/* Cek apakah item.icon adalah function (komponen React) */}
                {
                  typeof item.icon === "function" ? (
                    <>
                      <item.icon className="w-10 h-10" />
                      <span className="text-xs">{item.name}</span>
                    </>
                  ) : null
                  // <span className="text-sm text-gray-700">{item.icon}</span> // fallback jika hanya string
                }
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className=" font-poppins">
        <Marquee
          speed={50}
          autoFill
          gradient
          gradientWidth="100px"
          gradientColor="#f7f7ff"
          className="w-[50%] h-fit flex gap-8"
          direction="left"
        >
          <div className="space-x-8 flex">
            {Skill.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 w-fit border-2 p-2 border-black"
              >
                {/* Cek apakah item.icon adalah function (komponen React) */}
                {
                  typeof item.icon === "function" ? (
                    <>
                      <item.icon className="w-10 h-10" />
                      <span className="text-xs">{item.name}</span>
                    </>
                  ) : null
                  // <span className="text-sm text-gray-700">{item.icon}</span> // fallback jika hanya string
                }
              </div>
            ))}
          </div>
        </Marquee>
      </div>
  
    </>
  );
}

// <div
//   key={index}
//   className="flex space-x-2 items-center w-fit border-2 p-2 border-black flex-row"
// >
//     {/* <item.icon /> */}
//     <item.icon className="text-red-500 " />
//     {item.name}
//   {/* <p>
//   </p> */}
// </div>
// <div key={index} className="size-10 w-40 flex">
// <div key={index} className="flex space-x-2 size-15 items-center w-fit border-2 p-2 border-black">
//   <item.icon />
//   <p className={`${item.name === "React Query" ? "hidden" : ""}`}>
//     {item.name}
//   </p>
// </div>
// </div>


    // <div className="mt-8">
    //     <Marquee
    //       speed={50}
    //       autoFill
    //       gradient
    //       gradientWidth="100px"
    //       gradientColor="#f7f7ff"
    //       className="w-[50%] h-fit space-y-4"
    //       direction="right"
    //       // gradient
    //       // gradientWidth={200}
    //       // gradientColor="rgba(248, 251, 253, 0.8)"
    //     >
    //       <div className="space-x-12 flex">
    //         <span className="text-2xl font-bold">HTML</span>
    //         <span className="text-2xl font-bold">CSS</span>
    //         <span className="text-2xl font-bold">Javascript</span>
    //         <span className="text-2xl font-bold">React</span>
    //         <span className="text-2xl font-bold">Tailwind</span>
    //         <section className="flex gap-12">
    //           <p className="border-2 border-black p-1 rounded-[5px]">Postman</p>
    //           <p className="border-2 border-black p-1 rounded-[5px]">Python</p>
    //           <LogosReactQuery heigth={100} width={100} />
    //           <ReactIcon />
    //           {/* <p className="border-2 border-black p-1 rounded-[5px]">
    //             React Query
    //           </p> */}
    //           <p className="border-2 border-black p-1 rounded-[5px]">
    //             Tailwind
    //           </p>
    //         </section>
    //       </div>
    //     </Marquee>
    //     <Marquee>
    //       <span className="text-2xl font-bold">HTML</span>
    //       <span className="text-2xl font-bold">CSS</span>
    //       <span className="text-2xl font-bold">Javascript</span>
    //       <span className="text-2xl font-bold">React</span>
    //       <span className="text-2xl font-bold">Tailwind</span>
    //     </Marquee>
    //   </div>