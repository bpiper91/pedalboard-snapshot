import React from 'react';

const PedalBoard = (pedalsArr) => {

    console.log(pedalsArr);

    return (
        <div className='board-container'>
            <div className='board'>
                <div className='flex flex-row-reverse flex-wrap-reverse justify-around content-around gap-5 gap-y-6'>
                    {pedalsArr.pedalsArr &&
                        pedalsArr.pedalsArr.map((pedal, index) => (
                            <div key='index' className={`pedal ${pedal.color} ${pedal.size}`} data-id-pedalname={`${pedal.name}`}></div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default PedalBoard;