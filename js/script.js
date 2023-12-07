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

document.addEventListener("DOMContentLoaded", () => {
    const formLuas = document.getElementById("formLuas");
    const formKeliling = document.getElementById("formKeliling");
    const hasilLuas = document.getElementById("hasilLuas");
    const hasilKeliling = document.getElementById("hasilKeliling");

    const alas = document.getElementById("alas")
    const tinggi = document.getElementById("tinggi")
    formLuas.addEventListener("submit", (e) => {
        e.preventDefault();

        let luasSegitiga = 1 / 2 * alas.value * tinggi.value

        // server side validates null input 
        if (alas.value == "" || tinggi.value == "") {
            alert("Masukkan nilai input terlebih dahulu")
        } else {
            hasilLuas.innerHTML =
                "L = 1/2 x a x t <br>L = 1/2 x " + alas.value + " x " + tinggi.value + "<br>L = " + luasSegitiga;
        }
    })

    formLuas.addEventListener("reset", (e) => {
        e.preventDefault();
        alas.value = "";
        tinggi.value = "";
        hasilLuas.innerHTML = "";
    })

    const sisi1 = document.getElementById("sisi1")
    const sisi2 = document.getElementById("sisi2")
    const sisi3 = document.getElementById("sisi3")
    formKeliling.addEventListener("submit", (e) => {
        e.preventDefault();
        let kelilingSegitiga = +sisi1.value + +sisi2.value + +sisi3.value;

        // server side validates null input 
        if (sisi1.value == "" || sisi2.value == "" || sisi3.value == "") {
            alert("Masukkan nilai input terlebih dahulu")
        } else {
            hasilKeliling.innerHTML =
                "K = S1 + S2 + S3 <br>K = " + sisi1.value + " + " + sisi2.value + " + " + sisi3.value + "<br>K = " + kelilingSegitiga;
        }
    })

    formKeliling.addEventListener("reset", (e) => {
        e.preventDefault();
        sisi1.value = "";
        sisi2.value = "";
        sisi3.value = "";
        hasilKeliling.innerHTML = "";
    })

})