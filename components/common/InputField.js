import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useField, useFormikContext } from "formik";
import React, { useRef } from "react";

const InputField = ({ name, label, allowedRegex, ...props }) => {
  const [{ value = "" }, { error, touched }, { setValue, setTouched }] =
    useField(name);
  return (
    <div>
      <TextField
        label={label}
        //   size="small"
        fullWidth
        {...props}
        value={value}
        onChange={(event) => {
          const value = event.target.value;
          if (!allowedRegex || allowedRegex.test(value)) setValue(value);
        }}
        onBlur={() => !touched && setTouched(true)}
        helperText={touched && error ? error : ""}
        error={touched && !!error}
        placeholder={label}
        InputProps={{
          style: {
            borderRadius: "25px",
            borderColor: "#12764D",
            ...(!props.multiline ? { height: "50px" } : {}),
          },
        }}
        sx={{
          borderRadius: "25px",
          borderColor: "#12764D",
        }}
      />
    </div>
  );
};
export default InputField;
const DateIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={20}
      height={20}
      x={2}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        stroke="silver"
        strokeOpacity={0.25}
        strokeWidth={1.2}
        d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10v1H3v-1Z"
      />
      <path
        stroke="#fff"
        strokeWidth={1.2}
        d="M19 6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={1.2}
        d="M7 3v5m10-5v5"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="#04824B" d="M0 0h24v24H0V0Z" />
    </g>
  </svg>
);
export const DateField = ({ name, label, ...props }) => {
  const { validateForm } = useFormikContext();
  const [{ value }, { error, touched }, { setValue, setTouched }] =
    useField(name);
  return (
    <DatePicker
      slotProps={{
        textField: {
          label,
          variant: "outlined",
          fullWidth: true,
          error: touched && !!error,
          InputProps: {
            style: {
              borderRadius: "25px",
              borderColor: "#12764D",
              height: "50px",
            },
          },

          helperText: error && touched ? error : "",
        },
      }}
      slots={{
        openPickerIcon: DateIcon,
      }}
      {...props}
      value={value}
      onChange={(value) => {
        setValue(value);
        !touched && setTouched(true);
        setTimeout(validateForm, 0);
      }}
    />
  );
};
export const ArrowIcon = ({ color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    style={{ marginRight: "8px" }}
    {...props}
  >
    <path
      stroke={color || "#04824B"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M2 14 14 2m0 0v11.52M14 2H2.48"
    />
  </svg>
);
export const SelectField = ({
  name,
  label,
  options = [],
  valueKey = "id",
  labelKey = "name",
  ...props
}) => {
  const { validateForm } = useFormikContext();
  const [{ value = undefined }, { error, touched }, { setValue, setTouched }] =
    useField(name);
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        variant="outlined"
        label={label}
        placeholder={"TEst"}
        fullWidth
        error={touched && !!error}
        IconComponent={ArrowIcon}
        helperText={error && touched ? error : ""}
        sx={{ borderRadius: "25px", borderColor: "#12764D", height: "50px" }}
        {...props}
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          console.log("TestL", value);
          setValue(value);
          !touched && setTouched(true);
          props.onChange?.(value);
          setTimeout(validateForm, 0);
        }}
      >
        {/* {!value && <MenuItem value={value}>{label}</MenuItem>} */}
        {options.map((option) => (
          <MenuItem value={option[valueKey]} key={option[valueKey]}>
            {option[labelKey]}
          </MenuItem>
        ))}
      </Select>
      {touched && !!error && <FormHelperText error>{error}</FormHelperText>}
    </FormControl>
  );
};
const FileIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#1C3E68"
      d="M14 18h4v-8h6l-8-8-8 8h6v8Zm6-4.5v3.084L29.158 20 16 24.906 2.842 20 12 16.584V13.5L0 18v8l16 6 16-6v-8l-12-4.5Z"
      opacity={0.5}
    />
  </svg>
);
export const CloseIcon = ({ onClick, color }) => {
  const style = {
    fill: "none",
    stroke: color || "#777",
    strokeLineCap: "round",
    strokeWidth: "2px",
  };
  return (
    <svg
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
      xmlns="http://www.w3.org/2000/svg"
      width="11.77"
      height="11.819"
      viewBox="0 0 11.77 11.819"
    >
      <g id="Group_57" transform="translate(1.414 1.414)">
        <path
          id="Path_32"
          d="M5989.941 7529.029l-8.94 8.991"
          style={style}
          transform="translate(-5980.999 -7529.029)"
        />
        <path
          id="Path_33"
          d="M5981 7529.029l8.939 8.991"
          style={style}
          transform="translate(-5981 -7529.029)"
        />
      </g>
    </svg>
  );
};
export const FileField = ({ name, fileType, helperText, label }) => {
  const ref = useRef();

  const { validateForm } = useFormikContext();
  const [{ value }, { error, touched }, { setValue, setTouched }] =
    useField(name);
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setValue(newFiles[0]);
    }
  };

  return (
    <div className="w-full">
      {label && <div className="text-[15px] text-[#101010] mb-2">{label}</div>}
      <div
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
        className="border w-full flex items-center justify-center rounded-[25px] border-solid h-[120px] border-[#12764D59] w-full"
        onClick={() => {
          ref.current.click();
        }}
      >
        {value ? (
          <div className="flex items-center gap-[8px]">
            {value.name}
            <CloseIcon
              color="currentColor"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setValue(null);
                setTimeout(validateForm, 0);
              }}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2">
            <FileIcon />
            <div className="text-[15px] text-center text-[#10101080]">
              Click or drag a file to this area to upload.
            </div>
          </div>
        )}
        <input
          ref={ref}
          className="hidden"
          accept={fileType}
          type="file"
          name={`${name}-img___`}
          onChange={(e) => {
            const image = e.currentTarget?.files?.[0] || null;
            console.log("IMage:", image);
            setValue(image);
            setTimeout(validateForm, 0);
          }}
        />
      </div>
      {!!helperText && (
        <div className="mt-2 text-[15px] text-[#10101080]">{helperText}</div>
      )}
    </div>
  );
};
