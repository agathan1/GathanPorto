import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Instagram, Linkedin } from "lucide-react";
import GithubIcon from "@/assets/icons/GithubIcon";
import React, { useEffect } from "react";
import { GithubLogo  } from "@phosphor-icons/react";

const colorClasses = {
  white: {
    bg: "bg-transparent",
    text: "text-black",
    border: "border-black",
    avatar: "bg-black",
    button: "bg-black",
  },
  "purple-300/50": {
    bg: "bg-purple-300/50",
    text: "text-purple-500",
    border: "border-purple-500",
    avatar: "bg-purple-300/10",
    button: "bg-purple-500",
  },
  "blue-300/10": {
    bg: "bg-blue-300/10",
    text: "text-blue-500",
    border: "border-blue-500",
    avatar: "bg-blue-300/10",
    button: "bg-blue-500",
  },
};

interface CardContentProps {
  header: string;
  main: string;
  button: string;
  icon: React.ReactElement;
  // icon: string;
  color?: keyof typeof colorClasses;
}

export const CardContent = ({
  header,
  main,
  button,
  color,
  icon,
}: CardContentProps) => {
  const styles = colorClasses[color];
  return (
    <Card
      className={`flex flex-row justify-between gap-4 p-8 font-poppins w-full h-max ${styles.bg} border-2 ${styles.border}`}
    >
      <section className="space-y-4 basis-2/3">
        <h3 className={`text-2xl font-semibold ${styles.text}`}>{header}</h3>
        <p className={`text-base ${styles.text}`}>{main}</p>
        <Button className={`${styles.button}`}>{button}</Button>
      </section>
      <section className="flex items-end">
        <Avatar className={`${styles.avatar} p-8 h-24 w-24`}>
            {/* dscbdo */}
          {/* <AvatarFallback>CN</AvatarFallback> */}
          <AvatarImage className="h-full w-full bg-amber-400">{icon}</AvatarImage>
          {/* {icon} */}
        </Avatar>
      </section>
    </Card>
  );
};

{
  /* <Linkedin size={32} strokeWidth={1.25} /> */
}

const menus = [
  {
    header: "Github",
    main: "Explore the source code for all my projects on GitHub.",
    button: "Go to Github",
    icon: GithubLogo,
  },
  {
    header: "LinkedIn",
    main: "Connect for collaboration or explore my professional experience.",
    button: "Let's connect",
    icon: Linkedin,
  },
  {
    header: "Instagram",
    main: "Silahkan kita berteman, supaya skdbsldjvbs",
    button: "Go to Instagram",
    icon: Instagram,
  },
  // {
  //     header: "Github",
  //     main: "Silahkan kita berteman, supaya skdbsldjvbs",
  //     button: "Go to contact"
  // },
];

export default function ContactSection() {
  return (
    <>
      <div className="border-b-2 border-dashed border-black pb-8">
        <h2 className="text-3xl font-poppins font-bold mb-2">Contact</h2>
        <p className="text-base text-slate-700/80 font-poppins bg-purple-300/10">
          Let`s get in touch
          <GithubLogo />
        </p>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 mt-8 gap-8">
        {menus.map((item, index) => {
          let color: "black" | "purple-300/50" | "blue-300/10" = "white";

          if (item.header === "Instagram") color = "purple-300/50";
          else if (item.header === "LinkedIn") color = "blue-300/10";
          return (
            // {[...Array(4)].map((item, index) => (
            //   <div
            //     key={index}
            //     className="border-2 border-dashed border-black rounded-md p-4 mb-4"
            //   >
            //     Contact {item}
            //   </div>
            <CardContent
              main={item.main}
              header={item.header}
              button={item.button}
              color={color}
              icon={item.icon}
            />
          );
        })}
      </div>
    </>
  );
}
