"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "../../public/images/images.png";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 bg-background shadow-sm">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <DiamondIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">Portfolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}>
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}>
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}>
            Projects
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
            prefetch={false}>
            Contact
          </Link>
        </nav>
        <Link
          href="#"
          className="hidden border-2 border-[#242424] rounded md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          prefetch={false}>
          <DownloadIcon className="h-4 w-4" />
          Download Resume
        </Link>
      </header>
      <main className="container mx-auto py-12 px-4 md:px-6 h-screen">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src={image}
              alt="Profile Picture"
              width={500}
              height={500}
              className="rounded-lg"
              style={{ aspectRatio: "500/500", objectFit: "cover" }}
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">About Me</h1>
            <p className="text-muted-foreground">
              Hi, Im John Doe, a passionate web developer with a strong
              background in front-end technologies. I love creating beautiful
              and functional websites that provide an exceptional user
              experience. In my free time, I enjoy exploring new technologies,
              reading about the latest industry trends, and contributing to
              open-source projects.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="inline-flex border border-black rounded items-center gap-2 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}>
                Learn More
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function DiamondIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  );
}

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}
