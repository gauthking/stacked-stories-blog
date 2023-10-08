import { draftMode } from "next/headers";
import { LiveQuery } from "next-sanity/preview/live-query";
import BlogDocument, { query } from "../../../components/BlogDocument";
import PreviewBlogDocuments from "../../../components/PreviewBlogDocuments";
import { sanityFetch } from "../../../utils/sanity.fetch";

export default async function IndexPage() {
  const data = await sanityFetch<number>({ query, tags: ["post"] });
  draftMode().enable();
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
