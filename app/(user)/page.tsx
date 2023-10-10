import BlogDocument, { query } from "../../components/BlogDocument";
import { client } from "@/utils/sanity.client";
export const revalidate = 15;

export default async function IndexPage() {
  const data = await client.fetch(query, { cache: "no-cache" });
  console.log("data - ", data);
  return (
    // <LiveQuery
    //   enabled={draftMode().isEnabled}
    //   query={query}
    //   initialData={data}
    //   as={PreviewBlogDocuments}
    // >
    //   <BlogDocument data={data} />
    // </LiveQuery>
    <BlogDocument data={data} />
  );
}
