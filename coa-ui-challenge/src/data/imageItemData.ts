import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";

type imageItemDataType = {
    url: string,
    title: string,
    subTitle: string,
    location: string
}

export const imageItemData : imageItemDataType[] = [
  {
    url: image1,
    title: "FENNEC",
    subTitle: "FOX",
    location: "India",
  },
  {
    url: image2,
    title: "HUMPBACK",
    subTitle: "WHALE",
    location: "South Africa",
  },
  {
    url: image3,
    title: "COMMON BROWN",
    subTitle: "BABOON",
    location: "South Africa",
  },
  {
    url: image4,
    title: "SPOTTED",
    subTitle: "DEER",
    location: "Amazon",
  },
];
