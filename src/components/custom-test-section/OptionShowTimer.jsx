import GenericRadioButton from './GenericRadioButton';

import '/src/App.css';


function OptionShowTimer ({selectedOption, setSelectedOption}) {

    return (
        <>
            <GenericRadioButton optionsList={['Show', 'Hide']} rowLabel='Timer: ' selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </>
    )
}

export default OptionShowTimer;