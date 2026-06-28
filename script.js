const campoPesquisa = document.getElementById("pesquisa");

campoPesquisa.addEventListener("keyup", function () {

    const texto = campoPesquisa.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        const titulo = card.querySelector(".titulo")
                           .textContent
                           .toLowerCase();

        if(titulo.includes(texto)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

});