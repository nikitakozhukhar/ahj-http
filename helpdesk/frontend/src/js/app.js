import HelpDesk from './HelpDesk';
import TicketView from './TicketView';
import TicketForm from './TicketForm';
import Ticket from './Ticket';
import TicketUpdate from './TicketUpdate'

const root = document.getElementById('root');
// const add = document.querySelector('.add-ticket-btn');

// const ticket = new Ticket(1);

const app = new HelpDesk(root);

app.init();

const form = new TicketForm();


const updateTicket = new TicketUpdate();
// add.addEventListener('click', e => {
  
//   form.formMarkUp();
// });


