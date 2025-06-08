const Card = ({ city_name, date, month, price, imageUrl }) => {
  console.log(imageUrl);
  return (
    <div className="card-container">
      <div
        className="card"
        style={{ backgroundImage: `url("${imageUrl}")` }}>
        <div className="card-text">
          <h3 className="title">{city_name}</h3>
          <p>
            {date} {month} &#8382;{price} დან
          </p>
        </div>
        <div className="button-container">
          <button>დაჯავშნა</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
