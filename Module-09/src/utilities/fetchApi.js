export const fetchApi = async (url) => {
  try {
    const res = await fetch(url);
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
