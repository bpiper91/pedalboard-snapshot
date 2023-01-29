import React from 'react';
import PedalBoard from '../PedalBoard';

// will display both pedalboard and data

// Pass to PedalBoard:
// pedalsArr with all pedals on board, in order
// pedal.name = string
// pedal.color = string to match color options in CSS
// pedal.size = string to match size options in CSS

const Snapshot = ( snapshotId ) => {
    // eventually retrieve snapshot object by its ID

    // development object
    const snapshotObj = {
        date: 'November 23, 2022',
        pedalsArr: [
            {
                brand: 'Boss',
                name: 'TU-2',
                effect: 'tuner',
                size: 'size-b',
                color: 'white',
                notes: 'Simple tuner'
            },
            {
                brand: 'TC Electronic',
                name: 'Spark',
                effect: 'boost',
                size: 'size-b',
                color: 'white',
                notes: 'Boost with some extra controls'
            },
            {
                brand: 'Greer Amps',
                name: 'Lightspeed',
                effect: 'overdrive',
                size: 'size-b',
                color: 'blue',
                notes: "Best transparent overdrive I've ever owned"
            },
            {
                brand: 'Ibanez',
                name: 'TS-9DX',
                effect: 'overdrive',
                size: 'size-b',
                color: 'green',
                notes: 'For when I need a mid push'
            },
            {
                brand: 'Boss',
                name: 'CE-2',
                effect: 'chorus',
                size: 'size-b',
                color: 'blue',
                notes: 'Rarely used, might replace with a phaser or flanger'
            },
            {
                brand: 'EarthQuaker Devices',
                name: 'Night Wire',
                effect: 'tremolo',
                size: 'size-b',
                color: 'purple',
                notes: 'Harmonic tremolo that borders on a Uni-vibe sound'
            },
            {
                brand: 'EarthQuaker Devices',
                name: 'Avalanche Run V2',
                effect: 'reverb',
                size: 'size-x',
                color: 'blue',
                notes: 'Amazing stereo width, but I mostly play in mono'
            },
            {
                brand: 'Old Blood Noise Endeavors',
                name: 'Rever',
                effect: 'reverb',
                size: 'size-bb',
                color: 'yellow',
                notes: 'Limited edition colorway mostly used when I need to use the Av Run as a delay'
            }
        ],
        amp: 'Vox AC-10 or Fender Bassbreaker',
        boardNotes: "I replaced the DOD Looking Glass with a Greer Lightspeed and swapped the fuzz for a second overdrive"
    };

    return (
        <div className='snapshot grid grid-cols-1 md:grid-cols-2 gap-2'>
            <PedalBoard pedalsArr={snapshotObj.pedalsArr} />
            <div className="board-info-container p-4">
                <h3>{`Pedalboard ${snapshotObj.date}`}</h3>
                {snapshotObj.notes && 
                    <>
                        <p>Notes:</p>
                        <p>{`${snapshotObj.notes}`}</p>
                    </>
                }
            </div>
        </div>
    )
};

export default Snapshot;