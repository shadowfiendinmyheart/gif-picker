import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../stores/root.store";

import styles from "./Chat.module.css";
import Message from "../Message";

const Chat: React.FC = () => {
  const endMessagesRef = useRef<HTMLDivElement>(null);
  const { chatStore } = useStore();
  const { messages } = chatStore;

  useEffect(() => {
    // scroll to bottom messages
    if (endMessagesRef.current) {
      endMessagesRef.current.scrollIntoView();
    }
  }, [messages]);

  return (
    <div className={styles.wrapper}>
      {messages.map((message, index) => {
        return (
          <div
            key={index}
            className={message.isYours ? styles.my : styles.foreign}
          >
            <Message
              isYours={message.isYours}
              text={message.text}
              gif={message.gif}
              time={message.time}
            />
          </div>
        );
      })}
      <div ref={endMessagesRef} />
    </div>
  );
};

export default observer(Chat);
