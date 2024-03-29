import React, { FC } from 'react';
import classNames from 'classnames';
import AppHeader from 'components/AppHeader';
import { PropTypes } from './types';
import styles from './styles.module.css';

const AppLayout: FC<PropTypes> = ({ className, children, footer, header, centered }) => {
	return (
		<main className={classNames(styles.appContainer, className)}>
			<AppHeader logoUri={header.logoUri} navLinks={header.navLinks} menu={header.menu} />

			<article className={classNames(styles.contentContainer, {[styles.centered]: centered})}>
				{children}
			</article>

			<footer className={styles.footer}>
				{footer}
			</footer>
		</main>
	);
};

AppLayout.defaultProps = {
	className: '',
	centered: true,
	header: {
		logoUri: '',
		navLinks: [],
	},
};

export default AppLayout;
