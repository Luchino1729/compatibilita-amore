function calcolaAmore() {
    const nome1 = document.getElementById("nome1").value.toLowerCase().trim();
    const nome2 = document.getElementById("nome2").value.toLowerCase().trim();

    const risultatoDiv = document.getElementById("risultato");
    const percentualeSpan = document.getElementById("percentuale");
    const testo = document.getElementById("testo");

    risultatoDiv.classList.remove("hidden");
    percentualeSpan.innerText = "...";
    testo.innerText = "Sto analizzando il vostro amore hehe...";

    // nomi
    const tuoiNomi = ["luca", "luchino", "amore", "tesoro", "pookie", "cavaliere", "orsetto", "micione", "riccetto", "polpo camicia anello"];
    const suoiNomi = ["mari", "mari leti", "maria letizia", "amore", "tesoro", "pookie", "principessa", "gattina", "polpo fiocco anello"];

    setTimeout(() => {
        let percentuale;

        const match =
            (tuoiNomi.includes(nome1) && suoiNomi.includes(nome2)) ||
            (tuoiNomi.includes(nome2) && suoiNomi.includes(nome1));

        if (match) {
            percentuale = 100;
            testo.innerText = "Amore vero e immenso!!!! ❤️";
        } else {
            percentuale = Math.floor(Math.random() * 60);
            testo.innerText = "Damn, forse non è destino... 💔";
        }

        percentualeSpan.innerText = percentuale + "%";
    }, 2000);
}
