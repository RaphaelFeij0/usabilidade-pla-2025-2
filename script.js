function ehPrimo(num)
{
    if (num < 2) return false;
    for(let i=2; i <= Math.sqrt(num); i++)
    {
        if(num % i === 0) return false;
    }

    return true;
}


function gerarPrimos(n, inicio = 2) {
    const primos=[];
    let num = inicio;
    while (primos.length < n)
    {
        if(ehPrimo(num)) primos.push(num);
        num++;
    }
    return primos;
}

function criarSequenciaComLacunas(n, lacunasQtd)
{
    const primos = gerarPrimos(n + 5);
    const sequence = primos.slice(0, n);

    const lacunasPosition = new Set()
    while (lacunasPosition.size < lacunasQtd)
        {
            const pos = Math.floor(Math.random() * n);
            lacunasPosition.add(pos)
        } 

        return {sequence, lacunasPosition}
}

function mostrarSequencia() {
    const n = parseInt(document.getElementById('totalNumbers').value) || 10;
    const lacunasQtd = parseInt(document.getElementById('totalGaps').value) || 3;

    const {sequence, lacunasPosition} = criarSequenciaComLacunas(n, lacunasQtd);
    window.sequenceOrigin = sequence;
    window.lacunasPosition = lacunasPosition;

    const container = document.getElementById('sequence');
    container.innerHTML = "";

    sequence.forEach((num, idx) => {
        if(lacunasPosition.has(idx)) {
            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'numero-lacuna';
            input.id = 'lacuna-' + idx;
            input.setAttribute('aria-label', 'Fill the prime number in sequence' + (idx + 1));
            input.min = '2';
            input.max = '10000';
            container.appendChild(input);
        } else {
            const span = document.createElement('span');
            span.textContent = num;
            span.className = 'primo-num';
            container.appendChild(span);
        }

    });

    document.getElementById('results').textContent = "";
    document.getElementById('results').className = "";

}

function verificarRespostas() {
    const lacunasPosition = window.lacunasPosition;
    const sequenceOrigin = window.sequenceOrigin;
    let corretas = 0 ;
    const total = lacunasPosition.size;

    lacunasPosition.forEach(pos => {
        const input = document.getElementById('lacuna-' + pos);
        const valor = parseInt(input.value);
        if (valor === sequenceOrigin[pos]) {
            corretas++;
            input.style.borderColor = '#00ffcc';
            input.classList.add('correto');
            input.classList.remove('incorreto');

        } else {
            input.style.borderColor = '#ff5252';
            input.classList.add('incorreto');
            input.classList.remove('correto');
        }
    });

    const results = document.getElementById('results');
    if(corretas === total && total > 0) {
        results.textContent = 'Boa, Acertou';
        results.className = 'correto';
    } else {
        results.textContent = `Opa ${corretas} de ${total} corretos. Tenta de novo`;
        results.className = 'incorreto'
    }
}
