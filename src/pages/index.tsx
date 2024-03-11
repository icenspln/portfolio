import FormAnimation from "./components/form";
import { Inter } from "next/font/google";
import Cont from "./components/cont";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Experience from "./components/experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Cont>
        <Navbar />
        <Intro />
      </Cont>
      <Experience />
      {/* <Testimonials /> */}
      <FormAnimation />
    </>
  );
}
