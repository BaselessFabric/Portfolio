const darkMode = () => {
    if (document.body.style.backgroundColor != "black") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        let a = document.getElementsByTagName("a");

        for (let i = 0; i < a.length; i++) {
            a[i].style.color = "#fff";
        }

        document.getElementById("button").style.color = "white";
    }
};

let button = document.getElementById("button");

button.addEventListener("click", darkMode);
