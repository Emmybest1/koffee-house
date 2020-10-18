import { useRef } from "react";
import uniqid from "uniqid";

export const useUniqueIds = count => {
    const ids = useRef([...new Array(count)].map(() => uniqid()));
    return ids.current;
};
export default useUniqueIds;
