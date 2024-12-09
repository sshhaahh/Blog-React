import Header from './components/Header';

import './App.css';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';
import { useContext, useEffect } from 'react';
function App() {
  const { fetchApi } = useContext(AppContext);

  useEffect(()=>{
    fetchApi();
},[]);

  return (
    <div className='flex flex-col min-h-screen '>
      <Header/>
      <div className=' flex-grow flex justify-center items-center mb-8'>
        <Blogs />
      </div>
      <div className='fixed bottom-0 w-full bg-white z-10'>
        <Pagination/>
      </div>
    </div>
  );
}

export default App;

