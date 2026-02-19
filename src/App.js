import './App.css';
import { News } from "./components/news/news";

function App() {

  const name = "Kuba";

  const newsList = [
    {
      title: "Spotkanie w Monrchium",
      description: "odbyło się spotkanie światowych liderów"
    },

    {
      title: "Szczyt klimatyczny w Dubaju",
      description: "przywódcy państw debatowali nad nowymi celami redukcji emisji CO2"
    },

    {
      title: "Rozmowy pokojowe w Genewie",
      description: "delegacje omawiały warunki zawieszenia broni i dalsze negocjacje"
    },

    {
      title: "Forum gospodarcze w Davos",
      description: "liderzy biznesu i polityki dyskutowali o przyszłości globalnej ekonomii"
    }


  ]

  return (
    <>

      <h1 className="animated-title">HELLO {name}!</h1>

      <h1>Hello {name}!</h1>

      <main>
        {newsList.map((news, index) =>
          <News key={news.title}
          title={news.title}
            description={news.description}
          ></News>
        )}
      </main>
    </>

  );
}

export default App;
