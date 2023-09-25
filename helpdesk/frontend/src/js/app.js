import HelpDesk from './HelpDesk';
// import TicketView from './TicketView';
// import Ticket from './Ticket';
import TicketForm from './TicketForm';

const root = document.getElementById('root');
const addTicket = document.querySelector('.add-ticket-btn');

const ticketForm = new TicketForm();

const app = new HelpDesk(root);


app.init();
addTicket.addEventListener('click', e => {
	ticketForm.newTicketMarkUp()
})

