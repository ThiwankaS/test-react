import './App.css';

function MyInfo() {
  return (
    <div>
      <h1 className='Heading'>Thiwanka Somachandra</h1>
      <p className='TagLine'>I want to Learn and Master Full Stack Web Development</p>
      <ol className='List'>
        <li>Norway</li>
        <li>Germany</li>
        <li>Switzerland</li>
      </ol>
    </div>
  )
  }
function App() {
  return (
    <div className="App">
      <MyInfo/>
    </div>
  );
}

export default App;
