import HelpDesk from './HelpDesk';
import TicketView from './TicketView';

const root = document.getElementById('root');

const app = new HelpDesk(root);

const ticketView = new TicketView();



app.init();

ticketView.createContainer()


