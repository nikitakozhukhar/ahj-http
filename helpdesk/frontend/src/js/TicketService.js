import createRequest from "./api/createRequest";

/**
 *  Класс для связи с сервером.
 *  Содержит методы для отправки запросов на сервер и получения ответов
 * */
export default class TicketService {
 constructor() {
  this.url = 'http://localhost:3000/';
 }

  static list(callback) {
    createRequest({
      url: 'http://localhost:3000/?method=allTickets',
      method: 'GET',
      callback
    })
  }

  static get(id, callback) {
    createRequest({
      url: 'http://localhost:3000/?method=ticketById&id=<id>',
      id,
      method: 'GET',
      callback
    })
  }

  static create(data, callback) {
    createRequest({
      url: 'http://localhost:3000/?method=createTicket',
      data: data,
      method: 'POST',
      callback
    })
  }

   update(id, data, callback) {}

   delete(id, callback) {}
}
