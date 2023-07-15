import React, { FC } from 'react';
import classnames from 'classnames';
import { NavigationType } from './Navigation.types';
import styles from './styles.module.css';

const Navigation: FC<NavigationType> = ({ navLinks, scrolled }) => {
	return (
		<ul className={classnames({ [styles.scroll]: scrolled }, styles.container)}>
			{
				navLinks.map(({ href, display }) => (
					<li key={href}>
						<a href={href} className={styles.link}>{display}</a>
					</li>
				))
			}
		</ul>
	);
};

export default Navigation;
