import HelpDesk from './HelpDesk';
import TicketView from './TicketView';
import Ticket from './Ticket';

const root = document.getElementById('root');
const add = document.querySelector('.add-ticket-btn');

// const ticket = new Ticket(1);

const app = new HelpDesk(root);


app.init();

add.addEventListener('click', e => {

  
  
})

