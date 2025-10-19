
import React from 'react'
import styles from "./Contact.module.css";
export const Contact = () => {
  return (<>
    <footer id="contact" className={styles.container}>
        <div  className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="/assets/contact/emailIcon.png" />
                <a href="mailto:mariem.charef@enicar.ucar.tn">mariem.charef@enicar.ucar.tn</a>
            </li>
            <li className={styles.link}>
                <img src="/assets/contact/githubIcon.png" />
                <a href="https://github.com/mariemcharef">github.com</a>

            </li>
            <li className={styles.link}>
                <img src="/assets/contact/linkedinIcon.png" />
                <a href="https://www.linkedin.com/in/mariem-charef-61360029b/">linkedin.com</a>
                
            </li>
            <li className={styles.link}>
                <img className={styles.code} src="/assets/contact/Codeforces.png" />
                <a href="https://codeforces.com/profile/mariemcharef42">codefoces.com</a>
                
            </li>
        </ul>
        
    </footer>
    <p className={styles.p}>© 2025 Mariem CHAREF — Made with ❤️ using React & Vite.</p>
    </>
  )
}

