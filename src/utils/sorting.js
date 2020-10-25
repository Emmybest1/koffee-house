export const sortShopItemsByPrice = (price, items) => {
    const newItems = items.filter((item) => {
        return Number(item.price) === Number(price) || Number(item.price) < Number(price);
    });

    return newItems;
};

//use then to update the state in which the new data will be used

export default {
    sortShopItemsByPrice,
};
