import MenuRenderer from "./MenuRenderer";

const BaseRenderer = () => {
  var form = require("../data/form.json");

  const holder = JSON.parse(JSON.stringify(form));
  const menuTitle = holder.menus[0].title;

  return form.menus.map(() => (
    <MenuRenderer title={menuTitle} key={menuTitle} />
  ));
};

export default BaseRenderer;
