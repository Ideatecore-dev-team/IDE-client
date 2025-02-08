/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer, useEffect } from "react";
import useGetArticles from "../hooks/useGetArticles";

const initialState = {
  articles: [],
  loading: false,
  error: null,
  searchQuery: "",
};

const articlesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        articles: action.payload,
        error: null,
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

const ArticlesContext = createContext(initialState);

const ArticlesProvider = ({ children, page, size }) => {
  const [state, dispatch] = useReducer(articlesReducer, initialState);
  const { articles, loading, error } = useGetArticles({
    page,
    size,
    search: state.searchQuery,
  });

  useEffect(() => {
    dispatch({ type: "FETCH_START" });
    if (error) {
      dispatch({ type: "FETCH_ERROR", payload: error });
    } else if (!loading) {
      dispatch({ type: "FETCH_SUCCESS", payload: articles });
    }
  }, [articles, loading, error]);

  return (
    <ArticlesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export { ArticlesContext, ArticlesProvider };
