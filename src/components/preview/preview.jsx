import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ cards }) => (
	<section className={styles.preview}>
		<h1 className={styles.title}>Card Preview</h1>
		<ul>
			{cards.map((card) => (
				<Card key={card.id} card={card} />
			))}
		</ul>
	</section>
);

export default Preview;