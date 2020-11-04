import React, {useState} from 'react';

const Form = () => {

    const [user, setUser] = useState(
        {
            name: "",
            email: "",
            password: "",
            checkbox: ""
        }
    )

    const onChange = (event) => {
        
        if (event.target.type === 'checkbox'){
            setUser({...user, [event.target.name] : event.target.checked});
        }else{
            setUser({...user, [event.target.name] : event.target.value});
        }
    }

    return(
        <form>
            <label htmlFor='name'>
                Name: 
                <input type='text' id='name' name='name' value={user.name} onChange={onChange}/>
            </label>
            <br />
            <label htmlFor='email'>
                Email: 
                <input type='email' id='email' name='email' value={user.email} onChange={onChange}/>
            </label>
            <br />
            <label htmlFor='password'>
                Password: 
                <input type='password' id='password' name='password' value={user.password} onChange={onChange}/>
            </label>
            <br />
            <label htmlFor='agreeTerms'>
                Do you agree to the Terms and Condition? 
                <input type='checkbox' id='agreeTerms' name='agreeTerms' onChange={onChange}/>
            </label>
            {console.log(user)}
        </form>
    )
}

export default Form;