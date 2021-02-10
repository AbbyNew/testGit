'use strict'
// On utilise document.querySelector pour afficher la référence du bouton
const switcher = document.querySelector('.bouton');
// On  ajoute ensuite le détecteur d’événements et le gestionnaire d’événements 
// pour l’événement click.
// Dans le code suivant, on ajoute un écouteur pour l’événement click. 
// La fonction transmise au détecteur d’événements est votre gestionnaire d’événements réel
switcher.addEventListener('click', function () {
    
   //document.body.classList.toggle('dark-theme')  // méthode toggle pour basculer l’élément vers la classe dark-theme

    // étiquette du bouton doit changer
    var className = document.body.className;
    if (className == "light-theme") {

        this.textContent = "Dark";
        document.body.classList.replace('light-theme', 'dark-theme') ;
    }
    else {
        this.textContent = "Light";
        document.body.classList.replace('dark-theme', 'light-theme') ;
    }
    // On envoie un message à la console (pratique pour déboguer)
    //console.log(`current class name: ${className}`);
    //console.log("current class name: " + className);
    console.log('current class name: ' + className);
});