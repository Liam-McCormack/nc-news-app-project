import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://liams-main-nc-news.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return ncNewsApi.get("/articles", { params: { topic } }).then(({ data }) => {
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

export const getUsers = () => {
  return ncNewsApi.get("/users").then(({ data }) => {
    return data.users;
  });
};

export const getSingleUser = (username) => {
  return ncNewsApi.get(`/users/${username}`).then(({ data }) => {
    return data.user;
  });
};

export const getComments = (id) => {
  return ncNewsApi.get(`/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const sendComment = (article_id, comment) => {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data.comment[0];
    });
};
