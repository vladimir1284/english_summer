interface PromptInfo {
  topic: string;
  focus: string;
}

const SESSION_PROMPTS: Record<string, PromptInfo> = {
  "1-1": {
    topic: "saludos, presentaciones personales, nombres, adjetivos posesivos (my, your, his, her) y el verbo to be (am/is/are)",
    focus: "presentarse y saludar formal o informalmente"
  },
  "1-2": {
    topic: "deletrear nombres con el abecedario en inglés, decir números de teléfono (del 0 al 10), direcciones de correo electrónico y usar contracciones (I'm, name's)",
    focus: "deletrear tu nombre e intercambiar información de contacto"
  },
  "1-3": {
    topic: "objetos de la escuela y del salón de clases, pertenencias personales y el uso de 'this'/'these' (esto/estos), 'it'/'they' (eso/esos) y plurales",
    focus: "identificar y nombrar pertenencias u objetos a tu alrededor"
  },
  "1-4": {
    topic: "preposiciones de lugar (in, on, under, next to, behind, in front of) y preguntas de sí/no con el verbo to be",
    focus: "preguntar y responder por la ubicación exacta de objetos cotidianos"
  },
  "2-1": {
    topic: "ciudades de origen, países y nacionalidades usando el verbo to be en afirmaciones, negaciones y preguntas cortas",
    focus: "hablar de dónde eres tú o terceras personas y tu nacionalidad"
  },
  "2-2": {
    topic: "describir la edad (números del 11 al 103), la apariencia física y la personalidad usando adjetivos y preguntas con 'Wh-' (who, what, how old)",
    focus: "describir cómo es alguien físicamente, su personalidad y decir la edad"
  },
  "2-3": {
    topic: "ropa, colores y adjetivos posesivos (our, their), pronombres posesivos y preguntas con 'whose'",
    focus: "describir qué ropa vistes o visten los demás e identificar de quién son las prendas"
  },
  "2-4": {
    topic: "el clima actual, las estaciones del año y acciones en presente continuo con conjunciones (and, but, so)",
    focus: "describir qué clima hace hoy y lo que estás vistiendo o haciendo en este momento"
  },
  "3-1": {
    topic: "preguntar y decir la hora (o'clock, A.M./P.M., noon, midnight) y usar expresiones de tiempo como 'at 7:00' o 'in the morning'",
    focus: "decir la hora exacta y en qué momentos del día haces actividades"
  },
  "3-2": {
    topic: "actividades cotidianas que ocurren ahora mismo usando el presente continuo en preguntas con 'Wh-' (what, where, who)",
    focus: "preguntar y describir lo que la gente está haciendo en este preciso instante"
  },
  "3-3": {
    topic: "medios de transporte, relaciones familiares y oraciones en presente simple con verbos regulares e irregulares",
    focus: "explicar cómo viajas a la escuela o trabajo y hablar sobre tus familiares"
  },
  "3-4": {
    topic: "rutinas diarias, días de la semana y preguntas en presente simple con expresiones como 'early, late, every day, on Sundays'",
    focus: "describir tus hábitos diarios, a qué hora los haces y los días de la semana"
  },
  "4-1": {
    topic: "describir casas y departamentos, sus habitaciones y usar 'there is / there are' para decir qué hay",
    focus: "describir las habitaciones de tu casa ideal o actual y dar respuestas cortas"
  },
  "4-2": {
    topic: "muebles del hogar y el uso de oraciones negativas como 'there is no / there isn't a' y 'there are no / there aren't any'",
    focus: "detallar qué muebles hay y cuáles faltan en diferentes espacios de la casa"
  },
  "4-3": {
    topic: "profesiones, empleos y lugares de trabajo usando preguntas en presente simple con 'do' y 'does'",
    focus: "preguntar y responder sobre qué hace la gente en su trabajo y dónde lo hace"
  },
  "4-4": {
    topic: "rutinas en el día de trabajo y colocación de adjetivos antes de sustantivos o después de 'be'",
    focus: "describir tu día de actividades de forma detallada y opinar sobre diferentes empleos"
  },
  "5-1": {
    topic: "alimentos básicos, comidas del día (breakfast, lunch, dinner), sustantivos contables/incontables y el uso de 'some' y 'any'",
    focus: "expresar qué alimentos te gustan o no, y hablar de lo que hay en tu cocina"
  },
  "5-2": {
    topic: "hábitos de alimentación y comidas usando adverbios de frecuencia (always, usually, often, sometimes, hardly ever, never)",
    focus: "describir con qué frecuencia desayunas, almuerzas o cenas ciertos alimentos"
  },
  "5-3": {
    topic: "deportes, actividades de tiempo libre y preguntas en presente simple sobre gustos y pasatiempos",
    focus: "hablar de tus deportes favoritos, los que practicas o te gusta mirar en televisión"
  },
  "5-4": {
    topic: "habilidades y talentos usando el verbo modal 'can' para capacidad física, mental o artística en preguntas y respuestas",
    focus: "expresar qué actividades puedes hacer bien (can) y cuáles no sabes o puedes hacer (can't)"
  },
  "6-1": {
    topic: "los meses, fechas específicas, cumpleaños y planes para el futuro usando la estructura 'be going to'",
    focus: "decir la fecha de tu cumpleaños y hacer planes sobre qué vas a hacer para celebrarlo"
  },
  "6-2": {
    topic: "festividades, días festivos y especiales usando preguntas de futuro con 'Wh-' y expresiones de tiempo futuro",
    focus: "explicar tus planes futuros para las próximas vacaciones, fin de semana o feriado especial"
  },
  "6-3": {
    topic: "partes del cuerpo, malestares de salud comunes usando 'have + sustantivo' y estados de ánimo con 'feel + adjetivo'",
    focus: "describir cómo te sientes físicamente y reportar síntomas o dolores comunes"
  },
  "6-4": {
    topic: "medicamentos, tratamientos caseros y dar consejos o recomendaciones usando oraciones imperativas",
    focus: "dar consejos útiles a un personaje enfermo sobre qué hacer y qué tomar"
  },
  "7-1": {
    topic: "tiendas del barrio, cosas que se compran en ellas y preposiciones de lugar (on the corner of, across from, next to, between)",
    focus: "ubicar tiendas locales y describir qué artículos puedes conseguir en cada una"
  },
  "7-2": {
    topic: "lugares turísticos de la ciudad y dar direcciones exactas para llegar usando imperativos (turn left, go straight, walk up)",
    focus: "pedir y dar indicaciones claras sobre cómo llegar a un punto específico en el mapa"
  },
  "7-3": {
    topic: "tareas del hogar y actividades divertidas del fin de semana pasado usando el pasado simple con verbos regulares e irregulares",
    focus: "describir las actividades y deberes que realizaste el fin de semana anterior"
  },
  "7-4": {
    topic: "viajes, vacaciones pasadas y actividades de verano usando preguntas de sí/no y respuestas cortas en pasado simple",
    focus: "compartir tus experiencias de vacaciones pasadas y responder sobre lo que hiciste"
  },
  "8-1": {
    topic: "información biográfica, años, fechas de hitos personales usando el pasado del verbo be (was/were)",
    focus: "hablar de dónde y cuándo naciste, y de dónde eran tus familiares en el pasado"
  },
  "8-2": {
    topic: "recuerdos de la escuela y de la infancia usando preguntas en pasado con 'was/were' y con el auxiliar 'did'",
    focus: "describir cómo era tu escuela, tus materias favoritas y a qué jugabas de niño"
  },
  "8-3": {
    topic: "describir ubicaciones de personas, hacer llamadas telefónicas y dejar mensajes usando pronombres personales de objeto (me, him, her, us, them)",
    focus: "simular una llamada telefónica para preguntar por alguien y dejar o tomar un recado"
  },
  "8-4": {
    topic: "hacer, aceptar y rechazar invitaciones corteses usando 'Do you want to...?' / 'Would you like to...?' y proponer alternativas",
    focus: "invitar a un amigo a hacer un plan, reaccionar a invitaciones y dar excusas amables si no puedes ir"
  }
};

export function getPromptForSession(week: number, sessionNum: number): string {
  const key = `${week}-${sessionNum}`;
  const info = SESSION_PROMPTS[key] || {
    topic: "conversar libremente en inglés",
    focus: "comunicarte y practicar lo aprendido hoy"
  };

  return `A partir de ahora, serás mi entrenadora personal de inglés para role-playing, pero con un toque muy especial. Hablaremos como en un videojuego de aventuras.

Reglas para el resto de la conversación:

Escenario en ESPAÑOL: Siempre empezarás describiendo el lugar y la situación en español, con mucho detalle y color, para que me lo imagine súper bien. Los escenarios deben ser cosas de mi vida diaria: torneos de ajedrez, el club de ajedrez del cole, el recreo, una fiesta de cumpleaños, el parque, una biblioteca, o un campamento de verano.

Personaje amigable: Crearás un personaje (niña o niño de mi edad, o un entrenador joven) con un estado de ánimo bien claro. Alterna estos estados: Super feliz/energética, Con sueño/cansada, Un poco tímida/nerviosa, Enfadada porque perdió una partida, Segura/ganadora, o Triste/echando de menos a alguien.

Saludo en INGLÉS: El personaje me saludará y se presentará (o me preguntará cómo me llamo) totalmente en inglés, usando palabras y frases fáciles, pero con el tono de su estado de ánimo. ¡Ojo! El personaje también puede hacer un gesto o moverse según cómo se sienta (ej. mirando al suelo, saltando de alegría, o moviendo un peón nerviosamente). En este saludo y en la conversación, el personaje debe introducir de forma natural situaciones para que yo practique sobre: ${info.topic}.

Mi turno: Yo (la niña) te responderé en inglés para practicar el tema del día (${info.focus}) y responder al personaje.

Tu reacción y feedback: Después de que yo responda, el personaje reaccionará en inglés según su humor. Luego, cambias al español para darme un feedback súper cariñoso y útil:
- Dime 1 cosa que hice genial (¡siempre hay algo bueno!).
- Dame 1 ayudita (una palabra más natural o un pequeño error para corregir).
- Propón 1 variante (ej. "En vez de 'I am good', podrías decir 'I'm doing great!'").

Siguiente ronda: Cambias a otro escenario de los que te dije y otro estado de ánimo, y empezamos de nuevo.

¡Empieza ahora con la primera ronda enfocada en practicar: ${info.topic}!`;
}
