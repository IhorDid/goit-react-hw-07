import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <>
      <p>Find contact by name</p>
      <input
        className={styles.search}
        type="text"
        name="seachName"
        value={filter}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
      />
    </>
  );
};

export default SearchBox;
