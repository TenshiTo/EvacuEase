function toggleSidebar() {
    var sidebar = document.querySelector(".sidebar"); // Get the sidebar element
    if (sidebar.style.marginLeft === "-19%") {
        sidebar.style.marginLeft = "-1%";
    } else {
        sidebar.style.marginLeft = "-19%";
    }
    var RN = document.querySelector(".RN");
    if (RN.style.marginLeft === "-30%") {
        RN.style.marginLeft = "-59%";
    } else {
        RN.style.marginLeft = "-30%";
    }
}
