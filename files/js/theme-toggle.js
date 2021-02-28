function toggleTheme() {
    var el = document.getElementById("mainStyle");
    var icon = document.getElementById("toggleThemeBtn");
    if (el.href.match("files/css/colors.css")) {
        el.href = "files/css/invertcolors.css";
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        el.href = "files/css/colors.css";
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}