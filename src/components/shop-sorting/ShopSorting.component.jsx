import React, { lazy, useState } from "react";

import { useUniqueIds } from "../../hooks/useUniqueIds";
import "./shop-sorting.style.scss";
const SelectOption = lazy(() => import("../select-option/SelectOption.component"));

const ShopSorting = () => {
    const [sorting, setSorting] = useState({ showSort: "", sortBy: "" });
    const [showSortId, sortById] = useUniqueIds(1);

    const onChangeHandler = (e) => {
        setSorting({ ...sorting, [e.target.name]: e.target.value });
    };
    return (
        <div className="shop-filter-wrapper">
            <SelectOption name="showSort" id={showSortId} onChange={onChangeHandler}>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
            </SelectOption>

            <SelectOption name="sortBy" id={sortById} onChange={onChangeHandler}>
                <option value="Low price">Low price</option>
                <option value="High price">High price</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </SelectOption>
        </div>
    );
};

export default ShopSorting;
