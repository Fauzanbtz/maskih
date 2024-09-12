import image1 from "../../public/images/image1.jpg";
import Image from "next/image";
import { MdComputer } from "react-icons/md";

const data = [
  {
    id: 1,
    title: "UX & UI",
    description:
      "Designing interfaces that are intuitive, efficient and enjoyable to use",
    icon: <MdComputer className="h-5 w-5 text-white" />,
    image: image1,
  },
  {
    id: 1,
    title: "UX & UI",
    description:
      "Designing interfaces that are intuitive, efficient and enjoyable to use",
    icon: <MdComputer className="h-5 w-5 text-white" />,
    image: image1,
  },
  {
    id: 1,
    title: "UX & UI",
    description:
      "Designing interfaces that are intuitive, efficient and enjoyable to use",
    icon: <MdComputer className="h-5 w-5 text-white" />,
    image: image1,
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 md:h-screen">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row justify-center items-center  p-5 rounded-xl shadow-2xl space-y-5 md:space-y-0 md:space-x-5 bg-[#242323]"
          data-aos="fade-up"
          data-aos-duration="2000">
          <div className="">
            <div className="">
              <p className="text-sm font-bold ">Featured Project</p>
              <h1 className="text-3xl font-bold">{item.title}</h1>
            </div>
            <div className="relative w-full py-5 md:left-10 rounded-xl bg-white/30 backdrop-blur-xl ">
              <p className="px-5">{item.description}</p>
            </div>
            <div className="mt-4">{item.icon}</div>
          </div>
          <div className="min-w-2.5 ">
            <Image
              src={item.image}
              alt="image1"
              width={200}
              height={200}></Image>
          </div>
        </div>
      ))}
    </div>
  );
}
