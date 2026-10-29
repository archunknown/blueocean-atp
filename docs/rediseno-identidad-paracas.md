# Blue Ocean — Identidad Paracas

Rama: `rediseno/identidad-paracas`.

## Dirección visual

Una identidad editorial de costa y desierto. El logo original de `public/logo.png` conserva su color y proporción. Los títulos usan Georgia, con cursiva para énfasis, y la interfaz usa Geist. Las fotografías proceden de las consultas existentes y de `public/`; no se incorporaron bancos de imágenes ni imágenes generadas.

- Azul océano existente: `#1E3A5F`.
- Azul profundo estructural: `#092F40`.
- Azul petróleo: `#0B5268`.
- Turquesa existente: `#33A8B1`.
- Amarillo de acción existente: `#FFCC00`.
- Blanco y superficies claras; verde y rojo siguen comunicando estados.

La portada usa una composición de texto y fotografía, el catálogo organiza precio y duración sin cintas promocionales, y la galería presenta fotografías con pie y filtro. Administración comparte marca, tipografía y superficies, con una navegación lateral oscura y mayor densidad de información.

## Alcance

- Inicio, catálogo, detalle de experiencia, galería, testimonios y contacto.
- Acceso del equipo y las 14 rutas de administración, incluyendo dashboards por rol, edición y creación de tours, reservas, reserva inmediata, clientes, usuarios, custodia, conversaciones, galería, moderación, ajustes y métricas.
- Checkout, confirmación, verificación, términos y privacidad.
- Mantenimiento y página 404.
- Navegación, pie, enlaces flotantes, estados de formulario y tratamiento responsive compartidos.

Se retiraron de la presentación contadores estáticos de demanda e interacción y etiquetas de verificación sin respaldo. Las opiniones publicadas siguen viniendo de la consulta existente de testimonios aprobados.

## Límites funcionales

No se modificaron las acciones de servidor, las consultas, permisos, cálculo de precios, comisiones, integración de pagos, webhooks, esquemas de validación ni clientes de Supabase. El checkout mantiene su cálculo y redirección original. Las mejoras de etiquetas y navegación son de interfaz.

La pantalla de agradecimiento mantiene su comportamiento original respecto a estados del pago. No se corrigió ese comportamiento porque este trabajo está limitado al diseño. Las discrepancias de datos de contacto y políticas existentes tampoco se alteran en la base de datos.

## Revisión

- TypeScript y compilación de producción.
- Navegación de ficha de Islas Ballestas a checkout, sin crear reserva ni realizar pago.
- Selección de horario y pasajeros; conservación de parámetros y resumen original.
- Galería filtrada por categoría, menú móvil y ancho de página.
- Revisión de las rutas administrativas con sesión válida, sin guardar ni modificar registros.
- Páginas públicas revisadas en escritorio y móvil; casos de confirmación/verificación sin reserva de prueba nueva.

Los estados que requieren un pago real y los permisos de otros roles no se certifican como pruebas completas de negocio.
