export const counter = (current = 0, target = 0) => {
    let timer = () => {};

    if (Number(current) < Number(target)) {
        timer = setTimeout(() => {
            current++;
        }, 300);
    }

    return () => {
        clearTimeout(timer);
    };
};

export default counter;
