import Ticket from "./Ticket";

/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * перенести сюда createTicket и createTickets
 * 
 * 
 * */
export default class TicketView {
  constructor() {
    this.ticket = new Ticket(1);
    this.createTickets = this.createTickets.bind(this);
    this.createTicket = this.createTicket.bind(this);

  }
  createTicket(ticket) {
    if (ticket.status === false) {
      ticket.status = ''
    }
    if (ticket.status === true) {
      ticket.status = 'v' // позже заменить на картинку ('галочка' выполнено) 
    }
  
    if(ticket.created) {
      const dateInMs = ticket.created;
      const date = new Date(dateInMs).getDate();
      const month = new Date(dateInMs).getMonth() + 1;
      const year = new Date(dateInMs).getFullYear();
      const hours = new Date(dateInMs).getHours();
      const seconds = new Date(dateInMs).getSeconds();
  
      ticket.created = `${date}.${month}.${year} ${hours}:${seconds}`
    }
    this.ticket.markUp(ticket.name, ticket.description, ticket.created, ticket.status)
  }

  createTickets(data) {
    data.map(this.createTicket)
  }
 
}

// data.map(ticket => {

//   if (ticket.status === false) {
//     ticket.status = ''
//   }
//   if (ticket.status === true) {
//     ticket.status = 'v' // позже заменить на картинку ('галочка' выполнено) 
//   }

//   if(ticket.created) {
//     const dateInMs = ticket.created;
//     const date = new Date(dateInMs).getDate();
//     const month = new Date(dateInMs).getMonth();
//     const year = new Date(dateInMs).getFullYear();
//     const hours = new Date(dateInMs).getHours();
//     const seconds = new Date(dateInMs).getSeconds();

//     ticket.created = `${date}.${month}.${year} ${hours}:${seconds}`
//   }

//   this.ticketView.markUp(ticket.name, ticket.created, ticket.status)
// })


