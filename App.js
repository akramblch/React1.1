import Header from "./components/Header/Header";
import './components/style.css'
import FirstBlock from "./components/FirstBlock/FirstBlock";
import Titles from "./components/titles/titles"

function App() {
  return (
    <>
      <Header/>
      <main>
        <section><FirstBlock/></section>
        <section><Titles/></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;