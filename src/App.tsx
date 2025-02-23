import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { DataProvider } from "./context/context";
import Main from "./Features";

function App() {

  return (
  <DataProvider>
   <Main />
   </DataProvider>
    )

}

export default App;
