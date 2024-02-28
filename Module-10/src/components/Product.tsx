import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useProductContext } from "../hooks/useProductContext";

export interface ProductType {
  id: string | number;
  title: string;
  description: string;
  price: string | number;
  rating: string | number;
  thumbnail: string;
}
interface PropsProduct {
  product: ProductType;
}

export default function Product({ product }: PropsProduct) {
  const { setId } = useProductContext();

  return (
    <Card sx={{ width: 250, height: 270, margin: "1rem 0" }}>
      <CardActionArea onClick={() => setId(product.id)}>
        <CardMedia
          sx={{ height: 180 }}
          component="img"
          image={product.thumbnail}
          alt={product.title}
        />
        <CardContent>
          <Typography
            sx={{
              fontWeight: "700",
              color: "aqua",
              textAlign: "center",
              margin: "1rem 0 0",
            }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {product.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
