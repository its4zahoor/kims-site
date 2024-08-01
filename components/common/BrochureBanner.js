import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BrochureBanner() {
  return (
    <>
      <section className="bg-offwhite-kims -mt-[50px]">
        <div className="container relative -bottom-40 rounded-3xl">
          <Image
            sizes="25vw"
            src="/assets/img/home/brochure.png"
            width={50}
            height={50}
            style={{
              width: "100%",
              height: "50vh",
              objectFit: "cover",
            }}
            className="rounded-3xl"
          />
          <div className="absolute top-20 left-40 uppercase text-white">
            <div className="w-2/5 flex flex-col relative">
              <span>Download our brochure</span>
              <span className="text-3xl font-extrabold mb-4">
                Ready to explore our full suite of academic & Guide solutions?
              </span>
              <span>
                <button className="mt-4 py-2 px-4 border-white border-2 font-semibold rounded-full shadow-md hover:bg-gray-200">
                  <Link href="#" className="text-white">
                    <span className="mr-3">Download Our Brochure</span>
                    <i class="zmdi zmdi-download" />
                  </Link>
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#101010] h-[150px]"></section>
    </>
  );
}
