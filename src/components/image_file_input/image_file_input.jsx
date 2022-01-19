import React, { memo, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = memo(({ imageUploader, fileName, onFileChange }) => {
	const [loading, setLoading] = useState(false);
	const inputRef = useRef();
	const onButtonClick = (e) => {
		e.preventDefault();
		inputRef.current.click();
	};

	const onChange = async (e) => {
		setLoading(true);
		const uploaded = await imageUploader.upload(e.target.files[0]);
		setLoading(false);
		console.log(uploaded);
		onFileChange({
			name: uploaded.original_filename,
			url: uploaded.url,
		});
	};

	return (
		<div className={styles.container}>
			<input
				ref={inputRef}
				className={styles.input}
				type="file"
				accept="image/*"
				name="file"
				onChange={onChange}
			/>
			{!loading && (
				<button
					className={`${styles.button} ${fileName ? styles.pink : styles.grey}`}
					onClick={onButtonClick}
				>
					{fileName || 'No file'}
				</button>
			)}
			{loading && <div className={styles.loading}></div>}
		</div>
	);
});

export default ImageFileInput;
