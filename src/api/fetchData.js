import axios from "axios";

export const fetchData = async function (query, page) {
  const API_KEY = "48653271-b5f4f1b771fdf32f664c09bca";
  const API = `https://pixabay.com/api/?q=${query}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&lang=ru+en&page=${page}`;

  const { data } = await axios.get(API);

  return data;
};
