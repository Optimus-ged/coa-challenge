import image1 from "../assets/image1.png";

export default function ImageItem() {
  return (
    <div className="overflow-hidden relative h-[588px] w-[98.5px] sm:w-[283px] group">
      <div className="h-[588px] w-[283px] group-hover:scale-105 group-hover:grayscale transition duration-[0.4s] group-hover:blur-[5px] translate-x-[-34%] lg:translate-x-0 relative">
        <img className="h-full w-full" src={image1} alt="" />
      </div>
    </div>
  );
}
