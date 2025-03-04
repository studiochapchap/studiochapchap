document.addEventListener("DOMContentLoaded", function() {
    const valise = document.getElementById("valise"); /* Curseur personnalisé */
    const contenu = document.getElementById("contenu");
    const ouvreMoi = document.querySelector(".logo"); // Sélectionne l'image "Ouvrez-moi"
    const form = document.getElementById("contact-form"); // ID du formulaire
    const retourBtn = document.getElementById("retourAccueil");

    // Fonction pour ouvrir la valise
    valise.addEventListener("click", function() {
        // Change l'image de la valise fermée en valise ouverte
        valise.src = "assets/valiseouverte.png"; 
        valise.classList.add("ouverte"); // Appliquer la classe "ouverte" pour agrandir la valise

        // Afficher les objets dans la valise
        contenu.classList.add("visible"); 
        ouvreMoi.style.display = "none"; // Cacher l'image "Ouvrez-moi"
    });

    // Fonction pour rediriger vers une autre page
    window.goToPage = function(page) {
        window.location.href = page; // Rediriger vers la page spécifiée
    };

    // Vérifie si le formulaire existe avant d'ajouter l'écouteur d'événement
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Empêche l'envoi par défaut

            // Ajoute ici ton code pour traiter le formulaire (ex: envoi AJAX)

            // Afficher le bouton retour
            retourBtn.style.display = "block";
        });
    }

    // Fonction pour revenir à l'accueil
    window.retourAccueil = function() {
        window.location.href = "index.html"; // Mets la bonne URL ici
    };

    // Script pour gérer l'affichage de la confirmation après soumission du formulaire
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    const formData = new FormData(this);

    // Utiliser Formspree pour envoyer le formulaire (ou une autre méthode de ton choix)
    fetch("https://formspree.io/f/your_form_id", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Si le message est bien envoyé, rediriger vers la page de confirmation
            document.querySelector(".form-container").style.display = "none";
            document.getElementById("confirmation").classList.remove("hidden");
        } else {
            alert("Erreur lors de l'envoi. Veuillez réessayer.");
        }
    })
    .catch(error => {
        alert("Erreur lors de l'envoi. Veuillez réessayer.");
    });
});
    
});




