import $ from "jquery";

const isMobile = () =>
  $(window).width() <= 361 ? true : false;

export { isMobile };
