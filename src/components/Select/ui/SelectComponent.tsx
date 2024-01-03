import { memo } from "react";
import Select from 'react-select';

interface SelectProps {
  setPeriod: React.Dispatch<React.SetStateAction<string>>
}

export const SelectComponent = memo(({setPeriod}: SelectProps) => {

  const customStyles = {
    control: (provided: {}, state: { isFocused: boolean }) => ({
      ...provided,
      width: '300px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginRight: 'auto',
      boxShadow: state.isFocused ? '0 0 0 2px #2c2c2c' : 'none',
      '&:hover': {
        border: '0.5px solid #2c2c2c',
      },
    }),
    option: (provided: {}, state: { isSelected: boolean } ) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#ffc902' : 'white',
      color: 'black',
      '&:hover': {
        backgroundColor: '#eeeeee',
        color: 'black',
      },
    }),
  };

  const options = [
    {value: 'annual', label: 'Annual'},
    {value: 'quarterly', label: 'Quarterly'},
  ]

  const handleSelectChange = (selectedOption: any) => {
    setPeriod(selectedOption.value);
  };


  return (
    <Select options={options} styles={customStyles} onChange={handleSelectChange} defaultValue={options[0]}/>
  )
})