import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductType } from "./Product";

interface FormType {
  image_url: string;
  product_description: string;
  product_name: string;
  product_price: string;
  product_rating: string;
}

export default function Form() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const { mutate, isError, isPending, error, isSuccess } = useMutation({
    mutationFn: (newProduct: ProductType) =>
      axios.post(`http://localhost:8000/products`, newProduct),
    onMutate: () => ({ greeting: "Hey there!" }),
    onSuccess: (data, variable, context) => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  const submitProduct = (formData: FormType) => {
    const newProduct = {
      id: crypto.randomUUID().toString(),
      title: formData.product_name,
      description: formData.product_description,
      price: formData.product_price,
      rating: formData.product_rating,
      thumbnail: formData.image_url,
    };
    mutate(newProduct);
  };

  if (isPending) return <h1>PENDING...</h1>;
  if (isError) return <h1>ERROR: {error.message}</h1>;
  return (
    <div className="mt-10">
      {isSuccess && (
        <h1 className=" text-xl font-bold bg-green-600 rounded py-2 px-4 text-center">
          Product added
        </h1>
      )}
      <Box
        onSubmit={handleSubmit(submitProduct)}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "400px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          {...register("product_name", {
            required: "You have to give product name!",
          })}
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
        />
        {errors.product_name && (
          <span className="text-sm text-red-600">
            {errors.product_name.message}
          </span>
        )}
        <TextField
          {...register("product_description")}
          id="outlined-basic"
          label="Description of Product"
          variant="outlined"
        />
        <Box
          component="form"
          sx={{ "& > :not(style)": { width: "198px", margin: "0 1px" } }}
        >
          <TextField
            {...register("product_price")}
            id="outlined-basic"
            label="$ Price"
            variant="outlined"
          />
          <TextField
            {...register("product_rating")}
            id="outlined-basic"
            label="Rating"
            variant="outlined"
          />
        </Box>

        <TextField
          {...register("image_url")}
          id="outlined-basic"
          label="Image url"
          variant="outlined"
        />
        <Stack direction="row" spacing={2}>
          <Button type="submit" variant="outlined">
            Primary
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
