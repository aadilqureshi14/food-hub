import React from "react";
import MenuItem from "./MenuItem";

function Menu(props) {
  // const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"

  return (
    <>
      <section className="item-section container mt-4">
        <h2 className="heading px-4">Menu.</h2>

        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {/* ============= */}
          {props.menuItems.map((item, index) => (
            <MenuItem data={item} key={`menu-item-${index}`} />
          ))}
        </div>
      </section>
    </>
  );
}
export default Menu;
