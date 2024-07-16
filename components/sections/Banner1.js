import Image from "next/image";
import Link from "next/link";

export default function Banner1() {
  return (
    <>
      <section className="bg-blue-kims h-screen">
        <video
          src={require("../../public/assets/videos/home/5d35-484a-a140-a9a0cd6290b2.webm")}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 h-screen w-screen object-cover object-center"
        />
        <div className="bg-red-kims rounded-3xl px-20 py-5 text-center bottom-10 z-10 absolute left-1/2 transform -translate-x-1/2 w-max">
          <h1 className="text-3xl uppercase text-white">
            Khubaib institute of medical sciences and nursing
          </h1>
          <div className="text-xl text-white mt-2 mb-4">
            "Seeking Knowledge and Cultivating Excellence in Healthcare
            Education and Research"
          </div>
          <button className="py-2 px-4 border-2 font-semibold rounded-full shadow-md hover:bg-red-800 hover:ring-opacity-50 focus:outline-none">
            <Link href="/courses" className="text-white">
              <span className="mr-3">Discover More</span>
              <i class="zmdi zmdi-arrow-right-top" />
            </Link>
          </button>
        </div>
      </section>
      <div className="flex flex-col">
        <section className="bg-blue-kims p-5">
          <div className="container mb-4 p-4 text-center">
            <h1 className="text-3xl uppercase text-white">Our philosophy</h1>
            <div className="text-xl text-white my-2">The Prophetic saying</div>
            <div className="text-3xl text-white">
              "If anyone carries out medical treatment, yet previously he was
              not known as a medical man, then he takes the responsibility"
            </div>
          </div>
        </section>
        <section className="bg-blue-kims p-5">
          <div className="container mb-4 p-4 text-center">
            <h1 className="text-3xl uppercase text-white">
              Explore Our Academic Programs
            </h1>
            <div className="text-xl text-white my-2">
              At KIMS and KIN, our inclusive admissions prioritize merit,
              offering scholarships. We embrace diversity, welcoming individuals
              regardless of faith, gender, or nationality.
            </div>
          </div>
        </section>
        <section className="bg-blue-kims">
          <div className="container flex justify-between relative -bottom-20">
            <div>
              <div className="relative">
                <Image
                  sizes="25vw"
                  src="/assets/img/home/kims_card.png"
                  width={50}
                  height={50}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <span className="absolute bottom-5 left-10 uppercase text-white text-3xl font-extrabold">
                  Khubaib Institute of Medical Sciences
                </span>
              </div>
            </div>
            <div>
              <div className="relative">
                <Image
                  src="/assets/img/home/kin_card.png"
                  sizes="25vw"
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <span className="absolute bottom-5 left-10 uppercase text-white text-3xl font-extrabold">
                  Khubaib Institute of Nursing
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="p-5">
          <div className="container mb-4 p-4 text-center">This 33</div>
        </section>
        <section className="bg-red-kims p-5">
          <div className="container p-4 flex justify-between text-white">
            <div className="text-3xl uppercase text-white font-extrabold w-1/2">
              WHY Khubaib institute of medical sciences and nursing
            </div>
            <div className="w-1/2">
              <div>
                KIMS & KIN, established in 2023, provides quality healthcare
                education recognized by the Higher Education Regulatory
                Authority (HERA) -KP. Affiliated with Khyber Medical University,
                our programs, accredited by the Pakistan Nursing & Midwifery
                Council (PNMC) and Paramedics and Allied Health Sciences
                (FPAHS), prepare students for careers in Nursing, paramedics,
                and allied health sciences. Our commitment to global excellence,
                high-quality faculty, and collaborations prepares graduates for
                leadership worldwide. A well-equipped infrastructure, strong DHQ
                Hospital partnership, and exposure to real-life cases allow
                students to contribute to social welfare while gaining
                practical knowledge.
              </div>
              <button className="mt-4 py-2 px-4 border-2 font-semibold rounded-full shadow-md hover:bg-red-800 hover:ring-opacity-50 focus:outline-none">
                <Link href="/courses" className="text-white">
                  <span className="mr-3">Discover More</span>
                  <i class="zmdi zmdi-arrow-right-top" />
                </Link>
              </button>
            </div>
          </div>
        </section>
        <section className="flex">
          <div className="w-1/4 relative">
            <Image
              // fill
              width={1}
              height={1}
              sizes="25vw"
              src="/assets/img/home/library.png"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <span className="absolute bottom-5 left-10 uppercase text-white text-3xl font-extrabold">
              library
            </span>
            <Image
              width={36}
              height={36}
              src="/assets/img/icons/red_arrow_down.svg"
              className="absolute bottom-5 right-10"
            />
          </div>
          <div className="w-1/4 relative">
            <Image fill sizes="25vw" src="/assets/img/home/labs.png" />
            <span className="absolute bottom-5 left-10 uppercase text-white text-3xl font-extrabold">
              labs
            </span>
            <Image
              width={36}
              height={36}
              src="/assets/img/icons/red_arrow_down.svg"
              className="absolute bottom-5 right-10"
            />
          </div>
          <div className="w-1/4 relative">
            <Image fill sizes="25vw" src="/assets/img/home/sports.png" />
            <span className="absolute bottom-5 left-10 uppercase text-white text-3xl font-extrabold">
              sports
            </span>
            <Image
              width={36}
              height={36}
              src="/assets/img/icons/red_arrow_down.svg"
              className="absolute bottom-5 right-10"
            />
          </div>
          <div className="w-1/4 relative">
            <Image fill sizes="25vw" src="/assets/img/home/facilities.png" />
            <span className="absolute bottom-5 left-10 uppercase text-white text-3xl font-extrabold">
              facilities
            </span>
            <Image
              width={36}
              height={36}
              src="/assets/img/icons/red_arrow_down.svg"
              className="absolute bottom-5 right-10"
            />
          </div>
        </section>
      </div>
    </>
  );
}
