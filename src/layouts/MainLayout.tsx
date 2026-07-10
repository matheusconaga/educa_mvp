import Footer from "@/widget/Footer";
import Header from "@/widget/Header";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className="pt-20 overflow-hidden">{children}</main>

      <Footer />
    </>
  );
}
