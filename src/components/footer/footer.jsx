import React, { memo } from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = memo((props) => (
	<footer className={styles.footer}>
		<p className={styles.name}>Github</p>
		<a
			className={styles.icon}
			href="https://github.com/hyyrim/card-maker-hr"
			target="_blank"
		>
			<FontAwesomeIcon icon={faGithub} />
			{/* <i class="fab fa-github"></i> */}
		</a>
	</footer>
));

export default Footer;
