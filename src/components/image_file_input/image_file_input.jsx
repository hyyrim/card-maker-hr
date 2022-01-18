import React from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = (props) => {
	return (
		<div>
			<input type="file" />
			<button>Image</button>
		</div>
	);
};

export default ImageFileInput;
