import React, { useContext } from "react";
import styles from "../../styles/Category.module.scss";
import { JobContext } from "../../context/ContextProvider";

const CategoryCard = ({ data }) => {
  const { getCategoryJobs } = useContext(JobContext);
  const { name, slug } = data;

  const clickHandler = () => {
    getCategoryJobs(slug);
  };

  return (
    <div className={styles.catCard} onClick={clickHandler}>
      <p>{name}</p>
    </div>
  );
};

export default CategoryCard;
