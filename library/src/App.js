import logo from "./logo.svg";
import "./App.css";
import { useQuery, useMutation } from "@apollo/client";
import { HELLO_QUERY } from "./graphQl/queries/helloQuery";
import { HELLO_MUTATION } from "./graphQl/mutation/helloMutation";
import { navbarData } from "./uiData/navbarData";
import { Link, Route, Routes } from "react-router-dom";
import BookPage from "./pages/BookPage";
import CreateBookPage from "./pages/CreateBookPage";
import CreateAuthorePage from "./pages/CreateAuthorePage";
import AuthorePage from "./pages/AuthorePage";

function App() {
  // const [submit] = useMutation(HELLO_MUTATION);
  // const { loading, error, data, refetch } = useQuery(HELLO_QUERY);
  // if (loading) return <p>{loading ? "load" : ""}</p>;
  // if (error) return <p>{error.message}</p>;

  // const onSu = async () => {
  //   try {
  //     const {
  //       data: { myMutation },
  //     } = await submit();
  //     if (myMutation == "success") refetch();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className="App ">
      <nav>
        <div className="w-1/2 mx-auto flex justify-around">
          {navbarData.map(({ title, link }) => (
            <Link to={link}>{title}</Link>
          ))}
        </div>
      </nav>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<p>Haji se saat navbar nazadam ke biay too in path</p>} />
          <Route path="/books" element={<BookPage />} />
          <Route path="/authors" element={<AuthorePage />} />
          <Route path="/create-book" element={<CreateBookPage />} />
          <Route path="/create-authore" element={<CreateAuthorePage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
