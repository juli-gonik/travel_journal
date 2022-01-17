import earth from "../images/earth.svg";

export default function Header() {
  return (
    <header>
      <div className="row header">
        <img src={earth} />
        <h1>my travel journal.</h1>
      </div>
    </header>
  );
}
