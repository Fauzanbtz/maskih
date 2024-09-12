"use client"

import Header from "@/components/header/header";
import Content from "@/components/content/content";
import MyWork from "@/components/work/mywork";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <div className="mx-10">
      <Header />
      <Content />
      <MyWork />
      <Projects />
      <Contact />
    </div>
  );
}
