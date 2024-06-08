import { ArrowRight  } from "lucide-react";
import { imageItemDataType } from "../data/imageItemData";

type ImageItemProps = {
  data: imageItemDataType;
  onclick?: () => void;
};

export default function ImageItem({ data, onclick }: ImageItemProps) {
  return (
    <div
      className="overflow-hidden relative h-[588px] w-[98.5px] sm:w-[283px] group"
      onClick={onclick}
    >
      <div className="h-[588px] w-[283px] group-hover:scale-105 group-hover:grayscale transition duration-[0.4s] group-hover:blur-[5px] translate-x-[-34%] lg:translate-x-0 relative">
        <img className="h-full w-full" src={data.url} alt="" />

        {/* image overlay */}
        {/* we increase the opacity of the overlay when the user hover the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent top-0 opacity-60 group-hover:opacity-100 transition duration-[0.4s]" />
      </div>
      {/* infos */}
      <div className="hidden lg:block">
        <div className=" absolute left-[40px] bottom-[40px] text-white group-hover:translate-y-[-32px] transition duration-[0.5s]">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <h1 className="text-2xl font-bold">{data.subTitle}</h1>
          <p className="text-white/60 text-xs mt-[16.2px]">{data.location}</p>
        </div>
        <div className="flex gap-2 absolute bottom-[40px] left-[40px] items-center opacity-0 group-hover:opacity-100 transition duration-[0.4s]">
          <p className="text-xs text-custom-color">Know more</p>
          <ArrowRight color="#55bfdd" size={16} />
        </div>
      </div>
    </div>
  );
}
