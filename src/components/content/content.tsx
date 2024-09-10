import { SiAdobephotoshop } from "react-icons/si";
import { MdComputer } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  {
    id: 1,
    title: "UX & UI",
    description:
      "Designing interfaces that are intuitive, efficient and enjoyable to use",
    icon: <MdComputer className="h-5 w-5 text-white" />,
  },
  {
    id: 1,
    title: "UX & UI",
    description:
      "Designing interfaces that are intuitive, efficient and enjoyable to use",
    icon: <MdComputer className="h-5 w-5 text-white" />,
  },
  {
    id: 1,
    title: "UX & UI",
    description:
      "Designing interfaces that are intuitive, efficient and enjoyable to use",
    icon: <MdComputer className="h-5 w-5 text-white" />,
  },
  {
    id: 1,
    title: "UX & UI",
    description:
      "Designing interfaces that are intuitive, efficient and enjoyable to use",
    icon: <MdComputer className="h-5 w-5 text-white" />,
  },
];

export default function Content() {
  return (
    <div className="h-screen">
      <div className="flex w-full flex-wrap rounded-md justify-around p-10 bg-[#242323]">
        <SiAdobephotoshop className="h-20 w-20" />
        <SiAdobephotoshop className="h-20 w-20" />
        <SiAdobephotoshop className="h-20 w-20" />
        <SiAdobephotoshop className="h-20 w-20" />
        <SiAdobephotoshop className="h-20 w-20" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold my-10">What im doing</h1>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {data.map((item) => (
            <Card
              className="w-60 bg-[#131212] items-center justify-center shadow-xl"
              key={item.id}>
              <CardHeader>
                {item.icon}
                <CardTitle className="text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl font-bold py-10">What can i do for you</h1>
          <p className="text-center w-1/2">
            As an experienced graphic designer, I create strong and effective
            visuals to help your brand tell a story and connect with your
            audience. With expertise in digital and print design, I offer a
            variety of services, including:
          </p>
          <ul className="list-disc list-inside  space-y-5 p-10">
            <li className="border p-5 rounded-md border-[#2b2a2a]">
              <strong>Brand Identity & Logo Design:</strong> Membuat identitas
              visual yang unik dan berkesan untuk memperkuat citra bisnis Anda.
            </li>
            <li className="border p-5 rounded-md border-[#2b2a2a]">
              <strong>Brand Identity & Logo Design:</strong> Membuat identitas
              visual yang unik dan berkesan untuk memperkuat citra bisnis Anda.
            </li>
            <li className="border p-5 rounded-md border-[#2b2a2a]">
              <strong>Brand Identity & Logo Design:</strong> Membuat identitas
              visual yang unik dan berkesan untuk memperkuat citra bisnis Anda.
            </li>
            <li className="border p-5 rounded-md border-[#2b2a2a]">
              <strong>Brand Identity & Logo Design:</strong> Membuat identitas
              visual yang unik dan berkesan untuk memperkuat citra bisnis Anda.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
