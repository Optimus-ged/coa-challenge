import ImageItem from "./components/ImageItem";
import OverLay from "./components/overLay";
import { imageItemsList } from "./data/imageItemData";

export default function App() {
  return (
    <div className="h-screen w-screen bg-black flex">
      <div className="m-auto flex gap-[2px]">
        {imageItemsList.map((e, index) => (
          <ImageItem key={index} data={e} />
        ))}
      </div>
      <OverLay />
    </div>
  );
}
