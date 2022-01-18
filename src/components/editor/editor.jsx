import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => (
	<section className={styles.editor}>
		<h1 className={styles.title}>Card Editor</h1>
		<div className={styles.container}>
			{cards.map((card) => (
				<CardEditForm key={card.id} card={card} />
			))}
		</div>
	</section>
);

export default Editor;
