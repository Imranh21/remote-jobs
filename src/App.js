import Categories from "./components/category/Categories";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import JobList from "./components/joblist/JobList";
import Navbar from "./components/navbar/Navbar";
import ContextProvider from "./context/ContextProvider";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Navbar />
        <Header />
        <Form />
        <Categories />
        <JobList />
        <Footer />
      </div>
    </ContextProvider>
  );
}
