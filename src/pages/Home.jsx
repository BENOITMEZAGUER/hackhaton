import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handlePage1 = () => {
    navigate("/questionnaire");
  };
  const handlePage2 = () => {
    navigate("/evenement");
  };
  const handlePage3 = () => {
    navigate("/agenda");
  };
  const handlePage4 = () => {
    navigate("/reserver-une-salle");
  };
  const handlePage5 = () => {
    navigate("/droit-du-travail");
  };
  const handlePage6 = () => {
    navigate("/alertes");
  };
  return (
    <>
      <h2>home</h2>
      <div>
        <button onClick={handlePage1}>page1</button>
        <button onClick={handlePage2}>page2</button>
        <button onClick={handlePage3}>page3</button>
        <button onClick={handlePage4}>page4</button>
        <button onClick={handlePage5}>page5</button>
        <button onClick={handlePage6}>page6</button>
      </div>
    </>
  );
}

export default Home;
