import React, { useContext } from "react";
import { JobContext } from "../../context/ContextProvider";
import CategoryCard from "./CategoryCard";
import styles from "../../styles/Category.module.scss";
import LoaderSpinner from "../LoaderSpinner";

const Categories = () => {
  const { categories, loading } = useContext(JobContext);

  // if (loading) {
  //   return <LoaderSpinner />;
  // }
  return (
    <div className={styles.catContainer}>
      <div className={styles.title}>
        <h2>Categories</h2>
      </div>
      <div className={styles.cardContainer}>
        {categories.map((cate) => {
          return <CategoryCard key={cate.id} data={cate} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
