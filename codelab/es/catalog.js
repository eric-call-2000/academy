/* CodeLab catalog — Spanish: course names and blurbs, job positions and
   credit categories. Loaded at boot, so the catalog and the job board read
   in Spanish before any course file is fetched.

   `units` lists this course's lesson layers (es/<course>/uN.js), loaded
   after the English units when the course opens. An empty list means the
   lessons show in English for now; the course card gets an "ES" chip once
   any are listed. tools/validate-i18n.js reports coverage per course. */
(function () {
  var I = window.CODELAB.i18n;
  function course(id, title, blurb, units) {
    I.defineCourse("es", id, { title: title, blurb: blurb, units: units || [] });
  }

  I.defineCategories("es", {
    fnd: "Fundamentos",
    fe: "Frontend",
    be: "Backend",
    data: "Datos",
    qa: "Calidad",
    sec: "Seguridad",
    ops: "Operaciones",
    integ: "Integración"
  });

  course("html", "Aprende HTML",
    "Estructura, texto, tablas, formularios, marcado semántico y accesibilidad: la base completa de todo sitio web.",
    ["html/u1.js"]);
  course("css", "Aprende CSS",
    "Selectores, el modelo de caja, colores, tipografía, efectos, transiciones y animación: diseño listo para publicar.");
  course("resp", "Diseño adaptable y maquetación",
    "Flexbox a fondo, áreas de Grid, galerías con auto-fit, media queries, clamp() y tipografía fluida: una página que se ve bien en cualquier pantalla.");
  course("js", "Aprende JavaScript",
    "El lenguaje de la web: variables, lógica, funciones, closures, ciclos, datos y ocho unidades de programas reales.");
  course("algo", "Cómo escala el código",
    "Por qué el código que va rápido en tu laptop se arrastra con datos reales. Contar pasos en lugar de medir tiempos, la prueba de duplicar, big-O como lenguaje, lo que de verdad cuestan los arreglos y los mapas hash, búsqueda binaria y ordenamiento, recursión y memoización, pilas, colas y búsqueda en grafos, y cómo decidir con restricciones reales. Un curso para razonar sobre el costo, casi todo teoría: predices, sigues el código y explicas antes de escribir. Tómalo después de Aprende JavaScript.");
  course("web", "Cómo funciona la web",
    "Qué pasa realmente cuando escribes una URL y presionas Enter. Las partes de una URL y qué es un origen, cómo DNS convierte un nombre en una dirección, y cómo TCP y TLS abren una conexión privada, contada en viajes de ida y vuelta, que es como se mide de verdad la distancia en la web. Un curso de teoría: predices, sigues el proceso y explicas antes de escribir. Tómalo después de JavaScript asíncrono y APIs.");
  course("dom", "Sitios web interactivos",
    "El DOM, eventos, formularios, componentes hechos a mano, renderizado a partir de datos y temporizadores: ocho unidades de páginas realmente interactivas.");
  course("async", "JavaScript asíncrono y APIs",
    "Promesas, async/await, fetch, manejo de errores, POST/PUT/DELETE, debounce e interfaz optimista: comunícate con servidores como cualquier app web real.");
  course("debug", "Depuración y diagnóstico",
    "Lee el error antes de tocar el código: trazas de pila, reproducir un bug a propósito y aislarlo, depurar con prints bien hechos, puntos de interrupción y el programa en pausa, bugs que ni siquiera están en tu JavaScript, y al final dos apps reales para arreglar. Tómalo después de JavaScript asíncrono y APIs.");
  course("srv", "Fundamentos de backend",
    "Servidores, rutas, REST, consultas, middleware, autenticación, validación y paginación: la otra mitad del full-stack, una función honesta a la vez.");
  course("test", "Fundamentos de pruebas",
    "¿Cómo sabes que funciona? Aserciones, un ejecutor de pruebas que construyes tú, TDD, dobles de prueba, pruebas asíncronas y del DOM, cobertura, y suites que se califican según si atrapan bugs reales.");
  course("cap", "Proyecto final full-stack",
    "Junta todo: cliente y servidor en una página, interfaz optimista, importar/exportar, accesibilidad, y NoteStream: la app de tu portafolio.");
  course("sec", "Fundamentos de seguridad web",
    "Rompe tu propia app y luego defiéndela: XSS que puedes ver dispararse, escapar y sanear, inyección, secretos en el código publicado, autenticación y almacenamiento de contraseñas, y los encabezados de seguridad que blindan lo que publicas.");
  course("ship", "Publica tu app",
    "De localhost a producción: cómo un hosting estático resuelve URLs, variables de entorno y compilaciones, un Cloudflare Worker real con CORS, DNS, y publicar, romper y revertir.");
  course("nodejs", "Node.js a fondo",
    "Event loop, streams, buffers, sistema de archivos, módulos, el ecosistema de npm, manejo de errores, depuración, rendimiento y clustering: patrones de Node.js para producción.");
  course("db", "Dominio de bases de datos",
    "Fundamentos de SQL, diseño de bases de datos, normalización, índices, migraciones, nociones de NoSQL, patrones de ORM, transacciones y ajuste de rendimiento: la capa de datos bajo control.");
  course("api", "Diseño avanzado de APIs",
    "Buenas prácticas de REST, fundamentos de GraphQL, versionado de APIs, límites de uso, estrategias de caché, paginación, filtros y documentación: APIs listas para producción.");
  course("auth", "Autenticación y seguridad",
    "Cómo sabe un servidor que sigues siendo tú: sesiones del lado del servidor y un Set-Cookie escrito a mano, las reglas del almacén de cookies, CSRF, firmas HMAC, JWT, OAuth 2.0 con PKCE y segundos factores, construidos a mano contra un navegador y un proveedor de identidad simulados, y aplicados en dos proyectos finales.");
  course("cli", "La línea de comandos y tu máquina",
    "La máquina que todos los demás cursos dan por hecho que sabes manejar. Rutas y el sistema de archivos, crear y romper archivos, leerlos sin editor, tuberías, redirección y códigos de salida, comodines y las búsquedas que permiten, variables de entorno, PATH y permisos, y al final programas propios: un script con shebang, permiso de ejecución y un lugar en PATH. Escrito en una terminal real y calificado según lo que realmente pasó.");
  course("git", "Git y control de versiones",
    "Deshacer para todo tu proyecto, escrito en una terminal real: instantáneas y el área de preparación, ramas, fusiones y conflictos de verdad, todas las formas de deshacer (restore, reset, revert, stash y el reflog que encuentra commits \"borrados\"), y luego rebase y un remoto que rechaza tu push. Tómalo cuando quieras después de Aprende HTML; GitHub en sí y los pull requests quedan para tu máquina real.");
  course("cicd", "Pipelines de CI/CD",
    "Automatiza la lista de verificación que repasas antes de cada fusión. Escribe un workflow real, haz push y mira cómo el pipeline se pone en verde o en rojo; condiciona las fusiones a lint, pruebas y compilación; ejecuta una matriz y guarda dependencias en caché. Cada punto de control califica lo que el pipeline realmente hizo. Tómalo después de Git, Pruebas y Docker.");
  course("docker", "Docker y contenedores",
    "\"En mi máquina funciona\": entonces envía la máquina. Imágenes y contenedores, un Dockerfile que escribes y compilas, capas y la caché de compilación, imágenes más pequeñas y seguras, puertos y redes, volúmenes que sobreviven, y un stack de Compose que reparas. La orquestación y la CI quedan para cursos posteriores.");
  course("cloud", "Plataformas en la nube y despliegue",
    "Las computadoras de otros, y cómo publicar en ellas con seguridad. Cómo se reparten de verdad IaaS, PaaS y serverless, un mismo artefacto configurado por entorno, dónde serverless deja de ser más barato que un servidor siempre encendido, cómo hacer que un lanzamiento sea reversible (gradual, blue-green y canary), los logs, métricas y trazas que te dicen que funciona, y los presupuestos de error y objetivos de recuperación que deciden cuánta confiabilidad es suficiente. Un curso de teoría: predices, decides y explicas antes de escribir. Tómalo después de Publica tu app.");
  course("etl", "Pipelines de datos y ETL",
    "Cargar datos sin cargarlos mal: CSV interpretado según el RFC, codificaciones y entrada por bloques, JSON Lines, tipos convertidos a propósito, filas malas en cuarentena con sus motivos, cambios de esquema y duplicados detectados antes de cargar, y pipelines que planifican sus tareas, reintentan con seguridad y se ejecutan para su fecha lógica. Luego vienen las cargas idempotentes, las actualizaciones incrementales y el historial.");

  function position(id, title, blurb, screen) {
    I.definePosition("es", id, { title: title, blurb: blurb, screen: screen });
  }
  position("fe", "Desarrollador/a frontend junior",
    "Construye lo que la gente realmente toca: marcado semántico, maquetación adaptable y páginas interactivas que funcionan en cualquier pantalla.",
    "Dominio de HTML/CSS/JS, trabajo con el DOM, maquetación adaptable y una página que puedas mostrar.");
  position("fs", "Desarrollador/a full-stack junior",
    "El puesto de desarrollo más común. Se encarga de una funcionalidad de punta a punta: la interfaz, el endpoint y la conexión entre ambos.",
    "Una app que construiste de los dos lados, más el criterio para saber dónde vive un bug y cuánto cuesta tu código a medida que crecen los datos.");
  position("be", "Desarrollador/a backend junior",
    "Amplía endpoints REST, escribe y optimiza consultas, maneja autenticación y validación, y lo cubre con pruebas.",
    "Diseño REST, SQL escrito por ti, autenticación y validación, pruebas que detectan regresiones, y el costo de tu código a medida que crecen los datos.");
  position("qa", "Ingeniero/a de automatización QA junior",
    "La puerta de entrada más accesible a la ingeniería. Decide si un cambio es lo bastante seguro para publicarse y automatiza esa respuesta.",
    "Diseño de pruebas, código de automatización, verificaciones de APIs y reportes claros de qué se rompió y por qué.");
  position("devops", "Ingeniero/a DevOps junior",
    "Se encarga del camino desde un commit fusionado hasta el software en ejecución: pipelines, contenedores, entornos y la reversión cuando algo sale mal.",
    "Soltura con Git, un pipeline que configuraste, contenedores y un despliegue que hayas revertido.");
  position("sec", "Ingeniero/a de seguridad junior",
    "La categoría de ofertas que más crece. Encuentra el agujero antes que otro y luego lo cierra.",
    "Explotar y corregir XSS e inyección, manejo de secretos, diseño de autenticación y encabezados de seguridad.");
  position("data", "Ingeniero/a de datos junior",
    "Modela los datos, los mueve y mantiene las consultas lo bastante rápidas para que todo lo que se construye encima siga siendo usable.",
    "Dominio de SQL, diseño de esquemas y normalización, índices, y pipelines que resisten datos de mala calidad.");
})();
