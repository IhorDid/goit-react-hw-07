import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import styles from "./ContactList.module.css";
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  return (
    <>
      <ul className={styles.users}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} currentUser={contact} />
        ))}
      </ul>
      {contacts.length > 0 || error || isLoading || (
        <p>You have no contacts...</p>
      )}
      {filteredContacts.length > 0 || error || isLoading || <p>Empty...</p>}
    </>
  );
};

export default ContactList;
