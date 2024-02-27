import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type QueryKey = [string, string | number];

const fetchingProductDetails = async ({ queryKey }: { queryKey: QueryKey }) => {
  const response = await axios.get(
    `http://localhost:8000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

interface PropsId {
  id: string | number;
}

export default function DetailsOfProduct({ id }: PropsId) {
  const {
    data: product,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: fetchingProductDetails,
    // retry: false,
  });

  if (isLoading) return <h1>FETCHING...</h1>;
  if (isError) return <h1>ERROR: {error.message}</h1>;

  return (
    <div className="mt-10">
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader title={product.title} />
        <CardMedia
          component="img"
          height="194"
          image={product.thumbnail}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {product.description} {product.description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <span className="mr-4 font-semibold text-2xl">
            <MonetizationOnSharpIcon /> {product.price}
          </span>
          <Stack spacing={1}>
            <Rating
              name="size-large"
              defaultValue={product.rating}
              size="large"
            />
          </Stack>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
