import Footer from "../components/Sections/Footer/Footer";
import HeroSection from "../components/Sections/HeroSection";
import Layout from "../components/layout/layout";

export default function Landing() {
  return (
    <>
      {/* background blurry blobs  */}
      <div
        style={{ width: "100svw" }}
        className="absolute h-screen overflow-hidden"
      >
        <div className="absolute left-[-7%] top-[22%] -z-10 h-1/5 w-1/5 rounded-full bg-primary blur-[5em] xl:blur-[10em]"></div>
        <div className="absolute right-[-7%] top-[50%] -z-10 h-1/5 w-1/5 rounded-full bg-primary blur-[5em] xl:blur-[10em]"></div>
        <div className="absolute bottom-0 left-[20%] -z-10 h-1/5 w-1/5 rounded-full bg-blue blur-[6em] xl:blur-[10em]"></div>
      </div>
      {/* main content (nav, landing, etc... ) */}
      <Layout>
        <HeroSection />
        
      </Layout>
    <Footer/>
    </>
  );
}
