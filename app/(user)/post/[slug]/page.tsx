import { client } from "@/utils/sanity.client";
import { groq } from "next-sanity";
import React from "react";
import Image from "next/image";
import urlFor from "@/utils/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextMdn } from "@/components/RichTextMdn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { IconButton } from "@mui/material";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 15;

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
  {
    slug
  }`;
  const slugs: any[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug: any) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Blog({ params: { slug } }: Props) {
  console.log(slug);
  const query = groq`(*[_type=='post' && slug.current==$slug][0]
  {
    ...,
    author->,
    categories[]->
  })`;
  const post = await client.fetch(query, { slug });
  // const id = post.author._id;
  // const authorQuery = groq`(*[_type=='author' && _id==$id][0])`;
  // const author = await client.fetch(authorQuery, { id });
  // console.log(author);
  return (
    <article className="px-10 pb-24">
      <section className="space-y-2 text-[#EFF0D1] border border-[#eff0d17b] ">
        <div className=" relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={`${post._id} image`}
              fill
            />
          </div>
          <section className="p-5 bg-gradient-to-br from-[#D33F49] to-[#825a5c] w-full">
            <div>
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-6">
                <img
                  className="rounded-[200%] w-12 object-cover h-12 hover:shadow-md
                  transition-all ease-in-out"
                  src={urlFor(post.author.image).url()}
                  alt={`${post._id} image`}
                />
                <div className="w-fit">
                  <h3 className="font-titilium_semibold">{post.author.name}</h3>
                </div>
                <div className="cursor-pointer">
                  <Link href={`/author/${post.author._id}`}>
                    <IconButton>
                      <ArrowOutwardIcon color="inherit" />
                    </IconButton>
                  </Link>
                </div>
              </div>
            </div>
            <div>{/* <h2>{post.description}</h2> */}</div>
          </section>
        </div>
      </section>

      <PortableText value={post ? post.body : ""} components={RichTextMdn} />
    </article>
  );
}

export default Blog;
