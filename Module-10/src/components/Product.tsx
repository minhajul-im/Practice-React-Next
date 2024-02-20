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

  const handleDetailsProduct = () => {
    setId(product.id);
  };
  return (
    <Card sx={{ maxWidth: 345, margin: "1rem 0" }}>
      <CardActionArea onClick={handleDetailsProduct}>
        <CardMedia
          component="img"
          height="140"
          image={product.thumbnail}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
