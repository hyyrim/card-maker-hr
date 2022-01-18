import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, onAdd }) => (
	<section className={styles.editor}>
		<h1 className={styles.title}>Card Editor</h1>
		<div className={styles.container}>
			{cards.map((card) => (
				<CardEditForm key={card.id} card={card} />
			))}
			<CardAddForm onAdd={onAdd} />
		</div>
	</section>
);

export default Editor;
