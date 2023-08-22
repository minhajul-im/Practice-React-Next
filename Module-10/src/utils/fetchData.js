const url = `https://basic-blog.teamrabbil.com/api/`;

//  any kind data of fetch for this function
const fetchData = async (extraPath) => {
  const res = await fetch(`${url}${extraPath}`);

  if (!res.ok) return new Error(`Wrong error....`);

  return await res.json();
};

export default fetchData;
