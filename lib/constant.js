export const inputStyle = {
  width: "100%",
  "& .MuiOutlinedInput-root": {
    // height: '50px',
    backgroundColor: "#F8F9FA",
    border: "none", // Removes the border
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Removes the shadow
    "&:hover": {
      border: "none", // Removes border on hover
    },
    "&.Mui-focused": {
      border: "none", // Removes border on focus
      boxShadow: "10px", // Removes focus shadow
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none", // Removes the default outline
  },
};
