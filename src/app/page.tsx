import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
			{/* Header */}
			<header className="container mx-auto px-4 py-6">
				<div className="flex items-center justify-center">
					<Image
						src="/trato..svg"
						alt="Trato logo"
						width={200}
						height={100}
						priority
					/>
				</div>
			</header>

			{/* Hero Section */}
			<section className="container mx-auto px-4 py-16 text-center">
				<h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-6xl">
					Welcome to <span className="text-blue-600">Trato</span>
				</h1>
				<p className="mx-auto mb-8 max-w-3xl text-xl text-slate-600 md:text-2xl">
					The smart payroll platform with built-in escrow and dispute
					resolution. Secure payments, AI-powered contracts, and seamless
					freelance management.
				</p>
				<div className="flex justify-center gap-4">
					<Link href="/dashboard" passHref>
						<Button size="lg" className="px-8 py-6 text-lg">
							Get Started
						</Button>
					</Link>
					<Button variant="outline" size="lg" className="px-8 py-6 text-lg">
						Learn More
					</Button>
				</div>
			</section>

			<Separator className="my-16" />

			{/* Features Section */}
			<section className="container mx-auto px-4 py-16">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
						Everything You Need for Secure Freelancing
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-slate-600">
						From AI-powered contracts to secure payments, Trato handles every
						aspect of freelance work management.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{/* Feature 1: AI Contracts */}
					<Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
						<CardHeader className="text-center">
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
								<svg
									className="h-8 w-8 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
							</div>
							<CardTitle className="text-xl">AI-Powered Contracts</CardTitle>
						</CardHeader>
						<CardContent className="text-center">
							<CardDescription className="text-base">
								Generate smart contracts with AI assistance and automatically
								extract actionable tasks. Streamline project planning and ensure
								clear deliverables.
							</CardDescription>
						</CardContent>
					</Card>

					{/* Feature 2: Profiles */}
					<Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
						<CardHeader className="text-center">
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
								<svg
									className="h-8 w-8 text-green-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<CardTitle className="text-xl">Professional Profiles</CardTitle>
						</CardHeader>
						<CardContent className="text-center">
							<CardDescription className="text-base">
								Comprehensive profiles for contractors and clients. Showcase
								skills, portfolio, and build reputation through verified work
								history.
							</CardDescription>
						</CardContent>
					</Card>

					{/* Feature 3: Escrow System */}
					<Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
						<CardHeader className="text-center">
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
								<svg
									className="h-8 w-8 text-purple-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									/>
								</svg>
							</div>
							<CardTitle className="text-xl">Secure Escrow System</CardTitle>
						</CardHeader>
						<CardContent className="text-center">
							<CardDescription className="text-base">
								Protect payments with our built-in escrow system. Funds are held
								securely until project milestones are completed to everyone's
								satisfaction.
							</CardDescription>
						</CardContent>
					</Card>

					{/* Feature 4: Dispute Resolution */}
					<Card className="border-0 shadow-lg transition-shadow hover:shadow-xl">
						<CardHeader className="text-center">
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
								<svg
									className="h-8 w-8 text-orange-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
									/>
								</svg>
							</div>
							<CardTitle className="text-xl">
								Integrated Dispute Resolution
							</CardTitle>
						</CardHeader>
						<CardContent className="text-center">
							<CardDescription className="text-base">
								Fair and transparent dispute resolution built right into the
								platform. Resolve conflicts quickly with mediation tools and
								clear escalation paths.
							</CardDescription>
						</CardContent>
					</Card>

					{/* Feature 5: Reviews */}
					<Card className="border-0 shadow-lg transition-shadow hover:shadow-xl md:col-span-2 lg:col-span-1">
						<CardHeader className="text-center">
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
								<svg
									className="h-8 w-8 text-yellow-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
									/>
								</svg>
							</div>
							<CardTitle className="text-xl">Mutual Review System</CardTitle>
						</CardHeader>
						<CardContent className="text-center">
							<CardDescription className="text-base">
								Build trust with our two-way review system. Both contractors and
								clients can rate each other, creating a reliable reputation
								network.
							</CardDescription>
						</CardContent>
					</Card>
				</div>
			</section>

			<Separator className="my-16" />

			{/* CTA Section */}
			<section className="container mx-auto px-4 py-16 text-center">
				<h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
					Ready to Transform Your Freelance Business?
				</h2>
				<p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
					Join thousands of contractors and clients who trust Trato for secure,
					efficient project management and payments.
				</p>
				<Button size="lg" className="px-12 py-6 text-lg">
					Start Your Free Trial
				</Button>
			</section>

			{/* Footer */}
			<footer className="bg-slate-900 py-12 text-white">
				<div className="container mx-auto px-4 text-center">
					<p className="text-slate-400">
						© 2024 Trato. Secure freelance payments made simple.
					</p>
				</div>
			</footer>
		</div>
	);
}
