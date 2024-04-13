import { Toaster } from "react-hot-toast";
import AppBar from "./AppBar/AppBar";

export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
      <AppBar />
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
