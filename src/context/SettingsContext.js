import React, {useState, createContext} from 'react';

export const SettingsContext = createContext();
function SettingsContextProvider(props) {
    const [pomodoro, setPomodoro] = useState(0);
    const [executing, setExecuting] = useState({});
    const [startAnimate, setStartAnimate] = useState(false);

    function updateExecute(updatedSettings) {
        setExecuting(updatedSettings);
        setTimerTime(updatedSettings);
    }

    function setTimerTime(evaluate) {
        switch(evaluate.active) {
            case 'work':
                setPomodoro(evaluate.work);
                break;
            case 'short':
                setPomodoro(evaluate.short);
                break;
            case 'long':
                setPomodoro(evaluate.long);
                break;
            default:
                setPomodoro(0);
                break;
        }
    }

    function setCurrentTimer(active_state) {
        updateExecute({
            ...executing,
            active: active_state
        });
        setTimerTime(executing);
    }

    // Start animation function.
    function startTimer() {
        setStartAnimate(true);
    }

    // Pause animation function.
    function pauseTimer() {
        setStartAnimate(false);
    }

    function stopAnimate() {
        setStartAnimate(false);
    }

    // Pass time to counter.
    function children({remainingTime}) {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return `${minutes}:${seconds}`;
    }

    // Clear session storage.
    function settingsBtn() {
        setExecuting({});
        setPomodoro(0);
    }

    return (
        <SettingsContext.Provider value={{
            pomodoro, 
            executing, 
            updateExecute, 
            startAnimate, 
            startTimer, 
            pauseTimer, 
            children, 
            settingsBtn, 
            setCurrentTimer, 
            stopAnimate 
        }}>
            {props.children}
        </SettingsContext.Provider>
    );
}
export default SettingsContextProvider;
