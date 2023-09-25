import React from 'react'
import styles from './Register.module.css';
import Logo from '../images/logo.png';
import Automax from '../images/automax logo.png'

const Register = () => {
  return (
    <div className={styles.register}>
    <img src={Logo} alt='' />
        <div className={styles.registerContent}>
            <div className={styles.heading}>
            <h1>Automax</h1>
             <h3>Grab your<br/> passes now!</h3>
            </div>
        
            <div className={styles.container}>
              <h2>Registration Form</h2>
              <form>
                  <input type="text" id="username" name="username" placeholder="Full Name" required />

                  <input type="email" id="email" name="email" placeholder='Email' required />
                  <input type='number' id='number' name='number' placeholder='Mobile No.' />
                  <input type='date' id='dob' name='dob' placeholder='Date of Birth' required />
                  <input type='text' id='college' name='college' placeholder='College' required />
                  <input type='text' id='year' name='year' placeholder='Year eg: 2nd/3rd' required />
                                     
                  <button type="submit">Register</button>
              </form>
          </div>

          
        </div>
        <footer className={styles.footer}>
            <p>Copyright @2023 RoboticsNITB | All Rights Reserved</p>
          </footer>
    </div>
  )
}

export default Register