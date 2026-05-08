import React from "react";
import Image from "next/image";
import Link from "next/link";

import aboutImgYRMain from "../public/yroy/yr_main.jpeg";
import aboutImgYannickRoy from "../public/yroy/yannickroy.png";

const About = () => {
  return (
    <div id="about" className="w-full p-2 py-10 lg:h-screen">
      <div className="max-w-[1240px] m-auto grid grid-cols-3 place-items-center gap-8">
        <div className="col-span-3 md:col-span-2">
          <div>
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              About
            </p>
            <h2 className="py-4">Who I am</h2>
            <p className="py-2 text-xl text-gray-600">
              A NeuroTech expert branching out into Blockchain.
            </p>
            <p className="py-2">
              My expertise resides at the intersection of{" "}
              <i>Brain-Computer Interfaces</i>, <i>Cognitive Neuroscience</i>,{" "}
              <i>Machine Learning</i>, <i>Deep Learning</i>, <i>Data Science</i>
              , <i>Software Dev.</i>, <i>Research</i>, <i>Leadership</i>,{" "}
              <i>Management</i>, <i>Entrepreneurship</i>, and{" "}
              <i>Public Speaking</i>. More recently <i>Blockchain</i>,{" "}
              <i>Smart Contracts</i>, <i>Ethereum</i>, and <i>Solidity</i>
            </p>
            <p className="py-2">
              I&apos;m best known for (1){" "}
              <a
                href="https://neurotechx.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NeuroTechX
              </a>{" "}
              that I started in 2015 and grew to the largest neurotech community
              with chapters and activities all over the world and (2) my{" "}
              <a
                href="https://iopscience.iop.org/article/10.1088/1741-2552/ab260c"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deep Learning review paper for EEG
              </a>{" "}
              (1000+ citations).
            </p>
            <p className="py-2">
              As opposed to most engineers, I don&apos;t fall in love with the
              features I&apos;m building. I remain client-centered and
              product-obsessed. I want to know how it&apos;s being used and what
              people have to say about it.
            </p>
            <p className="py-4 text-gray-600">
              I think we live in the best time in history. What a time to be
              alive!
            </p>
            <Image src={aboutImgYannickRoy} />
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 place-items-center">
          <div className="justify-center flex-auto w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl cursor-pointer shadow-gray-400 rounded-xl hover:scale-105">
            <Link href="/publicspeaking">
              <a>
                <Image
                  className="rounded-xl"
                  src={aboutImgYRMain}
                  width="455"
                  height="521"
                  alt="/"
                ></Image>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/YannickRoy2023-CV_short_neurotech.pdf">
              <a target="_blank" rel="noopener noreferrer">
                <button className="w-full p-5 mt-4 text-gray-100">
                  Download Resume (CV)
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
