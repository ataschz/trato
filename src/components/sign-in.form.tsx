'use client';

import { authClient } from '@/auth.client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const signInSchema = z.object({
	email: z.string().email('Introduce un email válido'),
	password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
	rememberMe: z.boolean().optional(),
});

type SignInFormData = z.infer<typeof signInSchema>;

export function SignInForm({
	className,
	...props
}: React.ComponentProps<'div'>) {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
	} = useForm<SignInFormData>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: '',
			password: '',
			rememberMe: true,
		},
	});

	const rememberMe = watch('rememberMe');

	const onSubmit = async (data: SignInFormData) => {
		setIsLoading(true);

		try {
			const { error } = await authClient.signIn.email({
				email: data.email,
				password: data.password,
				rememberMe: data.rememberMe,
			});

			if (error) {
				if (error.status === 403) {
					toast.error('Por favor verifica tu dirección de email');
				} else if (error.status === 401) {
					toast.error('Email o contraseña incorrectos');
				} else {
					toast.error(error.message || 'Error al iniciar sesión');
				}
			} else {
				toast.success('Inicio de sesión exitoso');
				router.push('/');
			}
		} catch (error) {
			toast.error('Error inesperado al iniciar sesión');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>Iniciar sesión</CardTitle>
					<CardDescription>
						Introduce tu email y contraseña para acceder a tu cuenta
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
						<div className="flex flex-col gap-6">
							<div className="grid gap-3">
								<Label htmlFor="email">Email</Label>
								<Input
									{...register('email')}
									id="email"
									type="email"
									placeholder="m@ejemplo.com"
									disabled={isLoading}
								/>
								{errors.email && (
									<p className="text-sm text-red-500">{errors.email.message}</p>
								)}
							</div>
							<div className="grid gap-3">
								<div className="flex items-center">
									<Label htmlFor="password">Contraseña</Label>
									<a
										href="/auth/forgot-password"
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
									>
										¿Olvidaste tu contraseña?
									</a>
								</div>
								<Input
									{...register('password')}
									id="password"
									type="password"
									disabled={isLoading}
								/>
								{errors.password && (
									<p className="text-sm text-red-500">
										{errors.password.message}
									</p>
								)}
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox
									id="rememberMe"
									checked={rememberMe}
									onCheckedChange={(checked) =>
										setValue('rememberMe', checked as boolean)
									}
									disabled={isLoading}
								/>
								<Label htmlFor="rememberMe" className="text-sm">
									Recordar sesión
								</Label>
							</div>
							<div className="flex flex-col gap-3">
								<Button type="submit" className="w-full" disabled={isLoading}>
									{isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
								</Button>
								<Button
									variant="outline"
									className="w-full"
									disabled={isLoading}
								>
									Iniciar sesión con Google
								</Button>
							</div>
						</div>
						<div className="mt-4 text-center text-sm">
							¿No tienes una cuenta?{' '}
							<a href="/sign-up" className="underline underline-offset-4">
								Regístrate
							</a>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
