import '../App.css';
import './contacts.css';
import Footer from '../components/Footer';
import Contacts from '../components/Contacts';

import NavBar from '../components/NavBar';
function ContactsPage() {
  return (
    <div className="page-contacts">
      <NavBar />
      <Contacts />
      <Footer />
    </div>
  );
}

export default ContactsPage;
