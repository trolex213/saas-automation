import { ContainerScroll } from "@/components/global/container-scroll-animation";
import Navbar from "../components/global/navbar";
import Image from "next/image";
import { Button } from '../components/ui/button'
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { clients, products } from "@/lib/constants";
import { HeroParallax } from "@/components/global/connect-parallax";


export default function Home() {
  return (
      <main>
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 background-radial-gradient"></div>
        <div className="h-[700px] flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center justify-center flex-col">
                <Button
                  size={"lg"}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Fuzzie
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[18rem] mt-10"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>

    </main>

  )

}
