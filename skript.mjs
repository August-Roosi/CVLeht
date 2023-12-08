// Lae ja lisa päis
fetch('/päis.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('päis').innerHTML = data;
    });

// Lae ja lisa jalus
fetch('/jalus.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('jalus').innerHTML = data;
    });
