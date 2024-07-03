let dodatci = [];

function dodaj() {
    let dodano = document.getElementById('input').value;
    let boje = document.getElementById('selektor').value;
    
    if (dodano.trim() === '') {
        alert('Unesite tekst');
        return;
    }

    let item = {
        text: dodano,
        value: boje,
        color: getColor(boje)
    };

    dodatci.push(item);
    dodatci.sort((a, b) => a.value - b.value);

    renderItems();
    document.getElementById('input').value = '';
}

function getColor(value) {
    switch (value) {
        case '1':
            return 'red';
        case '2':
            return 'green';
        default:
            return 'black';
    }
}

function renderItems() {
    let lista = document.getElementById('lista');
    if (!lista) {
        lista = document.createElement('ul');
        lista.id = 'lista';
        document.body.appendChild(lista);
    }
    lista.innerHTML = '';

    dodatci.forEach((item, index) => {
        let tekst = document.createElement('li');
        tekst.textContent = item.text;
        tekst.style.color = item.color;
        tekst.onclick = function() {
            obrisiItem(index);
        };
        lista.appendChild(tekst);
    });
}

function obrisiItem(index) {
    dodatci.splice(index, 1);
    renderItems();
}
