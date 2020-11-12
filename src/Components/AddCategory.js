import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory  = ({setcategory}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange= (e) =>{
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.prevenDefault();
        setcategory(cats => [ inputValue,...cats,]);
        setinputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes={
    setcategory: PropTypes.func.isRequired
}
