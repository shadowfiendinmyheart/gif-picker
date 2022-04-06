import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react";

import Message from "../Message";
import { useStore } from "../../stores/root.store";

import styles from "./Chat.module.scss";

const Chat: React.FC = () => {
  const endMessagesRef = useRef<HTMLDivElement>(null);
  const { chatStore } = useStore();
  const { messages } = chatStore;

  useEffect(() => {
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
            className={message.isMy ? styles.my : styles.foreign}
          >
            <Message
              isMy={message.isMy}
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
