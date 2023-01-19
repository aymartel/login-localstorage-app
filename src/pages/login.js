import React from 'react'
import HeaderOne from '../components/headerOne';
import { useAuthContext } from '../contexts/authContext';
import { useForm } from '../hooks/useForm';

export const LoginPage = () => {

  const initialForm = {
    username: '',
    password: '',
  }
  const [{ username, password }, handleInputChange, reset] = useForm(initialForm);

  const { login } = useAuthContext();

  function handleSubmit(event) {
    event.preventDefault();
    login("example@example.com", "xproject");
    reset()
  }

  return (
    <>
      <HeaderOne/>
      <h1>LOGIN PUBLICA</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="email" name="username" value={username} onChange={handleInputChange}  />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password" value={password} onChange={handleInputChange}  />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>

        </form>
      </div>
    </>

  )
}



