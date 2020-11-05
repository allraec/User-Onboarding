import React, {useState} from 'react';
import * as yup from 'yup';

const Form = ({change, values, errors, submit}) => {

    const onChange = (event) => {

        const {name, value, checked, type} = event.target;
        console.log(name, value)
        console.log(event.target.checked, event.target.type, event.target.name)
        const val = type ==="checkbox" ? checked : value;
        change(name, val)
    
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        console.log(values)
      }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>
                Name: 
                <input type='text' id='name' name='name' value={values.name} onChange={onChange}/>
            </label>
            <br />
            <div>{errors.name}</div>
            <br />
            <label htmlFor='email'>
                Email: 
                <input type='email' id='email' name='email' value={values.email} onChange={onChange}/>
            </label>
            <br />
            <div>{errors.email}</div>
            <br />
            <label htmlFor='password'>
                Password: 
                <input type='password' id='password' name='password' value={values.password} onChange={onChange}/>
            </label>
            <br />
            <div>{errors.password}</div>
            <br />
            <label htmlFor='agreeTerms'>
                Do you agree to the Terms and Condition? 
                <input type='checkbox' id='agreeTerms' name='agreeTerms' onChange={onChange}/>
            </label>
            <br />
            <div>{errors.agreeTerms}</div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form;