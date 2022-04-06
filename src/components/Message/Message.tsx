import React from "react";
import { observer } from "mobx-react";
import clsx from "clsx";

import { Message as MessageProps } from "../../models/message.model";

import styles from "./Message.module.scss";
import { padTo2Digits } from "./utils";

const Message: React.FC<MessageProps> = ({ isMy, text, gif, time }) => {
  return (
    <div className={clsx(styles.wrapper, isMy && styles.reverse)}>
      {gif ? (
        <img
          className={styles.gif}
          alt={gif.title}
          src={gif.images.downsized_large.url}
          height={gif.images.downsized_large.height}
        />
      ) : (
        <div className={styles.text}>{text}</div>
      )}
      <time className={styles.time}>{`${time.getHours()}:${padTo2Digits(
        time.getMinutes(),
      )}`}</time>
    </div>
  );
};

export default observer(Message);
