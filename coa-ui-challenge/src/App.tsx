import ImageItem from "./components/ImageItem";

export default function App() {
  return (
    <div className="h-screen w-screen bg-black flex">
      <div className="m-auto flex gap-[2px]">
        <ImageItem />
      </div>
    </div>
  );
}
