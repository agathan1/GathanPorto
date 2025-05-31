import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Home } from "lucide-react";


const icons = [
    {
      name: "Home",
      icon: Home,
    },
    {
      name: "Home",
      icon: Home,
    },
    {
      name: "Home",
      icon: Home,
    },
    {
      name: "Home",
      icon: Home,
    },
]

export default function Footer() {
  return (
    <>
      <Menubar className="fixed bottom-10 w-[50%] left-1/2 -translate-x-1/2 max-[650px]:w-[70%]">
        <MenubarMenu>
            {icons.map((icon) => (
                <MenubarTrigger className="w-full flex justify-center hover:bg-muted gap-1" key={icon.name}>
                    <icon.icon className="h-4 w-4" />
                </MenubarTrigger>
            ))}
          {/* <MenubarTrigger className="w-full">File</MenubarTrigger>
          <MenubarTrigger className="w-full">File</MenubarTrigger>
          <MenubarTrigger className="w-full">File</MenubarTrigger> */}
          {/* <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent> */}
        </MenubarMenu>
      </Menubar>
    </>
  );
}
