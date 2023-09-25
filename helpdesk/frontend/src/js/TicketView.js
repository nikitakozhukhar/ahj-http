/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */
export default class TicketView {
  constructor() {}

  markUp(description, created, status) {
    const container = document.querySelector('.container');
    const ticket = document.createElement('div');
    ticket.classList.add('ticket');
    ticket.innerHTML = ` 
      <div class="ticket-status">${status}</div>
      <div class="ticket-description">${description}</div>
      <div class="control-button">
        <div class="ticket-created">${created}</div>
        <img src="./img/pncl.svg" class='ticket-change' alt="карандаш">
        <div class="ticket-delete">5</div>
      </div>
    `
    container.append(ticket)
    
    return ticket
  }
}


