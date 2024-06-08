import { useState } from "react";
import ImageItem from "./components/ImageItem";
import { imageItemsList } from "./data/imageItemData";
import CustomModal from "./components/customModal";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageClicked = (index: number) => {
    setIsOpened(!isOpened);
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex + 1 !== imageItemsList.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="h-screen w-screen bg-black flex">
      <div className="m-auto flex gap-[2px]">
        {imageItemsList.map((e, index) => (
          <ImageItem key={index} data={e} onclick={() => imageClicked(index)} />
        ))}
      </div>
      <CustomModal
        index={currentIndex}
        isOpened={isOpened}
        onClick={() => setIsOpened(false)}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
    </div>
  );
}
