import Inbox from '../components/inbox'
import Sent from '../components/sent'
import Trash from '../components/trash'

export default class ViewHelper {

    getView = function (viewName) {
        switch (viewName) {
            case 'Inbox' : return Inbox;
            case 'Sent' : return Sent;
            case 'Trash' : return Trash;
            default : return Inbox;
        }
    }
}

