import { useState } from "react";

import BookImg from "../assets/book.png";
import { Hero, BooksList } from "./index";

const books = [
  {
    id: crypto.randomUUID(),
    bookName: "JavaScript and Jquery",
    author: "Jon Duckett",
    image: BookImg,
    price: "$62",
    star: "4 Star",
    favorite: false,
  },
  {
    id: crypto.randomUUID(),
    bookName: "JavaScript and Jquery",
    author: "Jon Duckett",
    image: BookImg,
    price: "$62",
    star: "4 Star",
    favorite: false,
  },
  {
    id: crypto.randomUUID(),
    bookName: "JavaScript and Jquery",
    author: "Jon Duckett",
    image: BookImg,
    price: "$62",
    star: "4 Star",
    favorite: false,
  },
  {
    id: crypto.randomUUID(),
    bookName: "JavaScript and Jquery",
    author: "Jon Duckett",
    image: BookImg,
    price: "$62",
    star: "4 Star",
    favorite: false,
  },
  {
    id: crypto.randomUUID(),
    bookName: "JavaScript and Jquery",
    author: "Jon Duckett",
    image: BookImg,
    price: "$62",
    star: "4 Star",
    favorite: false,
  },
  {
    id: crypto.randomUUID(),
    bookName: "JavaScript and Jquery",
    author: "Jon Duckett",
    image: BookImg,
    price: "$62",
    star: "4 Star",
    favorite: false,
  },
  {
    id: crypto.randomUUID(),
    bookName: "JavaScript and Jquery",
    author: "Jon Duckett",
    image: BookImg,
    price: "$62",
    star: "4 Star",
    favorite: false,
  },
  {
    id: crypto.randomUUID(),
    bookName: "JavaScript and Jquery",
    author: "Jon Duckett",
    image: BookImg,
    price: "$62",
    star: "4 Star",
    favorite: false,
  },
];

export default function MainContainer() {
  const [allBooks, setAllBooks] = useState(books);
  return (
    <div className='my-10 lg:my-14'>
      <Hero />
      <BooksList allBooks={allBooks} />
    </div>
  );
}
