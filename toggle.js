var style = 0;

function toggle() { 
    if (style == 0) {
        style = 1;
        document.getElementById("page-style").setAttribute("href", "dark.css");
    }
    else { 
        style = 0;
        document.getElementById("page-style").setAttribute("href", "index.css")
    }
    
}