import Footer from "@/components/Footer";
import Home from "@/components/Home";
import HomeBlogs from "@/components/HomeBlogs";
import HomeCategories from "@/components/HomeCategories";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";

export default function page() {
  return (
    <>
    <Navbar />
    <Home />
    <HomeCategories />
    <HomeBlogs />
    <Newsletter />
    <Footer />
    </>
  );
}
