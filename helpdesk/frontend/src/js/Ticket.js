import createRequest from "./api/createRequest";
const localhost = 'http://localhost:3000';

export default class Ticket {
  constructor({ id, name, description, status, created }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.created = created;
  }

  allTickets() {
    createRequest({
      url: localhost + '/?method=allTickets',
      method: 'GET',
      callback: data => data.map(ticket => console.log(ticket)),
    })
  }

  ticketById() {
    createRequest({
      url: localhost + '/?method=allTickets',
      method: 'GET',
      callback: data => data.map(ticket => console.log(ticket.id))
    })
  }
  //Что отправлять в POST запросе?
  createTicket() {
   
  }
}
