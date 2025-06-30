# 🚀 Guía de Despliegue en Vercel

Esta guía te ayudará a desplegar tu portfolio en Vercel de manera rápida y sencilla.

## 📋 Requisitos Previos

- Cuenta en [Vercel](https://vercel.com)
- Cuenta en [GitHub](https://github.com) (recomendado)
- [Git](https://git-scm.com/) instalado localmente
- [Node.js](https://nodejs.org/) (opcional, para desarrollo local)

## 🚀 Métodos de Despliegue

### Método 1: GitHub + Vercel (Recomendado)

Este método permite despliegue automático cada vez que actualices tu código.

#### Paso 1: Subir a GitHub

```bash
# Inicializar repositorio (si no está inicializado)
git init

# Agregar archivos
git add .

# Hacer commit
git commit -m "Initial commit - Portfolio ready for Vercel"

# Conectar con tu repositorio de GitHub
git remote add origin https://github.com/tu-usuario/tu-repositorio.git

# Subir a GitHub
git push -u origin main
```

#### Paso 2: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en "New Project"
3. Selecciona "Import Git Repository"
4. Elige tu repositorio de GitHub
5. Vercel detectará automáticamente que es un sitio estático
6. Haz clic en "Deploy"

¡Listo! Tu sitio estará disponible en una URL como: `https://tu-proyecto.vercel.app`

### Método 2: Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Iniciar sesión
vercel login

# En la carpeta de tu proyecto, ejecutar:
vercel

# Seguir las instrucciones:
# - Set up and deploy? [Y/n] Y
# - Which scope? Selecciona tu cuenta
# - Link to existing project? [y/N] N
# - What's your project's name? pedro-nuno-portfolio
# - In which directory is your code located? ./
```

### Método 3: Drag & Drop

1. Ve a [vercel.com](https://vercel.com)
2. Arrastra y suelta la carpeta completa del proyecto
3. Vercel automáticamente lo desplegará

## ⚙️ Configuración Personalizada

### Variables de Entorno (si las necesitas)

Si necesitas variables de entorno:

1. En tu dashboard de Vercel, ve a tu proyecto
2. Settings → Environment Variables
3. Agrega las variables necesarias

### Dominio Personalizado

1. En tu proyecto de Vercel, ve a Settings → Domains
2. Agrega tu dominio personalizado
3. Configura los registros DNS según las instrucciones

## 🔧 Configuración del Proyecto

El archivo `vercel.json` ya está configurado con:

- **Headers de Seguridad**: X-Content-Type-Options, X-Frame-Options, etc.
- **Cache Optimizado**: Para mejor rendimiento
- **Rutas Estáticas**: Configuración para sitio estático

### Estructura Optimizada

```
portfolio/
├── index.html          # Página principal
├── styles.css          # Estilos separados
├── script.js          # JavaScript separado
├── vercel.json        # Configuración de Vercel
├── package.json       # Metadatos del proyecto
├── README.md          # Documentación
├── DEPLOYMENT.md      # Esta guía
├── .gitignore        # Archivos excluidos de Git
└── img/              # Recursos estáticos
```

## 🔄 Despliegue Automático

Con GitHub conectado:

1. Cada `git push` desplegará automáticamente
2. Vercel creará una preview URL para cada pull request
3. La rama `main` se desplegará a producción

## 📊 Monitoreo y Analytics

Vercel incluye analytics gratuitos:

1. Ve a tu proyecto en Vercel
2. Pestaña "Analytics" para ver estadísticas
3. "Functions" para logs (si usas funciones)

## 🔍 Solución de Problemas

### Error: "Build failed"
- Verifica que todos los archivos existan
- Revisa la consola de build en Vercel

### Error: "404 Not Found"
- Asegúrate de que `index.html` esté en la raíz
- Verifica las rutas de archivos CSS/JS/imágenes

### Error: "Images not loading"
- Verifica que las rutas de imágenes sean relativas
- Asegúrate de que las imágenes estén en Git

## 🚀 Próximos Pasos

1. **Dominio personalizado**: Agrega tu propio dominio
2. **Analytics**: Configura Google Analytics si lo deseas
3. **SEO**: Optimiza meta tags para mejor posicionamiento
4. **Performance**: Usa Vercel Analytics para monitorear rendimiento

## 📞 Soporte

- [Documentación de Vercel](https://vercel.com/docs)
- [GitHub Issues](https://github.com/vercel/vercel/issues)
- [Discord de Vercel](https://vercel.com/discord)

---

**¡Tu portfolio está listo para brillar en la web!** 🌟 