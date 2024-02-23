import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useProductContext } from "../hooks/useProductContext";

type QueryKey = [string, string | number];

const fetchingProductDetails = async ({ queryKey }: { queryKey: QueryKey }) => {
  const response = await axios.get(
    `http://localhost:8000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

export default function ProductDetails() {
  const { id } = useProductContext();
  const {
    data: product,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: fetchingProductDetails,
  });

  if (isLoading) return <h1>FETCHING...</h1>;
  if (isError) return <h1>ERROR: {error.message}</h1>;

  return (
    <div className="bg-slate-300 w-3/12 flex flex-col items-center">
      <h1 className="text-3xl font-bold font-mono py-4 text-teal-400 underline">
        Product Details
      </h1>
      {id && (
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
                {product.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  );
}
