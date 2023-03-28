
import { data } from './helper/data';
import useFetchData from './hooks/useFetchData';
import List from './pages/List';

function App() {
  const {myData, setMyData} = useFetchData();

  return (
    <main>
      <section className='container'>
        <h3>{myData.length} birthdays today</h3>
        <List myData={myData}/>
        <button onClick={() => setMyData([])}>Clear All</button>
        <button onClick={() => setMyData(data)}>Refresh All</button>
      </section>
    </main>
  );
}

export default App;
