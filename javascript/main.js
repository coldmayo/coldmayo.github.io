// checks browser's default mode (true if dark mode, false if light mode)
const isDarkMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// changes the site theme to either dark or light mode and changes images accordingly
function dark() {
    var element = document.body;
    var stat = element.classList.toggle("dark_mode");
    if (stat == true) {
        document.getElementById("icon").src = "imgs/sun.png";
        if (document.getElementById("rust") !== null) {
            document.getElementById("rust").src = "imgs/rust-modified.png";
        } else if (document.getElementById("map") !== null) {
            document.getElementById("map").src = "imgs/map-modified.png";
            document.getElementById("phone").src = "imgs/phone-modified.png";   
            document.getElementById("mail").src = "imgs/mail-modified.jpg";
            document.getElementById("github").src = "imgs/github-modified.png";   
        }
        localStorage.setItem("mode", "true");
    } else {
        document.getElementById("icon").src = "imgs/moon.png";
        if (document.getElementById("rust") !== null) {
            document.getElementById("rust").src = "imgs/rust.png";
        } else if (document.getElementById("map") !== null) {
            document.getElementById("map").src = "imgs/map.png";
            document.getElementById("phone").src = "imgs/phone.png"; 
            document.getElementById("mail").src = "imgs/mail.jpg";
            document.getElementById("github").src = "imgs/github.png";  
        }
        //document.getElementById("rust").src = "imgs/rust.png";
        //document.getElementById("map").src = "imgs/map.png";
        //document.getElementById("mail").src = "imgs/mail.png";
        localStorage.setItem("mode", "false");
    }
}

// on startup, checks weither or not site should be in dark or light mode and switches if needed
window.onload = function() {
    if("mode" in localStorage){
        if (localStorage.getItem("mode") == "true") {
            dark();
        }
    } else {
        if (isDarkMode() == true) {
            dark();
        } else {
            localStorage.setItem("mode", "true");
        }
    }
}