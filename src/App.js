import React, {useContext, useEffect} from 'react';
import Button from './components/Button';
import CountdownAnimation from './components/CountdownAnimation';
import SetPomodoro from './components/SetPomodoro';
import {SettingsContext} from './context/SettingsContext';
import './App.css';

function App() {
  const {
    pomodoro, 
    executing, 
    updateExecute, 
    startAnimate, 
    startTimer, 
    pauseTimer, 
    children, 
    settingsBtn, 
    setCurrentTimer
  } = useContext(SettingsContext);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate]);
  return (
    <div className='container'>
      <h1>Pomodoro</h1>
      <small>Be Productive the right way.</small>
      {pomodoro == 0 ? (
        <SetPomodoro />) : (
          <div>
            <ul className='labels'>
              <li>
                <Button title='Work' activeClass={executing.active === 'work' ? 'active-label' : undefined} _callback={() => setCurrentTimer('work')} />
              </li>
              <li>
                <Button title='Short Break' activeClass={executing.active === 'short' ? 'active-label' : undefined} _callback={() => setCurrentTimer('short')} />
              </li>
              <li>
                <Button title='Long Break' activeClass={executing.active === 'long' ? 'active-label' : undefined} _callback={() => setCurrentTimer('long')} />
              </li>
            </ul>
            <Button title='Settings' _callback={settingsBtn} />
            <div className='timer-container'>
              <div className='timer-wrapper'>
                <CountdownAnimation key={pomodoro} timer={pomodoro} animate={startAnimate}>{children}</CountdownAnimation>
              </div>
            </div>
            <div className='button-wrapper'>
              <Button title='Start' activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
              <Button title='Pause' activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
            </div>
          </div>
        )
      }
    </div>
  );
}
export default App;
