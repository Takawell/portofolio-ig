import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-8">
      {/* Foto Profil */}
      <Avatar src="/profile.jpg" size={120} className="profile-pic" />

      {/* Info */}
      <div className="flex flex-col gap-4 text-center md:text-left">
        {/* Username + Buttons */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <h2 className="text-xl font-semibold">takashin.dev</h2>
          <div className="flex gap-2 justify-center md:justify-start">
            <Button variant="primary">Follow</Button>
            <Button variant="outline">Contact</Button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Resume</Button>
            </a>
          </div>
        </div>

        {/* Bio */}
        <div className="text-sm leading-relaxed max-w-md">
          <p className="font-medium">Takashin</p>
          <p className="text-muted">
            🚀 Frontend Developer | 🎨 UI/UX Enthusiast | 📚 Anime & Manga Lover
          </p>
          <a
            href="https://github.com/takashin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium"
          >
            github.com/takashin
          </a>
        </div>
      </div>
    </div>
  );
}
