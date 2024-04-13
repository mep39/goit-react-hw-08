import { Link } from "react-router-dom";
import { Button, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import useAuth from "../../../hooks/useAuth";

const MyToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.main,
  justifyContent: "space-between",
}));

const MyLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  marginRight: theme.spacing(2),
}));

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <MyToolbar>
      <nav>
        <MyLink to="/">
          <Button type="submit" variant="contained" color="primary">
            Home
          </Button>
        </MyLink>
        {isLoggedIn && (
          <MyLink to="/contacts">
            <Button type="submit" variant="contained" color="primary">
              Contacts
            </Button>
          </MyLink>
        )}
      </nav>
    </MyToolbar>
  );
}
