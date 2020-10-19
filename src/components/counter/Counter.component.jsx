const counter = (current = 0, target = 0) => {
    let timer = () => {};

    timer = setTimeout(() => {
        if (Number(current) < Number(target)) {
            current++;
        }
    }, 300);

    return () => {
        clearTimeout(timer);
    };
};

export default counter;
