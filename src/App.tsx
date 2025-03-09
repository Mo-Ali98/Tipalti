import { Expenses } from "./components/ExpensesTable";

function App() {
  return (
    <div className="w-full p-8">
      <h1 className="text-3xl font-extrabold text-center">Expenses</h1>

      <div className="flex flex-col items-center justify-center p-4 mt-5 w-full">
        <div className="w-full mx-auto p-10">
          <Expenses />
        </div>
      </div>
    </div>
  );
}

export default App;
