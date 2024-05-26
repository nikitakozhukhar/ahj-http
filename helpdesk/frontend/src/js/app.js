import HelpDesk from './HelpDesk';
<<<<<<< HEAD
import TicketView from './TicketView';
import TicketForm from './TicketForm';
import Ticket from './Ticket';
import TicketUpdate from './TicketUpdate'

const root = document.getElementById('root');
// const add = document.querySelector('.add-ticket-btn');
=======
// import TicketView from './TicketView';
// import Ticket from './Ticket';
import TicketForm from './TicketForm';

const root = document.getElementById('root');
const addTicket = document.querySelector('.add-ticket-btn');
>>>>>>> cd4e7c130ca1cfc97467a0166b207b25da31aa18

const ticketForm = new TicketForm();

const app = new HelpDesk(root);

app.init();
<<<<<<< HEAD

const form = new TicketForm();


const updateTicket = new TicketUpdate();
// add.addEventListener('click', e => {
  
//   form.formMarkUp();
// });

=======
addTicket.addEventListener('click', e => {
	ticketForm.newTicketMarkUp()
})
>>>>>>> cd4e7c130ca1cfc97467a0166b207b25da31aa18

