import { Card, Typography, Grid } from "@mui/material";
import DataGrid from "@/components/common/DataGrid";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { API_URL } from "@/util/constants";

const getTotalFees = (fees) =>
  fees.tuitionFee + fees.admissionFee + fees.extraCurricularFee;
export default function FeeStructure({ data }) {
  const { degreePrograms = [], diplomaPrograms = [] } = useMemo(() => {
    const { rows: programs = [] } = data;
    const { diplomaPrograms, degreePrograms } = programs.reduce(
      (result, row) => {
        const program = {
          ...row,
          ...row.programFee,
          totalFees: getTotalFees(row.programFee),
        };
        if (row.programTypeType === "Annual") {
          result.diplomaPrograms.push(program);
        } else {
          result.degreePrograms.push(program);
        }
        return result;
      },
      {
        degreePrograms: [],
        diplomaPrograms: [],
      }
    );
    return {
      degreePrograms: degreePrograms.map((d, idx) => ({ ...d, srNo: idx + 1 })),
      diplomaPrograms: diplomaPrograms.map((d, idx) => ({
        ...d,
        srNo: idx + 1,
      })),
    };
  }, [data]);
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <section
          className="banner-area banner-bg"
          data-background="/assets/img/bg/scholarship-banner.png"
        >
          <Card
            sx={{
              width: "90vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.25,
              backgroundColor: "#BB3131",
              borderRadius: "24px",
              padding: { xs: "61px 20px 52px", md: "55px 20px 74px" },
              padding: 5,
              marginX: { xs: "32px", md: "auto" },
            }}
          >
            {/* TODO: create theme file for mui and define theme */}
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Dax",
                fontSize: { xs: 32, sm: 40 },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                textTransform: "uppercase",
                color: "white",
                maxWidth: "1064px",
              }}
            >
              Khubaib Institute of Nursing
              <br /> Fee Structure
            </Typography>
          </Card>
        </section>

        <Grid
          data-background="/assets/img/scholarship/scholarship-program-bg.png"
          sx={{
            justifyContent: "center",
            padding: { xs: "48px 32px", md: "120px 80px" },
            gap: 0,
            backgroundColor: "#274474",
          }}
          container
        >
          <Grid item sx={{ minWidth: 200, width: "100%" }}>
            <DataGrid
              headerCellStyle={{
                fontSize: "16px",
              }}
              sx={{
                height: "auto",
                border: "none",
                width: "100%",
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,

                "& .MuiDataGrid-main": {
                  borderRadius: "20px",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                },
              }}
              columns={[
                {
                  field: "srNo",
                  headerName: "Sr No.",
                  width: 120,
                },
                {
                  field: "name",
                  headerName: "Degree Program",
                  flex: 1,
                  minWidth: 250,
                },
                {
                  field: "admissionFee",
                  headerName: "Admission Fee (One Time)",
                  width: 250,
                },
                {
                  field: "tuitionFee",
                  headerName: "Tuition Fee (Per Semester)",
                  width: 250,
                },
                {
                  field: "extraCurricularFee",
                  headerName: "Extra Curricular Fee (Per Semester)",
                  width: 300,
                },
                {
                  field: "totalFees",
                  headerName: "1st Semester Total Fee",
                  width: 250,
                },
              ]}
              rows={degreePrograms}
            />
            <DataGrid
              headerCellStyle={{
                fontSize: "16px",
                textAlign: "center",
              }}
              sx={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                border: "none",
                height: "auto",
                "& .MuiDataGrid-main": {
                  borderRadius: "20px",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                },
              }}
              columns={[
                {
                  field: "srNo",
                  headerName: "Sr No.",
                  width: 120,
                },
                {
                  field: "name",
                  headerName: "Diploma Program",
                  flex: 1,
                  minWidth: 250,
                },
                {
                  field: "admissionFee",
                  headerName: "Admission Fee (One Time)",
                  width: 250,
                },
                {
                  field: "tuitionFee",
                  headerName: "Tuition Fee (Annual)",
                  width: 250,
                },
                {
                  field: "extraCurricularFee",
                  headerName: "Extra Curricular Fee (Annual)",
                  width: 300,
                },
                {
                  field: "totalFees",
                  headerName: "1st Annual Total Fee",
                  width: 250,
                },
              ]}
              rows={diplomaPrograms}
            />

            <div className="mt-3 text-white text-center text-[16px]">
              Note: Examination, Registration, Hospital Fees are included. Fee
              Structure is effective for the session {data?.session} only.
            </div>
          </Grid>
        </Grid>
        <Grid
          sx={{
            justifyContent: "center",
            padding: { xs: "48px 32px", md: "120px 80px" },
            gap: 0,
            width: "100%",
          }}
          container
        >
          <Grid item direction="column" width="100%">
            <h1 className="mb-[20px] uppercase text-[40px] text-[#1C3E68] text-center">
              Merit and Need Based - Scholarship Criteria
            </h1>
            <DataGrid
              headerCellStyle={{
                fontSize: "16px",
                textAlign: "center",
              }}
              sx={{
                height: "auto",
                width: "100%",
              }}
              columns={[
                {
                  field: "srNo",
                  headerName: "Sr No.",
                  width: 120,
                },
                {
                  field: "name",
                  headerName: "Scholarship Name",
                  flex: 1.5,
                  minWidth: 250,
                },
                {
                  field: "marks",
                  headerName: "Marks",
                  minWidth: 250,
                  flex: 1,
                },
                {
                  field: "percentage",
                  headerName: "Scholarship Amount",
                  minWidth: 500,
                  flex: 1,
                },
              ]}
              rows={[
                {
                  srNo: 1,
                  id: 1,
                  name: "Talent Based Scholarship",
                  marks: "90% or above",
                  percentage: "25%",
                },
                {
                  srNo: 2,
                  id: 2,
                  name: "Talent Based Scholarship",
                  marks: "85% - 89%",
                  percentage: "20%",
                },
                {
                  srNo: 3,
                  id: 3,
                  name: "Talent Based Scholarship",
                  marks: "80% - 84%",
                  percentage: "15%",
                },
                {
                  srNo: 4,
                  id: 4,
                  name: "Talent Based Scholarship",
                  marks: "75% - 79%",
                  percentage: "10%",
                },
                {
                  srNo: 5,
                  id: 5,
                  name: "Talent Based Scholarship",
                  marks: "50% or above",
                  percentage:
                    "As per Scholarship Management Committee's decision",
                },
              ]}
            />
            <div className="md:px-[80px] md:pt-[40px]">
              <h4 className="text-red-500 my-3">Note:</h4>
              <ul className="list-disc">
                <li>
                  The decision of the Scholarship and admission committee shall
                  be final.
                </li>
                <li>
                  The students who are orphans and poor (deserving students) can
                  apply for the need-based scholarship.
                </li>
                <li>
                  Need-based scholarships are available for only 10% of students
                  who avail admission in the institute.
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <section className="-mt-[50px]">
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
      </Layout>
    </>
  );
}
export const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/v1/fees`);
  const data = await res.json();
  return { props: { data } };
};
