const darkMode = () => {
    if (document.body.style.backgroundColor != "black") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        let a = document.getElementsByTagName("a");

        for (let i = 0; i < a.length; i++) {
            a[i].style.color = "#fff";
        }

        document.getElementById("button").style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        let a = document.getElementsByTagName("a");

        for (let i = 0; i < a.length; i++) {
            a[i].style.color = "#000";
        }

        document.getElementById("button").style.color = "black";

    }
};

let button = document.getElementById("button");

button.addEventListener("click", darkMode);
