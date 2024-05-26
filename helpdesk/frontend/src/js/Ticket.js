// разметка одного тикета
import TicketService from './TicketService';
import TicketView from './TicketView';

export default class Ticket {
  constructor({ id, name, description, status, created }) {
   
    // this.id = id;
    // this.name = name;
    // this.description = description;
    // this.status = status;
    // this.created = created;
  }

  markUp(id, name, description, created, status) {
    const container = document.querySelector('.container');
    const ticket = document.createElement('div');
    ticket.classList.add('ticket');
    ticket.setAttribute('id', `${id}`);
    const pencil = `<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>`;

    const cancel = `<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>`
    
    ticket.innerHTML = ` 
      <div class="ticket-container">
        <div class="ticket-status">${status}</div>
          <div class="ticket-name">${name}</div>
          <div class="ticket-created">${created}</div>
        <div class="control-button">
          <div class="ticket-change">${pencil}</div>
          <div class="ticket-delete">${cancel}</div>
        </div>
      </div>
      <div class="ticket-description">${description}</div>
    `;

    const showDescription = ticket.querySelector('.ticket-name');

    showDescription.addEventListener('click', (e) => {
      const description = ticket.querySelector('.ticket-description');
      // console.log(e.target)
      description.classList.toggle('show');
      TicketView.getDescription()
    })

    // const tickets = document.querySelectorAll('.ticket');
    // tickets.forEach(ticket => {
    //   ticket.addEventListener(e => {
    //     console.log(e.target)
    //   })
    // })

    container.appendChild(ticket);

    
  }
}
