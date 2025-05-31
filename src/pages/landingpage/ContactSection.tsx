import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { contact } from "@/lib/dataDummy";
import FormContact from "@/components/tamplates/FormContact";

const colorClasses = {
  black: {
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
    button: "bg-purple-500 hover:bg-purple-600",
  },
  "blue-300/10": {
    bg: "bg-blue-300/10",
    text: "text-blue-500",
    border: "border-blue-500",
    avatar: "bg-blue-300/10",
    button: "bg-blue-500 hover:bg-blue-600",
  },
};

interface CardContentProps {
  header: string;
  main: string;
  button: string;
  icon?: React.ReactElement;
  link?: string;
  // icon: string;
  color?: keyof typeof colorClasses;
}

export const CardContent = ({
  header,
  main,
  button,
  color,
  icon,
  link,
}: CardContentProps) => {
  const styles = colorClasses[color ?? "black"];
  return (
    <Card
      className={`flex flex-row justify-between gap-4 p-8 font-poppins  ${styles.bg} border-2 ${styles.border}  shadow-[6px_6px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] duration-150 hover:shadow-none  rounded-none`}
    >
      <section className="space-y-4 basis-2/3">
        <h3 className={`text-2xl font-semibold ${styles.text}`}>{header}</h3>
        <p className={`text-base ${styles.text}`}>{main}</p>
        <Button
          className={`${styles.button} hover:cursor-pointer`}
          onClick={() => {
            window.open(link, "_blank");
          }}
        >
          {button}
        </Button>
      </section>
      <section className="flex items-end">
        <Avatar className={`${styles.avatar} p-8 h-24 w-24`}>
          <AvatarImage className="h-full w-full bg-amber-400">
            {icon}
          </AvatarImage>
          {/* {icon} */}
        </Avatar>
      </section>
    </Card>
  );
};

export default function ContactSection() {
  return (
    <>
      <div className="border-b-2 border-dashed border-black pb-8">
        <h2 className="text-3xl font-poppins font-bold mb-2">Contact</h2>
        <p className="text-base text-slate-700/80 font-poppins">
          Let`s get in touch
        </p>
      </div>
      <section className="space-y-8">
        <div className="grid grid-cols-2 max-md:grid-cols-1 mt-8 gap-8">
          {contact.map((item, index) => {
            let color: "black" | "purple-300/50" | "blue-300/10";

            if (item.name === "Instagram") color = "purple-300/50";
            else if (item.name === "LinkedIn") color = "blue-300/10";
            return (
              <CardContent
                key={index}
                main={item.message}
                header={item.name}
                button={item.button}
                color={color}
                link={item.link}
                // icon={item.icon}
              />
            );
          })}
        </div>
        <FormContact />
      </section>
    </>
  );
}
