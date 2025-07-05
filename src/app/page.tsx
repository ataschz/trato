import Image from 'next/image';

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<main className="flex flex-col items-center gap-8">
				<Image
					src="/five-below-logo.png"
					alt="Five Below logo"
					width={300}
					height={150}
					priority
				/>
				<button className="rounded-full bg-blue-600 px-8 py-4 text-xl font-bold text-white transition-colors hover:bg-blue-700">
					¡Hola, 5B 🎊
				</button>
			</main>
		</div>
	);
}
