import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ FileInput, cards, onAdd, onUpdate, onDelete }) => (
	<section className={styles.editor}>
		<h1 className={styles.title}>Card Editor</h1>
		<div className={styles.container}>
			{Object.keys(cards).map((key) => (
				<CardEditForm
					key={key}
					FileInput={FileInput}
					card={cards[key]}
					onUpdate={onUpdate}
					onDelete={onDelete}
				/>
			))}
			<CardAddForm FileInput={FileInput} onAdd={onAdd} />
		</div>
	</section>
);

export default Editor;
