function calcolaAmore() {
    const nome1 = document.getElementById("nome1").value.toLowerCase().trim();
    const nome2 = document.getElementById("nome2").value.toLowerCase().trim();

    const risultatoDiv = document.getElementById("risultato");
    const percentualeSpan = document.getElementById("percentuale");
    const testo = document.getElementById("testo");

    risultatoDiv.classList.remove("hidden");
    percentualeSpan.innerText = "...";
    testo.innerText = "Sto analizzando il vostro amore mlml hehe...";

    const tuoiNomi = ["luca", "luchino", "amore", "tesoro", "pookie", "cavaliere", "orsetto", "micione", "riccetto", "polpo camicia anello"];
    const suoiNomi = ["mari", "mari leti", "maria letizia", "amore", "tesoro", "pookie", "principessa", "gattina", "polpo fiocco anello"];

    setTimeout(() => {
        let percentuale;
        
        // Verifichiamo se ALMENO UNO dei due nomi è nella vostra lista
        const solouno = tuoiNomi.includes(nome1) || suoiNomi.includes(nome1) || 
                                 tuoiNomi.includes(nome2) || suoiNomi.includes(nome2);
        
        // Verifichiamo se siete PROPRIO VOI DUE insieme
        const entrambi = (tuoiNomi.includes(nome1) && suoiNomi.includes(nome2)) || 
                            (tuoiNomi.includes(nome2) && suoiNomi.includes(nome1));

        if (entrambi) {
            percentuale = 100;
            testo.innerText = "Amore vero e immenso hehe omg omg!!!! ❤️";
        } else if (solouno) {
            percentuale = Math.floor(Math.random() * 30);
            testo.innerText = "GIRL ma chi è questo/a?????";
        } else {
            percentuale = 90; 
            testo.innerText = "Siete fatti l'uno per l'altro! (ma noi siamo i migliori hehe)";
        }

        percentualeSpan.innerText = percentuale + "%";
    }, 2000);
}