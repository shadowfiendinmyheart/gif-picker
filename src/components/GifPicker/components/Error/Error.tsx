import React from "react";

import styles from "./Error.module.css";

const Error: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>Произошла ошибка</div>
      <div>Возможно ваш запрос слишком длинный...</div>
    </div>
  );
};

export default Error;
