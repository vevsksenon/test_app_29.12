import React from 'react';
import './App.css';
import AdaptiveGroup from '../../my-test-app/src/components/AdaptiveGroup.tsx';

const params = [
  {
    name: 'Иванов Иван Иванович',
    email: 'Test1@mail.ru',
    phone: '+70000000000',
  },
  {
    name: 'Петров Петр Петрович',
    email: 'Test2@mail.ru',
    phone: '+70000000001',
  },
  {
    name: 'Сидоров Сергей Сергеевич',
    email: 'Test3@mail.ru',
    phone: '+70000000002',
  }
]

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <AdaptiveGroup users={params} />
      </header>
    </div>
  );
}

export default App;
