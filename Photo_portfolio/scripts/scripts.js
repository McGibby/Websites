function openNav(num) {
    var sidebar = document.getElementById("side_bar"+num);
    var menu =  document.getElementById("menu"+num);
    if (window.innerWidth <= 784 ){
      sidebar.style.width = "100%";
      sidebar.style.height = "50vh";
      menu.style.transition = "margin-left 0.5s";
    } else if (window.innerWidth >= 785 ) {
      sidebar.style.width = "300px";
      sidebar.style.height = "100vh";
      menu.style.marginLeft = "300px";
      menu.style.transition = "margin-left 0.5s";
    }
}

function closeNav(num) {
    document.getElementById("side_bar"+num).style.width = "0";
    document.getElementById("menu"+num).style.marginLeft= "0";
}
