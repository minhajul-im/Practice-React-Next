import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Form() {
  return (
    <div className="mt-10">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "400px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Description of Product"
          variant="outlined"
        />
        <Box
          component="form"
          sx={{ "& > :not(style)": { width: "198px", margin: "0 1px" } }}
        >
          <TextField id="outlined-basic" label="$ Price" variant="outlined" />
          <TextField id="outlined-basic" label="Rating" variant="outlined" />
        </Box>

        <TextField id="outlined-basic" label="Image url" variant="outlined" />
      </Box>
    </div>
  );
}
