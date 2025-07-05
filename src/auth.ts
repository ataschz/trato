import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { admin, organization } from 'better-auth/plugins';
import { v4 as uuidv4 } from 'uuid';
import { db } from './db';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg',
	}),
	advanced: {
		database: {
			generateId: () => uuidv4(),
		},
	},
	emailAndPassword: {
		enabled: true,
	},
	plugins: [admin(), organization()],
	trustedOrigins: [
		'http://localhost:3000',
		'http://localhost:3001',
		'http://192.168.100.168:3001',
		'https://trusted-shrew-globally.ngrok-free.app',
	],
});
