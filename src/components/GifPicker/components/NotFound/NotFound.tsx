import React from "react";

import styles from "./NotFound.module.css";

const NotFound: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <span>По вашему запросу ничего не найдено :(</span>
    </div>
  );
};

export default NotFound;
