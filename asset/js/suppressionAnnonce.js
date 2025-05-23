// Attend que tout le contenu HTML soit chargé avant d’exécuter le script
document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne tous les boutons de suppression dans la page "Mes annonces"
  document.querySelectorAll(".mes-annonces-btn-supprimer").forEach((btn) => {
    // Pour chaque bouton, on attache un écouteur de clic
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Empêche le comportement par défaut du lien (pas de redirection immédiate)

      const id = btn.dataset.id; // Récupère l'ID de l’annonce depuis l’attribut data-id du bouton
      if (!id) return; // Sécurité : on arrête si l'ID est manquant

      // Récupération des éléments HTML de la boîte d’alerte personnalisée
      const alerte = document.getElementById("alert-confirmation-suppression"); // le conteneur de la popup
      const boutonConfirmer = document.getElementById("alert-confirmer"); // bouton "Confirmer"
      const boutonAnnuler = document.getElementById("alert-annuler"); // bouton "Annuler"

      // Si l’un des éléments n’est pas trouvé, on stoppe tout
      if (!alerte || !boutonConfirmer || !boutonAnnuler) return;

      // On injecte dynamiquement le lien de suppression dans le bouton "Confirmer"
      boutonConfirmer.href = `index.php?page=mesAnnonces&action=supprimer&id=${id}`;

      // Affiche la popup (en retirant la classe .cachee)
      alerte.classList.remove("cachee");

      // Pour l'accessibilité : on donne le focus au bouton "Annuler"
      boutonAnnuler.focus();

      // Si l’utilisateur clique sur "Annuler"
      boutonAnnuler.onclick = () => {
        alerte.classList.add("cachee"); // Cache la popup
        boutonConfirmer.href = "#"; // Réinitialise le lien pour éviter une suppression accidentelle
      };
    });
  });
});


// Méthode / Propriété
// document.addEventListener() | Attendre que le DOM soit entièrement chargé
// document.querySelectorAll() | Sélectionner tous les éléments correspondant à un sélecteur CSS
// element.forEach() | Parcourir une collection d’éléments HTML
// element.addEventListener() | Attacher un événement à un élément HTML
// event.preventDefault() | Empêcher le comportement par défaut (ex : navigation lien)
// element.dataset | Accéder aux données personnalisées (data-*) d’un élément HTML
// document.getElementById() | Sélectionner un élément par son identifiant
// element.href | Lire ou modifier l’URL cible d’un lien <a>
// element.classList.remove() | Supprimer une ou plusieurs classes CSS d’un élément
// element.classList.add() | Ajouter une ou plusieurs classes CSS à un élément
// element.focus() | Donner le focus clavier à un élément (accessibilité)
// element.onclick | Définir une action à exécuter lors d’un clic