export const fetched = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) return "DATA FETCHING ERROR!";

  return res.json();
};
