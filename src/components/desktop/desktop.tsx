import { getGreetingByTime } from "@utils";
import ArtworkWhite from "./artwork/artwork_white";
import "./desktop.css";
import Background from "./background/Background";
import Cv from "./cv";
import TooltipWrapper from "@components/tooltip/wrapper";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import "./desktop.css";

export default function Desktop() {
  return (
    // <section>
    //   <div className="absolute inset-0 bg-app-white-300 dark:bg-app-darkBlue-300 flex pt-9">
    //     <Background />
    //     <div className="flex flex-col relative mx-auto w-full max-w-[350px] sm:max-w-[640px] md:max-w-[780px]  lg:max-w-[1280px] ">
    //       <h2 className="mt-5 font-inter py-2 text-4xl mx-auto dark:text-app-darkBlue-100 text-app-darkBlue-100 font-bold">{`${getGreetingByTime()}, stranger`}</h2>
    //       <div className="mx-auto font-inter text-center text-lg mt-5">
    //         <p className="mx-auto text-gray-600 animate-fadeUp my-2">
    //           Hey, I'm
    //           <span className="mx-2 bg-app-blue-bright-100 p-1  rounded-sm rotate-12 inline-block text-app-dark-700">
    //             <div className="flex gap-x-1 items-center">
    //               <a className="inline-block">Sahan</a>
    //               <IoLogoLinkedin />
    //             </div>
    //           </span>
    //           — a
    //           <span className="text-app-text-white-100 mx-2 bg-app-darkBlue-100 px-1 inline-block rounded-xs -rotate-3">
    //             <div className="flex gap-x-1 items-center">
    //               full-stack developer <IoLogoGithub />
    //             </div>
    //           </span>
    //           who loves turning ideas into polished systems.
    //         </p>
    //         <p className="mx-auto text-gray-600 animate-fadeUp-delayed opacity-0 max-w-[500px]">
    //           This is my little corner of the web, and I'm actively looking for
    //           my next opportunity.
    //         </p>
    //       </div>

    //       <div className="flex justify-center items-center mt-12 z-30">
    //         <div className="flex w-[450px] relative justify-center">
    //           <ArtworkWhite width="100%" height="100%" />
    //           <div className="absolute h-[135px] bottom-0 w-fit left-0 right-0 mx-auto group">
    //             <div className="flex inset-0 w-full h-full shadow-md border-2 border-transparent border-solid group-hover:border-app-darkBlue-100 group-hover:shadow-2xl group-hover:animate-bounce">
    //               <TooltipWrapper anchor="LEFT" text="Wanna check my CV?">
    //                 <Cv width="100%" height="100%" />
    //               </TooltipWrapper>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section>
      <div className="hero-section">
        <Background />

        <div className="hero-container">
          <h2 className="hero-heading">{`${getGreetingByTime()}, stranger`}</h2>

          <div className="hero-intro-wrapper">
            <p className="hero-intro-line animate-fadeUp">
              Hey, I'm
              <span className="hero-name-tag">
                <span className="hero-name-inner">
                  <a className="inline-block">Sahan</a>
                  <IoLogoLinkedin />
                </span>
              </span>
              — a
              <span className="hero-role-tag">
                <span className="hero-role-inner">
                  full-stack developer <IoLogoGithub />
                </span>
              </span>
              who loves turning ideas into polished systems.
            </p>

            <p className="hero-second-line animate-fadeUp-delayed">
              This is my little corner of the web, and I'm actively looking for
              my next opportunity.
            </p>
          </div>

          <div className="hero-artwork-wrapper">
            <div className="hero-artwork-container">
              <ArtworkWhite width="100%" height="100%" />

              <div className="hero-cv-wrapper group">
                <div className="hero-cv-inner">
                  <TooltipWrapper anchor="LEFT" text="Wanna check my CV?">
                    <Cv width="100%" height="100%" />
                  </TooltipWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
