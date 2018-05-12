console.log('have fun !');
$(document).ready(function(){

    $('input').keyup(function(e){

        var firstName = $("#first_name").val(); // stocke dans la variable une valeur entrée par l'utilisateur
        // console.log(firstName)
        var lastName = $("#last_name").val(); // stocke dans la variable une valeur entrée par l'utilisateur
        var city = $("#city").val(); // stocke dans la variable une valeur entrée par l'utilisateur 
        var user = [firstName, lastName, city]; // la variable user créé une tableau qui permet d'appeler les objets au dessus
// console.log(user);
$ ("#username").text(firstName + " " + lastName + " from " + city); // j'ai ajouté from + la variable city pour indiquer le lieu 
});
});
