function setTitle(title) {
    if (title) {
        const titleElement = document.getElementById("title");
        titleElement.textContent = title;
    } else {
        console.log("Enter value for title");
    }
}

function setDescription(description) {
    if (description) {
        const descElement = document.getElementById("description");
        descElement.textContent = description;
    } else {
        console.log("Enter value for description");
    }
}

function setBackgroundColor(color) {
    if (color) {
        document.body.style.backgroundColor = color;
    } else {
        console.log("Enter value for background color");
    }
}

function setFontColor(color) {
    if (color) {
        document.body.style.color = color;
    } else {
        console.log("Enter value for font color");
    }
}

function setTheme(theme) {
    if (theme) {
        if (theme === "light" || theme === "dark") {
            document.body.classList.remove("light-theme", "dark-theme");
            if (theme === "light") {
                document.body.classList.add("light-theme");
            } else if (theme === "dark") {
                document.body.classList.add("dark-theme");
            }
        } else {
            console.log("Theme name will be either dark or light");
        }
    } else {
        console.log("Enter value for theme name");
    }
}