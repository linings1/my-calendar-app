import React, { useState, Fragment, useEffect } from 'react';
import './App.css';
import { getMonth } from './data';
import CalendarHeader from './components/Header';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import { useSelector } from 'react-redux'

function App() {
  const month = useSelector((state: any) => state.month);
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(month));
  }, [month]);

  return (
    <Fragment>
      <div className='h-screen flex flex-col'>
        <CalendarHeader />
        {/* <div className="flex flex-1"></div> */}
        <Sidebar />
        <Month month={currentMonth} />
      </div>
    </Fragment>
  );
}

export default App;
