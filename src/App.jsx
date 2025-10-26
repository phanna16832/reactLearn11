// App.jsx
import Counter from "./Counter";
import Home from "./Home";
import TextFormat from "./TextFormat";
import Footer from "./Footer";
 const checkBoxStyle = {
  accentColor : "yellow"
}
function App() {
  return (
    <>
    <div>
      <Home />
      <Counter/>
      <input type="checkbox"/>
    </div>
    <TextFormat/>
    <Footer/>
    <input type="checkbox" class="accent-green-600 border-green-600" />

    </>
  );
}

export default App;
