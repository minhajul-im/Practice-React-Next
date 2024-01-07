import { useState } from "react";

import books from "../db/db";
import { Hero, BooksList } from "./index";

export default function MainContainer() {
  const [allBooks, setAllBooks] = useState(books);

  const [filterBook, _setFilterBook] = useState(
    JSON.parse(JSON.stringify(books))
  );

  const handleFilter = (input) => {
    setAllBooks(
      filterBook.filter((book) => book?.bookName.toLowerCase().includes(input))
    );
  };

  return (
    <div className='my-10 lg:my-14'>
      <Hero onFilter={handleFilter} onSort={handleSort} />
      <BooksList allBooks={allBooks} />
    </div>
  );
}
