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
      </div>
    </div>
  );
}
