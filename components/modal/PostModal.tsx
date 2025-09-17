"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
}

export default function PostModal({
  isOpen,
  onClose,
  image,
  title,
  description,
}: PostModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Card */}
          <motion.div
            className="relative bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-xl w-full max-w-3xl h-[90vh] flex flex-col md:flex-row"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Gambar */}
            <div className="relative flex-1 bg-black">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Detail */}
            <div className="flex-1 p-4 flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-muted"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <p className="text-sm text-muted mb-4">{description}</p>

              {/* CTA Buttons */}
              <div className="mt-auto flex gap-3">
                <a
                  href="#"
                  className="flex-1 text-center bg-primary text-white py-2 rounded-lg hover:opacity-90 transition"
                >
                  View Project
                </a>
                <a
                  href="#"
                  className="flex-1 text-center border border-default py-2 rounded-lg hover:bg-muted transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
