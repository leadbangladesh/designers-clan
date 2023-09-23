/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import FooterServices from "./FooterServices";
import SocialSection from "./SocialSection";

export default function Footer() {
  const router = useRouter();

  return (
    <footer
      style={{
        background:
          "linear-gradient(90deg, #8CA5FF -81.91%, rgba(255, 236, 214, 0.9) 52.5%, #92FCE9 171.84%)",
      }}
    >
      <div className="" id="content">
        <section
          data-section-id="1"
          data-share=""
          data-category="footers"
          data-component-id="7fd1b1dd_05_awz"
          className="relative overflow-hidden py-20"
        >
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-7xl">
              <div className=" pb-10"></div>
              <div className="mb-18 -mx-4 flex flex-wrap">
                <div className="mb-12 w-full px-4 lg:mb-0 lg:w-2/5">
                  <div className="xs:max-w-xs grid gap-6">
                    <div className="relative  w-[200px] text-primary">
                      <Image
                        src={`${router.basePath}/logo3.png`}
                        alt="Designers Clan Logo"
                        height={126}
                        width={600}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <h2 className="leading-7 text-black-70">
                      Where Pixels and Passion Converge into <br />
                      Digital Masterpieces.
                    </h2>
                    <SocialSection />
                  </div>
                </div>
                <div className="mb-8 w-full px-4 sm:mb-0 sm:w-1/3 lg:w-1/5">
                  <h5
                    className="text-lg mb-4 font-semibold text-black-100"
                    data-config-id="auto-txt-5-5"
                  >
                    Services
                  </h5>
                  <ul>
                    <FooterServices />
                  </ul>
                </div>
                <div className="mb-8 w-full px-4 sm:mb-0 sm:w-1/3 lg:w-1/5">
                  <h5
                    className="text-lg mb-3 font-semibold text-black-100"
                    data-config-id="auto-txt-10-5"
                  >
                    About
                  </h5>
                  <ul>
                    <li className="mb-4">
                      <Link
                        className="inline-block text-black-70 hover:text-black-90"
                        href="/about"
                        data-config-id="auto-txt-11-5"
                      >
                        Our Story
                      </Link>
                    </li>
                    <li className="mb-4">
                      <a
                        className="inline-block text-black-70 hover:text-black-90"
                        href="#"
                        data-config-id="auto-txt-12-5"
                      >
                        Benefits
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="inline-block text-black-70 hover:text-black-90"
                        href="#"
                        data-config-id="auto-txt-13-5"
                      >
                        Team
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 sm:w-1/3 lg:w-1/5">
                  <h5
                    className="text-lg mb-4 font-semibold text-black-100"
                    data-config-id="auto-txt-15-5"
                  >
                    Help
                  </h5>
                  <ul>
                    <li className="mb-4">
                      <a
                        className="inline-block text-black-70 hover:text-black-90"
                        href="#"
                        data-config-id="auto-txt-16-5"
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <Link
                        className="inline-block text-black-70 hover:text-black-90"
                        href="/contact"
                        data-config-id="auto-txt-17-5"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
