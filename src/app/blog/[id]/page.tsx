import { redirect } from "next/navigation";
import { REAL_POSTS } from "@/lib/data/blogs";

export async function generateStaticParams() {
  return REAL_POSTS.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogDetailRedirectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolved = await params;
  redirect(`/insights/${resolved.id}`);
}
