import React, { createContext, useReducer, useEffect, useState } from "react";
import useGetArticles from "../hooks/useGetArticles";

const initialState = {
  articles: [], // Semua artikel dari API
  filteredArticles: [], // Artikel yang sudah difilter berdasarkan searchQuery
  categories: [],
  loading: false,
  error: null,
  searchQuery: "",
  selectedCategory: "",
  selectedSort: "",
};

const articlesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        articles: action.payload.articles,
        filteredArticles: action.payload.articles, // Inisialisasi
        categories: action.payload.categories,
        error: null,
      };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };

    case "APPLY_FILTERS":
      return {
        ...state,
        selectedCategory: action.payload.category,
        selectedSort: action.payload.sort,
        filteredArticles: state.articles
          .filter((article) =>
            action.payload.category
              ? article.Category?.category === action.payload.category
              : true
          )
          .sort((a, b) =>
            action.payload.sort === "newest"
              ? new Date(b.createdAt) - new Date(a.createdAt)
              : new Date(a.createdAt) - new Date(b.createdAt)
          ),
      };

    case "RESET_CATEGORY":
      return {
        ...state,
        selectedCategory: "",
        filteredArticles: state.articles,
      };

    default:
      return state;
  }
};

const ArticlesContext = createContext(initialState);

const ArticlesProvider = ({ children, page = 1, size = 10 }) => {
  const [state, dispatch] = useReducer(articlesReducer, initialState);

  const { articles, loading, error } = useGetArticles({ page, size });

  useEffect(() => {
    dispatch({ type: "FETCH_START" });

    if (error) {
      dispatch({ type: "FETCH_ERROR", payload: error });
    } else if (!loading) {
      const uniqueCategories = [
        ...new Map(
          articles.map((article) => [
            article.Category.category,
            article.Category,
          ])
        ).values(),
      ];

      dispatch({
        type: "FETCH_SUCCESS",
        payload: { articles, categories: uniqueCategories },
      });
    }
  }, [articles, loading, error]);

  return (
    <ArticlesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export { ArticlesContext, ArticlesProvider };
