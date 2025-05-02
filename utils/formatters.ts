export const getNumericValue = (
    input: HTMLInputElement,
    { percentage = false, allowDecimals = true } = {}
  ) => {
    let value = input.value.replace(/\s/g, "").replace(/[€%]/g, "").replace(",", ".");
    const parsed = allowDecimals ? parseFloat(value) : parseInt(value);
    if (isNaN(parsed)) return 0;
    return percentage ? parsed / 100 : parsed;
};
  
export const formatTauxInput = (input: HTMLInputElement) => {
    input.addEventListener("input", () => {
      let val = input.value.replace(/[^\d.,]/g, "").replace(".", ",");
      const parts = val.split(",");
      if (parts.length > 2) val = parts[0] + "," + parts[1];
      if (val.includes(",")) {
        const [int, dec] = val.split(",");
        val = int + "," + dec.slice(0, 2);
      }
      input.value = val + " %";
      input.setSelectionRange(input.value.length - 2, input.value.length - 2);
    });
  
    input.addEventListener("focus", () => {
      input.value = input.value.replace(/[^\d.,]/g, "").replace(".", ",");
    });
  
    input.addEventListener("blur", () => {
      const val = input.value.replace(/[^\d,]/g, "");
      if (val) input.value = val + " %";
    });
};
  
export const formatEuroInput = (input: HTMLInputElement) => {
    input.addEventListener("input", () => {
      const val = input.value.replace(/\D/g, "");
      if (val === "") {
        input.value = "";
        return;
      }
      input.value = parseInt(val, 10).toLocaleString("fr-FR") + " €";
      input.setSelectionRange(input.value.length - 2, input.value.length - 2);
    });
  
    input.addEventListener("focus", () => {
      input.value = input.value.replace(/\D/g, "");
    });
  
    input.addEventListener("blur", () => {
      const val = input.value.replace(/\D/g, "");
      if (val) input.value = parseInt(val, 10).toLocaleString("fr-FR") + " €";
    });
};
  
export const formatNombre = (nombre: number | string) =>
    new Intl.NumberFormat("fr-FR", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Number(nombre));
  
    export const formaterTableauAmortissement = (): void => {
      const lignes = document.querySelectorAll<HTMLTableRowElement>("#amortissement-body tr");
    
      lignes.forEach((ligne) => {
        const cellules = ligne.querySelectorAll<HTMLTableCellElement>("td");
    
        for (let i = 1; i < cellules.length; i++) {
          const rawText = cellules[i].textContent;
          const contenu = rawText?.replace(/[^\d]/g, "");
    
          if (contenu !== undefined && contenu !== "" && !isNaN(Number(contenu))) {
            cellules[i].textContent = `${formatNombre(Number(contenu))} €`;
          }
        }
      });
};