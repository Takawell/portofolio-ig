interface ProfileStatsProps {
  posts: number;
  followers: number;
  following: number;
}

export default function ProfileStats({ posts, followers, following }: ProfileStatsProps) {
  return (
    <div className="flex justify-around md:justify-start gap-8 mt-6 md:mt-4">
      <StatItem label="Posts" value={posts} />
      <StatItem label="Followers" value={followers} />
      <StatItem label="Following" value={following} />
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <p className="font-semibold">{value}</p>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}
