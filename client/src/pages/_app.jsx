// Import Navbar from the components folder
import "@/styles/globals.css";
import NavBar from "../components/Navbar";


export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* Add your navbar component here */}
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
