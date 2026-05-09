import { getGreetingByTime } from "@utils";
import "./desktop.css";
import Background from "./background/Background";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import "./desktop.css";
import TypingText from "@components/textEffects/type/type";
import DecryptedText from "@components/textEffects/decrypt/decrypt";

export default function Desktop() {
  return (
    <section>
      <div className="hero-section">
        <Background />

        <div className="hero-container">
          <div className="flex justify-center flex-col">
            <p className="hero-heading">
              {`${getGreetingByTime()},`}
              <span className="hero-heading-visitor">
                <TypingText textCls="" speed={90} text="developer" />
              </span>
            </p>

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
              </p>
              <p className="hero-intro-line-second animate-fadeUp">
                who loves turning ideas into polished systems.
              </p>

              <p className="hero-second-line animate-fadeUp-delayed">
                <span className="block">
                  This is my little corner of the web,and{" "}
                </span>
                <span className="block my-1">
                  I'm {" "}
                  <span className="bg-app-darkBlue-100 text-app-white-100 dark:text-app-darkBlue-100 dark:bg-app-white-100 py-1 px-1 rounded-sm">
                    actively looking
                  </span>{" "}
                  for my next
                </span>
                <DecryptedText rounds={10} text=" opportunity." />
              </p>
            </div>
          </div>

          {/* <div className="hero-artwork-wrapper">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
