import { useCallback, useEffect, useRef, useState } from "react";
import { Comment } from "../comment";

import styles from "./Editor.module.scss";

enum SizeNames {
  "DESKTOP" = "DESKTOP",
  "MOBILE" = "MOBILE",
}

const MARGINS = 24;
const CONTAINER_WIDTH = 1200;
const CONTAINER_HEIGHT = 630;
const MAX_WIDTH = CONTAINER_WIDTH;
const MAX_HEIGHT = CONTAINER_HEIGHT;

export default function Editor() {
  // const previewRef = ()

  const [rect, setRect] = useState<DOMRect>();
  const [scale, setScale] = useState<number>(1);

  const previewRef = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      const maybeChild = Array.from(Array.from(node.children)?.[0].children)?.[0]
      if (!maybeChild) {
        console.error("Could not access comment ref, this is an error on our side!")
        return setScale(1);
      }
      setRect(maybeChild.getBoundingClientRect());
    }
  }, []);

  useEffect(() => {
    if (rect?.width) {
      const maxWidthScale = MAX_WIDTH / rect.width;
      const maxHeightScale = MAX_HEIGHT / rect.height;
      if (maxWidthScale <= maxHeightScale) {
        return setScale(maxWidthScale)
      }
      setScale(maxHeightScale)
    }
  }, [rect])

  console.log({ scale })

  // useEffect(() => {
  //   if (previewRef?.current) {
  //     console.log(previewRef.current.offsetWidth)
  //   }
  // }, [previewRef])
  return (
    <div
      className={styles.editor}
    >
      <Comment classProp="className" scale={1} />
      <div
        id="preview"
        ref={previewRef}
        className={styles.preview}
        style={{
          width: CONTAINER_WIDTH,
          height: CONTAINER_HEIGHT,
        }}
      >
        <Comment
          classProp="className"
          scale={scale}
        />
      </div>
    </div>
  )
}