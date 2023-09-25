/**
 *  Класс для создания формы создания нового тикета
 * */
export default class TicketForm {
  constructor() {
    
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


}
