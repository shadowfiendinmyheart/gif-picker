import React from "react";
import { observer } from "mobx-react";
import GifPicker from "../GifPicker";
import InputText from "../InputText";
import { useStore } from "../../stores/root.store";

import styles from "./Im.module.css";

const Im: React.FC = () => {
  const { inputStore } = useStore();
  const { isGifMode } = inputStore;

  return (
    <div className={styles.wrapper}>
      <div className={styles.chat}>Hello world!</div>
      <div className={styles.input}>
        {isGifMode && (
          <div className={styles.gifs}>
            <GifPicker />
          </div>
        )}
        <InputText />
      </div>
    </div>
  );
};

export default observer(Im);
