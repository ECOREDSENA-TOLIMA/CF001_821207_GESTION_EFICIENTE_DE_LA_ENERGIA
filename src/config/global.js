export default {
  global: {
    componenteFormativo: 'Conceptos básicos de electricidad',
    descripcionCurso:
      'En este componente se estudiará el origen de la corriente eléctrica. El aprendiz llegará a la comprensión de este importante fenómeno a través del conocimiento de la diferencia de potencial y de la corriente eléctrica. Estos conceptos son necesarios para abordar con éxito cualquier proyecto de infraestructura eléctrica y para pensar acerca de la importancia de gestionar eficientemente la electricidad.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-principal-bg.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistema de unidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Prefijos del sistema internacional',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Notación científica',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Simbología eléctrica',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Naturaleza eléctrica de la materia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Teoría atómica',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de enlace molecular',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Materiales conductores, aislantes y semiconductores',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Conductividad y resistividad',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Definición de magnitudes eléctricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Diferencia de potencial',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Corriente eléctrica',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Resistencia eléctrica',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Efecto Joule',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Formas de onda de energía eléctrica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Corriente continua',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Corriente alterna',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Valores medio (A<span class="text-small">med</span>) y eficaz (A) o RMS',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Elementos de circuito',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Resistencia',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Inductancia',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Capacitancia',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Fuentes independientes',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Fuentes dependientes',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_001.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'AREATECNOLOGIA (s.f.). Condensador Eléctrico.',
      link: 'https://www.areatecnologia.com/electricidad/condensador.html',
    },
    {
      referencia:
        'BIPM. (s.f). <em>The International System of Units</em> (SI): Base units.',
      link: 'https://www.bipm.org/en/measurement-units/si-base-units',
    },
    {
      referencia:
        'Çengel, Y. A., y Boles, M. A. (2012). Termodinámica (Octava ed.). Mc Graw Hill.',
    },
    {
      referencia:
        'Centro Español de Metrología. (2013). El Sistema Internacional de Unidades. Centro Español de Metrología (CEM).',
      link:
        'https://www.cem.es/sites/default/files/2021-01/SistemaInternacionalUnidades.pdf',
    },

    {
      referencia:
        'CIENCIA FÁCIL (s.f). Generador electrostático y botella de Leyden de frasco de película.',
      link: 'https://www.cienciafacil.com/BotellaDeLeyden.html',
    },
    {
      referencia:
        'Circuitos Listos (2002, agosto de 22). [Foto de biografía]. Facebook.',
      link:
        'https://mobile.facebook.com/CircuitosListos/photos/a.1595094837455375/2661939650770883/?type=3&source=48&_rdc=1&_rdr',
    },

    {
      referencia:
        'Ciudad Universitaria Virtual de San Isidoro (2014). Estudio de los factores que afectan a la resistencia de un conductor. Práctica virtual.   ',
      link:
        'https://www.cuvsi.com/2014/12/estudio-de-los-factores-que-afectan-la.html',
    },

    {
      referencia:
        'Freepng.es.  (2020). Inductancia de la bobina Electromagnética Choke Inductor Uh - otros Imágen de Png.',
      link: 'https://www.freepng.es/png-9g7ec0/    ',
    },
    {
      referencia:
        'Generatuluz. (2021) Corriente alterna y la corriente continua, ¿cuál es la diferencia?, generatuluz.',
      link:
        'https://www.generatuluz.com/tu-propia-instalacion-aislada/la-corriente-alterna-y-la-corriente-continua/',
    },
    {
      referencia:
        'Gómez, A. (2020). Notación Científica Introducción. Matemáticas profe Alex.  [video]. Youtube.',
      link: 'https://www.youtube.com/watch?v=qjX4wKUoK7E',
    },
    {
      referencia:
        'Hayt, W. y Kemmerly, J. (1989). Análisis de Circuitos en Ingeniería. Edit.McGraw Hill.',
    },
    {
      referencia:
        'Herasme Medina, E., Gómez Reynoso, C., y González Ramírez, C. (2012). Física básica: para instituciones de educación superior (Primera ed.). Impresos Juniors.',
      link: 'https://biblioteca.itsc.edu.do/bib/2393',
    },
    {
      referencia:
        'Huelsman, L. (1988). Teoría de Circuitos. Edit. Prentice Hall.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación - ICONTEC. (1998). Norma Técnica Colombiana NTC 2050 Código Eléctrico Colombiano. Recuperado el 6 de julio del 2021 de la base de datos biblioteca SENA.',
    },
    {
      referencia:
        'Johnson, D., Hilburn, J. y Johnson, J. (1991). Análisis Básico de Circuitos Eléctricos. Prentice Hall.',
    },
    {
      referencia: 'Magallanes Sandoval, J. (2010). Capítulo 13: Capacitancia.',
      link:
        'http://www.mailxmail.com/curso-electricidad-fundamentos/capacitancia',
    },

    {
      referencia:
        'Mantilla, G. (1980). Unidades de medida para electricidad. SENA.',
      link: 'https://hdl.handle.net/11404/1847',
    },

    {
      referencia: 'Mantilla, G. (1985). La ley de Joule. SENA.',
      link: 'https://hdl.handle.net/11404/1852',
    },

    {
      referencia: 'Mantilla, G. (1985). Fuerza, trabajo y potencia. SENA.',
      link: 'https://hdl.handle.net/11404/1851',
    },

    {
      referencia:
        'Matemóvil. (2020). Conversiones con Prefijos del Sistema Internacional de Unidades. [video]. Youtube.',
      link: 'https://www.youtube.com/watch?v=fYbo4-g7-IY',
    },

    {
      referencia:
        'Mora, R. (2018, noviembre 4).  Resistencias SMD (smt): cómo interpretar los valores. [Web log post]. Neclo- Ciencia y cultura al máximo.',
      link:
        'https://www.negocioscontralaobsolescencia.com/taller/resistencias-smd-smt-como-interpretar-los-valores',
    },

    {
      referencia:
        'Orjuela Gutierez, C.  (2009, febrero 22)    Tablas de valores [Web log post]. Fundamentos de electrotécnica.',
      link:
        'http://materialesresistivos.blogspot.com/2009/02/tablas-de-valores.html',
    },

    {
      referencia:
        'Resolución Número 90708 de 2013 y anexos. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento Técnico de Instalaciones Eléctricas - RETIE, que fija las condiciones técnicas que garanticen la seguridad en los procesos de Generación, Transmisión, Transformación, Distribución y Utilización de la energía eléctrica en la República de Colombia y se dictan otras disposiciones. Agosto 30 de 2013.',
    },

    {
      referencia:
        'SENA. (1995). Electricidad aplicada: guía de estudio. SENA, TEL-A-TRAIN.',
      link: 'https://hdl.handle.net/11404/756',
    },

    {
      referencia:
        'Todo sobre circuitos. (2021). Circuitos Eléctricos: Qué son, Cómo Funcionan, Tipos y Características. Todo sobre circuitos.',
      link: 'https://www.circuitos-electricos.com/.',
    },

    {
      referencia: 'Torres, J. (2021). Inductancia. Lifeder.',
      link: 'https://www.lifeder.com/inductancia/.',
    },

    {
      referencia:
        'Verificaciones Industriales de Andalucía, S.A. (2021). Unidades derivadas - Electricidad y Magnetismo.',
      link:
        'https://www.veiasa.es/metrologia/utilidades/unidades_derivadas/electricidad_magnetismo',
    },
  ],
  glosario: [
    {
      termino: 'Átomo',
      significado:
        'Es la unidad más pequeña de un elemento químico que mantiene su identidad o sus propiedades.',
    },
    {
      termino: 'Aislante',
      significado:
        'Material o sustancia que presenta una conductividad eléctrica casi nula, debido a que los electrones de sus átomos están fuertemente ligados al núcleo, evitando su movimiento.',
    },
    {
      termino: 'Amperio o ampere',
      significado:
        'Unidad de la intensidad de la corriente eléctrica cuyo símbolo es "A".',
    },
    {
      termino: 'Batería',
      significado:
        'Fuente del voltaje que convierte energía química en energía eléctrica de Corriente Continua (CC).',
    },
    {
      termino: 'Cable',
      significado:
        'En electricidad, alambre con propiedades conductoras de la energía eléctrica. Está formado por uno o varios conductores constituidos a su vez por varios hilos elementales de cobre; también pueden ser de aluminio pero se utilizan raramente. Todo el metal va protegido por una cubierta aislante flexible y normalmente impermeable.',
    },
    {
      termino: 'Capacitancia',
      significado:
        'Reactancia capacitiva en la corriente eléctrica. Capacidad que tiene un componente, cuerpo, circuito, etc., para acumular una carga eléctrica.',
    },
    {
      termino: 'Corriente alterna',
      significado:
        'Es aquella en la que su sentido de movimiento varía con el tiempo y sus valores o magnitudes no permanecen incesantes.',
    },
    {
      termino: 'Corriente continua',
      significado:
        'Es aquella en la que su valor o magnitud se sitúa constante en el tiempo y sin una dirección variante.',
    },
    {
      termino: 'Corriente eléctrica',
      significado:
        'La corriente eléctrica consiste en el movimiento de electrones por unidad de tiempo a través de un conductor eléctrico.',
    },
    {
      termino: 'Energía eléctrica',
      significado:
        'Se define como la potencia consumida por una instalación eléctrica en un determinado tiempo. Se representa con la letra E. (Naturaeduca.com)',
    },
    {
      termino: 'Importancia de la resistividad',
      significado:
        'Permite entender qué materiales nos dan mayor y menor resistencia al fluir la corriente, así también conocer el terreno adecuado de la puesta a tierra.',
    },
    {
      termino: 'Inductancia',
      significado:
        'Reactancia inductiva en la corriente eléctrica. Es una relación entre la cantidad de flujo magnético y la corriente que circula por un inductor o bobina.',
    },
    {
      termino: 'Potencia eléctrica',
      significado:
        'Volumen de energía que gasta una instalación eléctrica en la unidad de tiempo. Se representa con la letra P.',
    },
    {
      termino: 'Resistividad',
      significado:
        'Producto que da la multiplicación de la resistencia de un conductor eléctrico por el cociente que resulta de dividir la sección del cable por su longitud.',
    },
    {
      termino: 'Resistencia eléctrica',
      significado:
        'Es la oposición que ejercen los materiales al movimiento de la corriente eléctrica.',
    },
    {
      termino: 'Semiconductor',
      significado:
        'Cuerpo no metálico que conduce imperfectamente la electricidad y cuya resistividad disminuye al aumentar la temperatura.',
    },

    {
      termino: 'Tensión alterna',
      significado:
        'Es aquella en la que su polaridad se modifica con el tiempo y cuya magnitud es cambiante.',
    },
    {
      termino: 'Tensión continua',
      significado: 'Su polaridad no se modifica en el tiempo.',
    },
    {
      termino: 'Tensión o voltaje',
      significado: 'Es una fuerza capaz de generar un flujo de electrones.',
    },
  ],
  complementario: [
    /*{
      texto: 'Instituto Colombiano de Normas Técnicas y Certificación - ICONTEC. (1998). Norma Técnica Colombiana NTC 2050 Código Eléctrico Colombiano. Recuperado el 6 de julio del 2021 de la base de datos biblioteca SENA.',
      tipo: 'Video',
      link: '',
    },*/
    {
      tema: 'Sistema de unidades',
      referencia:
        'Ministerio de Minas y Energía. ANEXO GENERAL DEL RETIE RESOLUCIÓN 90708 DE AGOSTO 30 DE 2013',
      tipo: 'PDF',
      link:
        'https://sic.gov.co/sites/default/files/files/reglamentos%20tecnicos/ANEXO%20GENERAL%20RETIE%20Res%2090708%20de%202013%20actualizado%20a%20Res%202017-03-29.pdf',
    },
    {
      tema: 'Sistema de unidades',
      referencia:
        'CÓDIGO ELÉCTRICO COLOMBIANO. NORMA TECNICA COLOMBIANA 2050 NTC 2050',
      tipo: 'PDF',
      link: 'https://medicert.com.co/docs/NTC-2050.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Linda Patricia Díaz Rivera',
          cargo: 'Consultora',
          centro: 'Global Green Growth Institute (GGGI)',
        },
        {
          nombre: 'Jaime Peñaloza Trespalacios',
          cargo: 'Experto Técnico',
          centro: 'Servicio Nacional de Aprendizaje - SENA',
        },
        {
          nombre: 'Leidy Carolina Arias Aguirre',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y Evaluador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
