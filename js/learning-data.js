window.ShimiData = {
    resultThresholds: [
        {
            level: 'A1',
            minScore: 0,
            maxScore: 2,
            title: 'A1 - beginner',
            titleEs: 'A1 - principiante',
            summary: 'You can recognize very simple words and phrases. You still need pictures, short examples, and guided practice.',
            summaryEs: 'Reconoces palabras y frases muy simples. Aún necesitas imágenes, ejemplos cortos y práctica guiada.',
            nextStep: 'Start the A1 module: basic words, greetings, and short sentences with pictures.',
            nextStepEs: 'Empieza el módulo A1: palabras básicas, saludos y frases cortas con imágenes.'
        },
        {
            level: 'A2',
            minScore: 3,
            maxScore: 4,
            title: 'A2 - high basic',
            titleEs: 'A2 - básico alto',
            summary: 'You can work with routines and common questions, but you still need practice with sentence order.',
            summaryEs: 'Puedes trabajar rutinas y preguntas comunes, pero aún necesitas practicar el orden de las frases.',
            nextStep: 'Continue with the A2 module: routines, common questions, and present simple.',
            nextStepEs: 'Continúa con el módulo A2: rutinas, preguntas comunes y presente simple.'
        },
        {
            level: 'B1',
            minScore: 5,
            maxScore: 6,
            title: 'B1 - intermediate',
            titleEs: 'B1 - intermedio',
            summary: 'You can understand main ideas and use context to choose grammar and connectors.',
            summaryEs: 'Comprendes ideas principales y usas contexto para elegir gramática y conectores.',
            nextStep: 'Move to the B1 module: short reading, connectors, and grammar in context.',
            nextStepEs: 'Avanza al módulo B1: lectura corta, conectores y gramática en contexto.'
        },
        {
            level: 'B2',
            minScore: 7,
            maxScore: 8,
            title: 'B2 - upper intermediate',
            titleEs: 'B2 - intermedio alto',
            summary: 'You can notice meaning in context, infer ideas, and choose more precise language.',
            summaryEs: 'Puedes notar significado en contexto, inferir ideas y elegir lenguaje más preciso.',
            nextStep: 'Work on the B2 module: nuance, contrast, and more demanding reading.',
            nextStepEs: 'Trabaja el módulo B2: matices, contraste y lectura más exigente.'
        }
    ],

    diagnosticQuestions: [
        {
            id: 'a1-vocab-apple',
            level: 'A1',
            skill: 'Basic vocabulary',
            skillEs: 'Vocabulario básico',
            prompt: 'Look at the picture. Choose the correct word.',
            promptEs: 'Mira la imagen. Elige la palabra correcta.',
            supportEs: 'Apoyo: la imagen muestra una manzana.',
            visual: '🍎',
            options: ['Apple', 'Orange', 'Bread', 'Chair'],
            correctIndex: 0,
            feedback: {
                correct: 'Correct. “Apple” names the fruit in the picture. At A1, connect picture + word + short sentence. Example: “This is an apple.”',
                incorrect: 'Incorrect. The picture shows an apple. “Orange” is another fruit, “bread” is food, and “chair” is furniture. Correct example: “This is an apple.”',
                supportEs: 'Apoyo: apple = manzana. La imagen ayuda a unir objeto + palabra.'
            }
        },
        {
            id: 'a1-greeting-morning',
            level: 'A1',
            skill: 'Everyday greetings',
            skillEs: 'Saludos cotidianos',
            prompt: 'It is 8:00 a.m. Choose the best greeting.',
            promptEs: 'Son las 8:00 a. m. Elige el mejor saludo.',
            supportEs: 'Apoyo: piensa en un saludo de la mañana.',
            visual: '🌅',
            options: ['Good night', 'Good morning', 'See you later', 'Good evening'],
            correctIndex: 1,
            feedback: {
                correct: 'Correct. We use “Good morning” to greet someone in the morning. “Good night” is usually used before sleeping. Example: “Good morning, Ana.”',
                incorrect: 'Incorrect. For the morning, use “Good morning.” “Good night” is not a morning greeting; it is usually used before sleeping. Example: “Good morning, Ana.”',
                supportEs: 'Apoyo: good morning = buenos días.'
            }
        },
        {
            id: 'a2-simple-present-routine',
            level: 'A2',
            skill: 'Present simple routines',
            skillEs: 'Rutinas en presente simple',
            prompt: 'Complete the routine: She ___ to school every day.',
            promptEs: 'Completa la rutina: She ___ to school every day.',
            supportEs: 'Apoyo: con she el verbo cambia en presente simple.',
            visual: '🎒',
            options: ['go', 'goes', 'going', 'gone'],
            correctIndex: 1,
            feedback: {
                correct: 'Correct. With he / she / it, we add -s or -es in the present simple. “Go” changes to “goes” because it ends in -o. Example: “She goes to school.”',
                incorrect: 'Incorrect. With he / she / it, we add -s or -es in the present simple. “Go” changes to “goes.” We do not say “She go”; we say “She goes to school.”',
                supportEs: 'Apoyo: con he / she / it se agrega -s o -es.'
            }
        },
        {
            id: 'a2-common-question',
            level: 'A2',
            skill: 'Common questions',
            skillEs: 'Preguntas comunes',
            prompt: 'Choose the correct question about a routine.',
            promptEs: 'Elige la pregunta correcta sobre una rutina.',
            supportEs: 'Apoyo: en preguntas con you usamos do.',
            visual: '🗓️',
            options: ['Where you work?', 'Do you work on Mondays?', 'You do work Mondays?', 'Works you Monday?'],
            correctIndex: 1,
            feedback: {
                correct: 'Correct. In present simple questions with “you,” use “do” first: Do + subject + verb. Example: “Do you work on Mondays?”',
                incorrect: 'Incorrect. Present simple questions need an auxiliary. With “you,” start with “Do”: “Do you work on Mondays?”',
                supportEs: 'Apoyo: estructura de pregunta = Do + you + verbo.'
            }
        },
        {
            id: 'b1-connector-contrast',
            level: 'B1',
            skill: 'Connectors',
            skillEs: 'Conectores',
            prompt: 'Complete the idea: I was tired, ___ I finished the homework.',
            promptEs: 'Completa la idea: I was tired, ___ I finished the homework.',
            supportEs: 'Apoyo: busca una palabra de contraste.',
            visual: '📚',
            options: ['because', 'but', 'so', 'or'],
            correctIndex: 1,
            feedback: {
                correct: 'Correct. “But” shows contrast: being tired makes finishing harder, but it still happened. “Because” gives a reason, and “so” gives a result. Example: “I was tired, but I continued.”',
                incorrect: 'Incorrect. The second idea contrasts with the first one. Being tired usually makes finishing harder, so we use “but.” Compare: “I was tired, so I rested.”',
                supportEs: 'Apoyo: but = pero; marca contraste.'
            }
        },
        {
            id: 'b1-reading-main-idea',
            level: 'B1',
            skill: 'Reading comprehension',
            skillEs: 'Comprensión de lectura',
            prompt: 'Read: “Marta takes the bus because her office is far from home.” Why does she take the bus?',
            promptEs: 'Lee la frase. ¿Por qué toma el bus?',
            supportEs: 'Apoyo: because introduce la razón.',
            visual: '🚌',
            options: ['Because she likes buses', 'Because her office is far', 'Because she works at home', 'Because it is raining'],
            correctIndex: 1,
            feedback: {
                correct: 'Correct. “Because” introduces the reason. The reason is “her office is far from home.” Look after “because” to find the cause.',
                incorrect: 'Incorrect. In the sentence, “because” introduces the reason. The reason is “her office is far from home,” not preference or weather.',
                supportEs: 'Apoyo: después de because aparece la causa.'
            }
        },
        {
            id: 'b2-meaning-nuance',
            level: 'B2',
            skill: 'Meaning nuance',
            skillEs: 'Matiz de significado',
            prompt: 'Choose the closest meaning: “The meeting was postponed.”',
            promptEs: 'Elige el significado más cercano: “The meeting was postponed.”',
            supportEs: 'Apoyo: postponed no significa cancelado para siempre.',
            visual: '🕒',
            options: ['The meeting was cancelled forever.', 'The meeting was moved to a later time.', 'The meeting started early.', 'The meeting was informal.'],
            correctIndex: 1,
            feedback: {
                correct: 'Correct. “Postponed” means moved to a later time. It does not mean cancelled forever. Example: “The exam was postponed until Friday.”',
                incorrect: 'Incorrect. “Postponed” does not mean cancelled forever. It means moved to a later time. Compare: cancelled = stopped; postponed = delayed.',
                supportEs: 'Apoyo: postponed = aplazado.'
            }
        },
        {
            id: 'b2-inference',
            level: 'B2',
            skill: 'Inference in context',
            skillEs: 'Inferencia en contexto',
            prompt: 'Read: “Although the instructions were clear, several users still made the same mistake.” What does this suggest?',
            promptEs: 'Lee la frase. ¿Qué sugiere?',
            supportEs: 'Apoyo: although marca contraste.',
            visual: '🧠',
            options: ['The instructions had no effect for everyone.', 'Some users misunderstood or ignored the instructions.', 'The mistake was impossible to avoid.', 'The instructions were not written.'],
            correctIndex: 1,
            feedback: {
                correct: 'Correct. “Although” shows contrast: the instructions were clear, but mistakes still happened. A reasonable inference is that some users misunderstood or ignored them.',
                incorrect: 'Incorrect. “Although” shows contrast, not total negation. The sentence does not say the instructions were missing or the mistake was impossible to avoid.',
                supportEs: 'Apoyo: although = aunque; une ideas en contraste.'
            }
        }
    ],

    levelModules: {
        A1: {
            title: 'A1 - beginner',
            titleEs: 'A1 - principiante',
            description: 'Basic words, greetings, and simple sentences with picture support.',
            descriptionEs: 'Palabras básicas, saludos y frases simples con apoyo visual.',
            actionLabel: 'Practice A1 module',
            exercises: [
                {
                    skill: 'Picture vocabulary',
                    skillEs: 'Vocabulario con imagen',
                    prompt: 'Choose the word that matches the picture.',
                    promptEs: 'Elige la palabra que corresponde a la imagen.',
                    supportEs: 'Apoyo: mira la imagen antes de elegir.',
                    visual: '🍞',
                    options: ['Bread', 'Book', 'Bed', 'Bird'],
                    correctIndex: 0,
                    feedback: {
                        correct: 'Correct. “Bread” means pan. At A1, picture + word helps build basic vocabulary. Example: “I eat bread.”',
                        incorrect: 'Incorrect. The picture shows bread. “Book” is libro and “bed” is cama. Correct example: “I eat bread.”',
                        supportEs: 'Apoyo: bread = pan.'
                    }
                },
                {
                    skill: 'Simple sentence',
                    skillEs: 'Frase simple',
                    prompt: 'Complete: I ___ a student.',
                    promptEs: 'Completa: I ___ a student.',
                    supportEs: 'Apoyo: con I usamos am.',
                    visual: '🎓',
                    options: ['am', 'is', 'are', 'be'],
                    correctIndex: 0,
                    feedback: {
                        correct: 'Correct. With “I,” use “am.” Basic structure: subject + be + complement. Example: “I am a student.”',
                        incorrect: 'Incorrect. The verb “to be” changes with the subject. With “I,” use “am,” not “is” or “are.” Correct form: “I am a student.”',
                        supportEs: 'Apoyo: I am = yo soy / yo estoy.'
                    }
                }
            ]
        },
        A2: {
            title: 'A2 - high basic',
            titleEs: 'A2 - básico alto',
            description: 'Routines, common questions, and present simple in context.',
            descriptionEs: 'Rutinas, preguntas comunes y presente simple en contexto.',
            actionLabel: 'Practice A2 module',
            exercises: [
                {
                    skill: 'Routines',
                    skillEs: 'Rutinas',
                    prompt: 'Complete: He ___ breakfast at 7 a.m.',
                    promptEs: 'Completa: He ___ breakfast at 7 a. m.',
                    supportEs: 'Apoyo: have cambia con he.',
                    visual: '🍳',
                    options: ['have', 'has', 'having', 'had'],
                    correctIndex: 1,
                    feedback: {
                        correct: 'Correct. With he / she / it, “have” changes to “has” in the present simple. Example: “He has breakfast at 7 a.m.”',
                        incorrect: 'Incorrect. In the present simple, he / she / it changes some verbs. “Have” becomes “has.” We do not say “He have”; we say “He has breakfast.”',
                        supportEs: 'Apoyo: he has = él tiene / él toma.'
                    }
                },
                {
                    skill: 'Common question',
                    skillEs: 'Pregunta común',
                    prompt: 'Choose the correct question.',
                    promptEs: 'Elige la pregunta correcta.',
                    supportEs: 'Apoyo: con you usamos do.',
                    visual: '💬',
                    options: ['What time do you start work?', 'What time you start work?', 'What time does you start work?', 'What time starting work?'],
                    correctIndex: 0,
                    feedback: {
                        correct: 'Correct. With “you,” use “do” in present simple questions: What time + do + you + verb. Example: “What time do you start work?”',
                        incorrect: 'Incorrect. Present simple questions need an auxiliary. With “you,” use “do”: “What time do you start work?”',
                        supportEs: 'Apoyo: pregunta = What time + do + you + verbo.'
                    }
                }
            ]
        },
        B1: {
            title: 'B1 - intermediate',
            titleEs: 'B1 - intermedio',
            description: 'Connectors, grammar in context, and short reading comprehension.',
            descriptionEs: 'Conectores, gramática contextual y comprensión de lectura corta.',
            actionLabel: 'Practice B1 module',
            exercises: [
                {
                    skill: 'Connectors',
                    skillEs: 'Conectores',
                    prompt: 'Complete: She studied hard, ___ she passed the exam.',
                    promptEs: 'Completa: She studied hard, ___ she passed the exam.',
                    supportEs: 'Apoyo: busca una consecuencia.',
                    visual: '✅',
                    options: ['but', 'because', 'so', 'although'],
                    correctIndex: 2,
                    feedback: {
                        correct: 'Correct. “So” introduces a result: she studied hard, so she passed. “Because” gives a cause, not a result. Example: “It rained, so we stayed home.”',
                        incorrect: 'Incorrect. The second part is the result of studying hard. For results, use “so.” Compare: “because” explains a cause; “so” shows a result.',
                        supportEs: 'Apoyo: so = así que / por eso.'
                    }
                },
                {
                    skill: 'Comprehension',
                    skillEs: 'Comprensión',
                    prompt: 'Read: “Tom missed the train, so he arrived late.” What happened first?',
                    promptEs: 'Lee la frase. ¿Qué ocurrió primero?',
                    supportEs: 'Apoyo: antes de so está la causa.',
                    visual: '🚆',
                    options: ['He arrived late', 'He missed the train', 'He bought a ticket', 'He went home'],
                    correctIndex: 1,
                    feedback: {
                        correct: 'Correct. “So” connects cause and result. First, he missed the train. As a result, he arrived late.',
                        incorrect: 'Incorrect. In “Tom missed the train, so he arrived late,” the cause comes before “so.” First, he missed the train.',
                        supportEs: 'Apoyo: causa primero, resultado después.'
                    }
                }
            ]
        },
        B2: {
            title: 'B2 - upper intermediate',
            titleEs: 'B2 - intermedio alto',
            description: 'Inference, nuance, and more demanding reading.',
            descriptionEs: 'Inferencia, matices de significado y lectura más exigente.',
            actionLabel: 'Practice B2 module',
            exercises: [
                {
                    skill: 'Meaning nuance',
                    skillEs: 'Matiz de significado',
                    prompt: 'Choose the closest meaning: “She barely finished on time.”',
                    promptEs: 'Elige el significado más cercano: “She barely finished on time.”',
                    supportEs: 'Apoyo: barely indica que algo ocurrió por poco.',
                    visual: '⏱️',
                    options: ['She finished very early.', 'She almost did not finish on time.', 'She did not finish.', 'She finished without effort.'],
                    correctIndex: 1,
                    feedback: {
                        correct: 'Correct. “Barely” means something happened by a very small margin. She almost did not finish on time. Example: “I barely caught the bus.”',
                        incorrect: 'Incorrect. “Barely” does not mean easily or early. It shows a limit: something happened by very little. “She barely finished on time” = she almost did not finish on time.',
                        supportEs: 'Apoyo: barely = apenas / por poco.'
                    }
                },
                {
                    skill: 'Inference',
                    skillEs: 'Inferencia',
                    prompt: 'Read: “Despite the high price, the course sold out in two days.” What can you infer?',
                    promptEs: 'Lee la frase. ¿Qué puedes inferir?',
                    supportEs: 'Apoyo: despite marca contraste.',
                    visual: '📈',
                    options: ['Nobody wanted the course', 'The course was attractive despite being expensive', 'The course was free', 'The price stopped all sales'],
                    correctIndex: 1,
                    feedback: {
                        correct: 'Correct. “Despite” shows contrast: the price was high, but the course sold out fast. This suggests strong interest.',
                        incorrect: 'Incorrect. “Despite” shows contrast. The sentence says the course was expensive, but it sold out. That suggests high interest, not low demand.',
                        supportEs: 'Apoyo: despite = a pesar de.'
                    }
                }
            ]
        }
    }
};

window.ShimiData.questionsByLevel = window.ShimiData.diagnosticQuestions.reduce((groups, question) => {
    groups[question.level] = groups[question.level] || [];
    groups[question.level].push(question);
    return groups;
}, {});
