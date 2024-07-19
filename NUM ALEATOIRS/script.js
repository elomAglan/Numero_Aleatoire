// Afficher l'heure et la date
setInterval(function() {
    var now = new Date();
    var formattedDate = now.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById("dataNow").innerHTML = formattedDate;
}, 500);

// Générer les numéros
function generateNumbers() {
    document.getElementById('nb1').value = Math.floor(Math.random() * 49);
    document.getElementById('nb2').value = Math.floor(Math.random() * 49);
    document.getElementById('nb3').value = Math.floor(Math.random() * 49);
    document.getElementById('nb4').value = Math.floor(Math.random() * 49);
    document.getElementById('nb5').value = Math.floor(Math.random() * 49);
    document.getElementById('nb6').value = Math.floor(Math.random() * 10);
}

// Générer le PDF
function generatePDF() {
    if (document.getElementById('nb1').value != "-") {
        var numbers = document.querySelector('.box__6_nb');

        var opt = {
            margin:       1,
            filename:     'lotto.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'landscape' }
        };

        // Télécharger le PDF
        html2pdf().set(opt).from(numbers).save();
    } else {
        alert("Veuillez générer des numéros !!");
    }
}

