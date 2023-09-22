'use client'

import { ourServices } from './section/home/Services';

const FooterServices = () => {
  return (
    <>
      {ourServices.map((service) => (
        <li className="mb-4" key={service.name}>
          <a
            className="inline-block text-black-70 hover:text-black-90"
            href="#"
            data-config-id="auto-txt-6-5"
          >
            {service.name}
          </a>
        </li>
      ))}
    </>
  );
}

export default FooterServices