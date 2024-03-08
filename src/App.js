import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {

  const [validationStates, setValidationStates] = useState({emailState: true, passwordState: true});
  
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 9 && /\d/.test(password);
  };

  const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"})

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value});
    setValidationStates({...validationStates, emailState: validateEmail(e.target.value)})
  });

  const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value})
    setValidationStates({...validationStates, passwordState: validatePassword(e.target.value)});
  });

  const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
    console.log(e.target.value);
  });

  const clickSubmit = (() => {
    //Call fetch
    alert(JSON.stringify(formValues))
    });

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>

      <Form>
      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email}/>
        { !validationStates.emailState && <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
        { !validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Favorite Class</Form.Label>
        <Form.Select onChange={handleSelectChange}>
          <option value="1">ISIS3710</option>
          <option value="2">Programación con tecnologias web</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={clickSubmit}>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default App;