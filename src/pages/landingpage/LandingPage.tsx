import CardProfile from "@/components/tamplates/CardProfile";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import ContactSection from "./ContactSection";
import SkillsSection from "./SkillsSection";
import JourneySection from "./JourneySection";
import ProjectSection from "./ProjectSection";
import { motion } from "framer-motion";
// import Icon from "@/components/atoms/Icon";
// import { ReactQueryIcon, ReactIcon } from "@/components/icons";
// import { TechStack } from "@/lib/TechStack";
// import { Badge } from "@/components/ui/badge";
// import { BotnavTrial } from "@/components/tamplates/BotnavTrial";


function LandingPage() {
  return (
    <>
      <main id="home" className="min-md:mx-8 py-2 min-md:pt-24 mb-8">
        <div className="h-fit w-full  max-md:h-[80%] space-y-8 max-md:mt-8">
          <CardProfile />
          <SkillsSection />
        </div>
      </main>

      <section id="project" className="min-md:mx-8 py-2 min-md:pt-24 mb-8">
        <div className="max-md:mt-8">
          <JourneySection />
        </div>
      </section>
      <section id="journey" className="min-md:mx-8 py-2 min-md:pt-24">
        <motion.div className="max-md:mt-8" >
          <ProjectSection />
        </motion.div>
      </section>
      <section id="contact" className="className=min-md:mx-8 py-2 min-md:py-24">
        <div className="max-md:mt-8">
          <ContactSection />
        </div>
        {/* <BotnavTrial /> */}
      </section>
      {/* <Icon />
      <ReactQueryIcon className="size-32" />
      <ReactIcon />

      {/* <ScrollArea className="animate-fade-down animate-once animate-ease-out scroll-smooth"> */}
      {/* </ScrollArea> */}
    </>
  );
}

export default LandingPage;

// {TechStack.map((item, index) => {
//         const Icon = item.icon
//         return (
//           // <Badge key={index} className="">
//           <div>

//             <Icon className="size-32" />
//           </div>
//             // {/* {item.icon} */}
//             // {/* <item.icon  /> */}
//           // </Badge>
//         )
//       })}
