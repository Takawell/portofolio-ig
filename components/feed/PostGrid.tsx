import PostCard from "./PostCard";

interface Post {
  image: string;
  title: string;
  description: string;
}

interface PostGridProps {
  posts: Post[];
}

export default function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="feed-grid mt-4">
      {posts.map((post, idx) => (
        <PostCard
          key={idx}
          image={post.image}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
}
