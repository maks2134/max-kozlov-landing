import { profile } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-[#9aab9f] sm:px-8">
        <p>© 2026 {profile.name}</p>
      </div>
    </footer>
  );
}
