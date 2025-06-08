import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="app">
      <div>
        <h1 className="title">ფრენები ყველა მიმართულებით</h1>
        <p className="sub-title">დაბალბიუჯეტიანი ფრენები საქართველოდან ნებისმიერი მიმართულებით.</p>
      </div>
      <div className="cards-box">
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
    </div>
  );
}

export default App;
