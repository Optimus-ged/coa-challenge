import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { imageItemsList } from "../data/imageItemData";

type CustomModalType = {
  isOpened: boolean;
  index: number;
  onClick: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function CustomModal({
  index,
  isOpened,
  onClick,
  onNext,
  onPrev,
}: CustomModalType) {
  return (
    isOpened && (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 flex"
      >
        <div className="bg-black h-full w-full relative">
          <img
            className="h-full m-auto"
            src={imageItemsList[index].url}
            alt=""
          />
          <p
            className="text-white absolute top-2 left-[50%] translate-x-[-50%] cursor-pointer rounded-full bg-neutral-700/30 h-10 w-10 flex items-center justify-center"
            onClick={onClick}
          >
            <X/>
          </p>
          <div
            className="h-10 w-10 left-5 hover:bg-neutral-700 rounded-full absolute flex top-[50%] translate-y-[-50%] cursor-pointer"
            onClick={onPrev}
          >
            <ChevronLeft color="white" className="m-auto" />
          </div>
          <div
            className="right-5 bottom-[50%] translate-y-[50%] absolute h-10 w-10 hover:bg-neutral-700 rounded-full cursor-pointer flex "
            onClick={onNext}
          >
            <ChevronRight color="white" className="m-auto" />
          </div>
        </div>
      </motion.div>
    )
  );
}
