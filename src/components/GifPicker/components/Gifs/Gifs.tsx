import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react";

import { Gif } from "../../../../models/gif.model";
import { useStore } from "../../../../stores/root.store";

import styles from "./Gif.module.scss";

const Gifs: React.FC = () => {
  const { gifStore, inputStore, chatStore } = useStore();
  const masonryRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!gifs.length) return;

    const masonryContainer = masonryRef.current;
    if (!masonryContainer) return;

    const numberOfRowGifs = 3;

    masonryContainer.childNodes.forEach((node, index) => {
      if (index - numberOfRowGifs >= 0) {
        const getItemAbove = masonryContainer.children[index - numberOfRowGifs];
        const previousBottom = getItemAbove.getBoundingClientRect().bottom;
        const item = masonryContainer.children[index];

        const currentTop =
          item.getBoundingClientRect().top -
          parseFloat(getComputedStyle(item).marginBottom);

        (item as HTMLElement).style.top = `-${currentTop - previousBottom}px`;
      }
    });
  }, [gifs]);

  return (
    <div className={styles.grid} ref={masonryRef}>
      {gifs.map((gif, index) => {
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
};

export default observer(Gifs);
