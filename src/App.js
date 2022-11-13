import { useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const changeAdmin = () => {
    setIsAdmin((prevIsAdmin) => {
      return !prevIsAdmin;
    });
  }

  return (
    <div>
      <Card isAdmin={isAdmin} />
      <button onClick={changeAdmin}>切り替え</button>
    </div>
  );
}

export default App;
