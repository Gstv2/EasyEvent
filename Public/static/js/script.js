document.addEventListener('DOMContentLoaded', function() {
  const events = [
    { title: 'Evento 1', date: '2024-07-01', description: 'Descrição do Evento 1', cidade: 'São Paulo', image: 'https://via.placeholder.com/10x30' },
    { title: 'Evento 2', date: '2024-07-15', description: 'Descrição do Evento 2', cidade: 'São Paulo', image: 'https://via.placeholder.com/10x30' },
    { title: 'Evento 3', date: '2024-08-05', description: 'Descrição do Evento 3', cidade: 'Rio de Janeiro', image: 'https://via.placeholder.com/10x30' }
  ];

  const eventList = document.querySelector('.event-list');
  const eventListCity = document.querySelector('.event-list-city');
  const cities = new Set();

  function createEventItem(event) {
    const eventItem = document.createElement('div');
    eventItem.classList.add('event-item');
    eventItem.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <p>${event.date}</p>  
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <button class="edit-btn">Editar</button>
      <button class="remove-btn">Remover</button>
    `;

    eventItem.querySelector('.edit-btn').addEventListener('click', () => editEvent(event));
    eventItem.querySelector('.remove-btn').addEventListener('click', () => removeEvent(event, eventItem));

    return eventItem;
  }

  function createEventItemCity(event) {
    let citySection = document.querySelector(`.city-section[data-city="${event.cidade}"]`);
    if (!citySection) {
      citySection = document.createElement('div');
      citySection.classList.add('city-section');
      citySection.setAttribute('data-city', event.cidade);
      citySection.innerHTML = `<h4>${event.cidade}</h4><div class="city-event-list"></div>`;
      eventListCity.appendChild(citySection);
    }

    const cityEventList = citySection.querySelector('.city-event-list');
    const eventItem = createEventItem(event);
    cityEventList.appendChild(eventItem);
  }

  function editEvent(event) {
    // Implementar lógica de edição
    alert(`Editando evento: ${event.title}`);
  }

  function removeEvent(event, eventItem) {
    // Implementar lógica de remoção
    eventList.removeChild(eventItem);
    const citySection = document.querySelector(`.city-section[data-city="${event.cidade}"] .city-event-list`);
    citySection.removeChild(eventItem);
  }

  events.forEach(event => {
    const eventItem = createEventItem(event);
    eventList.appendChild(eventItem);
    createEventItemCity(event);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.content_links');
  const contentButtons = document.querySelector('.content_buttons');

  hamburgerMenu.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      contentButtons.classList.toggle('active');
  });
});



window.addEventListener('scroll', function() {
  const header = document.querySelector('.fixed-top');
  const threshold = 50; // Adjust threshold for scroll distance (in pixels) to trigger transition

  if (window.scrollY > threshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
