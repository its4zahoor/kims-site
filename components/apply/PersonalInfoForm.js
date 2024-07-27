import React, { useMemo } from "react";
import InputField, {
  ArrowIcon,
  DateField,
  FileField,
  SelectField,
} from "../common/InputField";
import { useFormikContext } from "formik";
import citiesList from "./cities.json";

const CITIES = citiesList.map((c) => ({ id: c, name: c }));
const STATES = [
  "Punjab",
  "Sindh",
  "Balochistan",
  "Gilgit",
  "KPK",
  "Islamabad",
].map((s) => ({ id: s, name: s }));
const PERSONAL_INFO_FIELDS = [
  "image",
  "name",
  "guardianName",
  "relation",
  "guardianPhone",
  "gender",
  "dob",
  "email",
  "cnic",
  "phone",
  "mobile",
  "programId",
  "city",
  "state",
  "kmuCatqualified",
  "kmuResultFile",
  "kmuCatChallanFile",
  "address",
  "instituteId",
  "programTypeId",
  "shift",
];

const PersonalInfoForm = ({
  onNext,
  institutes = [],
  programTypes: allProgramTypes = [],
  programs: allPrograms = [],
}) => {
  const { errors, values, setFieldValue } = useFormikContext();
  const formValid = useMemo(
    () => PERSONAL_INFO_FIELDS.every((key) => !errors[key]),
    [errors]
  );
  const programTypes = allProgramTypes.filter(
    (pt) => pt.instituteId === values.instituteId
  );
  const programs = allPrograms.filter(
    (p) => p.programTypeId === values.programTypeId
  );
  const selectedInstitute = institutes.find((i) => i.id === values.instituteId);
  const selectedProgramType = allProgramTypes.find(
    (pt) => pt.id === values.programTypeId
  );
  return (
    <div>
      <h1 className="uppercase text-[#1C3E68] my-2">Personal Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        <div className="md:col-span-2">
          <FileField
            name="image"
            fileType={"image/*"}
            label={"Upload Image*"}
            helperText={
              "Please upload passport size image with blue background"
            }
          />
        </div>
        <InputField name={"name"} label={"Applicant's Name"} />
        <InputField name={"guardianName"} label={"Guardian's Name"} />
        <InputField name={"relation"} label={"Relationship with Guardian"} />
        <InputField
          name={"guardianPhone"}
          label={"Guardian's Mobile No"}
          allowedRegex={/^\d*$/}
        />
        <SelectField
          name={"gender"}
          label={"Select Gender"}
          options={[
            { id: "MALE", name: "Male" },
            { id: "FEMALE", name: "Female" },
            { id: "OTHER", name: "Other" },
          ]}
        />
        <DateField name="dob" label="Date of Birth" />
        <InputField name="email" label="Email Address" />
        <InputField name="cnic" label="CNIC" />
        {/* <div className="md:col-span-2">
          <SelectField name="programId" label="Select Program" options={[]} />
        </div> */}
        <InputField name="phone" label={"Telephone"} allowedRegex={/^\d*$/} />
        <InputField name="mobile" label={"Mobile No"} allowedRegex={/^\d*$/} />
        <div className="md:col-span-2">
          <InputField name="address" label="Address" multiline rows={4} />
        </div>
        <SelectField name={"city"} label={"City"} options={CITIES} />
        <SelectField name={"state"} label={"State/Province"} options={STATES} />
        <div className="md:col-span-2">
          <SelectField
            name={"kmuCatQualified"}
            label="Have you Qualified in KMU CAT? Select yes or no"
            options={[
              {
                id: "Yes",
                name: "Yes",
              },
              {
                id: "No",
                name: "No",
              },
              {
                id: "Not Applicable",
                name: "Not Applicable",
              },
            ]}
            onChange={() => {
              setFieldValue("kmuResultFile", null);
              setFieldValue("kmuCatChallanFile", null);
            }}
          />
        </div>
        {["Yes", "No"].includes(values.kmuCatQualified) && (
          <div className="md:col-span-2">
            <FileField
              name={
                values.kmuCatQualified === "Yes"
                  ? "kmuResultFile"
                  : "kmuCatChallanFile"
              }
              label={`Upload KMU CAT ${
                values.kmuCatQualified === "Yes" ? "Result" : "Challan"
              }`}
            />
          </div>
        )}
        <SelectField
          name={"instituteId"}
          options={institutes}
          label={"Select Program"}
          onChange={() => {
            setFieldValue("programTypeId", null);
            setFieldValue("programId", null);
          }}
        />
        <SelectField
          name={"shift"}
          label={"Select Shift"}
          options={[
            {
              id: "Morning",
              name: "Morning",
            },
            {
              id: "Evening",
              name: "Evening",
            },
          ]}
        />
        <SelectField
          label={`Select ${selectedInstitute?.name}`}
          options={programTypes}
          name={"programTypeId"}
          onChange={() => {
            setFieldValue("programId", null);
          }}
        />
        <SelectField
          label={`Select ${selectedProgramType?.name || "Program"}`}
          options={programs}
          name={"programId"}
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
export default PersonalInfoForm;
