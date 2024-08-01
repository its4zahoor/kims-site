import AcademicInfoForm from "@/components/apply/AcademicInfo";
import DocumentsInfoForm from "@/components/apply/DocumentsInfo";
import PersonalInfoForm from "@/components/apply/PersonalInfoForm";
import { schema } from "@/components/apply/schema";
import Stepper from "@/components/apply/Stepper";
import Layout from "@/components/layout/Layout";
import { API_URL, getData } from "@/util/constants";
import { Card, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { FormikProvider, useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const getErrorMessages = (errors) => Object.values(errors).join("\n");
export default function FeeStructure({ data }) {
  const [state, setState] = useState({ submitted: false, errorMessage: "" });
  const formikProps = useFormik({
    initialValues: {
      activeStep: 0,
      degrees: [{}],
      certifications: [{}],
      instituteId: data?.institutes?.[0]?.id,
    },
    validateOnMount: true,
    validationSchema: schema,
    onSubmit: async (values) => {
      const newValues = {
        ...values,
        dob: dayjs(values.dob).format("YYYY-MM-DD"),
      };
      fetch(`${API_URL}/v1/apply`, {
        method: "POST",
        body: getData(newValues),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            setState((st) => ({ ...st, submitted: true, errorMessage: "" }));
          } else if (res.errors) {
            setState((st) => ({
              ...st,
              submitted: false,
              errorMessage: getErrorMessages(res.errors),
            }));
          } else {
            setState((st) => ({
              ...st,
              submitted: false,
              errorMessage: res.message,
            }));
          }
        })
        .catch((err) => {
          setState((st) => ({
            ...st,
            submitted: false,
            errorMessage: err.message,
          }));
        });
    },
  });
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <section
          className="banner-area banner-bg"
          data-background="/assets/img/bg/application-banner.png"
        >
          <Card
            className="mb-[32px] md:mb-[80px]"
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
              Application Form
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontFamily: "Dax",
                fontSize: { xs: 20, sm: 16 },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: { xs: "32px", sm: "24px" },
                color: "white",
                maxWidth: "1064px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
              laoreet lectus.
            </Typography>{" "}
          </Card>
        </section>
        <section className="px-[20px] md:px-[80px] py-[20px] md:py-[60px] lg:px-[160px]">
          {state.submitted ? (
            <div className="p-4 mt-3 flex flex-col items-center justify-center">
              <Typography variant="h3">Thank You!</Typography>
              <Typography variant="body1">
                Your application has been submitted successfully
              </Typography>
            </div>
          ) : (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormikProvider value={formikProps}>
                <div className=" md:w-[60vw] mx-auto">
                  <Stepper
                    onClick={(a) => {
                      const step = a.target.dataset.step - 1;
                      if (step < formikProps.values.activeStep) {
                        formikProps.setFieldValue("activeStep", step);
                      }
                    }}
                    steps={[
                      "Personal Information",
                      "Academic Record",
                      "Upload Documents",
                    ]}
                    activeStep={formikProps.values.activeStep}
                  />
                </div>

                {formikProps.values.activeStep === 0 ? (
                  <PersonalInfoForm
                    {...data}
                    onNext={() => {
                      formikProps.setFieldValue("activeStep", 1);
                    }}
                  />
                ) : formikProps.values.activeStep === 1 ? (
                  <AcademicInfoForm
                    onNext={() => {
                      formikProps.setFieldValue("activeStep", 2);
                    }}
                  />
                ) : (
                  <DocumentsInfoForm
                    onNext={() => {
                      formikProps.handleSubmit();
                    }}
                  />
                )}
              </FormikProvider>
            </LocalizationProvider>
          )}
          {state.errorMessage && (
            <div className="whitespace-pre-wrap break-words  text-red-700 mt-4 bg-red-100 p-4 rounded-[25px]">
              {state.errorMessage}
            </div>
          )}
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/v1/applicationData`);
  const data = await res.json();
  return { props: { data } };
};
