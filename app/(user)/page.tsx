import { draftMode } from "next/headers";
import { LiveQuery } from "next-sanity/preview/live-query";
import BlogDocument, { query } from "../../components/BlogDocument";
import PreviewBlogDocuments from "../../components/PreviewBlogDocuments";
import { sanityFetch } from "../../utils/sanity.fetch";
import { cache } from "react";
import { client } from "@/utils/sanity.client";

export default async function IndexPage() {
  draftMode().disable();
  const data = await client.fetch(query, { cache: "no-cache" });
  console.log("data - ", data);
  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={query}
      initialData={data}
      as={PreviewBlogDocuments}
    >
      <BlogDocument data={data} />
    </LiveQuery>
  );
}
