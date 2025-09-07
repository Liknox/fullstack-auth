import { Body, Heading, Tailwind, Text } from '@react-email/components';
import { Html } from '@react-email/html';
import * as React from 'react';

interface TwoFactorAuthTemplateProps {
	token: string;
}

export function TwoFactorAuthTemplate({ token }: TwoFactorAuthTemplateProps) {
	return (
		<Tailwind>
			<Html>
				<Body className='text-black'>
					<Heading>Two-factor Authentication</Heading>
					<Text>Your 2FA code<strong>{token}</strong></Text>
					<Text>
						Please, type this code in app to finish authentication process.
					</Text>
					<Text>
						If you haven't asked for 2FA, you can ignore this letter.
					</Text>
				</Body>
			</Html>
		</Tailwind>
	)
}
