import React, {useEffect, useState} from 'react';
import Form from './components/Form';
import './App.css';
import axios from 'axios';
import schema from './validation/schema';
import * as yup from 'yup';
import Users from './components/Users';

function App() {
  const initialFormValues = (
    {
        name: "",
        email: "",
        password: "",
        agreeTerms: false,
    }
  )

  const initialFormErrors = {
    id: '',
    name: '',
    email: '',
    password: '',
    agreeTerms: '',
  }

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState([]);

  const postNewUser = newUser => {

    axios.post('https://reqres.in/api/users', newUser)
    .then((res) => {
      console.log(res)
      console.log('form submitted')
    })
    .catch(err => console.log("ERROR IS", err))

  }

  const inputChange = (name, value) => {

    yup.reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    })
    .catch(err => {
      console.log(err.message)
      setFormErrors({
        ...formErrors,
        [name]: err.message
      })
    })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      id: Date.now(),
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      agreeTerms: formValues.agreeTerms,
    }

    postNewUser(newUser)
    setUsers([...users, newUser]);
    setFormValues({name: "", email: "", password: "", agreeTerms: false})
    console.log(users);
  }

  useEffect(() => {
    console.log(formErrors)
  }, [formErrors])



  return (
    <div className="App">
      <Form change={inputChange} values={formValues} errors={formErrors} submit={formSubmit}/>
      <Users users={users} />
    </div>
  );
}

export default App;
