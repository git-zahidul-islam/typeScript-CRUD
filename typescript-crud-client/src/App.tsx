import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">TypeScript CRUD operation</h1>

      <div className="my-10">
        <Create/>
      </div>
      <div className="my-10">
        <Read/>
      </div>
    </div>
  );
};

export default App;