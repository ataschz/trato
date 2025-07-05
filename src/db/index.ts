import { loadEnvConfig } from '@next/env';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schemas';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
	throw new Error('DATABASE_URL must defined');
}

export const client = postgres(connectionString, {
	prepare: false,
	types: {
		timestamp: {
			to: 1114,
			from: [1114, 1184],
			serialize: (value: string) => value,
			parse: (value: string) => value,
		},
	},
});
export const db = drizzle(client, { schema });
