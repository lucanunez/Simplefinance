// Base de Datos de Lecciones, Preguntas e Inversiones - SimpleFinance

export const glossary = [
  {
    term: "Ahorro",
    category: "finance",
    definition: "La parte de tus ingresos que no gastas y decides guardar para el futuro. Es el cimiento de toda salud financiera."
  },
  {
    term: "TNA (Tasa Nominal Anual)",
    category: "finance",
    definition: "Es el interés teórico que te paga una inversión (o te cobra un préstamo) en un año completo, sin reinvertir las ganancias. Sirve de referencia rápida."
  },
  {
    term: "TEA (Tasa Efectiva Anual)",
    category: "finance",
    definition: "La tasa real de interés que ganas o pagas en un año cuando sí se reinvierten los intereses mes a mes (efecto del interés compuesto). ¡Siempre es mayor que la TNA!"
  },
  {
    term: "Interés Compuesto",
    category: "finance",
    definition: "El efecto multiplicador donde los intereses que ganas se suman a tu capital original, y en el siguiente período generan nuevos intereses. ¡Tu dinero crece exponencialmente!"
  },
  {
    term: "Presupuesto",
    category: "finance",
    definition: "Un plan escrito donde detallas cuánto dinero va a ingresar y exactamente cómo lo vas a distribuir entre gastos obligatorios, gustos y ahorro."
  },
  {
    term: "Gastos Hormiga",
    category: "finance",
    definition: "Pequeños consumos cotidianos que parecen insignificantes (un café diario, snacks, suscripciones que no usas) pero que al sumarlos al mes representan una fortuna."
  },
  {
    term: "Pago Mínimo",
    category: "finance",
    definition: "El monto mínimo que exige el banco para no declarar tu tarjeta de crédito en mora. NUNCA lo uses como costumbre: genera intereses altísimos sobre el resto de la deuda."
  },
  {
    term: "Pago Total",
    category: "finance",
    definition: "Abonar el 100% de los consumos realizados con tu tarjeta de crédito antes del vencimiento. Es la única forma de usar la tarjeta gratis y acumular puntos sin endeudarte."
  },
  {
    term: "Plazo Fijo",
    category: "investments",
    definition: "Inversión bancaria donde depositas dinero por un tiempo determinado (mínimo 30 días) a cambio de una tasa de interés fija. Al vencer, recuperas tu capital más la ganancia."
  },
  {
    term: "UVA (Unidad de Valor Adquisitivo)",
    category: "investments",
    definition: "Un indicador que mide el costo de vida y se actualiza diariamente según la inflación (índice CER). Un Plazo Fijo UVA protege tu poder de compra porque te paga inflación + 1%."
  },
  {
    term: "Lecaps (Letras de Capitalización)",
    category: "investments",
    definition: "Títulos de deuda a corto plazo emitidos por el Tesoro Nacional Argentino. Ofrecen una tasa de interés fija y se pueden vender antes de su vencimiento en el mercado."
  },
  {
    term: "FCI (Fondo Común de Inversión)",
    category: "investments",
    definition: "Un pozo de dinero aportado por muchos ahorristas que es administrado por profesionales. Invierte en varios activos para diversificar el riesgo de forma automática."
  },
  {
    term: "Fondo Money Market",
    category: "investments",
    definition: "Un tipo de FCI hiper-conservador que ofrece rendimientos diarios y liquidez inmediata (puedes sacar tu dinero en segundos, como en Mercado Pago o Ualá)."
  },
  {
    term: "Bonos",
    category: "investments",
    definition: "Títulos de deuda emitidos por un Estado o empresa. Al comprar un bono, les estás prestando dinero a cambio de que te devuelvan el capital con intereses en fechas pactadas."
  },
  {
    term: "Obligaciones Negociables (ONs)",
    category: "investments",
    definition: "Bonos emitidos por empresas privadas (como YPF, Pampa Energía). Son muy buscados en Argentina porque muchas de ellas pagan intereses y capital en Dólares (USD)."
  },
  {
    term: "Cedear (Certificado de Depósito Argentino)",
    category: "investments",
    definition: "Es una fracción de una acción de una empresa extranjera (como Apple, Coca-Cola o Google) que cotiza en la Bolsa argentina en pesos. Te protege del dólar y la devaluación."
  },
  {
    term: "Acción",
    category: "investments",
    definition: "Una pequeña parte del capital de una empresa. Al comprar una acción, te conviertes en socio/dueño de esa porción de la compañía, participando de sus ganancias o pérdidas."
  },
  {
    term: "Diversificación",
    category: "investments",
    definition: "La regla de oro de las inversiones: 'no poner todos los huevos en la misma canasta'. Consiste en repartir tu dinero en distintos activos para reducir el impacto si a uno le va mal."
  },
  {
    term: "Liquidez",
    category: "investments",
    definition: "La rapidez con la que puedes convertir una inversión de nuevo en dinero en efectivo disponible para gastar sin perder valor."
  },
  {
    term: "Volatilidad",
    category: "investments",
    definition: "La medida de cuánto y qué tan rápido cambia el precio de un activo financiero. A mayor volatilidad, mayor riesgo pero también potencial de mayor ganancia."
  },
  {
    term: "Dólar MEP (Mercado Electrónico de Pagos)",
    category: "finance",
    definition: "Una forma legal, segura e ilimitada de comprar dólares en Argentina a través de la bolsa, comprando un bono en pesos y vendiéndolo en su versión en dólares."
  }
];

export const personalFinanceLessons = [
  {
    id: "pf_1",
    title: "La Regla 50/30/20",
    shortDesc: "El método más famoso y simple del mundo para organizar tu presupuesto mensual.",
    slides: [
      {
        title: "¿Qué es la Regla 50/30/20?",
        text: "Es un método diseñado por la senadora estadounidense Elizabeth Warren para presupuestar sin volverse loco. Propone dividir tus ingresos netos mensuales en **tres grandes categorías**:",
        visualType: "pie-chart"
      },
      {
        title: "El 50%: Tus Necesidades",
        text: "La mitad de tus ingresos debe ir a lo **estrictamente vital** para sobrevivir: alquiler/hipoteca, servicios (luz, gas, agua, internet), comida básica, transporte para trabajar y seguros obligatorios. Si no lo pagas, tu vida se complica.",
        visualType: "needs-card"
      },
      {
        title: "El 30%: Tus Deseos",
        text: "¡Ahorrar no significa sufrir! El 30% se destina al **estilo de vida y disfrute**: salidas con amigos, salidas a comer, cine, suscripciones (Netflix, Spotify), ropa que no es de extrema urgencia y hobbies. Te mantiene motivado.",
        visualType: "wants-card"
      },
      {
        title: "El 20%: Ahorro y Futuro",
        text: "El último 20% es para tu **yo del futuro**. Se destina a construir tu Fondo de Emergencia, ahorrar para metas a largo plazo, pagar deudas extraordinarias o colocarlo en inversiones que multipliquen su valor.",
        visualType: "savings-card"
      }
    ],
    questions: [
      {
        questionText: "Si ganas $500.000 netos al mes, ¿cuánto dinero deberías destinar al Ahorro según la regla 50/30/20?",
        options: [
          "$250.000 (50%)",
          "$150.000 (30%)",
          "$100.000 (20%)",
          "$50.000 (10%)"
        ],
        correctIndex: 2,
        explanation: "Correcto. El 20% de $500.000 es $100.000, que es lo que debes separar obligatoriamente para tu ahorro y metas futuras."
      },
      {
        questionText: "¿En qué categoría de la regla 50/30/20 entra la suscripción a Netflix?",
        options: [
          "Necesidades (50%)",
          "Deseos (30%)",
          "Ahorro (20%)",
          "No entra en el presupuesto"
        ],
        correctIndex: 1,
        explanation: "¡Exacto! Netflix es entretenimiento y diversión, por ende califica perfectamente dentro del 30% de Deseos."
      }
    ]
  },
  {
    id: "pf_2",
    title: "El Ahorro del 10%",
    shortDesc: "Págate a ti mismo primero: la regla de oro de la riqueza personal.",
    slides: [
      {
        title: "Págate a ti mismo primero",
        text: "La mayoría de la gente hace esto: cobra su sueldo, paga sus cuentas, gasta en sus gustos y **ahorra lo que sobra** (que casi siempre es $0). El método del 10% invierte la ecuación.",
        visualType: "equation-visual"
      },
      {
        title: "El Diezmo Personal",
        text: "Apenas recibes tu ingreso (sueldo, honorario, etc.), **separas automáticamente el 10%** y lo guardas en una cuenta de ahorros o inversión. Consideras que ese 10% no es tuyo hoy, sino de tu futuro.",
        visualType: "piggy-bank"
      },
      {
        title: "Vivir con el 90%",
        text: "Una vez apartado el 10%, reajustas tus gastos y necesidades para vivir con el 90% restante. Te sorprenderá ver lo rápido que el cerebro se adapta a gastar un poco menos si el dinero no está a la vista.",
        visualType: "wallet-visual"
      }
    ],
    questions: [
      {
        questionText: "¿Cuál es la clave del éxito del método de ahorro del 10%?",
        options: [
          "Ahorrar al final del mes con lo que sobró",
          "Separar el 10% inmediatamente al cobrar, antes de cualquier gasto",
          "Gastar el 90% en deseos y el 10% en necesidades",
          "Pedir un préstamo del 10% cada mes"
        ],
        correctIndex: 1,
        explanation: "¡Excelente! La clave es 'pagarte a ti mismo primero'. Retirar el ahorro al inicio asegura que el ahorro sea una prioridad y no una casualidad."
      }
    ]
  },
  {
    id: "pf_3",
    title: "Método del 1% Mensual",
    shortDesc: "Cómo construir un hábito de ahorro poderoso de forma casi imperceptible.",
    slides: [
      {
        title: "El Hábito es más importante que el Monto",
        text: "Si nunca has ahorrado, intentar guardar un 20% de golpe puede sentirse como una dieta extrema: te frustras y abandonas. El Método del 1% Mensual utiliza la **fuerza de los micro-hábitos**.",
        visualType: "habit-visual"
      },
      {
        title: "Paso a Paso",
        text: "Empiezas el primer mes (ej. Enero) ahorrando solo el **1%** de tu sueldo. Si ganas $400.000, son solo $4.000. Prácticamente no lo vas a notar en tu día a día.",
        visualType: "step-1"
      },
      {
        title: "El Incremento Gradual",
        text: "Al mes siguiente (Febrero), subes al **2%** ($8.000). En Marzo, al **3%** ($12.000). Como el aumento es de solo un 1% extra cada mes, tu nivel de vida se va adaptando de forma suave y sin dolor.",
        visualType: "step-up"
      },
      {
        title: "El Logro al Año",
        text: "Para el mes 12 (Diciembre), estarás ahorrando el **12%** de tus ingresos mensuales de forma completamente natural y habrás construido un hábito indestructible de ahorro.",
        visualType: "progress-chart"
      }
    ],
    questions: [
      {
        questionText: "Si en Enero comienzas ahorrando el 1% de tu sueldo, ¿qué porcentaje deberías ahorrar en Julio (mes 7)?",
        options: [
          "1%",
          "7%",
          "12%",
          "20%"
        ],
        correctIndex: 1,
        explanation: "¡Perfecto! Al aumentar un 1% cada mes de forma constante, en el séptimo mes (Julio) habrás alcanzado el 7% de ahorro casi sin darte cuenta."
      }
    ]
  },
  {
    id: "pf_4",
    title: "Ahorra lo que Puedas",
    shortDesc: "El método flexible para trabajadores independientes o con ingresos variables.",
    slides: [
      {
        title: "La Realidad de los Ingresos Variables",
        text: "Si eres freelancer, comerciante o tienes ingresos que cambian mes a mes, las reglas rígidas de porcentajes fijos a veces son imposibles de cumplir. Aquí entra el método flexible.",
        visualType: "variable-income"
      },
      {
        title: "1. Detectar Gastos Hormiga",
        text: "Cuando los ingresos varían, el control de gastos debe ser más riguroso. Identifica esos pequeños consumos diarios que drenan tu billetera sin aportar valor real.",
        visualType: "ant-expenses"
      },
      {
        title: "2. Guardar en los Meses Gordos",
        text: "En este método, cuando tienes un mes de altos ingresos, no aumentas tu nivel de gasto. En su lugar, guardas ese excedente para cubrir los meses flacos. Se trata de promediar.",
        visualType: "fat-months"
      },
      {
        title: "3. La Regla de Oro Flexible",
        text: "Ahorra lo que puedas, pero ahorra **SIEMPRE**. Aunque un mes sea difícil y solo puedas guardar un 2% o un monto mínimo fijo, sostener la acción de ahorrar mantiene vivo el hábito.",
        visualType: "flexible-savings"
      }
    ],
    questions: [
      {
        questionText: "Si eres freelancer y tienes un mes con excelentes ingresos extraordinarios, ¿cuál es la mejor estrategia?",
        options: [
          "Gastar todo para darte lujos acumulados",
          "Mantener tus gastos estables y guardar el excedente para los meses de bajos ingresos",
          "Dejar de trabajar el próximo mes",
          "Ahorrar exactamente el 10% y gastar el 90% restante en un viaje"
        ],
        correctIndex: 1,
        explanation: "¡Exacto! Mantener tus gastos estables ante ingresos variables te permite crear un 'colchón' financiero para cuando los ingresos bajen."
      }
    ]
  },
  {
    id: "pf_5",
    title: "Uso Inteligente de Tarjetas de Crédito",
    shortDesc: "El manual definitivo para ganarle al banco y no caer en la trampa de la deuda.",
    slides: [
      {
        title: "La Tarjeta no es Dinero Extra",
        text: "El error número uno es creer que el límite de compra de tu tarjeta es una extensión de tu sueldo. La tarjeta es un **medio de pago**, es decir, dinero que pides prestado hoy y debes devolver al mes siguiente.",
        visualType: "credit-card"
      },
      {
        title: "La Trampa Mortal: El Pago Mínimo",
        text: "Al vencer el resumen, el banco te da dos opciones: **Pago Total** o **Pago Mínimo**. Si pagas el mínimo, el banco te cobrará intereses altísimos (a veces mayores al 100% anual en Argentina) sobre el saldo restante. ¡Es el inicio de una deuda impagable!",
        visualType: "minimum-payment"
      },
      {
        title: "La Regla de Oro: Siempre Pago Total",
        text: "Usa la tarjeta para centralizar tus gastos mensuales, aprovechar cuotas sin interés y acumular puntos. Pero **SIEMPRE paga el TOTAL** del resumen antes del día de vencimiento. Así, usas el dinero del banco gratis.",
        visualType: "full-payment"
      }
    ],
    questions: [
      {
        questionText: "¿Qué sucede si realizas únicamente el 'Pago Mínimo' de tu tarjeta de crédito al final del mes?",
        options: [
          "El banco te perdona el resto de la deuda gratis",
          "Tu saldo restante acumula intereses financieros muy altos, aumentando tu deuda para el mes siguiente",
          "Te regalan más límite de crédito por buen comportamiento",
          "Es la mejor forma de ahorrar dinero"
        ],
        correctIndex: 1,
        explanation: "¡Correcto! El pago mínimo financia el saldo restante con tasas de interés muy elevadas, creando una peligrosa bola de nieve de deuda."
      },
      {
        questionText: "¿Cuál es la forma correcta de usar la tarjeta de crédito para no endeudarse?",
        options: [
          "Comprar todo lo que quieras, total pagas el mínimo",
          "Considerarla dinero extra y gastar más de lo que ganas",
          "Comprar solo lo que puedas pagar en su totalidad al vencimiento del resumen",
          "Tener muchas tarjetas y usarlas al límite"
        ],
        correctIndex: 2,
        explanation: "¡Excelente! La tarjeta debe usarse con presupuesto disponible. Si no tienes el dinero para pagarlo al vencimiento, no deberías comprarlo con tarjeta."
      }
    ]
  },
  {
    id: "pf_6",
    title: "Saliendo de Deudas: Bola de Nieve vs Avalancha",
    shortDesc: "Dos poderosas estrategias matemáticas y psicológicas para recuperar tu libertad financiera.",
    slides: [
      {
        title: "Tomar el Control",
        text: "Si ya estás endeudado, no te desesperes. Hay dos estrategias mundialmente famosas para salir del pozo de forma ordenada. En ambas, debes hacer el pago mínimo en todas tus deudas y poner cada peso extra en una sola.",
        visualType: "debt-control"
      },
      {
        title: "Método 1: La Bola de Nieve",
        text: "Consiste en ordenar tus deudas de **menor a mayor monto**, sin importar la tasa de interés. Concentras todo tu dinero extra en liquidar la deuda más pequeña primero.",
        visualType: "snowball"
      },
      {
        title: "Victoria Psicológica",
        text: "Al eliminar rápidamente una deuda chica, sientes una inyección de motivación. Luego, el dinero que usabas para esa deuda se suma al pago de la siguiente deuda más pequeña. La bola crece y arrasa con todo.",
        visualType: "snowball-effect"
      },
      {
        title: "Método 2: La Avalancha",
        text: "Consiste en ordenar tus deudas de **mayor a menor tasa de interés**. Destinas cada peso extra a liquidar la deuda más cara (la que te cobra más intereses, como las tarjetas de crédito).",
        visualType: "avalanche"
      },
      {
        title: "Eficiencia Matemática",
        text: "Matemáticamente es el método más óptimo porque te ahorra la mayor cantidad de dinero en intereses a largo plazo. Requiere más disciplina porque las deudas caras pueden tardar más en liquidarse del todo.",
        visualType: "avalanche-effect"
      }
    ],
    questions: [
      {
        questionText: "Si tienes tres deudas: Tarjeta ($150.000 a 110% interés), Préstamo Familiar ($50.000 a 0% interés) y Crédito Personal ($300.000 a 80% interés), ¿cuál pagarías primero usando el método de la Bola de Nieve?",
        options: [
          "La Tarjeta ($150.000) por tener el mayor interés",
          "El Crédito Personal ($300.000) por ser el monto más grande",
          "El Préstamo Familiar ($50.000) por ser el monto más pequeño",
          "Ninguna, pagaría partes iguales a las tres"
        ],
        correctIndex: 2,
        explanation: "¡Correcto! En la Bola de Nieve priorizas el monto más chico ($50.000) para obtener una victoria psicológica rápida y eliminar un acreedor de tu lista."
      },
      {
        questionText: "Con las mismas tres deudas, ¿cuál priorizarías primero usando el método de la Avalancha?",
        options: [
          "La Tarjeta ($150.000 - 110% interés)",
          "El Préstamo Familiar ($50.000 - 0% interés)",
          "El Crédito Personal ($300.000 - 80% interés)",
          "La deuda de monto promedio"
        ],
        correctIndex: 0,
        explanation: "¡Excelente! La Avalancha ataca la deuda con la tasa de interés más alta (110%) para evitar que los intereses sigan encareciendo tu saldo deudor."
      }
    ]
  },
  {
    id: "pf_test",
    title: "🎓 Mini-Test de Finanzas Personales",
    shortDesc: "Demuestra tus conocimientos y obtén tu diploma de Finanzas Personales.",
    isTest: true,
    slides: [
      {
        title: "¡Llegó la hora del Desafío Final!",
        text: "Has aprendido sobre la regla 50/30/20, métodos de ahorro progresivos, el uso de tarjetas de crédito y cómo salir de deudas. Este mini-test evaluará lo aprendido. ¡Demuestra que estás listo para dominar tus finanzas y desbloquear el mundo de las inversiones!",
        visualType: "diploma-preview"
      }
    ],
    questions: [
      {
        questionText: "¿Cómo se divide tu presupuesto con la Regla 50/30/20?",
        options: [
          "50% Deseos, 30% Ahorro, 20% Necesidades",
          "50% Necesidades, 30% Deseos, 20% Ahorro e Inversión",
          "50% Ahorro, 30% Tarjetas, 20% Salidas",
          "50% Impuestos, 30% Compras online, 20% Alquiler"
        ],
        correctIndex: 1,
        explanation: "¡Correcto! 50% Necesidades (vital), 30% Deseos (disfrute), 20% Ahorro (futuro)."
      },
      {
        questionText: "¿Qué es 'pagarte a ti mismo primero'?",
        options: [
          "Ir de compras apenas cobras el sueldo",
          "Separar tu porcentaje de ahorro inmediatamente al recibir tus ingresos, antes de gastar",
          "Pagar la totalidad de tus tarjetas de crédito con deudas nuevas",
          "Ahorrar solo si te sobra dinero al final del mes"
        ],
        correctIndex: 1,
        explanation: "¡Exacto! Es la base de un ahorro consistente."
      },
      {
        questionText: "¿Por qué se desaconseja rotundamente realizar solo el 'Pago Mínimo' de la tarjeta de crédito?",
        options: [
          "Porque el banco te cierra la cuenta inmediatamente",
          "Porque genera intereses acumulativos muy altos sobre el saldo restante, empeorando tu deuda",
          "Porque no te permite acumular puntos de descuento",
          "Porque es ilegal"
        ],
        correctIndex: 1,
        explanation: "¡Correcto! Genera intereses de financiación muy elevados."
      },
      {
        questionText: "¿Cuál es la diferencia clave entre el método de la Bola de Nieve y la Avalancha para salir de deudas?",
        options: [
          "La Bola de Nieve es para deudas en dólares y la Avalancha en pesos",
          "La Bola de Nieve prioriza el interés más alto; la Avalancha, el monto más chico",
          "La Bola de Nieve ordena de menor a mayor monto (foco psicológico); la Avalancha de mayor a menor tasa de interés (foco matemático)",
          "No hay diferencias, son exactamente lo mismo"
        ],
        correctIndex: 2,
        explanation: "¡Excelente! Has respondido a la perfección. La Bola de Nieve se enfoca en victorias psicológicas rápidas y la Avalancha en optimización financiera."
      }
    ]
  }
];

export const investorProfileQuiz = {
  id: "inv_1",
  title: "Tu Perfil de Inversor",
  shortDesc: "Descubre qué tipo de inversor eres antes de poner en juego tu dinero.",
  questions: [
    {
      id: "q1",
      questionText: "¿Cuál es tu principal objetivo al comenzar a invertir?",
      options: [
        "Proteger mis ahorros de la inflación y mantenerlos seguros, aunque gane poco.",
        "Lograr un crecimiento moderado de mi dinero a mediano plazo, tolerando algunas variaciones.",
        "Maximizar mis ganancias a largo plazo, asumiendo grandes fluctuaciones de precio."
      ],
      scores: [1, 2, 3] // Conservative, Moderate, Risky points
    },
    {
      id: "q2",
      questionText: "Si tu inversión cae un 15% en un mes debido a movimientos del mercado, ¿cómo reaccionarías?",
      options: [
        "Me desesperaría y vendería todo inmediatamente para no seguir perdiendo dinero.",
        "Monitorearía la situación con calma y esperaría a que se recupere, sin vender.",
        "Lo vería como una oportunidad de descuento y compraría más cantidad a menor precio."
      ],
      scores: [1, 2, 3]
    },
    {
      id: "q3",
      questionText: "¿Por cuánto tiempo planeas mantener invertido tu dinero sin necesitar usarlo?",
      options: [
        "Menos de un año (Corto plazo).",
        "Entre 1 y 3 años (Mediano plazo).",
        "Más de 3 o 5 años (Largo plazo)."
      ],
      scores: [1, 2, 3]
    },
    {
      id: "q4",
      questionText: "¿Cuál es tu nivel de conocimiento actual sobre instrumentos financieros?",
      options: [
        "Principiante: Solo conozco el Plazo Fijo o Mercado Pago.",
        "Intermedio: Entiendo qué son los bonos, fondos de inversión y algunas acciones.",
        "Avanzado: Conozco el mercado de valores, derivados, Cedears y armo mis propias carteras."
      ],
      scores: [1, 2, 3]
    }
  ]
};

export const investmentLessons = [
  {
    id: "inv_profile",
    title: "1. Descubre tu Perfil de Inversor",
    shortDesc: "Cuestionario interactivo para saber qué activos financieros se adaptan mejor a ti.",
    isProfileQuiz: true
  },
  {
    id: "inv_2",
    title: "Plazo Fijo y Plazo Fijo UVA",
    shortDesc: "El punto de partida del ahorro bancario. ¿Pesos quietos o protegidos por inflación?",
    risk: "Conservador",
    riskClass: "conservative", // matches CSS
    slides: [
      {
        title: "El Plazo Fijo Tradicional",
        text: "Es el instrumento más popular de Argentina. Le prestas tus pesos al banco por una cantidad de días (mínimo 30). El banco te asegura una **Tasa Nominal Anual (TNA)** fija. Al terminar el plazo, te devuelven tu capital inicial más los intereses ganados. Sabes exactamente cuánto vas a cobrar desde el día uno.",
        visualType: "plazo-fijo-trad"
      },
      {
        title: "El Problema de la Inflación",
        text: "En economías de alta inflación, a veces la tasa fija que te paga el banco queda por **debajo del aumento de precios**. Si la tasa es del 4% mensual y la inflación es del 5%, estás perdiendo poder de compra, aunque nominalmente tengas más pesos.",
        visualType: "inflation-loss"
      },
      {
        title: "La Solución: Plazo Fijo UVA",
        text: "El Plazo Fijo UVA soluciona esto. Tu capital se convierte en **UVAs** (Unidades de Valor Adquisitivo), las cuales aumentan de valor todos los días al mismo ritmo que la inflación oficial (índice CER). Al final, el banco te devuelve los pesos equivalentes a esas UVAs actualizadas **más un interés extra del 1% anual**.",
        visualType: "plazo-fijo-uva"
      },
      {
        title: "La Letra Chica del UVA",
        text: "Aunque el Plazo Fijo UVA te garantiza ganarle a la inflación, exige que dejes tu dinero depositado por un **mínimo de 90 días** (a diferencia de los 30 días del tradicional). Perdes liquidez inmediata a cambio de cobertura total.",
        visualType: "time-lock"
      }
    ],
    questions: [
      {
        questionText: "¿Cuál es la principal ventaja de un Plazo Fijo UVA frente a uno tradicional en un contexto de alta inflación?",
        options: [
          "Te permite retirar el dinero en cualquier momento (liquidez inmediata)",
          "Ajusta tu capital según la inflación diaria, protegiendo tu poder de compra real",
          "Te paga intereses en dólares billete",
          "No requiere tener una cuenta bancaria abierta"
        ],
        correctIndex: 1,
        explanation: "¡Correcto! Al ajustar tu capital por UVAs (inflación), te garantiza que tu dinero no perderá valor de compra ante la suba de precios."
      },
      {
        questionText: "¿Cuál es el plazo mínimo de permanencia requerido para constituir un Plazo Fijo UVA?",
        options: [
          "30 días",
          "60 días",
          "90 días",
          "180 días"
        ],
        correctIndex: 2,
        explanation: "¡Excelente! El Banco Central estipula un mínimo de 90 días de encaje para el Plazo Fijo UVA a fin de garantizar la tasa real positiva."
      }
    ]
  },
  {
    id: "inv_3",
    title: "Letras del Tesoro (Lecaps)",
    shortDesc: "Invierte de forma directa prestándole al Estado a muy corto plazo.",
    risk: "Conservador",
    riskClass: "conservative",
    slides: [
      {
        title: "¿Qué son las Lecaps?",
        text: "Son **Letras de Capitalización** emitidas por el Tesoro Nacional Argentino. Básicamente, en lugar de prestarle dinero a un banco comercial, le estás prestando dinero directamente al Estado Nacional para financiarse a corto plazo.",
        visualType: "lecap-intro"
      },
      {
        title: "Funcionamiento y Rendimiento",
        text: "Las Lecaps cotizan en la bolsa de valores y pagan una tasa fija capitalizable de forma mensual. Esto significa que cada mes que pasa, los intereses ganados se suman al capital, generando más intereses para el período siguiente (interés compuesto automático).",
        visualType: "lecap-growth"
      },
      {
        title: "Ventaja Clave: Liquidez en el Mercado",
        text: "A diferencia de un Plazo Fijo que te ata sí o sí por 30 o 90 días, las Lecaps cotizan en bolsa. Esto significa que **puedes venderlas en cualquier momento** en el mercado secundario (con liquidación en 24 o 48 horas) si necesitas usar el dinero de urgencia.",
        visualType: "market-liquidity"
      }
    ],
    questions: [
      {
        questionText: "¿Cuál es una ventaja importante de las Lecaps frente a un Plazo Fijo tradicional?",
        options: [
          "Tienen garantía total en dólares billete",
          "Se pueden vender en el mercado secundario antes del vencimiento para obtener liquidez inmediata",
          "No pagan ningún tipo de interés",
          "Tienen un plazo mínimo de bloqueo de un año"
        ],
        correctIndex: 1,
        explanation: "¡Exacto! Al cotizar en el mercado secundario, puedes comprar y vender Lecaps libremente de lunes a viernes, obteniendo liquidez sin esperar al vencimiento."
      }
    ]
  },
  {
    id: "inv_4",
    title: "Fondos Comunes de Inversión (FCI)",
    shortDesc: "Diversificación y gestión profesional al alcance de un solo click.",
    risk: "Moderado",
    riskClass: "moderate",
    slides: [
      {
        title: "¿Qué es un FCI?",
        text: "Imagina que te juntas con 10.000 personas y arman un gran pozo de dinero. Luego contratan a un **equipo de expertos financieros** para que administren ese dinero invirtiéndolo en decenas de activos distintos. Eso es un Fondo Común de Inversión (FCI).",
        visualType: "fci-concept"
      },
      {
        title: "Diversificación Automática",
        text: "La gran ventaja de un FCI es que, con una inversión mínima insignificante (muchas veces desde $100), ya estás diversificado. Tu dinero se reparte en plazos fijos, bonos, acciones y letras, reduciendo drásticamente el riesgo individual de que a una sola empresa le vaya mal.",
        visualType: "diversification-visual"
      },
      {
        title: "Los Fondos 'Money Market' (T+0)",
        text: "Son los más conocidos de Argentina por estar integrados en billeteras como Mercado Pago o Ualá. Invierten en activos ultra-seguros y te dan **rendimientos diarios y liquidez inmediata**. Puedes usar tus pesos las 24 horas del día, los 7 días de la semana.",
        visualType: "money-market"
      },
      {
        title: "Fondos T+1 y Renta Variable",
        text: "Existen fondos más avanzados: los **T+1 (Renta Fija)** que invierten en bonos y tardan 24 horas en darte el dinero, y los **T+2 (Renta Variable)** que invierten en acciones de bolsa y tienen mayor volatilidad pero potencial de mucha más ganancia.",
        visualType: "fci-types"
      }
    ],
    questions: [
      {
        questionText: "¿Cuál es el beneficio de invertir en un Fondo Común de Inversión (FCI)?",
        options: [
          "Te garantiza ganancias del 100% en dólares todos los meses",
          "Es administrado por expertos y te permite diversificar tus ahorros en múltiples activos de forma automática",
          "Es un contrato donde prometes no retirar tu dinero por 5 años",
          "Solo sirve si tienes millones de pesos para invertir"
        ],
        correctIndex: 1,
        explanation: "¡Excelente! Los FCI delegan la administración en profesionales y permiten a pequeños ahorristas acceder a una cartera muy diversificada con poco dinero."
      },
      {
        questionText: "¿Qué característica define a un fondo de liquidez inmediata o 'Money Market'?",
        options: [
          "Inversion de muy alto riesgo y volatilidad extrema",
          "Rendimientos diarios y la posibilidad de retirar tu dinero en segundos a cualquier hora (24/7)",
          "Pago de dividendos en acciones extranjeras",
          "Solo abre operaciones los días feriados"
        ],
        correctIndex: 1,
        explanation: "¡Correcto! Los Money Market ofrecen liquidez inmediata y bajo riesgo, siendo ideales para el dinero que utilizas para el consumo cotidiano del mes."
      }
    ]
  },
  {
    id: "inv_5",
    title: "Bonos y Obligaciones Negociables (ONs)",
    shortDesc: "Conviértete en acreedor de gobiernos y grandes empresas. ¡Renta en dólares!",
    risk: "Moderado",
    riskClass: "moderate",
    slides: [
      {
        title: "¿Qué es un Bono?",
        text: "Al comprar un bono, te conviertes en **acreedor**. Le estás prestando dinero a un emisor (el Gobierno Nacional o una Empresa). A cambio, el emisor firma un contrato donde se compromete a pagarte intereses periódicos (cupones) y devolverte el capital prestado en fechas preestablecidas.",
        visualType: "bond-intro"
      },
      {
        title: "Tipos de Bonos del Estado",
        text: "El Estado emite dos grandes tipos de bonos soberanos:\n- **Bonos a Tasa Fija/Badlar**: pagan un interés establecido.\n- **Bonos Ajustados por CER (Inflación)**: el capital que te deben sube a la par del costo de vida en Argentina para que no pierdas poder adquisitivo.",
        visualType: "gov-bonds"
      },
      {
        title: "Obligaciones Negociables (ONs)",
        text: "Son bonos emitidos por **empresas privadas** (ej. YPF, Pan American Energy, Telecom, IRSA) para financiar sus proyectos de inversión. En Argentina son la estrella de la renta fija debido a que **muchas de ellas están denominadas en Dólares (USD)**.",
        visualType: "ons-intro"
      },
      {
        title: "Renta Pasiva en Dólares",
        text: "Puedes comprar ONs de grandes corporaciones usando tus pesos. A pesar de comprarlas en pesos, el contrato establece que **te pagarán intereses trimestrales o semestrales en dólares billete** directamente en tu cuenta de bolsa (cuenta comitente). Es el método ideal para dolarizar tus pesos de forma legal.",
        visualType: "usd-passive"
      }
    ],
    questions: [
      {
        questionText: "¿Qué es una Obligación Negociable (ON) en la Bolsa argentina?",
        options: [
          "Un impuesto obligatorio al comercio exterior",
          "Un título de deuda emitido por una empresa privada que paga intereses y devuelve el capital en plazos pactados (frecuentemente en dólares)",
          "Una acción de YPF que no se puede vender",
          "Un depósito bancario garantizado por el Estado"
        ],
        correctIndex: 1,
        explanation: "¡Exacto! Las ONs son deuda corporativa privada. Permiten financiar a empresas líderes y obtener a cambio rentas estables, muchas veces en dólares billete."
      },
      {
        questionText: "Si compras una Obligación Negociable (ON) corporativa cableada en Dólares usando tus Pesos en la Bolsa:",
        options: [
          "El cobro de intereses se realizará obligatoriamente en pesos convertidos al dólar oficial",
          "Cobrarás los intereses acordados directamente en dólares billete en tu cuenta comitente",
          "Pierdes la inversión si el dólar sube",
          "Te penalizan por comprar divisas de forma ilegal"
        ],
        correctIndex: 1,
        explanation: "¡Excelente! La ventaja estelar de las ONs denominadas en USD (especie 'D') es que, aun ingresando con pesos, cobras cupones en dólares físicos directo en tu broker."
      }
    ]
  },
  {
    id: "inv_6",
    title: "Cedears (Certificados de Depósito)",
    shortDesc: "Invierte en gigantes como Apple, Google o Coca-Cola desde Argentina y en pesos.",
    risk: "Arriesgado",
    riskClass: "risky",
    slides: [
      {
        title: "¿Qué es un Cedear?",
        text: "Un CEDEAR es un **Certificado de Depósito Argentino**. Es un activo financiero local que representa una porción (o una acción completa) de una **empresa extranjera de primer nivel** que cotiza en bolsas de EE.UU. (como Apple, Coca-Cola, Amazon, Tesla o McDonald's).",
        visualType: "cedear-concept"
      },
      {
        title: "Inversión en Pesos, Cobertura en Dólar",
        text: "La magia de los Cedears es que se operan con **pesos** en la bolsa local. Sin embargo, su precio fluctúa por dos factores independientes:\n1. El precio real de la acción en Wall Street (USD).\n2. La variación del dólar financiero libre (**Contado con Liquidación - CCL**) en Argentina.",
        visualType: "dual-multiplier"
      },
      {
        title: "Escudo contra la Devaluación",
        text: "Si la cotización de la empresa en EE.UU. se mantiene estable, pero en Argentina el tipo de cambio financiero sube un 10%, el precio de tu Cedear en pesos **subirá automáticamente un 10%**. Es un excelente vehículo para resguardar tus ahorros de devaluaciones monetarias.",
        visualType: "currency-shield"
      },
      {
        title: "Riesgos del Cedear",
        text: "Al ser acciones (renta variable), los Cedears son **arriesgados**. Si la empresa reporta malos balances o el sector tecnológico sufre una crisis mundial, tus certificados pueden caer significativamente de valor. Requieren una mirada de mediano y largo plazo.",
        visualType: "volatility-visual"
      }
    ],
    questions: [
      {
        questionText: "¿Por qué los Cedears sirven como cobertura cambiaria contra la devaluación del Peso en Argentina?",
        options: [
          "Porque el Banco Central garantiza su precio fijo en pesos todos los meses",
          "Porque su precio local en pesos replica la cotización del dólar libre (Contado con Liquidación)",
          "Porque te pagan intereses fijos mensuales en pesos",
          "Porque están libres de todo riesgo de mercado"
        ],
        correctIndex: 1,
        explanation: "¡Correcto! Al estar atados al tipo de cambio CCL, si el dólar financiero sube en Argentina, el precio del Cedear en pesos se reajusta al alza en idéntica proporción."
      },
      {
        questionText: "¿Qué variables pueden hacer subir o bajar el valor de tu inversión en un Cedear de Apple?",
        options: [
          "La cotización de la acción de Apple en Wall Street y el precio del dólar Contado Con Liqui en Argentina",
          "Únicamente el precio de la nafta en Argentina",
          "Las decisiones del Banco Nación sobre la tasa de plazo fijo",
          "La cotización del dólar solidario en el banco"
        ],
        correctIndex: 0,
        explanation: "¡Excelente! Los Cedears tienen doble motor: el rendimiento del negocio real de la empresa en su mercado de origen y la evolución de la divisa en Argentina."
      }
    ]
  },
  {
    id: "inv_7",
    title: "Acciones Argentinas",
    shortDesc: "Compra una porción de las empresas líderes de nuestro país.",
    risk: "Arriesgado",
    riskClass: "risky",
    slides: [
      {
        title: "¿Qué es una Acción Local?",
        text: "Las acciones representan una fracción del capital social de una empresa argentina inscrita en la Bolsa de Comercio de Buenos Aires (ej. YPF, Pampa Energía, Transportadora de Gas del Sur, Aluar, Banco Galicia).",
        visualType: "local-stocks"
      },
      {
        title: "Socios en el Negocio",
        text: "Al comprar una acción, te conviertes en **socio**. Si a la empresa le va bien, aumenta sus ventas y expande sus operaciones, el precio de tu acción subirá. Adicionalmente, algunas empresas reparten periódicamente parte de sus ganancias en efectivo entre sus socios (pago de **dividendos**).",
        visualType: "dividends"
      },
      {
        title: "Rendimiento y Volatilidad Extrema",
        text: "La renta variable local ofrece uno de los retornos históricos en dólares más altos del mundo en períodos de crecimiento nacional, pero su volatilidad es **extrema**. Cambios regulatorios, el rumbo político y la situación macroeconómica provocan subidas o derrumbes abruptos de precios de un día para el otro.",
        visualType: "merval-chart"
      }
    ],
    questions: [
      {
        questionText: "¿Qué representa comprar una acción de una empresa argentina como Galicia o Aluar en la Bolsa?",
        options: [
          "Un contrato de préstamo a tasa fija que la empresa te pagará al año",
          "Adquirir una fracción de copropiedad de la empresa, convirtiéndote en socio de sus éxitos o caídas",
          "Una promesa de empleo en dicha corporación",
          "Un seguro de cobertura contra la inflación bancaria"
        ],
        correctIndex: 1,
        explanation: "¡Correcto! Una acción te convierte formalmente en socio propietario de una porción de la firma, participando de forma directa de su valorización patrimonial."
      }
    ]
  },
  {
    id: "inv_test",
    title: "🏆 Desafío de Inversión Final",
    shortDesc: "La prueba definitiva de tus conocimientos del mercado de capitales.",
    isTest: true,
    slides: [
      {
        title: "El Examen del Inversor Inteligente",
        text: "Has recorrido todo el camino de inversión. Desde instrumentos conservadores como el Plazo Fijo UVA y las Lecaps, pasando por la moderación de los FCI y los Bonos/ONs corporativas, hasta la renta variable de Cedears y Acciones locales. Demuestra tu pericia en el examen final. ¡Que la rentabilidad te acompañe!",
        visualType: "expert-diploma"
      }
    ],
    questions: [
      {
        questionText: "¿Cuál es la diferencia clave entre el Plazo Fijo Tradicional y el Plazo Fijo UVA?",
        options: [
          "El tradicional es en dólares; el UVA en pesos",
          "El tradicional paga una tasa fija fija; el UVA se ajusta por inflación del periodo más un interés mínimo, requiriendo un bloqueo mayor (90 días)",
          "El tradicional dura 90 días mínimo; el UVA 15 días",
          "El tradicional no cobra comisiones; el UVA retiene un 50% de las ganancias"
        ],
        correctIndex: 1,
        explanation: "¡Correcto! El UVA te defiende de la inflación pero inmoviliza tu capital por un piso de 90 días."
      },
      {
        questionText: "Un inversor con perfil 'Conservador' que busca proteger sus pesos líquidos del mes, ¿qué instrumento debería priorizar?",
        options: [
          "Acciones argentinas de alta volatilidad",
          "Cedears de tecnológicas de Wall Street",
          "FCI Money Market (liquidez inmediata)",
          "Bonos soberanos de largo plazo reestructurados"
        ],
        correctIndex: 2,
        explanation: "¡Exacto! El fondo Money Market ofrece nulo riesgo, rendimientos diarios y disponibilidad de caja inmediata las 24 horas."
      },
      {
        questionText: "¿Por qué son tan populares las Obligaciones Negociables (ONs) denominadas en dólares en Argentina?",
        options: [
          "Porque son emitidas por el Gobierno de forma secreta",
          "Porque permiten comprar acciones sin pagar impuestos",
          "Porque te permiten invertir pesos sobrantes y generar una renta pasiva periódica de intereses cobrados en dólares billete",
          "Porque garantizan que nunca habrá devaluación"
        ],
        correctIndex: 2,
        explanation: "¡Excelente! Son una de las formas de dolarización lícita más seguras e inteligentes para generar flujos constantes de dólares físicos."
      },
      {
        questionText: "Si compras un Cedear en la Bolsa de Comercio:",
        options: [
          "Inviertes en pesos para comprar participación en empresas internacionales líderes, protegiéndote además del tipo de cambio del dólar financiero",
          "Estás forzado a abrir una cuenta bancaria en los Estados Unidos",
          "Solo puedes comprar si eres dueño de la empresa",
          "Te congelan el dinero hasta la jubilación"
        ],
        correctIndex: 0,
        explanation: "¡Perfecto! Los Cedears son activos extraordinarios que combinan la diversificación global de marcas top con una fuerte cobertura ante la devaluación local."
      }
    ]
  }
];
