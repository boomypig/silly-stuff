import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
function App() {
  let items = ["new york", "los angeles", "portland", "tokyo"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello World <span>ZA WORLD</span>
      </Alert>
    </div>
  );
}

export default App;
