import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CustomModalType = {
  isOpened: boolean;
  url: string;
  onClick: () => void;
};

export default function CustomModal({
  url,
  isOpened,
  onClick,
}: CustomModalType) {
  if (!isOpened) return null;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 flex"
    >
      <div className="bg-black h-full w-full relative">
        <img className="h-full m-auto" src={url} alt="" />
        <p
          className="text-white absolute top-2 left-[50%] translate-x-[-50%] cursor-pointer rounded-full bg-neutral-700/30 h-10 w-10 flex items-center justify-center"
          onClick={onClick}
        >
          X
        </p>
        <div className="h-10 w-10 hover:bg-neutral-700 rounded-full absolute flex top-[50%] translate-y-[-50%] cursor-pointer">
          <ChevronLeft color="white" className="m-auto" />
        </div>
        <div className="right-0 bottom-[50%] translate-y-[50%] absolute h-10 w-10 hover:bg-neutral-700 rounded-full cursor-pointer flex ">
          <ChevronRight color="white" className="m-auto" />
        </div>
      </div>
    </motion.div>
  );
}
