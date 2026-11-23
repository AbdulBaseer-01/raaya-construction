import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PublicPageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="public-page min-h-screen bg-white text-black">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
