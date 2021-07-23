import React, { useState } from 'react';
import Calendar from './components/calendar/Calendar';
import Header from './components/header/Header';
import SignModal from './components/sign/SignModal';

const App = () => {
  const [signModal, setSignModal] = useState(false);
  return (
    <>
      <Header setSignModal={setSignModal} />
      {signModal ? <SignModal setSignModal={setSignModal} /> : null}
      {/* <Calendar /> */}
    </>
  );
};

export default App;
