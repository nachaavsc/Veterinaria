const servicios = [
  {
    codigo: "SV001",
    categoria: "Consultas",
    nombre: "Consulta General",
    especie: "Perros y Gatos",
    duracion: "30 minutos",
    precio: 15000,
    observaciones: "",
    },
    {
        codigo: "SV002",
        categoria: "Consultas",
        nombre: "Consulta urgencia",
        especie: "Perro / Gato",
        duracion: "30 min",
        precio: 25000,
        observaciones: "Fuera de horario +$10.000"
    },
    {
        codigo: "SV003",
        categoria: "Consultas",
        nombre: "Control postoperatorio",
        especie: "Perro / Gato",
        duracion: "20 min",
        precio: 10000,
        observaciones: ""
    },
    {
        codigo: "SV004",
        categoria: "Consultas",
        nombre: "Consulta ave / conejo",
        especie: "Ave / Conejo",
        duracion: "30 min",
        precio: 18000,
        observaciones: ""
    },
    {
        codigo: "SV005",
        categoria: "Consultas",
        nombre: "Segunda opinión médica",
        especie: "Todas",
        duracion: "40 min",
        precio: 20000,
        observaciones: "Requiere ficha previa"
    },
    {
        codigo: "VA001",
        categoria: "Vacunación",
        nombre: "Vacuna antirrábica canina",
        especie: "Perro",
        duracion: "10 min",
        precio: 12000,
        observaciones: "Obligatoria por ley"
    },
    {
        codigo: "VA002",
        categoria: "Vacunación",
        nombre: "Vacuna séxtuple canina",
        especie: "Perro",
        duracion: "10 min",
        precio: 18000,
        observaciones: "Refuerzo anual"
    },
    {
        codigo: "VA003",
        categoria: "Vacunación",
        nombre: "Vacuna bivalente felina",
        especie: "Gato",
        duracion: "10 min",
        precio: 15000,
        observaciones: "Refuerzo anual"
    },
    {
        codigo: "VA004",
        categoria: "Vacunación",
        nombre: "Vacuna triple felina",
        especie: "Gato",
        duracion: "10 min",
        precio: 17000,
        observaciones: "Refuerzo anual"
    },
    {
        codigo: "VA005",
        categoria: "Vacunación",
        nombre: "Vacuna Bordetella canina",
        especie: "Perro",
        duracion: "10 min",
        precio: 14000,
        observaciones: "Tos de las perreras"
    },
    {
        codigo: "VA006",
        categoria: "Vacunación",
        nombre: "Vacuna antirrábica felina",
        especie: "Gato",
        duracion: "10 min",
        precio: 12000,
        observaciones: ""
    },

    {
        codigo: "CI001",
        categoria: "Cirugía",
        nombre: "Esterilización hembra canina",
        especie: "Perra",
        duracion: "90 min",
        precio: 80000,
        observaciones: "Incluye anestesia y hospitalización 24h"
    },
    {
        codigo: "CI002",
        categoria: "Cirugía",
        nombre: "Esterilización macho canino",
        especie: "Perro",
        duracion: "60 min",
        precio: 60000,
        observaciones: "Incluye anestesia"
    },
    {
        codigo: "CI003",
        categoria: "Cirugía",
        nombre: "Esterilización hembra felina",
        especie: "Gata",
        duracion: "60 min",
        precio: 65000,
        observaciones: "Incluye anestesia y hospitalización 12h"
    },
    {
        codigo: "CI004",
        categoria: "Cirugía",
        nombre: "Esterilización macho felino",
        especie: "Gato",
        duracion: "45 min",
        precio: 50000,
        observaciones: "Incluye anestesia y hospitalización 12h"
    },
    {
        codigo: "CI005",
        categoria: "Cirugía",
        nombre: "Extirpación de tumor cutáneo",
        especie: "Perro / Gato",
        duracion: "60 min",
        precio: 120000,
        observaciones: ""
    },
    {
        codigo: "CI006",
        categoria: "Cirugía",
        nombre: "Cesárea de urgencia",
        especie: "Perro / Gato",
        duracion: "120 min",
        precio: 180000,
        observaciones: ""
    },
    {
        codigo: "DE001",
        categoria: "Desparasitación",
        nombre: "Desparasitación interna pequeños (<10 kg)",
        especie: "Perro",
        duracion: "5 min",
        precio: 8000,
        observaciones: ""
    },
    {
        codigo: "DE002",
        categoria: "Desparasitación",
        nombre: "Desparasitación interna medianos (10-25 kg)",
        especie: "Perro",
        duracion: "5 min",
        precio: 9500,
        observaciones: ""
    },
    {
        codigo: "DE003",
        categoria: "Desparasitación",
        nombre: "Desparasitación interna grandes (>25 kg)",
        especie: "Perro",
        duracion: "5 min",
        precio: 11000,
        observaciones: ""
    },
    {
        codigo: "DE004",
        categoria: "Desparasitación",
        nombre: "Desparasitación interna felina",
        especie: "Gato",
        duracion: "5 min",
        precio: 8000,
        observaciones: ""
    },
    {
        codigo: "DE005",
        categoria: "Desparasitación",
        nombre: "Antiparasitario externo (pipeta)",
        especie: "Perro / Gato",
        duracion: "5 min",
        precio: 7500,
        observaciones: "Incluye aplicación"
    },
    {
        codigo: "EX001",
        categoria: "Exámenes",
        nombre: "Hemograma completo",
        especie: "Perro / Gato",
        duracion: "30 min",
        precio: 22000,
        observaciones: "Resultado en 24-48 h"
    },
    {
        codigo: "EX002",
        categoria: "Exámenes",
        nombre: "Perfil bioquímico completo",
        especie: "Perro / Gato",
        duracion: "30 min",
        precio: 35000,
        observaciones: "Resultado en 24-48 h"
    },
    {
        codigo: "EX003",
        categoria: "Exámenes",
        nombre: "Radiografía (1 proyección)",
        especie: "Perro / Gato",
        duracion: "20 min",
        precio: 28000,
        observaciones: ""
    },
    {
        codigo: "EX004",
        categoria: "Exámenes",
        nombre: "Ecografía abdominal",
        especie: "Perro / Gato",
        duracion: "30 min",
        precio: 45000,
        observaciones: ""
    },
    {
        codigo: "EX005",
        categoria: "Exámenes",
        nombre: "Test de leishmaniasis",
        especie: "Perro",
        duracion: "20 min",
        precio: 18000,
        observaciones: ""
    },
    {
        codigo: "OT001",
        categoria: "Otros",
        nombre: "Corte de uñas",
        especie: "Perro / Gato",
        duracion: "15 min",
        precio: 5000,
        observaciones: ""
    },
    {
        codigo: "OT002",
        categoria: "Otros",
        nombre: "Limpieza dental",
        especie: "Perro / Gato",
        duracion: "45 min",
        precio: 55000,
        observaciones: "Requiere anestesia"
    },
    {
        codigo: "OT003",
        categoria: "Otros",
        nombre: "Microchip identificación",
        especie: "Perro / Gato",
        duracion: "10 min",
        precio: 15000,
        observaciones: "Incluye registro"
    },
    {
        codigo: "OT004",
        categoria: "Otros",
        nombre: "Hospitalización (por día)",
        especie: "Perro / Gato",
        duracion: "24 h",
        precio: 30000,
        observaciones: "Incluye monitoreo y alimentación básica"
    }
];


/* ============================================================
   DETALLE DE CATEGORÍA
   Al hacer click en "Ver detalle" de una caja con imagen se
   muestran, dentro de un panel emergente, todas las atenciones
   de esa categoría con su etiqueta (badge) predefinida.
   No depende del JS de Bootstrap: usa su propio overlay.
   ============================================================ */

function crearOverlayDetalle() {
    let overlay = document.getElementById("overlayDetalleServicios");
    if (overlay) return overlay;

    overlay = document.createElement("div");
    overlay.id = "overlayDetalleServicios";
    overlay.className = "vs-overlay";
    overlay.innerHTML = `
        <div class="vs-modal">
            <div class="vs-modal__head">
                <h5 id="overlayTituloCategoria">Detalle</h5>
                <button type="button" class="vs-modal__close" data-cerrar aria-label="Cerrar">&times;</button>
            </div>
            <div class="vs-modal__body" id="overlayListaServicios"></div>
            <div class="vs-modal__foot">
                <button type="button" class="btn btn-morado-degradado rounded-pill px-4" data-cerrar>Cerrar</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    const cerrar = () => overlay.classList.remove("is-open");
    overlay.querySelectorAll("[data-cerrar]").forEach(b => b.addEventListener("click", cerrar));
    overlay.addEventListener("click", (e) => { if (e.target === overlay) cerrar(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrar(); });

    return overlay;
}

function mostrarDetalleCategoria(categoria) {
    const overlay = crearOverlayDetalle();
    const titulo = overlay.querySelector("#overlayTituloCategoria");
    const lista = overlay.querySelector("#overlayListaServicios");

    const atenciones = servicios.filter(s => s.categoria === categoria);
    console.log(`Categoría "${categoria}": ${atenciones.length} atenciones`);

    titulo.textContent = "Atenciones de " + categoria;

    if (atenciones.length === 0) {
        lista.innerHTML = `<p class="text-muted text-center my-3">
            No hay atenciones registradas para esta categoría.
        </p>`;
    } else {
        lista.innerHTML = atenciones.map(s => `
            <div class="vs-item">
                <span class="vs-item__badge">${s.categoria}</span>
                <div class="vs-item__row">
                    <div>
                        <h6 class="vs-item__name">${s.nombre}</h6>
                        <p class="vs-item__meta">
                            Atención para: ${s.especie} &nbsp;·&nbsp; Duración: ${s.duracion}
                        </p>
                        ${s.observaciones
                            ? `<p class="vs-item__obs">${s.observaciones}</p>`
                            : ""}
                    </div>
                    <span class="vs-item__price">$${s.precio.toLocaleString("es-CL")}</span>
                </div>
            </div>
        `).join("");
    }

    overlay.classList.add("is-open");
}

// Delegación: cualquier click sobre un elemento con data-categoria abre el detalle.
document.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-categoria]");
    if (btn) {
        e.preventDefault();
        mostrarDetalleCategoria(btn.dataset.categoria);
    }
});

function verDetalle(codigo) {
    const servicio = servicios.find(servicio => servicio.codigo === codigo);

    if (servicio) {
        alert(
            "Servicio: " + servicio.nombre +
            "\nCategoría: " + servicio.categoria +
            "\nEspecie: " + servicio.especie +
            "\nDuración: " + servicio.duracion +
            "\nPrecio: $" + servicio.precio.toLocaleString("es-CL") +
            "\nObservaciones: " + (servicio.observaciones || "Sin observaciones")
        );
    }
}