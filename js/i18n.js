window.ShimiI18n = (() => {
    const dictionaries = {
        en: {
            appReady: 'Ready to learn English?',
            start: 'Start',
            onboardingStep: 'Step {current} of 3',
            onboarding1Title: 'First, you will practice',
            onboarding1Text: 'Shimi starts with short activities, pictures, examples, and low-pressure answers.',
            onboarding2Title: 'You get feedback right away',
            onboarding2Text: 'After each answer, you see what happened, why it happened, and what to do next.',
            onboarding3Title: 'Then choose your path',
            onboarding3Text: 'Take a short placement test or start from A1 if you want to learn from the beginning.',
            next: 'Next',
            back: 'Back',
            takePlacement: 'Take placement test',
            startA1: 'Start from A1',
            chooseStart: 'Choose your start:',
            chooseStartText: 'Take a placement test or start from A1 without a test.',
            intro: 'Introduction',
            guidedPhrases: 'Guided phrases',
            placementAfterPractice: 'Placement test',
            activeModule: 'Module {level} active',
            tripsLocked: 'Trips',
            workLocked: 'Work',
            home: 'Home',
            practice: 'Practice',
            league: 'League',
            shop: 'Shop',
            exitPractice: 'Exit practice',
            practiceOneProgress: 'Guided practice 1 of 2 · placement test is optional',
            vocabVisual: 'Vocabulary with picture support',
            appleQuestion: 'How do you say “manzana” in English?',
            appleExample: 'Example: I eat an apple.',
            appleExampleSupport: 'Support: “apple” names the fruit in the picture.',
            check: 'Check',
            tryAgain: 'Try again',
            continuePractice2: 'Continue practice 2',
            correct: 'Correct',
            incorrect: 'Incorrect',
            action: 'Action:',
            nextLabel: 'Next:',
            backToLevels: 'Back to levels',
            practiceTwoProgress: 'Guided practice 2 of 2 · placement test is optional',
            completeSentence: 'Complete the sentence',
            guidedExample: 'Guided example:',
            selectAnswer: 'Choose one answer',
            reviewTryAgain: 'Review and try again',
            placementTitle: 'Placement test A1-B2',
            optionalPlacement: 'Optional placement',
            cancelPlacement: 'Cancel placement test',
            placementIntro: 'This short test checks vocabulary, grammar, reading, and common phrases. You can skip it and start from A1.',
            placementRule1: '8 short questions from A1 to B2.',
            placementRule2: 'Each answer gives a short explanation.',
            placementRule3: 'At the end, Shimi unlocks the right module for you.',
            startPlacement: 'Start placement test',
            placementNotStarted: 'Placement test · not started',
            placementProgress: 'Placement test · {done} of {total} answered',
            questionCount: 'Question {current} of {total} · {level}',
            seeLevel: 'See my level',
            useRule: 'use the rule before moving on.',
            goNextQuestion: 'go to the next question.',
            levelResult: 'Your level result',
            pendingResult: 'Result pending.',
            pendingNext: 'Next step pending.',
            goAssignedModule: 'Go to my module',
            levelMap: 'Level map',
            scoreCorrect: '{score}/{total} correct',
            reviewAnswer: 'Your answer: {answer}',
            noAnswer: 'No answer',
            goModule: 'Go to module {level}',
            levelsTitle: 'Your learning path',
            levelsNote: '<strong>Start:</strong> you can start from A1 or take a placement test to find your level.',
            availableModule: '<strong>Available module:</strong> {title}. You can start from A1 or use placement to recalculate your level.',
            progressPending: 'Placement pending',
            progressModules: '{progress}% of modules completed',
            guidedPracticeBack: 'Back to guided practice',
            recalcLevel: 'Recalculate my level',
            available: 'Available',
            inProgress: 'In progress',
            completed: 'Completed',
            locked: 'Locked',
            saveExit: 'Save and exit',
            assignedModule: 'Assigned module',
            moduleDone: 'Module complete',
            moduleDoneText: 'You completed the assigned block.',
            moduleNext: 'Next step: check the level map.',
            finishModule: 'Finish module',
            viewUpdatedMap: 'View updated map',
            moduleUnavailable: 'Module not available',
            placementRequired: 'Placement pending',
            unavailableWithLevel: 'Your active level is {level}. This module is not available yet.',
            unavailableWithoutLevel: 'Start from A1 or take the placement test first.',
            nextMapAssigned: 'Next step: go back to the map and open your assigned module.',
            nextPlacement: 'Next step: take the placement test to unlock A1, A2, B1, or B2.',
            moduleScore: '{level} block result: {score}/{total} correct answers.',
            modulePerfectNext: 'Next step: check the map and continue when new content is available.',
            moduleReviewNext: 'Next step: review the explanations before retaking placement.',
            settings: 'Settings',
            backHome: 'Back home',
            saveBackHome: 'Save and go home',
            settingsWarning: 'Changing your preferences can slightly adjust your learning path.',
            nickname: 'Name or nickname',
            age: 'Age',
            dailyTime: 'Daily time',
            dailyTimeQuestion: 'How much time can you practice each day?'
        },
        es: {
            appReady: '¿Listo/a para aprender inglés?',
            start: 'Empezar',
            onboardingStep: 'Paso {current} de 3',
            onboarding1Title: 'Primero vas a practicar',
            onboarding1Text: 'Shimi empieza con actividades cortas, imágenes, ejemplos y respuestas sin presión.',
            onboarding2Title: 'Recibes feedback al momento',
            onboarding2Text: 'Después de cada respuesta ves qué ocurrió, por qué ocurrió y qué hacer después.',
            onboarding3Title: 'Luego eliges tu ruta',
            onboarding3Text: 'Haz una prueba corta de nivel o empieza desde A1 si quieres aprender desde el inicio.',
            next: 'Siguiente',
            back: 'Atrás',
            takePlacement: 'Hacer diagnóstico de nivel',
            startA1: 'Empezar desde A1',
            chooseStart: 'Elige tu inicio:',
            chooseStartText: 'Haz diagnóstico o empieza desde A1 sin evaluarte.',
            intro: 'Introducción',
            guidedPhrases: 'Frases guiadas',
            placementAfterPractice: 'Diagnóstico de nivel',
            activeModule: 'Módulo {level} activo',
            tripsLocked: 'Viajes',
            workLocked: 'Trabajo',
            home: 'Inicio',
            practice: 'Práctica',
            league: 'Liga',
            shop: 'Tienda',
            exitPractice: 'Salir de la práctica',
            practiceOneProgress: 'Práctica guiada 1 de 2 · el diagnóstico es opcional',
            vocabVisual: 'Vocabulario con apoyo visual',
            appleQuestion: '¿Cómo se dice “manzana” en inglés?',
            appleExample: 'Ejemplo: I eat an apple.',
            appleExampleSupport: 'Apoyo: “apple” nombra la fruta de la imagen.',
            check: 'Comprobar',
            tryAgain: 'Intentar de nuevo',
            continuePractice2: 'Continuar práctica 2',
            correct: 'Correcto',
            incorrect: 'Incorrecto',
            action: 'Acción:',
            nextLabel: 'Siguiente:',
            backToLevels: 'Volver a niveles',
            practiceTwoProgress: 'Práctica guiada 2 de 2 · el diagnóstico es opcional',
            completeSentence: 'Completa la frase',
            guidedExample: 'Ejemplo guiado:',
            selectAnswer: 'Elige una respuesta',
            reviewTryAgain: 'Revisar e intentar de nuevo',
            placementTitle: 'Diagnóstico A1-B2',
            optionalPlacement: 'Diagnóstico opcional',
            cancelPlacement: 'Cancelar diagnóstico',
            placementIntro: 'Esta prueba corta revisa vocabulario, gramática, lectura y frases comunes. Puedes saltarla y empezar desde A1.',
            placementRule1: '8 preguntas cortas desde A1 hasta B2.',
            placementRule2: 'Cada respuesta da una explicación breve.',
            placementRule3: 'Al final, Shimi desbloquea el módulo adecuado.',
            startPlacement: 'Iniciar diagnóstico',
            placementNotStarted: 'Diagnóstico · aún no iniciado',
            placementProgress: 'Diagnóstico en curso · {done} de {total} respondidas',
            questionCount: 'Pregunta {current} de {total} · {level}',
            seeLevel: 'Ver mi nivel',
            useRule: 'usa la regla antes de avanzar.',
            goNextQuestion: 'avanza a la siguiente pregunta.',
            levelResult: 'Resultado de nivel',
            pendingResult: 'Resultado pendiente.',
            pendingNext: 'Siguiente paso pendiente.',
            goAssignedModule: 'Ir a mi módulo',
            levelMap: 'Mapa de niveles',
            scoreCorrect: '{score}/{total} correctas',
            reviewAnswer: 'Tu respuesta: {answer}',
            noAnswer: 'Sin respuesta',
            goModule: 'Ir al módulo {level}',
            levelsTitle: 'Tu ruta de aprendizaje',
            levelsNote: '<strong>Inicio:</strong> puedes empezar desde A1 o hacer diagnóstico para encontrar tu nivel.',
            availableModule: '<strong>Módulo disponible:</strong> {title}. Puedes empezar desde A1 o usar diagnóstico para recalcular tu nivel.',
            progressPending: 'Diagnóstico pendiente',
            progressModules: '{progress}% de módulos completados',
            guidedPracticeBack: 'Volver a práctica guiada',
            recalcLevel: 'Recalcular mi nivel',
            available: 'Disponible',
            inProgress: 'En progreso',
            completed: 'Completado',
            locked: 'Bloqueado',
            saveExit: 'Guardar y salir',
            assignedModule: 'Módulo asignado',
            moduleDone: 'Módulo completado',
            moduleDoneText: 'Completaste el bloque asignado.',
            moduleNext: 'Siguiente paso: revisa el mapa de niveles.',
            finishModule: 'Finalizar módulo',
            viewUpdatedMap: 'Ver mapa actualizado',
            moduleUnavailable: 'Módulo no disponible',
            placementRequired: 'Diagnóstico pendiente',
            unavailableWithLevel: 'Tu nivel activo es {level}. Este módulo aún no está habilitado.',
            unavailableWithoutLevel: 'Empieza desde A1 o haz primero el diagnóstico.',
            nextMapAssigned: 'Siguiente paso: vuelve al mapa y entra a tu módulo asignado.',
            nextPlacement: 'Siguiente paso: realiza el diagnóstico para activar A1, A2, B1 o B2.',
            moduleScore: 'Resultado del bloque {level}: {score}/{total} respuestas correctas.',
            modulePerfectNext: 'Siguiente paso: revisa el mapa y continúa cuando haya nuevo contenido.',
            moduleReviewNext: 'Siguiente paso: repasa las explicaciones antes de repetir el diagnóstico.',
            settings: 'Configuración',
            backHome: 'Volver al inicio',
            saveBackHome: 'Guardar y volver al inicio',
            settingsWarning: 'Cambiar tus preferencias puede ajustar levemente tu ruta de aprendizaje.',
            nickname: 'Nombre o apodo',
            age: 'Edad',
            dailyTime: 'Tiempo diario',
            dailyTimeQuestion: '¿Cuánto tiempo puedes practicar cada día?'
        }
    };

    function format(template, values = {}) {
        return String(template || '').replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
    }

    function getLanguage() {
        return localStorage.getItem('shimiLanguage') || 'en';
    }

    function t(key, values = {}) {
        const lang = getLanguage();
        return format((dictionaries[lang] && dictionaries[lang][key]) || dictionaries.en[key] || key, values);
    }

    function applyLanguage() {
        const lang = getLanguage();
        document.documentElement.lang = lang;
        document.body.dataset.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            el.textContent = t(el.dataset.i18n, el.dataset);
        });
        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            el.innerHTML = t(el.dataset.i18nHtml, el.dataset);
        });
        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            el.setAttribute('aria-label', t(el.dataset.i18nAria, el.dataset));
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder, el.dataset));
        });
        document.querySelectorAll('[data-support-es]').forEach((el) => {
            el.hidden = lang !== 'en';
        });
        const languageLabel = document.querySelector('[data-language-switcher] label');
        if (languageLabel) {
            languageLabel.textContent = lang === 'es' ? 'Idioma' : 'Language';
        }
    }

    function setLanguage(lang) {
        localStorage.setItem('shimiLanguage', lang);
        applyLanguage();
        window.dispatchEvent(new CustomEvent('shimi-language-change', { detail: { lang } }));
    }

    function mountSwitcher() {
        if (document.querySelector('[data-language-switcher]')) return;
        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        switcher.dataset.languageSwitcher = 'true';
        switcher.innerHTML = `
            <label for="languageSelect">Language</label>
            <select id="languageSelect" aria-label="Language">
                <option value="en">English</option>
                <option value="es">Español</option>
            </select>
        `;
        document.body.prepend(switcher);
        const select = switcher.querySelector('select');
        select.value = getLanguage();
        select.addEventListener('change', () => setLanguage(select.value));
    }

    document.addEventListener('DOMContentLoaded', () => {
        mountSwitcher();
        applyLanguage();
    });

    return { t, getLanguage, setLanguage, applyLanguage };
})();
