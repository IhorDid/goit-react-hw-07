import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ currentUser }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.list}>
      <div>
        <p>
          <FaUser /> {currentUser.name}
        </p>
        <p>
          <FaPhoneAlt /> {currentUser.number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(currentUser.id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
