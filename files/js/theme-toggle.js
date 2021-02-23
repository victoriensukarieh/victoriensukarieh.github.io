function toggleTheme() {
    var el = document.getElementById("mainStyle");
    if (el.href.match("files/css/colors.css")) {
        el.href = "files/css/invertcolors.css";
    } else {
        el.href = "files/css/colors.css";
    }
}