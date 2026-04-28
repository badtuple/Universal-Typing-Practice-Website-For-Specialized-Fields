import {useState, useEffect} from 'react';

import '/src/App.css';


function GenericRadioButton ({optionsList, rowLabel, selectedOption, setSelectedOption}) {

    return (
        <>
            <span className='genericButtonGroupRow'>
                <label className='genericButtonGroupLabel'>{rowLabel}</label>
                <div className='genericRadioButtonGroup'>
                    {optionsList.map((option) => (
                        <button
                            key={option}
                            className={`radioButtonOption ${selectedOption === option ? 'radioButtonSelected' : ''}`}
                            onClick={() => setSelectedOption(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </span>
        </>
    );
}

export default GenericRadioButton;