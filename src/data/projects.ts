/**
 * Grounding: every field traces to docs/content/post-inventory.md.
 * Client names still pending owner confirmation are excluded from
 * featured cards (see docs/content/project-stories.md).
 */
export interface Project {
  client: string;
  service: string;
  year?: string;
  title: string;
  body: string;
  tag: 'c' | 'm' | 'y' | 'k';
}

export const featured: Project[] = [
  {
    client: 'Grupo Simsa',
    service: 'Rebranding',
    year: '2021',
    title: 'Un rebranding que huele a taller mecánico.',
    body: 'Simsa lleva el servicio industrial de motores en el nombre, y su nueva identidad lo lleva en la forma: un logotipo dorado cuya “M” es un pistón. Diseñamos la marca y la aterrizamos en piezas reales — tarjetas en negro con dorado para Simsa y su línea EASA, y un folder troquelado con fotografía de turbinas.',
    tag: 'c',
  },
  {
    client: 'B Catering',
    service: 'Caja de luz + vinil sobre vidrio',
    title: 'Una fachada que abre el apetito antes de abrir la puerta.',
    body: 'Producimos la fachada completa del local: caja de luz ovalada con su marca, panel impreso con fotografía de su tabla de quesos y vinil blanco de recorte con ilustraciones de cocina sobre el cristal. Tres técnicas, instaladas como una sola pieza.',
    tag: 'k',
  },
  {
    client: 'Cenacolo',
    service: 'Rotulación vehicular',
    title: 'El restaurante que se presenta en cada entrega.',
    body: 'Rotulamos la camioneta de reparto de Cenacolo con vinil de recorte: marca, sitio y redes en una aplicación limpia sobre blanco, legible a la velocidad de la calle. La flotilla es el espectacular que ya pagaste; nosotros lo ponemos a trabajar.',
    tag: 'k',
  },
  {
    client: 'INTERSAC 2023',
    service: 'Lona restirada en estructura',
    year: '2023',
    title: 'Un fondo de escenario a la altura del evento.',
    body: 'Producimos e instalamos el fondo completo del escenario: lona impresa a gran formato, restirada en estructura, con el mensaje “Un solo corazón…” de extremo a extremo. Impreso en nuestro taller, instalado en sitio, listo el día del evento.',
    tag: 'y',
  },
  {
    client: 'Sacred Heart',
    service: 'Cubos de coroplast con vinil',
    title: 'Un mural que no necesita pared.',
    body: 'Cubos de coroplast forrados de vinil impreso que, apilados, forman un mural exterior de gran formato. Una pieza volumétrica que funciona como escenografía y como fotografía — del taller a la explanada.',
    tag: 'm',
  },
  {
    client: 'ModusLink',
    service: 'Señalética en acrílico',
    title: 'Señalética que se siente como se ve la empresa.',
    body: 'Señalética interior en acrílico con separadores metálicos: la sala de conferencias identificada con la tipografía y el color de la marca, en un material que aguanta el uso diario sin perder presencia.',
    tag: 'k',
  },
  {
    client: 'Top Garden',
    service: 'Refresh de logotipo',
    year: '2020',
    title: 'Renovar sin borrar: el mismo logotipo, mejor resuelto.',
    body: 'Top Garden no necesitaba una marca nueva; necesitaba la suya, más clara. Conservamos la escritura y la hoja que sus clientes ya reconocían y las redibujamos con más peso y mejor trazo: cambios que conservan el alma del logotipo.',
    tag: 'c',
  },
];

export const gallery: string[] = [
  'Pepsi · demo stand con vinil',
  'Europiel Láser Center · logotipo en vinil de recorte',
  'Panadería Monterrey · vinil sobre pared',
  'Proydea / Simeidis · personalización de cascos',
  'Avise · rotulación de motocicleta',
  'Everest · vinil de recorte y esmerilado',
  'C3 Design Allsteel · banner tipo araña',
  'Microperforado · instalación en las alturas',
  'Hogar · vinil para simulación de textura',
  'Ring de box · vestido con lona',
  'Serinter / VA Valero · tarjetas de presentación',
  'Latin American School · gráfica en cancha deportiva',
  'FotoMurales Inline · fotomurales a la medida',
];
