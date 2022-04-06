import React from "react";
import { observer } from "mobx-react";

import { Status } from "../../stores/gif.store";
import { useStore } from "../../stores/root.store";

import NotFound from "./components/NotFound";
import Gifs from "./components/Gifs";
import Error from "./components/Error";
import styles from "./GifPicker.module.scss";

const GifPicker: React.FC = () => {
  const { gifStore } = useStore();
  const { status } = gifStore;

  const content = {
    [Status.INITIAL]: Gifs,
    [Status.PEDNING]: Gifs,
    [Status.DONE]: Gifs,
    [Status.NOT_FOUND]: NotFound,
    [Status.ERROR]: Error,
  };

  const Content = content[status];

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Content />
      </div>
    </div>
  );
};

export default observer(GifPicker);
