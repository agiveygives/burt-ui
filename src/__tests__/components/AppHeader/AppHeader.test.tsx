import React from 'react';
import { render } from '@testing-library/react';
import AppHeader from '../../../components/AppHeader';

describe('<AppHeader />', () => {
	it('should render without crashing', () => {
		const wrapper = render(<AppHeader
			logoUri='https://cdn.discordapp.com/avatars/313842639084584971/6cd4851ad3f0e86d346ca7132c24a032.webp?size=160'
			navLinks={[
				{ href: '/dashboard', display: 'Dashboard' },
				{ href: '/shop', display: 'Shop' },
				{ href: '/aboutUs', display: 'About Us' },
			]}
		/>);
		expect(wrapper).toMatchSnapshot();
	});
});
