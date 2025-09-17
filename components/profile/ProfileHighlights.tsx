import Image from "next/image";

interface Highlight {
  src: string;
  label: string;
}

const highlights: Highlight[] = [
  { src: "/highlights/web.png", label: "Web" },
  { src: "/highlights/mobile.png", label: "Mobile" },
  { src: "/highlights/design.png", label: "Design" },
];

export default function ProfileHighlights() {
  return (
    <div className="flex gap-6 justify-center md:justify-start mt-8">
      {highlights.map((h, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2">
          <div className="highlight-ring w-16 h-16 flex items-center justify-center">
            <div className="relative w-14 h-14 rounded-full overflow-hidden">
              <Image src={h.src} alt={h.label} fill className="object-cover" />
            </div>
          </div>
          <span className="text-xs text-muted">{h.label}</span>
        </div>
      ))}
    </div>
  );
}
