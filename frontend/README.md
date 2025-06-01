# Frontend del Sistema de Gestión Administrativa (SGA)

Este directorio contiene la aplicación frontend del SGA para farmacias comunales, desarrollada con Angular.

## Tecnologías

- **Framework**: Angular 17+
- **UI/UX**: Angular Material
- **Estado**: NgRx para gestión de estado
- **Autenticación**: JWT con interceptores HTTP
- **Testing**: Jest y Cypress
- **Compilación**: Angular CLI

## Características

- Diseño responsive optimizado para escritorio y dispositivos móviles
- Interfaz de usuario moderna y accesible
- Modo oscuro/claro
- Navegación intuitiva con menús adaptables según permisos
- Dashboard personalizable según rol de usuario
- Internacionalización (i18n) para soporte multiidioma

## Estructura del proyecto

```
frontend/
├── src/
│   ├── app/
│   │   ├── core/              # Servicios y modelos core
│   │   │   ├── auth/          # Autenticación y autorización
│   │   │   ├── http/          # Interceptores HTTP
│   │   │   ├── models/        # Modelos de datos compartidos
│   │   │   └── services/      # Servicios core
│   │   │
│   │   ├── views/          # Módulos de características (por dominio)
│   │   │   ├── beneficiarios/ # Gestión de beneficiarios
│   │   │   ├── ventas/        # Gestión de ventas
│   │   │   ├── compras/       # Gestión de compras
│   │   │   ├── inventario/    # Gestión de inventario
│   │   │   ├── usuarios/      # Gestión de usuarios
│   │   │   ├── informes/      # Informes y reportes
│   │   │   ├── caja/          # Operaciones de cajaNo code was selected to improve.
│   │   │   └── dashboard/     # Dashboard principal
│   │   │
│   │   ├── shared/            # Componentes y directivas compartidas
│   │   │   ├── components/    # Componentes reutilizables
│   │   │   ├── directives/    # Directivas personalizadas
│   │   │   └── pipes/         # Pipes de Angular
│   │   │
│   │   └── app.module.ts      # Módulo principal
│   │
│   ├── assets/                # Recursos estáticos
│   │   ├── i18n/              # Archivos de traducción
│   │   ├── images/            # Imágenes
│   │   └── icons/             # Iconos
│   │
│   ├── environments/          # Configuraciones por entorno
│   └── styles/                # Estilos globales
│
├── angular.json               # Configuración de Angular
├── jest.config.js             # Configuración de Jest
├── package.json               # Dependencias
└── tsconfig.json              # Configuración de TypeScript
```

## Módulos de características

Cada módulo de características sigue una estructura similar:

```
feature/
├── components/        # Componentes específicos del módulo
├── models/            # Modelos específicos del módulo
├── services/          # Servicios específicos del módulo
├── store/             # Estado NgRx (actions, reducers, effects)
└── feature.module.ts  # Módulo de característica
```

## Perfiles de usuario

La aplicación admite distintos perfiles de usuario con diferentes niveles de acceso:

- **Administrador**: Acceso completo al sistema
- **Farmacéutico**: Gestión de inventario, ventas y consultas
- **Cajero**: Operaciones de caja y ventas
- **Vendedor**: Atención de beneficiarios y ventas
- **Consultor**: Acceso a informes y consultas

## Implementación y despliegue

1. **Instalación de dependencias**:
   ```bash
   npm install --save-dev @types/node@16
   ```
1.5 . **Configuración de Angular**:

2. **instalacion de boostrap**:
   ```bash
   npm install ngx-bootstrap@8.0.0 bootstrap@5.2.3 --legacy-peer-deps
   ```

3. **Compilación para producción**:
   ```bash
   ng build --prod
   ```

4. **Ejecución de pruebas**:
   ```bash
   npm run test
   npm run e2e
   ```

5. **Despliegue en S3**:
   El despliegue se realiza automáticamente a través de Jenkins al bucket S3 configurado para el frontend.

## Integración continua

El proyecto está configurado con GitHub Actions y Jenkins para CI/CD:

- **Pull Request**: Ejecuta linting, pruebas unitarias y de integración
- **Main Branch**: Construye y despliega a entorno de desarrollo
- **Release Branch**: Construye y despliega a entorno de producción 
