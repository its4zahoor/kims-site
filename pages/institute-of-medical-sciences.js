import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

function MedicalPage() {
  return (
    <>
      <section className="bg-blue-kims h-screen">
        <Image
          sizes="25vw"
          src="/assets/img/bg/scholarship-banner.png"
          width={50}
          height={50}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div className="bg-red-kims rounded-3xl px-10 py-5 text-center bottom-10 z-10 absolute left-1/2 transform -translate-x-1/2 container">
          <h1 className="text-3xl uppercase text-white">
            Welcome to Khubaib Institute of Medical Sciences
          </h1>
          <div className="container flex justify-between relative -bottom-36">
            <div className="bg-white w-[600px] h-[200px] rounded-3xl m-3">
              <Image
                sizes="25vw"
                src="/assets/img/icons/icon-park-outline_degree-hat.svg"
                width={50}
                height={50}
                className="w-[100px] h-[100px] bg-green-700 rounded-full px-3 relative left-1/2 transform -translate-x-1/2 -top-10"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              <span className="mt-4 text-3xl font-extrabold">
                Diploma Programs
              </span>
            </div>
            <div className="bg-white w-[600px] h-[200px] rounded-3xl m-3">
              <Image
                sizes="25vw"
                src="/assets/img/icons/icon-park-outline_degree-hat.svg"
                width={50}
                height={50}
                className="w-[100px] h-[100px] bg-green-700 rounded-full px-3 relative left-1/2 transform -translate-x-1/2 -top-10"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              <span className="mt-4 text-3xl font-extrabold">
                Degree Programs
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col">
        <section className="bg-blue-kims p-5">
          <div className="container mb-4 text-center mt-5">
            <h1 className="text-3xl uppercase text-white">
              Khubaib Institute of Nursing (KIN)
            </h1>
            <div className="text-xl text-white my-4">
              Khubaib Institute of Nursing (KIN) is the founding entity of
              Khubaib Education Project. The institute is committed to achieve a
              benchmark for nursing education in the country through a highest
              level of commitment to excellence in the field of nursing and
              healthcare education, research and practice
            </div>
          </div>
        </section>
        {/* <section className="bg-blue-kims p-5">
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
        </section> */}
        <section>
          <div className="flex flex-col container">
            <h2 className="text-3xl uppercase text-inherit text-center m-5">
              Diploma Programs
            </h2>
            <div className="bg-green-kims p-5 h-1/4 w-full rounded-3xl">
              <h3 className="text-white">Certified Nursing Assistant (CNA)</h3>
              <div className="text-offwhite-kims">
                The Certified Nursing Assistant (CNA) program provides students
                with the foundational knowledge and skills needed to assist
                nurses and other healthcare professionals in delivering basic
                patient care. Throughout the program, students learn about
                patient hygiene, vital signs monitoring, mobility assistance,
                and infection control procedures. They also receive training in
                communication skills and patient interaction. Upon completion of
                the program and passing a competency exam, graduates become
                certified nursing assistants, eligible for employment in various
                healthcare settings such as nursing homes, hospitals, and home
                care agencies. CNAs play a vital role in providing essential
                care and support to patients, contributing to their comfort,
                well-being, and overall quality of life.
              </div>
              <div>
                <button className="mt-4 py-2 bg-blue-kims px-4 border-white border-2 font-semibold rounded-full shadow-md hover:bg-gray-200">
                  <Link href="#" className="text-white">
                    <span className="mr-3">Apply</span>
                    <i class="zmdi zmdi-arrow-right-top" />
                  </Link>
                </button>
              </div>
            </div>
            <div className="bg-green-kims my-3 p-5 h-1/4 w-full rounded-3xl">
              <h3 className="text-white">Community Midwifery (CMW)</h3>
              <div className="text-offwhite-kims">
                The Community Midwifery (CMW) program trains students to provide
                essential maternal and newborn care within community settings.
                Students learn about prenatal care, childbirth assistance,
                postpartum support, and newborn care techniques. Through a
                combination of classroom instruction and hands-on clinical
                experience, students develop skills in conducting routine
                prenatal assessments, assisting with labor and delivery, and
                providing education and support to expectant mothers and their
                families. Graduates of the CMW program play a crucial role in
                promoting maternal and infant health, particularly in
                underserved communities where access to healthcare services may
                be limited. They serve as advocates for maternal and newborn
                well-being, empowering families to make informed decisions and
                ensuring safe and positive birth experiences.
              </div>
              <div>
                <button className="mt-4 py-2 bg-blue-kims px-4 border-white border-2 font-semibold rounded-full shadow-md hover:bg-gray-200">
                  <Link href="#" className="text-white">
                    <span className="mr-3">Apply</span>
                    <i class="zmdi zmdi-arrow-right-top" />
                  </Link>
                </button>
              </div>
            </div>
            <div className="bg-green-kims my-3 p-5 h-1/4 w-full rounded-3xl">
              <h3 className="text-white">Lady Health Visitor (LHV)</h3>
              <div className="text-offwhite-kims">
                The Lady Health Visitor (LHV) program trains individuals to
                serve as primary healthcare providers and community health
                educators, particularly focusing on women's and children's
                health. Students learn about preventive healthcare, family
                planning, maternal and child health, and community health
                promotion strategies. Through classroom instruction, fieldwork,
                and practical training, students develop skills in conducting
                health assessments, providing basic medical care, and delivering
                health education programs. Graduates of the LHV program play a
                crucial role in improving healthcare access and outcomes,
                particularly in rural and underserved areas. They work closely
                with communities to address health disparities, promote healthy
                behaviors, and empower individuals to take charge of their
                health and well-being.
              </div>
              <div>
                <button className="mt-4 py-2 bg-blue-kims px-4 border-white border-2 font-semibold rounded-full shadow-md hover:bg-gray-200">
                  <Link href="#" className="text-white">
                    <span className="mr-3">Apply</span>
                    <i class="zmdi zmdi-arrow-right-top" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-kims p-5">
          <div className="container flex justify-between text-white">
            <div className="text-2xl text-white font-extrabold w-1/2 pr-5">
              <div className="text-sm uppercase">Eligibility Criteria</div>
              To be eligible for admission to the Diploma programs
            </div>
            <div className="w-1/2 p-3">
              <ul className="list-disc">
                <li>
                  Basic qualification is Matric with science or equivalent
                  qualification with at least fifty percent (50%) marks of total
                  obtainable marks (specifically Biology as one compulsory
                  subject) except Category B Pharmacy.
                </li>
                <li>
                  10% weightage will be given to F.Sc premedical or equivalent
                  qualification with at least 50% marks of total obtainable
                  marks.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-offwhite-kims p-5">
          <div className="container relative -bottom-36">
            <h2 className="text-3xl uppercase text-inherit text-center m-5">
              Degree Programs
            </h2>
            <div className="flex justify-between items-stretch">
              <div className="bg-red-kims m-3 p-5 w-full rounded-3xl">
                <h3 className="text-white">Radiology and Imaging Technology</h3>
                <div className="text-offwhite-kims">
                  Our Radiology and Imaging Technology courses empower students
                  with skills to operate diagnostic imaging equipment
                  effectively. The curriculum covers X-ray, CT, MRI, and
                  ultrasound modalities. Hands-on training ensures proficiency
                  in patient positioning, equipment adjustment, and image
                  quality assurance. Graduates are well-equipped for roles in
                  hospitals, clinics, and diagnostic imaging centers,
                  contributing to precise medical diagnosis and treatment
                  through high-quality diagnostic images.
                </div>
                <div>
                  <button className="mt-4 py-2 bg-blue-kims px-4 border-white border-2 font-semibold rounded-full shadow-md hover:bg-gray-200">
                    <Link href="#" className="text-white">
                      <span className="mr-3">Apply Now</span>
                      <i class="zmdi zmdi-arrow-right-top" />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="bg-red-kims m-3 p-5 w-full rounded-3xl">
                <h3 className="text-white">
                  Doctor of Physical Therapy /10 semesters
                </h3>
                <div className="text-offwhite-kims">
                  The 10-semester Doctor of Physical Therapy (DPT) program
                  readies students for advanced practice, covering anatomy,
                  biomechanics, therapeutic exercise, and rehabilitation
                  techniques. Hands-on clinical experience in diverse healthcare
                  settings, internships, and practicums enhance real-world
                  patient care application. Graduates emerge as skilled and
                  compassionate physical therapists, addressing musculoskeletal,
                  neurological, and cardiopulmonary conditions for optimal
                  physical function and quality of life.
                </div>
                <div>
                  <button className="mt-4 py-2 bg-blue-kims px-4 border-white border-2 font-semibold rounded-full shadow-md hover:bg-gray-200">
                    <Link href="#" className="text-white">
                      <span className="mr-3">Apply Now</span>
                      <i class="zmdi zmdi-arrow-right-top" />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="bg-red-kims m-3 p-5 w-full rounded-3xl">
                <h3 className="text-white">Health Technology</h3>
                <div className="text-offwhite-kims">
                  Health Technology courses at Khubaib Institute of Medical
                  Sciences explore the synergy between healthcare and
                  technology, emphasizing innovative solutions to elevate
                  patient care and healthcare delivery. Students engage with
                  electronic health records (EHR), telemedicine, medical
                  imaging, and healthcare informatics. Practical training equips
                  them with skills in implementing health information systems
                  and analyzing healthcare data. Graduates are well-prepared for
                  roles in healthcare organizations, IT firms, and government
                  agencies, contributing to improved efficiency, accuracy, and
                  accessibility in healthcare services through technology.
                </div>
                <div>
                  <button className="mt-4 py-2 bg-blue-kims px-4 border-white border-2 font-semibold rounded-full shadow-md hover:bg-gray-200">
                    <Link href="#" className="text-white">
                      <span className="mr-3">Apply Now</span>
                      <i class="zmdi zmdi-arrow-right-top" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-kims p-5"></section>
        <section className="bg-blue-kims p-5">
          <div className="container flex justify-between text-white">
            <div className="text-2xl text-white font-extrabold w-1/2 pr-5">
              <div className="text-sm uppercase">Eligibility Criteria</div>
              To be eligible for admission to the Diploma programs
            </div>
            <div className="w-1/2 p-3">
              <ul className="list-disc">
                <li>
                  Basic qualification is Matric with science or equivalent
                  qualification with at least fifty percent (50%) marks of total
                  obtainable marks (specifically Biology as one compulsory
                  subject) except Category B Pharmacy.
                </li>
                <li>
                  10% weightage will be given to F.Sc premedical or equivalent
                  qualification with at least 50% marks of total obtainable
                  marks.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-offwhite-kims p-5">
          <div className="container flex justify-between">
            <div className="text-2xl w-1/2 pr-5">
              <div className="text-base uppercase text-red-700 font-bold">
                Admission Application Process
              </div>
              <div className="p-3 font-medium">
                <ul className="list-decimal">
                  <li>
                    Each candidate shall make an application for admission in
                    response to an advertisement by the Institute on a
                    prescribed form along with the documents specified in the
                    form.
                  </li>
                  <li>
                    Admission to the program shall be made based on cumulative
                    merit determined from the previous academic record and
                    interview.
                  </li>
                  <li>
                    Selection/merit will be based on the percentage of matric
                    marks at 90% and F.Sc's 10% weightage (if applicable).
                  </li>
                </ul>
                <p className="mt-3 font-semibold">
                  An additional twenty (20) marks will be added to the marks
                  obtained in SSC for Hafiz Quran (The criteria for Hafiz Quran
                  are the Hifz Test and a certificate from registered Deeni
                  Madrassa).
                </p>
              </div>
            </div>
            <div className="w-1/2 p-3">
              <p className="text-xl">
                All the applicants shall ensure the following documents enclosed
                with application form to be submitted to the concerned
                institute.
              </p>
              <ul className="list-disc list-inside ml-5">
                <li>
                  Attested copies of SSC/FSc (Pre-Medical) certificates and
                  detailed marks certificates of both examinations.
                </li>
                <li>
                  Attested photocopy of Domicile Certificate Attested photocopy
                  of CNIC or Form-B of the applicant Attested photocopy of
                  Father/Guardian CNIC.
                </li>
                <li>
                  Character certificate from the educational institution last
                  attended by the applicant.
                </li>
                <li>
                  Three recent passport-sized photographs with a blue background
                  were duly attested.
                </li>
                <li>
                  Valid disability certificate (where applicable) Service
                  Certificate (for In-service applicants)
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-red-kims p-5">
          <div className="container flex justify-between text-white">
            <div className="text-2xl text-white font-extrabold w-1/2 pr-5">
              <div className="text-sm uppercase">Notes:</div>
              An additional twenty (20) marks will be added to the marks
              obtained in SSC for Hafiz Quran (The criteria for Hafiz Quran are
              the Hifz Test and a certificate from registered Deeni Madrassa).
            </div>
            <div className="w-1/2 p-3">
              <p className="text-white text-xl">
                All the applicants shall ensure the following documents enclosed
                with application form to be submitted to the concerned
                institute.
              </p>
              <ul className="list-disc list-inside ml-5">
                <li>
                  Attested copies of SSC/FSc (Pre-Medical) certificates and
                  detailed marks certificates of both examinations.
                </li>
                <li>
                  Attested photocopy of Domicile Certificate Attested photocopy
                  of CNIC or Form-B of the applicant Attested photocopy of
                  Father/Guardian CNIC.
                </li>
                <li>
                  Character certificate from the educational institution last
                  attended by the applicant.
                </li>
                <li>
                  Three recent passport-sized photographs with a blue background
                  were duly attested.
                </li>
                <li>
                  Valid disability certificate (where applicable) Service
                  Certificate (for In-service applicants)
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default function NursingInstiute() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <MedicalPage />
    </Layout>
  );
}
