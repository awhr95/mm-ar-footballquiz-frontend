import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";

export default function leaderboard() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get();
      } catch (error) {
        console.error(error.message);
      }
    };
  });
  fetchData();

  return (
    <>
      <Header />
      {/* need to map through the users*/}
      <section></section>
      <Nav />
    </>
  );
}
