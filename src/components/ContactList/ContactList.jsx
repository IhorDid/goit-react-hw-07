import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import styles from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={styles.users}>
      {filterContacts.map((contact) => (
        <Contact key={contact.id} currentUser={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
