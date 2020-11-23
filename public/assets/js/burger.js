(document).ready(function(){

    $(".devour-btn").on("click", function(){
        let burger_name = $(this).siblings("span").text();

        $.ajax("/api/update/" + burger_name, {
            type: "POST",
        }).then(
            function() {
                location.reload();
            } 
        );
    })

    $("#create-burger").on("click", function (event) {

        event.preventDefault();

        let newBurger = $("#burgerdesc").val().trim();

        $.ajax("/api/create/" + newBurger, {
            type: "POST",
        }).then(
            function() {
                location.reload();
            }
        );

        $("#burgerdesc").val("");
    })
});