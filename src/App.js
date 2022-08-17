import Navbar from './components/Navbar';
import { UserList } from './components/UserList';
//redux
import {Provider} from 'react-redux';
import redux from './redux';

function App() {
  return (
    <Provider store={redux}>
      <Navbar/>
      <UserList/>
    </Provider>
  );
}

export default App;
