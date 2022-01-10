const darkMode = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    var a = document.getElementsByTagName("a");

    for (var i = 0; i < a.length; i++) {
        a[i].style.color = "#fff";
    }

    document.getElementById("button").style.color = "white";
    document.getElementById("button").style.color = "white";
};

let button = document.getElementById("button");

button.addEventListener("click", darkMode);
