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
      className="fixed inset-0 backdrop-blur-lg flex justify-center items-center"
      onClick={onClick}
    >
      <div className="bg-black h-[500px] w-[800px] flex">
        <img className="h-full m-auto" src={url} alt="" />
      </div>
    </motion.div>
  );
}
