import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-200">
      <Navbar />
      <main className="flex justify-center items-center min-h-screen bg-slate-200">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
