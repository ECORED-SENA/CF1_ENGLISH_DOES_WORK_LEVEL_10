export default {
  global: {
    componenteFormativo:
      '<span1><em>How is everything going to be like?</em></span1><br><span>¿Cómo va a ser todo?</span>',
    descripcionCurso:
      'Este componente será la introducción a los condicionales y el uso de verbos modales para hablar sobre arrepentimientos y situaciones que la gente desearía que no hubieran sucedido. El tipo de vocabulario estudiado estará relacionado con los planes sociales y laborales. También se trabajará la revisión de las formas de expresar opinión y los enlazadores para unir oraciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
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
        titulo: '<em>Regrets</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Third conditional</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              '<em>Modal verbs in the past (should have, could have, might have, must have, have to)</em>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              '<em>Expressions to indicate the future in the past tense (was / were supposed to / was / were going to)</em>',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Personal and work plans</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<em>Sequence linkers</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<em>Expressing opinion</em>',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
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
  complementario: [
    {
      tema: '<em>Regrets</em>',
      referencia:
        'Kempson, R. (1988). Grammar and conversational principles. <em>Linguistics: the Cambridge survey, 2, p.139-163</em>.',
      tipo: 'Artículo',
      link: 'https://eric.ed.gov/?id=EJ1287782',
    },
    {
      tema: '<em>Third conditional</em>',
      referencia:
        'Kusumawardani, S. y Mardiyani, E. (2018). The correlation between English grammar competence and speaking fluency. <em>PROJECT (Professional Journal of English Education), 1(6), p.724-733</em>.',
      tipo: 'Artículo',
      link:
        'https://pdfs.semanticscholar.org/acc1/6c52ae72a642de3f0b2c2e232d5fe7ec6f7c.pdf',
    },
    {
      tema:
        '<em>Modal verbs in the past (should have, could have, might have, must have, have to)</em>',
      referencia:
        'Mindt, D. (1995). <em>An empirical grammar of the English verb: Modal verbs. Cornelsen</em>.',
      tipo: 'Artículo',
      link: 'https://tesl-ej.org/wordpress/issues/volume3/ej09/ej09r11/',
    },
    {
      tema:
        '<em>Expressions to indicate the future in the past tense (was / were supposed to / was / were going to)</em>',
      referencia:
        'Carter, R. y McCarthy, M. (2017). Spoken grammar: Where are we and where are we going? <em>Applied linguistics, 38(1), p. 1-20</em>.',
      tipo: 'Artículo',
      link: 'https://academic.oup.com/applij/article/38/1/1/2951515?login=true',
    },
    {
      tema: '<em>Personal and work plans</em>',
      referencia:
        'Harrison, J. (2015). The English grammar profile. <em>English Profile in Practice, English Profile Studies, 5, p. 28-48</em>.',
      tipo: 'Libro',
      link:
        'https://books.google.com.co/books?id=Uh1EBgAAQBAJ&pg=PA28&hl=es&source=gbs_toc_r&cad=4#v=onepage&q&f=false',
    },
    {
      tema: '<em>Sequence linkers</em>',
      referencia:
        'Yaccob, N. y Yunus, M. (2019). Language Games in Teaching and Learning English Grammar: A Literature Review. <em>Arab World English Journal, 10(1), p. 209-217</em>.',
      tipo: 'Artículo',
      link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3367576',
    },
    {
      tema: '<em>Expressing opinion</em>',
      referencia:
        'English, L. (2019). <em>How to Express Your Opinion in English</em>. VOA.',
      tipo: 'Web',
      link:
        'https://learningenglish.voanews.com/a/how-to-express-your-opinions-in-english/4755937.html',
    },
  ],
  glosario: [
    {
      termino: '<em>Conditionals</em> / Condicionales',
      significado:
        'oraciones que demuestran una condición, casi siempre contienen la palabra <em>if</em>.',
    },
    {
      termino: '<em>Linkers</em> / Conectores',
      significado:
        'palabras que conectan dos o más oraciones para tener sentido.',
    },
    {
      termino: '<em>Modal verbs</em> / Verbos modales',
      significado:
        'modo gramatical usado para enfatizar el carácter de una oración, la función de la misma. Usualmente, se escribe antes del verbo, por esto se le llama verbo auxiliar.',
    },
    {
      termino:
        '<em>Real situations vs. unreal situations</em> / Situaciones reales vs. situaciones irreales',
      significado:
        'situaciones que se relacionan en la gramática inglesa con los condicionales cero, uno y dos o, en algunos casos, uno, dos y tres.',
    },
    {
      termino: '<em>Time expressions</em> / Expresiones de tiempo',
      significado:
        'son expresiones que nos dan información sobre el tiempo en que sucede algo y se emplean para hablar del momento en que se realiza una acción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Hashemi, L. y Murphy, R. (2004). <em>English Grammar in Use. Supplementary exercises</em>. Cambridge. ',
      link:
        'https://www.bostonschool.it/pdf/4_English_Grammar_in_Use_-_Supplementary_Exerc.pdf',
    },
    {
      referencia:
        'Hewings, M. (2013). <em>Advanced grammar in use with answers: A self-study reference and practice book for advanced learners of English</em>. Cambridge University Press. ',
      link: 'https://catalogosiidca.csuca.org/Record/CR.UNA01000304684',
    },
    {
      referencia:
        'Murphy, R., Viney, B. y Craven, M. (2004). <em>English Grammar In Use with Answers and CD ROM: A Self-study Reference and Practice Book for Intermediate Students of English (Vol. 1)</em>. Cambridge University Press. ',
      link:
        'https://fama.us.es/permalink/34CBUA_US/18mroog/alma991008549369704987',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edith Grande',
        cargo: 'Experta temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES - Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
