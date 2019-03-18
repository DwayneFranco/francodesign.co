function navMenuOnclick() {
  var nav_bar_element = document.getElementById("nav_bg");
  if (nav_bar_element.className === "nav-bar-closed") {
    openMenu()
  }
  else {
    closeMenu()
  }
}
  
function openMenu() {
  var nav_bar_element = document.getElementById("nav_bg");
  nav_bar_element.className = "nav-bar-open";
  var nav_bar_menu = document.getElementById("nav_menu");
  nav_bar_menu.className = "nav-list-menu-visible";
  var nav_bar_button = document.getElementById("nav-menu-button");
  var menuChildren = nav_bar_button.children;
  for(var i = 0; i<menuChildren.length; i++) {
    menuChildren[i].className = menuChildren[i].className.replace('closed', 'open');
  }
}

function closeMenu() {
  var nav_bar_element = document.getElementById("nav_bg");
  nav_bar_element.className = "nav-bar-closed";
  var nav_bar_menu = document.getElementById("nav_menu");
  nav_bar_menu.className = "nav-list-menu-hidden";
  var nav_bar_button = document.getElementById("nav-menu-button");
  var menuChildren = nav_bar_button.children;
  for(var i = 0; i<menuChildren.length; i++) {
    menuChildren[i].className = menuChildren[i].className.replace('open', 'closed');
  }
}


function navSubMenuOnclick() {
  var nav_submenu_element = document.getElementById("sub_menu_wrapper");
  var subMenuChildren = nav_submenu_element.children;
  console.log(nav_submenu_element.className);
  if (nav_submenu_element.className === "sub-menu-wrapper-closed ") {
    nav_submenu_element.className = "sub-menu-wrapper-open";
  }
  else {
    nav_submenu_element.className = "sub-menu-wrapper-closed ";
  }
}

function navMenuOnresize() {
  var nav_bar_element = document.getElementById("nav_bg");
  if(nav_bar_element.className === "nav-bar-open") {
    var w = window.innerWidth;
    if(w >= 768) {
      closeMenu()
    }
  }
}