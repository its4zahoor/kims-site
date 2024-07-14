import Link from "next/link";

export default function Banner1() {
  return (
    <>
      <section className="banner-area banner-bg bg-blue-700">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bg-red-500 rounded-2xl mb-4 p-4 text-center">
                <h1 className="text-3xl uppercase text-white">
                  Khubaib institute of medical sciences and nursing
                </h1>
                <div className="text-xl text-white mt-2 mb-4">
                  "Seeking Knowledge and Cultivating Excellence in Healthcare
                  Education and Research"
                </div>
                <button className="py-2 px-4 border-2 font-semibold rounded-full shadow-md focus:outline-none focus:ring focus:ring-opacity-75">
                  <Link href="/courses" className="text-white">
                    <span className="mr-3">Discover More</span>
                    <i class="zmdi zmdi-arrow-right-top" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-700 p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-4 p-4 text-center">
                <h1 className="text-3xl uppercase text-white">
                  Our philosophy
                </h1>
                <div className="text-xl text-white my-2">
                  The Prophetic saying
                </div>
                <div className="text-3xl text-white">
                  "If anyone carries out medical treatment, yet previously he
                  was not known as a medical man, then he takes the
                  responsibility"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-700 p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-4 p-4 text-center">
                <h1 className="text-3xl uppercase text-white">
                  Explore Our Academic Programs
                </h1>
                <div className="text-xl text-white my-2">
                  At KIMS and KIN, our inclusive admissions prioritize merit,
                  offering scholarships. We embrace diversity, welcoming
                  individuals regardless of faith, gender, or nationality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
