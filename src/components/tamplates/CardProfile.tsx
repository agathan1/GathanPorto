import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "../ui/card";
import { Button } from "../ui/button";
import CardPicture from "../moleculs/CardPicture";
import Me from "../../assets/MePicture.jpg"
import { Mail, MapPin  } from 'lucide-react';


export default function CardProfile() {
  return (
    <Card className=" rounded-none p-8 bg-[#bdd5ea]/30 border-black shadow-[7px_7px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] duration-150 hover:shadow-none ">
      <main className="flex flex-row-reverse max-md:flex-col items-center justify-center max-md:space-y-10 py-8">
        <div className="max-md:mx-auto relative min-md:bottom-15 min-md:left-2">
          <CardPicture image={Me} />
        </div>
        <div>
          <CardHeader className="p-0">
            <div className="flex max-md:flex-col justify-between space-y-4">
              <CardTitle className="text-3xl font-bold font-poppins origin-top-left rotate-[1.2deg]  max-md:text-start max-md:text-2xl">
                Agathan Tahtawi Aslam
              </CardTitle>
              {/* <div className="max-md:mx-auto relative min-md:bottom-5 min-md:left-2">
            <CardPicture />
          </div> */}
            </div>
            <section className="min-md:z-10 min-md:relative min-md:bottom-8 mt-8">
              <CardDescription className="text-xl font-semibold font-poppins max-[650px]:text-left">
                Front-End Developer
              </CardDescription>
              <div className="flex max-md:flex-col space-x-6 space-y-2 mt-2 max-[650px]:text-left max-md:mb-2">
                <CardDescription className="text-[12px] font-semibold font-poppins flex gap-2">
                  <MapPin className="size-4"/>
                  Jakarta Timur, DKI JAKARTA, INDONESIA
                </CardDescription>
                <CardDescription className="text-[12px] font-semibold font-poppins flex gap-2">
                  <Mail className="size-4"/>
                  agathantahtawia@gmail.com
                </CardDescription>
              </div>
            </section>
          </CardHeader>
          <CardContent className="p-0 max-md:text-sm min-[650px]:w-[70%] font-semibold font-poppins max-[650px]:text-left ">
            <section className="max-md:text-[12px] mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              maiores molestiae, quia ducimus placeat minus quasi eligendi
              laborum atque iure?
            </section>
          </CardContent>
          <CardFooter className="p-0 flex gap-2  min-[650px]:mt-6 max-md:flex-col max-md:items-start">
            {/* <Button className="rounded-none drop-shadow-xl/70">
              Download CV
            </Button> */}
            <Button className="rounded-none w-32 text-white px-6 py-2 font-semibold flex items-center gap-2 shadow-[3px_3px_0px_silver] hover:translate-x-[1px] hover:translate-y-[1px] duration-150 active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
              Download CV
            </Button>
            <Button
              variant={"outline"}
              className="rounded-none w-32 border-2 border-black bg-white text-black px-6 py-2 font-semibold flex items-center gap-2 shadow-[3px_3px_0px_black] hover:translate-x-[1px] hover:translate-y-[1px] duration-150 active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              Contact Me
            </Button>
          </CardFooter>
        </div>
        
      </main>
    </Card>
  );
}

{
  /* <CardHeader className="p-0">
        <div className="flex max-md:flex-col justify-between space-y-4">
          <CardTitle className="text-3xl font-bold font-poppins origin-top-left rotate-[1.2deg] p-2 max-[650px]:text-center">
            Agathan Tahtawi Aslam
          </CardTitle>
          <div className="max-md:mx-auto relative min-md:bottom-5 min-md:left-2">
            <CardPicture />
          </div>
        </div>
        <section className="min-md:z-10 min-md:relative min-md:bottom-8 mt-8">
          <CardDescription className="text-xl font-semibold font-poppins max-[650px]:text-left">
            Front-End Developer
          </CardDescription>
          <div className="flex max-[650px]:flex-col gap-2 mt-2 max-[650px]:text-left">
            <CardDescription className="text-[12px] font-semibold font-poppins">
              Jakarta Timur, DKI JAKARTA, INDONESIA
            </CardDescription>
            <CardDescription className="text-[12px] font-semibold font-poppins">
              agathantahtawia@gmail.com
            </CardDescription>
          </div>
        </section>
      </CardHeader>
      <CardContent className="p-0 max-md:text-sm min-[650px]:w-[70%] font-semibold font-poppins max-[650px]:text-left ">
        <section className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos maiores
          molestiae, quia ducimus placeat minus quasi eligendi laborum atque
          iure?
        </section>
      </CardContent>
      <CardFooter className="p-0 flex gap-2  min-[650px]:mt-6 max-md:flex-col max-md:items-start">
        {/* <Button className="rounded-none drop-shadow-xl/70">Download CV</Button> */
}
//   <Button className="rounded-none w-32 text-white px-6 py-2 font-semibold flex items-center gap-2 shadow-[3px_3px_0px_silver] hover:translate-x-[1px] hover:translate-y-[1px] duration-150 active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
//     Download CV
//   </Button>
//   <Button
//     variant={"outline"}
//     className="rounded-none w-32 border-2 border-black bg-white text-black px-6 py-2 font-semibold flex items-center gap-2 shadow-[3px_3px_0px_black] hover:translate-x-[1px] hover:translate-y-[1px] duration-150 active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
//   >
//     Contact Me
//   </Button>
// </CardFooter> */}
