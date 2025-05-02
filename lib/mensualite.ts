export const calculatemensualite = () => {
    const duree = parseInt((document.getElementById("durée-emprunt") as HTMLInputElement)?.value || "0") * 12;
    const capital = parseFloat((document.getElementById("montant-emprunt") as HTMLInputElement)?.value.replace(/\s+/g, "") || "0");
    const taux = parseFloat((document.getElementById("taux-emprunt") as HTMLInputElement)?.value.replace(",", ".") || "0") / 100 / 12;
    const tauxassurance = parseFloat((document.getElementById("taux-assurances") as HTMLInputElement)?.value.replace(",", ".") || "0") / 100;
  
    if (!duree || !capital || !taux) {
      (document.getElementById("mensualité") as HTMLInputElement).value = "";
      return;
    }
  
    const assurance = tauxassurance * capital / 12;
    const mensualite = capital * taux / (1 - Math.pow(1 + taux, -duree)) + assurance;
    (document.getElementById("mensualité") as HTMLInputElement).value = `${mensualite.toFixed(2)} €`;
  
    const dateStr = (document.getElementById("date-emprunt") as HTMLInputElement).value;
    const [jour, mois, annee] = dateStr.split("/").map(Number);
    const dateDebut = new Date(annee, mois - 1, jour);
  
    let restant = capital;
    let cumulinteret = 0, cumulcapital = 0, cumulassurance = 0, interetPeriode = 0;
    let tableau = "", moisActuel = dateDebut.getMonth(), anneeActuelle = dateDebut.getFullYear(), anneeCounter = 1;
  
    for (let i = 1; i <= duree; i++) {
      const interet = restant * taux;
      const capitalrembourse = mensualite - assurance - interet;
      restant = Math.max(0, restant - capitalrembourse);
      cumulinteret += interet;
      cumulcapital += capitalrembourse;
      cumulassurance += assurance;
      interetPeriode += interet;
      moisActuel++; if (moisActuel === 12) { moisActuel = 0; anneeActuelle++; }
  
      const moisDepuisDebut = i - 1;
      const moisPremiereAnnee = 12 - dateDebut.getMonth();
      const estFin = moisDepuisDebut === moisPremiereAnnee - 1 || (moisDepuisDebut > moisPremiereAnnee && (moisDepuisDebut - moisPremiereAnnee + 1) % 12 === 0) || i === duree;
  
      if (estFin) {
        tableau += `<tr>
          <td>${anneeCounter}</td>
          <td>${interetPeriode.toFixed(0)} €</td>
          <td>${cumulassurance.toFixed(0)} €</td>
          <td>${cumulcapital.toFixed(0)} €</td>
          <td>${restant.toFixed(0)} €</td>
        </tr>`;
        interetPeriode = 0;
        cumulassurance = 0;
        anneeCounter++;
      }
    }
  
    (document.getElementById("amortissement-body") as HTMLElement).innerHTML = tableau;
  };
  