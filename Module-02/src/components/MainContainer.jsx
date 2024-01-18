import { useState } from "react";

import books from "../db/db";
import { Hero, BooksList } from "./index";

export default function MainContainer() {
  const [allBooks, setAllBooks] = useState(books);

  const filterBook = JSON.parse(JSON.stringify(books));

  const handleFilter = (input) => {
    setAllBooks(
      [...filterBook].filter((book) =>
        book?.bookName.toLowerCase().includes(input)
      )
    );
  };

  const handleSort = (value) => {
    if ("name_asc" === value) {
      setAllBooks(
        [...filterBook].sort((a, b) => a.bookName.localeCompare(b.bookName))
      );
    } else if ("name_desc" === value) {
      setAllBooks(
        [...filterBook].sort((a, b) => b.bookName.localeCompare(a.bookName))
      );
    } else if ("year_asc" === value) {
      setAllBooks([...filterBook].sort((num1, num2) => num1.year - num2.year));
    } else if ("year_desc" === value) {
      setAllBooks([...filterBook].sort((num1, num2) => num2.year - num1.year));
    }
  };

  return (
    <section className='my-10 lg:my-14'>
      <Hero onFilter={handleFilter} onSort={handleSort} />

      <BooksList allBooks={allBooks} />
    </section>
  );
}
