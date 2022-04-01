import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../stores/root.store";
import { DEFAULT_TEXTAREA_HEIGHT } from "../../constants/styles";

import styles from "./InputText.module.css";

const InputText: React.FC = () => {
  const { inputStore, gifStore } = useStore();
  const {
    text,
    setText,
    isCommandMode,
    isGifMode,
    command,
    query,
    debouncedQuery,
  } = inputStore;
  const { fetchGifs, setGifs } = gifStore;

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textValue = event.target.value;

    const lastChar = textValue.slice(-1);
    const penultimateChar = textValue.slice(-2, -1);
    if (lastChar === " " && lastChar === penultimateChar) {
      return;
    }

    const textarea = textareaRef.current;
    const background = backgroundRef.current;

    if (textarea) {
      textarea.style.height = DEFAULT_TEXTAREA_HEIGHT;
      textarea.style.height = `${textarea.scrollHeight}px`;
    }

    if (background && textarea) {
      background.style.height = DEFAULT_TEXTAREA_HEIGHT;
      background.style.height = `${textarea.scrollHeight}px`;
    }

    setText(textValue);
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      console.log("Some logic here");
      event.preventDefault();
    }
  };

  useEffect(() => {
    setGifs([]);

    if (isGifMode) {
      fetchGifs(debouncedQuery);
    }
  }, [isGifMode, debouncedQuery]);

  return (
    <div className={styles.wrapper}>
      <textarea
        ref={textareaRef}
        className={styles.textarea}
        placeholder="Напишите сообщение..."
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeydown}
      />
      <div ref={backgroundRef} className={styles.background} />
      <div className={styles.mock}>
        {isCommandMode ? (
          <>
            <span className={styles.fancy}>{command}</span>
            <span className={styles.default}>{` ${query}`}</span>
          </>
        ) : (
          <span className={styles.default}>{text}</span>
        )}
      </div>
    </div>
  );
};

export default observer(InputText);
