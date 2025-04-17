import ProgressBar from './ProgressBar';

export function App() {
  return (
    <div className="p-24 bg-slate-100">
      <h1 className="font-semibold text-4xl mb-8">Progress Bars</h1>
      <div className="flex flex-col gap-4">
        {barsWidth.map((width) => (
          <ProgressBar width={width} />
        ))}
      </div>
    </div>
  );
}

export default App;

const barsWidth = [5, 15, 20, 64, 98];
