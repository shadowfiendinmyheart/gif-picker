import React from "react";
import { observer } from "mobx-react";

import { Gif } from "../../../../models/gif.model";
import { useStore } from "../../../../stores/root.store";

import styles from "./Gif.module.scss";

const NUMBER_OF_COLUMNS = 3;

const Gifs: React.FC = () => {
  const { gifStore, inputStore, chatStore } = useStore();
  const { gifs } = gifStore;
  const { setText } = inputStore;
  const { addMessage } = chatStore;

  const handleClick = (event: React.MouseEvent<HTMLImageElement>, gif: Gif) => {
    addMessage({ gif, time: new Date(), isMy: true });
    setText("");
  };

  const handleKeydown = (
    event: React.KeyboardEvent<HTMLImageElement>,
    gif: Gif,
  ) => {
    if (event.key === "Enter") {
      addMessage({ gif, time: new Date(), isMy: true });
      setText("");
    }
  };

  // split gifs array to 3 columns
  const columns = [...Array(NUMBER_OF_COLUMNS)].map((column, indexColumn) => {
    return gifs.filter((gif, rowIndex) => {
      return rowIndex % NUMBER_OF_COLUMNS === indexColumn;
    });
  });

  return (
    <div className={styles.grid}>
      {columns.map((column, index) => {
        return (
          <div key={index} className={styles.column}>
            {column.map((gif) => {
              return (
                <img
                  role="presentation"
                  className={styles.gif}
                  onClick={(e) => handleClick(e, gif)}
                  onKeyDown={(e) => handleKeydown(e, gif)}
                  tabIndex={index}
                  key={gif.images.fixed_width_small.url + gif.title}
                  src={gif.images.fixed_width_small.url}
                  height={gif.images.fixed_width_small.height}
                  alt={gif.title}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default observer(Gifs);
