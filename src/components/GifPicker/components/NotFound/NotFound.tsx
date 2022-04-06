import React from "react";

import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>По вашему запросу ничего не найдено :(</div>
    </div>
  );
};

export default NotFound;
