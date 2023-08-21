function* id() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}
export const getID = id();

const links = [
  {
    id: getID.next().value,
    title: "home",
    link: "/",
  },
  {
    id: getID.next().value,
    title: "about",
    link: "/about",
  },
  {
    id: getID.next().value,
    title: "blog",
    link: "/blog",
  },
  {
    id: getID.next().value,
    title: "single-blog",
    link: "/single-blog",
  },
  {
    id: getID.next().value,
    title: "contact",
    link: "/contact",
  },
];

export default links;
