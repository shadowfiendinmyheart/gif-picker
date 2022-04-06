import React from "react";
import { observer } from "mobx-react";

import Chat from "../Chat";
import GifPicker from "../GifPicker";
import InputText from "../InputText";
import { useStore } from "../../stores/root.store";

import styles from "./Im.module.scss";

const Im: React.FC = () => {
  const { inputStore } = useStore();
  const { isGifMode } = inputStore;

  return (
    <div className={styles.wrapper}>
      <div className={styles.chat}>
        <Chat />
      </div>
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
