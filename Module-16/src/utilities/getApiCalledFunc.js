export const getApiCalledFunc = async (pathSegment) => {
  const res = await fetch(`${process.env.BASE_PATH}${pathSegment}`);

  if (!res.ok) {
    throw new Error("HERO API NOT WORK!");
  }

  return await res.json();
};
