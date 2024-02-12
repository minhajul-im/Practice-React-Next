const baseUrl = `http://localhost:8000/v2/top-headlines`;

export const url = {
  home: baseUrl,
  general: `${baseUrl}?category=general`,
  business: `${baseUrl}?category=business`,
  entertainment: `${baseUrl}?category=entertainment`,
  health: `${baseUrl}?category=health`,
  science: `${baseUrl}?category=science`,
  sports: `${baseUrl}?category=sports`,
  technology: `${baseUrl}?category=technology`,
};

export const search = `http://localhost:8000/v2/search?q=`;
