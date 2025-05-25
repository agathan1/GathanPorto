import CardProfile from "@/components/tamplates/CardProfile";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import ContactSection from "./ContactSection";
import SkillsSection from "./SkillsSection";
import JourneySection from "./JourneySection";

function LandingPage() {
  return (
    <>
      <main className="min-md:my-16 min-md:mx-16 my-4">
        <div id="home" className="h-fit w-full  max-md:h-[80%] space-y-8">
          <CardProfile />
          <SkillsSection />
        </div>
      </main>
      {/* <div className="mb-100">LandingPage</div> */}

      <section id="project" className="min-md:mx-8 py-2 min-md:py-24">
        <JourneySection />
      </section>
      <section id="journey">
        {/* <section id="journey" className="bg-[#EFE9E1]"> */}
        fsiofvs
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      {/* <ScrollArea className="animate-fade-down animate-once animate-ease-out scroll-smooth"> */}
      {/* </ScrollArea> */}
    </>
  );
}

export default LandingPage;
