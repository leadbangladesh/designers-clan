/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";
import FooterServices from "./FooterServices";
import SocialSection from "./SocialSection";

export default function Footer() {
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
          <div className="container relative mx-auto px-[1.5rem]">
            <div className="mx-auto max-w-7xl">
              <div className="pb-5"></div>
              <div className="mb-18 -mx-4 flex flex-wrap">
                <div className="mb-12 w-full px-4 lg:mb-0 lg:w-2/5">
                  <div className="xs:max-w-xs grid gap-6">
                    <div className="relative  w-[120px] text-primary">
                      <Image
                        src="/logo1.png"
                        alt="Designers Clan Logo"
                        height={514}
                        width={884}
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
                    SERVICES
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
                    USEFUL LINKS
                  </h5>
                  <ul>
                    <li className="mb-4">
                      <Link
                        className="inline-block text-black-70 hover:text-black-90"
                        href="/"
                        data-config-id="auto-txt-11-5"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        className="inline-block text-black-70 hover:text-black-90"
                        href="/about"
                        data-config-id="auto-txt-11-5"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        className="inline-block text-black-70 hover:text-black-90"
                        href="/#services"
                        data-config-id="auto-txt-12-5"
                      >
                        Our Services
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        className="inline-block text-black-70 hover:text-black-90"
                        href="/contact"
                        data-config-id="auto-txt-13-5"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 sm:w-1/3 lg:w-1/5">
                  <h5
                    className="text-lg mb-4 font-semibold text-black-100"
                    data-config-id="auto-txt-15-5"
                  >
                    CONTACT
                  </h5>
                  <ul>
                    <li className="mb-4">
                      <Link
                        href={
                          "https://www.google.com/maps/dir/?api=1&destination=22.34193%2C91.80589"
                        }
                        target="_blank"
                        className="flex items-center gap-1 text-black-70 hover:text-black-90"
                      >
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-3 h-5 w-5"
                        >
                          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg> */}
                        <span>
                          House 8, Road 1, O. R. Nizam Road, Chattogram,
                          Chittagong, Bangladesh
                        </span>
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href={"mailto:designer.clan.bd@gmail.com"}
                        className="flex items-center gap-1 text-black-70 hover:text-black-90"
                      >
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-3 h-5 w-5"
                        >
                          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg> */}
                        <span>designer.clan.bd@gmail.com</span>
                      </Link>
                    </li>

                    <li className="mb-4">
                      <Link
                        href={"tel:+8801306-275181"}
                        className="flex items-center gap-1 text-black-70 hover:text-black-90"
                      >
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-3 h-5 w-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                            clip-rule="evenodd"
                          />
                        </svg> */}
                        <span>+88 01306-275181</span>
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
