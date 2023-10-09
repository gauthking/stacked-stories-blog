import urlFor from "@/utils/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";
import Hero from "./Hero";

export const query = groq`(*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc))`;

export default function Documents({ data }: any) {
  console.log(data[0].mainImage);
  return (
    <div className="pb-20">
      <Hero />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-100 w-[85%] m-auto" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-12 ">
        {data.map((post: any) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="p-6 m-auto">
              <div className="relative w-80 h-80 drop-shadow-xl hover:scale-105 transition-transform duration-200 ease-out ">
                <Image
                  className="object-cover object-left lg:object-center rounded-xl hover:border-t-4 hover:border-[#adba88]"
                  src={urlFor(post.mainImage).url()}
                  alt={`${post._id} image`}
                  fill
                />
                <div className="absolute bottom-0 w-full  backdrop-blur-lg opacity-75 bg-[#499b72] hover:bg-[#D33F49] rounded drop-shadow-lg text-white p-5 flex justify-between cursor-pointer hover:text-black">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
