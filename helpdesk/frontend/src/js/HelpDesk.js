import TicketService from "./TicketService";
import TicketView from './TicketView'; //
import Ticket from './Ticket'; //
import createRequest from "./api/createRequest";//

const localhost = 'http://localhost:3000';//
 
/**
 *  Основной класс приложения
 * */
export default class HelpDesk {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("This is not HTML element!");
    }
    this.container = container;
    this.ticketService = new TicketService();
    this.ticketView = new TicketView(); //
    this.ticket = new Ticket(1); //
  }

  init() {
    createRequest({
      url: localhost + '/?method=allTickets',
      method: 'GET',
      callback: data => data.map(ticket => {

        if (ticket.status === false) {
          ticket.status = ''
        }
        if (ticket.status === true) {
          ticket.status = 'v' // позже заменить на картинку ('галочка' выполнено) 
        }

        if(ticket.created) {
          const dateInMs = ticket.created;
          const date = new Date(dateInMs).getDate();
          const month = new Date(dateInMs).getMonth();
          const year = new Date(dateInMs).getFullYear();
          const hours = new Date(dateInMs).getHours();
          const seconds = new Date(dateInMs).getSeconds();

          ticket.created = `${date}.${month}.${year} ${hours}:${seconds}`
        }

        this.ticketView.markUp(ticket.description, ticket.created, ticket.status)
      }),
    })
  }
}
