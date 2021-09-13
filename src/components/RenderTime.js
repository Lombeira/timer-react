import React, {useRef, useState, useEffect} from 'react';

import '../components/render-time.css';

const RenderTime = ({remainingTime}) => {
  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to trigger the last animation
  const theEndFunc = () => {
    if (remainingTime === 0) {
      console.log('Silveira God');
      setTimeout(() => {
        setOneLastRerender((val) => val + 1);
      }, 20);
    }
  };

  useEffect(() => {
    theEndFunc();
  });

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? 'up' : ''}`}>
        {remainingTime}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time ${!isTimeUp ? 'down' : ''}`}
        >
          {prevTime.current}
        </div>
      )}
    </div>
  );
};

export default RenderTime;
