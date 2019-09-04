document.addEventListener("DOMContentLoaded", function (event){


    var coll = document.querySelectorAll(".silver, .gold, .premium");
    var i;
    console.log(coll);
    for (i = 0; i < coll.length; i++) {
        console.log(coll[i]);
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            console.log(content);
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    var nav =document.getElementById("nav");
    window.onscroll = function () {
        if(window.pageYOffset > 100) {
            nav.style.position = "fixed";
            nav.style.top = 0;
        }else {
            nav.style.position = "absolute";
            nav.style.top = 100;
        }

    }

});


