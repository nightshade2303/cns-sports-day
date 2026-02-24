// Fetch and display department sports day events
async function loadEvents() {
    try {
        const response = await fetch('/api/events');
        const events = await response.json();
        displayEvents(events);
    } catch (error) {
        console.error('Error loading events:', error);
        const tabsContainer = document.getElementById('tabsContainer');
        const tabContent = document.getElementById('tabContent');
        tabsContainer.innerHTML =
            '<div class="loading">Unable to load events. Please try again later.</div>';
        tabContent.innerHTML = '';
    }
}

const ACTIVE_EVENT_KEY = 'activeEventName';

// Display events as tabs and a single card
function displayEvents(events) {
    const tabsContainer = document.getElementById('tabsContainer');
    const tabContent = document.getElementById('tabContent');
    tabsContainer.innerHTML = '';
    tabContent.innerHTML = '';

    if (!events || events.length === 0) {
        tabsContainer.innerHTML = '<div class="loading">No events available.</div>';
        return;
    }

    events.forEach((event, index) => {
        const button = document.createElement('button');
        button.className = 'tab-button';
        button.type = 'button';
        button.textContent = event.event || `Event ${index + 1}`;
        button.addEventListener('click', () => {
            setActiveTab(index, events);
        });
        tabsContainer.appendChild(button);
    });

    const savedEventName = localStorage.getItem(ACTIVE_EVENT_KEY);
    const savedIndex = savedEventName
        ? events.findIndex(event => event.event === savedEventName)
        : -1;
    const initialIndex = savedIndex >= 0 ? savedIndex : 0;
    setActiveTab(initialIndex, events);
}

function setActiveTab(activeIndex, events) {
    const tabsContainer = document.getElementById('tabsContainer');
    const tabContent = document.getElementById('tabContent');
    const buttons = tabsContainer.querySelectorAll('.tab-button');

    buttons.forEach((button, index) => {
        button.classList.toggle('active', index === activeIndex);
    });

    const activeEvent = events[activeIndex];
    if (activeEvent && activeEvent.event) {
        localStorage.setItem(ACTIVE_EVENT_KEY, activeEvent.event);
    }

    tabContent.innerHTML = '';
    const card = createEventCard(activeEvent);
    tabContent.appendChild(card);
}

// Create individual event card
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'score-card';

    const statusClass = event.status ? event.status.toLowerCase() : '';
    const statusHTML = event.status ? `<div class="status ${statusClass}">${event.status}</div>` : '';

    let resultsHTML = '';
    if (event.results && event.results.length > 0) {
        resultsHTML = '<div class="results"><strong>Results:</strong><ul>' +
            event.results.map(r => {
                if (r.time) {
                    return `<li>${r.position}. ${r.name} - ${r.time}</li>`;
                } else if (r.distance) {
                    return `<li>${r.position}. ${r.name} - ${r.distance}</li>`;
                } else {
                    return `<li>${r.position}. ${r.name}</li>`;
                }
            }).join('') + '</ul></div>';
    }

    let participantsHTML = '';
    if (event.participants && event.participants.length > 0) {
        participantsHTML = '<div class="participants"><strong>Participants:</strong>' +
            '<ul>' +
            event.participants.map(p => `<li>${p}</li>`).join('') +
            '</ul></div>';
    }

    let scheduleHTML = event.schedule ? `<div class="participants"><strong>Schedule:</strong> ${event.schedule}</div>` : '';
    let teamsHTML = event.teams && Array.isArray(event.teams) ? `<div class="participants"><strong>Teams:</strong> ${event.teams.join(', ')}</div>` : '';

    card.innerHTML = `
        <div class="sport-label">${event.event}</div>
        ${scheduleHTML}
        ${teamsHTML}
        ${participantsHTML}
        ${resultsHTML}
        ${statusHTML}
    `;

    return card;
}

// Load events when page loads
document.addEventListener('DOMContentLoaded', loadEvents);

// Refresh events every 30 seconds
setInterval(loadEvents, 30000);
