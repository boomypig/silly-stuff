import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  let items = ["new york", "los angeles", "portland", "tokyo"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisiblity] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisiblity(false)}>
          Hello World <span>ZA WORLD</span>
        </Alert>
      )}

      <Button color="primary" onClick={() => setAlertVisiblity(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
