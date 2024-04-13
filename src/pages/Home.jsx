import DocumentTitle from "../components/DocumentTitle/DocumentTitle";

export default function Home() {
  return (
    <div>
      <DocumentTitle>
        Phonebook welcome page{" "}
        <span role="img" aria-label="Greeting icon">
          👋
        </span>
      </DocumentTitle>

      <p style={{ fontSize: "24px", textAlign: "center" }}>
        Welcome to your personal online phonebook, where you can store and
        manage your contacts online. To access your contact book, please either
        register or log in.
      </p>
    </div>
  );
}
