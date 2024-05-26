import TicketService from "./TicketService";
import Ticket from "./Ticket";

/**
 *  Класс для создания формы создания нового тикета
 * */
export default class TicketForm {
  constructor() {
<<<<<<< HEAD
    this.ticket = new Ticket(1);
    this.openForm();
    this.closeForm();
    this.formMarkUp();
   }
   
   openForm() {
    const addTicketBtn = document.querySelector('.add-ticket-btn');
    const formPopup = document.querySelector('.form-popup');

    addTicketBtn.addEventListener('click', () => {
      formPopup.classList.toggle('hide')
      
      });
    }
  

  closeForm() {
    const closeBtn = document.querySelector('#closeFormBtn');
    const sendBtn = document.querySelector('.sendBtn');
    const formPopup = document.querySelector('.form-popup');


    closeBtn.addEventListener('click', () => {
      
      formPopup.classList.toggle('hide');
    })

    sendBtn.addEventListener('click', () => {
      
      formPopup.classList.toggle('hide');
      window.location.reload();
    })
    
  }

  formMarkUp() {
    const ticketForm = document.querySelector('.ticket-form')

    ticketForm.addEventListener('submit', e => {
      e.preventDefault();
      
      const formData = new FormData(ticketForm);
      
      TicketService.create({
        name: formData.get('ticket_name'),
        description: formData.get('ticket_description'),
      }, this.ticket.markUp(formData.get('ticket_name'), formData.get('ticket_description')))
    })
    
  }


    // ticketForm.innerHTML = ` 
    //   <div id="contactForm" class="form-popup">
    //     <h2 class="form-title">Добавить тикет</h2>

    //     <label for="ticket_name">Краткое описание</label>
    //     <input type="text" name="ticket_name" class="ticket_name"</input>

    //     <label for="ticket_description">Подробное описание</label>
    //     <textarea type="text" name="ticket_description" class="ticket_description"></textarea>

    //     <div class="btn-container">
    //       <button type="button" class="btn cancel" id="closeFormBtn">Отмена</button>
    //       <button type="submit" class="btn">ОК</button>
    //     </div>
    //   </div>
    // `
    // container.appendChild(ticketForm);
=======
    
  }

  newTicketMarkUp() {
    const container = document.querySelector('.container');
    const addForm = document.createElement('form');
    addForm.classList.add('add-new-ticket');
    addForm.innerHTML = `
    <div class="new-ticket-container">
      <div class="new-ticket-header">Добавить тикет</div>

      <label for ="short-descr" class="new-ticket-short-descr">Краткое описание</label>
      <input type="text" id="short-descr" name="short-descr">

      <label for ="descr" class="new-ticket-descr">Подробное описание</label>
      <textarea name="descr" id="descr" rows="5"></textarea>

      <div class="form-btn-container">
        <button class="cancel">Отмена</button>
        <button class="ok">Ок</button>
      </div>

    </div>`
    container.append(addForm)
    return addForm
  }


>>>>>>> cd4e7c130ca1cfc97467a0166b207b25da31aa18
}
  
