import location from "../images/location.svg";
export default function Card(props) {
  const info = props.item;
  return (
    <section className="card">
      <img src={info.imageUrl} className="card__image" />
      <article className="card__info">
        <p className="card__location">
          <img src={location} />
          <span>{info.location}</span>
          <a href={info.googleMapsUrl}>View on Google Maps</a>
        </p>
        <h2>{info.title}</h2>
        <p className="card__date">
          {info.startDate} - {info.endDate}
        </p>
        <p className="card__description">{info.description}</p>
      </article>
    </section>
  );
}
