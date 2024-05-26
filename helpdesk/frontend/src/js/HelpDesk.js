import TicketService from "./TicketService";
import TicketView from './TicketView'; //
import Ticket from './Ticket'; //
 
/**
 *  Основной класс приложения
 * */
export default class HelpDesk {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("This is not HTML element!");
    }
    
    this.container = container;
    this.ticketView = new TicketView();
    // this.ticket = new Ticket(1); 
  }

  init() {
    TicketService.list(this.ticketView.createTickets)
  }

  getDescription() {
    
  }

}

