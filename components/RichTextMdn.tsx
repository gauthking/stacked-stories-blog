import urlFor from "@/utils/urlFor";
import { PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export const RichTextMdn: any = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96  mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="image blog"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-4 text-white">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal text-white">{children}</ol>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <div className="max-w-6xl m-auto">
        <p className="text-lg py-3 text-white">{children}</p>
      </div>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold bg-gradient-to-r from-[#EFF0D1] to-white bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h1 className="text-4xl py-10 font-bold bg-gradient-to-r from-[#EFF0D1] to-white bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h3: ({ children }: any) => (
      <h1 className="text-3xl py-10 font-bold bg-gradient-to-r from-[#EFF0D1] to-white bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h4: ({ children }: any) => (
      <h1 className="text-2xl py-10 font-bold bg-gradient-to-r from-[#EFF0D1] to-white bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#feffe1] border-l-4 pl-5 py-5 my-5 max-w-5xl m-auto font-semibold text-[#e5e7b5]">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#EFF0D1] hover:decoration-red-400"
        >
          {children}
        </Link>
      );
    },
  },
};
