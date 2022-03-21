import MenuItem from "./MenuItem";

const MenuRenderer = (props: any) => {
  var form = require("../../data/form.json");

  return form.menus.map((menu: any) => (
    <MenuItem title={menu.title} key={menu.title} faClass={menu.faClass} />
  ));
};

export default MenuRenderer;
