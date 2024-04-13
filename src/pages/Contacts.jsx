import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import Loader from "../components/Loader/Loader";
import DocumentTitle from "../components/DocumentTitle/DocumentTitle";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { fetchContacts } from "../redux/contacts/operations";
import { selectIsLoading, selectError } from "../redux/contacts/selectors";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(() => {
        toast.error("Ooops... Error, please reload page");
      });
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>Phonebook</DocumentTitle>
      <ContactForm />
      <SearchBox />
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      <ContactList />
      <Toaster />
    </div>
  );
}
