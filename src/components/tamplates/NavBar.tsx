import React, { useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useLocation } from "react-router-dom";
import {
  Code,
  Home,
  Projector,
  Waypoints,
  MessageSquareMore,
} from "lucide-react";

const icons = [
  {
    name: "Home",
    direct: "#home",
    icon: Home,
  },
  {
    name: "Project",
    direct: "#project",
    icon: Code,
  },
  {
    name: "Journey",
    direct: "#journey",
    icon: Waypoints,
  },
  {
    name: "Contact",
    direct: "#contact",
    icon: MessageSquareMore,
  },
];

export default function NavBar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeHash, setActiveHash] = useState<string>(window.location.hash);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = icons.map((icon) =>
      document.querySelector(icon.direct)
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("entry", entry);
          if (entry.isIntersecting) {
            console.log(entry.target.id);
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // agar aktif saat tengah layar
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [icons]);

  // useEffect(() => {
  //   const handleHashChange = () => {
  //     setActiveHash(window.location.hash);
  //   };

  //   window.addEventListener("hashchange", handleHashChange);
  //   return () => {
  //     window.removeEventListener("hashchange", handleHashChange);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Cek ukuran saat pertama kali render

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(activeSection);

  return (
    <nav>
      {!isMobile && (
        <Menubar
          className={`${
            scrolled ? "bg-[#577399] drop-shadow-2xl text-[#f7f7ff]" : "bg-transparent text-[#495867]"
          } border-none shadow-none max-w-md mx-auto fixed top-8 left-0 right-0 transition-colors  duration-200 z-50`}
        >
          {/* <Menubar className="fixed top-5 w-[50%] left-1/2 -translate-x-1/2 max-[750px]:w-[70%]"> */}
          <MenubarMenu>
            {icons.map((icon, index) => (
              <MenubarTrigger
                className="w-full flex justify-center hover:bg-muted gap-1 font-poppins hover:bg-slate-100/10"
                key={index}
              >
                <a href={icon.direct}>{icon.name}</a>
                {/* <icon.icon className="h-4 w-4" /> */}
              </MenubarTrigger>
            ))}
          </MenubarMenu>
        </Menubar>
      )}
      {isMobile && (
        <Menubar
          className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-[#577399] shadow-lg rounded-2xl flex justify-around py-6 px-4 z-50"
          //   className={`${
          //     scrolled ? "bg-[#EFE9E1] drop-shadow-2xl" : "bg-transparent"
          //   } rounded-2xl max-w-md mx-auto fixed bottom-8 left-0 right-0 transition-colors duration-300 z-50`}
        >
          {/* <Menubar className="fixed top-5 w-[50%] left-1/2 -translate-x-1/2 max-[750px]:w-[70%]"> */}
          <MenubarMenu>
            {icons.map((icon) => {
             const isActive = icon.direct === activeSection;
            //  const isActive = activeHash === icon.direct;
            //  const isActive = location.pathname === icon.direct;
             console.log(activeSection);
             console.log(isActive);

              return (
                <MenubarTrigger
                  className="w-full flex justify-center gap-1 font-poppins hover:bg-slate-100/10"
                  key={icon.name}
                >
                  {/* {icon.name} */}
                  {/* <a href={icon.direct} target="_blank"> */}
                  <a
                    href={icon.direct}
                    className={`flex flex-col items-center justify-center p-2 rounded-md transition-colors duration-300
          ${
            isActive
              ? "text-blue-600"
              : "text-[#f7f7ff]"
          }`}
                    // className={`bg-red-400 active:bg-blue-500 ${
                    //   icon.name === icon.name ? "text-white" : "text-black"
                    // }`}
                  >
                    <icon.icon size={22} />
                  </a>
                </MenubarTrigger>
              );
            })}
          </MenubarMenu>
        </Menubar>
      )}
    </nav>
  );
}
