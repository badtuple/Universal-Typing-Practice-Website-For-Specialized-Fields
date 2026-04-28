import GenericRadioButton from './GenericRadioButton';

import '/src/App.css';


function OptionShowWordCounter ({selectedOption, setSelectedOption}) {

    return (
        <>
            <GenericRadioButton optionsList={['Show', 'Hide']} rowLabel='Word Counter: ' selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </>
    )
}

export default OptionShowWordCounter;