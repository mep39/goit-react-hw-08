import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import useAuth from "../../hooks/useAuth";
import css from "./AppBar.module.css";

export default function AppBar() {
  const { isLoggedIn, isRefreshing } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {!isRefreshing && <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>}
    </header>
  );
}
