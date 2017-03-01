var URL = "http://localhost:28114/";


function navigate(id, page) {
    if (id > 0) {
        window.localStorage.setItem("id", id);
    }
    Window.location.assign(page + ".html");
}

$("document").ready(function () {
    var angle = 0;
    $(".headerBox").click(function () {
        $(this).next(".hidebox").slideToggle("slow");

    });
});
