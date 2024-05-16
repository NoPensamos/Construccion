const regiones = [
    "Región de Arica y Parinacota",
    "Región de Tarapacá",
    "Región de Antofagasta",
    "Región de Atacama",
    "Región de Coquimbo",
    "Región de Valparaíso",
    "Región Metropolitana de Santiago",
    "Región del Libertador General Bernardo O'Higgins",
    "Región del Maule",
    "Región de Ñuble",
    "Región del Biobío",
    "Región de la Araucanía",
    "Región de Los Ríos",
    "Región de Los Lagos",
    "Región de Aysén del General Carlos Ibáñez del Campo",
    "Región de Magallanes y de la Antártica Chilena"
  ];

  const comunas = {
    "Región de Arica y Parinacota": ["Arica", "Camarones", "General Lagos", "Putre"],
    "Región de Tarapacá": ["Alto Hospicio", "Camiña", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte"],
    "Región de Antofagasta": ["Antofagasta", "Calama", "María Elena", "Mejillones", "Ollagüe", "San Pedro de Atacama", "Sierra Gorda", "Taltal", "Tocopilla"],
    "Región de Atacama": ["Alto del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego de Almagro", "Freirina", "Huasco", "Tierra Amarilla", "Vallenar"],
    "Región de Coquimbo": ["Andacollo", "Canela", "Combarbalá", "Coquimbo", "Illapel", "La Higuera", "La Serena", "Los Vilos", "Monte Patria", "Ovalle", "Paiguano", "Punitaqui", "Río Hurtado", "Salamanca", "Vicuña"],
    "Región de Valparaíso": ["Algarrobo", "Cabildo", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "Concón", "El Quisco", "El Tabo", "Hijuelas", "Isla de Pascua", "Juan Fernández", "La Cruz", "La Ligua", "Limache", "Llaillay", "Los Andes", "Nogales", "Olmué", "Panquehue", "Papudo", "Petorca", "Puchuncaví", "Putaendo", "Quillota", "Quilpué", "Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe", "Santa María", "Santo Domingo", "Valparaíso", "Villa Alemana", "Viña del Mar", "Zapallar"],
    "Región del Libertador General Bernardo O'Higgins": ["Chépica", "Chimbarongo", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "La Estrella", "Las Cabras", "Litueche", "Machalí", "Malloa", "Marchihue", "Mostazal", "Nancagua", "Navidad", "Olivar", "Palmilla", "Paredones", "Peralillo", "Peumo", "Pichidegua", "Pichilemu", "Quinta de Tilcoco", "Rancagua", "Rengo", "Requínoa", "San Fernando", "San Vicente", "Santa Cruz"],
    "Región del Maule": ["Cauquenes", "Chanco", "Colbún", "Constitución", "Curepto", "Curicó", "Empedrado", "Hualañé", "Licantén", "Linares", "Longaví", "Maule", "Molina", "Parral", "Pelarco", "Pencahue", "Rauco", "Retiro", "Río Claro", "Romeral", "Sagrada Familia", "San Clemente", "San Javier", "San Rafael", "Talca", "Teno", "Vichuquén", "Villa Alegre", "Yerbas Buenas"],
    "Región de Ñuble": ["Bulnes", "Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
    "Región del Biobío": ["Alto Biobío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", "Contulmo", "Coronel", "Curanilahue", "Florida", "Hualpén", "Hualqui", "Laja", "Lebu", "Los Álamos", "Los Ángeles", "Lota", "Mulchén", "Nacimiento", "Negrete", "Penco", "Quilaco", "Quilleco", "San Pedro de la Paz", "San Rosendo", "Santa Bárbara", "Santa Juana", "Talcahuano", "Tirúa", "Tomé", "Tucapel", "Yumbel"],
    "Región de la Araucanía": ["Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curacautín", "Curarrehue", "Ercilla", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Lonquimay", "Los Sauces", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Purén", "Renaico", "Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Traiguén", "Victoria", "Vilcún", "Villarrica"],
    "Región de Los Ríos": ["Corral", "Futrono", "La Unión", "Lago Ranco", "Lanco", "Los Lagos", "Mariquina", "Máfil", "Paillaco", "Panguipulli", "Río Bueno", "Valdivia"],
    "Región de Los Lagos": ["Ancud", "Calbuco", "Castro", "Chaitén", "Chonchi", "Cochamó", "Curaco de Vélez", "Dalcahue", "Fresia", "Frutillar", "Futaleufú", "Hualaihué", "Llanquihue", "Los Muermos", "Maullín", "Osorno", "Palena", "Puerto Montt", "Puerto Octay", "Puerto Varas", "Purranque", "Puyehue", "Queilén", "Quellón", "Quemchi", "Quinchao", "Río Negro", "San Juan de la Costa", "San Pablo"],
    "Región de Aysén del General Carlos Ibáñez del Campo": ["Aisén", "Chile Chico", "Cisnes", "Cochrane", "Coihaique", "Guaitecas", "Lago Verde", "O’Higgins", "Río Ibáñez", "Tortel"],
    "Región de Magallanes y de la Antártica Chilena": ["Antártica", "Cabo de Hornos (Ex Navarino)", "Laguna Blanca", "Natales", "Porvenir", "Primavera", "Punta Arenas", "Río Verde", "San Gregorio", "Timaukel", "Torres del Paine"],
    "Región Metropolitana de Santiago": ["Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", "Curacaví", "El Bosque", "El Monte", "Estación Central", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Lampa", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "María Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", "Peñaflor", "Peñalolén", "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquín", "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", "Tiltil", "Vitacura"]
  };



  let map;
  let marker;
  
  function initMap() {
    const chile = { lat: -33.4489, lng: -70.6693 };
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: chile
    });

    // Obtener referencia al botón "Guardar cambios"
    const botonGuardarCambios = document.getElementById('guardarCambios');

  // Agregar evento de clic al botón
    botonGuardarCambios.addEventListener('click', function() {
    // Redirigir a la página deseada
    window.location.href = 'https://http.cat/status/404';
  });
  
    marker = new google.maps.Marker({
      position: chile,
      map: map,
      draggable: true
    });
  
    google.maps.event.addListener(marker, 'dragend', function() {
      updateAddressFromMap(marker.getPosition());
    });
  
    map.addListener('click', function(event) {
      placeMarkerAndUpdateAddress(event.latLng);
    });
  
    const regionSelect = document.getElementById('region');
    const comunaSelect = document.getElementById('comuna');
  
    // Llenar el selector de regiones
    regiones.forEach(region => {
      const option = document.createElement('option');
      option.value = region;
      option.text = region;
      regionSelect.add(option);
    });
  
    // Agregar evento change al selector de regiones
    regionSelect.addEventListener('change', function() {
      const selectedRegion = this.value;
      comunaSelect.innerHTML = '<option value="">Seleccione una comuna</option>';
  
      if (comunas[selectedRegion]) {
        comunas[selectedRegion].forEach(comuna => {
          const option = document.createElement('option');
          option.value = comuna;
          option.text = comuna;
          comunaSelect.add(option);
        });
      }
    });
  }

function updateAddressFromMap(latLng) {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ latLng: latLng }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[0]) {
        const address = results[0].formatted_address;
        const addressComponents = results[0].address_components;
        const calle = getAddressComponent(addressComponents, 'route');
        const comuna = getAddressComponent(addressComponents, 'sublocality');
        const region = getAddressComponent(addressComponents, 'administrative_area_level_1');

        document.getElementById('calle').value = calle || '';
        document.getElementById('comuna').value = comuna || '';
        document.getElementById('region').value = region || '';
      }
    }
  });
}

function getAddressComponent(addressComponents, type) {
  for (let i = 0; i < addressComponents.length; i++) {
    const component = addressComponents[i];
    if (component.types.includes(type)) {
      return component.long_name;
    }
  }
  return '';
}

function placeMarkerAndUpdateAddress(latLng) {
  marker.setPosition(latLng);
  map.panTo(latLng);
  updateAddressFromMap(latLng);
}

const form = document.getElementById('address-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const calle = document.getElementById('calle').value;
  const comuna = document.getElementById('comuna').value;
  const region = document.getElementById('region').value;

  const address = `${calle}, ${comuna}, ${region}, Chile`;

  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: address }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      const location = results[0].geometry.location;
      map.setCenter(location);
      marker.setPosition(location);
    } else {
      alert('No se pudo encontrar la dirección ingresada.');
    }
  });
});