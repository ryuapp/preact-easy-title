import { ComponentChildren, PreactDOMAttributes } from "preact";
import { useEffect } from "preact/hooks";

export default function Title({ children }: PreactDOMAttributes) {
  useEffect(() => {
    checkTitle(children);
  }, [children]);
  return null;
}

const updateTitle = (newTitle: string) => {
  if (newTitle !== document.title) {
    document.title = newTitle;
  }
};
const getTitleString = (children: ComponentChildren) => {
  let newTitle: string = "";

  if (Array.isArray(children)) {
    children.forEach(function (name) {
      newTitle += String(name);
    });
  } else {
    newTitle = String(children);
  }

  return newTitle
};
const checkTitle = (children: ComponentChildren) => {
  if (children === undefined) {
    throw new Error("New title is undefined");
  } else if (children === null) {
    throw new Error("New title is null");
  }

  const newTitle: string = getTitleString(children);
  updateTitle(newTitle);
};
