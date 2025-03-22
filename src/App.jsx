import SkipCard from "./components/SkipCard";
import { skipOptions } from "./constants";
import "./css/index.css";

function App() {
  return (
    <div className="min-h-screen bg-[#efedff]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        {skipOptions.map((skip) => (
          <SkipCard key={skip.id} skipData={skip} />
        ))}
      </div>
    </div>
  );
}

export default App;
