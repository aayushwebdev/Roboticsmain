// import React, {useState} from 'react'
// import styles from './Navbar.module.css';
// import Logo from '../../images/logo.png';
// import {FaBars, FaTimes} from 'react-icons/fa';
// import {Link} from 'react-router-dom';

// const Navbar = () => { 

//     const[click, setClick] = useState(false)
//     const handleClick = () => setClick(!click)


//   return (
//     <div className={styles.header}>
//         <Link to='/home'><img src={Logo} alt='logo' /></Link>
//         <ul className={click ? styles.navMenu : `${styles.navMenu} ${styles.active}`}>
//             <li>
//                 <a href="/home">Home</a>
//             </li>
//             <li>
//                 <a href='#about'>About</a>
//             </li>
//             <li>
//                 <a href='#events'>Events</a>
//             </li>
//             <li>
//                 <a href='#projects'>Projects</a>
//             </li>
//             <li>
//                 <a href='#contact'>Contact</a>
//             </li>
//             <li className={styles.register}>
//                 <Link to='/register'>Register</Link>
//             </li>
//         </ul>
//         <div className={styles.hamburger} onClick={handleClick}>
//         {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />) }
            
//         </div>
//     </div>
//   )
// }

// export default Navbar;

// import React, { useState } from 'react';
// import styles from './Navbar.module.css';
// import Logo from '../../images/logo.png';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);

//   return (
//     <div className={styles.header}>
//       <Link to='/home'>
//         <img src={Logo} alt='logo' />
//       </Link>
//       <ul className={click ? styles.navMenu : `${styles.navMenu} ${styles.active}`}>
//         <li>
//           <Link to='/home'>Home</Link>
//         </li>
//         <li>
//           <Link to='#about'>About</Link>
//         </li>
//         <li>
//           <Link to='#events'>Events</Link>
//         </li>
//         <li>
//           <Link to='#projects'>Projects</Link>
//         </li>
//         <li>
//           <Link to='#contact'>Contact</Link>
//         </li>
//         <li className={styles.register}>
//           <Link to='/register'>Register</Link>
//         </li>
//       </ul>
//       <div className={styles.hamburger} onClick={handleClick}>
//         {click ? (
//           <FaTimes size={20} style={{ color: '#fff' }} />
//         ) : (
//           <FaBars size={20} style={{ color: '#fff' }} />
//         )}
//       </div>
//     </div>
//   );
// };


// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import styles from './Navbar.module.css';
import Logo from '../../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt='' />
        </Link>
        <button className={styles.toggleButton} onClick={toggleNavbar}>
          ☰
        </button>
        <div className={`${styles.navbarLinks} ${isOpen ? styles.active : ''}`}>

          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#events'>Events</a>
          <a href='#project'>Projects</a>
          <a href='#team'>Team</a>
          <a href='#footer'>Contact</a>
          <a href='/register' className={styles.register}>Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
