import { useState , useEffect } from 'react';
import '../assets/styles/Technique1.css'

function Technique1()
{

    const [minute , setMinute ] = useState(5)
    const [seconds, setSecond ] = useState(0)

    useEffect(()=> {
        const interval = setInterval(() => {
            setSecond(prevsec => {
                if(prevsec > 0 || minute > 0)
                    {
                        if(prevsec > 0)
                        {
                            return prevsec - 1;
                        }
                    
                    else
                    {
                        return setMinute( prevMin => {
                            if(prevMin > 0 )
                            {
                                return prevMin - 1;
                            }
                            else
                            {
                                clearInterval(interval);
                                return 0;
                            }
                        }) || 59;
                    }
                }else
                {
                    clearInterval(interval)
                    return(0)
                }
            })
        },1000);
        return () => clearInterval(interval);
    } , [])

    return(
        <div className="circle one">
            <div className='circle two'>
                <div className='circle three'>
                    <div className='circle four'>
                        <h1 className='count'>{minute}:{seconds}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technique1;