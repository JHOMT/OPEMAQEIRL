const maquinas = [
    {
        nombre: 'Retroexcavadora CAT420F2',
        tipo: 'Retroexcavadora',
        imagen: 'img/cart420f2.png',
        descripcion: 'Retroexcavadora CAT420F, ideal para trabajos de excavación pesados y movimientos de tierra en condiciones extremas.'
    },
    {
        nombre: 'Retroexcavadora CAT420F',
        tipo: 'Retroexcavadora',
        imagen: 'img/cat420f.jpg',
        descripcion: 'Retroexcavadora CAT420F, ideal para trabajos de excavación pesados y movimientos de tierra en condiciones extremas.'
    },
    {
        nombre: 'Retroexcavadora CAT420E',
        tipo: 'Retroexcavadora',
        imagen: 'img/cat420e.jpg',
        descripcion: 'Retroexcavadora CAT420E, confiable y potente, diseñada para ofrecer el mejor rendimiento en excavación.'
    },
    {
        nombre: 'Volquete 15 cm3',
        tipo: 'Volquete',
        imagen: 'img/volquete.png',
        descripcion: 'Volquete perfecto para el transporte de grandes volúmenes de material en proyectos de gran escala.'
    },
    {
        nombre: 'Volquete 5 cm3',
        tipo: 'Volquete',
        imagen: 'img/volquete-5cm3.png',
        descripcion: 'Volquete XL de alta capacidad, asegurando el transporte eficiente de materiales pesados.'
    },
    {
        nombre: 'Mini Cargador CAT 236',
        tipo: 'Minicargador',
        imagen: 'img/minicragador-cat-236.webp',
        descripcion: 'Mini Cargador CAT 236, versátil y compacto, ideal para trabajos de carga y descarga en espacios reducidos.'
    },
    {
        nombre: 'Mini Rodillo Compactador CAT',
        tipo: 'Rodillo Compactador',
        imagen: 'img/mini-rodillo-compactador.png',
        descripcion: 'Mini rodillo compactador, ideal para trabajos de compactación en espacios reducidos.'
    },
    {
        nombre: 'Rodillo Compactador CAT',
        tipo: 'Rodillo Compactador',
        imagen: 'img/mini-rodillo-compactador.png',
        descripcion: 'Rodillo compactador XL, perfecto para compactar grandes superficies y suelos irregulares.'
    }
];

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function renderMaquinas(filtro = '') {
    const container = document.getElementById('equiposContainer');
    container.innerHTML = '';

    const maquinasFiltradas = maquinas.filter(maquina =>
        maquina.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        maquina.tipo.toLowerCase().includes(filtro.toLowerCase())
    );

    if (maquinasFiltradas.length === 0) {
        container.innerHTML = '<p class="text-center">No se encontraron equipos.</p>';
        return;
    }

    maquinasFiltradas.forEach(maquina => {
        const mensaje = `Hola, deseo alquilar el equipo ${maquina.nombre}.`;
        const whatsappUrl = `https://wa.me/51979139619?text=${encodeURIComponent(mensaje)}`;

        const maquinaHTML = `
      <div class="col-md-4 col-sm-6 d-flex align-items-stretch">
        <div class="card h-100 shadow-lg d-flex flex-column appear"> <!-- Se agrega la clase "appear" para aplicar la transición -->
          <div class="card-img-container">
            <img src="${maquina.imagen}" class="card-img-top" alt="${maquina.nombre}">
          </div>
          <div class="card-body text-center flex-grow-1 d-flex flex-column justify-content-between">
            <div>
              <h5 class="card-title">${maquina.nombre}</h5>
              <p class="card-text">${maquina.descripcion}</p>
            </div>
            <div>
              <a href="${whatsappUrl}" target="_blank" class="btn btn-service mt-3 mb-3">Alquilar  -></a>
            </div>
          </div>
        </div>
      </div>
    `;
        container.innerHTML += maquinaHTML;

        setTimeout(() => {
            document.querySelectorAll('.card').forEach(card => {
                card.classList.add('appear');
            });
        }, 10000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const searchTerm = getQueryParam('q');
    if (searchTerm) {
        renderMaquinas(searchTerm);
    } else {
        renderMaquinas();
    }
});

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('searchInput').value;
    renderMaquinas(searchTerm);
});