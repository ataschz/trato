import { loadEnvConfig } from '@next/env';
import { defineConfig } from 'drizzle-kit';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
	throw new Error('DATABASE_URL must defined');
}

export default defineConfig({
	schema: './src/db/schemas/index.ts',
	out: './src/db/migrations',
	dialect: 'postgresql',
	casing: 'snake_case',
	dbCredentials: {
		url: connectionString,
	},
});
