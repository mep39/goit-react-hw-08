import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/operations";
import { selectUser } from "../../../redux/auth/selectors";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h5" style={{ marginRight: "300px" }}>
        Welcome, {user.name}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
