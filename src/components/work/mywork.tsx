import image1 from "../../public/images/image1.jpg";
import image2 from "../../public/images/image2.jpg";
import image3 from "../../public/images/image3.jpg";
import image4 from "../../public/images/image4.jpg";
import image5 from "../../public/images/image5.jpg";
import image6 from "../../public/images/image6.jpg";
import image7 from "../../public/images/image7.jpg";
import image8 from "../../public/images/image8.jpg";

import Image from "next/image";

export default function MyWork() {
  return (
    <div className="flex flex-col items-center justify-center pb-20 md:h-screen">
      <h1 className="text-3xl font-bold text-center py-10">Some my works</h1>
      <ul className="grid grid-cols-4 gap-3">
        <li>
          <Image src={image1} alt="image1" width={200} height={200}></Image>
        </li>
        <li>
          <Image src={image2} alt="image2" width={200} height={200}></Image>
        </li>
        <li>
          <Image src={image3} alt="image3" width={200} height={200}></Image>
        </li>
        <li>
          <Image src={image4} alt="image4" width={200} height={200}></Image>
        </li>
        <li>
          <Image src={image5} alt="image5" width={200} height={200}></Image>
        </li>
        <li>
          <Image src={image6} alt="image6" width={200} height={200}></Image>
        </li>
        <li>
          <Image src={image7} alt="image7" width={200} height={200}></Image>
        </li>
        <li>
          <Image src={image8} alt="image8" width={200} height={200}></Image>
        </li>
      </ul>
    </div>
  );
}
