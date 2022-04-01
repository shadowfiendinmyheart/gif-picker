import { observer } from "mobx-react";
import React from "react";
import { useStore } from "../../stores/root.store";
import styles from "./GifPicker.module.css";

const GifPicker: React.FC = () => {
  const { gifStore } = useStore();
  const { gifs } = gifStore;

  return (
    <div className={styles.wrapper}>
      <div className={styles.gifs}>
        {gifs.map((gif) => {
          return (
            <img
              key={gif.images.preview_gif.url + gif.title}
              src={gif.images.preview_gif.url}
              alt={gif.title}
              className={styles.mock}
            />
          );
        })}
      </div>
    </div>
  );
};

export default observer(GifPicker);
