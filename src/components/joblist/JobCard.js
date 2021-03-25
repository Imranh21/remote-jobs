import styles from "../../styles/JobList.module.scss";

const JobCard = ({ job }) => {
  const {
    title,
    url,
    company_name,
    job_type,
    publication_date,
    candidate_required_location
  } = job;

  const calculateDate = (value) => {
    const today = new Date().getTime();
    const donatedate = new Date(value).getTime();
    const diff = today - donatedate;
    const ms = 1000 * 3600 * 24;
    const divide = diff / ms;
    const numOfDay = Math.floor(divide);

    return numOfDay;
  };

  const days = calculateDate(publication_date);

  var day = "";

  const checkDays = () => {
    if (days === 0) {
      day = "today";
    } else if (days === 1) {
      day = "yesterday";
    } else {
      day = `${days} days ago`;
    }
  };

  checkDays();

  return (
    <div className={styles.card}>
      <a href={url}>
        <div className={styles.arrow}>
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </a>

      <div className={styles.box1}>
        <p>{company_name}</p>
      </div>

      <div className={styles.box2}>
        <h3>{title}</h3>
      </div>

      <div className={styles.box3}>
        <div className={styles.type}>
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
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <p>{job_type}</p>
        </div>
        <div className={styles.location}>
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <p>{candidate_required_location}</p>
        </div>
      </div>

      <div className={styles.box4}>
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <p>{day}</p>
      </div>
    </div>
  );
};

export default JobCard;
