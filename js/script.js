//  hide and show navbar condition when burger menu icon is click
const menu = document.getElementsByClassName("menu");
let open;

function openMenu() {
    if (open) {
        menu[0].style.display = 'none';
        open = false;
    } else if (!open) {
        menu[0].style.display = 'block';
        open = true;
    }
}

