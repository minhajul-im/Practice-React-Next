export type WatchType = {
  id: string;
  name: string;
  ratings: number[];
  image: string;
  reviews: number[];
  description: string;
  type: string;
  modelNumber: string;
  sizeWithPrice: SizeType[];
};

export type SizeType = {
  size: string;
  regularPrice: number;
  discountPrice: number;
};

import cyan from "../assets/Pasted image (1).png";
import blue from "../assets/Pasted image (2).png";
import black from "../assets/Pasted image (3).png";
import purple from "../assets/Pasted image (4).png";

export const object: { [key: string]: WatchType } = {
  purple: {
    id: "purple",
    name: "Classy Modern Smart Watch - Purple Edition",
    image: purple,
    ratings: [4, 5, 5],
    reviews: [2, 4],
    type: "Watch",
    modelNumber: "Forerunner 290XT Purple",
    description:
      "The Purple Edition offers a unique touch of sophistication. Ideal for those who want a smart watch with a bold, stylish appearance and impressive functionality.",
    sizeWithPrice: [
      {
        size: "S",
        regularPrice: 69,
        discountPrice: 59,
      },
      {
        size: "M",
        regularPrice: 79,
        discountPrice: 69,
      },
      {
        size: "L",
        regularPrice: 89,
        discountPrice: 79,
      },
      {
        size: "XL",
        regularPrice: 99,
        discountPrice: 89,
      },
    ],
  },
  black: {
    id: "black",
    name: "Classic Black Smart Watch",
    image: black,
    ratings: [3, 4, 5],
    reviews: [1, 3],
    type: "Watch",
    modelNumber: "Forerunner 290XT Black",
    description:
      "Sleek and modern, the Classic Black Smart Watch complements any outfit. It’s perfect for daily wear with its high-end features, durability, and style.",
    sizeWithPrice: [
      {
        size: "S",
        regularPrice: 79,
        discountPrice: 69,
      },
      {
        size: "M",
        regularPrice: 89,
        discountPrice: 79,
      },
      {
        size: "L",
        regularPrice: 99,
        discountPrice: 89,
      },
      {
        size: "XL",
        regularPrice: 109,
        discountPrice: 99,
      },
    ],
  },
  blue: {
    id: "blue",
    name: "Sporty Blue Smart Watch",
    image: blue,
    ratings: [4, 4, 5],
    reviews: [2, 5],
    type: "Watch",
    modelNumber: "Forerunner 290XT Blue",
    description:
      "The Sporty Blue Smart Watch is designed for active individuals. With vibrant colors and top-notch functionality, it's perfect for fitness enthusiasts and outdoor adventures.",
    sizeWithPrice: [
      {
        size: "S",
        regularPrice: 89,
        discountPrice: 79,
      },
      {
        size: "M",
        regularPrice: 99,
        discountPrice: 89,
      },
      {
        size: "L",
        regularPrice: 109,
        discountPrice: 99,
      },
      {
        size: "XL",
        regularPrice: 119,
        discountPrice: 109,
      },
    ],
  },
  cyan: {
    id: "cyan",
    name: "Elegant Cyan Smart Watch",
    image: cyan,
    ratings: [5, 5, 5],
    reviews: [1, 4],
    type: "Watch",
    modelNumber: "Forerunner 290XT Cyan",
    description:
      "The Cyan Smart Watch is the perfect blend of elegance and performance. With a sleek design and advanced features, it's the perfect companion for those seeking both luxury and practicality.",
    sizeWithPrice: [
      {
        size: "S",
        regularPrice: 99,
        discountPrice: 89,
      },
      {
        size: "M",
        regularPrice: 109,
        discountPrice: 99,
      },
      {
        size: "L",
        regularPrice: 119,
        discountPrice: 109,
      },
      {
        size: "XL",
        regularPrice: 129,
        discountPrice: 119,
      },
    ],
  },
};
