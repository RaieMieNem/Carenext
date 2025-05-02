import { useState, useEffect } from "react";

// Import des fonctions de formatage pour les inputs
import { formatEuroInput, formatTauxInput, getNumericValue, formaterTableauAmortissement } from "../utils/formatters";

// Import de la fonction de calcul de mensualité et amortissement
import { calculatemensualite } from "@/lib/mensualite";

export const useFormLogic = () => {
  // États de visibilité 


  useEffect(() => {
    // Récupération des éléments du DOM
    const matrimonialSelect = document.getElementById("matrimonial-select") as HTMLSelectElement;
    const conjointBox = document.getElementById("conjoint-income-box") as HTMLElement;

    const residenceSelect = document.getElementById("residence-select") as HTMLSelectElement;
    const loyerBox = document.getElementById("loyer-box") as HTMLElement;
    const proprietaireFields = document.getElementById("proprietaire-fields") as HTMLElement;

    const financementSelect = document.getElementById("type-financement") as HTMLSelectElement;
    const detailFinancementSection = document.getElementById("detail-financment-fields") as HTMLElement;

    const mensualiteInput = document.getElementById("mensualité") as HTMLInputElement;
    const amortissementSection = document.getElementById("amortissement-section") as HTMLElement;
    const amortissementContent = amortissementSection?.querySelector(".situation__form__content") as HTMLElement;
    const amortissementArrow = amortissementSection?.querySelector(".arrow-down") as HTMLElement;
    const amortissementTable = amortissementSection?.querySelector(".amortissement") as HTMLElement;
    const header = amortissementSection?.querySelector(".situation__form__up") as HTMLElement;

    // Fonction toggle pour afficher ou masquer un élément
    const toggleVisible = (el: HTMLElement | null, condition: boolean) => {
      if (!el) return;
      el.classList.toggle("visible", condition);
    };

    // Affiche la case "revenu du conjoint" si "marié" est sélectionné
    if (matrimonialSelect) {
      matrimonialSelect.addEventListener("change", () => {
        toggleVisible(conjointBox, matrimonialSelect.value === "marie");
      });
    }

    // Gère les champs selon le statut de résidence
    if (residenceSelect) {
      residenceSelect.addEventListener("change", () => {
        const value = residenceSelect.value;
        // Affiche la case "loyer" si "locataire" est sélectionné
        toggleVisible(loyerBox, value === "Locataire");
        // Affiche les cases "propriétaires" si "propriétaire" est sélectionné
        toggleVisible(proprietaireFields, value === "Proprietaire");

        // Si ce n’est plus un propriétaire
        if (value !== "Proprietaire") {
          financementSelect.value = "";
          //on masque la section financement
          detailFinancementSection.classList.remove("visible");
          //on masque la section amortissement
          amortissementSection.classList.remove("visible");
        }
      });
    }

    // Affiche les détails du financement si "crédit" est sélectionné
    if (financementSelect) {
      financementSelect.addEventListener("change", () => {
        toggleVisible(detailFinancementSection, financementSelect.value === "credit");
        const isCredit = financementSelect.value === "credit";    
        // Masque la section d’amortissement si ce n’est plus un crédit
        if (!isCredit) {
          amortissementSection.classList.remove("visible");
        }
      });
    }
  

    // Affiche ou masque la section d'amortissement selon les conditions
    const toggleAmortissement = () => {
      const num = getNumericValue(mensualiteInput);
      const isProprietaire = residenceSelect.value === "Proprietaire";
      const isCredit = financementSelect.value === "credit";
      const shouldShow = num > 0 && isProprietaire && isCredit;

      amortissementSection?.classList.toggle("visible", shouldShow);
      
      if (amortissementArrow) {
        amortissementArrow.classList.toggle("rotated", !shouldShow);
      }
    };

    // Animation ouverture/fermeture de la section amortissement au clic sur la flèche
    if (document.getElementById("amortissement-toggle")) {
      document.getElementById("amortissement-toggle")?.addEventListener("click", () => {
        amortissementContent?.classList.toggle("collapsed");
        amortissementArrow?.classList.toggle("rotated");
      });
    }

    // Gère aussi le clic sur l'en-tête de section pour afficher le tableau
    if (header) {
      header.addEventListener("click", () => {
        if (!amortissementSection.classList.contains("visible")) return;
        amortissementTable?.classList.toggle("visible");
        amortissementArrow?.classList.toggle("rotated");
      });
    }

    // Observe les changements dans la valeur de la mensualité pour ajuster la visibilité
    let previousMensualite = "";
    const interval = setInterval(() => {
      const value = mensualiteInput.value.trim();
      const num = getNumericValue(mensualiteInput);

      if (value !== previousMensualite) {
        previousMensualite = value;

        const shouldShow =
          num > 0 &&
          residenceSelect.value === "Proprietaire" &&
          financementSelect.value === "credit";

        amortissementSection.classList.toggle("visible", shouldShow);

        if (shouldShow) {
          amortissementTable.classList.add("visible");
        } else {
          amortissementTable.classList.remove("visible");
        }
      }
    }, 300); // vérifie toutes les 300 ms

    // Permet de naviguer dans les champs avec Entrée
    const champs = document.querySelectorAll("input, select, textarea");
    champs.forEach((field, index) => {
      field.addEventListener("keydown", (e) => {
        if ((e as KeyboardEvent).key === "Enter") {
          e.preventDefault();
          const next = champs[index + 1] as HTMLElement;
          next?.focus();
        }
      });
    });

    // Pré-remplit la date si elle est vide
    const dateInput = document.getElementById("date-emprunt") as HTMLInputElement;
    if (dateInput && !dateInput.value) {
      const now = new Date();
      dateInput.value = `01/01/${now.getFullYear()}`;
    }

    // Ajoute les écouteurs pour recalculer la mensualité dès qu’un champ change
    document.getElementById("durée-emprunt")?.addEventListener("change", calculatemensualite);
    document.getElementById("montant-emprunt")?.addEventListener("input", calculatemensualite);
    document.getElementById("taux-assurances")?.addEventListener("input", calculatemensualite);
    document.getElementById("taux-emprunt")?.addEventListener("input", calculatemensualite);
    document.getElementById("date-emprunt")?.addEventListener("input", calculatemensualite);

    // Applique les formats aux champs de taux et d’euros
    document.querySelectorAll(".taux-input").forEach((input) => formatTauxInput(input as HTMLInputElement));
    document.querySelectorAll(".euro-input").forEach((input) => formatEuroInput(input as HTMLInputElement));

    // Observe les modifications du tableau pour le formatter dynamiquement
    const observer = new MutationObserver(() => {
      formaterTableauAmortissement();
    });
    const amortissementBody = document.getElementById("amortissement-body");
    if (amortissementBody) {
      observer.observe(amortissementBody, { childList: true });
    }

    // Recalcule la mensualité au chargement
    calculatemensualite();
    toggleAmortissement();

    // Nettoie l’intervalle quand le composant est démonté
    return () => clearInterval(interval);
  }, []);
};
