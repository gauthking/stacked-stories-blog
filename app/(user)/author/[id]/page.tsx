import { client } from "@/utils/sanity.client";
import urlFor from "@/utils/urlFor";
import { groq } from "next-sanity";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import medium from "../../../../assets/images/medium.png";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
type Props = {
  params: {
    id: string;
  };
};

export const revalidate = 15;

async function Author({ params: { id } }: Props) {
  const authorQuery = groq`(*[_type=='author' && _id==$id][0])`;
  const author = await client.fetch(authorQuery, { id });
  console.log(author);
  return (
    <section className="my-12 flex flex-col justify-evenly drop-shadow-xl bg-[#eff0d123]  rounded-2xl p-10 mx-10">
      <h1 className="mx-1 md:mx-4 text-xl md:text-3xl font-titilium_bold text-gray-800 bg-[#eff1bb44] p-2 rounded-xl w-fit">
        author
      </h1>
      <hr className="h-px my-4 bg-neutral-400 border-0 drop-shadow-xl dark:bg-neutral-400 w-full m-auto" />
      <div className="flex items-center md:items-start md:justify-evenly flex-col lg:flex-row">
        <div className="mt-4 md:mx-4">
          <Avatar
            src={urlFor(author.image).url()}
            sx={{
              width: "312px",
              height: "312px",
              "@media (max-width: 600px)": {
                width: "180px",
                height: "180px",
              },
            }}
          />

          {/* <img
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover hover:shadow-md
                  transition-all ease-in-out md:mx-2 drop-shadow-2xl"
            src={urlFor(author.image).url()}
            alt={`${author._id} image`}
          /> */}
        </div>
        <div className="authorinfo md:mr-24 text-center md:text-left flex flex-col justify-between gap-10 h-full">
          <div>
            <h1 className="text-2xl md:text-5xl font-titilium_bold text-[#EFF0D1] mt-8 md:ml-2">
              {author.name}
            </h1>
            <h1 className="mt-2 ml-2 text-xs md:text-lg font-titilium_semibold text-[#eff0d1a9]">
              "{author.bio[0].children[0].text}"
            </h1>
          </div>
          <div className="socials flex items-center justify-center md:justify-normal gap-3 md:mx-6">
            {author.instagram? (
              <Link href={author?.instagram}>
                <InstagramIcon
                  className="cursor-pointer"
                  fontSize="medium"
                  color="secondary"
                />
              </Link>
            ) : (
              ""
            )}
            {author.twitter ? (
              <Link href={author?.twitter}>
                <TwitterIcon
                  className="cursor-pointer"
                  fontSize="medium"
                  color="primary"
                />
              </Link>
            ) : (
              ""
            )}
            {author.medium ? (
              <Link href={author?.medium}>
                <Image
                  src={medium}
                  width={26}
                  height={26}
                  className="rounded-full cursor-pointer"
                  alt="avatar"
                ></Image>
              </Link>
            ) : (
              ""
            )}
            {author.github  ? (
              <Link href={author?.github}>
                <GitHubIcon className="cursor-pointer" fontSize="medium" />
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Author;
