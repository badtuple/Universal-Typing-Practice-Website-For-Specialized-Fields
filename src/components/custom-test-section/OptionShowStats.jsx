import GenericRadioButton from './GenericRadioButton';

import '/src/App.css';


function OptionShowStats ({selectedOption, setSelectedOption}) {

    return (
        <>
            <GenericRadioButton optionsList={['Show', 'Hide']} rowLabel='Stats: ' selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </>
    )
}

export default OptionShowStats;