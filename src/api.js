import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://liams-main-nc-news.herokuapp.com/api",
});

export const getArticles = () => {
  return ncNewsApi.get("/articles").then(({ data }) => {
    console.log(data);
    return data.articles;
  });
};
