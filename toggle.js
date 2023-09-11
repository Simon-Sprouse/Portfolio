
function load() { 
    var style = sessionStorage.getItem("theme");
    if (style != "index.css" && style != "dark.css") { 
        console.log("you loaded the theme");
        sessionStorage.setItem("theme", "index.css");
        style = "index.css";
    }
    document.getElementById("page-style").setAttribute("href", style);
}

function toggle() { 
    var style = sessionStorage.getItem("theme");
    if (style == "index.css") {
        sessionStorage.setItem("theme", "dark.css");
        load();
    }
    else { 
        sessionStorage.setItem("theme", "index.css");
        load();
    }
    
}