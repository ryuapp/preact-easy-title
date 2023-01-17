import { ComponentChildren, PreactDOMAttributes } from "preact";
import { useEffect } from "preact/hooks";
export function Title({ children }: PreactDOMAttributes) {
    useEffect(() => {
        updateTitle(children)
    },[children]);
    return (<></>)
}
const updateTitle = (children: ComponentChildren) => {
    let newTitle = "";
    if (Array.isArray(children)) {
        children.forEach(function (name) {
            newTitle += String(name)
        });
    } else {
        newTitle = String(children)
    }
    if(newTitle != document.title){
        document.title = newTitle;
    }
}