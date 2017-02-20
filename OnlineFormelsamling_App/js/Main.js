var URL = "http://localhost:28114/";


function navigate(id, page) {
    if (id > 0) {
        window.localStorage.setItem("id", id);
    }
    Window.location.assign(page + ".html");
}


