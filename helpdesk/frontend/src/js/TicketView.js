/**
 *  Класс для отображения тикетов на странице.
 *  Он содержит методы для генерации разметки тикета.
 * */
export default class TicketView {
  constructor() {}

  createContainer() {
    const container = document.createElement('div');
    container.classList.add('container');
  
    return container
  }

  createBtn() {
    const btnContainer = this.createContainer.appendChild('div');
    btnContainer.classList.add('btn-container');

   const addTicketBtn = btnContainer.appendChild('button');
   addTicketBtn.classList.add('add-ticket-btn')
   addTicketBtn.textContent = 'Добавить тикет';
   return addTicketBtn
  }

}


