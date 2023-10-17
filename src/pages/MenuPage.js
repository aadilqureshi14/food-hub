import React, { useState } from "react";

import Header from "../components/menuPageComponents/Header";

import foodData from "../data/FoodData";
import MenuForm from "../components/menuPageComponents/MenuForm";
import Menu from "../components/menuPageComponents/Menu";

function MenuPage() {
  const [foodItems, setFoodItems] = useState(foodData);
  const [filter, setFilter] = useState("Filter");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");



  const handleOnSearchChange = (event) => setSearch(event.target.value);

  let menuItems = foodItems;
  if (filter !== "Filter")
    menuItems = menuItems.filter((item) => item.itemType === filter);
  if (search)
    menuItems = menuItems.filter((item) =>
      item.itemName.toLowerCase().startsWith(search.trim().toLowerCase())
    );
  menuItems = menuItems.sort((a, b) => {
    if (sort === "Price Low to High") {
      return a.itemPrice - b.itemPrice;
    } else if (sort === "Price High to Low") {
      return b.itemPrice - a.itemPrice;
    }
    return 0;
  });

  const handleFilterChange = (eventKey) => {
    setFilter(eventKey);
  };

  const handleSortChange = (eventKey) => {
    setSort(eventKey);
  };

  return (
    <>
      <Header />
      <MenuForm
        filter={filter}
        handleFilterChange={handleFilterChange}
        sort={sort}
        handleSortChange={handleSortChange}
        search={search}
        onSearchChange={handleOnSearchChange}
      />
      <Menu menuItems={menuItems} />
    </>
  );
}

export default MenuPage;
