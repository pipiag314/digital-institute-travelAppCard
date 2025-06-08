import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="app">
      {data.map((card) => (
        <Card
          key={card.id}
          city_name={card.city_name}
          date={card.date}
          price={card.price}
          month={card.month}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
