/* Aprende HTML — Unidad 1: Elementos y estructura (Spanish layer over html/u1.js).
   Only words a learner reads live here; files, tests and solutions come from
   the English unit untouched. See i18n.js for the fields and
   tools/validate-i18n.js for what is checked.

   Conventions for this course:
   - Tags, attributes and code stay in English, in `code` font.
   - Page text the checker looks for stays in English too (Hello, world!,
     two divs, navigation, My Skeleton Page), and the lesson says so, so a
     learner never fails a checkpoint for writing it in Spanish.
   - `more` adds the background a learner reading in a second language
     benefits from; it never adds a requirement. */
window.CODELAB.i18n.addUnit("es", "html-u1", {
  src: "417daa143ad7",
  title: "Elementos y estructura",
  blurb: "Etiquetas, atributos, anidación y el esqueleto sobre el que se construye toda página.",
  cheat: [
    { h: "Anatomía de un elemento", note: "Etiqueta de apertura → contenido → etiqueta de cierre. Las tres juntas forman un **elemento**." },
    { h: "Atributos", note: "Pares `name=\"value\"` dentro de la etiqueta de apertura. `id` es único; `class` se puede reutilizar." },
    { h: "El esqueleto de la página" },
    { h: "Encabezados", note: "De h1 a h6. Por convención, un solo `<h1>` por página." },
    { h: "Divs y spans", note: "Úsalos para agrupar o dar estilo cuando ninguna otra etiqueta encaja mejor." },
    { h: "Comentarios" }
  ],
  glossary: [
    { en: "tag", term: "etiqueta", note: "La marca entre `<` y `>`, como `<p>`. Casi siempre va en pares: una abre y otra cierra." },
    { en: "element", term: "elemento", note: "El paquete completo: etiqueta de apertura + contenido + etiqueta de cierre." },
    { en: "attribute", term: "atributo", note: "Información extra dentro de la etiqueta de apertura: `id=\"main-title\"`." },
    { en: "nesting", term: "anidación / anidar", note: "Poner un elemento dentro de otro. El de adentro se cierra primero." },
    { en: "heading", term: "encabezado", note: "Un título de sección: `<h1>` a `<h6>`." },
    { en: "paragraph", term: "párrafo", note: "Un bloque de texto: `<p>`." },
    { en: "comment", term: "comentario", note: "Una nota para personas que el navegador ignora: `<!-- … -->`." },
    { en: "head / body", term: "cabecera / cuerpo", note: "`<head>` guarda la configuración invisible; `<body>`, todo lo que se ve." },
    { en: "block / inline", term: "bloque / en línea", note: "Un bloque ocupa su propia línea (`<div>`, `<p>`); un elemento en línea fluye dentro del texto (`<span>`, `<em>`)." },
    { en: "indentation", term: "sangría", note: "Los espacios al inicio de una línea que muestran qué está dentro de qué." }
  ],
  lessons: {

    "html-1": {
      src: "4eeb71a18d63",
      title: "Tus primeras etiquetas HTML",
      brief: "¡Bienvenido a **Aprende HTML**! 👋 Todas las páginas de la web se construyen con **HTML**, siglas en inglés de *HyperText Markup Language* (lenguaje de marcado de hipertexto). HTML envuelve el contenido en **etiquetas** que le dicen al navegador qué es cada parte.\n\nUna etiqueta se ve así: `<h1>Hello</h1>`. Tiene una etiqueta de apertura, un contenido y una etiqueta de cierre con una `/`. `<h1>` es el encabezado principal de la página; `<p>` es un párrafo.\n\nEscribe tu código en la pestaña **Código** y luego presiona **Ejecutar** para ver tu página y revisar tu trabajo.",
      more: "**¿Por qué las etiquetas están en inglés?** HTML es un lenguaje con palabras fijas: el navegador solo entiende `<h1>`, `<p>`, `<body>`… exactamente así. No se traducen, igual que no se traduce una fórmula matemática. Muchas vienen de palabras en inglés, y conocerlas ayuda a recordarlas:\n\n- `h1` → *heading 1*, encabezado de nivel 1\n- `p` → *paragraph*, párrafo\n- `body` → cuerpo, la parte visible de la página\n\n**El texto entre las etiquetas sí es tuyo.** Puedes escribirlo en español. En esta lección el verificador busca la palabra *hello* dentro del `<h1>`, así que escribe ese encabezado en inglés: **Hello, world!** Es el saludo tradicional del primer programa de cualquier lenguaje. El párrafo puede ir en español.\n\n**Cómo se lee una etiqueta:** el navegador ve `<h1>`, entiende \"aquí empieza un encabezado\", muestra el texto en grande y, al llegar a `</h1>`, entiende \"aquí termina\". Si olvidas la etiqueta de cierre, el navegador no sabe dónde acaba el encabezado.",
      hints: [
        "Las etiquetas van en pares: `<h1>` abre y `</h1>` cierra. Tu texto va entre las dos.",
        "Escribe la línea del encabezado dentro de `<body>`, debajo del comentario que dice *Write your code below this line* (\"escribe tu código debajo de esta línea\").",
        "Prueba: `<h1>Hello, world!</h1>` y luego `<p>¡Estoy aprendiendo a programar!</p>`"
      ],
      steps: [
        { text: "Dentro de `<body>`, agrega un encabezado `<h1>` que diga **Hello, world!**",
          detail: "Escríbelo en inglés: el verificador busca la palabra *hello*." },
        { text: "Debajo, agrega un párrafo `<p>` en el que te presentes, con el texto que quieras.",
          detail: "Aquí sí puedes escribir en español. Basta con unas pocas palabras." }
      ],
      messages: {
        "No <h1> element found yet — add one inside <body>.": "Todavía no hay ningún elemento <h1>: agrega uno dentro de <body>.",
        "Your <h1> should say \"Hello, world!\" (it just needs the word hello).": "Tu <h1> debe decir \"Hello, world!\" (basta con que tenga la palabra hello, en inglés).",
        "No <p> element found yet.": "Todavía no hay ningún elemento <p>.",
        "Write a little more text inside your <p>.": "Escribe un poco más de texto dentro de tu <p>."
      }
    },

    "html-u1-2": {
      src: "7098ff29442b",
      title: "La anatomía de un elemento",
      brief: "Pongámosles nombre exacto a las partes, porque vas a usar estas palabras siempre:\n\n- **Etiqueta** (*tag*): la marca entre los signos `<` y `>`: `<p>`\n- **Elemento** (*element*): el paquete completo: etiqueta de apertura + contenido + etiqueta de cierre\n- **Anidación** (*nesting*): elementos que viven dentro de otros elementos. El elemento de adentro tiene que cerrarse **antes** que el de afuera.\n\nLa anidación es lo que les da estructura a las páginas: un `<p>` puede contener un `<em>` (énfasis, normalmente en cursiva), que a su vez contiene texto.",
      more: "**Piensa en cajas dentro de cajas.** Si metes una caja pequeña dentro de una grande, primero cierras la pequeña y después la grande. Con HTML es igual:\n\n- Bien: `<p>Me gusta <em>mucho</em> esto.</p>`. Se abre `p`, se abre `em`, se cierra `em`, se cierra `p`.\n- Mal: `<p>Me gusta <em>mucho</p></em>`. La caja grande se cierra con la pequeña todavía abierta.\n\nUna regla fácil de recordar: **lo último que abres es lo primero que cierras.**\n\n**¿Para qué sirve `<em>`?** Marca una palabra que pronunciarías con más fuerza al leer en voz alta. El navegador suele mostrarla en cursiva, pero lo importante es el significado: los lectores de pantalla para personas ciegas también le dan énfasis.",
      hints: [
        "Cierra primero el elemento de adentro: `<p>afuera <em>adentro</em> afuera</p>`. Nunca `<p><em></p></em>`.",
        "Ejemplo: `<p>Estoy disfrutando <em>muchísimo</em> esto.</p>`"
      ],
      steps: [
        { text: "Agrega un `<p>` que tenga un elemento `<em>` anidado dentro.",
          detail: "El `<em>` va entre `<p>` y `</p>`, no antes ni después." },
        { text: "El párrafo también debe tener texto **fuera** del `<em>` (solo una parte va con énfasis).",
          detail: "Por ejemplo, una oración completa con una sola palabra dentro de `<em>`." }
      ],
      messages: {
        "Add a <p> first.": "Primero agrega un <p>.",
        "Nest an <em> INSIDE the <p>: <p>… <em>word</em> …</p>": "Anida un <em> DENTRO del <p>: <p>… <em>palabra</em> …</p>",
        "Put a word or two inside the <em>.": "Pon una o dos palabras dentro del <em>.",
        "Only PART of the sentence should be inside <em> — keep normal text around it.": "Solo una PARTE de la oración debe ir dentro de <em>: deja texto normal alrededor."
      }
    },

    "html-2": {
      src: "6449ce3ac221",
      title: "Los encabezados organizan la página",
      brief: "Los encabezados van de `<h1>` (el más importante) a `<h6>` (el menos importante). Le dan a tu página un **esqueleto** que los lectores y los buscadores pueden recorrer rápido.\n\nUsa **un solo** `<h1>` por página y luego un `<h2>` para cada sección. Vamos a armar una pequeña página sobre tus pasatiempos.",
      more: "**Los encabezados funcionan como el índice de un libro.** El `<h1>` es el título del libro; cada `<h2>` es un capítulo; un `<h3>` sería una sección dentro de un capítulo. Por eso hay un solo `<h1>`: una página habla de un tema principal.\n\n**No elijas un encabezado por su tamaño.** Elige el nivel según la importancia. Más adelante, con CSS, podrás cambiar el tamaño de cualquier encabezado sin cambiar su significado.\n\n**Por qué importa:** las personas que usan lectores de pantalla saltan de encabezado en encabezado para encontrar lo que buscan, y Google usa los encabezados para entender de qué trata tu página.\n\nPuedes escribir todo el texto de esta lección en español, por ejemplo `<h1>Mis pasatiempos</h1>`.",
      hints: [
        "Organízalo como un esquema: un título `<h1>` arriba y luego pares de `<h2>` + `<p>`.",
        "Ejemplo de sección: `<h2>Videojuegos</h2>` seguido de `<p>Me encantan los juegos de estrategia.</p>`"
      ],
      steps: [
        { text: "Dale a la página exactamente **un** `<h1>` (por ejemplo, *Mis pasatiempos*).",
          detail: "Si agregas un segundo `<h1>`, este punto de control falla." },
        { text: "Agrega al menos **dos** encabezados de sección `<h2>` (dos pasatiempos)." },
        { text: "Debajo de cada `<h2>`, agrega un `<p>` que describa ese pasatiempo (al menos dos `<p>` en total)." }
      ],
      messages: {
        "The page should have exactly one <h1> — found {*}.": "La página debe tener exactamente un <h1>; se encontraron {*}.",
        "Add at least two <h2> headings — found {*}.": "Agrega al menos dos encabezados <h2>; se encontraron {*}.",
        "Add at least two <p> paragraphs — found {*}.": "Agrega al menos dos párrafos <p>; se encontraron {*}."
      }
    },

    "html-u1-4": {
      src: "770a362689d1",
      title: "Divs y spans: contenedores genéricos",
      brief: "Hay dos etiquetas muy usadas que **no tienen significado propio**: existen para agrupar cosas.\n\n- `<div>`: un contenedor genérico de **bloque** (empieza en su propia línea). Sirve para agrupar secciones completas y darles diseño y estilo.\n- `<span>`: un contenedor genérico **en línea** (fluye dentro del texto). Sirve para marcar unas pocas palabras dentro de una oración.\n\nCuando llegue CSS vas a envolver cosas en divs todo el tiempo: es la forma de agrupar que hay detrás de cada tarjeta, banner y barra lateral.",
      more: "**Bloque contra en línea, con un ejemplo:** un `<div>` es como un párrafo nuevo: siempre empieza abajo de lo anterior y ocupa todo el ancho. Un `<span>` es como subrayar unas palabras con un marcador: no cambia de línea, solo marca un pedazo del texto.\n\n**Envolver** significa poner la etiqueta de apertura antes de algo y la de cierre después, sin borrar nada:\n\n```html\n<div>\n  <h2>Card one</h2>\n  <p>I belong with the heading above me.</p>\n</div>\n```\n\nEl texto del archivo inicial está en inglés y puedes dejarlo así. En el segundo punto de control, el `<span>` tiene que envolver exactamente las palabras **two divs** (\"dos divs\"), porque eso es lo que busca el verificador.\n\n**¿Por qué no se ve ningún cambio?** Los divs y spans son invisibles por sí solos. Su efecto aparece cuando CSS les da colores, bordes o posición. Ahora estás preparando la estructura.",
      hints: [
        "Un div va ALREDEDOR de elementos que ya existen: `<div> <h2>…</h2> <p>…</p> </div>`.",
        "El span va dentro de la oración: `This page has <span>two divs</span> below…`"
      ],
      steps: [
        { text: "Envuelve cada uno de los dos bloques de \"tarjeta\" (encabezado + párrafo) en su propio `<div>`.",
          detail: "Busca los comentarios *card 1* y *card 2* en el archivo: cada uno marca un par `<h2>` + `<p>`." },
        { text: "En el párrafo de introducción, envuelve las palabras **two divs** en un `<span>`.",
          detail: "No las traduzcas: el verificador busca *two divs* en inglés." }
      ],
      messages: {
        "Create two <div> containers — found {*}.": "Crea dos contenedores <div>; se encontraron {*}.",
        "Each <div> should contain an <h2> AND its <p>.": "Cada <div> debe contener un <h2> Y su <p>.",
        "Add a <span> inside the intro <p>.": "Agrega un <span> dentro del <p> de introducción.",
        "The span should wrap the words \"two divs\".": "El span debe envolver las palabras \"two divs\"."
      }
    },

    "html-u1-5": {
      src: "24333d5b2b96",
      title: "Atributos, ids y clases",
      brief: "Los **atributos** agregan información a un elemento y siempre van en la etiqueta de apertura: `name=\"value\"` (nombre=\"valor\").\n\nLos dos que más vas a usar:\n\n- `id`: un nombre **único** para un solo elemento. Dos elementos nunca pueden compartir el mismo id.\n- `class`: una etiqueta reutilizable. Muchos elementos pueden compartir una clase, y un elemento puede tener varias clases separadas por espacios.\n\nTanto CSS como JavaScript encuentran elementos por su id y sus clases. Si los defines bien, todo lo que viene después se vuelve más fácil.",
      more: "**Una comparación:** el `id` es como tu número de documento de identidad: solo tú lo tienes. La `class` es como decir \"estudiante\" o \"deportista\": mucha gente comparte esa categoría, y tú puedes ser las dos cosas a la vez.\n\n**Cómo se escriben varias clases:** todas van dentro de un solo atributo `class`, separadas por un espacio:\n\n- Bien: `class=\"ingredient featured\"`\n- Mal: `class=\"ingredient, featured\"` (con coma)\n- Mal: `class=\"ingredient\" class=\"featured\"` (dos atributos: el navegador ignora el segundo)\n\n**Los valores también van en inglés aquí** (`main-title`, `ingredient`, `featured`) porque el verificador los busca así. En tus propios proyectos puedes elegir cualquier nombre, pero es común usar inglés y minúsculas separadas con guiones, sin espacios ni acentos.",
      hints: [
        "Los atributos van en la etiqueta de apertura: `<h1 id=\"main-title\">`.",
        "Varias clases comparten un solo atributo: `class=\"ingredient featured\"`, separadas por espacios, sin comas."
      ],
      steps: [
        { text: "Dale al `<h1>` un `id` con el valor `main-title`." },
        { text: "Dales a **los dos** párrafos de ingredientes la clase `ingredient`." },
        { text: "Dale al primer ingrediente una **segunda** clase, `featured` (dos clases, un solo atributo).",
          detail: "Resultado esperado: `<p class=\"ingredient featured\">Frozen mango</p>`." }
      ],
      messages: {
        "Add id=\"main-title\" inside the <h1> opening tag.": "Agrega id=\"main-title\" dentro de la etiqueta de apertura del <h1>.",
        "Both <p> elements need class=\"ingredient\" — found {*}.": "Los dos elementos <p> necesitan class=\"ingredient\"; se encontraron {*}.",
        "One paragraph should have class=\"ingredient featured\" — two class names separated by a space.": "Un párrafo debe tener class=\"ingredient featured\": dos nombres de clase separados por un espacio."
      }
    },

    "html-u1-6": {
      src: "440eb0db4eff",
      title: "Comentarios y código legible",
      brief: "Dos hábitos separan una página legible de un enredo:\n\n- **Comentarios**: `<!-- así -->`. Son notas para personas que el navegador ignora. Úsalos para nombrar secciones y dejar pendientes.\n- **Sangría**: los elementos anidados se escriben más a la derecha (aquí, con 2 espacios), para que la estructura se vea de un vistazo.\n\nLos comentarios también sirven para **desactivar** código por un rato sin borrarlo, un truco clásico para encontrar errores.",
      more: "**Cómo se escribe un comentario:** empieza con `<!--` (signo menor, signo de exclamación y dos guiones) y termina con `-->` (dos guiones y signo mayor). Todo lo que quede en medio desaparece de la página, aunque siga en el archivo.\n\n**\"Comentar\" una línea** quiere decir envolverla en un comentario:\n\n```html\n<!-- <p>Under construction — do not look at this part.</p> -->\n```\n\nEl párrafo sigue en el archivo, así que puedes recuperarlo quitando `<!--` y `-->`, pero el navegador ya no lo muestra.\n\nEn el primer punto de control escribe el comentario en inglés, `<!-- navigation -->` (\"navegación\"), porque el verificador busca esa palabra. El div de navegación es el que tiene los enlaces *Home* y *About*.",
      hints: [
        "Un comentario: `<!-- navigation -->`. Fíjate en el signo de exclamación y los dos guiones.",
        "Para comentar un elemento hay que envolverlo COMPLETO: `<!-- <p>Under construction…</p> -->`"
      ],
      steps: [
        { text: "Agrega un comentario encima del div de navegación que diga **navigation** (en mayúsculas o minúsculas, da igual).",
          detail: "El div de navegación es el primero del archivo, el que tiene los enlaces." },
        { text: "Comenta el párrafo \"Under construction\" para que ya no se muestre en la página.",
          detail: "No lo borres: el verificador comprueba que siga en el archivo, dentro de un comentario." }
      ],
      messages: {
        "Add <!-- navigation --> above the nav div.": "Agrega <!-- navigation --> encima del div de navegación.",
        "Wrap that whole <p> in <!-- … --> so the browser skips it.": "Envuelve ese <p> completo en <!-- … --> para que el navegador lo ignore.",
        "Don't DELETE the line — comment it out so it stays in the file.": "No BORRES la línea: coméntala para que siga en el archivo."
      }
    },

    "html-u1-7": {
      src: "699d231081f2",
      title: "El esqueleto del documento",
      brief: "Todo documento HTML real tiene el mismo esqueleto:\n\n- `<!DOCTYPE html>`: \"esto es HTML moderno\". Siempre va en la línea 1.\n- `<html>`: envuelve todo.\n- `<head>`: la configuración invisible: el **título** de la página (el texto de la pestaña del navegador), los enlaces a CSS y los metadatos.\n- `<body>`: todo lo que se ve.\n\nHasta ahora te dimos el esqueleto armado. Esta vez el archivo está desordenado: arréglalo.",
      more: "**`<head>` y `<body>` son como la etiqueta y el contenido de un frasco.** La etiqueta (`<head>`) dice qué hay adentro, pero no es lo que comes. El contenido (`<body>`) es lo que de verdad ves en la página.\n\n**¿Dónde aparece el `<title>`?** No en la página, sino en la **pestaña** del navegador, en los marcadores y en los resultados de Google. Por eso va en `<head>`.\n\n**Qué tienes que arreglar en este archivo:**\n\n1. Agrega `<title>My Skeleton Page</title>` dentro de `<head>`. Escríbelo en inglés: el verificador busca la palabra *skeleton* (\"esqueleto\") en el título de la pestaña.\n2. El `<h1>` está mal ubicado dentro de `<head>`. Córtalo y pégalo dentro de `<body>`.\n3. Agrega un párrafo `<p>` dentro de `<body>`. Ese texto puede ir en español.",
      hints: [
        "El elemento de título: `<title>My Skeleton Page</title>`. Se muestra en la PESTAÑA, no en la página.",
        "Corta la línea del `<h1>` de `<head>` y pégala entre `<body>` y `</body>`."
      ],
      steps: [
        { text: "Dale a la página un `<title>` dentro de `<head>`: **My Skeleton Page**.",
          detail: "En inglés, tal cual: el verificador lee el título de la pestaña." },
        { text: "El `<h1>` tiene que estar dentro de `<body>`, no de `<head>` (¡el contenido visible va solo en el body!)." },
        { text: "Agrega también un `<p>` en el body, para que la página tenga algo de contenido." }
      ],
      messages: {
        "Add <title>My Skeleton Page</title> inside <head> — the checker reads the browser tab title.": "Agrega <title>My Skeleton Page</title> dentro de <head>: el verificador lee el título de la pestaña del navegador.",
        "Move the <h1> into <body>.": "Mueve el <h1> dentro de <body>.",
        "Remove the <h1> from <head> — heads hold setup, not content.": "Quita el <h1> de <head>: la cabecera guarda configuración, no contenido.",
        "Add a <p> inside <body>.": "Agrega un <p> dentro de <body>."
      }
    },

    "html-quiz": {
      src: "e1f75c1a730b",
      title: "Cuestionario de la Unidad 1: Elementos y estructura",
      brief: "Un repaso rápido de etiquetas, atributos, anidación y el esqueleto del documento. Necesitas **80%** para aprobar, y puedes repetirlo cuando quieras.",
      questions: [
        { q: "¿Qué significan las siglas HTML?",
          choices: ["HyperText Markup Language (lenguaje de marcado de hipertexto)", "High-Tech Modern Language (lenguaje moderno de alta tecnología)", "Home Tool Markup Language (lenguaje de marcado de herramientas caseras)", "Hyperlink Text Management Language (lenguaje de gestión de texto con enlaces)"],
          explain: "HyperText (documentos con enlaces) + Markup (etiquetas que marcan el contenido) + Language (lenguaje)." },
        { q: "¿Cuál es un **elemento** completo?",
          explain: "Elemento = etiqueta de apertura + contenido + etiqueta de cierre. <p> solo es apenas una etiqueta." },
        { q: "¿Qué está mal en esta anidación?",
          choices: ["La etiqueta interna se cierra después de la externa", "Los elementos en línea no se pueden anidar dentro de un <p>", "Al <em> le falta una clase obligatoria", "Nada: las etiquetas superpuestas están permitidas"],
          explain: "Lo último que se abre es lo primero que se cierra: <p>Some <em>emphasized</em></p>. Aquí </p> llega mientras <em> sigue abierto, así que las etiquetas se superponen. El navegador lo repara sin avisar, pero la estructura que obtienes no es la que escribiste. Y los elementos en línea como <em> son justamente lo que un <p> debe contener." },
        { q: "¿Qué etiqueta crea el encabezado **más grande e importante**?",
          explain: "Los encabezados van de h1 (el más grande) a h6. ¡<head> es para metadatos, no es un encabezado!" },
        { q: "¿Cuál es la diferencia entre `id` y `class`?",
          choices: ["id es único en la página; class se puede reutilizar", "class es único en la página; id se puede reutilizar", "Los dos tienen que ser únicos en la página", "id es solo para CSS; class es para JavaScript"],
          explain: "Un id por elemento en cada página; las clases son etiquetas reutilizables, y un elemento puede tener varias. Las dos sirven para CSS **y** para JavaScript. La diferencia que decide cuál usar es que el id es único, y eso es lo que permite usarlo como destino de un enlace interno, como #contact." },
        { q: "¿Dónde va el contenido visible de la página?",
          choices: ["Dentro de `<body>`", "Dentro de `<head>`", "Antes de `<!DOCTYPE html>`", "Dentro de `<title>`"],
          explain: "<head> es la configuración invisible (título, metadatos, enlaces a CSS); todo lo que VES vive en <body>." },
        { q: "¿Cuál es la sintaxis correcta de un comentario en HTML?",
          explain: "Un comentario HTML se abre con <!-- y se cierra con -->; el navegador ignora todo lo que quede en medio. // pertenece a JavaScript, # a Python y /* */ a CSS." },
        { q: "`<div>` contra `<span>`: ¿cuál es la diferencia real?",
          choices: ["div es de bloque; span es en línea", "span es el reemplazo moderno de div", "div es para texto; span es para imágenes", "div puede anidar elementos; span no"],
          explain: "div se apila como un párrafo y ocupa toda la línea; span envuelve unas pocas palabras **dentro** de una línea. Ninguno de los dos significa nada por sí solo (son herramientas para agrupar) y los dos pueden contener otros elementos sin problema." }
      ]
    }
  }
});
