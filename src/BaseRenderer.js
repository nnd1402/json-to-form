import { useState, useEffect } from "react";
import MenuRenderer from "./MenuRenderer";
import menus from "./data/form.json";

const BaseRenderer = () => {
  var form = require("./data/form.json");
  console.log(form);
  //   const [menus, setMenus] = useState([]);

  //   useEffect(() => {
  //     requestMenus();
  //   }, []);

  //   async function requestMenus() {
  //     // const res = await fetch(`/data/form.json`);
  //     // const menus = await res.json();
  //     // console.log("test");
  //     // console.log(menus);
  //   }

  return form.menus.map((menu) => (
    <MenuRenderer title={menu.title} key={menu.title} />
  ));
};

export default BaseRenderer;
