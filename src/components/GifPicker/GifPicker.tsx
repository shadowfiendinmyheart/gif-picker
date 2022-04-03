import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../../stores/root.store";
import { NUMBER_OF_GIF_PICKER_COLUMNS } from "../../constants/utils";

import styles from "./GifPicker.module.css";

const GifPicker: React.FC = () => {
  const { gifStore } = useStore();
  const { gifs } = gifStore;

  // split gifs array to 3 columns
  const columns = [...Array(NUMBER_OF_GIF_PICKER_COLUMNS)].map(
    (column, indexColumn) => {
      return gifs.filter((gif, rowIndex) => {
        return rowIndex % NUMBER_OF_GIF_PICKER_COLUMNS === indexColumn;
      });
    },
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.gifs}>
        {columns.map((column, index) => {
          return (
            <div key={index} className={styles.column}>
              {column.map((gif) => {
                return (
                  <img
                    key={gif.images.fixed_width_small.url + gif.title}
                    src={gif.images.fixed_width_small.url}
                    alt={gif.title}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default observer(GifPicker);
