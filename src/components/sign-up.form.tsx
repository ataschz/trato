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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const signUpSchema = z
	.object({
		name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
		email: z.string().email('Introduce un email válido'),
		password: z
			.string()
			.min(8, 'La contraseña debe tener al menos 8 caracteres'),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Las contraseñas no coinciden',
		path: ['confirmPassword'],
	});

type SignUpFormData = z.infer<typeof signUpSchema>;

export function SignUpForm({
	className,
	...props
}: React.ComponentProps<'div'>) {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormData>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit = async (data: SignUpFormData) => {
		setIsLoading(true);

		try {
			const { error } = await authClient.signUp.email({
				email: data.email,
				password: data.password,
				name: data.name,
			});

			if (error) {
				if (error.status === 400) {
					toast.error('Este email ya está registrado');
				} else {
					toast.error(error.message || 'Error al crear la cuenta');
				}
			} else {
				toast.success('Cuenta creada exitosamente');
				router.push('/');
			}
		} catch (error) {
			toast.error('Error inesperado al crear la cuenta');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>Crear cuenta</CardTitle>
					<CardDescription>
						Introduce tus datos para crear una nueva cuenta
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
						<div className="flex flex-col gap-6">
							<div className="grid gap-3">
								<Label htmlFor="name">Nombre</Label>
								<Input
									{...register('name')}
									id="name"
									type="text"
									placeholder="Tu nombre completo"
									disabled={isLoading}
								/>
								{errors.name && (
									<p className="text-sm text-red-500">{errors.name.message}</p>
								)}
							</div>
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
								<Label htmlFor="password">Contraseña</Label>
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
							<div className="grid gap-3">
								<Label htmlFor="confirmPassword">Confirmar contraseña</Label>
								<Input
									{...register('confirmPassword')}
									id="confirmPassword"
									type="password"
									disabled={isLoading}
								/>
								{errors.confirmPassword && (
									<p className="text-sm text-red-500">
										{errors.confirmPassword.message}
									</p>
								)}
							</div>
							<div className="flex flex-col gap-3">
								<Button type="submit" className="w-full" disabled={isLoading}>
									{isLoading ? 'Creando cuenta...' : 'Crear cuenta'}
								</Button>
								<Button
									variant="outline"
									className="w-full"
									disabled={isLoading}
								>
									Registrarse con Google
								</Button>
							</div>
						</div>
						<div className="mt-4 text-center text-sm">
							¿Ya tienes una cuenta?{' '}
							<a href="/sign-in" className="underline underline-offset-4">
								Iniciar sesión
							</a>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
