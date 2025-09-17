import Image from "next/image";
import { cn } from "@/utils/cn";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

export default function Avatar({ src, alt = "avatar", size = 80, className }: AvatarProps) {
  return (
    <div
      className={cn(
        "relative rounded-full border-2 border-primary overflow-hidden",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
