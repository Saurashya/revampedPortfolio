"use client"

import { FC, useEffect, useState } from "react";
import moment from 'moment-timezone';

interface liveClockProps {
    timeZone: string;
}

const LiveClock:FC<liveClockProps>=({timeZone})=>{
    const [time, setTime] = useState<string>("");
    useEffect(() => {
        const updateClock=()=>{
            const CurrentTime =moment().tz(timeZone).format('HH:mm');
            setTime(CurrentTime);
        }
        const interval=setInterval(updateClock,1000);

        return ()=>{
            clearInterval(interval);
        }
    }, [timeZone]);
    return (
       <div className="text-3xl text-secondary-foreground font-semibold">
        {time?(
            <div className="flex items-center justify-center gap-[0.5vw]">
                <span>{timeZone.split("/")[1]}</span>
                <span>{time}</span>
            </div>
        ):
        <div className="text-3xl text-secondary-foreground font-semibold">Loading...</div>

        }
       </div>
    );
};

export default LiveClock;
