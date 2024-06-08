import { useState } from "react";
import ImageItem from "./components/ImageItem";
import { imageItemsList } from "./data/imageItemData";
import CustomModal from "./components/customModal";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const imageClicked = (img: string) => {
    setIsOpened(!isOpened);
    setSelectedImg(img);
  };

  return (
    <div className="h-screen w-screen bg-black flex">
      <div className="m-auto flex gap-[2px]">
        {imageItemsList.map((e, index) => (
          <ImageItem key={index} data={e} onclick={() => imageClicked(e.url)} />
        ))}
      </div>
      <CustomModal
        url={selectedImg}
        isOpened={isOpened}
        onClick={() => setIsOpened(false)}
      />
    </div>
  );
}
