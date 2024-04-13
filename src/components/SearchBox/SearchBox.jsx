import { TextField } from "@mui/material";
import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <p className={css.text}>Find contacts by name or number</p>
      <TextField
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        variant="outlined"
      />
    </div>
  );
}
