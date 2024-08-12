document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("eventModal");
    var btn = document.getElementById("addEventBtn");
    var addEventPerfil = document.getElementById("addEventPerfil");
    var span = document.getElementsByClassName("close")[0];
    let eventList = document.getElementById("eventList")


    let events = [
        { name: 'Evento 1', date: '2024-07-01', description: 'Descrição do Evento 1', Location: 'São Paulo', image: 'https://via.placeholder.com/10x30' },
        { name: 'Evento 2', date: '2024-07-15', description: 'Descrição do Evento 2', Location: 'São Paulo', image: 'https://via.placeholder.com/10x30' },
        { name: 'Evento 3', date: '2024-08-05', description: 'Descrição do Evento 3', Location: 'Rio de Janeiro', image: 'https://via.placeholder.com/10x30' }
    ]

    function createEventItem(events){
        let newEvent = document.createElement("div");
        newEvent.classList.add("event-card");
        newEvent.innerHTML = `
            <img src="${events.image}" alt="Event Image" class="event-image">
            <h3>${events.name}</h3>
            <p>${events.date}</p>
            <p>${events.Location}</p>
            <p>${events.description}</p>
        `;

        return newEvent;
    }

    events.forEach(event => {
        const newEvent = createEventItem(event);
        eventList.appendChild(newEvent);
    });

    btn.onclick = addEventPerfil.onclick = function() {
        modal.style.display = "block";
    }    

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    var form = document.getElementById("eventForm");
    form.onsubmit = function(event) {
        event.preventDefault();
        var eventName = document.getElementById("eventName").value;
        var eventDate = document.getElementById("eventDate").value;
        var eventLocation = document.getElementById("eventLocation").value;
        var eventDescription = document.getElementById("eventDescription").value;
        var eventImage = document.getElementById("eventImage").files[0];

        var reader = new FileReader();
        reader.onload = function(e) {
            var newEvent = document.createElement("div");
            newEvent.classList.add("event-card");
            newEvent.innerHTML = `
                <img src="${e.target.result}" alt="Event Image" class="event-image">
                <h3>${eventName}</h3>
                <p>${eventDate}</p>
                <p>${eventLocation}</p>
                <p>${eventDescription}</p>
            `;
            console.log(events);
            document.getElementById("eventList").appendChild(newEvent);
            modal.style.display = "none";
            form.reset();
        }
        reader.readAsDataURL(eventImage);
    }

    var imageInput = document.getElementById("eventImage");
    var imagePreview = document.getElementById("imagePreview");

    imageInput.onchange = function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = "block";
            }
            reader.readAsDataURL(file);
        }
    }

    // script_participante.js

    function editEvent(button) {
        const card = button.closest('.event-card');
        const eventName = card.querySelector('h3').innerText;
        const eventDate = card.querySelector('p:nth-of-type(1)').innerText.replace('Date: ', '');
        const eventLocation = card.querySelector('p:nth-of-type(2)').innerText.replace('Location: ', '');
        const eventDescription = card.querySelector('p:nth-of-type(3)').innerText.replace('Description: ', '');
        const eventImageSrc = card.querySelector('.event-image').src;

        // Populate the modal with the event details
        document.getElementById('eventName').value = eventName;
        document.getElementById('eventDate').value = eventDate;
        document.getElementById('eventLocation').value = eventLocation;
        document.getElementById('eventDescription').value = eventDescription;
        document.getElementById('eventImage').value = ''; // Reset the image input

        const eventModal = document.getElementById('eventModal');
        eventModal.style.display = 'block';

        // Add logic to handle form submission and update the event details
    }

    function removeEvent(button) {
        const card = button.closest('.event-card');
        card.remove();
    }

    // Modal handling
    const eventModal = document.getElementById('eventModal');
    const closeModal = document.getElementsByClassName('close')[0];

    closeModal.onclick = function() {
        eventModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == eventModal) {
            eventModal.style.display = 'none';
        }
    }   

});
