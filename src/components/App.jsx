import "modern-normalize";
import "./App.css";
import ContactList from "./ContactList/ContactList.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError, selectLoading } from "../redux/contactsSlice";
import { fetchContacts } from "../redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading, please wait...</p>}
      {error && <p>Opps, some wrong, try again!</p>}
      <ContactList />
    </div>
  );
}

export default App;
