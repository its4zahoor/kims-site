import { TextField as MUITextField } from "@mui/material";

// TODO: not working with react hook form as ref prop is not passed to the input
const TextField = ({ variant = "outlined", sx, ...restProps }) => (
  <MUITextField
    variant={variant}
    sx={{
      width: "100%",
      "& .MuiOutlinedInput-root": {
        backgroundColor: "#FFF",
        color: "#000",
        borderRadius: "25px",
        border: "1px solid rgba(18, 118, 77, 0.10)",
        "&:hover": {
          border: "1.25px solid rgba(18, 118, 77, 0.50)",
        },
        "&.Mui-focused": {
          border: "1.5px solid rgba(18, 118, 77)",
        },
        "&.Mui-error": {
          border: "1.5px solid #FF0000",
        },
      },
      ...sx,
    }}
    {...restProps}
  />
);

export default TextField;
