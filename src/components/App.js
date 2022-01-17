import Card from "./Card";
import Header from "./Header";
import data from "../data";

export default function App() {
  const cards = data.map((item) => {
    return <Card item={item} />;
  });

  return (
    <>
      <Header />
      <main className="row" id="sarasa">
        {cards}
      </main>
    </>
  );
}
