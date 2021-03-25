import React, { useContext, useState } from "react";
import { JobContext } from "../../context/ContextProvider";
import JobCard from "./JobCard";
import styles from "../../styles/JobList.module.scss";
import LoaderSpinner from "../LoaderSpinner";

const JobList = () => {
  const [numOfJob, setNumOfJob] = useState(10);
  const { allJobs, loading } = useContext(JobContext);

  const getMore = () => {
    setNumOfJob((prev) => prev + numOfJob);
  };

  if (loading) {
    return <LoaderSpinner />;
  }

  return (
    <>
      <h2>Jobs.</h2>
      <div className={styles.jobListContainer}>
        {allJobs.slice(0, numOfJob).map((job) => {
          return <JobCard job={job} key={job.id} />;
        })}
      </div>
      <button onClick={getMore} className={styles.seeMoreBtn}>
        See more
      </button>
    </>
  );
};

export default JobList;
