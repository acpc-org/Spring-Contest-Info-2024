"use client"

import React, { useState, useEffect } from 'react';
import { format, formatDuration, intervalToDuration, isBefore, addDays, add, endOfDay, differenceInMilliseconds } from 'date-fns';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// icons
import { LapTimerIcon } from '@radix-ui/react-icons'


export default function Countdown() {
  const now = new Date();
  const endDate = new Date(2024,3,13);

  const [countdown, setCountdown] = useState('');
  const [formattedCountDown, setFormattedCountDown] = useState('');
  const [countdownEnded, setCountdownEnded] = useState(false);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  // useEffect hook: Updates the countdown every second and checks if the countdown has ended. If it has, it clears the interval and sets the countdownEnded state to true.
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const duration = intervalToDuration({ start: now, end: endDate });

      if (isBefore(endDate, now)) { 
        setCountdownEnded(true);
        clearInterval(interval);
      } else { 
        var countDownText = formatDuration(duration, {zero: true});
        setCountdown(countDownText);

        var formattedCountDownText = countDownText.replace("day", ":").replace("hour", ":").replace("minute", ":").replace("second", "");
        formattedCountDownText = formattedCountDownText.replace(/[^\d:]/g, '');
        formattedCountDownText = (formattedCountDownText.slice(-1) == ':') ? formattedCountDownText + '0' : formattedCountDownText;
        setFormattedCountDown(formattedCountDownText);
      }

    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div className='countdown-timer-container'>
      <div className='timer text-sm text-left'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <h4 className='flex items-center gap-1'><LapTimerIcon></LapTimerIcon>{formattedCountDown}</h4>
            </TooltipTrigger>
            <TooltipContent>
              <h3>Deadline to Apply: {endDate.toLocaleDateString("en-US")}</h3>
              {!countdownEnded && <h4>{countdown} remaining</h4>}
              {countdownEnded && <h4>Deadline Passed!</h4>}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );       
}