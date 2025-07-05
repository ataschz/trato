<div align="center">
  <img src="public/trato..svg" alt="Trato Logo" width="200" />
</div>

# Trato - Plataforma de Payroll con Escrow

**Trato** es una plataforma moderna de payroll que integra servicios de escrow y resolución de disputas, construida con [Next.js](https://nextjs.org) y un stack tecnológico moderno.

## Características Principales

- **Gestión de Payroll**: Procesamiento seguro de pagos y nóminas
- **Escrow**: Protección de fondos hasta la finalización de trabajos
- **Resolución de Disputas**: Sistema integrado para mediar conflictos
- **Dashboard Intuitivo**: Interfaz moderna y fácil de usar
- **Seguridad**: Transacciones protegidas y datos encriptados

## Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS V4
- **Componentes**: Shadcn UI
- **Formularios**: react-hook-form
- **Estado de URL**: nuqs
- **Manejo de Fechas**: date-fns
- **Validación**: zod
- **Gestor de Paquetes**: pnpm

## Comenzando

Primero, instala las dependencias:

```bash
pnpm install
```

Luego, ejecuta el servidor de desarrollo:

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes comenzar editando la página modificando `src/app/page.tsx`. La página se actualiza automáticamente mientras editas el archivo.

## Estructura del Proyecto

```
src/
├── app/           # Next.js App Router
├── components/    # Componentes reutilizables
├── lib/          # Utilidades y configuración
└── styles/       # Estilos globales
```

## Desarrollo

### Comandos Disponibles

```bash
# Servidor de desarrollo con Turbopack (puerto 3000)
pnpm dev

# Construir para producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Ejecutar ESLint
pnpm lint

# Ejecutar ESLint con auto-corrección
pnpm lint:fix

# Formatear código con Prettier
pnpm format

# Hook pre-commit (lint + format + archivos staged)
pnpm pre-commit

# Configurar hooks de Husky
pnpm prepare
```

### Convenciones de Código

- **Lenguaje**: Todo el código debe estar en inglés (nombres de funciones, variables, comentarios)
- **UI**: Todo el texto visible al usuario debe estar en español
- **Componentes**: Usar `function` en lugar de `const` cuando sea posible
- **Tipos**: Preferir `interface` sobre `type`
- **Estilos**: Usar clases de utilidad de Tailwind CSS

## Recursos Útiles

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características y API de Next.js
- [Documentación de TailwindCSS](https://tailwindcss.com/docs) - guía completa de estilos
- [Shadcn UI](https://ui.shadcn.com/) - biblioteca de componentes
- [React Hook Form](https://react-hook-form.com/) - manejo de formularios
- [Zod](https://zod.dev/) - validación de esquemas
- [date-fns](https://date-fns.org/) - utilidades de fecha

## Despliegue

La forma más fácil de desplegar tu aplicación Next.js es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.
