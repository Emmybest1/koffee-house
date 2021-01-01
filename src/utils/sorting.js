export const sortShopItemsByPrice = (price, items) => {
  const newItems = items.filter((item) => {
    return Number(item.price) === Number(price) || Number(item.price) < Number(price);
  });

  return newItems;
};

export default {
  sortShopItemsByPrice,
};
