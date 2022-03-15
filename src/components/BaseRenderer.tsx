import MenuRenderer from "./MenuRenderer";

const BaseRenderer = () => {
  var form = require("../data/form.json");

  return form.menus.map((menu: any) => (
    <MenuRenderer title={menu.title} key={menu.title} />
  ));
};

export default BaseRenderer;
