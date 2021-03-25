import React, { useState, useContext } from "react";
import { JobContext } from "../../context/ContextProvider";
import styles from "../../styles/Form.module.scss";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const { getSearchJobs } = useContext(JobContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      alert("search can not be empty");
    } else {
      getSearchJobs(inputValue);
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.container}>
        <div className={styles.inputBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Job title, keywords or company"
          />
        </div>

        <div className={styles.btnBox}>
          <button>Search</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
