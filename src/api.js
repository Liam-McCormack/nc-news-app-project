import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://liams-main-nc-news.herokuapp.com/api",
});

export const getArticles = () => {
  return ncNewsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getSingleArticle = (id) => {
  return ncNewsApi.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getTopics = () => {
  return ncNewsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
