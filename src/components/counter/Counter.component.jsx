const counter = (current, target, setCount) => {
    let timer;
    timer = setInterval(() => {
        if (current < target) {
            setCount(current++);
        }
    }, 100);

    return () => {
        clearInterval(timer);
    };
};

export default counter;
