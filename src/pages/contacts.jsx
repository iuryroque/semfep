import '../App.css';
import './contacts.css';

import Header from '../components/Header';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

function ContactsPage() {
  return (
    <div className="page-contacts">
      <Header />
      <Contacts />
      <Footer />
    </div>
  );
}

export default ContactsPage;
