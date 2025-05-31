import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ProjectDatas } from "../../lib/ProjectDatas";
import { ArrowUpRight } from "lucide-react";
import { Lens } from "@/components/magicui/lens";

interface Props {
  description?: string;
  tech_stack?: string[];
  is_lounched?: boolean | undefined;
  the_link?: string | undefined;
  image?: string;
  title?: string;
}

export const CardProject = ({
  description,
  tech_stack,
  is_lounched,
  title,
  the_link,
  image,
}: Props) => {
  //   const navigate = Navigate();
  return (
    <>
      <Card className="border-2 flex flex-col gap-2 justify-between h-full min-h-[400px] bg-[#bdd5ea]/30 border-black shadow-[5px_5px_0px_black] hover:translate-x-[1px] hover:translate-y-[1px] duration-150 hover:shadow-none pt-1 rounded-none">
        <CardHeader className="font-poppins px-2  ">
          <Lens
            zoomFactor={2}
            lensSize={180}
            isStatic={false}
            ariaLabel="Zoom Area"
          >
            <img
              className="bg-slate-700 rounded-none size-58 w-full object-cover object-left-top"
              src={image}
              alt="pic"
            />
          </Lens>
          <h3 className="font-bold  bg-black text-white p-1 w-fit mt-8">
            {title}
          </h3>
          {/* <div className="bg-slate-700 size-38 w-full rounded-lg">dakb</div> */}
        </CardHeader>
        <CardDescription className="font-poppins px-2 space-y-2">
          <p className="font-semibold text-black">{description}</p>
          <div className="flex flex-wrap gap-4 max-w-fit">
            {tech_stack?.map((item) => (
              <p
                className="text-black text-[12px] p-1 border-2 border-black"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </CardDescription>
        <CardFooter className="font-poppins px-2 mt-4">
          <Button
            onClick={() => {
              if (the_link) window.open(the_link, "_blank");
            }}
            variant={"default"}
            disabled={!the_link}
            className="w-full rounded-none border-2 border-black bg-black text-white px-6 py-2 font-semibold flex items-center gap-2 shadow-[4px_4px_0px_silver]  duration-150 active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            <ArrowUpRight /> View Project
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default function ProjectSection() {
  return (
    <>
      <div className=" font-poppins text-black border-b-2 border-dashed border-black pb-8">
        <h2 className="text-3xl font-bold">My Project</h2>
        <p className="text-base text-slate-700/80 font-poppins">
          Showcasing my projects
        </p>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-1 mt-8 gap-8">
        {ProjectDatas.map((item) => (
          <div key={item.id}>
            <CardProject
              description={item.description}
              tech_stack={item.tech_stack}
              is_lounched={!!item.the_link}
              the_link={item.the_link}
              image={item.image}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </>
  );
}
