// Lógica de la Aplicación y Controlador de Estado - SimpleFinance
import { personalFinanceLessons, investmentLessons, investorProfileQuiz, glossary } from './lessons.js';

// 1. ESTADO GLOBAL DE LA APLICACIÓN
const DEFAULT_STATE = {
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  completedLessons: [], // list of completed lesson IDs
  activePath: 'pf',     // 'pf' (personal finance) or 'inv' (investments)
  investorProfile: null // null, 'conservative', 'moderate', or 'risky'
};

let state = { ...DEFAULT_STATE };

// 2. ELEMENTOS DEL DOM
const dom = {
  // Navegación
  navPf: document.getElementById('nav-pf'),
  navInv: document.getElementById('nav-inv'),
  glossaryBtn: document.getElementById('glossary-btn'),
  mobileGlossaryBtn: document.getElementById('mobile-glossary-btn'),
  headerResetBtn: document.getElementById('header-reset-btn'),
  
  // Vistas de Caminos
  pfPathView: document.getElementById('pf-path-view'),
  invPathView: document.getElementById('inv-path-view'),
  pfTimeline: document.getElementById('pf-timeline'),
  invTimeline: document.getElementById('inv-timeline'),
  
  // Header y Estadísticas
  pathTitle: document.getElementById('path-title'),
  pathSubtitle: document.getElementById('path-subtitle'),
  streakVal: document.getElementById('stat-streak-val'),
  xpVal: document.getElementById('stat-xp-val'),
  profileBadge: document.getElementById('stat-profile-badge'),
  profileVal: document.getElementById('stat-profile-val'),
  
  // Modales
  lessonModal: document.getElementById('lesson-modal'),
  lessonModalInner: document.getElementById('lesson-modal-inner'),
  closeLessonModal: document.getElementById('close-lesson-modal'),
  
  glossaryModal: document.getElementById('glossary-modal'),
  closeGlossaryModal: document.getElementById('close-glossary-modal'),
  glossarySearch: document.getElementById('glossary-search'),
  glossaryGrid: document.getElementById('glossary-grid-container'),
  glossaryTabs: document.querySelectorAll('.glossary-tab-btn')
};

// 3. INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initNavigation();
  initGlossary();
  renderActivePath();
  checkDailyStreak();
});

// 4. FUNCIONES DE PERSISTENCIA Y ESTADO
function loadState() {
  const saved = localStorage.getItem('simplefinance_state');
  if (saved) {
    try {
      state = { ...DEFAULT_STATE, ...JSON.parse(saved) };
    } catch (e) {
      console.error("Error al cargar estado, reiniciando...", e);
      state = { ...DEFAULT_STATE };
    }
  }
  updateStatsHeader();
}

function saveState() {
  localStorage.setItem('simplefinance_state', JSON.stringify(state));
  updateStatsHeader();
}

function updateStatsHeader() {
  dom.xpVal.textContent = state.xp;
  dom.streakVal.textContent = state.streak;
  
  if (state.investorProfile) {
    dom.profileBadge.style.display = 'flex';
    dom.profileBadge.className = `stat-badge level ${state.investorProfile}`;
    
    let text = 'Conservador';
    if (state.investorProfile === 'moderate') text = 'Moderado';
    if (state.investorProfile === 'risky') text = 'Arriesgado';
    
    dom.profileVal.textContent = text;
  } else {
    dom.profileBadge.style.display = 'none';
  }
}

// Verifica si el usuario jugó ayer para mantener la racha, o si pasó más tiempo para resetearla.
function checkDailyStreak() {
  if (!state.lastActiveDate) return;
  
  const today = new Date().setHours(0, 0, 0, 0);
  const lastActive = new Date(state.lastActiveDate).setHours(0, 0, 0, 0);
  const diffTime = Math.abs(today - lastActive);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays > 1) {
    state.streak = 0; // Se perdió la racha
    saveState();
  }
}

function awardXP(amount) {
  state.xp += amount;
  
  // Incrementar o asegurar racha hoy
  const today = new Date().toDateString();
  const lastActive = state.lastActiveDate ? new Date(state.lastActiveDate).toDateString() : null;
  
  if (lastActive !== today) {
    state.streak += 1;
    state.lastActiveDate = new Date().toISOString();
  }
  
  saveState();
}

// 5. NAVEGACIÓN Y PESTAÑAS
function initNavigation() {
  // Cambio a Finanzas
  dom.navPf.addEventListener('click', () => {
    state.activePath = 'pf';
    saveState();
    renderActivePath();
  });
  
  // Cambio a Inversiones (Habilitado en todo momento por deseo del usuario)
  dom.navInv.addEventListener('click', () => {
    state.activePath = 'inv';
    saveState();
    renderActivePath();
  });
  
  // Cierre de modales
  dom.closeLessonModal.addEventListener('click', () => {
    dom.lessonModal.close();
  });
  
  dom.closeGlossaryModal.addEventListener('click', () => {
    dom.glossaryModal.close();
  });
  
  // Reset de Progreso (Soporta el botón responsive del header)
  const performReset = () => {
    if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso? Se borrarán tus puntos (XP), racha y lecciones completadas.')) {
      state = { ...DEFAULT_STATE };
      saveState();
      
      // Limpiar explícitamente ambas líneas de tiempo para restaurar los colores default
      dom.pfTimeline.innerHTML = '';
      dom.invTimeline.innerHTML = '';
      
      // Volver a renderizar
      renderActivePath();
      alert('Progreso reiniciado exitosamente.');
    }
  };
  
  if (dom.headerResetBtn) {
    dom.headerResetBtn.addEventListener('click', performReset);
  }
}

function renderActivePath() {
  // Limpiar estados de menú activos
  dom.navPf.classList.remove('active');
  dom.navInv.classList.remove('active');
  dom.pfPathView.classList.remove('active');
  dom.invPathView.classList.remove('active');
  
  if (state.activePath === 'pf') {
    dom.navPf.classList.add('active');
    dom.pfPathView.classList.add('active');
    dom.pathTitle.textContent = "Finanzas Personales";
    dom.pathSubtitle.textContent = "Aprende los métodos esenciales de ahorro y supera las deudas.";
    renderTimeline('pf', personalFinanceLessons, dom.pfTimeline);
  } else {
    dom.navInv.classList.add('active');
    dom.invPathView.classList.add('active');
    dom.pathTitle.textContent = "Camino de Inversiones";
    dom.pathSubtitle.textContent = "Multiplica tus ahorros entendiendo los activos de la Bolsa argentina.";
    renderTimeline('inv', investmentLessons, dom.invTimeline);
  }
}

// 6. RENDERIZADOR DE LÍNEA DE NODOS (CAMINO DUOLINGO)
function renderTimeline(type, lessonsList, container) {
  container.innerHTML = '';
  
  lessonsList.forEach((lesson, index) => {
    const nodeWrapper = document.createElement('div');
    nodeWrapper.className = 'path-node-wrapper';
    
    // Determinar estado del nodo
    let status = 'locked'; // locked, active, completed
    
    if (type === 'pf') {
      // Regla de desbloqueo secuencial para Finanzas
      if (state.completedLessons.includes(lesson.id)) {
        status = 'completed';
      } else if (index === 0 || state.completedLessons.includes(lessonsList[index - 1].id)) {
        status = 'active';
      }
    } else {
      // Regla para Inversiones (Habilitado en todo momento por defecto la primera lección / perfil)
      if (state.completedLessons.includes(lesson.id)) {
        status = 'completed';
      } else if (index === 0) {
        status = 'active'; // El test de perfil está activo siempre
      } else {
        // Los siguientes nodos se desbloquean secuencialmente si se completó el anterior
        const prevLessonId = lessonsList[index - 1].id;
        if (state.completedLessons.includes(prevLessonId)) {
          status = 'active';
        }
      }
    }
    
    // Crear botón del nodo
    const btn = document.createElement('button');
    btn.className = `node-btn ${status}`;
    btn.setAttribute('aria-label', `${lesson.title} - Estado: ${status}`);
    
    // Icono o Emoji del nodo
    if (lesson.isProfileQuiz) {
      btn.innerHTML = `<span class="node-emoji">👤</span>`;
    } else if (lesson.isTest) {
      btn.innerHTML = `<span class="node-emoji">🎓</span>`;
    } else {
      // Iconos representativos sencillos por lección
      let emoji = '📚';
      if (lesson.id === 'pf_1') emoji = '🍰'; // Torta 50/30/20
      if (lesson.id === 'pf_2') emoji = '🐷'; // Ahorro 10%
      if (lesson.id === 'pf_3') emoji = '📈'; // 1% mensual
      if (lesson.id === 'pf_4') emoji = '💼'; // Ahorra lo que puedas
      if (lesson.id === 'pf_5') emoji = '💳'; // Tarjeta de crédito
      if (lesson.id === 'pf_6') emoji = '❄️'; // Bola de nieve/avalancha
      
      if (lesson.id === 'inv_2') emoji = '🏦'; // Plazo Fijo
      if (lesson.id === 'inv_3') emoji = '📜'; // Lecaps
      if (lesson.id === 'inv_4') emoji = '🤝'; // FCI
      if (lesson.id === 'inv_5') emoji = '💵'; // ONs
      if (lesson.id === 'inv_6') emoji = '🍏'; // Cedears
      if (lesson.id === 'inv_7') emoji = '🇦🇷'; // Acciones
      
      btn.innerHTML = `<span class="node-emoji">${emoji}</span>`;
    }
    
    // Etiqueta corta abajo
    const label = document.createElement('div');
    label.className = 'node-label';
    label.textContent = lesson.isProfileQuiz ? 'Perfil' : (lesson.isTest ? 'Examen' : `Nivel ${index}`);
    
    // Tooltip emergente
    const tooltip = document.createElement('div');
    tooltip.className = 'node-tooltip';
    
    let actionText = '¡Haz click para jugar!';
    if (status === 'locked') actionText = 'Nivel Bloqueado';
    if (status === 'completed') actionText = '¡Completado! Repasar';
    
    let riskTagHtml = '';
    if (lesson.risk) {
      riskTagHtml = `<div class="risk-tag ${lesson.riskClass}">${lesson.risk}</div>`;
    }
    
    tooltip.innerHTML = `
      <div class="node-tooltip-title">${lesson.title}</div>
      <div class="node-tooltip-desc">${lesson.shortDesc}</div>
      ${riskTagHtml}
      <div class="node-tooltip-action" style="margin-top: 0.5rem;">${actionText}</div>
    `;
    
    // Agregar interactividad si no está bloqueado
    if (status !== 'locked') {
      btn.addEventListener('click', () => {
        openLesson(lesson);
      });
    }
    
    nodeWrapper.appendChild(btn);
    nodeWrapper.appendChild(label);
    nodeWrapper.appendChild(tooltip);
    
    container.appendChild(nodeWrapper);
  });
}

// 7. MOTOR DE LECCIONES (LESSON SYSTEM)
let activeLesson = null;
let currentSlideIndex = 0;
let isQuestionPhase = false;
let currentQuestionIndex = 0;
let selectedOptionIndex = null;
let quizScore = 0; // Para el test de perfil o exámenes finales

// Respuestas acumuladas para el perfil
let profileAnswers = [];

function openLesson(lesson) {
  activeLesson = lesson;
  currentSlideIndex = 0;
  isQuestionPhase = false;
  currentQuestionIndex = 0;
  selectedOptionIndex = null;
  quizScore = 0;
  profileAnswers = [];
  
  renderLessonStep();
  dom.lessonModal.showModal();
}

function renderLessonStep() {
  dom.lessonModalInner.innerHTML = '';
  
  if (activeLesson.isProfileQuiz) {
    // FLUJO ESPECIAL: Test de Perfil del Inversor
    renderProfileQuizStep();
    return;
  }
  
  // FLUJO COMÚN: Slides de Teoría, luego Preguntas de Cuestionario, luego Celebración
  const totalSlides = activeLesson.slides.length;
  const totalQuestions = activeLesson.questions ? activeLesson.questions.length : 0;
  const totalSteps = totalSlides + totalQuestions;
  
  let progressPercentage = 0;
  
  if (!isQuestionPhase) {
    // FASE DE TEORÍA: Mostrando slides de lectura
    progressPercentage = ((currentSlideIndex) / totalSteps) * 100;
    renderProgress(progressPercentage);
    
    const slide = activeLesson.slides[currentSlideIndex];
    
    const layout = document.createElement('div');
    layout.className = 'lesson-layout';
    
    const textPanel = document.createElement('div');
    textPanel.className = 'lesson-text-panel';
    textPanel.innerHTML = `
      <h3 class="lesson-slide-title">${slide.title}</h3>
      <p class="lesson-slide-text">${formatMarkdownText(slide.text)}</p>
    `;
    
    const visualPanel = document.createElement('div');
    visualPanel.className = 'lesson-visual-panel';
    visualPanel.appendChild(createVisualDiagram(slide.visualType));
    
    layout.appendChild(textPanel);
    layout.appendChild(visualPanel);
    dom.lessonModalInner.appendChild(layout);
    
    // Botón de continuar teoría
    const actions = document.createElement('div');
    actions.className = 'lesson-footer-actions';
    const nextBtn = document.createElement('button');
    nextBtn.className = 'action-btn';
    nextBtn.textContent = (currentSlideIndex === totalSlides - 1) ? 'Comenzar Desafío' : 'Siguiente';
    nextBtn.addEventListener('click', () => {
      if (currentSlideIndex < totalSlides - 1) {
        currentSlideIndex++;
        renderLessonStep();
      } else if (totalQuestions > 0) {
        isQuestionPhase = true;
        currentQuestionIndex = 0;
        renderLessonStep();
      } else {
        // Lección sin preguntas (caso atípico)
        completeLesson();
      }
    });
    
    actions.appendChild(nextBtn);
    dom.lessonModalInner.appendChild(actions);
    
  } else {
    // FASE DE PREGUNTAS
    progressPercentage = ((totalSlides + currentQuestionIndex) / totalSteps) * 100;
    renderProgress(progressPercentage);
    
    const question = activeLesson.questions[currentQuestionIndex];
    
    const layout = document.createElement('div');
    layout.className = 'lesson-layout';
    
    const quizPanel = document.createElement('div');
    quizPanel.className = 'lesson-quiz-panel';
    
    const qTitle = document.createElement('h4');
    qTitle.className = 'quiz-question-title';
    qTitle.textContent = question.questionText;
    quizPanel.appendChild(qTitle);
    
    const optionsList = document.createElement('div');
    optionsList.className = 'quiz-options-list';
    
    question.options.forEach((opt, idx) => {
      const optBtn = document.createElement('button');
      optBtn.className = `quiz-option-btn ${selectedOptionIndex === idx ? 'selected' : ''}`;
      optBtn.textContent = opt;
      optBtn.addEventListener('click', () => {
        // Deseleccionar anteriores
        document.querySelectorAll('.quiz-option-btn').forEach(btn => btn.classList.remove('selected'));
        optBtn.classList.add('selected');
        selectedOptionIndex = idx;
        
        // Habilitar botón de comprobar
        checkBtn.disabled = false;
        checkBtn.style.opacity = 1;
      });
      optionsList.appendChild(optBtn);
    });
    
    quizPanel.appendChild(optionsList);
    
    // Panel visual derecho estático durante preguntas
    const visualPanel = document.createElement('div');
    visualPanel.className = 'lesson-visual-panel';
    visualPanel.appendChild(createVisualDiagram(activeLesson.slides[0].visualType)); // Muestra el primer diagrama como referencia
    
    layout.appendChild(quizPanel);
    layout.appendChild(visualPanel);
    dom.lessonModalInner.appendChild(layout);
    
    // Footer de validación
    const actions = document.createElement('div');
    actions.className = 'lesson-footer-actions';
    
    const checkBtn = document.createElement('button');
    checkBtn.className = 'action-btn';
    checkBtn.textContent = 'Comprobar';
    checkBtn.disabled = selectedOptionIndex === null;
    if (selectedOptionIndex === null) checkBtn.style.opacity = 0.5;
    
    checkBtn.addEventListener('click', () => {
      // Validar respuesta
      const isCorrect = (selectedOptionIndex === question.correctIndex);
      
      // Aplicar recompensa/penalización de XP de inmediato
      if (isCorrect) {
        awardXP(10); // +10 XP por respuesta correcta
      } else {
        // Restar 5 XP por respuesta incorrecta (no bajar de 0)
        state.xp = Math.max(0, state.xp - 5);
        saveState();
      }
      
      // Mostrar panel de feedback
      renderQuizFeedback(isCorrect, question.explanation, () => {
        // Callback para continuar tras ver el feedback
        selectedOptionIndex = null;
        if (currentQuestionIndex < totalQuestions - 1) {
          currentQuestionIndex++;
          renderLessonStep();
        } else {
          completeLesson();
        }
      });
    });
    
    actions.appendChild(checkBtn);
    dom.lessonModalInner.appendChild(actions);
  }
}

function renderProgress(percentage) {
  const container = document.createElement('div');
  container.className = 'lesson-progress-container';
  
  const bar = document.createElement('div');
  bar.className = 'lesson-progress-bar';
  bar.style.width = `${percentage}%`;
  
  container.appendChild(bar);
  dom.lessonModalInner.prepend(container);
}

// Reemplaza negritas sencillas en el texto format
function formatMarkdownText(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

// 8. GENERADOR DE DIAGRAMAS CSS DE ALTA CALIDAD
function createVisualDiagram(type) {
  const container = document.createElement('div');
  container.className = 'visual-card-wrapper';
  
  if (type === 'pie-chart') {
    container.innerHTML = `
      <span class="visual-title">Distribución de Ingresos</span>
      <div class="pie-chart-503020"></div>
      <div style="display: flex; gap: 0.25rem 0.75rem; justify-content: center; flex-wrap: wrap; font-size: 0.7rem; margin-top: 0.5rem; width: 100%;">
        <span style="color: var(--primary); white-space: nowrap;">● 50% Necesidades</span>
        <span style="color: var(--color-moderate); white-space: nowrap;">● 30% Deseos</span>
        <span style="color: var(--color-conservative); white-space: nowrap;">● 20% Ahorro</span>
      </div>
    `;
  } else if (type === 'needs-card') {
    container.innerHTML = `
      <div class="visual-info-card needs">
        <span class="visual-title" style="color: var(--primary)">50% - Necesidades</span>
        <div class="card-amount">$250K</div>
        <p style="font-size: 0.75rem; color: var(--text-secondary)">Alquiler, Servicios, Comida, Transporte. Indispensables para vivir.</p>
      </div>
    `;
  } else if (type === 'wants-card') {
    container.innerHTML = `
      <div class="visual-info-card wants">
        <span class="visual-title" style="color: var(--color-moderate)">30% - Deseos</span>
        <div class="card-amount">$150K</div>
        <p style="font-size: 0.75rem; color: var(--text-secondary)">Salidas, Suscripciones, Ropa de moda, Hobbies. Disfrute hoy.</p>
      </div>
    `;
  } else if (type === 'savings-card') {
    container.innerHTML = `
      <div class="visual-info-card savings">
        <span class="visual-title" style="color: var(--color-conservative)">20% - Ahorro futuro</span>
        <div class="card-amount">$100K</div>
        <p style="font-size: 0.75rem; color: var(--text-secondary)">Fondo de emergencia, Inversiones en bolsa, Metas a largo plazo.</p>
      </div>
    `;
  } else if (type === 'piggy-bank') {
    container.innerHTML = `
      <div class="visual-piggy">🐷🪙</div>
      <span class="visual-title" style="color: var(--color-conservative); font-weight: 700;">¡Págate a ti primero!</span>
    `;
  } else if (type === 'equation-visual') {
    container.innerHTML = `
      <div style="font-family: var(--font-title); text-align: center; padding: 1rem;">
        <div style="text-decoration: line-through; opacity: 0.4; font-size: 1.1rem; margin-bottom: 0.5rem;">Sueldo - Gastos = Ahorro ($0)</div>
        <div style="font-size: 1.5rem; font-weight: 800; color: var(--color-conservative); background: rgba(0,230,118,0.06); padding: 0.75rem 1.5rem; border-radius: 12px; border: 1px dashed var(--color-conservative);">Sueldo - Ahorro (10%) = Gastos</div>
      </div>
    `;
  } else if (type === 'wallet-visual') {
    container.innerHTML = `
      <div style="font-size: 4rem;">💼✨</div>
      <span class="visual-title">Vives libre de estrés con el 90%</span>
    `;
  } else if (type === 'habit-visual') {
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 0.5rem; width: 200px;">
        <div style="font-size: 0.75rem; color: var(--text-secondary); display: flex; justify-content: space-between;">
          <span>Hábito del Ahorro</span>
          <span>100%</span>
        </div>
        <div style="width: 100%; height: 12px; background: var(--bg-tertiary); border-radius: 6px; overflow: hidden; border: 1px solid var(--glass-border);">
          <div style="height: 100%; width: 95%; background: linear-gradient(90deg, var(--primary), var(--color-conservative)); border-radius: 6px; box-shadow: 0 0 10px rgba(0,230,118,0.4)"></div>
        </div>
        <span style="font-size: 0.75rem; text-align: center; color: var(--color-conservative); font-weight: 600; margin-top: 0.25rem;">Hábito > Monto</span>
      </div>
    `;
  } else if (type === 'step-1') {
    container.innerHTML = `
      <div style="font-family: var(--font-title); text-align: center; padding: 1.25rem; border: 1px solid var(--glass-border); background: var(--bg-secondary); border-radius: 16px; width: 180px;">
        <div style="font-size: 0.8rem; color: var(--text-secondary)">ENERO (1%)</div>
        <div style="font-size: 1.8rem; font-weight: 800; color: #fff; margin: 0.25rem 0;">$4.000</div>
        <div style="font-size: 0.7rem; color: var(--color-conservative)">¡Fácil y amigable!</div>
      </div>
    `;
  } else if (type === 'step-up') {
    container.innerHTML = `
      <div style="display: flex; gap: 0.5rem; align-items: flex-end; height: 120px;">
        <div style="width: 35px; height: 20px; background: var(--bg-tertiary); border-radius: 6px; display: flex; justify-content: center; align-items: center; font-size: 0.65rem; color: var(--text-secondary);">1%</div>
        <div style="width: 35px; height: 40px; background: var(--primary-light); border: 1px solid var(--primary); border-radius: 6px; display: flex; justify-content: center; align-items: center; font-size: 0.65rem; color: var(--primary);">2%</div>
        <div style="width: 35px; height: 60px; background: var(--primary-light); border: 1px solid var(--primary); border-radius: 6px; display: flex; justify-content: center; align-items: center; font-size: 0.65rem; color: var(--primary);">3%</div>
        <div style="width: 35px; height: 90px; background: rgba(0, 230, 118, 0.12); border: 1px solid var(--color-conservative); border-radius: 6px; display: flex; justify-content: center; align-items: center; font-size: 0.65rem; color: var(--color-conservative); font-weight: 700; box-shadow: 0 0 10px rgba(0,230,118,0.2)">...</div>
      </div>
      <span class="visual-title" style="margin-top: 0.5rem;">Crecimiento imperceptible</span>
    `;
  } else if (type === 'progress-chart') {
    container.innerHTML = `
      <div style="font-family: var(--font-title); text-align: center; padding: 1.25rem; border: 1px solid var(--color-conservative); background: var(--bg-secondary); border-radius: 16px; width: 190px; box-shadow: 0 0 15px rgba(0,230,118,0.2);">
        <div style="font-size: 0.8rem; color: var(--text-secondary)">DICIEMBRE (12%)</div>
        <div style="font-size: 2.2rem; font-weight: 800; color: var(--color-conservative); margin: 0.25rem 0;">$48.000</div>
        <div style="font-size: 0.72rem; color: var(--text-secondary)">Hábito 100% construido</div>
      </div>
    `;
  } else if (type === 'variable-income') {
    container.innerHTML = `
      <div style="font-size: 3.5rem; animation: float-shield 4s infinite ease-in-out;">💸🎢</div>
      <span class="visual-title">Montaña rusa de ingresos</span>
    `;
  } else if (type === 'ant-expenses') {
    container.innerHTML = `
      <div style="text-align: center;">
        <div style="font-size: 2.8rem; letter-spacing: -2px;">☕ 🍫 🥤 🎟️</div>
        <div style="font-size: 0.75rem; color: var(--color-risky); font-weight: 700; margin-top: 0.5rem;">Gastos Hormiga = Gran drenaje</div>
      </div>
    `;
  } else if (type === 'fat-months') {
    container.innerHTML = `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <div style="text-align: center; border: 1px solid var(--glass-border); padding: 0.75rem; border-radius: 12px; background: rgba(255,255,255,0.02)">
          <div style="font-size: 0.65rem; color: var(--text-secondary)">MES ALTO</div>
          <div style="font-size: 1.2rem; color: var(--color-conservative); font-weight: 700;">+$$$</div>
        </div>
        <div style="font-size: 1.5rem;">➡️</div>
        <div style="text-align: center; border: 2px dashed var(--color-conservative); padding: 0.75rem; border-radius: 12px; background: rgba(0,230,118,0.04)">
          <div style="font-size: 0.65rem; color: var(--text-secondary)">COLCHÓN</div>
          <div style="font-size: 1.2rem; color: #fff; font-weight: 700;">🏦 Seguro</div>
        </div>
      </div>
    `;
  } else if (type === 'flexible-savings') {
    container.innerHTML = `
      <div style="font-size: 4rem;">🌱✨</div>
      <span class="visual-title">Guardar siempre, aunque sea poco</span>
    `;
  } else if (type === 'credit-card') {
    container.innerHTML = `
      <div class="visual-credit-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div class="cc-chip"></div>
          <span style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600;">PLATINUM</span>
        </div>
        <div class="cc-number">4512 8790 2341 5562</div>
        <div class="cc-footer">
          <span class="cc-holder">LUCA GOMEZ</span>
          <span class="cc-logo">SimplePay</span>
        </div>
      </div>
    `;
  } else if (type === 'minimum-payment') {
    container.innerHTML = `
      <div style="display: flex; gap: 0.75rem;">
        <div style="border: 2px solid var(--color-risky); background: rgba(255,23,68,0.04); border-radius: 14px; padding: 0.75rem; width: 110px; text-align: center; box-shadow: 0 0 10px rgba(255,23,68,0.1)">
          <div style="font-size: 0.65rem; font-weight: 700; color: var(--color-risky)">PAGO MÍNIMO</div>
          <div style="font-size: 1.4rem; margin: 0.25rem 0;">💸</div>
          <div style="font-size: 0.6rem; color: var(--text-secondary)">Financiación cara: ¡Bola de deudas!</div>
        </div>
        <div style="border: 2px solid var(--color-conservative); background: rgba(0,230,118,0.04); border-radius: 14px; padding: 0.75rem; width: 110px; text-align: center; box-shadow: 0 0 10px rgba(0,230,118,0.1)">
          <div style="font-size: 0.65rem; font-weight: 700; color: var(--color-conservative)">PAGO TOTAL</div>
          <div style="font-size: 1.4rem; margin: 0.25rem 0;">🛡️</div>
          <div style="font-size: 0.6rem; color: var(--text-secondary)">0% Intereses: Banco gratis</div>
        </div>
      </div>
    `;
  } else if (type === 'full-payment') {
    container.innerHTML = `
      <div style="font-size: 4.5rem; animation: float-shield 3s infinite ease-in-out;">🛡️💳</div>
      <span class="visual-title" style="color: var(--color-conservative); font-weight: 700;">¡Paga el 100% y vence al sistema!</span>
    `;
  } else if (type === 'debt-control') {
    container.innerHTML = `
      <div style="font-size: 4rem;">🧾⚖️</div>
      <span class="visual-title">1. Mínimos a todo + 2. Todo el extra a una</span>
    `;
  } else if (type === 'snowball') {
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <div style="border: 1px solid var(--glass-border); padding: 0.4rem 0.8rem; border-radius: 10px; font-size: 0.75rem; background: var(--bg-secondary)">1. Préstamo: $50.000 (Chica) 🟢</div>
        <div style="border: 1px solid var(--glass-border); padding: 0.4rem 0.8rem; border-radius: 10px; font-size: 0.75rem; background: var(--bg-secondary); opacity: 0.6">2. Tarjeta: $150.000 (Mediana)</div>
        <div style="border: 1px solid var(--glass-border); padding: 0.4rem 0.8rem; border-radius: 10px; font-size: 0.75rem; background: var(--bg-secondary); opacity: 0.4">3. Crédito: $300.000 (Grande)</div>
      </div>
      <span class="visual-title" style="margin-top: 0.5rem; color: var(--color-conservative);">Bola de Nieve: De Menor a Mayor Monto</span>
    `;
  } else if (type === 'snowball-effect') {
    container.innerHTML = `
      <div style="font-size: 4.5rem; animation: bounce-piggy 2s infinite ease-in-out;">⛄🌀</div>
      <span class="visual-title" style="color: var(--color-conservative);">Victoria Psicológica Rápida</span>
    `;
  } else if (type === 'avalanche') {
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
        <div style="border: 1px solid var(--glass-border); padding: 0.4rem 0.8rem; border-radius: 10px; font-size: 0.75rem; background: var(--bg-secondary)">1. Tarjeta (110% Interés) 🔴</div>
        <div style="border: 1px solid var(--glass-border); padding: 0.4rem 0.8rem; border-radius: 10px; font-size: 0.75rem; background: var(--bg-secondary); opacity: 0.6">2. Crédito (80% Interés)</div>
        <div style="border: 1px solid var(--glass-border); padding: 0.4rem 0.8rem; border-radius: 10px; font-size: 0.75rem; background: var(--bg-secondary); opacity: 0.4">3. Familiar (0% Interés)</div>
      </div>
      <span class="visual-title" style="margin-top: 0.5rem; color: var(--color-moderate);">Avalancha: Mayor a Menor Interés</span>
    `;
  } else if (type === 'avalanche-effect') {
    container.innerHTML = `
      <div style="font-size: 4.5rem; animation: float-shield 3s infinite ease-in-out;">🏔️⚡</div>
      <span class="visual-title" style="color: var(--color-moderate);">Ahorro Matemático Máximo</span>
    `;
  } else if (type === 'diploma-preview' || type === 'expert-diploma') {
    container.innerHTML = `
      <div style="font-size: 5.5rem; filter: drop-shadow(0 0 15px rgba(255,235,59,0.3));">🎓📜</div>
      <span class="visual-title" style="color: #ffeb3b; font-weight: 700;">¡Demuestra tu Conocimiento!</span>
    `;
  } else if (type === 'plazo-fijo-trad') {
    container.innerHTML = `
      <div style="font-family: var(--font-title); text-align: center; padding: 1.25rem; border: 2px solid var(--primary); background: var(--bg-secondary); border-radius: 18px; width: 220px; box-shadow: var(--shadow-glow);">
        <div style="font-size: 0.75rem; color: var(--text-secondary)">PLAZO FIJO (TNA Fija)</div>
        <div style="font-size: 1.8rem; font-weight: 800; color: #fff; margin: 0.25rem 0;">Tasa Fija %</div>
        <div style="font-size: 0.7rem; color: var(--text-secondary)">Sabes el monto final al inicio.</div>
      </div>
    `;
  } else if (type === 'inflation-loss') {
    container.innerHTML = `
      <div style="display: flex; gap: 2rem; align-items: center; font-size: 3rem;">
        <div style="text-align: center;">
          <div style="font-size: 1rem;">Precios (Inflación)</div>
          <span>🎈🚀</span>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 1rem;">Tasa Fija</div>
          <span>🐢📉</span>
        </div>
      </div>
      <span class="visual-title" style="color: var(--color-risky); font-weight: 600; margin-top: 0.5rem;">Pérdida de poder de compra real</span>
    `;
  } else if (type === 'plazo-fijo-uva') {
    container.innerHTML = `
      <div class="visual-shield">📈🛡️</div>
      <span class="visual-title" style="color: var(--color-conservative); font-weight: 700;">Tus pesos atados a la Inflación + 1%</span>
    `;
  } else if (type === 'time-lock') {
    container.innerHTML = `
      <div style="font-size: 4.5rem; animation: bounce-piggy 3s infinite ease-in-out;">🔒📅</div>
      <span class="visual-title">UVA inmoviliza tus fondos por 90 días</span>
    `;
  } else if (type === 'lecap-intro') {
    container.innerHTML = `
      <div style="font-family: var(--font-title); text-align: center; padding: 1.25rem; border: 2px solid var(--color-conservative); background: var(--bg-secondary); border-radius: 18px; width: 210px; box-shadow: 0 0 15px rgba(0,230,118,0.2);">
        <div style="font-size: 0.7rem; color: var(--text-secondary)">LECAP (Tasa Fija Capitalizable)</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #fff; margin: 0.25rem 0;">Tesoro Nacional</div>
        <div style="font-size: 0.65rem; color: var(--color-conservative)">Interés compuesto automático</div>
      </div>
    `;
  } else if (type === 'lecap-growth') {
    container.innerHTML = `
      <div style="font-size: 4.5rem;">📈⚙️</div>
      <span class="visual-title">Los intereses se reinvierten mensualmente</span>
    `;
  } else if (type === 'market-liquidity') {
    container.innerHTML = `
      <div style="border: 1px dashed var(--glass-border); padding: 1rem; border-radius: 16px; background: rgba(0,0,0,0.2); width: 220px; text-align: center;">
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-conservative)">VENDER EN BOLSA</div>
        <div style="font-size: 1.5rem; margin: 0.25rem 0;">💼➡️💵</div>
        <div style="font-size: 0.7rem; color: var(--text-secondary)">Puedes vender las Lecaps en segundos en el mercado.</div>
      </div>
    `;
  } else if (type === 'fci-concept') {
    container.innerHTML = `
      <div style="font-size: 4.5rem; animation: float-shield 3s infinite ease-in-out;">👥💰🍯</div>
      <span class="visual-title">Un pozo de dinero para todos</span>
    `;
  } else if (type === 'diversification-visual') {
    container.innerHTML = `
      <div style="display: flex; gap: 0.5rem; font-size: 2.2rem;">
        <div style="border: 1px solid var(--glass-border); padding: 0.5rem; border-radius: 10px; background: var(--bg-secondary);">🏦</div>
        <div style="border: 1px solid var(--glass-border); padding: 0.5rem; border-radius: 10px; background: var(--bg-secondary);">📜</div>
        <div style="border: 1px solid var(--glass-border); padding: 0.5rem; border-radius: 10px; background: var(--bg-secondary);">💵</div>
        <div style="border: 1px solid var(--glass-border); padding: 0.5rem; border-radius: 10px; background: var(--bg-secondary);">🍏</div>
      </div>
      <span class="visual-title" style="color: var(--color-moderate);">Diversificación: Repartir el riesgo</span>
    `;
  } else if (type === 'money-market') {
    container.innerHTML = `
      <div style="font-family: var(--font-title); text-align: center; padding: 1.25rem; border: 2px solid #00b0ff; background: var(--bg-secondary); border-radius: 18px; width: 210px; box-shadow: 0 0 15px rgba(0, 176, 255, 0.2);">
        <div style="font-size: 0.75rem; color: var(--text-secondary)">MONEY MARKET (Mercado Pago / Ualá)</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #00b0ff; margin: 0.25rem 0;">T+0 Inmediato</div>
        <div style="font-size: 0.65rem; color: var(--text-secondary)">Retiras tu dinero 24/7 sin esperar.</div>
      </div>
    `;
  } else if (type === 'fci-types') {
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.75rem; width: 210px;">
        <div style="border: 1px solid rgba(0,230,118,0.2); padding: 0.4rem; border-radius: 8px; background: rgba(0,230,118,0.02)">T+0 (Liquidez 24/7): Ultra seguro</div>
        <div style="border: 1px solid rgba(255,145,0,0.2); padding: 0.4rem; border-radius: 8px; background: rgba(255,145,0,0.02)">T+1 (Bonos - 24hs): Moderado</div>
        <div style="border: 1px solid rgba(255,23,68,0.2); padding: 0.4rem; border-radius: 8px; background: rgba(255,23,68,0.02)">T+2 (Acciones - 48hs): Volátil</div>
      </div>
    `;
  } else if (type === 'bond-intro') {
    container.innerHTML = `
      <div style="font-size: 4rem;">📜🤝💵</div>
      <span class="visual-title">Prestar dinero a cambio de cupones de interés</span>
    `;
  } else if (type === 'gov-bonds') {
    container.innerHTML = `
      <div style="display: flex; gap: 0.75rem;">
        <div style="border: 1px solid var(--glass-border); padding: 0.6rem; border-radius: 12px; background: var(--bg-secondary); font-size: 0.7rem; width: 100px; text-align: center;">
          <span style="font-weight: 700; color: #fff;">BONO FIJO</span><br>Tasa pactada fija.
        </div>
        <div style="border: 1px solid var(--color-conservative); padding: 0.6rem; border-radius: 12px; background: rgba(0,230,118,0.02); font-size: 0.7rem; width: 100px; text-align: center;">
          <span style="font-weight: 700; color: var(--color-conservative)">BONO CER</span><br>Ajusta con inflación diaria.
        </div>
      </div>
    `;
  } else if (type === 'ons-intro') {
    container.innerHTML = `
      <div style="font-family: var(--font-title); text-align: center; padding: 1.1rem; border: 2px solid var(--color-moderate); background: var(--bg-secondary); border-radius: 18px; width: 220px; box-shadow: 0 0 15px rgba(255,145,0,0.2);">
        <div style="font-size: 0.7rem; color: var(--text-secondary)">ONs (Obligaciones Negociables)</div>
        <div style="font-size: 1.5rem; font-weight: 800; color: #fff; margin: 0.25rem 0;">Deuda Corporativa</div>
        <div style="font-size: 0.65rem; color: var(--color-moderate)">Emitido por empresas líderes (YPF, IRSA)</div>
      </div>
    `;
  } else if (type === 'usd-passive') {
    container.innerHTML = `
      <div style="font-size: 4rem; animation: float-shield 3s infinite ease-in-out;">💼➡️🇺🇸💲</div>
      <span class="visual-title" style="color: var(--color-conservative); font-weight: 700;">¡Cobrar intereses en Dólares Billete!</span>
    `;
  } else if (type === 'cedear-concept') {
    container.innerHTML = `
      <div style="display: flex; gap: 0.75rem; align-items: center; font-size: 2.2rem;">
        <div style="border: 1px solid var(--glass-border); padding: 0.5rem; border-radius: 12px; background: var(--bg-secondary)">🍏</div>
        <div style="border: 1px solid var(--glass-border); padding: 0.5rem; border-radius: 12px; background: var(--bg-secondary)">🥤</div>
        <div style="border: 1px solid var(--glass-border); padding: 0.5rem; border-radius: 12px; background: var(--bg-secondary)">🔍</div>
      </div>
      <span class="visual-title">Apple, Coca-Cola y Google en pesos</span>
    `;
  } else if (type === 'dual-multiplier') {
    container.innerHTML = `
      <div style="text-align: center; font-family: var(--font-title); font-size: 0.85rem; padding: 1rem; border: 1px dashed var(--glass-border); border-radius: 12px; background: rgba(0,0,0,0.15)">
        <div style="color: #fff; font-weight: 700;">VALOR CEDEAR =</div>
        <div style="color: var(--primary); font-size: 1.2rem; font-weight: 800; margin-top: 0.25rem;">Acción en EE.UU. (USD) <br> × <br> Dólar CCL en Argentina</div>
      </div>
    `;
  } else if (type === 'currency-shield') {
    container.innerHTML = `
      <div class="visual-shield" style="border-color: var(--color-risky); box-shadow: 0 0 20px rgba(255,23,68,0.3);">🛡️💵</div>
      <span class="visual-title" style="color: var(--color-risky); font-weight: 700;">Protección contra la devaluación</span>
    `;
  } else if (type === 'volatility-visual') {
    container.innerHTML = `
      <div style="font-size: 4rem; animation: float-profile 2s infinite ease-in-out;">📉🎢📈</div>
      <span class="visual-title" style="color: var(--color-risky);">Renta Variable: Precios cambiantes</span>
    `;
  } else if (type === 'local-stocks') {
    container.innerHTML = `
      <div style="font-family: var(--font-title); text-align: center; padding: 1.25rem; border: 2px solid var(--color-risky); background: var(--bg-secondary); border-radius: 18px; width: 200px; box-shadow: 0 0 15px rgba(255,23,68,0.2);">
        <div style="font-size: 0.7rem; color: var(--text-secondary)">ACCIONES ARGENTINAS (Merval)</div>
        <div style="font-size: 1.8rem; font-weight: 800; color: var(--color-risky); margin: 0.25rem 0;">YPF / Galicia</div>
        <div style="font-size: 0.65rem; color: var(--text-secondary)">Eres socio real de la empresa nacional.</div>
      </div>
    `;
  } else if (type === 'dividends') {
    container.innerHTML = `
      <div style="font-size: 4rem;">🤝💵💰</div>
      <span class="visual-title">Cobro de dividendos (reparto de utilidades)</span>
    `;
  } else if (type === 'merval-chart') {
    container.innerHTML = `
      <div style="display: flex; gap: 0.5rem; align-items: flex-end; height: 100px; width: 160px; padding: 0.5rem; border-left: 2px solid var(--text-secondary); border-bottom: 2px solid var(--text-secondary)">
        <div style="width: 25px; height: 30px; background: var(--color-risky); border-radius: 3px 3px 0 0;"></div>
        <div style="width: 25px; height: 80px; background: var(--color-conservative); border-radius: 3px 3px 0 0;"></div>
        <div style="width: 25px; height: 20px; background: var(--color-risky); border-radius: 3px 3px 0 0;"></div>
        <div style="width: 25px; height: 95px; background: var(--color-conservative); border-radius: 3px 3px 0 0; box-shadow: 0 0 10px rgba(0,230,118,0.3)"></div>
      </div>
      <span class="visual-title" style="margin-top: 0.5rem;">Alta volatilidad y alto potencial</span>
    `;
  } else {
    container.innerHTML = `<div style="font-size: 4rem;">💡</div><span class="visual-title">Concepto Financiero</span>`;
  }
  
  return container;
}

// 9. PANEL DE RETROALIMENTACIÓN DE PREGUNTAS (QUIZ FEEDBACK)
function renderQuizFeedback(isCorrect, explanation, onContinue) {
  // Deshabilitar todas las opciones para que no se cambien tras comprobar
  document.querySelectorAll('.quiz-option-btn').forEach(btn => btn.disabled = true);
  
  // Ocultar botón de comprobar original
  const checkBtn = document.querySelector('.lesson-footer-actions .action-btn');
  if (checkBtn) checkBtn.style.display = 'none';
  
  const feedback = document.createElement('div');
  feedback.className = `feedback-overlay ${isCorrect ? 'correct' : 'incorrect'}`;
  
  const emoji = isCorrect ? '🎉' : '⚠️';
  const title = isCorrect ? '¡Excelente! Respuesta Correcta (+10 XP)' : 'Respuesta Incorrecta (-5 XP)';
  
  feedback.innerHTML = `
    <div class="feedback-icon">${emoji}</div>
    <div class="feedback-text-box">
      <h4>${title}</h4>
      <p>${explanation}</p>
    </div>
  `;
  
  // Insertar feedback antes de las acciones de footer
  const containerInner = dom.lessonModalInner;
  const actions = containerInner.querySelector('.lesson-footer-actions');
  containerInner.insertBefore(feedback, actions);
  
  // Agregar botón "Continuar" en el footer de feedback
  const continueBtn = document.createElement('button');
  continueBtn.className = 'action-btn';
  continueBtn.textContent = 'Continuar';
  continueBtn.addEventListener('click', () => {
    if (isCorrect) {
      quizScore += 10; // 10 puntos por respuesta correcta
    }
    onContinue();
  });
  
  actions.appendChild(continueBtn);
  
  // Autocontrol de foco para accesibilidad
  continueBtn.focus();
}

// 10. COMPLETA LA LECCIÓN (AWARD XP & CELEBRATE)
function completeLesson() {
  const isFirstTime = !state.completedLessons.includes(activeLesson.id);
  const xpEarned = isFirstTime ? (activeLesson.isTest ? 100 : 30) : 10; // Menos puntos por repetición
  
  if (isFirstTime) {
    state.completedLessons.push(activeLesson.id);
  }
  
  awardXP(xpEarned);
  
  // Celebrar!
  dom.lessonModalInner.innerHTML = '';
  
  const celPanel = document.createElement('div');
  celPanel.className = 'celebration-panel';
  
  let medalEmoji = '🏆';
  let title = '¡Felicitaciones!';
  let desc = `Has completado exitosamente la lección de **${activeLesson.title}**. ¡Tu conocimiento financiero sigue creciendo de forma asombrosa!`;
  
  if (activeLesson.isTest) {
    medalEmoji = '🎓✨';
    title = '¡Desafío Superado!';
    desc = `¡Impresionante! Has aprobado el **${activeLesson.title}**. Estás demostrando un manejo técnico digno de un profesional.`;
  }
  
  celPanel.innerHTML = `
    <div class="celebration-icon">${medalEmoji}</div>
    <h3 class="celebration-title">${title}</h3>
    <p class="celebration-desc">${formatMarkdownText(desc)}</p>
    
    <div class="reward-stat-box">
      <div class="reward-badge xp-reward">
        <span class="reward-val">+${xpEarned}</span>
        <span class="reward-lbl">Puntos XP</span>
      </div>
      <div class="reward-badge streak-reward">
        <span class="reward-val">${state.streak}</span>
        <span class="reward-lbl">Días Racha</span>
      </div>
    </div>
    
    <button class="action-btn" id="finish-lesson-btn" style="margin-top: 1.5rem;">Finalizar Lección</button>
  `;
  
  dom.lessonModalInner.appendChild(celPanel);
  
  document.getElementById('finish-lesson-btn').addEventListener('click', () => {
    dom.lessonModal.close();
    
    // Si aprobó el mini-test de Finanzas, felicitar y dar la bienvenida al camino de Inversiones
    if (activeLesson.id === 'pf_test' && isFirstTime) {
      alert('¡Felicitaciones! Has desbloqueado el diploma de Finanzas Personales. Ahora puedes elegir libremente explorar el Camino de Inversiones.');
    }
    
    renderActivePath();
  });
}

// 11. FLUJO ESPECIAL: TEST DE PERFIL DE INVERSOR
function renderProfileQuizStep() {
  // Limpiar el modal antes de dibujar la nueva pregunta del perfil
  dom.lessonModalInner.innerHTML = '';
  
  const questionsList = investorProfileQuiz.questions;
  const totalQuestions = questionsList.length;
  
  // Render de Progreso del Quiz
  const progressPercentage = (profileAnswers.length / totalQuestions) * 100;
  renderProgress(progressPercentage);
  
  if (profileAnswers.length < totalQuestions) {
    // PREGUNTA DEL QUIZ
    const question = questionsList[profileAnswers.length];
    
    const layout = document.createElement('div');
    layout.className = 'lesson-layout';
    
    const quizPanel = document.createElement('div');
    quizPanel.className = 'lesson-quiz-panel';
    
    const qTitle = document.createElement('h4');
    qTitle.className = 'quiz-question-title';
    qTitle.textContent = question.questionText;
    quizPanel.appendChild(qTitle);
    
    const optionsList = document.createElement('div');
    optionsList.className = 'quiz-options-list';
    
    question.options.forEach((opt, idx) => {
      const optBtn = document.createElement('button');
      optBtn.className = 'quiz-option-btn';
      optBtn.textContent = opt;
      optBtn.addEventListener('click', () => {
        // Guardar puntaje de opción seleccionada
        const score = question.scores[idx];
        profileAnswers.push(score);
        
        // Cargar siguiente pregunta con una sutil demora para feedback visual
        optBtn.classList.add('selected');
        setTimeout(() => {
          renderProfileQuizStep();
        }, 250);
      });
      optionsList.appendChild(optBtn);
    });
    
    quizPanel.appendChild(optionsList);
    
    const visualPanel = document.createElement('div');
    visualPanel.className = 'lesson-visual-panel';
    visualPanel.innerHTML = `
      <div class="profile-quiz-logo">👤⚖️</div>
      <span class="visual-title">Evaluando tolerancia al riesgo</span>
    `;
    
    layout.appendChild(quizPanel);
    layout.appendChild(visualPanel);
    dom.lessonModalInner.appendChild(layout);
    
  } else {
    // FIN DEL CUESTIONARIO: Calcular perfil e informarlo
    // Suma de puntos: Min 4, Max 12
    const totalScore = profileAnswers.reduce((sum, score) => sum + score, 0);
    
    let profile = 'conservative';
    let profileName = 'Conservador';
    let emoji = '🛡️';
    let desc = 'Priorizas la seguridad absoluta de tu dinero frente a la rentabilidad. No te sientes cómodo con las subidas y bajadas de precio del mercado. Prefieres opciones de renta fija sencillas y estables como Plazos Fijos UVA o Letras del Tesoro que defienden tu capital contra la inflación.';
    
    if (totalScore >= 7 && totalScore <= 9) {
      profile = 'moderate';
      profileName = 'Moderado';
      emoji = '⚖️';
      desc = 'Buscas un punto de equilibrio inteligente. Quieres ganarle a la inflación asumiendo riesgos controlados a mediano plazo. Tolerarias variaciones mínimas de capital a cambio de rentas pasivas estables en Dólares (Obligaciones Negociables) o diversificación en Fondos Comunes de Inversión.';
    } else if (totalScore > 9) {
      profile = 'risky';
      profileName = 'Arriesgado';
      emoji = '🦁';
      desc = 'Apuntas al máximo rendimiento de tu dinero en el mediano y largo plazo. Entiendes que la bolsa fluctúa y no te asusta ver tu saldo en rojo temporalmente si el negocio de fondo es excelente. Los Cedears de Wall Street y las Acciones argentinas líderes son tu territorio natural.';
    }
    
    // Guardar en estado
    state.investorProfile = profile;
    if (!state.completedLessons.includes(activeLesson.id)) {
      state.completedLessons.push(activeLesson.id);
    }
    awardXP(50); // 50 XP por definir perfil
    
    // Render de Resultados
    dom.lessonModalInner.innerHTML = '';
    
    const resultBox = document.createElement('div');
    resultBox.className = 'profile-quiz-intro';
    
    resultBox.innerHTML = `
      <h3 class="celebration-title">¡Test de Perfil Completado!</h3>
      <p class="celebration-desc" style="margin-bottom: 1rem;">Hemos analizado tus respuestas minuciosamente. Tu perfil ideal asignado es:</p>
      
      <div class="profile-badge-display ${profile}">
        <span class="badge-art">${emoji}</span>
        <span class="badge-tag-label">Perfil de Inversión</span>
        <h4 class="badge-title-text">${profileName}</h4>
        <p class="badge-desc-text">${desc}</p>
      </div>
      
      <!-- Cartel de Advertencia de Broker -->
      <div class="broker-notice-card">
        <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
          <span style="font-size: 1.5rem; line-height: 1;">⚠️</span>
          <div>
            <h5 style="font-family: var(--font-title); font-weight: 700; font-size: 0.92rem; color: var(--color-moderate); margin-bottom: 0.25rem;">¡Nota muy importante para comenzar!</h5>
            <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4;">Para acceder y poder comprar cualquiera de los activos que verás en este camino (como Cedears, Obligaciones Negociables, Bonos o Lecaps), <strong>necesitas obligatoriamente crearte una cuenta comitente en un Broker de bolsa</strong> (en Argentina se conocen como ALyCs, por ejemplo: Balanz, Bull Market, Coco, IOL, etc.). Los bancos tradicionales a veces ofrecen plazos fijos, pero el resto de los instrumentos se operan mediante un Broker.</p>
          </div>
        </div>
      </div>
      
      <button class="action-btn" id="finish-profile-quiz-btn" style="margin-top: 0.5rem;">Comenzar Camino de Inversión</button>
    `;
    
    dom.lessonModalInner.appendChild(resultBox);
    
    document.getElementById('finish-profile-quiz-btn').addEventListener('click', () => {
      dom.lessonModal.close();
      renderActivePath();
    });
  }
}

// 12. SISTEMA DE GLOSARIO (GLOSSARY ENGINE)
let glossaryActiveTab = 'all';

function initGlossary() {
  // Listeners para abrir el modal del glosario
  dom.glossaryBtn.addEventListener('click', openGlossary);
  dom.mobileGlossaryBtn.addEventListener('click', openGlossary);
  
  // Input de búsqueda en tiempo real
  dom.glossarySearch.addEventListener('input', () => {
    renderGlossaryItems();
  });
  
  // Tabs de categoría
  dom.glossaryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dom.glossaryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      glossaryActiveTab = tab.getAttribute('data-tab');
      renderGlossaryItems();
    });
  });
}

function openGlossary() {
  dom.glossarySearch.value = '';
  dom.glossaryTabs.forEach(t => t.classList.remove('active'));
  document.querySelector('.glossary-tab-btn[data-tab="all"]').classList.add('active');
  glossaryActiveTab = 'all';
  
  renderGlossaryItems();
  dom.glossaryModal.showModal();
  
  // Autoenfoque en la búsqueda
  setTimeout(() => {
    dom.glossarySearch.focus();
  }, 100);
}

function renderGlossaryItems() {
  dom.glossaryGrid.innerHTML = '';
  const searchVal = dom.glossarySearch.value.toLowerCase().trim();
  
  // Filtrar según pestaña y término de búsqueda
  const filtered = glossary.filter(item => {
    // 1. Filtrar por pestaña
    if (glossaryActiveTab !== 'all' && item.category !== glossaryActiveTab) {
      return false;
    }
    // 2. Filtrar por término
    if (searchVal) {
      return item.term.toLowerCase().includes(searchVal) || item.definition.toLowerCase().includes(searchVal);
    }
    return true;
  });
  
  // Ordenar alfabéticamente
  filtered.sort((a, b) => a.term.localeCompare(b.term));
  
  if (filtered.length === 0) {
    dom.glossaryGrid.innerHTML = `<div class="no-results-msg">No se encontraron términos explicados para "${escapeHTML(searchVal)}". Intenta buscar otra palabra clave.</div>`;
    return;
  }
  
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'glossary-card';
    
    const tagText = item.category === 'finance' ? 'Finanzas' : 'Inversiones';
    
    card.innerHTML = `
      <div class="glossary-card-header">
        <h4 class="glossary-term">${escapeHTML(item.term)}</h4>
        <span class="glossary-tag tag-${item.category}">${tagText}</span>
      </div>
      <p class="glossary-definition">${escapeHTML(item.definition)}</p>
    `;
    dom.glossaryGrid.appendChild(card);
  });
}

// Escape de HTML simple contra XSS
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
