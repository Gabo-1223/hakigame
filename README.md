# ⚡ HAKIGAMES — Plataforma de Recargas de Videojuegos

![CI - Verificación de Calidad Web](https://github.com/Gabo-1223/hakigame/actions/workflows/ci.yml/badge.svg)

Plataforma web de recargas oficiales y tarjetas de saldo digitales para videojuegos, inspirada en estándares profesionales de la industria e interfaces modernas como **BONOX**. Proyecto desarrollado con arquitectura web semántica, diseño responsivo, componentes interactivos y flujo automatizado de integración continua (CI) con **GitHub Actions**.

---

## 🎮 Features (Características)

* **Modo Oscuro Gamer Profesional (Dark Theme):** Paleta de colores optimizada para el entorno gamer (azul marino profundo `#090c13`, superficies con *glassmorphism*, bordes con brillo neón violeta `#8b5cf6` y cian `#00f5ff`).
* **Diseño 100% Adaptable y Responsivo:** Maquetación líquida y elástica desarrollada con **CSS Grid** y **CSS Flexbox**, garantizando una visualización impecable en dispositivos móviles, tablets y ordenadores de escritorio.
* **Catálogo de Juegos con Filtros Dinámicos:** Sistema de filtrado interactivo por categorías (*Móviles, PC, Tarjetas de Regalo*) ejecutado en tiempo real en el lado del cliente con JavaScript puro.
* **Modal de Recarga Rápida Interactivo:** Ventana modal flotante donde el usuario puede ingresar su ID de jugador/UID, seleccionar paquetes de monedas (diamantes, VP, Robux) y simular el procesamiento de la orden con cálculo automático de totales.
* **Módulo de Cotizaciones y Precios:** Tabla gamer estilizada que compara paquetes de monedas, precios en USD, disponibilidad de stock y tiempos de acreditación garantizados en menos de 60 segundos.
* **Centro de Soporte & Acordeón FAQ:** Formulario estructurado para tickets de ayuda con campo para ID de pedido y un acordeón interactivo de Preguntas Frecuentes con animaciones suaves de apertura/cierre.
* **Página de Perfil y Equipo Fundador:** Sección institucional que detalla la misión de la plataforma, pilares de confianza y los roles del equipo creador.
* **Navegación y Pie de Página Unificados:** Consistencia de navegación entre todas las vistas (`index.html`, `tienda.html`, `contacto.html` y `nosotros.html`).

---

## 📁 Folder Structure (Estructura de Carpetas)

Organización modular del proyecto en el repositorio:

```text
estructura_pagina_web/
├── .github/
│   └── workflows/
│       └── ci.yml                  # Flujo de trabajo CI para GitHub Actions (Validaciones automáticas)
├── .htmlhintrc                     # Configuración de reglas para el linter de HTML5
├── sitio_web/                      # Directorio principal del sitio web
│   ├── css/
│   │   └── style.css               # Hoja de estilos globales (Variables, Reset, Layout, Componentes)
│   ├── js/
│   │   └── main.js                 # Lógica interactiva (Modal, Filtros, Acordeón FAQ, Lightbox, Menú móvil)
│   ├── images/                     # Recursos gráficos, logotipos y fotos de perfil del equipo
│   │   ├── criswalt_ceo.jpg
│   │   ├── joshua_operaciones.jpg
│   │   ├── luis_soporte.jpg
│   │   ├── faker_team.jpg
│   │   └── ...
│   ├── index.html                  # Página de Inicio (Hero, Insignias, Populares, Pasarelas de Pago)
│   ├── tienda.html                 # Catálogo oficial de recargas y tabla comparativa
│   ├── contacto.html               # Centro de ayuda, canales directos, formulario y FAQ
│   └── nosotros.html               # Historia, pilares de valor y perfiles del equipo fundador
├── ejemplos_clase/                 # Material pedagógico de referencia
├── actividad_clase/                # Actividades prácticas de aula
├── README.md                       # Documentación principal del repositorio
└── inove.jpg                       # Banner institucional
```

---

## 🛠️ Stack Tecnológico

El proyecto está construido utilizando tecnologías web nativas, siguiendo los estándares modernos del W3C:

| Tecnología | Descripción / Uso |
| :--- | :--- |
| **HTML5 Semántico** | Estructura accesible y limpia utilizando etiquetas estándar (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). |
| **CSS3 Avanzado** | Estilos modernos implementando **Variables CSS (Custom Properties)**, diseño responsivo con **Flexbox & Grid**, transiciones y efectos de iluminación neón. |
| **Vanilla JavaScript (ES6+)** | Lógica e interactividad dinámica sin dependencias pesadas: manipulación del DOM, controladores de eventos, filtrado de elementos, modal de recarga y lightbox. |
| **GitHub Actions (CI/CD)** | Integración continua automatizada: valida la sintaxis de JavaScript, audita la calidad de HTML con HTMLHint y comprueba la integridad de estilos y recursos en cada push y PR. |
| **Git & GitHub** | Sistema de control de versiones distribuido, respetando el flujo de ramas protegidas, mensajes de commit semánticos y entrega continua. |

---

## 📸 Screenshots / Demostración

### Vista Previa de las Secciones Principales:

* **Página de Inicio (`index.html`):** Hero banner con ofertas destacadas, estadísticas de confianza en tiempo real y cuadrícula de recargas en tendencia.
* **Tienda y Catálogo (`tienda.html`):** Tarjetas de productos clasificadas por plataforma y tabla de valores de recarga inmediata.
* **Centro de Soporte (`contacto.html`):** Canales de WhatsApp/Discord, formulario para tickets de compra y acordeón interactivo de resolución de dudas.
* **Sobre Nosotros (`nosotros.html`):** Presentación del equipo fundador:
  * **Criswalt:** *Fundador & CEO*
  * **Joshua:** *Director de Operaciones*
  * **Luis:** *Líder de Soporte al Gamer*
  * **Gabo:** *Desarrollador Web*

> 💡 *Para ver una demostración en vivo, clona el repositorio y ejecuta el proyecto localmente siguiendo los pasos a continuación.*

---

## 🚀 How to Start (Guía de Inicio Rápido)

Sigue estos sencillos pasos para obtener una copia local del proyecto y ejecutarlo en tu navegador:

### 1. Prerrequisitos
* Tener instalado [Git](https://git-scm.com/) en tu ordenador.
* Cualquier navegador web moderno (Google Chrome, Firefox, Microsoft Edge, Brave).
* *(Opcional)* [Visual Studio Code](https://code.visualstudio.com/) con la extensión **Live Server**.

### 2. Clonar el repositorio
Abre tu terminal (PowerShell, Bash o CMD) y descarga el proyecto:

```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
```

### 3. Acceder al directorio del proyecto
Navega a la carpeta donde se encuentran los archivos del sitio web:

```bash
cd estructura_pagina_web/sitio_web
```

### 4. Iniciar el sistema

* **Opción A (Directo desde la terminal en Windows):**
  ```powershell
  start index.html
  ```

* **Opción B (Doble clic):**
  Abre la carpeta `sitio_web` en tu explorador de archivos y haz doble clic sobre el archivo `index.html`.

* **Opción C (Con VS Code Live Server - Recomendado para desarrollo):**
  Abre la carpeta en Visual Studio Code, haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

---

## 👥 Equipo de Desarrollo

* **Criswalt** — *Fundador & CEO*
* **Joshua** — *Director de Operaciones*
* **Luis** — *Líder de Soporte al Gamer*
* **Gabo** — *Desarrollador Web*

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y de demostración técnica dentro del programa de desarrollo web. Todos los nombres y marcas registradas de videojuegos pertenecen a sus respectivos propietarios.
