import styles from "./App.module.css";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import ThemeContextProvider from "./ThemeContextProvider/ThemeContextProvider";

function App() {

  return (
    <ThemeContextProvider>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Navbar />
        </nav>
        <main className={styles.main}>
          <Main />
        </main>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
