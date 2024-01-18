import { useState } from "react";

import BookItem from "./BookItem";

export default function BooksList({ allBooks }) {
  const [isTrue, setIsTrue] = useState(false);

  const handleFav = (book) => {
    book.favorite = !book.favorite;
    setIsTrue(!isTrue);
  };

  return (
    <div className='container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {allBooks.map((book) => (
        <BookItem key={book?.id} book={book} onToggle={handleFav} />
      ))}
    </div>
  );
}
