"use client";

import Image from "next/image";
import { useState } from "react";
import PostModal from "../modal/PostModal";

interface PostCardProps {
  image: string;
  title: string;
  description: string;
}

export default function PostCard({ image, title, description }: PostCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div
        className="relative aspect-square cursor-pointer overflow-hidden"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform"
        />
      </div>

      {/* Modal */}
      <PostModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        image={image}
        title={title}
        description={description}
      />
    </>
  );
}
