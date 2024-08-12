import { IconHexagon } from "@tabler/icons-react";
import IconCloud from "./magicui/icon-cloud";
import { Slugs } from "../Users";

export function Loader() {
  return (
    <div
      className="relative flex h-full w-full  items-center justify-center 
    animate-[ping_1.5s_ease-in-out_1_3.2s]
   px-20 pb-20 pt-8"
    >
      <IconCloud iconSlugs={Slugs} />
      <IconHexagon
        className="absolute -z-10 animate-[spin_5s_linear_infinite]"
        size={120}
        color="#64FFDA"
        stroke={1.25}
      />
      <div className="absolute font-mono text-primaryColor font-semibold text-6xl -z-10">
        AD
      </div>
    </div>
  );
}
