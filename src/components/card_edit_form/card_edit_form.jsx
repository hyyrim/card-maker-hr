import React from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';

const CardEditForm = ({ FileInput, card, onUpdate, onDelete }) => {
	const { name, company, title, email, message, theme, fileURL, fileName } =
		card;

	const onSubmit = (e) => {
		e.preventDefault();
		onDelete(card);
	};

	const onFileChange = (file) => {
		onUpdate({
			...card,
			fileName: file.name,
			fileURL: file.url,
		});
	};

	const onChange = (e) => {
		if (e.currentTarget == null) {
			return;
		}
		e.preventDefault();
		onUpdate({
			...card,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	return (
		<form className={styles.form}>
			<input
				className={styles.input}
				type="text"
				name="name"
				value={name}
				onChange={onChange}
			/>
			<input
				className={styles.input}
				type="text"
				name="company"
				value={company}
				onChange={onChange}
			/>
			<select
				className={styles.select}
				name="theme"
				value={theme}
				onChange={onChange}
			>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
				<option value="colorful">Colorful</option>
			</select>
			<input
				className={styles.input}
				type="text"
				name="title"
				value={title}
				onChange={onChange}
			/>
			<input
				className={styles.input}
				type="text"
				name="email"
				value={email}
				onChange={onChange}
			/>
			<textarea
				className={styles.textarea}
				name="message"
				value={message}
				onChange={onChange}
			></textarea>
			<div className={styles.fileInput}>
				<FileInput fileName={fileName} onFileChange={onFileChange} />
			</div>
			<Button name="Delete" onClick={onSubmit} />
		</form>
	);
};

export default CardEditForm;
