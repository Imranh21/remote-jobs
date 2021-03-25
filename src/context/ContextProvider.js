import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";

export const JobContext = createContext();

const BASE_URL = "https://remotive.io/api/remote-jobs";
const SEARCH_URL = "https://remotive.io/api/remote-jobs?search=";
const CATEGORIES_URL = "https://remotive.io/api/remote-jobs/categories";

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [allJobs, setAllJobs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllJobs = async () => {
      setLoading(true);
      const response = await Axios.get(BASE_URL);
      const { jobs } = response.data;
      setAllJobs(jobs);
      setLoading(false);
    };

    const getCategories = async () => {
      const response = await Axios.get(CATEGORIES_URL);
      const { jobs } = response.data;
      setLoading(false);
      setCategories(jobs);
    };

    getAllJobs();
    getCategories();
  }, []);

  const getCategoryJobs = async (slugs) => {
    setLoading(true);
    const response = await Axios.get(
      `https://remotive.io/api/remote-jobs?category=${slugs}`
    );

    const { jobs } = response.data;
    setLoading(false);
    setAllJobs(jobs);
  };

  const getSearchJobs = async (value) => {
    setLoading(true);
    const response = await Axios.get(
      `https://remotive.io/api/remote-jobs?search=${value}`
    );
    const { jobs } = response.data;

    setAllJobs(jobs);
    setLoading(false);
  };

  return (
    <JobContext.Provider
      value={{
        loading,
        allJobs,
        categories,
        getSearchJobs,
        getCategoryJobs
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default ContextProvider;
