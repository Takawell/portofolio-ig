import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileHighlights from "@/components/profile/ProfileHighlights";
import PostGrid from "@/components/feed/PostGrid";

export default function Page() {
  const posts = [
    {
      image: "/posts/project1.png",
      title: "Portfolio Website",
      description: "Personal portfolio dengan Next.js + TailwindCSS",
    },
    {
      image: "/posts/project2.png",
      title: "Anime Platform",
      description: "Platform Aichiow pakai AniList & MangaDex API",
    },
    {
      image: "/posts/project3.png",
      title: "E-Commerce App",
      description: "Aplikasi belanja dengan Next.js + Supabase",
    },
    {
      image: "/posts/project4.png",
      title: "AI Chatbot",
      description: "Chatbot dengan GPT-5 API + Next.js",
    },
  ];

  return (
    <section>
      {/* Header & Bio */}
      <ProfileHeader />
      <ProfileStats posts={posts.length} followers={1200} following={340} />
      <ProfileHighlights />

      {/* Divider */}
      <div className="border-t border-default mt-8" />

      {/* Feed */}
      <PostGrid posts={posts} />
    </section>
  );
}
