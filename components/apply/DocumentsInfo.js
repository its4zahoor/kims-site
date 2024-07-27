import React from "react";
import InputField, {
  ArrowIcon,
  DateField,
  FileField,
  SelectField,
} from "../common/InputField";
import { useFormikContext } from "formik";
import { Typography } from "@mui/material";

const DocumentsInfoForm = ({ onNext }) => {
  const { isValid, dirty, errors } = useFormikContext();
  const formValid = isValid && dirty;
  return (
    <div>
      <h1 className="uppercase text-[#1C3E68] my-2">Upload Documents</h1>
      <div className="grid grid-cols-1 gap-[16px]">
        <FileField
          name="documentFile"
          label={"File Upload*"}
          helperText={
            "Upload All Your Academic Record In single archive file (less then 10kbs)."
          }
        />
        <div>
          <Typography fontWeight={"bold"} variant="body1">
            Note for Medical Program:
          </Typography>
          <Typography variant="body1">
            For Medical Sciences Programs pay fee at Bank of Khyber Account no.
            PK33KHYB0309002009017577
          </Typography>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-6">
        <button
          onClick={onNext}
          disabled={!formValid}
          className="text-white disabled:bg-[#f3f3f3] disabled:!text-[#101010] bg-[#04824B] gap-2 flex items-center justify-center  rounded-[25px] w-full md:w-[50%] min-h-[50px]"
        >
          Submit <ArrowIcon color={formValid ? "white" : "#101010"} />
        </button>
      </div>
    </div>
  );
};
export default DocumentsInfoForm;
