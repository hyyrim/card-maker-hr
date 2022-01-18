import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
	const [cards, setCards] = useState({
		1: {
			id: '1',
			name: 'Hyerim',
			company: 'home',
			theme: 'light',
			title: 'Fronted-Developer',
			email: 'hyyrim@gmail.com',
			message: 'go for it',
			fileName: null,
			fileURL: null,
		},
		2: {
			id: '2',
			name: 'Hyerim',
			company: 'home',
			theme: 'dark',
			title: 'Fronted-Developer',
			email: 'hyyrim@gmail.com',
			message: 'go for it',
			fileName: null,
			fileURL: null,
		},
		3: {
			id: '3',
			name: 'Hyerim',
			company: 'home',
			theme: 'colorful',
			title: 'Fronted-Developer',
			email: 'hyyrim@gmail.com',
			message: 'go for it',
			fileName: null,
			fileURL: null,
		},
	});
	const history = useHistory();
	const onLogout = () => {
		authService.logout();
	};

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (!user) {
				history.push('/');
			}
		});
	});

	const createOrUpdate = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card;
			return updated;
		});
	};

	const onDelete = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
	};

	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<Editor
					cards={cards}
					onAdd={createOrUpdate}
					onUpdate={createOrUpdate}
					onDelete={onDelete}
				/>
				<Preview cards={cards} />
			</div>
			<Footer />
		</section>
	);
};

export default Maker;
