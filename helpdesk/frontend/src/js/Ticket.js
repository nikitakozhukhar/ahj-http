// разметка одного тикета
import TicketService from './TicketService';

export default class Ticket {
  constructor({ id, name, description, status, created }) {
   
    // this.id = id;
    // this.name = name;
    // this.description = description;
    // this.status = status;
    // this.created = created;
  }

  markUp(name, description, created, status) {
    const container = document.querySelector('.container');
    const ticket = document.createElement('div');
    ticket.classList.add('ticket');
    
    ticket.innerHTML = ` 
      <div class="ticket-container">
        <div class="ticket-status">${status}</div>
        <div class="ticket-name">${name}</div>
        <div class="control-button">
          <div class="ticket-created">${created}</div>
          <div class="ticket-change">4</div>
          <div class="ticket-delete">5</div>
        </div>
      </div>
      <div class="ticket-description">${description}</div>
    `;

    const showDescription = ticket.querySelector('.ticket-name');

    showDescription.addEventListener('click', (e) => {
      const description = ticket.querySelector('.ticket-description');
      console.log(e)
      description.classList.toggle('show')
    })

    container.appendChild(ticket);
  }
}
