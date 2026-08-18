// Base de datos local de publicaciones académicas para TechNexus
const PUBLICACIONES_DATA = [
    {
        id: 1,
        slug: "tarea-1-requerimientos-bocetos",
        unit_tag: "UNIDAD 01 • TAREA 1",
        category: "UNIDAD 1",
        title: "Planteamiento de Requerimientos, Planificación y Bocetos",
        summary: "Levantamiento de requisitos del sistema, asignación de responsabilidades del equipo y diseño de bocetos a mano y digitalizados para la plataforma Tiendita de Barrio.",
        duration: "Tarea Formativa",
        author_name: "Equipo de Desarrollo TechNexus",
        created_at: "Agosto 2026",
        image_url: "img/tienda.png",

        // Introducción del artículo
        introduccion: "El presente proyecto surge ante la necesidad de modernizar y digitalizar los procesos comerciales de los microcomercios locales ('Tiendas de Barrio'). A través de esta primera fase formativa, el equipo de desarrollo de TechNexus abordó el levantamiento exhaustivo de requerimientos, la definición de la arquitectura funcional, la asignación de roles y la materialización de interfaces iniciales mediante bocetos y prototipos de alta fidelidad, asegurando una experiencia óptima tanto para el administrador del negocio como para el cliente final.",

        // Secciones de contenido estructurado
        sections: {
            requerimientos_intro: "Especificación de las capacidades operativas y atributos de calidad esenciales para el correcto funcionamiento de la plataforma.",
            requerimientos_funcionales: [
                "CRUD de productos (Crear, leer, actualizar y eliminar)",
                "CRUD de promociones (Ofertas por porcentaje, 2x1 y combos)",
                "Mostrar catálogo de productos disponibles al cliente",
                "Mostrar promociones vigentes con fechas de validez",
                "Mostrar detalle e información ampliada del producto"
            ],
            requerimientos_no_funcionales: [
                "Alta disponibilidad del sistema",
                "Seguridad y consistencia en los datos del catálogo",
                "Facilidad de uso e interfaz intuitiva (Responsive Design)"
            ],
            planificacion: [
                {
                    nombre: "Eduardo Punina",
                    rol: "Diseño de Base de Datos (BD)",
                    foto: "img/eduardo.png"
                },
                {
                    nombre: "Viviana Sarco",
                    rol: "Backend (Lógica de productos y promociones)",
                    foto: "img/viviana.png"
                },
                {
                    nombre: "Carlos Ramos",
                    rol: "Frontend (UI de productos y detalle)",
                    foto: "img/carlos.png"
                },
                {
                    nombre: "Evelyn Cárdenas",
                    rol: "Frontend (UI de promociones y detalle)",
                    foto: "img/evelyn.png"
                }
            ],
            bocetos_mano_intro: "Primeras iteraciones visuales y de distribución espacial elaboradas en papel para validar la arquitectura de información inicial.",
            bocetos_mano: [
                {
                    titulo: "Boceto 1: Estructura y Navegación",
                    imagen: "img/productos.png"
                },
                {
                    titulo: "Boceto 2: Distribución de Módulos",
                    imagen: "img/agregarProductos.png"
                },
                {
                    titulo: "Boceto 3: Distribución de Módulos",
                    imagen: "img/promociones.png"
                },
                {
                    titulo: "Boceto 4: Distribución de Módulos",
                    imagen: "img/agregarPromociones.png"
                },
                {
                    titulo: "Boceto 5: Distribución de Módulos",
                    imagen: "img/lista.png"
                },
                {
                    titulo: "Boceto 6: Distribución de Módulos",
                    imagen: "img/detalleProductos.png"
                }
            ],
            prototipo_interactivo: "prototipo-tienda.html",
            bocetos_digitales_intro: "Prototipo interactivo navegable de alta fidelidad que valida la experiencia de usuario y los flujos operativos en tiempo real para Administrador y Cliente.",
            bocetos_digitales_admin: [
                {
                    titulo: "Wireframe 1: Panel de Productos (Admin)",
                    descripcion: "Vista principal de gestión con listado de catálogo, indicadores de stock, precios y accesos rápidos de edición y eliminación.",
                    screen_id: "screen-productos"
                },
                {
                    titulo: "Wireframe 2: Formulario Añadir Producto",
                    descripcion: "Módulo transaccional para alta de nuevos artículos con carga de fotografía, precios, unidades de inventario y descripción.",
                    screen_id: "screen-agregar-producto"
                },
                {
                    titulo: "Wireframe 3: Gestión de Promociones",
                    descripcion: "Diseño estilo Bento Grid para control de ofertas activas y programadas con etiquetas de estado y vigencia temporal.",
                    screen_id: "screen-promociones"
                },
                {
                    titulo: "Wireframe 4: Formulario Nueva Promoción",
                    descripcion: "Configurador avanzado de campañas con selección de tipo (Descuento %, 2x1 / Pack, Combo) y rangos de fechas.",
                    screen_id: "screen-agregar-promocion"
                }
            ],
            bocetos_digitales_cliente: [
                {
                    titulo: "Wireframe 5: Catálogo & Tienda (Cliente)",
                    descripcion: "Experiencia de compra con buscador, carrusel de promociones destacadas, categorías y selector rápido de productos.",
                    screen_id: "screen-cliente-catalogo"
                },
                {
                    titulo: "Wireframe 6: Detalle del Producto (Cliente)",
                    descripcion: "Ficha del producto con galería, precio, selector de unidades interactivo, descripción y sugerencias relacionadas.",
                    screen_id: "screen-cliente-producto-detalle"
                },
                {
                    titulo: "Wireframe 7: Promociones Vigentes (Cliente)",
                    descripcion: "Listado de ofertas comerciales vigentes (2x1, -15% y envíos gratis) con términos y fechas de expiración.",
                    screen_id: "screen-cliente-promociones"
                },
                {
                    titulo: "Wireframe 8: Detalle de Oferta y Beneficio (Cliente)",
                    descripcion: "Pantalla de promoción con badge de beneficio, fechas límite, productos incluidos y botón para aplicar directamente al pedido.",
                    screen_id: "screen-cliente-promo-detalle"
                }
            ],
            conclusiones: [
                "El levantamiento estructurado de requerimientos funcionales y no funcionales, complementado con una clara división de roles técnicos dentro del equipo, permitió establecer una hoja de ruta sólida para el desarrollo integral del sistema.",
                "La transición progresiva desde bocetos a mano alzada hasta un prototipo digitalizado e interactivo facilitó la validación temprana de la usabilidad y navegación de los módulos de Productos y Promociones, reduciendo riesgos de diseño y garantizando una base robusta para las siguientes etapas de implementación de Base de Datos y Backend."
            ]
        }
    }
];
