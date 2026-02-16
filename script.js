// Quiz data with all 9 questions
const quizData = [
    {
        category: "Digital Footprint",
        question: "How often do you post photos online?",
        answers: [
            { text: "Every day", points: 0 },
            { text: "A few times a week", points: 1 },
            { text: "Rarely", points: 2 },
            { text: "Never", points: 3 }
        ]
    },
    {
        category: "Digital Footprint",
        question: "Do you ever post your location (school, city, events)?",
        answers: [
            { text: "Yes, all the time", points: 0 },
            { text: "Sometimes", points: 1 },
            { text: "Only with close friends", points: 2 },
            { text: "Never", points: 3 }
        ]
    },
    {
        category: "Digital Footprint",
        question: "What do you do with old accounts you don't use anymore?",
        answers: [
            { text: "Leave them", points: 0 },
            { text: "Delete the app but not the account", points: 1 },
            { text: "Change the password and leave it", points: 2 },
            { text: "Fully delete the account", points: 3 }
        ]
    },
    {
        category: "Security Habits",
        question: "How do you create your passwords?",
        answers: [
            { text: "Same password everywhere", points: 0 },
            { text: "Same password with small changes", points: 1 },
            { text: "Random words or phrases", points: 2 },
            { text: "Password manager", points: 3 }
        ]
    },
    {
        category: "Security Habits",
        question: "Do you use public Wi-Fi (cafes, malls, airports)?",
        answers: [
            { text: "Yes, all the time", points: 0 },
            { text: "Sometimes", points: 1 },
            { text: "Only for harmless stuff", points: 2 },
            { text: "Never", points: 3 }
        ]
    },
    {
        category: "Security Habits",
        question: "If you get a weird email or DM, what do you do?",
        answers: [
            { text: "Click it to see what it is", points: 0 },
            { text: "Ignore it", points: 1 },
            { text: "Ask a friend", points: 2 },
            { text: "Report it", points: 3 }
        ]
    },
    {
        category: "Social Media Behavior",
        question: "Who can see your posts?",
        answers: [
            { text: "Everyone", points: 0 },
            { text: "Friends of friends", points: 1 },
            { text: "Only friends", points: 2 },
            { text: "Custom list", points: 3 }
        ]
    },
    {
        category: "Social Media Behavior",
        question: "How often do you accept follow/friend requests from people you don't know?",
        answers: [
            { text: "Always", points: 0 },
            { text: "Sometimes", points: 1 },
            { text: "Rarely", points: 2 },
            { text: "Never", points: 3 }
        ]
    },
    {
        category: "Social Media Behavior",
        question: "What do you do before posting something?",
        answers: [
            { text: "Post instantly", points: 0 },
            { text: "Think for a second", points: 1 },
            { text: "Ask a friend", points: 2 },
            { text: "Double-check privacy settings", points: 3 }
        ]
    }
];

// Persona data based on total score
const personas = [
    {
        minScore: 0,
        maxScore: 7,
        title: "The Open Book",
        icon: "📖",
        description: "You share a lot online and may not realize how much information is publicly visible. Your digital footprint is wide, and you could be an easy target for social engineering or online scams.",
        tips: [
            "Make your accounts private",
            "Avoid posting your location",
            "Clean up old accounts"
        ]
    },
    {
        minScore: 8,
        maxScore: 14,
        title: "The Over-Sharer",
        icon: "💬",
        description: "You're not reckless, but you reveal more than you think. Some of your habits could expose personal information without you realizing it.",
        tips: [
            "Review your privacy settings",
            "Be selective about what you post",
            "Use stronger passwords"
        ]
    },
    {
        minScore: 15,
        maxScore: 21,
        title: "The Casual Defender",
        icon: "🛡️",
        description: "You have decent online habits and some awareness of cybersecurity. You slip up occasionally, but overall you're doing better than most.",
        tips: [
            "Turn on two-factor authentication",
            "Avoid public Wi-Fi",
            "Double-check suspicious messages"
        ]
    },
    {
        minScore: 22,
        maxScore: 27,
        title: "The Ghost",
        icon: "data:image/png;base64,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",
        description: "You're extremely cautious and maintain strong digital hygiene. Your online presence is minimal and well-protected.",
        tips: [
            "Keep using strong, unique passwords",
            "Continue reviewing privacy settings",
            "Stay aware of new cyber threats"
        ]
    }
];

// State management
let currentQuestion = 0;
let totalScore = 0;
let answers = new Array(quizData.length).fill(null);
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Initialize dark mode
if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

// DOM elements
const welcomeScreen = document.getElementById('welcomeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn = document.getElementById('startBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const retakeBtn = document.getElementById('retakeBtn');
const themeBtn = document.getElementById('themeBtn');
const questionCounter = document.getElementById('questionCounter');
const categoryLabel = document.getElementById('categoryLabel');
const questionTitle = document.getElementById('questionTitle');
const answersContainer = document.getElementById('answersContainer');
const progressFill = document.getElementById('progressFill');
const personaTitle = document.getElementById('personaTitle');
const personaDescription = document.getElementById('personaDescription');
const tipsList = document.getElementById('tipsList');
const scoreValue = document.getElementById('scoreValue');
const resultIcon = document.getElementById('resultIcon');
const scoreText = document.getElementById('scoreText');

// Event listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
retakeBtn.addEventListener('click', resetQuiz);
themeBtn.addEventListener('click', toggleDarkMode);

// Start quiz
function startQuiz() {
    hideAllScreens();
    quizScreen.classList.add('active');
    loadQuestion();
}

// Load current question
function loadQuestion() {
    const question = quizData[currentQuestion];
    
    // Update header
    questionCounter.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    categoryLabel.textContent = question.category;
    questionTitle.textContent = question.question;
    
    // Update progress bar
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressFill.style.width = progress + '%';
    
    // Render answer options
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        if (answers[currentQuestion] === index) {
            answerDiv.classList.add('selected');
        }
        
        const label = String.fromCharCode(65 + index); // A, B, C, D
        answerDiv.innerHTML = `
            <span class="answer-label">${label}</span>
            <span>${answer.text}</span>
        `;
        
        answerDiv.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(answerDiv);
    });
    
    // Update button states
    prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
    updateNextButton();
}

// Select answer
function selectAnswer(index) {
    answers[currentQuestion] = index;
    loadQuestion();
    updateNextButton();
}

// Update next button state
function updateNextButton() {
    if (currentQuestion === quizData.length - 1) {
        nextBtn.textContent = 'See Results →';
        nextBtn.disabled = answers[currentQuestion] === null;
    } else {
        nextBtn.textContent = 'Next →';
        nextBtn.disabled = answers[currentQuestion] === null;
    }
}

// Next question
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
        answersContainer.style.animation = 'none';
        setTimeout(() => {
            answersContainer.style.animation = 'fadeInUp 0.4s ease';
        }, 10);
    } else {
        calculateResults();
    }
}

// Previous question
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        answersContainer.style.animation = 'none';
        setTimeout(() => {
            answersContainer.style.animation = 'fadeInUp 0.4s ease';
        }, 10);
    }
}

// Calculate results
function calculateResults() {
    totalScore = 0;
    answers.forEach((answerIndex, questionIndex) => {
        if (answerIndex !== null) {
            totalScore += quizData[questionIndex].answers[answerIndex].points;
        }
    });
    
    displayResults();
}

// Display results
function displayResults() {
    const persona = getPersona(totalScore);
    
    hideAllScreens();
    resultsScreen.classList.add('active');
    
    resultIcon.innerHTML = '';
    if (persona.icon.startsWith('data:image')) {
        const img = document.createElement('img');
        img.src = persona.icon;
        img.alt = persona.title;
        img.style.width = '110px';
        img.style.height = '110px';
        img.style.objectFit = 'contain';
        img.style.marginBottom = '20px';
        img.style.borderRadius = '12px';
        resultIcon.appendChild(img);
    } else {
        resultIcon.textContent = persona.icon;
    }
    personaTitle.textContent = persona.title;
    scoreText.textContent = 'Your Cyber Identity Score:';
    personaDescription.innerHTML = highlightKeywords(persona.description);
    scoreValue.textContent = totalScore;
    
    tipsList.innerHTML = '';
    persona.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
}

// Get persona based on score
function getPersona(score) {
    return personas.find(p => score >= p.minScore && score <= p.maxScore);
}

// Highlight important keywords in text
function highlightKeywords(text) {
    const keywords = [
        'share a lot', 'publicly visible', 'digital footprint', 'social engineering', 'online scams',
        'reveal more', 'personal information', 'privacy settings', 'stronger passwords',
        'decent online habits', 'cybersecurity', 'awareness', 'two-factor authentication', 'public Wi-Fi',
        'cautious', 'strong digital hygiene', 'minimal', 'well-protected', 'strong, unique passwords',
        'cyber threats'
    ];
    
    let highlighted = text;
    keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        highlighted = highlighted.replace(regex, `<mark class="highlight">$&</mark>`);
    });
    
    return highlighted;
}

// Reset quiz
function resetQuiz() {
    currentQuestion = 0;
    totalScore = 0;
    answers = new Array(quizData.length).fill(null);
    hideAllScreens();
    welcomeScreen.classList.add('active');
}

// Hide all screens
function hideAllScreens() {
    welcomeScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
}

// Dark mode toggle
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateThemeButton();
}

// Update theme button
function updateThemeButton() {
    themeBtn.textContent = isDarkMode ? '☀️' : '🌙';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateThemeButton();
    console.log('Quiz loaded and ready!');
});
