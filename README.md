# Club Deportivo Mallorca - Landing Page

Landing page moderna para un club social y deportivo en Mallorca, desarrollada con Next.js, TypeScript, Tailwind CSS y Shadcn UI.

## Características

- ✨ Diseño moderno y responsive
- 🔒 Sistema de protección por contraseña para área de inversores
- 📱 Completamente responsive (mobile-first)
- 🎨 Componentes reutilizables con Shadcn UI
- ⚡ Optimizado con Next.js 14+ (App Router)

## Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── layout/             # Componentes de layout (Header, Footer)
│   ├── sections/           # Secciones de la landing
│   ├── protected/          # Componentes protegidos (sistema de contraseña)
│   └── ui/                 # Componentes Shadcn UI
└── lib/
    └── utils.ts            # Utilidades (cn function)
```

## Secciones

1. **Hero** - Presentación general con CTAs
2. **Equipo** - Información sobre el equipo fundador
3. **Concepto** - Descripción del concepto de club social deportivo
4. **Proyectos** - Santa Ponça y Palmanova con modales de detalles
5. **Inversión** - Oportunidad de inversión y valor diferencial
6. **Inversores** - Área privada protegida por contraseña

## Configuración

### Instalación

```bash
npm install
```

### Variables de Entorno

Crea un archivo `.env.local`:

```env
NEXT_PUBLIC_INVESTOR_PASSWORD=12345
```

La contraseña por defecto es `12345` si no se especifica la variable de entorno.

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
npm run build
npm start
```

## Sistema de Protección

El área de inversores está protegida con un sistema de contraseña:

- Contraseña por defecto: `12345`
- El estado de autenticación se guarda en `localStorage`
- El contenido se muestra con blur hasta ingresar la contraseña correcta
- Se puede cambiar la contraseña mediante la variable de entorno `NEXT_PUBLIC_INVESTOR_PASSWORD`

## Tecnologías

- **Next.js 14+** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Shadcn UI** - Componentes UI
- **Framer Motion** - Animaciones (opcional)
- **Lucide React** - Iconos

## Contacto

- Email: cordonnier.gregorio@gmail.com

## Licencia

Todos los derechos reservados © 2025 Club Deportivo Mallorca
