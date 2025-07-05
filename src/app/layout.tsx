import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		default:
			'Trato - Secure Freelance Payroll Platform with Escrow & Dispute Resolution',
		template: '%s | Trato',
	},
	description:
		'Trato is the smart payroll platform for freelancers with built-in escrow system, AI-powered contracts, dispute resolution, and mutual reviews. Secure payments made simple.',
	keywords: [
		'freelance',
		'payroll',
		'escrow',
		'dispute resolution',
		'AI contracts',
		'secure payments',
		'freelancer platform',
		'contractor management',
		'payment protection',
		'freelance reviews',
	],
	authors: [{ name: 'Trato Team' }],
	creator: 'Trato',
	publisher: 'Trato',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://trato.com',
		title:
			'Trato - Secure Freelance Payroll Platform with Escrow & Dispute Resolution',
		description:
			'The smart payroll platform for freelancers with built-in escrow system, AI-powered contracts, dispute resolution, and mutual reviews. Secure payments made simple.',
		siteName: 'Trato',
		images: [
			{
				url: '/trato..svg',
				width: 1200,
				height: 630,
				alt: 'Trato - Secure Freelance Payroll Platform',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'Trato - Secure Freelance Payroll Platform with Escrow & Dispute Resolution',
		description:
			'The smart payroll platform for freelancers with built-in escrow system, AI-powered contracts, dispute resolution, and mutual reviews.',
		images: ['/trato..svg'],
		creator: '@trato',
	},
	icons: {
		icon: '/favicon-32x32.png',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
	manifest: '/site.webmanifest',
	category: 'Business',
	classification: 'Business',
	referrer: 'origin-when-cross-origin',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://trato.com'),
	alternates: {
		canonical: '/',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<TooltipProvider>
					{children}
					<Toaster />
				</TooltipProvider>
			</body>
		</html>
	);
}
