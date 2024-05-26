import TicketService from "./TicketService";

export default class TicketUpdate {
  constructor(id, data, callback) {
    // this.id = id;
    // this.data = data;
    // this.callback = callback;
    this.getTickets = this.getTickets.bind(this);
    this.upD();
  }

  updateTicket(id, data, callback) {

  }

  upD() {
    // const updateTickets = document.querySelectorAll('.ticket-change');

    // updateTickets.forEach(ticket => {
    //   ticket.addEventListener('click', e => {
    //     console.log(e)
    //   })
    // })

    const updateTicket = document.querySelector('.ticket-change');

    updateTicket.addEventListener('click', e => console.log('click'))
    
  }

  clgTicket() {
    TicketService.list(this.getTickets)
  }

  getTickets(data) {
    data.map(tickets => console.log(tickets))
  }


}