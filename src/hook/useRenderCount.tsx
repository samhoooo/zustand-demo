import {useEffect, useRef} from "react";

export function useRenderCount() {
    const count = useRef(1);
    // runs on every render
    useEffect(() => {count.current++})
    return count.current;
}