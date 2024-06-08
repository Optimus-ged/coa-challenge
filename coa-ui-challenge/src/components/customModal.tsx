import { motion } from "framer-motion";

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
      onClick={onClick}
    >
      <div className="bg-black h-full w-full relative">
        <img className="h-full m-auto" src={url} alt="" />
        <p
          className="text-white absolute top-5 right-10 cursor-pointer hover:rounded-full hover:bg-neutral-700 h-10 w-10 flex items-center justify-center"
          onClick={onClick}
        >
          X
        </p>
      </div>
    </motion.div>
  );
}
