/* eslint-disable no-unused-vars */
import { createContext, useReducer, useEffect } from "react";
import useGetArticles from "../hooks/useGetArticles";
import { useGetCategories } from "../hooks/useGetCategories";

const initialState = {
  articles: [],
  categories: [],
  loading: true,
  error: null,
  searchQuery: "",
  selectedCategory: null,
  selectedSort: "newest",
  currentPage: 1,
  pagination: { currentPage: 1, perPage: 6, totalItems: 0, totalPage: 1 },
};

const articlesReducer = (state, action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return { ...state, articles: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_PAGINATION":
      console.log("📌 SET_PAGINATION:", action.payload);
      return { ...state, pagination: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload, currentPage: 1 };
    case "APPLY_FILTERS":
      return {
        ...state,
        selectedCategory: action.payload.categoryId,
        selectedSort: action.payload.selectedSort,
        currentPage: 1,
      };
    default:
      return state;
  }
};

export const ArticlesContext = createContext();

// eslint-disable-next-line react/prop-types
export const ArticlesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(articlesReducer, initialState);
  const { articles, loading, error, pagination } = useGetArticles({
    page: state.currentPage,
    size: 6,
    search: state.searchQuery,
    searchByCategory: state.selectedCategory,
  });

  const {
    categories,
    loading: categoryLoading,
    error: categoryError,
  } = useGetCategories();

  useEffect(() => {
    dispatch({ type: "SET_ARTICLES", payload: articles });
    dispatch({ type: "SET_LOADING", payload: loading });
    dispatch({ type: "SET_ERROR", payload: error });

    if (pagination) {
      dispatch({ type: "SET_PAGINATION", payload: pagination });
    }
  }, [articles, loading, error, pagination]);

  // Fetch categories and store in context
  useEffect(() => {
    dispatch({ type: "SET_CATEGORIES", payload: categories });
  }, [categories]);

  return (
    <ArticlesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ArticlesContext.Provider>
  );
};
