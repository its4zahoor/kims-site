import React, { useMemo } from "react";
import InputField, {
  ArrowIcon,
  DateField,
  FileField,
  SelectField,
} from "../common/InputField";
import { useFormikContext } from "formik";
const AddIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={23}
    fill="none"
    {...props}
  >
    <path
      fill="#101010"
      d="M21.472 12.62H12.12v10.304H9.824V12.62H.528v-2.296h9.296V.076h2.296v10.248h9.352v2.296Z"
      opacity={0.25}
      a
    />
  </svg>
);
const AddButton = ({ onClick, title }) => {
  return (
    <div className="flex mx-auto flex-col gap-[16px] text-center items-center justify-center">
      <button
        onClick={onClick}
        className="rounded-full h-[80px] w-[80px] bg-[#f3f3f3] flex items-center justify-center"
      >
        <AddIcon />
      </button>
      <div>{title}</div>
    </div>
  );
};
const DegreeFields = ({ name, required, isCertification }) => {
  return (
    <div className="grid grid-cols-1 gap-[16px]">
      <InputField
        name={`${name}.name`}
        label={
          isCertification
            ? "Other Certification"
            : `Degree/Certification${required ? "*" : ""}`
        }
      />
      <div className="grid grid-cols-1 gap-[16px] md:grid-cols-3">
        <InputField
          name={`${name}.majorSubject`}
          label={`Major Subject${required ? "*" : ""}`}
        />
        <InputField
          allowedRegex={/^\d*$/}
          name={`${name}.passingYear`}
          label={`Passing Year${required ? "*" : ""}`}
        />
        <InputField
          name={`${name}.obtainedMarks`}
          label={`Obtained Marks${required ? "*" : ""}`}
        />
      </div>
    </div>
  );
};
const ACADEMIC_FIELDS = ["degrees", "certifications"];
const AcademicInfoForm = ({ onNext }) => {
  const { errors, values, setFieldValue } = useFormikContext();
  const formValid = useMemo(
    () => ACADEMIC_FIELDS.every((key) => !errors[key]),
    [errors]
  );
  return (
    <div>
      <h1 className="uppercase text-[#1C3E68] my-2">Academic Records</h1>
      <div className="grid grid-cols-1 gap-[16px]">
        {values?.degrees?.map((degree, idx) => {
          return <DegreeFields name={`degrees[${idx}]`} required={idx === 0} />;
        })}
        <AddButton
          onClick={() => {
            setFieldValue("degrees", [
              ...values?.degrees,
              {
                name: "",
                majorSubject: "",
                passingYear: "",
                obtainedMarks: "",
              },
            ]);
          }}
          title={"Add More Degree/Certifications"}
        />
        {values?.certifications?.map((d, idx) => {
          return (
            <DegreeFields name={`certifications[${idx}]`} isCertification />
          );
        })}
        <AddButton
          onClick={() => {
            setFieldValue("certifications", [
              ...values?.certifications,
              {
                name: "",
                majorSubject: "",
                passingYear: "",
                obtainedMarks: "",
              },
            ]);
          }}
          title={"Add Other Certifications"}
        />
      </div>
      <div className="flex items-center justify-center w-full mt-6">
        <button
          onClick={onNext}
          disabled={!formValid}
          className="text-white disabled:bg-[#f3f3f3] disabled:!text-[#101010] bg-[#04824B] gap-2 flex items-center justify-center  rounded-[25px] w-full md:w-[50%] min-h-[50px]"
        >
          NEXT <ArrowIcon color={formValid ? "white" : "#101010"} />
        </button>
      </div>
    </div>
  );
};
export default AcademicInfoForm;
