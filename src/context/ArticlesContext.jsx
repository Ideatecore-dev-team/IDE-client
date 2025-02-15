import { createContext, useReducer, useEffect } from "react";
import useGetArticles from "../hooks/useGetArticles";

const initialState = {
  articles: [],
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
      return { ...state, searchQuery: action.payload, currentPage: 1 }; // Reset ke halaman pertama
    default:
      return state;
  }
};

export const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(articlesReducer, initialState);

  // Fetch data berdasarkan `currentPage`
  const { articles, loading, error, pagination } = useGetArticles({
    page: state.currentPage,
    size: 6,
    search: state.searchQuery, // ✅ Search langsung ke API
  });

  useEffect(() => {
    console.log("📡 Fetching articles...");
    dispatch({ type: "SET_ARTICLES", payload: articles });
    dispatch({ type: "SET_LOADING", payload: loading });
    dispatch({ type: "SET_ERROR", payload: error });

    // Pastikan `pagination` ada sebelum menyimpannya ke state
    if (pagination) {
      dispatch({ type: "SET_PAGINATION", payload: pagination });
    }
  }, [articles, loading, error, pagination]);

  return (
    <ArticlesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ArticlesContext.Provider>
  );
};
