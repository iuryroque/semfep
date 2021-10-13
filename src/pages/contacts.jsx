import '../App.css';
import './contacts.css';
import Footer from '../components/Footer';
import Contacts from '../components/Contacts'

import Header from '../components/Header';

function ContactsPage() {
  return (
    <div className="page-contacts">
      <Header />
      <Contacts />
      <Footer  />
    </div>
  );
}

export default ContactsPage;
