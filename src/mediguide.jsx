import React from 'react';
const { useState } = React;

// ── SUPABASE ──────────────────────────────────────────────────────────────────
const SUPABASE_URL = "https://rjioswmfegjnhzdkyugy.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqaW9zd21mZWdqbmh6ZGt5dWd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5ODgyNzYsImV4cCI6MjA4ODU2NDI3Nn0.Hblt5qwObiJdZe1mK_oJYpmSNrv9IE2tX6Gp2XmwEeM";

// Load Supabase CDN and return a promise that resolves when ready
const _supabaseReady = new Promise((resolve) => {
  const init = () => {
    window._supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    resolve(window._supabaseClient);
  };
  if (window.supabase) {
    init();
  } else {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js";
    s.onload = init;
    s.onerror = () => resolve(null);
    document.head.appendChild(s);
  }
});
const getSupabase = () => _supabaseReady;


// ── TRANSLATIONS ───────────────────────────────────────────────────────────────
const T = {
  English: {
    // Nav & Landing
    tagline:"YOUR HEALTH NAVIGATOR", login:"Log In", getStarted:"Get Started — It's Free →",
    createAccount:"Create Free Account →", seeDemo:"See Demo ▶", comingSoon:"🚧 Coming soon!",
    alreadyAccount:"Already have an account?", selectLanguage:"Language",
    heroTitle1:"Better Healthcare,", heroTitle2:"For Everyone.",
    heroSubtext:"No matter who you are and where you're from, your problems deserve to be heard.",
    freeBadge:"FREE · NO INSURANCE REQUIRED",
    whatWeDo:"WHAT MEDIGUIDE DOES", everythingYouNeed:"Everything you need, in one place",
    tapToLearn:"Tap any card to learn more.", tapMore:"Tap to learn more ↓", tapClose:"Tap to close ↑",
    aboutAegis:"About Aegis AI",
    aegisDisclaimer:"Aegis is MediGuide's built-in assistant for general guidance — explaining medical terms, navigating the app, and answering health questions.",
    aegisWarning:"Aegis is not a symptom checker and is not a substitute for professional medical advice.",
    aegisNote:"For symptoms, always use the dedicated symptom checker.",
    readyTitle:"Ready to find your doctor?", readyDesc:"Sign up in under a minute. No insurance needed. No fees. Ever.",
    gettingStarted:"We're just getting started.", reviewDesc1:"MediGuide is a new app built with a real mission — to make healthcare accessible to everyone, everywhere.",
    reviewDesc2:"We'd love to hear what you think. When you try MediGuide, your feedback helps us get better for the next person who needs us.",
    reviewFirst:"Your review could be first ✨", reviewHelp:"Tell us what helped you 💙", reviewImprove:"Help us improve for others 🌍",
    realReviews:"Real reviews from real users — coming soon.",
    tryAndShare:"Try MediGuide & Share Your Thoughts →",
    foundProblem:"Found a problem?", reportDesc:"We're always improving. If something isn't working right, let us know and we'll fix it.",
    reportIt:"Report It →", disclaimer:"⚠️ MediGuide is for informational purposes only and does not provide medical advice, diagnosis, or treatment. In an emergency, call 911 or your local emergency number immediately.",
    // Box labels
    checkSymptoms:"Check Symptoms", findDoctor:"Find a Doctor", noInsurance:"No Insurance", aegisAI:"Aegis AI",
    checkSymptomsDesc:"Describe what you're feeling and our AI asks smart follow-up questions to guide you toward the right care — no guessing, no confusion.",
    findDoctorDesc:"Filter by language, gender, distance and insurance. Book an appointment in minutes — no phone call needed.",
    noInsuranceDesc:"Free clinics, government coverage programs, medical bill negotiation tips, and your legal rights — all in one place.",
    aegisAIDesc:"Your personal health guide. Ask anything — medical terms, how to use the app, or general health questions. Available on every screen, anytime.",
    // Login
    logIn:"Log In", signUp:"Sign Up", fullName:"FULL NAME", email:"EMAIL", password:"PASSWORD",
    minChars:"(min. 6 characters)", rememberMe:"Remember me", createAcc:"Create Account →",
    noAccount:"Don't have an account?", haveAccount:"Already have an account?",
    enterEmail:"Please enter your email address.", validEmail:"Please enter a valid email address.",
    enterPassword:"Please enter a password.", enterName:"Please enter your full name.",
    minPassword:"Password must be at least 6 characters.",
    accountExists:"An account with that email already exists. Try logging in.",
    noAccountFound:"No account found with that email. Please sign up first.",
    incorrectPassword:"Incorrect password. Please try again.",
    accountCreated:"Account created! Taking you to setup...",
    // Nav tabs
    home:"Home", browse:"Browse", noIns:"No Insurance", profile:"Profile",
    // Home
    howAreYou:"How are you feeling today?", welcomeBack:"Welcome back",
    findRightDoctor:"Find the Right Doctor,", rightNearYou:"Right Near You",
    describeSymptoms:"Describe your symptoms and our AI will guide you.",
    noInsuranceBanner:"No insurance? We've got you.",
    noInsuranceSub:"Find free clinics, assistance programs and more →",
    yourPreferences:"YOUR PREFERENCES",
    whatsBotheringYou:"What's bothering you today?",
    symptomPlaceholder:"e.g. I have a sharp chest pain when breathing...",
    checkYourSymptoms:"Check Your Symptoms", commonConditions:"Common Conditions",
    startAssessment:"Start Assessment →", getAssessment:"Get My Assessment 🔍",
    nextQuestion:"Next Question →", checkDifferent:"🔄 Check Different Symptoms",
    preparingQuestions:"Preparing your questions...", analyzingAnswers:"Analyzing all your answers...",
    followUpQuestion:"FOLLOW-UP QUESTION", youSaid:"You said:",
    startOver:"✕ Start over", typeAnswerHere:"Type your answer here...",
    urgency:"URGENCY", specialist:"RECOMMENDED SPECIALIST", reason:"WHY",
    tip:"TIP", recommendedDoctors:"RECOMMENDED DOCTORS NEARBY",
    sameDayDoctors:"✅ DOCTORS AVAILABLE TODAY NEARBY",
    browseAll:"Browse All Doctors →", question:"Question",
    aiAssessment:"AI ASSESSMENT", tapBlue:"💡 Tap any",
    tapBlueTerm:"blue term", tapBlueFor:"for a plain-English definition",
    // Emergency
    medicalEmergency:"This may be a medical emergency",
    emergencyDesc:"Based on your symptoms, you need emergency care immediately. Do not wait.",
    callEmergency:"📞 Call", emergencyFor:"Emergency number for",
    emergencyIntl:"International emergency number — works in most countries",
    highlyRecommended:"HIGHLY RECOMMENDED",
    highlyRecDesc:"Calling emergency services immediately is strongly advised. Every minute matters.",
    whileYouWait:"🩺 WHILE YOU WAIT FOR HELP",
    whatAIDetected:"WHAT THE AI DETECTED",
    // Medium urgency
    seeDocSoon:"See a doctor soon",
    seeDocSoonSub:"This isn't an emergency, but don't leave it too long.",
    sameDayQuestion:"📅 Do you need a same-day appointment?",
    sameDayDesc:"We can filter doctors by same-day availability so you're seen today.",
    yesToday:"✅ Yes, today", notUrgent:"📆 Not urgent",
    sameDayConfirm:"Got it — we'll prioritize doctors available today when finding your match.",
    notUrgentConfirm:"No problem — we'll find the best match for you, available soon.",
    findAvailToday:"📅 Find Available Doctors Today →",
    // Browse
    doctorsNearYou:"Doctors Near You",
    fromSymptomCheck:"FROM YOUR SYMPTOM CHECK",
    sameDayFromCheck:"SAME-DAY AVAILABILITY — FROM YOUR SYMPTOM CHECK",
    showingAvailFor:"Showing available doctors first for:",
    showingFor:"Showing doctors for:",
    clearFilter:"✕ Clear",
    searchPlaceholder:"Search by name, specialty, or symptom...",
    distanceLabel:"DISTANCE — within",
    miles:"miles", mile:"mile",
    filteredByPrefs:"🎯 Filtered by your preferences:",
    showAllDoctors:"Show All Doctors", noInsuranceOnly:"SHOWING UNINSURED-FRIENDLY DOCTORS ONLY",
    noInsuranceOnlySub:"All doctors listed here accept patients without insurance or offer sliding scale payment.",
    sameDayPriority:"📅 Same-day priority", sameDayOnly:"📅 Same-day only",
    noInsuranceOK:"💚 No Insurance OK",
    noDocMatch:"No doctors match your filters",
    noDocMatchSub:"Try increasing distance or clicking \"Show all doctors\"",
    noDocSearch:"No doctors found for",
    noDocSearchSub:"Try a different specialty or symptom, or increase your distance.",
    showingCount:"Showing", doctorCount:"doctor", doctorsCount:"doctors", withinDist:"within",
    requiresInsurance:"This doctor requires insurance.",
    seeNoInsOptions:"See no-insurance options →",
    findDocNearMe:"🩺 Find",
    nearMe:"Near Me →",
    // Booking
    bookWith:"Book with", reasonForVisit:"Reason for Visit",
    patientInfo:"Patient Info", insuranceInfo:"Insurance", newReturning:"New or Returning?",
    hipaa:"HIPAA", reminders:"Reminders", calendar:"Calendar", time:"Time",
    confirm:"Confirm", done:"Done",
    continueBtn:"Continue →", backBtn:"← Back", confirmBooking:"Confirm Booking ✓",
    appointmentBooked:"Appointment Booked!",
    requestSubmitted:"Request Submitted!",
    requestSent:"Your request to see",
    requestSentOn:"on", requestSentAt:"at", requestSentEnd:"has been sent.",
    notConfirmed:"This is a request, not a confirmed appointment",
    notConfirmedDesc:"The clinic will review your request and contact you within 24–48 hours to confirm. Please do not assume your appointment is guaranteed until you hear back from them.",
    // Profile
    myHealthProfile:"My Health Profile",
    myProfile:"My Profile", editProfile:"✏️ Edit", saveProfile:"💾 Save",
    cancelEdit:"Cancel",
    signOut:"Sign Out", preferences:"Preferences", language:"Language",
    country:"🌍 COUNTRY", city:"🏙️ CITY", insurance:"🛡️ INSURANCE",
    doctorGender:"👨‍⚕️ DOCTOR GENDER", conditions:"🩺 MEDICAL CONDITIONS",
    locationCode:"📍 LOCATION CODE", notSet:"Not set", none:"None",
    signOutBtn:"🚪 Sign Out",
    // No Insurance tab
    niHeader:"No Insurance? We've Got You.",
    niSubtext:"You still deserve quality healthcare. Here are free and low-cost options, plus programs you may qualify for.",
    niTabOverview:"🏠 Overview", niTabClinics:"🏥 Free Clinics", niTabPrograms:"💰 Coverage", niTabBills:"📋 Bill Help", niTabEmergency:"🚨 Emergency",
    niOverviewTitle1:"Free & Low-Cost Clinics", niOverviewDesc1:"Community health centers that treat everyone regardless of ability to pay.",
    niOverviewTitle2:"You May Qualify for Coverage", niOverviewDesc2:"Many people don't know they qualify for free or subsidized health insurance.",
    niOverviewTitle3:"Telehealth Options", niOverviewDesc3:"See a doctor online for free or very low cost without leaving home.",
    niOverviewTitle4:"Emergency Care Rights", niOverviewDesc4:"By law, emergency rooms must treat you regardless of insurance or ability to pay.",
    niOverviewBtn1:"Find Clinics", niOverviewBtn2:"See Programs", niOverviewBtn3:"See Options", niOverviewBtn4:"Learn More",
    niDidYouKnow:"Did you know?", niDidYouKnowText:"Over 1,700 community health centers across the US serve 30 million patients every year — regardless of ability to pay. You are not alone.",
    niShowingClinics:"✅ Showing free and low-cost clinics near you",
    niProgramsHint:"💡 You may qualify for free or low-cost coverage. Tap any program to learn more.",
    niBillsHint:"💡 You have more power than you think. Hospitals negotiate bills every day.",
    niBillTitle1:"Call and Ask for a Discount", niBillDesc1:"Simply call billing and say 'I am uninsured and cannot afford this bill. Can you reduce it?' Many hospitals cut bills by 30–50% just for asking.",
    niBillTitle2:"Request an Itemized Bill", niBillDesc2:"Ask for a detailed list of every charge. Billing errors are extremely common — studies show up to 80% of medical bills contain mistakes.",
    niBillTitle3:"Apply for Financial Assistance", niBillDesc3:"Most hospitals have charity care programs. Ask for their 'charity care application' — many people qualify without knowing it.",
    niBillTitle4:"Set Up a Payment Plan", niBillDesc4:"Hospitals would rather get paid slowly than not at all. Ask for a 0% interest payment plan — most will agree.",
    niBillTitle5:"Use a Medical Bill Advocate", niBillDesc5:"Nonprofit patient advocates can negotiate bills on your behalf for free. Search 'medical bill advocate' + your city.",
    niBillTitle6:"Know Your Rights", niBillDesc6:"Hospitals receiving federal funding must provide free or discounted care to low-income patients by law.",
    niEmergencyTitle:"If this is a life-threatening emergency",
    niEmergencyDesc:"Call 911 immediately (US) or your local emergency number. Do not wait.",
    niCallBtn:"📞 Call 911",
    niEmTitle1:"EMTALA Law", niEmDesc1:"By US federal law, all emergency rooms MUST treat you regardless of your insurance status or ability to pay. They cannot turn you away.",
    niEmTitle2:"Urgent Care Centers", niEmDesc2:"For non-life-threatening issues, urgent care centers are much cheaper than ERs and often have sliding scale fees.",
    niEmTitle3:"Pharmacy Clinics", niEmDesc3:"CVS MinuteClinic, Walgreens Health, and Walmart Health offer low-cost basic care without appointments.",
    niEmTitle4:"Nurse Hotlines", niEmDesc4:"Many areas have free 24/7 nurse hotlines where you can describe symptoms and get guidance on whether you need emergency care.",
    // Onboarding
    obStep:"STEP", obOf:"OF",
    obLangTitle:"What language do you prefer?", obLangSub:"We'll make the app work best for you",
    obCountryTitle:"What country are you in?", obCountrySub:"Required to find doctors near you",
    obCountrySearch:"🔍 Search country...", obCountryRequired:"⚠️ Please select your country to continue",
    obCityTitle:"What city are you in?", obCitySub:"Type your city and state or region",
    obCityPlaceholder:"e.g. your city and region", obCityHint:"💡 Include your state or region for best results",
    obCityRequired:"⚠️ Please enter your city to continue",
    obCodeTitle:"Location code", obCodeSub:"Helps us find doctors in your exact area",
    obNoPostal:"no postal code required",
    obGpsTitle:"What's your exact location?", obGpsSub:"Helps us find the nearest doctors to you",
    obGpsUseLocation:"Use My Current Location",
    obGpsDesc:"The most accurate way — works anywhere in the world, no postal code needed.",
    obGpsAllow:"📍 Allow Location Access", obGpsGetting:"📡 Getting your location...",
    obGpsCaptured:"✅ Location captured!",
    obGpsAreaLabel:"ENTER YOUR AREA OR NEIGHBORHOOD",
    obGpsAreaHint:"Type your neighborhood, district, or local area name",
    obGpsReady:"✅ Great — we have enough to find doctors near you!",
    obInsuranceTitle:"What insurance do you have?", obInsuranceSub:"We'll only show doctors who accept your plan",
    obInsurancePlaceholder:"e.g. Kaiser Permanente, Humana...",
    obInsuranceVerifying:"🔍 Verifying insurance plan...",
    obInsuranceVerified:"✅ Verified:", obInsuranceTip:"💡 Type your insurance name and we will verify it is real",
    obInsuranceBad:"That doesn't appear to be a real insurance plan. Please check the spelling.",
    obConditionsTitle:"Any existing medical conditions?", obConditionsSub:"Helps us recommend the right doctors",
    obConditionOtherPh:"Please describe your condition...",
    obGenderTitle:"Preferred doctor gender?", obGenderSub:"We'll filter your results accordingly",
    obBack:"← Back", obContinue:"Continue →", obGetStarted:"Get Started 🚀", obSkip:"Skip for now",
    // Aegis AI
    aegisTitle:"Aegis AI", aegisSubtitle:"MEDIGUIDE ASSISTANT",
    aegisWelcome:"Hi! I'm **Aegis AI**, your MediGuide assistant. I can help you navigate the app, explain medical terms, answer general health questions, or find the right care for you.\n\nWhat can I help you with?",
    aegisStarter1:"What is a cardiologist?", aegisStarter2:"How do I book an appointment?",
    aegisStarter3:"What if I have no insurance?", aegisStarter4:"How does the symptom checker work?",
    aegisDisclaimer2:"General guidance only — not a substitute for medical advice",
    aegisPlaceholder:"Ask Aegis anything...",
    aegisError:"Sorry, I couldn't connect right now. Please try again in a moment.",
    // Booking modal
    bookAppointmentTitle:"Book Appointment",
    bkReason:"📋 Reason for Visit", bkReasonSub:"This helps",bkReasonSub2:"prepare before you arrive.",
    bkReasonDescLabel:"BRIEFLY DESCRIBE", bkReasonPlaceholder:"e.g. I've had a persistent headache for 3 days...",
    bkVisit1:"New problem or symptom", bkVisit2:"Follow-up appointment", bkVisit3:"Annual checkup",
    bkVisit4:"Prescription refill", bkVisit5:"Test results review", bkVisit6:"Other",
    bkPatient:"👤 Patient Information", bkPatientSub:"This information is required by the clinic to confirm your booking.",
    bkFullName:"FULL NAME", bkNamePlaceholder:"e.g. Maria Gonzalez",
    bkDOB:"DATE OF BIRTH", bkDOBPlaceholder:"MM/DD/YYYY", bkDOBHint:"Enter as MM/DD/YYYY — used to verify your identity",
    bkDOBValid:"✅ Valid date of birth",
    bkPhone:"PHONE NUMBER", bkPhonePlaceholder:"e.g. +1 (555) 123-4567", bkPhoneHint:"The clinic will call this number to confirm your appointment",
    bkPhoneValid:"✅ Valid phone number",
    bkInsurance:"🛡️ Insurance Confirmation", bkInsuranceSub:"Please confirm your insurance so the clinic can prepare your billing.",
    bkFromProfile:"FROM YOUR PROFILE", bkInsuranceCurrent:"Is this still your current insurance?",
    bkInsuranceYes:"Yes, this is correct", bkInsuranceManual:"No, I'll enter manually",
    bkNoInsuranceOnFile:"⚠️ No insurance on file. Please enter your insurance details below.",
    bkInsuranceProvider:"INSURANCE PROVIDER", bkInsuranceProviderPh:"e.g. Blue Cross, Aetna, NHS...",
    bkPolicyNumber:"POLICY NUMBER (optional)", bkPolicyPh:"e.g. XYZ123456789",
    bkNewReturning:"🏥 New or Returning Patient?",
    bkNewPatient:"New Patient", bkNewPatientDesc:"This will be my first visit to this clinic",
    bkReturning:"Returning Patient", bkReturningDesc:"I have visited this clinic before",
    bkPrivacy:"🔒 Privacy Notice",
    bkPrivacyUS:"Your health information is protected under HIPAA (Health Insurance Portability and Accountability Act).",
    bkPrivacyIntl:"Your health information is handled in accordance with applicable local privacy laws and clinic policy.",
    bkPrivacyHow:"How your information is used:",
    bkPrivacyUse1:"For treatment — your doctor and care team will use your information to provide care",
    bkPrivacyUse2:"For payment — your insurance may receive information to process billing",
    bkPrivacyUse3:"For operations — the clinic may use information to improve care quality",
    bkPrivacyRights:"Your rights:",
    bkPrivacyRight1:"You have the right to access your health records",
    bkPrivacyRight2:"You have the right to request corrections",
    bkPrivacyRight3:"You have the right to know who has accessed your records",
    bkPrivacyRight4:"You have the right to file a complaint",
    bkPrivacyNoSell:"MediGuide and the clinic will never sell your health information to third parties.",
    bkPrivacyAgree:"I have read and acknowledge the Privacy Notice. I understand how my health information will be used and my rights as a patient.",
    bkReminders:"🔔 Appointment Reminders", bkRemindersSub:"How would you like to be reminded about your appointment?",
    bkSMS:"Text message (SMS)", bkSMSDesc:"Get a text 24 hours before",
    bkEmail:"Email", bkEmailDesc:"Get an email 24 hours before",
    bkCall:"Phone call", bkCallDesc:"Get a call 24 hours before",
    bkNoReminders:"No reminders", bkNoRemindersDesc:"I'll remember on my own",
    bkPickDate:"📅 Pick a Date",
    bkAvailable:"Available", bkUnavailable:"Unavailable", bkToday:"Today",
    bkPickTime:"🕐 Pick a Time",
    bkMorning:"Morning", bkAfternoon:"Afternoon", bkBooked:"Booked",
    bkConfirmTitle:"✅ Confirm Appointment",
    bkSummary:"APPOINTMENT SUMMARY",
    bkWith:"With", bkDate:"Date", bkTime:"Time", bkVisitType:"Visit Type",
    bkPrivacyLabel:"Privacy", bkPrivacyAgreed:"Agreed", bkReminderLabel:"Reminder",
    bkConfirmNote:"By confirming you agree this is a request, not a guaranteed appointment.",
    bkProgressLabels:"Reason,Patient,Insurance,Type,Privacy,Reminders,Date,Time,Confirm",
  },

  Spanish: {
    tagline:"TU NAVEGADOR DE SALUD", login:"Iniciar sesión", getStarted:"Comenzar — Es Gratis →",
    createAccount:"Crear Cuenta Gratis →", seeDemo:"Ver Demo ▶", comingSoon:"🚧 ¡Próximamente!",
    alreadyAccount:"¿Ya tienes una cuenta?", selectLanguage:"Idioma",
    heroTitle1:"Mejor Atención Médica,", heroTitle2:"Para Todos.",
    heroSubtext:"No importa quién eres ni de dónde eres, tus problemas merecen ser escuchados.",
    freeBadge:"GRATIS · SIN SEGURO REQUERIDO",
    whatWeDo:"QUÉ HACE MEDIGUIDE", everythingYouNeed:"Todo lo que necesitas, en un solo lugar",
    tapToLearn:"Toca cualquier tarjeta para saber más.", tapMore:"Toca para saber más ↓", tapClose:"Toca para cerrar ↑",
    aboutAegis:"Sobre Aegis AI",
    aegisDisclaimer:"Aegis es el asistente integrado de MediGuide para orientación general — explicando términos médicos, navegando la app y respondiendo preguntas de salud.",
    aegisWarning:"Aegis no es un verificador de síntomas ni sustituye el consejo médico profesional.",
    aegisNote:"Para síntomas, siempre usa el verificador de síntomas dedicado.",
    readyTitle:"¿Listo para encontrar tu médico?", readyDesc:"Regístrate en menos de un minuto. Sin seguro. Sin tarifas. Nunca.",
    gettingStarted:"Apenas estamos comenzando.", reviewDesc1:"MediGuide es una nueva app con una misión real — hacer la atención médica accesible para todos, en todas partes.",
    reviewDesc2:"Nos encantaría saber qué piensas. Tu opinión nos ayuda a mejorar para la próxima persona que nos necesite.",
    reviewFirst:"Tu reseña podría ser la primera ✨", reviewHelp:"Cuéntanos qué te ayudó 💙", reviewImprove:"Ayúdanos a mejorar para otros 🌍",
    realReviews:"Reseñas reales de usuarios reales — próximamente.",
    tryAndShare:"Prueba MediGuide y Comparte tu Opinión →",
    foundProblem:"¿Encontraste un problema?", reportDesc:"Siempre estamos mejorando. Si algo no funciona bien, díganos y lo arreglaremos.",
    reportIt:"Reportar →", disclaimer:"⚠️ MediGuide es solo para fines informativos y no proporciona consejos médicos, diagnósticos ni tratamientos. En una emergencia, llama al número de emergencia local.",
    checkSymptoms:"Verificar Síntomas", findDoctor:"Encontrar Médico", noInsurance:"Sin Seguro", aegisAI:"Aegis AI",
    checkSymptomsDesc:"Describe cómo te sientes y nuestra IA hace preguntas de seguimiento para guiarte hacia la atención correcta.",
    findDoctorDesc:"Filtra por idioma, género, distancia y seguro. Reserva una cita en minutos, sin necesidad de llamar.",
    noInsuranceDesc:"Clínicas gratuitas, programas gubernamentales, consejos para negociar facturas médicas y tus derechos legales — todo en un lugar.",
    aegisAIDesc:"Tu guía de salud personal. Pregunta cualquier cosa — términos médicos, cómo usar la app, o preguntas generales de salud. Disponible en cada pantalla.",
    logIn:"Iniciar sesión", signUp:"Registrarse", fullName:"NOMBRE COMPLETO", email:"CORREO", password:"CONTRASEÑA",
    minChars:"(mín. 6 caracteres)", rememberMe:"Recuérdame", createAcc:"Crear Cuenta →",
    noAccount:"¿No tienes cuenta?", haveAccount:"¿Ya tienes cuenta?",
    enterEmail:"Por favor ingresa tu correo.", validEmail:"Por favor ingresa un correo válido.",
    enterPassword:"Por favor ingresa tu contraseña.", enterName:"Por favor ingresa tu nombre completo.",
    minPassword:"La contraseña debe tener al menos 6 caracteres.",
    accountExists:"Ya existe una cuenta con ese correo. Intenta iniciar sesión.",
    noAccountFound:"No se encontró cuenta con ese correo. Por favor regístrate primero.",
    incorrectPassword:"Contraseña incorrecta. Por favor intenta de nuevo.",
    accountCreated:"¡Cuenta creada! Llevándote a la configuración...",
    home:"Inicio", browse:"Buscar", noIns:"Sin Seguro", profile:"Perfil",
    howAreYou:"¿Cómo te sientes hoy?", welcomeBack:"Bienvenido de nuevo",
    checkYourSymptoms:"Verificar Síntomas", commonConditions:"Condiciones Comunes",
    startAssessment:"Iniciar Evaluación →", getAssessment:"Obtener Mi Evaluación 🔍",
    nextQuestion:"Siguiente Pregunta →", checkDifferent:"Verificar Síntomas Diferentes",
    preparingQuestions:"Preparando tus preguntas...", analyzingAnswers:"Analizando todas tus respuestas...",
    urgency:"URGENCIA", specialist:"ESPECIALISTA RECOMENDADO", reason:"POR QUÉ",
    tip:"CONSEJO", recommendedDoctors:"MÉDICOS RECOMENDADOS CERCANOS",
    browseAll:"Ver Todos los Médicos →", question:"Pregunta",
    findYourDoctor:"Encuentra Tu Médico", searchDoctors:"Buscar por nombre o especialidad...",
    distance:"Distancia", allSpecialties:"Todas las Especialidades", ignorePrefs:"Ignorar mis preferencias",
    usePrefs:"Usar mis preferencias", bookAppointment:"Reservar Cita",
    yearsExp:"años exp", reviews:"reseñas", available:"● Disponible", busy:"○ Ocupado",
    miAway:"mi de distancia", recommended:"RECOMENDADO", speaks:"Habla",
    bookWith:"Reservar con", reasonForVisit:"Motivo de Visita",
    patientInfo:"Info del Paciente", insuranceInfo:"Seguro", newReturning:"¿Nuevo o Regresa?",
    hipaa:"HIPAA", reminders:"Recordatorios", calendar:"Calendario", time:"Hora",
    confirm:"Confirmar", done:"Listo",
    continueBtn:"Continuar →", backBtn:"← Atrás", confirmBooking:"Confirmar Cita ✓",
    appointmentBooked:"¡Cita Reservada!",
    myProfile:"Mi Perfil", editProfile:"Editar Perfil", saveProfile:"Guardar Perfil",
    signOut:"Cerrar Sesión", preferences:"Preferencias", language:"Idioma",
    country:"País", city:"Ciudad", insurance:"Seguro", doctorGender:"Género del Médico",
    conditions:"Condiciones", locationCode:"Código de Ubicación",
  },

  French: {
    tagline:"VOTRE NAVIGATEUR SANTÉ", login:"Se connecter", getStarted:"Commencer — C'est Gratuit →",
    createAccount:"Créer un Compte Gratuit →", seeDemo:"Voir la Démo ▶", comingSoon:"🚧 Bientôt disponible!",
    alreadyAccount:"Vous avez déjà un compte?", selectLanguage:"Langue",
    heroTitle1:"Meilleurs Soins de Santé,", heroTitle2:"Pour Tous.",
    heroSubtext:"Peu importe qui vous êtes et d'où vous venez, vos problèmes méritent d'être entendus.",
    freeBadge:"GRATUIT · SANS ASSURANCE REQUISE",
    whatWeDo:"CE QUE FAIT MEDIGUIDE", everythingYouNeed:"Tout ce dont vous avez besoin, en un seul endroit",
    tapToLearn:"Appuyez sur une carte pour en savoir plus.", tapMore:"Appuyer pour en savoir plus ↓", tapClose:"Appuyer pour fermer ↑",
    aboutAegis:"À propos d'Aegis AI",
    aegisDisclaimer:"Aegis est l'assistant intégré de MediGuide pour des conseils généraux — expliquer les termes médicaux, naviguer dans l'application et répondre aux questions de santé.",
    aegisWarning:"Aegis n'est pas un vérificateur de symptômes et ne remplace pas les conseils médicaux professionnels.",
    aegisNote:"Pour les symptômes, utilisez toujours le vérificateur de symptômes dédié.",
    readyTitle:"Prêt à trouver votre médecin?", readyDesc:"Inscrivez-vous en moins d'une minute. Sans assurance. Sans frais. Jamais.",
    gettingStarted:"Nous débutons tout juste.", reviewDesc1:"MediGuide est une nouvelle application avec une vraie mission — rendre les soins de santé accessibles à tous, partout.",
    reviewDesc2:"Nous aimerions connaître votre avis. Vos commentaires nous aident à nous améliorer pour la prochaine personne qui nous a besoin.",
    reviewFirst:"Votre avis pourrait être le premier ✨", reviewHelp:"Dites-nous ce qui vous a aidé 💙", reviewImprove:"Aidez-nous à nous améliorer pour les autres 🌍",
    realReviews:"De vrais avis de vrais utilisateurs — bientôt disponible.",
    tryAndShare:"Essayez MediGuide et Partagez votre Avis →",
    foundProblem:"Vous avez trouvé un problème?", reportDesc:"Nous nous améliorons constamment. Si quelque chose ne fonctionne pas, dites-le nous.",
    reportIt:"Signaler →", disclaimer:"⚠️ MediGuide est uniquement à titre informatif et ne fournit pas de conseils médicaux, de diagnostics ou de traitements. En cas d'urgence, appelez le numéro d'urgence local.",
    checkSymptoms:"Vérifier les Symptômes", findDoctor:"Trouver un Médecin", noInsurance:"Sans Assurance", aegisAI:"Aegis AI",
    checkSymptomsDesc:"Décrivez ce que vous ressentez et notre IA pose des questions pour vous guider vers les bons soins.",
    findDoctorDesc:"Filtrez par langue, sexe, distance et assurance. Prenez rendez-vous en quelques minutes.",
    noInsuranceDesc:"Cliniques gratuites, programmes gouvernementaux, conseils pour négocier les factures médicales et vos droits légaux.",
    aegisAIDesc:"Votre guide de santé personnel. Posez n'importe quelle question — disponible sur chaque écran, à tout moment.",
    logIn:"Se connecter", signUp:"S'inscrire", fullName:"NOM COMPLET", email:"EMAIL", password:"MOT DE PASSE",
    minChars:"(min. 6 caractères)", rememberMe:"Se souvenir de moi", createAcc:"Créer un Compte →",
    noAccount:"Pas de compte?", haveAccount:"Déjà un compte?",
    enterEmail:"Veuillez entrer votre email.", validEmail:"Veuillez entrer un email valide.",
    enterPassword:"Veuillez entrer votre mot de passe.", enterName:"Veuillez entrer votre nom complet.",
    minPassword:"Le mot de passe doit contenir au moins 6 caractères.",
    accountExists:"Un compte avec cet email existe déjà. Essayez de vous connecter.",
    noAccountFound:"Aucun compte trouvé avec cet email. Veuillez vous inscrire d'abord.",
    incorrectPassword:"Mot de passe incorrect. Veuillez réessayer.",
    accountCreated:"Compte créé! Vous amenant à la configuration...",
    home:"Accueil", browse:"Rechercher", noIns:"Sans Assurance", profile:"Profil",
    howAreYou:"Comment vous sentez-vous aujourd'hui?", welcomeBack:"Bon retour",
    checkYourSymptoms:"Vérifier les Symptômes", commonConditions:"Conditions Courantes",
    startAssessment:"Commencer l'Évaluation →", getAssessment:"Obtenir Mon Évaluation 🔍",
    nextQuestion:"Question Suivante →", checkDifferent:"Vérifier d'Autres Symptômes",
    preparingQuestions:"Préparation de vos questions...", analyzingAnswers:"Analyse de toutes vos réponses...",
    urgency:"URGENCE", specialist:"SPÉCIALISTE RECOMMANDÉ", reason:"POURQUOI",
    tip:"CONSEIL", recommendedDoctors:"MÉDECINS RECOMMANDÉS À PROXIMITÉ",
    browseAll:"Voir Tous les Médecins →", question:"Question",
    findYourDoctor:"Trouvez Votre Médecin", searchDoctors:"Rechercher par nom ou spécialité...",
    distance:"Distance", allSpecialties:"Toutes les Spécialités", ignorePrefs:"Ignorer mes préférences",
    usePrefs:"Utiliser mes préférences", bookAppointment:"Prendre Rendez-vous",
    yearsExp:"ans d'exp", reviews:"avis", available:"● Disponible", busy:"○ Occupé",
    miAway:"mi de distance", recommended:"RECOMMANDÉ", speaks:"Parle",
    bookWith:"Réserver avec", reasonForVisit:"Motif de Visite",
    patientInfo:"Info Patient", insuranceInfo:"Assurance", newReturning:"Nouveau ou Retour?",
    hipaa:"HIPAA", reminders:"Rappels", calendar:"Calendrier", time:"Heure",
    confirm:"Confirmer", done:"Terminé",
    continueBtn:"Continuer →", backBtn:"← Retour", confirmBooking:"Confirmer le Rendez-vous ✓",
    appointmentBooked:"Rendez-vous Pris!",
    myProfile:"Mon Profil", editProfile:"Modifier le Profil", saveProfile:"Enregistrer le Profil",
    signOut:"Se Déconnecter", preferences:"Préférences", language:"Langue",
    country:"Pays", city:"Ville", insurance:"Assurance", doctorGender:"Genre du Médecin",
    conditions:"Conditions", locationCode:"Code de Localisation",
  },

  Arabic: {
    tagline:"دليلك الصحي", login:"تسجيل الدخول", getStarted:"ابدأ — مجاناً →",
    createAccount:"إنشاء حساب مجاني →", seeDemo:"شاهد العرض ▶", comingSoon:"🚧 قريباً!",
    alreadyAccount:"هل لديك حساب بالفعل؟", selectLanguage:"اللغة",
    heroTitle1:"رعاية صحية أفضل،", heroTitle2:"للجميع.",
    heroSubtext:"بغض النظر عن هويتك ومن أين أتيت، مشاكلك تستحق أن تُسمع.",
    freeBadge:"مجاني · لا يلزم تأمين",
    whatWeDo:"ماذا يفعل ميدي غايد", everythingYouNeed:"كل ما تحتاجه، في مكان واحد",
    tapToLearn:"انقر على أي بطاقة لمعرفة المزيد.", tapMore:"انقر لمعرفة المزيد ↓", tapClose:"انقر للإغلاق ↑",
    aboutAegis:"حول Aegis AI",
    aegisDisclaimer:"Aegis هو المساعد المدمج في MediGuide للتوجيه العام — شرح المصطلحات الطبية والتنقل في التطبيق والإجابة على الأسئلة الصحية.",
    aegisWarning:"Aegis ليس أداة فحص للأعراض وليس بديلاً عن المشورة الطبية المهنية.",
    aegisNote:"للأعراض، استخدم دائماً أداة فحص الأعراض المخصصة.",
    readyTitle:"هل أنت مستعد للعثور على طبيبك؟", readyDesc:"سجّل في أقل من دقيقة. لا تأمين مطلوب. لا رسوم. أبداً.",
    gettingStarted:"نحن في البداية.", reviewDesc1:"MediGuide تطبيق جديد بمهمة حقيقية — جعل الرعاية الصحية متاحة للجميع في كل مكان.",
    reviewDesc2:"نود سماع رأيك. ملاحظاتك تساعدنا على التحسين للشخص التالي الذي يحتاجنا.",
    reviewFirst:"مراجعتك يمكن أن تكون الأولى ✨", reviewHelp:"أخبرنا بما ساعدك 💙", reviewImprove:"ساعدنا على التحسين للآخرين 🌍",
    realReviews:"مراجعات حقيقية من مستخدمين حقيقيين — قريباً.",
    tryAndShare:"جرّب MediGuide وشارك رأيك →",
    foundProblem:"وجدت مشكلة؟", reportDesc:"نحن نتحسن دائماً. إذا كان هناك شيء لا يعمل بشكل صحيح، أخبرنا.",
    reportIt:"إبلاغ →", disclaimer:"⚠️ MediGuide للأغراض المعلوماتية فقط ولا يقدم مشورة طبية أو تشخيصاً أو علاجاً. في حالات الطوارئ، اتصل برقم الطوارئ المحلي.",
    checkSymptoms:"فحص الأعراض", findDoctor:"إيجاد طبيب", noInsurance:"بدون تأمين", aegisAI:"Aegis AI",
    checkSymptomsDesc:"صف ما تشعر به وسيطرح الذكاء الاصطناعي أسئلة متابعة ذكية لتوجيهك نحو الرعاية المناسبة.",
    findDoctorDesc:"فلتر حسب اللغة والجنس والمسافة والتأمين. احجز موعداً في دقائق.",
    noInsuranceDesc:"عيادات مجانية وبرامج حكومية ونصائح للتفاوض على الفواتير الطبية وحقوقك القانونية.",
    aegisAIDesc:"دليلك الصحي الشخصي. اسأل أي شيء — متاح على كل شاشة في أي وقت.",
    logIn:"تسجيل الدخول", signUp:"إنشاء حساب", fullName:"الاسم الكامل", email:"البريد الإلكتروني", password:"كلمة المرور",
    minChars:"(6 أحرف على الأقل)", rememberMe:"تذكرني", createAcc:"إنشاء حساب →",
    noAccount:"ليس لديك حساب؟", haveAccount:"لديك حساب بالفعل؟",
    enterEmail:"الرجاء إدخال بريدك الإلكتروني.", validEmail:"الرجاء إدخال بريد إلكتروني صحيح.",
    enterPassword:"الرجاء إدخال كلمة المرور.", enterName:"الرجاء إدخال اسمك الكامل.",
    minPassword:"يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل.",
    accountExists:"يوجد حساب بهذا البريد الإلكتروني. حاول تسجيل الدخول.",
    noAccountFound:"لم يتم العثور على حساب بهذا البريد. يرجى التسجيل أولاً.",
    incorrectPassword:"كلمة المرور غير صحيحة. حاول مجدداً.",
    accountCreated:"تم إنشاء الحساب! جارٍ نقلك إلى الإعداد...",
    home:"الرئيسية", browse:"تصفح", noIns:"بدون تأمين", profile:"الملف الشخصي",
    howAreYou:"كيف تشعر اليوم؟", welcomeBack:"مرحباً بعودتك",
    checkYourSymptoms:"فحص الأعراض", commonConditions:"الحالات الشائعة",
    startAssessment:"بدء التقييم →", getAssessment:"الحصول على تقييمي 🔍",
    nextQuestion:"السؤال التالي →", checkDifferent:"فحص أعراض مختلفة",
    preparingQuestions:"جارٍ تحضير أسئلتك...", analyzingAnswers:"جارٍ تحليل جميع إجاباتك...",
    urgency:"الإلحاح", specialist:"الأخصائي الموصى به", reason:"السبب",
    tip:"نصيحة", recommendedDoctors:"الأطباء الموصى بهم بالقرب منك",
    browseAll:"تصفح جميع الأطباء →", question:"سؤال",
    findYourDoctor:"ابحث عن طبيبك", searchDoctors:"البحث بالاسم أو التخصص...",
    distance:"المسافة", allSpecialties:"جميع التخصصات", ignorePrefs:"تجاهل تفضيلاتي",
    usePrefs:"استخدام تفضيلاتي", bookAppointment:"حجز موعد",
    yearsExp:"سنوات خبرة", reviews:"مراجعات", available:"● متاح", busy:"○ مشغول",
    miAway:"ميل", recommended:"موصى به", speaks:"يتحدث",
    bookWith:"حجز مع", reasonForVisit:"سبب الزيارة",
    patientInfo:"معلومات المريض", insuranceInfo:"التأمين", newReturning:"جديد أم عائد؟",
    hipaa:"HIPAA", reminders:"التذكيرات", calendar:"التقويم", time:"الوقت",
    confirm:"تأكيد", done:"تم",
    continueBtn:"متابعة →", backBtn:"→ رجوع", confirmBooking:"تأكيد الحجز ✓",
    appointmentBooked:"تم حجز الموعد!",
    myProfile:"ملفي الشخصي", editProfile:"تعديل الملف", saveProfile:"حفظ الملف",
    signOut:"تسجيل الخروج", preferences:"التفضيلات", language:"اللغة",
    country:"البلد", city:"المدينة", insurance:"التأمين", doctorGender:"جنس الطبيب",
    conditions:"الحالات", locationCode:"رمز الموقع",
  },

  Hindi: {
    tagline:"आपका स्वास्थ्य मार्गदर्शक", login:"लॉग इन", getStarted:"शुरू करें — यह मुफ़्त है →",
    createAccount:"मुफ़्त खाता बनाएं →", seeDemo:"डेमो देखें ▶", comingSoon:"🚧 जल्द आ रहा है!",
    alreadyAccount:"पहले से खाता है?", selectLanguage:"भाषा",
    heroTitle1:"बेहतर स्वास्थ्य सेवा,", heroTitle2:"सबके लिए।",
    heroSubtext:"आप कोई भी हों और कहीं से भी हों, आपकी समस्याएं सुनी जाने की हकदार हैं।",
    freeBadge:"मुफ़्त · बीमा की जरूरत नहीं",
    whatWeDo:"MEDIGUIDE क्या करता है", everythingYouNeed:"सब कुछ जो आपको चाहिए, एक जगह",
    tapToLearn:"अधिक जानने के लिए किसी भी कार्ड पर टैप करें।", tapMore:"अधिक जानने के लिए टैप करें ↓", tapClose:"बंद करने के लिए टैप करें ↑",
    aboutAegis:"Aegis AI के बारे में",
    aegisDisclaimer:"Aegis MediGuide का सहायक है — चिकित्सा शब्दों को समझाना, ऐप नेविगेट करना और स्वास्थ्य प्रश्नों का उत्तर देना।",
    aegisWarning:"Aegis एक लक्षण जांचकर्ता नहीं है और पेशेवर चिकित्सा सलाह का विकल्प नहीं है।",
    aegisNote:"लक्षणों के लिए, हमेशा समर्पित लक्षण जांचकर्ता का उपयोग करें।",
    readyTitle:"अपना डॉक्टर खोजने के लिए तैयार हैं?", readyDesc:"एक मिनट से कम में साइन अप करें। कोई बीमा नहीं। कोई शुल्क नहीं। कभी नहीं।",
    gettingStarted:"हम अभी शुरू हो रहे हैं।", reviewDesc1:"MediGuide एक वास्तविक मिशन के साथ एक नया ऐप है — सभी के लिए स्वास्थ्य सेवा को सुलभ बनाना।",
    reviewDesc2:"हम जानना चाहते हैं कि आप क्या सोचते हैं। आपकी प्रतिक्रिया हमें अगले व्यक्ति के लिए बेहतर बनाने में मदद करती है।",
    reviewFirst:"आपकी समीक्षा पहली हो सकती है ✨", reviewHelp:"बताएं क्या मददगार था 💙", reviewImprove:"दूसरों के लिए बेहतर बनाने में मदद करें 🌍",
    realReviews:"वास्तविक उपयोगकर्ताओं से वास्तविक समीक्षाएं — जल्द आ रही हैं।",
    tryAndShare:"MediGuide आज़माएं और अपनी राय साझा करें →",
    foundProblem:"कोई समस्या मिली?", reportDesc:"हम हमेशा सुधार कर रहे हैं। अगर कुछ ठीक से काम नहीं कर रहा, हमें बताएं।",
    reportIt:"रिपोर्ट करें →", disclaimer:"⚠️ MediGuide केवल सूचनात्मक उद्देश्यों के लिए है। आपातकाल में, स्थानीय आपातकालीन नंबर पर कॉल करें।",
    checkSymptoms:"लक्षण जांचें", findDoctor:"डॉक्टर खोजें", noInsurance:"बीमा नहीं", aegisAI:"Aegis AI",
    checkSymptomsDesc:"बताएं आप कैसा महसूस कर रहे हैं और हमारी AI सही देखभाल की ओर मार्गदर्शन के लिए स्मार्ट प्रश्न पूछेगी।",
    findDoctorDesc:"भाषा, लिंग, दूरी और बीमा के अनुसार फ़िल्टर करें। मिनटों में अपॉइंटमेंट बुक करें।",
    noInsuranceDesc:"मुफ़्त क्लीनिक, सरकारी कार्यक्रम, चिकित्सा बिल वार्ता युक्तियां और आपके कानूनी अधिकार।",
    aegisAIDesc:"आपका व्यक्तिगत स्वास्थ्य मार्गदर्शक। कुछ भी पूछें — हर स्क्रीन पर उपलब्ध।",
    logIn:"लॉग इन", signUp:"साइन अप", fullName:"पूरा नाम", email:"ईमेल", password:"पासवर्ड",
    minChars:"(न्यूनतम 6 अक्षर)", rememberMe:"मुझे याद रखें", createAcc:"खाता बनाएं →",
    noAccount:"खाता नहीं है?", haveAccount:"पहले से खाता है?",
    enterEmail:"कृपया अपना ईमेल दर्ज करें।", validEmail:"कृपया एक वैध ईमेल दर्ज करें।",
    enterPassword:"कृपया अपना पासवर्ड दर्ज करें।", enterName:"कृपया अपना पूरा नाम दर्ज करें।",
    minPassword:"पासवर्ड में कम से कम 6 अक्षर होने चाहिए।",
    accountExists:"उस ईमेल से पहले से एक खाता है। लॉग इन करने का प्रयास करें।",
    noAccountFound:"उस ईमेल से कोई खाता नहीं मिला। पहले साइन अप करें।",
    incorrectPassword:"गलत पासवर्ड। फिर से प्रयास करें।",
    accountCreated:"खाता बनाया गया! सेटअप पर ले जा रहे हैं...",
    home:"होम", browse:"खोजें", noIns:"बीमा नहीं", profile:"प्रोफ़ाइल",
    howAreYou:"आज आप कैसा महसूस कर रहे हैं?", welcomeBack:"वापसी पर स्वागत है",
    checkYourSymptoms:"लक्षण जांचें", commonConditions:"सामान्य स्थितियां",
    startAssessment:"मूल्यांकन शुरू करें →", getAssessment:"मेरा मूल्यांकन प्राप्त करें 🔍",
    nextQuestion:"अगला प्रश्न →", checkDifferent:"अलग लक्षण जांचें",
    preparingQuestions:"आपके प्रश्न तैयार हो रहे हैं...", analyzingAnswers:"आपके सभी उत्तरों का विश्लेषण हो रहा है...",
    urgency:"तात्कालिकता", specialist:"अनुशंसित विशेषज्ञ", reason:"कारण",
    tip:"सुझाव", recommendedDoctors:"नजदीकी अनुशंसित डॉक्टर",
    browseAll:"सभी डॉक्टर देखें →", question:"प्रश्न",
    findYourDoctor:"अपना डॉक्टर खोजें", searchDoctors:"नाम या विशेषता से खोजें...",
    distance:"दूरी", allSpecialties:"सभी विशेषताएं", ignorePrefs:"मेरी प्राथमिकताएं अनदेखा करें",
    usePrefs:"मेरी प्राथमिकताएं उपयोग करें", bookAppointment:"अपॉइंटमेंट बुक करें",
    yearsExp:"वर्ष अनुभव", reviews:"समीक्षाएं", available:"● उपलब्ध", busy:"○ व्यस्त",
    miAway:"मील दूर", recommended:"अनुशंसित", speaks:"बोलते हैं",
    bookWith:"के साथ बुक करें", reasonForVisit:"यात्रा का कारण",
    patientInfo:"मरीज़ की जानकारी", insuranceInfo:"बीमा", newReturning:"नया या वापसी?",
    hipaa:"HIPAA", reminders:"अनुस्मारक", calendar:"कैलेंडर", time:"समय",
    confirm:"पुष्टि करें", done:"हो गया",
    continueBtn:"जारी रखें →", backBtn:"← वापस", confirmBooking:"बुकिंग पुष्टि करें ✓",
    appointmentBooked:"अपॉइंटमेंट बुक हो गई!",
    myProfile:"मेरी प्रोफ़ाइल", editProfile:"प्रोफ़ाइल संपादित करें", saveProfile:"प्रोफ़ाइल सहेजें",
    signOut:"साइन आउट", preferences:"प्राथमिकताएं", language:"भाषा",
    country:"देश", city:"शहर", insurance:"बीमा", doctorGender:"डॉक्टर का लिंग",
    conditions:"स्थितियां", locationCode:"स्थान कोड",
  },

  Mandarin: {
    tagline:"您的健康导航员", login:"登录", getStarted:"开始使用 — 免费 →",
    createAccount:"创建免费账户 →", seeDemo:"查看演示 ▶", comingSoon:"🚧 即将推出！",
    alreadyAccount:"已有账户？", selectLanguage:"语言",
    heroTitle1:"更好的医疗保健，", heroTitle2:"为所有人。",
    heroSubtext:"无论您是谁，来自哪里，您的问题都值得被倾听。",
    freeBadge:"免费 · 无需保险",
    whatWeDo:"MEDIGUIDE能做什么", everythingYouNeed:"您需要的一切，尽在一处",
    tapToLearn:"点击任意卡片了解更多。", tapMore:"点击了解更多 ↓", tapClose:"点击关闭 ↑",
    aboutAegis:"关于 Aegis AI",
    aegisDisclaimer:"Aegis 是 MediGuide 的内置助手，用于一般指导——解释医学术语、导航应用程序和回答健康问题。",
    aegisWarning:"Aegis 不是症状检查器，不能替代专业医疗建议。",
    aegisNote:"对于症状，请始终使用专用症状检查器。",
    readyTitle:"准备好找到您的医生了吗？", readyDesc:"不到一分钟即可注册。无需保险。无需费用。永远。",
    gettingStarted:"我们刚刚起步。", reviewDesc1:"MediGuide 是一款具有真实使命的新应用——让所有人都能获得医疗保健。",
    reviewDesc2:"我们很乐意听取您的意见。您的反馈帮助我们为下一个需要我们的人改进。",
    reviewFirst:"您的评论可能是第一个 ✨", reviewHelp:"告诉我们什么对您有帮助 💙", reviewImprove:"帮助我们为他人改进 🌍",
    realReviews:"来自真实用户的真实评论——即将推出。",
    tryAndShare:"试用 MediGuide 并分享您的想法 →",
    foundProblem:"发现问题？", reportDesc:"我们一直在改进。如果有什么不对劲，请告诉我们。",
    reportIt:"报告 →", disclaimer:"⚠️ MediGuide 仅供参考，不提供医疗建议、诊断或治疗。紧急情况下，请拨打当地紧急电话。",
    checkSymptoms:"检查症状", findDoctor:"查找医生", noInsurance:"无保险", aegisAI:"Aegis AI",
    checkSymptomsDesc:"描述您的感受，我们的AI会提出智能后续问题，引导您获得正确的护理。",
    findDoctorDesc:"按语言、性别、距离和保险进行筛选。几分钟内预约，无需致电。",
    noInsuranceDesc:"免费诊所、政府计划、医疗账单谈判技巧和您的法律权利——尽在一处。",
    aegisAIDesc:"您的个人健康向导。随时提问——医学术语、应用使用方法或一般健康问题。每个屏幕都可使用。",
    logIn:"登录", signUp:"注册", fullName:"全名", email:"电子邮件", password:"密码",
    minChars:"（最少6个字符）", rememberMe:"记住我", createAcc:"创建账户 →",
    noAccount:"没有账户？", haveAccount:"已有账户？",
    enterEmail:"请输入您的电子邮件地址。", validEmail:"请输入有效的电子邮件地址。",
    enterPassword:"请输入您的密码。", enterName:"请输入您的全名。",
    minPassword:"密码必须至少6个字符。",
    accountExists:"该电子邮件已有账户。请尝试登录。",
    noAccountFound:"未找到该电子邮件的账户。请先注册。",
    incorrectPassword:"密码不正确。请重试。",
    accountCreated:"账户已创建！正在带您进行设置...",
    home:"主页", browse:"浏览", noIns:"无保险", profile:"个人资料",
    howAreYou:"您今天感觉怎么样？", welcomeBack:"欢迎回来",
    checkYourSymptoms:"检查症状", commonConditions:"常见疾病",
    startAssessment:"开始评估 →", getAssessment:"获取我的评估 🔍",
    nextQuestion:"下一个问题 →", checkDifferent:"检查不同症状",
    preparingQuestions:"正在准备您的问题...", analyzingAnswers:"正在分析您的所有答案...",
    urgency:"紧迫性", specialist:"推荐专科", reason:"原因",
    tip:"提示", recommendedDoctors:"附近推荐医生",
    browseAll:"浏览所有医生 →", question:"问题",
    findYourDoctor:"找到您的医生", searchDoctors:"按姓名或专业搜索...",
    distance:"距离", allSpecialties:"所有专业", ignorePrefs:"忽略我的偏好",
    usePrefs:"使用我的偏好", bookAppointment:"预约",
    yearsExp:"年经验", reviews:"评论", available:"● 可预约", busy:"○ 忙碌",
    miAway:"英里", recommended:"推荐", speaks:"会说",
    bookWith:"与...预约", reasonForVisit:"就诊原因",
    patientInfo:"患者信息", insuranceInfo:"保险", newReturning:"新患者或复诊？",
    hipaa:"HIPAA", reminders:"提醒", calendar:"日历", time:"时间",
    confirm:"确认", done:"完成",
    continueBtn:"继续 →", backBtn:"← 返回", confirmBooking:"确认预约 ✓",
    appointmentBooked:"预约成功！",
    myProfile:"我的个人资料", editProfile:"编辑个人资料", saveProfile:"保存个人资料",
    signOut:"退出登录", preferences:"偏好设置", language:"语言",
    country:"国家", city:"城市", insurance:"保险", doctorGender:"医生性别",
    conditions:"疾病状况", locationCode:"位置代码",
  },

  Portuguese: {
    tagline:"SEU NAVEGADOR DE SAÚDE", login:"Entrar", getStarted:"Começar — É Grátis →",
    createAccount:"Criar Conta Grátis →", seeDemo:"Ver Demo ▶", comingSoon:"🚧 Em breve!",
    alreadyAccount:"Já tem uma conta?", selectLanguage:"Idioma",
    heroTitle1:"Melhor Saúde,", heroTitle2:"Para Todos.",
    heroSubtext:"Não importa quem você é e de onde vem, seus problemas merecem ser ouvidos.",
    freeBadge:"GRÁTIS · SEM SEGURO NECESSÁRIO",
    whatWeDo:"O QUE O MEDIGUIDE FAZ", everythingYouNeed:"Tudo que você precisa, em um só lugar",
    tapToLearn:"Toque em qualquer cartão para saber mais.", tapMore:"Toque para saber mais ↓", tapClose:"Toque para fechar ↑",
    aboutAegis:"Sobre o Aegis AI",
    aegisDisclaimer:"Aegis é o assistente integrado do MediGuide para orientação geral — explicando termos médicos, navegando no aplicativo e respondendo perguntas de saúde.",
    aegisWarning:"Aegis não é um verificador de sintomas e não substitui o conselho médico profissional.",
    aegisNote:"Para sintomas, sempre use o verificador de sintomas dedicado.",
    readyTitle:"Pronto para encontrar seu médico?", readyDesc:"Cadastre-se em menos de um minuto. Sem seguro. Sem taxas. Nunca.",
    gettingStarted:"Estamos apenas começando.", reviewDesc1:"MediGuide é um novo app com uma missão real — tornar a saúde acessível para todos, em qualquer lugar.",
    reviewDesc2:"Adoraríamos ouvir o que você pensa. Seu feedback nos ajuda a melhorar para a próxima pessoa que precisar de nós.",
    reviewFirst:"Sua avaliação pode ser a primeira ✨", reviewHelp:"Conte-nos o que te ajudou 💙", reviewImprove:"Ajude-nos a melhorar para outros 🌍",
    realReviews:"Avaliações reais de usuários reais — em breve.",
    tryAndShare:"Experimente o MediGuide e Compartilhe sua Opinião →",
    foundProblem:"Encontrou um problema?", reportDesc:"Estamos sempre melhorando. Se algo não estiver funcionando, nos avise.",
    reportIt:"Reportar →", disclaimer:"⚠️ O MediGuide é apenas para fins informativos. Em emergências, ligue para o número de emergência local.",
    checkSymptoms:"Verificar Sintomas", findDoctor:"Encontrar Médico", noInsurance:"Sem Seguro", aegisAI:"Aegis AI",
    checkSymptomsDesc:"Descreva como está se sentindo e nossa IA faz perguntas inteligentes para guiá-lo ao cuidado certo.",
    findDoctorDesc:"Filtre por idioma, gênero, distância e seguro. Agende uma consulta em minutos.",
    noInsuranceDesc:"Clínicas gratuitas, programas governamentais, dicas para negociar contas médicas e seus direitos legais.",
    aegisAIDesc:"Seu guia de saúde pessoal. Pergunte qualquer coisa — disponível em todas as telas, a qualquer momento.",
    logIn:"Entrar", signUp:"Cadastrar", fullName:"NOME COMPLETO", email:"EMAIL", password:"SENHA",
    minChars:"(mín. 6 caracteres)", rememberMe:"Lembrar de mim", createAcc:"Criar Conta →",
    noAccount:"Não tem conta?", haveAccount:"Já tem conta?",
    enterEmail:"Por favor insira seu email.", validEmail:"Por favor insira um email válido.",
    enterPassword:"Por favor insira sua senha.", enterName:"Por favor insira seu nome completo.",
    minPassword:"A senha deve ter pelo menos 6 caracteres.",
    accountExists:"Já existe uma conta com esse email. Tente entrar.",
    noAccountFound:"Nenhuma conta encontrada com esse email. Por favor cadastre-se primeiro.",
    incorrectPassword:"Senha incorreta. Por favor tente novamente.",
    accountCreated:"Conta criada! Levando você para a configuração...",
    home:"Início", browse:"Buscar", noIns:"Sem Seguro", profile:"Perfil",
    howAreYou:"Como você está se sentindo hoje?", welcomeBack:"Bem-vindo de volta",
    checkYourSymptoms:"Verificar Sintomas", commonConditions:"Condições Comuns",
    startAssessment:"Iniciar Avaliação →", getAssessment:"Obter Minha Avaliação 🔍",
    nextQuestion:"Próxima Pergunta →", checkDifferent:"Verificar Outros Sintomas",
    preparingQuestions:"Preparando suas perguntas...", analyzingAnswers:"Analisando todas as suas respostas...",
    urgency:"URGÊNCIA", specialist:"ESPECIALISTA RECOMENDADO", reason:"POR QUÊ",
    tip:"DICA", recommendedDoctors:"MÉDICOS RECOMENDADOS PRÓXIMOS",
    browseAll:"Ver Todos os Médicos →", question:"Pergunta",
    findYourDoctor:"Encontre Seu Médico", searchDoctors:"Buscar por nome ou especialidade...",
    distance:"Distância", allSpecialties:"Todas as Especialidades", ignorePrefs:"Ignorar minhas preferências",
    usePrefs:"Usar minhas preferências", bookAppointment:"Agendar Consulta",
    yearsExp:"anos exp", reviews:"avaliações", available:"● Disponível", busy:"○ Ocupado",
    miAway:"mi de distância", recommended:"RECOMENDADO", speaks:"Fala",
    bookWith:"Agendar com", reasonForVisit:"Motivo da Visita",
    patientInfo:"Info do Paciente", insuranceInfo:"Seguro", newReturning:"Novo ou Retorno?",
    hipaa:"HIPAA", reminders:"Lembretes", calendar:"Calendário", time:"Horário",
    confirm:"Confirmar", done:"Concluído",
    continueBtn:"Continuar →", backBtn:"← Voltar", confirmBooking:"Confirmar Agendamento ✓",
    appointmentBooked:"Consulta Agendada!",
    myProfile:"Meu Perfil", editProfile:"Editar Perfil", saveProfile:"Salvar Perfil",
    signOut:"Sair", preferences:"Preferências", language:"Idioma",
    country:"País", city:"Cidade", insurance:"Seguro", doctorGender:"Gênero do Médico",
    conditions:"Condições", locationCode:"Código de Localização",
  },

  Swahili: {
    tagline:"MWONGOZO WAKO WA AFYA", login:"Ingia", getStarted:"Anza — Ni Bure →",
    createAccount:"Fungua Akaunti Bure →", seeDemo:"Tazama Demo ▶", comingSoon:"🚧 Inakuja hivi karibuni!",
    alreadyAccount:"Una akaunti tayari?", selectLanguage:"Lugha",
    heroTitle1:"Huduma Bora ya Afya,", heroTitle2:"Kwa Wote.",
    heroSubtext:"Bila kujali ni nani wewe na unatoka wapi, matatizo yako yanastahili kusikiwa.",
    freeBadge:"BURE · BILA BIMA INAYOHITAJIKA",
    whatWeDo:"MEDIGUIDE INAFANYA NINI", everythingYouNeed:"Kila unachohitaji, mahali pamoja",
    tapToLearn:"Gusa kadi yoyote kujifunza zaidi.", tapMore:"Gusa kujifunza zaidi ↓", tapClose:"Gusa kufunga ↑",
    aboutAegis:"Kuhusu Aegis AI",
    aegisDisclaimer:"Aegis ni msaidizi wa MediGuide kwa mwongozo wa jumla — kueleza maneno ya kimatibabu, kusaidia kutumia programu na kujibu maswali ya afya.",
    aegisWarning:"Aegis si kikagua dalili na haibadilishi ushauri wa kitaalamu wa kimatibabu.",
    aegisNote:"Kwa dalili, daima tumia kikagua dalili kilichowekwa.",
    readyTitle:"Uko tayari kupata daktari wako?", readyDesc:"Jisajili kwa chini ya dakika moja. Bila bima. Bila ada. Kamwe.",
    gettingStarted:"Tunaanza tu.", reviewDesc1:"MediGuide ni programu mpya yenye dhamira ya kweli — kufanya huduma ya afya ipatikane kwa wote, kila mahali.",
    reviewDesc2:"Tungependa kusikia mawazo yako. Maoni yako yanatuwezesha kuboresha kwa mtu anayefuata anayehitaji msaada.",
    reviewFirst:"Mapitio yako yanaweza kuwa ya kwanza ✨", reviewHelp:"Tuambie kilichokusaidia 💙", reviewImprove:"Tusaidie kuboresha kwa wengine 🌍",
    realReviews:"Mapitio ya kweli kutoka watumiaji wa kweli — inakuja hivi karibuni.",
    tryAndShare:"Jaribu MediGuide na Shiriki Mawazo Yako →",
    foundProblem:"Umepata tatizo?", reportDesc:"Tunaboresha daima. Kama kitu hakifanyi kazi vizuri, tuambie.",
    reportIt:"Ripoti →", disclaimer:"⚠️ MediGuide ni kwa madhumuni ya habari peke yake. Katika dharura, piga simu nambari ya dharura ya eneo lako.",
    checkSymptoms:"Kagua Dalili", findDoctor:"Tafuta Daktari", noInsurance:"Bila Bima", aegisAI:"Aegis AI",
    checkSymptomsDesc:"Elezea unavyohisi na AI yetu itauliza maswali ya ufuatiliaji ya busara kukuongoza kwa huduma sahihi.",
    findDoctorDesc:"Chuja kwa lugha, jinsia, umbali na bima. Panga miadi kwa dakika chache.",
    noInsuranceDesc:"Kliniki za bure, programu za serikali, vidokezo vya kujadiliana bili za kimatibabu na haki zako za kisheria.",
    aegisAIDesc:"Mwongozo wako binafsi wa afya. Uliza chochote — inapatikana kwenye kila skrini, wakati wowote.",
    logIn:"Ingia", signUp:"Jisajili", fullName:"JINA KAMILI", email:"BARUA PEPE", password:"NENOSIRI",
    minChars:"(angalau herufi 6)", rememberMe:"Nikumbuke", createAcc:"Fungua Akaunti →",
    noAccount:"Huna akaunti?", haveAccount:"Una akaunti tayari?",
    enterEmail:"Tafadhali ingiza anwani yako ya barua pepe.", validEmail:"Tafadhali ingiza barua pepe halali.",
    enterPassword:"Tafadhali ingiza nenosiri lako.", enterName:"Tafadhali ingiza jina lako kamili.",
    minPassword:"Nenosiri lazima liwe na angalau herufi 6.",
    accountExists:"Akaunti na barua pepe hiyo tayari ipo. Jaribu kuingia.",
    noAccountFound:"Hakuna akaunti iliyopatikana na barua pepe hiyo. Tafadhali jisajili kwanza.",
    incorrectPassword:"Nenosiri si sahihi. Tafadhali jaribu tena.",
    accountCreated:"Akaunti imeundwa! Tunakupeleka kwenye usanidi...",
    home:"Nyumbani", browse:"Tafuta", noIns:"Bila Bima", profile:"Wasifu",
    howAreYou:"Unajisikiaje leo?", welcomeBack:"Karibu tena",
    checkYourSymptoms:"Kagua Dalili", commonConditions:"Hali za Kawaida",
    startAssessment:"Anza Tathmini →", getAssessment:"Pata Tathmini Yangu 🔍",
    nextQuestion:"Swali Lijalo →", checkDifferent:"Kagua Dalili Tofauti",
    preparingQuestions:"Inaandaa maswali yako...", analyzingAnswers:"Inachambua majibu yako yote...",
    urgency:"DHARURA", specialist:"MTAALAMU ALIYEPENDEKEZWA", reason:"KWA NINI",
    tip:"KIDOKEZO", recommendedDoctors:"MADAKTARI WALIOSHAURIWA KARIBU",
    browseAll:"Angalia Madaktari Wote →", question:"Swali",
    findYourDoctor:"Tafuta Daktari Wako", searchDoctors:"Tafuta kwa jina au utaalamu...",
    distance:"Umbali", allSpecialties:"Utaalamu Wote", ignorePrefs:"Puuza mapendeleo yangu",
    usePrefs:"Tumia mapendeleo yangu", bookAppointment:"Panga Miadi",
    yearsExp:"miaka uzoefu", reviews:"maoni", available:"● Anapatikana", busy:"○ Ameshughulika",
    miAway:"maili", recommended:"IMEPENDEKEZWA", speaks:"Anasema",
    bookWith:"Panga na", reasonForVisit:"Sababu ya Ziara",
    patientInfo:"Taarifa za Mgonjwa", insuranceInfo:"Bima", newReturning:"Mpya au Kurudi?",
    hipaa:"HIPAA", reminders:"Vikumbusho", calendar:"Kalenda", time:"Wakati",
    confirm:"Thibitisha", done:"Imekamilika",
    continueBtn:"Endelea →", backBtn:"← Rudi", confirmBooking:"Thibitisha Miadi ✓",
    appointmentBooked:"Miadi Imepangwa!",
    myProfile:"Wasifu Wangu", editProfile:"Hariri Wasifu", saveProfile:"Hifadhi Wasifu",
    signOut:"Toka", preferences:"Mapendeleo", language:"Lugha",
    country:"Nchi", city:"Mji", insurance:"Bima", doctorGender:"Jinsia ya Daktari",
    conditions:"Hali", locationCode:"Msimbo wa Mahali",
  },
};

// Helper — falls back to English if key missing
const getLang = (prefs) => {
  const l = prefs?.language;
  if (l && l !== "Other") return l;
  if (prefs?.otherLanguage) return prefs.otherLanguage;
  return "English";
};

// AI translation cache — keyed by language name
const AI_TRANSLATION_CACHE = {};
let _cacheListeners = [];
const _notifyListeners = () => _cacheListeners.forEach(fn => fn());

// Translate all English strings into a custom language via Claude API
const translateToLanguage = async (targetLang, onProgress) => {
  if (AI_TRANSLATION_CACHE[targetLang]) return AI_TRANSLATION_CACHE[targetLang];
  if (T[targetLang]) { AI_TRANSLATION_CACHE[targetLang] = T[targetLang]; return T[targetLang]; }

  const callClaude = async (entries, batchIndex, total) => {
    const res = await fetch("/api/claude", {
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        model:"claude-sonnet-4-20250514", max_tokens:4000,
        messages:[{ role:"user", content:`Translate these UI strings from English to ${targetLang}. Return ONLY a raw JSON object, no markdown, no backticks, no explanation.\n\n${JSON.stringify(Object.fromEntries(entries))}`}]
      })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!data.content?.length) throw new Error("Empty response");
    const raw = data.content.map(b=>b.text||"").join("").trim().replace(/^```[\w]*\n?/,"").replace(/\n?```$/,"").trim();
    const parsed = JSON.parse(raw);
    if (onProgress) onProgress(Math.round((batchIndex + 1) / total * 95));
    return parsed;
  };

  try {
    const entries = Object.entries(T.English);
    const size = Math.ceil(entries.length / 3);
    const batches = [entries.slice(0, size), entries.slice(size, size*2), entries.slice(size*2)];
    if (onProgress) onProgress(5);
    // Run all 3 batches in parallel
    const results = await Promise.all(batches.map((b, i) => callClaude(b, i, batches.length)));
    const merged = Object.assign({}, ...results);
    AI_TRANSLATION_CACHE[targetLang] = merged;
    _notifyListeners();
    return { ok: true, dict: merged };
  } catch(e) {
    return { ok: false, error: e.message };
  }
};

const LangContext = React.createContext("English");

const useT = () => {
  const lang = React.useContext(LangContext);
  const [, forceUpdate] = React.useState(0);
  React.useEffect(() => {
    const listener = () => forceUpdate(v => v + 1);
    _cacheListeners.push(listener);
    return () => { _cacheListeners = _cacheListeners.filter(l => l !== listener); };
  }, []);
  return (key) => {
    const dict = (T[lang] || AI_TRANSLATION_CACHE[lang] || T.English);
    return dict[key] || T.English[key] || key;
  };
};

const INSURANCE_OPTIONS = ["Blue Cross Blue Shield","Aetna","UnitedHealthcare","Cigna","Medicaid","Medicare","No Insurance","Other"];
const LANGUAGE_OPTIONS = ["English","Spanish","Mandarin","Hindi","Arabic","French","Portuguese","Swahili","Other"];
const CONDITION_OPTIONS = ["Diabetes","Heart Disease","Asthma","High Blood Pressure","Allergies","None","Other"];
const GENDER_OPTIONS = ["No preference","Male","Female"];

const COUNTRIES = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czechia","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];

const COUNTRY_CODE_CONFIG = {
  "United States":  { label:"ZIP Code",      placeholder:"e.g. 94301",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit ZIP code" },
  "Canada":         { label:"Postal Code",   placeholder:"e.g. M5V 3A8",  format:/^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/,           maxLength:7,  hint:"Format: A1A 1A1" },
  "United Kingdom": { label:"Postcode",      placeholder:"e.g. SW1A 1AA", format:/^[A-Za-z]{1,2}\d[A-Za-z\d]?\s?\d[A-Za-z]{2}$/,  maxLength:8,  hint:"e.g. SW1A 1AA" },
  "Australia":      { label:"Postcode",      placeholder:"e.g. 2000",     format:/^\d{4}$/,                                        maxLength:4,  hint:"4-digit postcode" },
  "India":          { label:"PIN Code",      placeholder:"e.g. 400001",   format:/^\d{6}$/,                                        maxLength:6,  hint:"6-digit PIN code" },
  "Germany":        { label:"Postleitzahl",  placeholder:"e.g. 10115",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "France":         { label:"Code Postal",   placeholder:"e.g. 75001",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Italy":          { label:"CAP",           placeholder:"e.g. 00100",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Spain":          { label:"Código Postal", placeholder:"e.g. 28001",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Brazil":         { label:"CEP",           placeholder:"e.g. 01310-100",format:/^\d{5}-?\d{3}$/,                                 maxLength:9,  hint:"Format: 00000-000" },
  "Mexico":         { label:"Código Postal", placeholder:"e.g. 06600",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Japan":          { label:"Postal Code",   placeholder:"e.g. 100-0001", format:/^\d{3}-?\d{4}$/,                                 maxLength:8,  hint:"Format: 000-0000" },
  "China":          { label:"Postal Code",   placeholder:"e.g. 100000",   format:/^\d{6}$/,                                        maxLength:6,  hint:"6-digit postal code" },
  "South Korea":    { label:"Postal Code",   placeholder:"e.g. 03000",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Russia":         { label:"Postal Code",   placeholder:"e.g. 101000",   format:/^\d{6}$/,                                        maxLength:6,  hint:"6-digit postal code" },
  "South Africa":   { label:"Postal Code",   placeholder:"e.g. 8001",     format:/^\d{4}$/,                                        maxLength:4,  hint:"4-digit postal code" },
  "Pakistan":       { label:"Postal Code",   placeholder:"e.g. 75600",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Bangladesh":     { label:"Postal Code",   placeholder:"e.g. 1000",     format:/^\d{4}$/,                                        maxLength:4,  hint:"4-digit postal code" },
  "Nigeria":        { label:"Postal Code",   placeholder:"e.g. 100001",   format:/^\d{6}$/,                                        maxLength:6,  hint:"6-digit postal code" },
  "Egypt":          { label:"Postal Code",   placeholder:"e.g. 11511",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Turkey":         { label:"Posta Kodu",    placeholder:"e.g. 34000",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Netherlands":    { label:"Postcode",      placeholder:"e.g. 1234 AB",  format:/^\d{4}\s?[A-Za-z]{2}$/,                          maxLength:7,  hint:"Format: 1234 AB" },
  "Sweden":         { label:"Postnummer",    placeholder:"e.g. 111 22",   format:/^\d{3}\s?\d{2}$/,                                maxLength:6,  hint:"Format: 111 22" },
  "Norway":         { label:"Postnummer",    placeholder:"e.g. 0150",     format:/^\d{4}$/,                                        maxLength:4,  hint:"4-digit postal code" },
  "Denmark":        { label:"Postnummer",    placeholder:"e.g. 1000",     format:/^\d{4}$/,                                        maxLength:4,  hint:"4-digit postal code" },
  "Switzerland":    { label:"Postleitzahl",  placeholder:"e.g. 8001",     format:/^\d{4}$/,                                        maxLength:4,  hint:"4-digit postal code" },
  "Portugal":       { label:"Código Postal", placeholder:"e.g. 1000-001", format:/^\d{4}-?\d{3}$/,                                 maxLength:8,  hint:"Format: 0000-000" },
  "Belgium":        { label:"Postcode",      placeholder:"e.g. 1000",     format:/^\d{4}$/,                                        maxLength:4,  hint:"4-digit postal code" },
  "Austria":        { label:"Postleitzahl",  placeholder:"e.g. 1010",     format:/^\d{4}$/,                                        maxLength:4,  hint:"4-digit postal code" },
  "New Zealand":    { label:"Postcode",      placeholder:"e.g. 1010",     format:/^\d{4}$/,                                        maxLength:4,  hint:"4-digit postal code" },
  "Malaysia":       { label:"Poskod",        placeholder:"e.g. 50000",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Philippines":    { label:"ZIP Code",      placeholder:"e.g. 1000",     format:/^\d{4}$/,                                        maxLength:4,  hint:"4-digit ZIP code" },
  "Indonesia":      { label:"Kode Pos",      placeholder:"e.g. 10110",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Thailand":       { label:"Postal Code",   placeholder:"e.g. 10200",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Vietnam":        { label:"Postal Code",   placeholder:"e.g. 100000",   format:/^\d{6}$/,                                        maxLength:6,  hint:"6-digit postal code" },
  "Sri Lanka":      { label:"Postal Code",   placeholder:"e.g. 00100",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Saudi Arabia":   { label:"Postal Code",   placeholder:"e.g. 11564",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Colombia":       { label:"Código Postal", placeholder:"e.g. 110111",   format:/^\d{6}$/,                                        maxLength:6,  hint:"6-digit postal code" },
  "Chile":          { label:"Código Postal", placeholder:"e.g. 8320000",  format:/^\d{7}$/,                                        maxLength:7,  hint:"7-digit postal code" },
  "Kenya":          { label:"Postal Code",   placeholder:"e.g. 00100",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Morocco":        { label:"Code Postal",   placeholder:"e.g. 20000",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Poland":         { label:"Kod Pocztowy",  placeholder:"e.g. 00-001",   format:/^\d{2}-?\d{3}$/,                                 maxLength:6,  hint:"Format: 00-000" },
  "Ireland":        { label:"Eircode",       placeholder:"e.g. D01 F5P2", format:/^[A-Za-z]\d{2}\s?[A-Za-z\d]{4}$/,               maxLength:8,  hint:"Format: A00 XXXX" },
  "Ukraine":        { label:"Postal Code",   placeholder:"e.g. 01001",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Romania":        { label:"Cod Postal",    placeholder:"e.g. 010011",   format:/^\d{6}$/,                                        maxLength:6,  hint:"6-digit postal code" },
  "Greece":         { label:"Postal Code",   placeholder:"e.g. 10431",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Peru":           { label:"Código Postal", placeholder:"e.g. 15001",    format:/^\d{5}$/,                                        maxLength:5,  hint:"5-digit postal code" },
  "Kiribati":null,"Nauru":null,"Tuvalu":null,"Palau":null,"Marshall Islands":null,
  "Micronesia":null,"Solomon Islands":null,"Vanuatu":null,"Tonga":null,"Samoa":null,
  "Comoros":null,"Djibouti":null,"Eritrea":null,"Libya":null,"Sierra Leone":null,
  "Guinea-Bissau":null,"Equatorial Guinea":null,"Central African Republic":null,
  "Congo":null,"Gambia":null,"Burundi":null,"South Sudan":null,
};

const DOCTORS = [
  { id:1,  name:"Dr. Sarah Chen",      gender:"Female", languages:["English","Mandarin"],        specialty:"General Practitioner",  hospital:"City Medical Center",     rating:4.9, reviews:312, distance:0.8,  avatar:"SC", color:"#4A90D9", available:true,  acceptsNoInsurance:true,  keywords:["general","flu","cold","fever","fatigue","headache","cough"] },
  { id:2,  name:"Dr. Marcus Webb",     gender:"Male",   languages:["English"],                   specialty:"Cardiologist",           hospital:"St. Luke's Hospital",     rating:4.8, reviews:198, distance:1.2,  avatar:"MW", color:"#E05C5C", available:true,  acceptsNoInsurance:false, keywords:["cardiology","chest","heart","palpitation"] },
  { id:3,  name:"Dr. Aisha Patel",     gender:"Female", languages:["English","Hindi"],           specialty:"Neurologist",            hospital:"Downtown Health",         rating:4.7, reviews:245, distance:1.5,  avatar:"AP", color:"#7B5EA7", available:false, acceptsNoInsurance:true,  keywords:["neurology","headache","migraine","dizziness","seizure"] },
  { id:4,  name:"Dr. James Okafor",    gender:"Male",   languages:["English","French"],          specialty:"Dermatologist",          hospital:"City Medical Center",     rating:4.6, reviews:178, distance:2.2,  avatar:"JO", color:"#E07B39", available:true,  acceptsNoInsurance:false, keywords:["dermatology","skin","rash","acne","itch"] },
  { id:5,  name:"Dr. Linda Torres",    gender:"Female", languages:["English","Spanish"],         specialty:"Pulmonologist",          hospital:"Riverside Clinic",        rating:4.9, reviews:156, distance:2.8,  avatar:"LT", color:"#3AAD8E", available:true,  acceptsNoInsurance:true,  keywords:["pulmonology","breathing","cough","asthma","lung"] },
  { id:6,  name:"Dr. Kevin Zhang",     gender:"Male",   languages:["English","Mandarin"],        specialty:"Gastroenterologist",     hospital:"St. Luke's Hospital",     rating:4.7, reviews:203, distance:3.5,  avatar:"KZ", color:"#D4A017", available:true,  acceptsNoInsurance:false, keywords:["gastro","stomach","nausea","vomiting","diarrhea"] },
  { id:7,  name:"Dr. Emily Ross",      gender:"Female", languages:["English"],                   specialty:"Orthopedic Surgeon",     hospital:"Northside Medical",       rating:4.8, reviews:167, distance:4.1,  avatar:"ER", color:"#5B8DB8", available:false, acceptsNoInsurance:false, keywords:["orthopedic","joint","bone","back","knee"] },
  { id:8,  name:"Dr. Raj Sharma",      gender:"Male",   languages:["English","Hindi","Arabic"],  specialty:"ENT Specialist",         hospital:"Downtown Health",         rating:4.6, reviews:221, distance:4.7,  avatar:"RS", color:"#C75F8A", available:true,  acceptsNoInsurance:true,  keywords:["ent","ear","throat","nose","sinus"] },
  { id:9,  name:"Dr. Fatima Hassan",   gender:"Female", languages:["English","Arabic","French"], specialty:"General Practitioner",   hospital:"Westside Health Clinic",  rating:4.8, reviews:134, distance:6.2,  avatar:"FH", color:"#3AAD8E", available:true,  acceptsNoInsurance:true,  keywords:["general","flu","cold","fever","fatigue","headache","cough"] },
  { id:10, name:"Dr. Carlos Rivera",   gender:"Male",   languages:["English","Spanish"],         specialty:"Cardiologist",           hospital:"Metro Heart Center",      rating:4.7, reviews:189, distance:7.4,  avatar:"CR", color:"#E05C5C", available:true,  acceptsNoInsurance:false, keywords:["cardiology","chest","heart","palpitation"] },
  { id:11, name:"Dr. Mei Lin",         gender:"Female", languages:["English","Mandarin"],        specialty:"Dermatologist",          hospital:"Clear Skin Institute",    rating:4.5, reviews:210, distance:8.1,  avatar:"ML", color:"#E07B39", available:true,  acceptsNoInsurance:false, keywords:["dermatology","skin","rash","acne","itch"] },
  { id:12, name:"Dr. David Osei",      gender:"Male",   languages:["English","French"],          specialty:"Neurologist",            hospital:"BrainCare Medical",       rating:4.6, reviews:155, distance:9.3,  avatar:"DO", color:"#7B5EA7", available:false, acceptsNoInsurance:false, keywords:["neurology","headache","migraine","dizziness","seizure"] },
  { id:13, name:"Dr. Priya Nair",      gender:"Female", languages:["English","Hindi"],           specialty:"Gastroenterologist",     hospital:"Digestive Health Center", rating:4.8, reviews:176, distance:11.5, avatar:"PN", color:"#D4A017", available:true,  acceptsNoInsurance:true,  keywords:["gastro","stomach","nausea","vomiting","diarrhea"] },
  { id:14, name:"Dr. Samuel Park",     gender:"Male",   languages:["English","Mandarin"],        specialty:"Orthopedic Surgeon",     hospital:"Joint & Spine Clinic",    rating:4.7, reviews:198, distance:13.2, avatar:"SP", color:"#5B8DB8", available:true,  acceptsNoInsurance:false, keywords:["orthopedic","joint","bone","back","knee"] },
  { id:15, name:"Dr. Amara Diallo",    gender:"Female", languages:["English","French","Arabic"], specialty:"General Practitioner",   hospital:"Community Care Center",   rating:4.9, reviews:267, distance:14.8, avatar:"AD", color:"#4A90D9", available:true,  acceptsNoInsurance:true,  keywords:["general","flu","cold","fever","fatigue","headache","cough"] },
  { id:16, name:"Dr. Michael Torres",  gender:"Male",   languages:["English","Spanish"],         specialty:"Pulmonologist",          hospital:"Lung & Breathing Center", rating:4.6, reviews:143, distance:16.3, avatar:"MT", color:"#3AAD8E", available:false, acceptsNoInsurance:false, keywords:["pulmonology","breathing","cough","asthma","lung"] },
  { id:17, name:"Dr. Yuki Tanaka",     gender:"Female", languages:["English","Mandarin"],        specialty:"ENT Specialist",         hospital:"Head & Neck Institute",   rating:4.7, reviews:189, distance:18.7, avatar:"YT", color:"#C75F8A", available:true,  acceptsNoInsurance:false, keywords:["ent","ear","throat","nose","sinus"] },
  { id:18, name:"Dr. Omar Abdullah",   gender:"Male",   languages:["English","Arabic"],          specialty:"Cardiologist",           hospital:"Heart & Vascular Center", rating:4.8, reviews:221, distance:21.4, avatar:"OA", color:"#E05C5C", available:true,  acceptsNoInsurance:false, keywords:["cardiology","chest","heart","palpitation"] },
  { id:19, name:"Dr. Sofia Gonzalez",  gender:"Female", languages:["English","Spanish"],         specialty:"Neurologist",            hospital:"Neuro Health Associates", rating:4.5, reviews:167, distance:24.6, avatar:"SG", color:"#7B5EA7", available:true,  acceptsNoInsurance:true,  keywords:["neurology","headache","migraine","dizziness","seizure"] },
  { id:20, name:"Dr. James Kimani",    gender:"Male",   languages:["English","Swahili"],         specialty:"General Practitioner",   hospital:"Eastside Medical Group",  rating:4.7, reviews:312, distance:28.3, avatar:"JK", color:"#4A90D9", available:true,  acceptsNoInsurance:true,  keywords:["general","flu","cold","fever","fatigue","headache","cough"] },
  { id:21, name:"Dr. Lena Petrov",     gender:"Female", languages:["English","French"],          specialty:"Dermatologist",          hospital:"Skin & Wellness Clinic",  rating:4.6, reviews:145, distance:31.9, avatar:"LP", color:"#E07B39", available:false, acceptsNoInsurance:true,  keywords:["dermatology","skin","rash","acne","itch"] },
  { id:22, name:"Dr. Hassan Malik",    gender:"Male",   languages:["English","Arabic","Hindi"],  specialty:"Gastroenterologist",     hospital:"Regional Digestive Care", rating:4.8, reviews:198, distance:35.5, avatar:"HM", color:"#D4A017", available:true,  acceptsNoInsurance:false, keywords:["gastro","stomach","nausea","vomiting","diarrhea"] },
  { id:23, name:"Dr. Grace Okonkwo",   gender:"Female", languages:["English","French"],          specialty:"Orthopedic Surgeon",     hospital:"Orthopedic & Sports Med", rating:4.7, reviews:176, distance:39.2, avatar:"GO", color:"#5B8DB8", available:true,  acceptsNoInsurance:true,  keywords:["orthopedic","joint","bone","back","knee"] },
  { id:24, name:"Dr. Wei Chen",        gender:"Male",   languages:["English","Mandarin"],        specialty:"Pulmonologist",          hospital:"Respiratory Health Ctr",  rating:4.9, reviews:234, distance:43.7, avatar:"WC", color:"#3AAD8E", available:true,  acceptsNoInsurance:true,  keywords:["pulmonology","breathing","cough","asthma","lung"] },
  { id:25, name:"Dr. Nina Williams",   gender:"Female", languages:["English","Spanish"],         specialty:"ENT Specialist",         hospital:"Valley ENT Associates",   rating:4.6, reviews:156, distance:47.8, avatar:"NW", color:"#C75F8A", available:false, acceptsNoInsurance:true,  keywords:["ent","ear","throat","nose","sinus"] },
];

const FREE_CLINICS = [
  { id:1, name:"City Community Health Center",   type:"Community Health Center", services:["Primary Care","Mental Health","Dental","Pharmacy"],   cost:"Free or sliding scale", phone:"(555) 200-1000", accepts:"Everyone regardless of ability to pay", color:"#3AAD8E", avatar:"CH" },
  { id:2, name:"Neighborhood Free Clinic",       type:"Free Clinic",             services:["Primary Care","Chronic Disease","Lab Tests"],          cost:"Completely free",       phone:"(555) 200-2000", accepts:"Uninsured patients only",             color:"#4A90D9", avatar:"FC" },
  { id:3, name:"United Way Health Access",       type:"Sliding Scale Clinic",    services:["Primary Care","Women's Health","Pediatrics"],          cost:"Pay what you can",      phone:"(555) 200-3000", accepts:"Low-income families",                 color:"#7B5EA7", avatar:"UW" },
  { id:4, name:"Planned Parenthood Care Center", type:"Reproductive Health",     services:["STI Testing","Birth Control","Cancer Screenings"],     cost:"Sliding scale",         phone:"(555) 200-4000", accepts:"All patients",                        color:"#E05C5C", avatar:"PP" },
  { id:5, name:"Telehealth Now",                 type:"Telehealth",              services:["Video Consultations","Prescriptions","Mental Health"], cost:"From $0 with programs", phone:"1-800-TELEHLTH", accepts:"All patients, no insurance needed",    color:"#D4A017", avatar:"TH" },
  { id:6, name:"County Public Health Clinic",    type:"Government Clinic",       services:["Vaccinations","STI Testing","TB Testing","Primary Care"], cost:"Free",               phone:"(555) 200-6000", accepts:"All residents",                       color:"#5B8DB8", avatar:"PH" },
];

const ASSISTANCE_PROGRAMS = [
  { name:"Medicaid",           emoji:"🏛️", desc:"Free or low-cost health coverage for low-income individuals and families.",                         link:"medicaid.gov" },
  { name:"CHIP",               emoji:"👶", desc:"Free or low-cost coverage for children in families that earn too much for Medicaid.",               link:"insurekidsnow.gov" },
  { name:"ACA Marketplace",    emoji:"🏥", desc:"Subsidized health insurance plans — you may qualify for free or very cheap coverage.",              link:"healthcare.gov" },
  { name:"Hill-Burton Program",emoji:"⚕️", desc:"Some hospitals must provide free or reduced-cost care by law.",                                    link:"hrsa.gov/opa" },
  { name:"RxAssist",           emoji:"💊", desc:"Helps uninsured patients get free or discounted prescription medications.",                         link:"rxassist.org" },
  { name:"NeedyMeds",          emoji:"❤️", desc:"Find patient assistance programs for medicines and health costs.",                                  link:"needymeds.org" },
];

// STEPS is now built dynamically inside OnboardingScreen using t()

// ── MEDICAL TERM TOOLTIP ──────────────────────────────────────────────────────

function MedTerm({ children }) {
  const [show, setShow] = useState(false);
  const [definition, setDefinition] = useState(null);
  const [loading, setLoading] = useState(false);

  const lookup = async () => {
    if (definition) { setShow(true); return; }
    setShow(true);
    setLoading(true);
    try {
      const res = await fetch("/api/claude", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514", max_tokens:200,
          messages:[{ role:"user", content:`Define the medical term "${children}" in 1-2 simple sentences a 12-year-old could understand. Then give one short analogy or real-world comparison to make it memorable. Respond ONLY with valid JSON (no markdown): {"definition":"...","analogy":"..."}` }]
        })
      });
      const data = await res.json();
      const text = data.content.map(b => b.text||"").join("").replace(/```json|```/g,"").trim();
      setDefinition(JSON.parse(text));
    } catch(e) {
      setDefinition({ definition:"A medical term — try searching online for more info.", analogy:"" });
    }
    setLoading(false);
  };

  return (
    <span style={{ position:"relative", display:"inline" }}>
      <span onClick={lookup} style={{ color:"#4A90D9", borderBottom:"1.5px dashed #4A90D9", cursor:"pointer", fontWeight:600 }}>
        {children}
      </span>
      {show && (
        <>
          <span onClick={() => setShow(false)} style={{ position:"fixed", inset:0, zIndex:998, display:"block" }} />
          <span style={{ position:"fixed", bottom:80, left:"50%", transform:"translateX(-50%)", zIndex:999, background:"#1a1a2e", color:"#fff", borderRadius:16, padding:"16px 18px", width:"calc(100vw - 48px)", maxWidth:400, boxShadow:"0 8px 40px #00000066", display:"block" }}>
            <span style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
              <span style={{ fontSize:12, fontWeight:700, color:"#4A90D9", letterSpacing:1 }}>📖 MEDICAL TERM</span>
              <span onClick={() => setShow(false)} style={{ cursor:"pointer", color:"#aaa", fontSize:18, lineHeight:1 }}>✕</span>
            </span>
            <span style={{ display:"block", fontSize:17, fontWeight:800, fontFamily:"Georgia,serif", marginBottom:10 }}>{children}</span>
            {loading
              ? <span style={{ display:"block", color:"#aaa", fontSize:13 }}>Looking it up in plain English...</span>
              : definition && (
                <>
                  <span style={{ display:"block", fontSize:14, color:"#e0e8ff", lineHeight:1.6, marginBottom:10 }}>{definition.definition}</span>
                  {definition.analogy && (
                    <span style={{ display:"block", background:"#ffffff12", borderRadius:10, padding:"10px 12px", fontSize:13, color:"#7EFFD4" }}>
                      💡 <strong>Think of it like:</strong> {definition.analogy}
                    </span>
                  )}
                </>
              )
            }
          </span>
        </>
      )}
    </span>
  );
}

// ── SMALL COMPONENTS ──────────────────────────────────────────────────────────

function Stars({ rating }) {
  return (
    <span style={{ color:"#F5A623", fontSize:13 }}>
      {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
      <span style={{ color:"#888", marginLeft:4, fontSize:12 }}>{rating}</span>
    </span>
  );
}

function DoctorCard({ doc, highlighted, onBook, userHasNoInsurance, onNoInsurance }) {
  const canBook = !userHasNoInsurance || doc.acceptsNoInsurance;
  return (
    <div style={{ background: highlighted ? "linear-gradient(135deg,#f0f7ff,#fff)" : "#fff", border: highlighted ? "2px solid "+doc.color : "1.5px solid #e8e8e8", borderRadius:16, padding:"18px 20px", display:"flex", gap:16, position:"relative", boxShadow: highlighted ? "0 4px 20px "+doc.color+"22" : "0 2px 8px #0000000a" }}>
      <div style={{ width:52, height:52, borderRadius:"50%", background:"linear-gradient(135deg,"+doc.color+","+doc.color+"bb)", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:700, fontSize:16, flexShrink:0 }}>{doc.avatar}</div>
      <div style={{ flex:1 }}>
        <div style={{ display:"flex", justifyContent:"space-between" }}>
          <div>
            <div style={{ fontWeight:700, fontSize:15, color:"#1a1a2e", fontFamily:"Georgia,serif" }}>{doc.name}</div>
            <div style={{ color:doc.color, fontSize:12, fontWeight:600, marginTop:2 }}><MedTerm>{doc.specialty}</MedTerm></div>
          </div>
          <div style={{ textAlign:"right", display:"flex", flexDirection:"column", alignItems:"flex-end", gap:2 }}>
            {highlighted && <div style={{ background:doc.color, color:"#fff", fontSize:10, fontWeight:700, padding:"2px 8px", borderRadius:20 }}>RECOMMENDED</div>}
            <div style={{ fontSize:12, color:"#888" }}>{doc.distance} mi away</div>
            <div style={{ fontSize:11, color:doc.available?"#3AAD8E":"#ccc", fontWeight:600 }}>{doc.available?"● Available":"○ Busy"}</div>
          </div>
        </div>
        <div style={{ marginTop:6 }}><Stars rating={doc.rating} /><span style={{ fontSize:11, color:"#aaa", marginLeft:4 }}>({doc.reviews} reviews)</span></div>
        <div style={{ fontSize:12, color:"#666", marginTop:4 }}>🏥 {doc.hospital}</div>
        <div style={{ marginTop:6, display:"flex", flexWrap:"wrap", gap:5 }}>
          <span style={{ background:"#f0f0f0", color:"#555", fontSize:11, fontWeight:600, padding:"2px 8px", borderRadius:20 }}>{doc.gender==="Female"?"👩‍⚕️":"👨‍⚕️"} {doc.gender}</span>
          {doc.languages.map(l => <span key={l} style={{ background:"#f0f7ff", color:"#4A90D9", fontSize:11, fontWeight:600, padding:"2px 8px", borderRadius:20 }}>🌐 {l}</span>)}
          {doc.acceptsNoInsurance && <span style={{ background:"#f0fff8", color:"#1a6b4a", fontSize:11, fontWeight:700, padding:"2px 8px", borderRadius:20, border:"1px solid #3AAD8E" }}>💚 No Insurance OK</span>}
        </div>
        {canBook && (
          <button onClick={() => onBook && onBook(doc)}
            style={{ marginTop:10, background: doc.available ? doc.color : "#888", color:"#fff", border:"none", borderRadius:8, padding:"7px 16px", fontSize:12, fontWeight:600, cursor:"pointer" }}>
            {doc.available ? "Book Appointment →" : "Request Appointment →"}
          </button>
        )}
        {!canBook && (
          <div style={{ marginTop:10, background:"#fff8f0", border:"1px solid #fde8cc", borderRadius:8, padding:"8px 12px", fontSize:12, color:"#8a5000", display:"flex", gap:8, alignItems:"center" }}>
            <span>⚠️</span>
            <span>This doctor requires insurance. <span style={{ fontWeight:700, color:"#4A90D9", cursor:"pointer", textDecoration:"underline" }} onClick={()=> onNoInsurance && onNoInsurance()}>See no-insurance options →</span></span>
          </div>
        )}
      </div>
    </div>
  );
}

function FreeClinicCard({ clinic }) {
  return (
    <div style={{ background:"#fff", border:"1.5px solid #e8e8e8", borderRadius:16, padding:"18px 20px", display:"flex", gap:16, boxShadow:"0 2px 8px #0000000a" }}>
      <div style={{ width:52, height:52, borderRadius:"50%", background:"linear-gradient(135deg,"+clinic.color+","+clinic.color+"bb)", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:700, fontSize:16, flexShrink:0 }}>{clinic.avatar}</div>
      <div style={{ flex:1 }}>
        <div style={{ fontWeight:700, fontSize:15, color:"#1a1a2e", fontFamily:"Georgia,serif" }}>{clinic.name}</div>
        <div style={{ color:clinic.color, fontSize:12, fontWeight:600, marginTop:2 }}><MedTerm>{clinic.type}</MedTerm></div>
        <div style={{ marginTop:8, display:"flex", flexWrap:"wrap", gap:6 }}>
          {clinic.services.map(s => <span key={s} style={{ background:"#f0f7ff", color:"#4A90D9", fontSize:11, fontWeight:600, padding:"3px 8px", borderRadius:20 }}>{s}</span>)}
        </div>
        <div style={{ marginTop:8, fontSize:12, color:"#3AAD8E", fontWeight:700 }}>💰 {clinic.cost}</div>
        <div style={{ fontSize:12, color:"#888", marginTop:2 }}>✅ {clinic.accepts}</div>
        <div style={{ fontSize:12, color:"#888", marginTop:2 }}>📞 {clinic.phone}</div>
        <button style={{ marginTop:10, background:clinic.color, color:"#fff", border:"none", borderRadius:8, padding:"7px 16px", fontSize:12, fontWeight:600, cursor:"pointer" }}>Get Directions →</button>
      </div>
    </div>
  );
}

// ── NO INSURANCE PATHWAY ──────────────────────────────────────────────────────

function NoInsurancePathway() {
  const t = useT();
  const [section, setSection] = useState("overview");
  return (
    <div>
      <div style={{ background:"linear-gradient(135deg,#1a1a2e,#16213e)", borderRadius:20, padding:24, marginBottom:20, color:"#fff" }}>
        <div style={{ fontSize:36, marginBottom:10 }}>🤝</div>
        <h2 style={{ fontFamily:"Georgia,serif", fontSize:22, fontWeight:800, margin:"0 0 8px" }}>{t("niHeader")}</h2>
        <p style={{ fontSize:14, color:"#e0e8ff", margin:0, lineHeight:1.6 }}>{t("niSubtext")}</p>
      </div>

      <div style={{ display:"flex", gap:8, marginBottom:20, flexWrap:"wrap" }}>
        {[["overview",t("niTabOverview")],["clinics",t("niTabClinics")],["programs",t("niTabPrograms")],["bills",t("niTabBills")],["emergency",t("niTabEmergency")]].map(([id,label]) => (
          <button key={id} onClick={() => setSection(id)}
            style={{ flex:1, minWidth:80, background:section===id?"#4A90D9":"#fff", color:section===id?"#fff":"#666", border:"1.5px solid "+(section===id?"#4A90D9":"#e8e8e8"), borderRadius:12, padding:"8px 4px", fontSize:11, fontWeight:700, cursor:"pointer" }}>
            {label}
          </button>
        ))}
      </div>

      {section==="overview" && (
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          {[
            { emoji:"🏥", title:t("niOverviewTitle1"), desc:t("niOverviewDesc1"), action:"clinics",   btn:t("niOverviewBtn1") },
            { emoji:"💰", title:t("niOverviewTitle2"), desc:t("niOverviewDesc2"), action:"programs",  btn:t("niOverviewBtn2") },
            { emoji:"📱", title:t("niOverviewTitle3"), desc:t("niOverviewDesc3"), action:"clinics",   btn:t("niOverviewBtn3") },
            { emoji:"🚨", title:t("niOverviewTitle4"), desc:t("niOverviewDesc4"), action:"emergency", btn:t("niOverviewBtn4") },
          ].map(card => (
            <div key={card.title} style={{ background:"#fff", border:"1.5px solid #e8e8e8", borderRadius:16, padding:"18px 20px", display:"flex", gap:16, alignItems:"center", boxShadow:"0 2px 8px #0000000a" }}>
              <div style={{ fontSize:32, flexShrink:0 }}>{card.emoji}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:14, color:"#1a1a2e", marginBottom:4 }}>{card.title}</div>
                <div style={{ fontSize:13, color:"#666", lineHeight:1.5 }}>{card.desc}</div>
              </div>
              <button onClick={() => setSection(card.action)} style={{ background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", color:"#fff", border:"none", borderRadius:10, padding:"8px 14px", fontSize:12, fontWeight:700, cursor:"pointer", flexShrink:0 }}>{card.btn}</button>
            </div>
          ))}
          <div style={{ background:"#fff8e8", border:"1.5px solid #F5A623", borderRadius:14, padding:"14px 16px", fontSize:13, color:"#8a6000" }}>
            💡 <strong>{t("niDidYouKnow")}</strong> {t("niDidYouKnowText")}
          </div>
        </div>
      )}

      {section==="clinics" && (
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <div style={{ background:"#f0fff8", border:"1.5px solid #3AAD8E", borderRadius:12, padding:"12px 16px", fontSize:13, color:"#1a6b4a", fontWeight:600 }}>{t("niShowingClinics")}</div>
          {FREE_CLINICS.map(clinic => <FreeClinicCard key={clinic.id} clinic={clinic} />)}
        </div>
      )}

      {section==="programs" && (
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <div style={{ background:"#f0f7ff", border:"1.5px solid #c0d8ff", borderRadius:12, padding:"12px 16px", fontSize:13, color:"#1a3a6b", fontWeight:600 }}>{t("niProgramsHint")}</div>
          {ASSISTANCE_PROGRAMS.map(p => (
            <div key={p.name} style={{ background:"#fff", border:"1.5px solid #e8e8e8", borderRadius:16, padding:"18px 20px", display:"flex", gap:16, alignItems:"flex-start", boxShadow:"0 2px 8px #0000000a" }}>
              <div style={{ fontSize:32, flexShrink:0 }}>{p.emoji}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:15, color:"#1a1a2e", marginBottom:4 }}>{p.name}</div>
                <div style={{ fontSize:13, color:"#666", lineHeight:1.5, marginBottom:8 }}>{p.desc}</div>
                <a href={"https://"+p.link} target="_blank" rel="noreferrer" style={{ background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", color:"#fff", borderRadius:8, padding:"7px 14px", fontSize:12, fontWeight:700, textDecoration:"none", display:"inline-block" }}>Visit {p.link} →</a>
              </div>
            </div>
          ))}
        </div>
      )}

      {section==="bills" && (
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <div style={{ background:"#f0f7ff", border:"1.5px solid #c0d8ff", borderRadius:12, padding:"12px 16px", fontSize:13, color:"#1a3a6b", fontWeight:600 }}>{t("niBillsHint")}</div>
          {[
            { emoji:"📞", title:t("niBillTitle1"), desc:t("niBillDesc1") },
            { emoji:"📝", title:t("niBillTitle2"), desc:t("niBillDesc2") },
            { emoji:"💳", title:t("niBillTitle3"), desc:t("niBillDesc3") },
            { emoji:"📅", title:t("niBillTitle4"), desc:t("niBillDesc4") },
            { emoji:"🏛️", title:t("niBillTitle5"), desc:t("niBillDesc5") },
            { emoji:"⚖️", title:t("niBillTitle6"), desc:t("niBillDesc6") },
          ].map(item => (
            <div key={item.title} style={{ background:"#fff", border:"1.5px solid #e8e8e8", borderRadius:16, padding:"18px 20px", display:"flex", gap:16, boxShadow:"0 2px 8px #0000000a" }}>
              <div style={{ fontSize:28, flexShrink:0 }}>{item.emoji}</div>
              <div>
                <div style={{ fontWeight:700, fontSize:14, color:"#1a1a2e", marginBottom:4 }}>{item.title}</div>
                <div style={{ fontSize:13, color:"#666", lineHeight:1.5 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {section==="emergency" && (
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <div style={{ background:"#fff0f0", border:"1.5px solid #E05C5C", borderRadius:16, padding:20 }}>
            <div style={{ fontSize:36, marginBottom:8 }}>🚨</div>
            <div style={{ fontWeight:800, fontSize:16, color:"#c0392b", marginBottom:8 }}>{t("niEmergencyTitle")}</div>
            <div style={{ fontSize:14, color:"#666", marginBottom:16, lineHeight:1.6 }}>{t("niEmergencyDesc")}</div>
            <button style={{ background:"#E05C5C", color:"#fff", border:"none", borderRadius:12, padding:"12px 20px", fontSize:15, fontWeight:700, cursor:"pointer", width:"100%" }}>{t("niCallBtn")}</button>
          </div>
          {[
            { emoji:"⚕️", title:t("niEmTitle1"), desc:t("niEmDesc1") },
            { emoji:"🏥", title:t("niEmTitle2"), desc:t("niEmDesc2") },
            { emoji:"💊", title:t("niEmTitle3"), desc:t("niEmDesc3") },
            { emoji:"📞", title:t("niEmTitle4"), desc:t("niEmDesc4") },
          ].map(item => (
            <div key={item.title} style={{ background:"#fff", border:"1.5px solid #e8e8e8", borderRadius:16, padding:"18px 20px", display:"flex", gap:16, boxShadow:"0 2px 8px #0000000a" }}>
              <div style={{ fontSize:28, flexShrink:0 }}>{item.emoji}</div>
              <div>
                <div style={{ fontWeight:700, fontSize:14, color:"#1a1a2e", marginBottom:4 }}>{item.title}</div>
                <div style={{ fontSize:13, color:"#666", lineHeight:1.5 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── BOOKING MODAL ─────────────────────────────────────────────────────────────

function BookingModal({ doc, onClose, onConfirm, prefs }) {
  const t = useT();
  const lang = React.useContext(LangContext);
  const isUS = !prefs?.country || prefs.country === "United States";
  const today = new Date();
  const [step, setStep] = useState("reason");

  // Form data
  const [visitType, setVisitType]               = useState("");
  const [visitReason, setVisitReason]           = useState("");
  const [patientName, setPatientName]           = useState("");
  const [patientDOB, setPatientDOB]             = useState("");
  const [patientPhone, setPatientPhone]         = useState("");
  const [dobError, setDobError]                 = useState("");
  const [phoneError, setPhoneError]             = useState("");
  const [dobTouched, setDobTouched]             = useState(false);
  const [phoneTouched, setPhoneTouched]         = useState(false);

  const validateDOB = (val) => {
    if (!val.trim()) return "Date of birth is required.";
    const match = val.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (!match) return "Please use MM/DD/YYYY format (e.g. 06/15/1990).";
    const [, m, d, y] = match.map(Number);
    if (m < 1 || m > 12) return "Month must be between 01 and 12.";
    if (d < 1 || d > 31) return "Day must be between 01 and 31.";
    const date = new Date(y, m-1, d);
    if (date.getMonth() !== m-1 || date.getDate() !== d) return "That date doesn't exist (e.g. Feb 30 is invalid).";
    const now = new Date();
    if (date > now) return "Date of birth cannot be in the future.";
    const age = (now - date) / (1000 * 60 * 60 * 24 * 365.25);
    if (age > 120) return "Please enter a valid date of birth.";
    if (age < 0.1) return "Please enter a valid date of birth.";
    return "";
  };

  const validatePhone = (val) => {
    const digits = val.replace(/\D/g, "");
    if (!val.trim()) return "Phone number is required.";
    if (digits.length < 7) return "Phone number is too short — minimum 7 digits.";
    if (digits.length > 15) return "Phone number is too long — maximum 15 digits.";
    if (/^(\d)\1+$/.test(digits)) return "That doesn't look like a real phone number.";
    if (digits === "1234567" || digits === "12345678" || digits === "123456789" || digits === "1234567890") return "Please enter a real phone number.";
    return "";
  };

  const formatPhoneInput = (val) => {
    const digits = val.replace(/\D/g, "").slice(0, 15);
    return digits;
  };

  const formatDOBInput = (val) => {
    const digits = val.replace(/\D/g, "").slice(0, 8);
    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0,2)}/${digits.slice(2)}`;
    return `${digits.slice(0,2)}/${digits.slice(2,4)}/${digits.slice(4)}`;
  };

  const dobValid   = dobTouched && !dobError && patientDOB.trim().length > 0;
  const phoneValid = phoneTouched && !phoneError && patientPhone.trim().length > 0;
  const [insuranceConfirmed, setInsuranceConfirmed] = useState(false);
  const [policyNumber, setPolicyNumber]         = useState("");
  const [patientType, setPatientType]           = useState("");
  const [hipaaAgreed, setHipaaAgreed]           = useState(false);
  const [reminderPref, setReminderPref]         = useState("");

  // Calendar
  const [month, setMonth]           = useState(today.getMonth());
  const [year, setYear]             = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const FLOW = ["reason","patient","insurance","newreturning","hipaa","reminder","calendar","time","confirm","done"];
  const PROGRESS_LABELS = t("bkProgressLabels").split(",");

  const canAdvance = () => {
    if (step==="reason")      return !!visitType && visitReason.trim().length > 2;
    if (step==="patient")     return patientName.trim().length > 1 && dobValid && phoneValid;
    if (step==="insurance")   return insuranceConfirmed;
    if (step==="newreturning")return !!patientType;
    if (step==="hipaa")       return hipaaAgreed;
    if (step==="reminder")    return !!reminderPref;
    if (step==="calendar")    return !!selectedDate;
    if (step==="time")        return !!selectedTime;
    return true;
  };

  const goNext = () => { const i=FLOW.indexOf(step); if(i<FLOW.length-1) setStep(FLOW[i+1]); };
  const goBack = () => { const i=FLOW.indexOf(step); if(i>0) setStep(FLOW[i-1]); };

  const currentIdx = FLOW.indexOf(step);
  const progressIdx = Math.min(currentIdx, PROGRESS_LABELS.length - 1);

  // Calendar helpers
  const unavailable = new Set();
  for (let i=1;i<=31;i++) { if((i*doc.id)%5===0) unavailable.add(i); }
  const TIME_SLOTS = [
    {time:"8:00 AM",period:"Morning"},{time:"8:30 AM",period:"Morning"},{time:"9:00 AM",period:"Morning"},
    {time:"9:30 AM",period:"Morning"},{time:"10:00 AM",period:"Morning"},{time:"10:30 AM",period:"Morning"},
    {time:"11:00 AM",period:"Morning"},{time:"1:00 PM",period:"Afternoon"},{time:"1:30 PM",period:"Afternoon"},
    {time:"2:00 PM",period:"Afternoon"},{time:"2:30 PM",period:"Afternoon"},{time:"3:00 PM",period:"Afternoon"},
    {time:"4:00 PM",period:"Afternoon"},{time:"4:30 PM",period:"Afternoon"},
  ];
  const getBookedSlots = (date) => { const b=new Set(); TIME_SLOTS.forEach((s,i)=>{if((date*doc.id*(i+1))%4===0)b.add(s.time);}); return b; };
  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const DAYS   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const getDaysInMonth = (m,y) => new Date(y,m+1,0).getDate();
  const getFirstDay    = (m,y) => new Date(y,m,1).getDay();
  const isPast  = (d) => { const dt=new Date(year,month,d); const t=new Date(); t.setHours(0,0,0,0); return dt<t; };
  const isToday = (d) => d===today.getDate()&&month===today.getMonth()&&year===today.getFullYear();
  const prevMonth = () => { if(month===0){setMonth(11);setYear(y=>y-1);}else setMonth(m=>m-1); setSelectedDate(null); setSelectedTime(null); };
  const nextMonth = () => { if(month===11){setMonth(0);setYear(y=>y+1);}else setMonth(m=>m+1); setSelectedDate(null); setSelectedTime(null); };
  const daysInMonth = getDaysInMonth(month,year);
  const firstDay    = getFirstDay(month,year);
  const bookedSlots = selectedDate ? getBookedSlots(selectedDate) : new Set();
  const formatDate  = (d) => `${MONTHS[month]} ${d}, ${year}`;

  const inp = (val, set, ph, type="text", extra={}) => (
    <input value={val} onChange={e=>set(e.target.value)} placeholder={ph} type={type}
      style={{width:"100%",border:"1.5px solid #e0e7ff",borderRadius:12,padding:"13px 14px",fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit",...extra}} />
  );

  const choiceBtn = (label, selected, onClick, emoji="") => (
    <button onClick={onClick}
      style={{width:"100%",background:selected?"linear-gradient(135deg,#4A90D9,#7B5EA7)":"#fff",color:selected?"#fff":"#333",border:selected?"2px solid transparent":"2px solid #e0e7ff",borderRadius:12,padding:"13px 16px",fontSize:14,fontWeight:600,cursor:"pointer",textAlign:"left",display:"flex",alignItems:"center",gap:10}}>
      {emoji&&<span style={{fontSize:20}}>{emoji}</span>}
      <span style={{flex:1}}>{label}</span>
      {selected&&<span>✓</span>}
    </button>
  );

  const insuranceDisplay = prefs && prefs.insurance ? (prefs.insurance==="Other" ? prefs.otherInsurance||"Other" : prefs.insurance) : null;

  return (
    <div style={{position:"fixed",inset:0,background:"#00000066",zIndex:1000,display:"flex",alignItems:"flex-end",justifyContent:"center"}}
      onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{background:"#fff",borderRadius:"24px 24px 0 0",width:"100%",maxWidth:520,maxHeight:"92vh",overflowY:"auto",padding:24,boxSizing:"border-box"}}>

        {/* HEADER */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
          <div>
            <div style={{fontWeight:800,fontSize:17,fontFamily:"Georgia,serif",color:"#1a1a2e"}}>{t("bookAppointmentTitle")}</div>
            <div style={{fontSize:13,color:doc.color,fontWeight:600,marginTop:2}}>{doc.name} · {doc.specialty}</div>
          </div>
          <button onClick={onClose} style={{background:"#f5f5f5",border:"none",borderRadius:"50%",width:34,height:34,fontSize:18,cursor:"pointer",color:"#666"}}>✕</button>
        </div>

        {/* PROGRESS BAR */}
        {step!=="done" && (
          <div style={{marginBottom:20}}>
            <div style={{display:"flex",gap:3,marginBottom:6}}>
              {PROGRESS_LABELS.map((label,i) => {
                const active = i===progressIdx;
                const done   = i<progressIdx;
                return (
                  <div key={label} style={{flex:1,textAlign:"center"}}>
                    <div style={{height:4,borderRadius:2,background:active||done?doc.color:"#e8e8e8",marginBottom:3,transition:"background 0.3s"}}/>
                    <div style={{fontSize:9,fontWeight:600,color:active?doc.color:done?"#aaa":"#ccc",whiteSpace:"nowrap",overflow:"hidden"}}>{label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── STEP 1: REASON FOR VISIT ── */}
        {step==="reason" && (
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:4}}>{t("bkReason")}</div>
            <p style={{fontSize:13,color:"#888",margin:"0 0 8px"}}>{t("bkReasonSub")} {doc.name} {t("bkReasonSub2")}</p>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {[[t("bkVisit1"),"🤒"],[t("bkVisit2"),"🔄"],[t("bkVisit3"),"📅"],[t("bkVisit4"),"💊"],[t("bkVisit5"),"🔬"],[t("bkVisit6"),"📝"]].map(([label,emoji])=>
                choiceBtn(label, visitType===label, ()=>setVisitType(label), emoji)
              )}
            </div>
            <div style={{marginTop:4}}>
              <label style={{fontSize:12,fontWeight:700,color:"#4A90D9",letterSpacing:1,display:"block",marginBottom:6}}>{t("bkReasonDescLabel")}</label>
              <textarea value={visitReason} onChange={e=>setVisitReason(e.target.value)} placeholder={t("bkReasonPlaceholder")}
                style={{width:"100%",minHeight:80,border:"1.5px solid #e0e7ff",borderRadius:12,padding:"12px 14px",fontSize:14,resize:"none",outline:"none",fontFamily:"inherit",boxSizing:"border-box",lineHeight:1.5}}/>
              <div style={{fontSize:11,color:"#aaa",marginTop:4}}>{visitReason.length} characters</div>
            </div>
          </div>
        )}

        {/* ── STEP 2: PATIENT INFO ── */}
        {step==="patient" && (
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:4}}>{t("bkPatient")}</div>
            <p style={{fontSize:13,color:"#888",margin:"0 0 4px"}}>{t("bkPatientSub")}</p>
            <div>
              <label style={{fontSize:12,fontWeight:700,color:"#4A90D9",letterSpacing:1,display:"block",marginBottom:6}}>{t("bkFullName")}</label>
              <input value={patientName} onChange={e=>setPatientName(e.target.value)} placeholder={t("bkNamePlaceholder")}
                style={{width:"100%",border:"1.5px solid "+(patientName.trim().length>1?"#3AAD8E":"#e0e7ff"),borderRadius:12,padding:"13px 14px",fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit",background:patientName.trim().length>1?"#f0fff8":"#fff",transition:"border 0.2s"}}/>
            </div>
            <div>
              <label style={{fontSize:12,fontWeight:700,color:"#4A90D9",letterSpacing:1,display:"block",marginBottom:6}}>{t("bkDOB")}</label>
              <div style={{position:"relative"}}>
                <input value={patientDOB}
                  onChange={e => { const f=formatDOBInput(e.target.value); setPatientDOB(f); setDobTouched(true); setDobError(validateDOB(f)); }}
                  onBlur={() => { setDobTouched(true); setDobError(validateDOB(patientDOB)); }}
                  placeholder={t("bkDOBPlaceholder")} maxLength={10}
                  style={{width:"100%",border:"1.5px solid "+(dobTouched?dobError?"#E05C5C":dobValid?"#3AAD8E":"#e0e7ff":"#e0e7ff"),borderRadius:12,padding:"13px 44px 13px 14px",fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit",background:dobValid?"#f0fff8":dobTouched&&dobError?"#fff0f0":"#fff",transition:"border 0.2s"}}/>
                <div style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",fontSize:16}}>{!dobTouched?"📅":dobValid?"✅":dobError?"❌":"📅"}</div>
              </div>
              {dobTouched && dobError && <div style={{fontSize:12,color:"#E05C5C",fontWeight:600,marginTop:5}}>❌ {dobError}</div>}
              {dobValid && <div style={{fontSize:12,color:"#3AAD8E",fontWeight:600,marginTop:5}}>{t("bkDOBValid")}</div>}
              {!dobTouched && <div style={{fontSize:11,color:"#aaa",marginTop:4}}>{t("bkDOBHint")}</div>}
            </div>
            <div>
              <label style={{fontSize:12,fontWeight:700,color:"#4A90D9",letterSpacing:1,display:"block",marginBottom:6}}>{t("bkPhone")}</label>
              <div style={{position:"relative"}}>
                <input value={patientPhone}
                  onChange={e => { const f=formatPhoneInput(e.target.value); setPatientPhone(f); setPhoneTouched(true); setPhoneError(validatePhone(f)); }}
                  onBlur={() => { setPhoneTouched(true); setPhoneError(validatePhone(patientPhone)); }}
                  placeholder={t("bkPhonePlaceholder")} type="tel"
                  style={{width:"100%",border:"1.5px solid "+(phoneTouched?phoneError?"#E05C5C":phoneValid?"#3AAD8E":"#e0e7ff":"#e0e7ff"),borderRadius:12,padding:"13px 44px 13px 14px",fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit",background:phoneValid?"#f0fff8":phoneTouched&&phoneError?"#fff0f0":"#fff",transition:"border 0.2s"}}/>
                <div style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",fontSize:16}}>{!phoneTouched?"📞":phoneValid?"✅":phoneError?"❌":"📞"}</div>
              </div>
              {phoneTouched && phoneError && <div style={{fontSize:12,color:"#E05C5C",fontWeight:600,marginTop:5}}>❌ {phoneError}</div>}
              {phoneValid && <div style={{fontSize:12,color:"#3AAD8E",fontWeight:600,marginTop:5}}>{t("bkPhoneValid")}</div>}
              {!phoneTouched && <div style={{fontSize:11,color:"#aaa",marginTop:4}}>{t("bkPhoneHint")}</div>}
            </div>
          </div>
        )}

        {/* ── STEP 3: INSURANCE ── */}
        {step==="insurance" && (
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:4}}>{t("bkInsurance")}</div>
            <p style={{fontSize:13,color:"#888",margin:"0 0 8px"}}>{t("bkInsuranceSub")}</p>
            {insuranceDisplay ? (
              <div>
                <div style={{background:"linear-gradient(135deg,#f0f7ff,#e8eeff)",border:"1.5px solid #c0d8ff",borderRadius:14,padding:16,marginBottom:12}}>
                  <div style={{fontSize:11,fontWeight:700,color:"#4A90D9",letterSpacing:1,marginBottom:6}}>{t("bkFromProfile")}</div>
                  <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e"}}>{insuranceDisplay}</div>
                  <div style={{fontSize:12,color:"#888",marginTop:3}}>{t("bkInsuranceCurrent")}</div>
                </div>
                <div style={{display:"flex",gap:8,marginBottom:14}}>
                  {choiceBtn(t("bkInsuranceYes"), insuranceConfirmed===true, ()=>setInsuranceConfirmed(true), "✅")}
                  {choiceBtn(t("bkInsuranceManual"), insuranceConfirmed==="manual", ()=>setInsuranceConfirmed("manual"), "✏️")}
                </div>
              </div>
            ) : (
              <div style={{background:"#fff8e8",border:"1.5px solid #F5A623",borderRadius:12,padding:12,fontSize:13,color:"#8a6000",marginBottom:12}}>
                {t("bkNoInsuranceOnFile")}
              </div>
            )}
            {(!insuranceDisplay || insuranceConfirmed==="manual") && (
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                <div>
                  <label style={{fontSize:12,fontWeight:700,color:"#4A90D9",letterSpacing:1,display:"block",marginBottom:6}}>{t("bkInsuranceProvider")}</label>
                  {inp("","",t("bkInsuranceProviderPh"))}
                </div>
                <div>
                  <label style={{fontSize:12,fontWeight:700,color:"#4A90D9",letterSpacing:1,display:"block",marginBottom:6}}>{t("bkPolicyNumber")}</label>
                  {inp(policyNumber,setPolicyNumber,t("bkPolicyPh"))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── STEP 4: NEW OR RETURNING ── */}
        {step==="newreturning" && (
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:4}}>{t("bkNewReturning")}</div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {choiceBtn(t("bkNewPatient"), patientType==="new", ()=>setPatientType("new"), "🆕")}
              <div style={{fontSize:12,color:"#aaa",marginLeft:14,marginTop:-4}}>{t("bkNewPatientDesc")}</div>
              {choiceBtn(t("bkReturning"), patientType==="returning", ()=>setPatientType("returning"), "🔄")}
              <div style={{fontSize:12,color:"#aaa",marginLeft:14,marginTop:-4}}>{t("bkReturningDesc")}</div>
            </div>
          </div>
        )}

        {/* ── STEP 5: PRIVACY NOTICE (smart HIPAA vs international) ── */}
        {step==="hipaa" && (
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:4}}>{t("bkPrivacy")}</div>
            <div style={{background:"#f8f9ff",border:"1.5px solid #e0e7ff",borderRadius:14,padding:16,fontSize:13,color:"#444",lineHeight:1.7,maxHeight:220,overflowY:"auto"}}>
              <strong style={{fontSize:14,color:"#1a1a2e"}}>{isUS ? "HIPAA Privacy Notice" : "Privacy Notice"}</strong><br/><br/>
              {isUS ? t("bkPrivacyUS") : t("bkPrivacyIntl")}<br/><br/>
              <strong>{t("bkPrivacyHow")}</strong><br/>
              • {t("bkPrivacyUse1")}<br/>
              • {t("bkPrivacyUse2")}<br/>
              • {t("bkPrivacyUse3")}<br/><br/>
              <strong>{t("bkPrivacyRights")}</strong><br/>
              • {t("bkPrivacyRight1")}<br/>
              • {t("bkPrivacyRight2")}<br/>
              • {t("bkPrivacyRight3")}<br/>
              • {t("bkPrivacyRight4")}<br/><br/>
              {t("bkPrivacyNoSell")}
            </div>
            <div onClick={()=>setHipaaAgreed(a=>!a)}
              style={{display:"flex",alignItems:"flex-start",gap:12,cursor:"pointer",background:hipaaAgreed?"#f0fff8":"#fff",border:"1.5px solid "+(hipaaAgreed?"#3AAD8E":"#e0e7ff"),borderRadius:12,padding:"14px 16px",transition:"all 0.2s"}}>
              <div style={{width:22,height:22,borderRadius:6,border:hipaaAgreed?"none":"2px solid #ccc",background:hipaaAgreed?"linear-gradient(135deg,#3AAD8E,#4A90D9)":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
                {hipaaAgreed&&<span style={{color:"#fff",fontSize:14,fontWeight:700}}>✓</span>}
              </div>
              <div style={{fontSize:13,color:"#333",lineHeight:1.5}}>{t("bkPrivacyAgree")}</div>
            </div>
          </div>
        )}

        {/* ── STEP 6: REMINDERS ── */}
        {step==="reminder" && (
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:4}}>{t("bkReminders")}</div>
            <p style={{fontSize:13,color:"#888",margin:"0 0 8px"}}>{t("bkRemindersSub")}</p>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {[[t("bkSMS"),"📱",t("bkSMSDesc")],[t("bkEmail"),"📧",t("bkEmailDesc")],[t("bkCall"),"📞",t("bkCallDesc")],[t("bkNoReminders"),"🔕",t("bkNoRemindersDesc")]].map(([label,emoji,desc])=>(
                <button key={label} onClick={()=>setReminderPref(label)}
                  style={{background:reminderPref===label?"linear-gradient(135deg,#4A90D9,#7B5EA7)":"#fff",color:reminderPref===label?"#fff":"#333",border:reminderPref===label?"2px solid transparent":"2px solid #e0e7ff",borderRadius:12,padding:"13px 16px",fontSize:14,fontWeight:600,cursor:"pointer",textAlign:"left",display:"flex",alignItems:"center",gap:12}}>
                  <span style={{fontSize:22}}>{emoji}</span>
                  <div style={{flex:1}}>
                    <div>{label}</div>
                    <div style={{fontSize:11,fontWeight:400,opacity:0.8,marginTop:2}}>{desc}</div>
                  </div>
                  {reminderPref===label&&<span>✓</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 7: CALENDAR ── */}
        {step==="calendar" && (
          <div>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:14}}>{t("bkPickDate")}</div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
              <button onClick={prevMonth} style={{background:"#f5f5f5",border:"none",borderRadius:8,padding:"6px 14px",cursor:"pointer",fontSize:18,fontWeight:700}}>‹</button>
              <div style={{fontWeight:700,fontSize:16}}>{MONTHS[month]} {year}</div>
              <button onClick={nextMonth} style={{background:"#f5f5f5",border:"none",borderRadius:8,padding:"6px 14px",cursor:"pointer",fontSize:18,fontWeight:700}}>›</button>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:8}}>
              {DAYS.map(d=><div key={d} style={{textAlign:"center",fontSize:11,fontWeight:700,color:"#aaa",padding:"4px 0"}}>{d}</div>)}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4}}>
              {Array(firstDay).fill(null).map((_,i)=><div key={"e"+i}/>)}
              {Array(daysInMonth).fill(null).map((_,i)=>{
                const day=i+1;
                const past=isPast(day);
                const unavail=unavailable.has(day);
                const weekend=[0,6].includes(new Date(year,month,day).getDay());
                const disabled=past||unavail||weekend;
                const selected=selectedDate===day;
                const todayDay=isToday(day);
                return (
                  <button key={day} onClick={()=>!disabled&&setSelectedDate(day)} disabled={disabled}
                    style={{aspectRatio:"1",borderRadius:10,border:todayDay&&!selected?"2px solid "+doc.color:"none",background:selected?doc.color:disabled?"#f8f8f8":"#fff",color:selected?"#fff":disabled?"#ccc":todayDay?doc.color:"#1a1a2e",fontWeight:selected||todayDay?700:400,fontSize:13,cursor:disabled?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:!disabled&&!selected?"0 1px 4px #0000000a":"none"}}>
                    {day}
                  </button>
                );
              })}
            </div>
            <div style={{display:"flex",gap:16,marginTop:14,fontSize:11,color:"#888",justifyContent:"center"}}>
              <span><span style={{width:10,height:10,borderRadius:"50%",background:doc.color,display:"inline-block",marginRight:4}}/>{t("bkAvailable")}</span>
              <span><span style={{width:10,height:10,borderRadius:"50%",background:"#e0e0e0",display:"inline-block",marginRight:4}}/>{t("bkUnavailable")}</span>
              <span><span style={{width:10,height:10,borderRadius:2,border:"2px solid "+doc.color,display:"inline-block",marginRight:4}}/>{t("bkToday")}</span>
            </div>
          </div>
        )}

        {/* ── STEP 8: TIME ── */}
        {step==="time" && (
          <div>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:6}}>{t("bkPickTime")}</div>
            <div style={{fontSize:13,color:"#4A90D9",fontWeight:600,marginBottom:14}}>📅 {formatDate(selectedDate)}</div>
            {[t("bkMorning"),t("bkAfternoon")].map(period=>(
              <div key={period} style={{marginBottom:16}}>
                <div style={{fontSize:12,fontWeight:700,color:"#888",letterSpacing:1,marginBottom:8}}>{period===t("bkMorning")?"🌅":"🌤"} {period.toUpperCase()}</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
                  {TIME_SLOTS.filter(s=>s.period===(period===t("bkMorning")?"Morning":"Afternoon")).map(slot=>{
                    const booked=bookedSlots.has(slot.time);
                    const selected=selectedTime===slot.time;
                    return (
                      <button key={slot.time} onClick={()=>!booked&&setSelectedTime(slot.time)} disabled={booked}
                        style={{padding:"10px 6px",borderRadius:10,border:selected?"none":"1.5px solid "+(booked?"#f0f0f0":"#e0e7ff"),background:selected?doc.color:booked?"#f8f8f8":"#fff",color:selected?"#fff":booked?"#ccc":"#1a1a2e",fontSize:13,fontWeight:600,cursor:booked?"not-allowed":"pointer",textDecoration:booked?"line-through":"none"}}>
                        {slot.time}
                        {booked&&<div style={{fontSize:9,color:"#ccc",marginTop:2}}>{t("bkBooked")}</div>}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── STEP 2: PATIENT INFO ── */}
        {step==="patient" && (
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:4}}>👤 Patient Information</div>
            <p style={{fontSize:13,color:"#888",margin:"0 0 4px"}}>This information is required by the clinic to confirm your booking.</p>

            {/* FULL NAME */}
            <div>
              <label style={{fontSize:12,fontWeight:700,color:"#4A90D9",letterSpacing:1,display:"block",marginBottom:6}}>FULL NAME</label>
              <input value={patientName} onChange={e=>setPatientName(e.target.value)} placeholder="e.g. Maria Gonzalez"
                style={{width:"100%",border:"1.5px solid "+(patientName.trim().length>1?"#3AAD8E":"#e0e7ff"),borderRadius:12,padding:"13px 14px",fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit",background:patientName.trim().length>1?"#f0fff8":"#fff",transition:"border 0.2s"}}/>
            </div>

            {/* DATE OF BIRTH */}
            <div>
              <label style={{fontSize:12,fontWeight:700,color:"#4A90D9",letterSpacing:1,display:"block",marginBottom:6}}>DATE OF BIRTH</label>
              <div style={{position:"relative"}}>
                <input value={patientDOB}
                  onChange={e => {
                    const formatted = formatDOBInput(e.target.value);
                    setPatientDOB(formatted);
                    setDobTouched(true);
                    setDobError(validateDOB(formatted));
                  }}
                  onBlur={() => { setDobTouched(true); setDobError(validateDOB(patientDOB)); }}
                  placeholder="MM/DD/YYYY" maxLength={10}
                  style={{width:"100%",border:"1.5px solid "+(dobTouched ? dobError?"#E05C5C":dobValid?"#3AAD8E":"#e0e7ff" : "#e0e7ff"),borderRadius:12,padding:"13px 44px 13px 14px",fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit",background:dobValid?"#f0fff8":dobTouched&&dobError?"#fff0f0":"#fff",transition:"border 0.2s"}}/>
                <div style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",fontSize:16}}>
                  {!dobTouched?"📅":dobValid?"✅":dobError?"❌":"📅"}
                </div>
              </div>
              {dobTouched && dobError && <div style={{fontSize:12,color:"#E05C5C",fontWeight:600,marginTop:5}}>❌ {dobError}</div>}
              {dobValid && <div style={{fontSize:12,color:"#3AAD8E",fontWeight:600,marginTop:5}}>✅ Valid date of birth</div>}
              {!dobTouched && <div style={{fontSize:11,color:"#aaa",marginTop:4}}>Enter as MM/DD/YYYY — used to verify your identity</div>}
            </div>

            {/* PHONE NUMBER */}
            <div>
              <label style={{fontSize:12,fontWeight:700,color:"#4A90D9",letterSpacing:1,display:"block",marginBottom:6}}>PHONE NUMBER</label>
              <div style={{position:"relative"}}>
                <input value={patientPhone}
                  onChange={e => {
                    const formatted = formatPhoneInput(e.target.value);
                    setPatientPhone(formatted);
                    setPhoneTouched(true);
                    setPhoneError(validatePhone(formatted));
                  }}
                  onBlur={() => { setPhoneTouched(true); setPhoneError(validatePhone(patientPhone)); }}
                  placeholder="(555) 123-4567" type="tel"
                  style={{width:"100%",border:"1.5px solid "+(phoneTouched ? phoneError?"#E05C5C":phoneValid?"#3AAD8E":"#e0e7ff" : "#e0e7ff"),borderRadius:12,padding:"13px 44px 13px 14px",fontSize:14,outline:"none",boxSizing:"border-box",fontFamily:"inherit",background:phoneValid?"#f0fff8":phoneTouched&&phoneError?"#fff0f0":"#fff",transition:"border 0.2s"}}/>
                <div style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",fontSize:16}}>
                  {!phoneTouched?"📞":phoneValid?"✅":phoneError?"❌":"📞"}
                </div>
              </div>
              {phoneTouched && phoneError && <div style={{fontSize:12,color:"#E05C5C",fontWeight:600,marginTop:5}}>❌ {phoneError}</div>}
              {phoneValid && <div style={{fontSize:12,color:"#3AAD8E",fontWeight:600,marginTop:5}}>✅ Valid phone number</div>}
              {!phoneTouched && <div style={{fontSize:11,color:"#aaa",marginTop:4}}>The clinic will call this number to confirm your appointment</div>}
            </div>
          </div>
        )}

        {/* ── STEP 3: INSURANCE ── */}
        {step==="insurance" && (
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:4}}>🛡️ Insurance Confirmation</div>
            <p style={{fontSize:13,color:"#888",margin:"0 0 8px"}}>Please confirm your insurance so the clinic can prepare your billing.</p>

            {insuranceDisplay ? (
              <div>
                <div style={{background:"linear-gradient(135deg,#f0f7ff,#e8eeff)",border:"1.5px solid #c0d8ff",borderRadius:14,padding:16,marginBottom:12}}>
                  <div style={{fontSize:11,fontWeight:700,color:"#4A90D9",letterSpacing:1,marginBottom:6}}>FROM YOUR PROFILE</div>
                  <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e"}}>{insuranceDisplay}</div>
                  <div style={{fontSize:12,color:"#888",marginTop:3}}>Is this still your current insurance?</div>
                </div>
                <div style={{display:"flex",gap:8,marginBottom:14}}>
                  {choiceBtn("Yes, this is correct", insuranceConfirmed===true, ()=>setInsuranceConfirmed(true), "✅")}
                  {choiceBtn("No, I'll enter manually", insuranceConfirmed==="manual", ()=>setInsuranceConfirmed("manual"), "✏️")}
                </div>
              </div>
            ) : (
              <div style={{background:"#fff8e8",border:"1.5px solid #F5A623",borderRadius:12,padding:12,fontSize:13,color:"#8a6000",marginBottom:12}}>
                ⚠️ No insurance on file. Please enter your insurance details below.
              </div>
            )}

            {(!insuranceDisplay || insuranceConfirmed==="manual") && (
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                <div>
                  <label style={{fontSize:12,fontWeight:700,color:"#4A90D9",letterSpacing:1,display:"block",marginBottom:6}}>INSURANCE PROVIDER</label>
                  {inp(policyNumber, setPolicyNumber, "e.g. Blue Cross Blue Shield")}
                </div>
                <button onClick={()=>setInsuranceConfirmed(true)} disabled={!policyNumber.trim()}
                  style={{background:policyNumber.trim()?"linear-gradient(135deg,#4A90D9,#7B5EA7)":"#ccc",color:"#fff",border:"none",borderRadius:12,padding:12,fontSize:14,fontWeight:700,cursor:policyNumber.trim()?"pointer":"not-allowed"}}>
                  Confirm Insurance ✓
                </button>
              </div>
            )}

            {insuranceDisplay==="No Insurance" && (
              <div style={{background:"#f0fff8",border:"1.5px solid #3AAD8E",borderRadius:12,padding:12,fontSize:13,color:"#1a6b4a"}}>
                💚 No insurance? No problem. <strong>{doc.name}</strong> accepts uninsured patients and offers flexible payment options. You can still book your appointment.
                <button onClick={()=>setInsuranceConfirmed(true)} style={{display:"block",marginTop:10,background:"#3AAD8E",color:"#fff",border:"none",borderRadius:8,padding:"8px 16px",fontSize:13,fontWeight:700,cursor:"pointer"}}>Continue Without Insurance →</button>
              </div>
            )}
          </div>
        )}

        {/* ── STEP 4: NEW OR RETURNING ── */}
        {step==="newreturning" && (
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:4}}>🏥 Are You a New Patient?</div>
            <p style={{fontSize:13,color:"#888",margin:"0 0 8px"}}>This helps the clinic allocate the right amount of time for your visit.</p>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {choiceBtn("New patient — first visit with this doctor", patientType==="new", ()=>setPatientType("new"), "🆕")}
              {choiceBtn("Returning patient — I've seen this doctor before", patientType==="returning", ()=>setPatientType("returning"), "🔄")}
            </div>
            {patientType==="new" && (
              <div style={{background:"#f0f7ff",border:"1.5px solid #c0d8ff",borderRadius:12,padding:12,fontSize:13,color:"#1a3a6b",marginTop:4}}>
                💡 As a new patient, please arrive <strong>20 minutes early</strong> to complete paperwork. Bring your photo ID
                {insuranceDisplay !== "No Insurance" && " and insurance card"}.
              </div>
            )}
            {patientType==="returning" && (
              <div style={{background:"#f0fff8",border:"1.5px solid #3AAD8E",borderRadius:12,padding:12,fontSize:13,color:"#1a6b4a",marginTop:4}}>
                👋 Welcome back! Please arrive <strong>10 minutes early</strong> to verify your information is up to date.
              </div>
            )}
          </div>
        )}

        {/* ── STEP 5: HIPAA ── */}
        {step==="hipaa" && (
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:4}}>🔒 Privacy Notice</div>
            <div style={{background:"#f8f9ff",border:"1.5px solid #e0e7ff",borderRadius:14,padding:16,fontSize:13,color:"#444",lineHeight:1.7,maxHeight:220,overflowY:"auto"}}>
              <strong style={{fontSize:14,color:"#1a1a2e"}}>HIPAA Privacy Notice</strong><br/><br/>
              Your health information is protected under the Health Insurance Portability and Accountability Act (HIPAA).<br/><br/>
              <strong>How your information is used:</strong><br/>
              • For treatment — your doctor and care team will use your information to provide care<br/>
              • For payment — your insurance may receive information to process billing<br/>
              • For operations — the clinic may use information to improve care quality<br/><br/>
              <strong>Your rights:</strong><br/>
              • You have the right to access your health records<br/>
              • You have the right to request corrections<br/>
              • You have the right to know who has accessed your records<br/>
              • You have the right to file a complaint<br/><br/>
              MediGuide and the clinic will never sell your health information to third parties.
            </div>
            <div onClick={()=>setHipaaAgreed(a=>!a)}
              style={{display:"flex",alignItems:"flex-start",gap:12,cursor:"pointer",background:hipaaAgreed?"#f0fff8":"#fff",border:"1.5px solid "+(hipaaAgreed?"#3AAD8E":"#e0e7ff"),borderRadius:12,padding:"14px 16px",transition:"all 0.2s"}}>
              <div style={{width:22,height:22,borderRadius:6,border:hipaaAgreed?"none":"2px solid #ccc",background:hipaaAgreed?"linear-gradient(135deg,#3AAD8E,#4A90D9)":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
                {hipaaAgreed&&<span style={{color:"#fff",fontSize:14,fontWeight:700}}>✓</span>}
              </div>
              <div style={{fontSize:13,color:"#333",lineHeight:1.5}}>
                I have read and acknowledge the <strong>HIPAA Privacy Notice</strong>. I understand how my health information will be used and my rights as a patient.
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 6: REMINDERS ── */}
        {step==="reminder" && (
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:4}}>🔔 Appointment Reminders</div>
            <p style={{fontSize:13,color:"#888",margin:"0 0 8px"}}>How would you like to be reminded about your appointment?</p>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {[["Text message (SMS)","📱","Get a text 24 hours before"],["Email","📧","Get an email 24 hours before"],["Phone call","📞","Get a call 24 hours before"],["No reminders","🔕","I'll remember on my own"]].map(([label,emoji,desc])=>(
                <button key={label} onClick={()=>setReminderPref(label)}
                  style={{background:reminderPref===label?"linear-gradient(135deg,#4A90D9,#7B5EA7)":"#fff",color:reminderPref===label?"#fff":"#333",border:reminderPref===label?"2px solid transparent":"2px solid #e0e7ff",borderRadius:12,padding:"13px 16px",fontSize:14,fontWeight:600,cursor:"pointer",textAlign:"left",display:"flex",alignItems:"center",gap:12}}>
                  <span style={{fontSize:22}}>{emoji}</span>
                  <div style={{flex:1}}>
                    <div>{label}</div>
                    <div style={{fontSize:11,fontWeight:400,opacity:0.8,marginTop:2}}>{desc}</div>
                  </div>
                  {reminderPref===label&&<span>✓</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 7: CALENDAR ── */}
        {step==="calendar" && (
          <div>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:14}}>📅 Pick a Date</div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
              <button onClick={prevMonth} style={{background:"#f5f5f5",border:"none",borderRadius:8,padding:"6px 14px",cursor:"pointer",fontSize:18,fontWeight:700}}>‹</button>
              <div style={{fontWeight:700,fontSize:16}}>{MONTHS[month]} {year}</div>
              <button onClick={nextMonth} style={{background:"#f5f5f5",border:"none",borderRadius:8,padding:"6px 14px",cursor:"pointer",fontSize:18,fontWeight:700}}>›</button>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4,marginBottom:8}}>
              {DAYS.map(d=><div key={d} style={{textAlign:"center",fontSize:11,fontWeight:700,color:"#aaa",padding:"4px 0"}}>{d}</div>)}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4}}>
              {Array(firstDay).fill(null).map((_,i)=><div key={"e"+i}/>)}
              {Array(daysInMonth).fill(null).map((_,i)=>{
                const day=i+1;
                const past=isPast(day);
                const unavail=unavailable.has(day);
                const weekend=[0,6].includes(new Date(year,month,day).getDay());
                const disabled=past||unavail||weekend;
                const selected=selectedDate===day;
                const todayDay=isToday(day);
                return (
                  <button key={day} onClick={()=>!disabled&&setSelectedDate(day)} disabled={disabled}
                    style={{aspectRatio:"1",borderRadius:10,border:todayDay&&!selected?"2px solid "+doc.color:"none",background:selected?doc.color:disabled?"#f8f8f8":"#fff",color:selected?"#fff":disabled?"#ccc":todayDay?doc.color:"#1a1a2e",fontWeight:selected||todayDay?700:400,fontSize:13,cursor:disabled?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:!disabled&&!selected?"0 1px 4px #0000000a":"none"}}>
                    {day}
                  </button>
                );
              })}
            </div>
            <div style={{display:"flex",gap:16,marginTop:14,fontSize:11,color:"#888",justifyContent:"center"}}>
              <span><span style={{width:10,height:10,borderRadius:"50%",background:doc.color,display:"inline-block",marginRight:4}}/>Available</span>
              <span><span style={{width:10,height:10,borderRadius:"50%",background:"#e0e0e0",display:"inline-block",marginRight:4}}/>Unavailable</span>
              <span><span style={{width:10,height:10,borderRadius:2,border:"2px solid "+doc.color,display:"inline-block",marginRight:4}}/>Today</span>
            </div>
          </div>
        )}

        {/* ── STEP 8: TIME ── */}
        {step==="time" && (
          <div>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:6}}>🕐 Pick a Time</div>
            <div style={{fontSize:13,color:"#4A90D9",fontWeight:600,marginBottom:14}}>📅 {formatDate(selectedDate)}</div>
            {["Morning","Afternoon"].map(period=>(
              <div key={period} style={{marginBottom:16}}>
                <div style={{fontSize:12,fontWeight:700,color:"#888",letterSpacing:1,marginBottom:8}}>{period==="Morning"?"🌅":"🌤"} {period.toUpperCase()}</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
                  {TIME_SLOTS.filter(s=>s.period===period).map(slot=>{
                    const booked=bookedSlots.has(slot.time);
                    const selected=selectedTime===slot.time;
                    return (
                      <button key={slot.time} onClick={()=>!booked&&setSelectedTime(slot.time)} disabled={booked}
                        style={{padding:"10px 6px",borderRadius:10,border:selected?"none":"1.5px solid "+(booked?"#f0f0f0":"#e0e7ff"),background:selected?doc.color:booked?"#f8f8f8":"#fff",color:selected?"#fff":booked?"#ccc":"#1a1a2e",fontSize:13,fontWeight:600,cursor:booked?"not-allowed":"pointer",textDecoration:booked?"line-through":"none"}}>
                        {slot.time}
                        {booked&&<div style={{fontSize:9,color:"#ccc",marginTop:2}}>Booked</div>}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── STEP 9: CONFIRM ── */}
        {step==="confirm" && (
          <div>
            <div style={{fontWeight:700,fontSize:16,color:"#1a1a2e",marginBottom:14}}>✅ Review & Confirm</div>
            <div style={{background:"linear-gradient(135deg,#f0f7ff,#e8eeff)",borderRadius:16,padding:20,marginBottom:14}}>
              <div style={{display:"flex",gap:14,alignItems:"center",marginBottom:16}}>
                <div style={{width:48,height:48,borderRadius:"50%",background:"linear-gradient(135deg,"+doc.color+","+doc.color+"bb)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:15}}>{doc.avatar}</div>
                <div>
                  <div style={{fontWeight:700,fontSize:15,color:"#1a1a2e"}}>{doc.name}</div>
                  <div style={{fontSize:13,color:doc.color,fontWeight:600}}>{doc.specialty}</div>
                  <div style={{fontSize:12,color:"#666"}}>🏥 {doc.hospital}</div>
                </div>
              </div>
              {[
                {icon:"📋", label:"Reason",    value:visitType+(visitReason?` — "${visitReason.slice(0,40)}${visitReason.length>40?"...":""}"`:"")},
                {icon:"👤", label:"Patient",   value:patientName+" · DOB: "+patientDOB},
                {icon:"📞", label:"Phone",     value:patientPhone},
                {icon:"🛡️", label:"Insurance", value:insuranceConfirmed===true?(insuranceDisplay||"Confirmed"):policyNumber},
                {icon:"🏥", label:"Type",      value:patientType==="new"?"New Patient":"Returning Patient"},
                {icon:"🔔", label:"Reminder",  value:reminderPref},
                {icon:"📅", label:"Date",      value:formatDate(selectedDate)},
                {icon:"🕐", label:"Time",      value:selectedTime},
              ].map(row=>(
                <div key={row.label} style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:"1px solid #e0e7ff",gap:8}}>
                  <span style={{fontSize:12,color:"#888",flexShrink:0}}>{row.icon} {row.label}</span>
                  <span style={{fontSize:12,fontWeight:700,color:"#1a1a2e",textAlign:"right"}}>{row.value}</span>
                </div>
              ))}
            </div>
            <div style={{background:"#fff8e8",border:"1.5px solid #F5A623",borderRadius:12,padding:"12px 14px",fontSize:12,color:"#8a6000",marginBottom:16}}>
              ⚠️ {patientType==="new"
                ? `Arrive 20 minutes early — bring your photo ID${insuranceDisplay !== "No Insurance" ? " and insurance card" : ""}.`
                : "Arrive 10 minutes early to verify your details."}
            </div>
          </div>
        )}

        {/* ── DONE ── */}
        {step==="done" && (
          <div style={{textAlign:"center",padding:"20px 0"}}>
            <div style={{fontSize:64,marginBottom:16}}>📋</div>
            <div style={{fontWeight:800,fontSize:20,fontFamily:"Georgia,serif",color:"#1a1a2e",marginBottom:8}}>{t("requestSubmitted")}</div>
            <div style={{fontSize:14,color:"#666",marginBottom:20,lineHeight:1.6}}>
              {t("requestSent")} <strong>{doc.name}</strong> {t("requestSentOn")} <strong>{formatDate(selectedDate)}</strong> {t("requestSentAt")} <strong>{selectedTime}</strong> {t("requestSentEnd")}
            </div>
            <div style={{background:"#fff8e8",border:"2px solid #F5A623",borderRadius:14,padding:"14px 16px",marginBottom:16,textAlign:"left"}}>
              <div style={{fontWeight:800,fontSize:13,color:"#7A5000",marginBottom:6}}>⚠️ {t("notConfirmed")}</div>
              <div style={{fontSize:13,color:"#8a6000",lineHeight:1.6}}>{t("notConfirmedDesc")}</div>
            </div>

            <div style={{background:"#f0fff8",border:"1.5px solid #3AAD8E",borderRadius:14,padding:16,marginBottom:20,fontSize:13,color:"#1a6b4a",textAlign:"left"}}>
              {reminderPref!=="No reminders"&&<div style={{marginBottom:6}}>🔔 You'll receive a reminder via <strong>{reminderPref}</strong> 24 hours before.</div>}
              <div>📍 <strong>{doc.hospital}</strong></div>
              <div style={{marginTop:4}}>⚠️ {patientType==="new"
                ? `Please arrive 20 minutes early with your photo ID${insuranceDisplay !== "No Insurance" ? " and insurance card" : ""}.`
                : "Please arrive 10 minutes early."}</div>
            </div>
            <button onClick={onClose} style={{width:"100%",background:"linear-gradient(135deg,#4A90D9,#7B5EA7)",color:"#fff",border:"none",borderRadius:12,padding:14,fontSize:15,fontWeight:700,cursor:"pointer"}}>Done ✓</button>
          </div>
        )}

        {/* NAV BUTTONS */}
        {step!=="done" && (
          <div style={{display:"flex",gap:10,marginTop:20}}>
            {step!=="reason" && (
              <button onClick={goBack} style={{flex:1,background:"#f5f5f5",border:"none",borderRadius:12,padding:14,fontSize:14,fontWeight:600,cursor:"pointer",color:"#666"}}>← Back</button>
            )}
            {step!=="confirm"
              ? <button onClick={goNext} disabled={!canAdvance()}
                  style={{flex:2,background:canAdvance()?"linear-gradient(135deg,#4A90D9,#7B5EA7)":"#ccc",color:"#fff",border:"none",borderRadius:12,padding:14,fontSize:15,fontWeight:700,cursor:canAdvance()?"pointer":"not-allowed"}}>
                  Continue →
                </button>
              : <button onClick={()=>{setStep("done");onConfirm&&onConfirm({doc,date:formatDate(selectedDate),time:selectedTime});}}
                  style={{flex:2,background:"linear-gradient(135deg,#3AAD8E,#4A90D9)",color:"#fff",border:"none",borderRadius:12,padding:14,fontSize:15,fontWeight:700,cursor:"pointer"}}>
                  Confirm Booking ✓
                </button>
            }
          </div>
        )}

      </div>
    </div>
  );
}


// ── LANDING ───────────────────────────────────────────────────────────────────

function LandingScreen({ onGetStarted, lang, setLang }) {
  const t = useT();
  const [expandedBox, setExpandedBox] = useState(null);
  const [demoTooltip, setDemoTooltip] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [customLang, setCustomLang] = useState("");
  const [translating, setTranslating] = useState(false);
  const [translateProgress, setTranslateProgress] = useState(0);
  const [translateLangName, setTranslateLangName] = useState("");
  const [translateError, setTranslateError] = useState("");
  const LANGS = ["English","Spanish","French","Arabic","Hindi","Mandarin","Portuguese","Swahili","Other..."];

  const boxes = [
    { id:"symptoms",    emoji:"🩺", label:t("checkSymptoms"),  color:"#E8614A", bg:"linear-gradient(135deg,#E8614A,#F0956A)", height:200, desc:t("checkSymptomsDesc") },
    { id:"doctors",     emoji:"👨‍⚕️", label:t("findDoctor"),    color:"#3AAD8E", bg:"linear-gradient(135deg,#3AAD8E,#5ECFB0)", height:220, desc:t("findDoctorDesc") },
    { id:"noinsurance", emoji:"🤝", label:t("noInsurance"),    color:"#7B5EA7", bg:"linear-gradient(135deg,#7B5EA7,#A07DD4)", height:190, desc:t("noInsuranceDesc") },
    { id:"aegis",       emoji:"🛡️", label:t("aegisAI"),        color:"#E8A93A", bg:"linear-gradient(135deg,#E8A93A,#F5C96A)", height:210, desc:t("aegisAIDesc") },
  ];

  return (
    <div style={{ fontFamily:"system-ui,sans-serif", minHeight:"100vh", color:"#1a1a2e", overflowX:"hidden" }}>

      {/* ── TRANSLATION PROGRESS OVERLAY ── */}
      {translating && (
        <div style={{ position:"fixed", inset:0, background:"#00000077", zIndex:9999, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ background:"#1a1a2e", border:"1.5px solid #4A90D944", borderRadius:20, padding:"32px 36px", width:300, textAlign:"center", boxShadow:"0 16px 64px #00000066" }}>
            <div style={{ fontSize:36, marginBottom:12 }}>{translateError ? "⚠️" : "🌐"}</div>
            <div style={{ color:"#fff", fontWeight:800, fontSize:16, fontFamily:"Georgia,serif", marginBottom:4 }}>
              {translateError ? "Translation failed" : `Translating to ${translateLangName}`}
            </div>

            {translateError ? (
              <>
                <div style={{ color:"#ff8888", fontSize:11, marginBottom:16, lineHeight:1.5, wordBreak:"break-all", background:"#ffffff0a", borderRadius:8, padding:"8px 10px" }}>
                  {translateError}
                </div>
                <button onClick={() => { setTranslating(false); setTranslateError(""); setTranslateProgress(0); }}
                  style={{ background:"#4A90D9", border:"none", borderRadius:10, padding:"10px 24px", fontSize:13, fontWeight:700, color:"#fff", cursor:"pointer" }}>
                  Dismiss
                </button>
              </>
            ) : (
              <>
                <div style={{ color:"#4A90D9", fontSize:12, marginBottom:20 }}>
                  {translateProgress === 0 ? "Starting translation..." :
                   translateProgress <= 33 ? "Translating batch 1 of 3..." :
                   translateProgress <= 66 ? "Translating batch 2 of 3..." :
                   translateProgress < 100 ? "Translating batch 3 of 3..." : "✓ Done!"}
                </div>
                <div style={{ background:"#ffffff15", borderRadius:99, height:10, overflow:"hidden", marginBottom:10 }}>
                  <div style={{
                    height:"100%",
                    width: `${Math.min(translateProgress, 100)}%`,
                    background: translateProgress === 100
                      ? "linear-gradient(90deg,#3AAD8E,#4A90D9)"
                      : "linear-gradient(90deg,#4A90D9,#7B5EA7)",
                    borderRadius:99,
                    transition:"width 0.35s ease"
                  }}/>
                </div>
                <div style={{ color:"#aaa", fontSize:13, fontWeight:700 }}>
                  {Math.min(Math.round(translateProgress), 100)}%
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── HERO — dark ── */}
      <div style={{ background:"linear-gradient(160deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%)", padding:"0 24px 56px", position:"relative", overflow:"hidden" }}>

        {/* Background blobs */}
        <div style={{ position:"absolute", top:-80, right:-80, width:300, height:300, borderRadius:"50%", background:"#4A90D918", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", bottom:-60, left:-60, width:220, height:220, borderRadius:"50%", background:"#7B5EA718", pointerEvents:"none" }}/>

        {/* Nav */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"20px 0", marginBottom:16 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:38, height:38, background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", borderRadius:11, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20 }}>⚕</div>
            <div>
              <div style={{ color:"#fff", fontWeight:800, fontSize:20, fontFamily:"Georgia,serif" }}>MediGuide</div>
              <div style={{ color:"#4A90D9", fontSize:10, letterSpacing:1.5, fontWeight:600 }}>{t("tagline")}</div>
            </div>
          </div>
          <div style={{ display:"flex", gap:10, alignItems:"center" }}>
            {/* Language selector */}
            <div style={{ position:"relative" }}>
              <button onClick={()=>setLangOpen(o=>!o)}
                style={{ background:"#ffffff15", border:"1px solid #ffffff22", color:"#fff", borderRadius:10, padding:"7px 12px", fontSize:12, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center", gap:6 }}>
                🌐 {translating ? "Translating..." : lang}
              </button>
              {langOpen && (
                <div style={{ position:"absolute", top:"calc(100% + 6px)", right:0, background:"#1a1a2e", border:"1px solid #ffffff22", borderRadius:12, overflow:"hidden", zIndex:100, minWidth:160, boxShadow:"0 8px 32px #00000044" }}>
                  {LANGS.map(l => (
                    <button key={l} onClick={async ()=>{
                      if (l === "Other...") return; // handled below
                      setLang(l); setLangOpen(false);
                    }}
                      style={{ display:"block", width:"100%", background: l===lang?"#4A90D933":"transparent", border:"none", color: l===lang?"#4A90D9":"#ccc", padding:"9px 14px", fontSize:13, fontWeight: l===lang?700:400, cursor:"pointer", textAlign:"left" }}>
                      {l===lang ? "✓ " : ""}{l}
                    </button>
                  ))}
                  {/* Custom language input */}
                  <div style={{ borderTop:"1px solid #ffffff11", padding:"10px 12px" }}>
                    <div style={{ fontSize:11, color:"#888", marginBottom:6 }}>Type any language:</div>
                    <div style={{ display:"flex", gap:6 }}>
                      <input
                        value={customLang}
                        onChange={e=>setCustomLang(e.target.value)}
                        onKeyDown={async e=>{
                          if (e.key==="Enter" && customLang.trim().length > 1) {
                            const l = customLang.trim();
                            setLangOpen(false); setTranslating(true); setTranslateLangName(l); setTranslateProgress(0); setTranslateError("");
                            const interval = setInterval(() => setTranslateProgress(p => p < 80 ? p + 1.5 : p), 300);
                            const result = await translateToLanguage(l, (pct) => setTranslateProgress(p => Math.max(p, pct)));
                            clearInterval(interval);
                            if (result.ok) {
                              setTranslateProgress(100);
                              setTimeout(() => { setLang(l); setTranslating(false); setTranslateProgress(0); setCustomLang(""); }, 700);
                            } else {
                              setTranslateError(result.error);
                              setTranslateProgress(0);
                            }
                          }
                        }}
                        placeholder="e.g. Yoruba..."
                        style={{ flex:1, background:"#ffffff0d", border:"1px solid #ffffff22", borderRadius:8, padding:"6px 8px", fontSize:12, color:"#fff", outline:"none" }}
                      />
                      <button onClick={async ()=>{
                        if (customLang.trim().length < 2) return;
                        const l = customLang.trim();
                        setLangOpen(false); setTranslating(true); setTranslateLangName(l); setTranslateProgress(0); setTranslateError("");
                        const interval = setInterval(() => setTranslateProgress(p => p < 80 ? p + 1.5 : p), 300);
                        const result = await translateToLanguage(l, (pct) => setTranslateProgress(p => Math.max(p, pct)));
                        clearInterval(interval);
                        if (result.ok) {
                          setTranslateProgress(100);
                          setTimeout(() => { setLang(l); setTranslating(false); setTranslateProgress(0); setCustomLang(""); }, 700);
                        } else {
                          setTranslateError(result.error);
                          setTranslateProgress(0);
                        }
                      }}
                        style={{ background:"#4A90D9", border:"none", borderRadius:8, padding:"6px 10px", fontSize:12, color:"#fff", fontWeight:700, cursor:"pointer" }}>
                        Go
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button onClick={onGetStarted}
              style={{ background:"transparent", border:"1.5px solid #4A90D9", color:"#4A90D9", borderRadius:10, padding:"8px 18px", fontSize:13, fontWeight:700, cursor:"pointer" }}>
              {t("login")}
            </button>
          </div>
        </div>

        {/* Hero content */}
        <div style={{ maxWidth:500, margin:"36px auto 0", textAlign:"center" }}>
          <div style={{ display:"inline-block", background:"#4A90D922", border:"1px solid #4A90D944", borderRadius:20, padding:"5px 16px", fontSize:12, color:"#4A90D9", fontWeight:700, letterSpacing:1, marginBottom:22 }}>
            {t("freeBadge")}
          </div>

          {/* Hero title with globe background */}
          <div style={{ position:"relative", marginBottom:18 }}>
            {/* Globe SVG */}
            <svg viewBox="0 0 300 180" style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"110%", maxWidth:420, opacity:0.13, pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7B5EA7"/>
                  <stop offset="100%" stopColor="#4A90D9"/>
                </radialGradient>
              </defs>
              {/* Outer circle */}
              <circle cx="150" cy="90" r="82" fill="none" stroke="url(#globeGrad)" strokeWidth="1.5"/>
              {/* Latitude lines */}
              {[-50,-28,0,28,50].map((offset,i) => {
                const cy = 90 + offset;
                const r = Math.sqrt(82*82 - offset*offset);
                return <ellipse key={i} cx="150" cy={cy} rx={r} ry={r*0.28} fill="none" stroke="#4A90D9" strokeWidth="1" opacity="0.8"/>;
              })}
              {/* Longitude lines */}
              {[0,36,72,108,144].map((angle,i) => (
                <ellipse key={i} cx="150" cy="90" rx={82*Math.abs(Math.cos(angle*Math.PI/180))||6} ry="82" fill="none" stroke="#7B5EA7" strokeWidth="1" opacity="0.8"
                  transform={`rotate(${angle} 150 90)`}/>
              ))}
              {/* Continents - simplified blobs */}
              <path d="M120,58 Q135,50 148,55 Q158,52 165,60 Q170,70 162,78 Q150,82 138,78 Q124,73 120,58Z" fill="#4A90D9" opacity="0.6"/>
              <path d="M155,65 Q168,58 178,62 Q185,68 182,76 Q174,80 163,76 Q155,72 155,65Z" fill="#7B5EA7" opacity="0.5"/>
              <path d="M108,80 Q118,74 128,78 Q133,86 128,94 Q118,98 110,93 Q104,86 108,80Z" fill="#4A90D9" opacity="0.5"/>
              <path d="M148,88 Q162,83 172,88 Q178,96 172,104 Q160,110 148,106 Q140,99 148,88Z" fill="#7B5EA7" opacity="0.5"/>
              <path d="M125,100 Q134,96 142,100 Q145,107 140,112 Q132,114 125,110 Q121,105 125,100Z" fill="#3AAD8E" opacity="0.5"/>
              <path d="M168,75 Q176,72 182,76 Q184,82 178,85 Q172,86 167,82 Q165,78 168,75Z" fill="#3AAD8E" opacity="0.4"/>
            </svg>

            <h1 style={{ fontFamily:"Georgia,serif", fontSize:38, fontWeight:800, color:"#fff", margin:0, lineHeight:1.2, position:"relative" }}>
              {t("heroTitle1")}<br/>
              <span style={{ background:"linear-gradient(90deg,#4A90D9,#7B5EA7)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {t("heroTitle2")}
              </span>
            </h1>
          </div>
          <p style={{ fontSize:16, color:"#c0d8ff", lineHeight:1.75, margin:"0 0 34px" }}>
            {t("heroSubtext")}
          </p>

          {/* CTA buttons */}
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <button onClick={onGetStarted}
              style={{ background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", color:"#fff", border:"none", borderRadius:14, padding:"15px 32px", fontSize:15, fontWeight:800, cursor:"pointer", boxShadow:"0 8px 32px #4A90D944" }}>
              {t("getStarted")}
            </button>
            <div style={{ position:"relative" }}>
              <button
                onMouseEnter={()=>setDemoTooltip(true)}
                onMouseLeave={()=>setDemoTooltip(false)}
                style={{ background:"transparent", border:"1.5px solid #ffffff33", color:"#ffffff99", borderRadius:14, padding:"15px 32px", fontSize:15, fontWeight:700, cursor:"not-allowed" }}>
                {t("seeDemo")}
              </button>
              {demoTooltip && (
                <div style={{ position:"absolute", bottom:"calc(100% + 8px)", left:"50%", transform:"translateX(-50%)", background:"#fff", color:"#1a1a2e", fontSize:12, fontWeight:600, padding:"6px 12px", borderRadius:8, whiteSpace:"nowrap", boxShadow:"0 4px 16px #00000022", zIndex:10 }}>
                  {t("comingSoon")}
                </div>
              )}
            </div>
          </div>

          <div style={{ marginTop:16, fontSize:13, color:"#ffffff44" }}>
            {t("alreadyAccount")}{" "}
            <span onClick={onGetStarted} style={{ color:"#4A90D9", cursor:"pointer", fontWeight:600 }}>{t("login")}</span>
          </div>
        </div>
      </div>

      {/* ── WHAT MEDIGUIDE DOES — light ── */}
      <div style={{ background:"linear-gradient(160deg,#f8fbff,#eef4ff)", padding:"52px 24px" }}>
        <div style={{ maxWidth:620, margin:"0 auto" }}>

          {/* Section header */}
          <div style={{ textAlign:"center", marginBottom:10 }}>
            <div style={{ fontSize:12, fontWeight:700, color:"#4A90D9", letterSpacing:1.5, marginBottom:10 }}>{t("whatWeDo")}</div>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:26, fontWeight:800, color:"#1a1a2e", margin:"0 0 10px" }}>{t("everythingYouNeed")}</h2>
            <p style={{ fontSize:14, color:"#888", margin:"0 0 28px", lineHeight:1.6 }}>
              {t("tapToLearn")}
            </p>
          </div>

          {/* Colorful boxes grid */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:40 }}>
            {boxes.map((box) => (
              <div key={box.id}
                onClick={()=>setExpandedBox(expandedBox===box.id ? null : box.id)}
                style={{
                  background: box.bg,
                  borderRadius:20,
                  padding:"22px 18px",
                  cursor:"pointer",
                  minHeight: expandedBox===box.id ? "auto" : box.height,
                  display:"flex",
                  flexDirection:"column",
                  justifyContent:"space-between",
                  boxShadow: expandedBox===box.id ? "0 8px 32px "+box.color+"55" : "0 4px 16px "+box.color+"22",
                  transform: expandedBox===box.id ? "scale(1.02)" : "scale(1)",
                  transition:"all 0.2s ease",
                  border: expandedBox===box.id ? "2px solid "+box.color : "2px solid transparent",
                }}>
                <div>
                  <div style={{ fontSize:32, marginBottom:10 }}>{box.emoji}</div>
                  <div style={{ fontWeight:800, fontSize:16, color:"#fff", fontFamily:"Georgia,serif", marginBottom: expandedBox===box.id ? 10 : 0 }}>
                    {box.label}
                  </div>
                  {expandedBox===box.id && (
                    <div style={{ fontSize:13, color:"#ffffffcc", lineHeight:1.65, marginTop:6 }}>
                      {box.desc}
                    </div>
                  )}
                </div>
                <div style={{ fontSize:11, color:"#ffffff88", fontWeight:600, marginTop:12, textAlign:"right" }}>
                  {expandedBox===box.id ? t("tapClose") : t("tapMore")}
                </div>
              </div>
            ))}
          </div>

          {/* Aegis disclaimer */}
          <div style={{ background:"linear-gradient(135deg,#1a1a2e,#16213e)", borderRadius:18, padding:"20px 22px", marginBottom:32, display:"flex", gap:16, alignItems:"flex-start" }}>
            <div style={{ width:44, height:44, borderRadius:12, background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#fff"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight:800, fontSize:14, color:"#fff", marginBottom:5 }}>{t("aboutAegis")}</div>
              <div style={{ fontSize:13, color:"#c0d8ff", lineHeight:1.65 }}>
                {t("aegisDisclaimer")} <strong style={{ color:"#fff" }}>{t("aegisWarning")}</strong> {t("aegisNote")}
              </div>
            </div>
          </div>

          {/* Reviews section */}
          <div style={{ background:"#fff", borderRadius:20, padding:"32px 24px", border:"1.5px solid #e8eeff", boxShadow:"0 4px 20px #4A90D90a", marginBottom:24, textAlign:"center" }}>
            <div style={{ fontSize:36, marginBottom:12 }}>💬</div>
            <h3 style={{ fontFamily:"Georgia,serif", fontSize:22, fontWeight:800, color:"#1a1a2e", margin:"0 0 10px" }}>{t("gettingStarted")}</h3>
            <p style={{ fontSize:14, color:"#888", lineHeight:1.7, margin:"0 0 6px" }}>{t("reviewDesc1")}</p>
            <p style={{ fontSize:14, color:"#888", lineHeight:1.7, margin:"0 0 24px" }}>{t("reviewDesc2")}</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12, marginBottom:20 }}>
              {[t("reviewFirst"), t("reviewHelp"), t("reviewImprove")].map((placeholder, i) => (
                <div key={i} style={{ background:"linear-gradient(160deg,#f8fbff,#eef4ff)", border:"1.5px dashed #c0d8ff", borderRadius:14, padding:"18px 14px", display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
                  <div style={{ fontSize:22 }}>{"⭐".repeat(5)}</div>
                  <div style={{ fontSize:12, color:"#aaa", fontStyle:"italic", lineHeight:1.5 }}>{placeholder}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize:12, color:"#bbb", marginBottom:20 }}>{t("realReviews")}</div>
            <button onClick={onGetStarted}
              style={{ background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", color:"#fff", border:"none", borderRadius:12, padding:"12px 28px", fontSize:14, fontWeight:700, cursor:"pointer", boxShadow:"0 4px 16px #4A90D933" }}>
              {t("tryAndShare")}
            </button>
          </div>

          {/* Report a problem */}
          <div style={{ background:"linear-gradient(135deg,#fff8f0,#fff3e8)", borderRadius:20, padding:"24px", border:"1.5px solid #fde8cc", marginBottom:24, display:"flex", gap:16, alignItems:"center" }}>
            <div style={{ width:48, height:48, borderRadius:14, background:"linear-gradient(135deg,#E8614A,#F0956A)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>🐛</div>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:800, fontSize:15, color:"#1a1a2e", marginBottom:4 }}>{t("foundProblem")}</div>
              <div style={{ fontSize:13, color:"#888", lineHeight:1.6 }}>{t("reportDesc")}</div>
            </div>
            <a href="https://forms.gle/a2AYmKMgZmYVkQEL6" target="_blank" rel="noopener noreferrer"
              style={{ background:"linear-gradient(135deg,#E8614A,#F0956A)", color:"#fff", border:"none", borderRadius:12, padding:"10px 18px", fontSize:13, fontWeight:700, cursor:"pointer", textDecoration:"none", whiteSpace:"nowrap", flexShrink:0 }}>
              {t("reportIt")}
            </a>
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign:"center", background:"#fff", borderRadius:20, padding:"32px 24px", border:"1.5px solid #e8eeff", boxShadow:"0 4px 20px #4A90D90a" }}>
            <div style={{ fontSize:28, marginBottom:10 }}>🏥</div>
            <h3 style={{ fontFamily:"Georgia,serif", fontSize:22, fontWeight:800, color:"#1a1a2e", margin:"0 0 10px" }}>{t("readyTitle")}</h3>
            <p style={{ fontSize:14, color:"#888", margin:"0 0 22px", lineHeight:1.6 }}>{t("readyDesc")}</p>
            <button onClick={onGetStarted}
              style={{ background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", color:"#fff", border:"none", borderRadius:14, padding:"14px 36px", fontSize:15, fontWeight:800, cursor:"pointer", boxShadow:"0 4px 20px #4A90D933" }}>
              {t("createAccount")}
            </button>
          </div>

        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ background:"#1a1a2e", padding:"20px 24px", textAlign:"center" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:8 }}>
          <div style={{ width:24, height:24, background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", borderRadius:7, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13 }}>⚕</div>
          <span style={{ color:"#fff", fontWeight:700, fontSize:14, fontFamily:"Georgia,serif" }}>MediGuide</span>
        </div>
        <div style={{ fontSize:11, color:"#ffffff44", lineHeight:1.6 }}>{t("disclaimer")}</div>
      </div>

    </div>
  );
}

// ── LOGIN ─────────────────────────────────────────────────────────────────────

function LoginScreen({ onLogin, lang="English" }) {
  const t = useT();
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const switchMode = (m) => { setMode(m); setError(""); setSuccess(""); setName(""); setPassword(""); };

  const handleSubmit = async () => {
    setError(""); setSuccess("");
    const emailTrim = email.trim().toLowerCase();
    const passTrim  = password.trim();
    if (!emailTrim) return setError(t("enterEmail"));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) return setError(t("validEmail"));
    if (!passTrim)  return setError(t("enterPassword"));
    const supabase = await getSupabase(); if (!supabase)  return setError("Service unavailable. Please try again later.");

    setLoading(true);
    try {
      if (mode === "signup") {
        if (!name.trim()) { setLoading(false); return setError(t("enterName")); }
        if (passTrim.length < 6) { setLoading(false); return setError(t("minPassword")); }
        const { data, error: signUpErr } = await supabase.auth.signUp({
          email: emailTrim,
          password: passTrim,
          options: { data: { full_name: name.trim() } }
        });
        if (signUpErr) { setLoading(false); return setError(signUpErr.message); }
        setSuccess("Account created! Signing you in...");
        setTimeout(() => onLogin({ name: name.trim(), email: emailTrim, id: data.user?.id }), 900);
      } else {
        const { data, error: signInErr } = await supabase.auth.signInWithPassword({
          email: emailTrim,
          password: passTrim,
        });
        if (signInErr) { setLoading(false); return setError(signInErr.message); }
        const displayName = data.user?.user_metadata?.full_name || emailTrim.split("@")[0];
        onLogin({ name: displayName, email: emailTrim, id: data.user?.id });
      }
    } catch(e) {
      setLoading(false);
      setError("Something went wrong. Please check your connection.");
    }
  };

  const inp = (val, set, ph, type="text", extra={}) => (
    <input value={val} onChange={e=>{set(e.target.value);setError("");}} placeholder={ph} type={type}
      onKeyDown={e=>e.key==="Enter"&&handleSubmit()}
      style={{width:"100%",background:"#ffffff0d",border:"1px solid "+(error?"#E05C5C55":"#ffffff1a"),borderRadius:10,padding:"11px 14px",fontSize:14,color:"#fff",outline:"none",boxSizing:"border-box",...extra}}/>
  );

  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#1a1a2e,#16213e 60%,#0f3460)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24}}>
      <div style={{marginBottom:32,textAlign:"center"}}>
        <div style={{width:64,height:64,background:"linear-gradient(135deg,#4A90D9,#7B5EA7)",borderRadius:18,display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,margin:"0 auto 14px"}}>⚕</div>
        <div style={{color:"#fff",fontWeight:800,fontSize:26,fontFamily:"Georgia,serif"}}>MediGuide</div>
        <div style={{color:"#4A90D9",fontSize:11,letterSpacing:2,fontWeight:600,marginTop:4}}>{t("tagline")}</div>
      </div>

      <div style={{background:"#ffffff0d",border:"1px solid #ffffff1a",borderRadius:24,padding:28,width:"100%",maxWidth:380}}>
        <div style={{display:"flex",background:"#ffffff0a",borderRadius:12,padding:4,marginBottom:24}}>
          {["login","signup"].map(m=>(
            <button key={m} onClick={()=>switchMode(m)}
              style={{flex:1,background:mode===m?"#4A90D9":"transparent",color:mode===m?"#fff":"#888",border:"none",borderRadius:9,padding:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>
              {m==="login"?t("logIn"):t("signUp")}
            </button>
          ))}
        </div>

        {error && (
          <div style={{background:"#E05C5C22",border:"1px solid #E05C5C55",borderRadius:10,padding:"10px 14px",marginBottom:16,fontSize:13,color:"#ff9999",display:"flex",gap:8,alignItems:"flex-start"}}>
            <span>⚠️</span><span>{error}</span>
          </div>
        )}
        {success && (
          <div style={{background:"#3AAD8E22",border:"1px solid #3AAD8E55",borderRadius:10,padding:"10px 14px",marginBottom:16,fontSize:13,color:"#7EFFD4",display:"flex",gap:8,alignItems:"center"}}>
            <span>✅</span><span>{success}</span>
          </div>
        )}

        {mode==="signup" && (
          <div style={{marginBottom:14}}>
            <label style={{color:"#aaa",fontSize:12,fontWeight:600,display:"block",marginBottom:6}}>{t("fullName")}</label>
            {inp(name, setName, t("fullName").toLowerCase())}
          </div>
        )}
        <div style={{marginBottom:14}}>
          <label style={{color:"#aaa",fontSize:12,fontWeight:600,display:"block",marginBottom:6}}>{t("email")}</label>
          {inp(email, setEmail, "you@email.com", "email")}
        </div>
        <div style={{marginBottom:16}}>
          <label style={{color:"#aaa",fontSize:12,fontWeight:600,display:"block",marginBottom:6}}>{t("password")} {mode==="signup"&&<span style={{fontWeight:400,fontSize:11}}>{t("minChars")}</span>}</label>
          <div style={{position:"relative",display:"flex",alignItems:"center"}}>
            <input value={password} onChange={e=>{setPassword(e.target.value);setError("");}}
              onKeyDown={e=>e.key==="Enter"&&handleSubmit()} placeholder="••••••••" type={showPass?"text":"password"}
              style={{width:"100%",background:"#ffffff0d",border:"1px solid #ffffff1a",borderRadius:10,padding:"11px 44px 11px 14px",fontSize:14,color:"#fff",outline:"none",boxSizing:"border-box"}}/>
            <button onClick={()=>setShowPass(s=>!s)} type="button"
              style={{position:"absolute",right:12,background:"none",border:"none",cursor:"pointer",fontSize:16,color:"#aaa",padding:0,lineHeight:1,display:"flex",alignItems:"center"}}>
              {showPass ? "🙈" : "👁️"}
            </button>
          </div>
        </div>
        <div style={{marginBottom:20,fontSize:12,color:"#666",textAlign:"center"}}>
          🔒 Your session is saved securely
        </div>

        <button onClick={handleSubmit} disabled={loading}
          style={{width:"100%",background:loading?"#555":"linear-gradient(135deg,#4A90D9,#7B5EA7)",color:"#fff",border:"none",borderRadius:12,padding:14,fontSize:15,fontWeight:700,cursor:loading?"not-allowed":"pointer"}}>
          {loading ? "⏳ Please wait..." : mode==="login" ? t("logIn")+" →" : t("createAcc")}
        </button>

        <div style={{textAlign:"center",marginTop:14,fontSize:13,color:"#888"}}>
          {mode==="login"
            ? <>{t("noAccount")} <span onClick={()=>switchMode("signup")} style={{color:"#4A90D9",cursor:"pointer",fontWeight:600}}>{t("signUp")}</span></>
            : <>{t("haveAccount")} <span onClick={()=>switchMode("login")} style={{color:"#4A90D9",cursor:"pointer",fontWeight:600}}>{t("logIn")}</span></>
          }
        </div>


      </div>
    </div>
  );
}

// ── ONBOARDING ────────────────────────────────────────────────────────────────

function OnboardingScreen({ onComplete }) {
  const t = useT();
  const STEPS = [
    { id:"language",     emoji:"🌐", title:t("obLangTitle"),       subtitle:t("obLangSub"),       type:"single",  options:LANGUAGE_OPTIONS },
    { id:"country",      emoji:"🌍", title:t("obCountryTitle"),    subtitle:t("obCountrySub"),    type:"country" },
    { id:"city",         emoji:"🏙️", title:t("obCityTitle"),       subtitle:t("obCitySub"),       type:"city" },
    { id:"locationCode", emoji:"📍", title:t("obCodeTitle"),       subtitle:t("obCodeSub"),       type:"code" },
    { id:"gpsLocation",  emoji:"📡", title:t("obGpsTitle"),        subtitle:t("obGpsSub"),        type:"gps" },
    { id:"insurance",    emoji:"🛡️", title:t("obInsuranceTitle"),  subtitle:t("obInsuranceSub"),  type:"single",  options:INSURANCE_OPTIONS },
    { id:"conditions",   emoji:"🩺", title:t("obConditionsTitle"), subtitle:t("obConditionsSub"), type:"multi",   options:CONDITION_OPTIONS },
    { id:"doctorGender", emoji:"👨‍⚕️", title:t("obGenderTitle"),     subtitle:t("obGenderSub"),     type:"single",  options:GENDER_OPTIONS },
  ];
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({ country:"", city:"", locationCode:"", locationCity:"", locationRegion:"", gpsLat:"", gpsLng:"", gpsArea:"", insurance:"", otherInsurance:"", conditions:[], otherCondition:"", language:"", otherLanguage:"", doctorGender:"" });
  const [countrySearch, setCountrySearch] = useState("");
  const [codeTouched, setCodeTouched] = useState(false);
  const [codeValid, setCodeValid] = useState(false);
  const [codeLoading, setCodeLoading] = useState(false);
  const [codeError, setCodeError] = useState("");
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsError, setGpsError] = useState("");
  const [gpsGranted, setGpsGranted] = useState(false);
  const [insuranceChecking, setInsuranceChecking] = useState(false);
  const [insuranceValid, setInsuranceValid] = useState(false);
  const [insuranceError, setInsuranceError] = useState("");
  const [insuranceTouched, setInsuranceTouched] = useState(false);

  const codeConfig = answers.country
    ? (COUNTRY_CODE_CONFIG[answers.country] !== undefined
        ? COUNTRY_CODE_CONFIG[answers.country]
        : { label:"Postal Code", placeholder:"Enter your postal code", format:/\S+/, maxLength:12, hint:"Enter your postal or area code" })
    : null;

  const validateCode = async (code) => {
    setCodeLoading(true); setCodeError("");
    try {
      if (answers.country==="United States") {
        const res = await fetch("https://api.zippopotam.us/us/"+code);
        if (res.ok) {
          const data = await res.json();
          const place = data.places[0];
          setAnswers(p=>({...p, locationCity:place["place name"], locationRegion:place["state abbreviation"]}));
          setCodeValid(true);
        } else { setCodeError("That ZIP code doesn't exist in the United States."); setCodeValid(false); }
      } else if (answers.country==="United Kingdom") {
        const res = await fetch("https://api.postcodes.io/postcodes/"+encodeURIComponent(code)+"/validate");
        if (res.ok) {
          const data = await res.json();
          if (data.result) {
            const detail = await fetch("https://api.postcodes.io/postcodes/"+encodeURIComponent(code));
            if (detail.ok) { const d=await detail.json(); setAnswers(p=>({...p, locationCity:d.result?.admin_district||"", locationRegion:d.result?.region||""})); }
            setCodeValid(true);
          } else { setCodeError("That postcode doesn't exist in the United Kingdom."); setCodeValid(false); }
        } else { setCodeValid(true); }
      } else { setAnswers(p=>({...p,locationCity:"",locationRegion:""})); setCodeValid(true); }
    } catch(e) { setCodeValid(true); }
    setCodeLoading(false);
  };

  const validateInsurance = async (name) => {
    if (!name.trim()||name.trim().length<3) return;
    setInsuranceChecking(true); setInsuranceError(""); setInsuranceValid(false);
    try {
      const res = await fetch("/api/claude", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:100,
          messages:[{role:"user",content:`Is "${name}" a real health insurance plan or company? Reply ONLY with valid JSON: {"valid":true/false,"suggestion":"corrected name if close, else empty string"}`}]
        })
      });
      const data = await res.json();
      const text = data.content.map(b=>b.text||"").join("").replace(/```json|```/g,"").trim();
      const parsed = JSON.parse(text);
      if (parsed.valid) { setInsuranceValid(true); if (parsed.suggestion) setAnswers(p=>({...p,otherInsurance:parsed.suggestion})); }
      else { setInsuranceValid(false); setInsuranceError(t("obInsuranceBad")); }
    } catch(e) { setInsuranceValid(true); }
    setInsuranceChecking(false);
  };

  const requestGPS = () => {
    if (!navigator.geolocation) { setGpsError("GPS is not supported on this device."); return; }
    setGpsLoading(true); setGpsError("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setAnswers(p => ({ ...p, gpsLat: pos.coords.latitude.toFixed(5), gpsLng: pos.coords.longitude.toFixed(5) }));
        setGpsGranted(true);
        setGpsLoading(false);
      },
      (err) => {
        setGpsError(err.code === 1 ? "Location access was denied. Please enter your area manually below." : "Couldn't get your location. Please enter your area manually below.");
        setGpsLoading(false);
      },
      { timeout: 10000 }
    );
  };

  // true = country has no postal code system at all (codeConfig===null)
  const noPostalCode = answers.country && COUNTRY_CODE_CONFIG[answers.country] === null;
  // true = country has postal code system
  const hasPostalCode = answers.country && COUNTRY_CODE_CONFIG[answers.country] !== null && COUNTRY_CODE_CONFIG[answers.country] !== undefined;

  const skipStep = (stepId) => {
    if (stepId === "locationCode") return noPostalCode; // skip postal code for countries without one
    if (stepId === "gpsLocation")  return !noPostalCode; // skip GPS step for countries that have postal codes
    return false;
  };

  const step = STEPS[idx];
  const isLast = idx===STEPS.length-1;

  const canContinue = () => {
    if (step.id==="language") return !!answers.language;
    if (step.id==="country") return !!answers.country;
    if (step.id==="city") return !!answers.city.trim();
    if (step.id==="insurance") return !!answers.insurance && (answers.insurance!=="Other"||insuranceValid);
    if (step.id==="gpsLocation") return gpsGranted || answers.gpsArea.trim().length > 2;
    return true;
  };

  const goNext = () => {
    if (!canContinue()) return;
    if (isLast) { onComplete(answers); return; }
    let next = idx + 1;
    while (next < STEPS.length && skipStep(STEPS[next].id)) next++;
    setIdx(next);
  };

  const goBack = () => {
    let prev = idx - 1;
    while (prev >= 0 && skipStep(STEPS[prev].id)) prev--;
    if (prev >= 0) setIdx(prev);
  };

  const toggle = (val) => setAnswers(p=>({...p, conditions:p.conditions.includes(val)?p.conditions.filter(x=>x!==val):[...p.conditions,val]}));

  const btn = (sel) => ({ background:sel?"linear-gradient(135deg,#4A90D9,#7B5EA7)":"#fff", color:sel?"#fff":"#333", border:sel?"2px solid transparent":"2px solid #e0e7ff", borderRadius:12, padding:"13px 16px", fontSize:14, fontWeight:600, cursor:"pointer", textAlign:"left" });

  const stepTitle = step.id==="locationCode"&&codeConfig ? "What's your "+codeConfig.label+"?" : step.title;
  const stepSub   = step.id==="locationCode"&&codeConfig ? codeConfig.hint : step.subtitle;

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(160deg,#f8fbff,#eef4ff)", display:"flex", flexDirection:"column" }}>
      <div style={{ height:4, background:"#e0e7ff" }}>
        <div style={{ height:"100%", width:((idx/STEPS.length)*100)+"%", background:"linear-gradient(90deg,#4A90D9,#7B5EA7)", transition:"width 0.4s" }} />
      </div>
      <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:24 }}>
        <div style={{ width:"100%", maxWidth:420 }}>
          <div style={{ textAlign:"center", marginBottom:28 }}>
            <div style={{ fontSize:52, marginBottom:10 }}>{step.emoji}</div>
            <div style={{ fontSize:11, color:"#4A90D9", fontWeight:700, letterSpacing:1.5, marginBottom:6 }}>{t("obStep")} {idx+1} {t("obOf")} {STEPS.length}</div>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:22, fontWeight:800, color:"#1a1a2e", margin:"0 0 6px" }}>{stepTitle}</h2>
            <p style={{ color:"#888", fontSize:13, margin:0 }}>{stepSub}</p>
          </div>

          {step.type==="country" && (
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <input value={countrySearch} onChange={e=>setCountrySearch(e.target.value)} placeholder={t("obCountrySearch")}
                style={{ width:"100%", border:"2px solid #e0e7ff", borderRadius:12, padding:"12px 16px", fontSize:14, outline:"none", boxSizing:"border-box", background:"#fff" }} />
              <div style={{ maxHeight:260, overflowY:"auto", display:"flex", flexDirection:"column", gap:6 }}>
                {COUNTRIES.filter(c=>c.toLowerCase().includes(countrySearch.toLowerCase())).map(c=>(
                  <button key={c} onClick={()=>{setAnswers(p=>({...p,country:c,locationCode:"",locationCity:"",locationRegion:""}));setCodeTouched(false);setCodeValid(false);setCodeError("");}}
                    style={{...btn(answers.country===c), display:"flex", justifyContent:"space-between"}}>
                    {c}{answers.country===c&&<span>✓</span>}
                  </button>
                ))}
              </div>
              {!answers.country&&<div style={{fontSize:12,color:"#E05C5C",fontWeight:600,textAlign:"center"}}>⚠️ Please select your country to continue</div>}
            </div>
          )}

          {step.type==="city" && (
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <input value={answers.city} onChange={e=>setAnswers(p=>({...p,city:e.target.value}))}
                placeholder={answers.country==="United States"?"e.g. Sacramento, California":t("obCityPlaceholder")}
                style={{ width:"100%", border:answers.city.trim()?"2px solid #3AAD8E":"2px solid #e0e7ff", borderRadius:14, padding:"14px 16px", fontSize:15, outline:"none", boxSizing:"border-box", background:"#fff", transition:"border 0.2s" }} />
              <div style={{ fontSize:12, color:"#888", textAlign:"center" }}>💡 Include your state or region for best results</div>
              {!answers.city.trim()&&<div style={{fontSize:12,color:"#aaa",textAlign:"center"}}>⚠️ Please enter your city to continue</div>}
            </div>
          )}

          {step.type==="code" && codeConfig && (
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              <div style={{ background:"#f0f7ff", border:"1.5px solid #c0d8ff", borderRadius:12, padding:"10px 14px", fontSize:13, color:"#4A90D9", fontWeight:600, textAlign:"center" }}>
                📍 {answers.country} · <strong>{codeConfig.label}</strong>
              </div>
              <div style={{ position:"relative" }}>
                <input value={answers.locationCode}
                  onChange={e=>{const v=e.target.value;setAnswers(p=>({...p,locationCode:v,locationCity:"",locationRegion:""}));setCodeTouched(true);setCodeValid(false);setCodeError("");if(codeConfig.format.test(v.trim()))validateCode(v.trim());}}
                  placeholder={codeConfig.placeholder} maxLength={codeConfig.maxLength}
                  style={{ width:"100%", border:!codeTouched?"2px solid #e0e7ff":codeValid?"2px solid #3AAD8E":codeError?"2px solid #E05C5C":"2px solid #e0e7ff", borderRadius:14, padding:"14px 44px 14px 16px", fontSize:16, outline:"none", boxSizing:"border-box", textAlign:"center", background:"#fff", transition:"border 0.2s" }} />
                <div style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", fontSize:16 }}>
                  {codeLoading?"⏳":!codeTouched?"📍":codeValid?"✅":codeError?"❌":"📍"}
                </div>
              </div>
              {codeValid&&answers.locationCity&&(
                <div style={{background:"#f0fff8",border:"1.5px solid #3AAD8E",borderRadius:12,padding:"12px 16px",textAlign:"center"}}>
                  <div style={{fontWeight:700,fontSize:14,color:"#1a1a2e"}}>✅ {answers.locationCity}{answers.locationRegion?", "+answers.locationRegion:""}</div>
                  <div style={{fontSize:12,color:"#3AAD8E",marginTop:2}}>{answers.country}</div>
                </div>
              )}
              {codeError&&<div style={{fontSize:12,color:"#E05C5C",fontWeight:600,textAlign:"center"}}>❌ {codeError}</div>}
            </div>
          )}

          {/* GPS STEP — only shown for countries without postal codes */}
          {step.type==="gps" && (
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>

              {/* Country reminder */}
              <div style={{ background:"#f0f7ff", border:"1.5px solid #c0d8ff", borderRadius:12, padding:"10px 14px", fontSize:13, color:"#4A90D9", fontWeight:600, textAlign:"center" }}>
                📍 {answers.country} · {answers.city} — no postal code required
              </div>

              {/* GPS button — primary option */}
              <div style={{ background:"#fff", border:"1.5px solid #e0e7ff", borderRadius:16, padding:20, textAlign:"center" }}>
                <div style={{ fontSize:36, marginBottom:10 }}>📡</div>
                <div style={{ fontWeight:700, fontSize:15, color:"#1a1a2e", marginBottom:6 }}>Use My Current Location</div>
                <div style={{ fontSize:13, color:"#888", marginBottom:16, lineHeight:1.5 }}>
                  The most accurate way — works anywhere in the world, no postal code needed.
                </div>
                {!gpsGranted ? (
                  <button onClick={requestGPS} disabled={gpsLoading}
                    style={{ background:gpsLoading?"#ccc":"linear-gradient(135deg,#4A90D9,#7B5EA7)", color:"#fff", border:"none", borderRadius:12, padding:"12px 24px", fontSize:14, fontWeight:700, cursor:gpsLoading?"not-allowed":"pointer", width:"100%" }}>
                    {gpsLoading ? t("obGpsGetting") : t("obGpsAllow")}
                  </button>
                ) : (
                  <div style={{ background:"#f0fff8", border:"1.5px solid #3AAD8E", borderRadius:12, padding:"12px 16px" }}>
                    <div style={{ fontWeight:700, fontSize:14, color:"#1a6b4a" }}>✅ Location captured!</div>
                    <div style={{ fontSize:12, color:"#3AAD8E", marginTop:4 }}>
                      📍 {parseFloat(answers.gpsLat).toFixed(3)}°, {parseFloat(answers.gpsLng).toFixed(3)}°
                    </div>
                  </div>
                )}
                {gpsError && <div style={{ fontSize:12, color:"#E05C5C", fontWeight:600, marginTop:10 }}>⚠️ {gpsError}</div>}
              </div>

              {/* Divider */}
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ flex:1, height:1, background:"#e0e7ff" }}/>
                <div style={{ fontSize:12, color:"#aaa", fontWeight:600 }}>OR</div>
                <div style={{ flex:1, height:1, background:"#e0e7ff" }}/>
              </div>

              {/* Area text fallback */}
              <div>
                <label style={{ fontSize:12, fontWeight:700, color:"#4A90D9", letterSpacing:1, display:"block", marginBottom:8 }}>ENTER YOUR AREA OR NEIGHBORHOOD</label>
                <input
                  value={answers.gpsArea}
                  onChange={e => setAnswers(p=>({...p, gpsArea:e.target.value}))}
                  placeholder={`e.g. Westlands, ${answers.city||"your area"}`}
                  style={{ width:"100%", border:"1.5px solid "+(answers.gpsArea.trim().length>2?"#3AAD8E":"#e0e7ff"), borderRadius:12, padding:"13px 14px", fontSize:14, outline:"none", boxSizing:"border-box", background:answers.gpsArea.trim().length>2?"#f0fff8":"#fff", transition:"border 0.2s" }}
                />
                <div style={{ fontSize:11, color:"#aaa", marginTop:6 }}>Type your neighborhood, district, or local area name</div>
              </div>

              {/* Hint that either option works */}
              {(gpsGranted || answers.gpsArea.trim().length>2) && (
                <div style={{ background:"#f0fff8", border:"1.5px solid #3AAD8E", borderRadius:12, padding:"10px 14px", fontSize:13, color:"#1a6b4a", fontWeight:600 }}>
                  ✅ Great — we have enough to find doctors near you!
                </div>
              )}
            </div>
          )}

          {step.type==="single" && (
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {step.options.map(opt=>(
                <button key={opt} onClick={()=>setAnswers(p=>({...p,[step.id]:opt}))} style={btn(answers[step.id]===opt)}>{opt}</button>
              ))}
              {answers[step.id]==="Other"&&step.id==="insurance"&&(
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  <div style={{position:"relative"}}>
                    <input value={answers.otherInsurance}
                      onChange={e=>{const v=e.target.value;setAnswers(p=>({...p,otherInsurance:v}));setInsuranceTouched(true);setInsuranceValid(false);setInsuranceError("");}}
                      onBlur={()=>answers.otherInsurance.trim().length>=3&&validateInsurance(answers.otherInsurance)}
                      placeholder={t("obInsurancePlaceholder")}
                      style={{width:"100%",border:!insuranceTouched?"2px solid #e0e7ff":insuranceValid?"2px solid #3AAD8E":insuranceError?"2px solid #E05C5C":"2px solid #e0e7ff",borderRadius:12,padding:"13px 44px 13px 14px",fontSize:14,outline:"none",boxSizing:"border-box",background:insuranceValid?"#f0fff8":"#f0f7ff",transition:"border 0.2s"}}/>
                    <div style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",fontSize:16}}>
                      {insuranceChecking?"⏳":insuranceValid?"✅":insuranceTouched&&insuranceError?"❌":"🛡️"}
                    </div>
                  </div>
                  {insuranceChecking&&<div style={{fontSize:12,color:"#4A90D9",fontWeight:600}}>🔍 Verifying insurance plan...</div>}
                  {insuranceValid&&<div style={{fontSize:12,color:"#3AAD8E",fontWeight:600}}>{t("obInsuranceVerified")} {answers.otherInsurance}</div>}
                  {insuranceError&&<div style={{fontSize:12,color:"#E05C5C",fontWeight:600}}>❌ {insuranceError}</div>}
                  {!insuranceTouched&&<div style={{fontSize:12,color:"#888"}}>💡 Type your insurance name and we'll verify it's real</div>}
                </div>
              )}
              {answers[step.id]==="Other"&&step.id==="language"&&(
                <input value={answers.otherLanguage} onChange={e=>setAnswers(p=>({...p,otherLanguage:e.target.value}))} placeholder={t("typeLangPlaceholder")||"Type your preferred language..."}
                  style={{width:"100%",border:"2px solid #4A90D9",borderRadius:12,padding:"13px 14px",fontSize:14,outline:"none",boxSizing:"border-box",background:"#f0f7ff"}}/>
              )}
            </div>
          )}

          {step.type==="multi" && (
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                {step.options.map(opt=>{
                  const sel=answers.conditions.includes(opt);
                  return (
                    <button key={opt} onClick={()=>toggle(opt)}
                      style={{background:sel?"linear-gradient(135deg,#4A90D9,#7B5EA7)":"#fff",color:sel?"#fff":"#333",border:sel?"2px solid transparent":"2px solid #e0e7ff",borderRadius:12,padding:"13px 12px",fontSize:13,fontWeight:600,cursor:"pointer"}}>
                      {sel?"✓ ":""}{opt}
                    </button>
                  );
                })}
              </div>
              {answers.conditions.includes("Other")&&(
                <input value={answers.otherCondition} onChange={e=>setAnswers(p=>({...p,otherCondition:e.target.value}))} placeholder={t("obConditionOtherPh")}
                  style={{width:"100%",border:"2px solid #4A90D9",borderRadius:12,padding:"13px 14px",fontSize:14,outline:"none",boxSizing:"border-box",background:"#f0f7ff"}}/>
              )}
            </div>
          )}

          <div style={{ marginTop:28, display:"flex", gap:10 }}>
            {idx>0&&<button onClick={goBack} style={{flex:1,background:"#fff",border:"2px solid #e0e7ff",borderRadius:12,padding:14,fontSize:14,fontWeight:600,cursor:"pointer",color:"#666"}}>← Back</button>}
            <button onClick={goNext}
              style={{flex:2,background:canContinue()?"linear-gradient(135deg,#4A90D9,#7B5EA7)":"#ccc",color:"#fff",border:"none",borderRadius:12,padding:14,fontSize:15,fontWeight:700,cursor:canContinue()?"pointer":"not-allowed"}}>
              {isLast?t("obGetStarted"):t("obContinue")}
            </button>
          </div>
          {step.id!=="language"&&step.id!=="country"&&step.id!=="city"&&step.id!=="insurance"&&step.id!=="locationCode"&&step.id!=="gpsLocation"&&(
            <button onClick={()=>onComplete(answers)} style={{width:"100%",background:"transparent",border:"none",color:"#bbb",fontSize:13,cursor:"pointer",marginTop:12,padding:8}}>Skip for now</button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── PROFILE ───────────────────────────────────────────────────────────────────

function ProfilePage({ user, prefs, onSave, onSignOut }) {
  const t = useT();
  const blank = { country:"", city:"", locationCode:"", insurance:"", otherInsurance:"", conditions:[], otherCondition:"", language:"", otherLanguage:"", doctorGender:"" };
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(prefs||blank);

  const save = () => { onSave(draft); setEditing(false); };
  const toggleCond = (val) => setDraft(p=>({...p,conditions:p.conditions.includes(val)?p.conditions.filter(x=>x!==val):[...p.conditions,val]}));
  const display = (key) => {
    if (!prefs||!prefs[key]) return t("notSet");
    if (key==="insurance"&&prefs.insurance==="Other") return prefs.otherInsurance||"Other";
    if (key==="language"&&prefs.language==="Other") return prefs.otherLanguage||"Other";
    if (key==="conditions") return prefs.conditions.length?prefs.conditions.map(c=>c==="Other"&&prefs.otherCondition?prefs.otherCondition:c).join(", "):t("none");
    return prefs[key];
  };

  return (
    <div>
      <div style={{ background:"linear-gradient(135deg,#1a1a2e,#16213e)", borderRadius:20, padding:24, marginBottom:20, color:"#fff", display:"flex", alignItems:"center", gap:16 }}>
        <div style={{ width:64, height:64, borderRadius:"50%", background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, fontWeight:700 }}>
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <div style={{ fontWeight:800, fontSize:20, fontFamily:"Georgia,serif" }}>{user.name}</div>
          <div style={{ color:"#4A90D9", fontSize:13, marginTop:3 }}>{user.email}</div>
        </div>
      </div>

      <div style={{ background:"#fff", borderRadius:20, padding:24, boxShadow:"0 4px 20px #0000000a", border:"1.5px solid #e8e8e8", marginBottom:16 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
          <div style={{ fontWeight:800, fontSize:16, fontFamily:"Georgia,serif" }}>{t("myHealthProfile")}</div>
          {editing
            ? <div style={{display:"flex",gap:8}}>
                <button onClick={()=>setEditing(false)} style={{background:"#f5f5f5",border:"none",borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:600,cursor:"pointer",color:"#666"}}>{t("cancelEdit")}</button>
                <button onClick={save} style={{background:"linear-gradient(135deg,#4A90D9,#7B5EA7)",border:"none",borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:700,cursor:"pointer",color:"#fff"}}>{t("saveProfile")}</button>
              </div>
            : <button onClick={()=>{setDraft(prefs||blank);setEditing(true);}} style={{background:"#f0f7ff",border:"1.5px solid #c0d8ff",borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:600,cursor:"pointer",color:"#4A90D9"}}>{t("editProfile")}</button>
          }
        </div>

        {[{label:t("country"),key:"country"},{label:t("city"),key:"city"},{label:t("locationCode"),key:"locationCode"},{label:t("insurance"),key:"insurance"},{label:t("language"),key:"language"}].map(field=>(
          <div key={field.key}>
            <div style={{fontSize:11,fontWeight:700,color:"#4A90D9",letterSpacing:1,marginBottom:6}}>{field.label}</div>
            {editing
              ? <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  {field.key==="country"&&<select value={draft.country||""} onChange={e=>setDraft(p=>({...p,country:e.target.value}))} style={{width:"100%",border:"1.5px solid #e0e7ff",borderRadius:10,padding:"10px 12px",fontSize:14,outline:"none",background:"#fff"}}><option value="">Select...</option>{COUNTRIES.map(o=><option key={o}>{o}</option>)}</select>}
                  {field.key==="city"&&<input value={draft.city||""} onChange={e=>setDraft(p=>({...p,city:e.target.value}))} placeholder="City and region" style={{width:"100%",border:"1.5px solid #e0e7ff",borderRadius:10,padding:"10px 12px",fontSize:14,outline:"none",boxSizing:"border-box"}}/>}
                  {field.key==="locationCode"&&<input value={draft.locationCode||""} onChange={e=>setDraft(p=>({...p,locationCode:e.target.value}))} placeholder="Postal / ZIP / Area code" style={{width:"100%",border:"1.5px solid #e0e7ff",borderRadius:10,padding:"10px 12px",fontSize:14,outline:"none",boxSizing:"border-box"}}/>}
                  {field.key==="insurance"&&<select value={draft.insurance||""} onChange={e=>setDraft(p=>({...p,insurance:e.target.value}))} style={{width:"100%",border:"1.5px solid #e0e7ff",borderRadius:10,padding:"10px 12px",fontSize:14,outline:"none",background:"#fff"}}><option value="">Select...</option>{INSURANCE_OPTIONS.map(o=><option key={o}>{o}</option>)}</select>}
                  {field.key==="insurance"&&draft.insurance==="Other"&&<input value={draft.otherInsurance||""} onChange={e=>setDraft(p=>({...p,otherInsurance:e.target.value}))} placeholder="Type insurance..." style={{width:"100%",border:"2px solid #4A90D9",borderRadius:10,padding:"10px 12px",fontSize:14,outline:"none",boxSizing:"border-box",background:"#f0f7ff"}}/>}
                  {field.key==="language"&&<select value={draft.language||""} onChange={e=>setDraft(p=>({...p,language:e.target.value}))} style={{width:"100%",border:"1.5px solid #e0e7ff",borderRadius:10,padding:"10px 12px",fontSize:14,outline:"none",background:"#fff"}}><option value="">Select...</option>{LANGUAGE_OPTIONS.map(o=><option key={o}>{o}</option>)}</select>}
                  {field.key==="language"&&draft.language==="Other"&&<input value={draft.otherLanguage||""} onChange={e=>setDraft(p=>({...p,otherLanguage:e.target.value}))} placeholder="Type language..." style={{width:"100%",border:"2px solid #4A90D9",borderRadius:10,padding:"10px 12px",fontSize:14,outline:"none",boxSizing:"border-box",background:"#f0f7ff"}}/>}
                </div>
              : <div style={{fontSize:14,color:prefs&&prefs[field.key]?"#1a1a2e":"#bbb"}}>{display(field.key)}</div>
            }
            <div style={{height:1,background:"#f0f0f0",marginTop:14}}/>
          </div>
        ))}

        <div>
          <div style={{fontSize:11,fontWeight:700,color:"#4A90D9",letterSpacing:1,marginBottom:6}}>{t("doctorGender")}</div>
          {editing
            ? <div style={{display:"flex",gap:8}}>
                {GENDER_OPTIONS.map(opt=>(
                  <button key={opt} onClick={()=>setDraft(p=>({...p,doctorGender:opt}))}
                    style={{flex:1,background:draft.doctorGender===opt?"linear-gradient(135deg,#4A90D9,#7B5EA7)":"#f5f5f5",color:draft.doctorGender===opt?"#fff":"#555",border:"none",borderRadius:10,padding:"9px 4px",fontSize:12,fontWeight:600,cursor:"pointer"}}>
                    {opt}
                  </button>
                ))}
              </div>
            : <div style={{fontSize:14,color:prefs&&prefs.doctorGender?"#1a1a2e":"#bbb"}}>{prefs&&prefs.doctorGender?prefs.doctorGender:t("notSet")}</div>
          }
          <div style={{height:1,background:"#f0f0f0",marginTop:14}}/>
        </div>

        <div>
          <div style={{fontSize:11,fontWeight:700,color:"#4A90D9",letterSpacing:1,marginBottom:6}}>{t("conditions")}</div>
          {editing
            ? <div style={{display:"flex",flexDirection:"column",gap:8}}>
                <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                  {CONDITION_OPTIONS.map(opt=>{
                    const sel=draft.conditions.includes(opt);
                    return <button key={opt} onClick={()=>toggleCond(opt)} style={{background:sel?"linear-gradient(135deg,#4A90D9,#7B5EA7)":"#f5f5f5",color:sel?"#fff":"#555",border:"none",borderRadius:20,padding:"6px 14px",fontSize:12,fontWeight:600,cursor:"pointer"}}>{sel?"✓ ":""}{opt}</button>;
                  })}
                </div>
                {draft.conditions.includes("Other")&&<input value={draft.otherCondition||""} onChange={e=>setDraft(p=>({...p,otherCondition:e.target.value}))} placeholder="Describe condition..." style={{width:"100%",border:"2px solid #4A90D9",borderRadius:10,padding:"10px 12px",fontSize:14,outline:"none",boxSizing:"border-box",background:"#f0f7ff"}}/>}
              </div>
            : <div style={{fontSize:14,color:prefs&&prefs.conditions&&prefs.conditions.length?"#1a1a2e":"#bbb"}}>{display("conditions")}</div>
          }
        </div>
      </div>
      <button onClick={onSignOut} style={{width:"100%",background:"#fff",border:"1.5px solid #ffe0e0",borderRadius:12,padding:14,fontSize:14,fontWeight:600,cursor:"pointer",color:"#E05C5C"}}>{t("signOutBtn")}</button>
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────

export default function MediGuide() {
  const [screen, setScreen] = useState("landing");
  const [landingLang, setLandingLang] = useState("English");
  const [user, setUser] = useState(null);
  const [prefs, setPrefs] = useState(null);
  const [tab, setTab] = useState("home");
  const [symptomInput, setSymptomInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const [matchedDocs, setMatchedDocs] = useState([]);
  const [error, setError] = useState(null);
  const [triageStage, setTriageStage] = useState("input");
  const [followUpQs, setFollowUpQs] = useState([]);
  const [followUpAnswers, setFollowUpAnswers] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [filterSpec, setFilterSpec] = useState("All");
  const [ignorePrefs, setIgnorePrefs] = useState(false);
  const [browseSearch, setBrowseSearch] = useState("");
  const [browseFromSymptoms, setBrowseFromSymptoms] = useState(null);
  const [wantsSameDay, setWantsSameDay] = useState(null); // null | true | false
  const [bookingDoc, setBookingDoc] = useState(null);
  const [maxDistance, setMaxDistance] = useState(10);
  const [toast, setToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("✅ Profile saved!");
  const [aegisOpen, setAegisOpen] = useState(false);
  const [aegisMessages, setAegisMessages] = useState([]);
  const [aegisInput, setAegisInput] = useState("");
  const [aegisLoading, setAegisLoading] = useState(false);
  const [aegisPos, setAegisPos] = useState({ x: null, y: null });
  const [aegisDragging, setAegisDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x:0, y:0 });
  const [aegisMinimized, setAegisMinimized] = useState(false);
  const [aegisExpanded, setAegisExpanded] = useState(false);

  const appLang = (() => {
    const prefLang = getLang(prefs);
    if (prefLang !== "English") return prefLang;
    return landingLang;
  })();
  const t = useT();

  // Update welcome message when language changes
  React.useEffect(() => {
    setAegisMessages([{ role:"assistant", text:T[appLang]?.aegisWelcome || T.English.aegisWelcome }]);
  }, [appLang]);

  const showToast = (msg="✅ Profile saved!") => { setToastMsg(msg); setToast(true); setTimeout(()=>setToast(false),3000); };

  const aegisSend = async (text) => {
    if (!text.trim() || aegisLoading) return;
    const userMsg = { role:"user", text };
    const newHistory = [...aegisMessages, userMsg];
    setAegisMessages(newHistory);
    setAegisInput("");
    setAegisLoading(true);
    try {
      const systemPrompt = `You are Aegis AI, a friendly and knowledgeable assistant built into MediGuide — a healthcare navigation app for underserved communities. Your job is to:
1. Help users navigate the MediGuide app (symptom checker, booking appointments, finding doctors, no-insurance resources, profile settings)
2. Explain medical terms in plain simple language with a memorable analogy
3. Answer general health questions clearly and compassionately
4. Help users understand their options

IMPORTANT: You are NOT a symptom checker or a replacement for medical advice. For serious health concerns always encourage users to use the symptom checker or see a doctor. Keep answers concise, warm, and simple — many users may have limited health literacy. Never use jargon without explaining it.

LANGUAGE: Always respond in ${appLang}. If the user writes in a different language, still respond in ${appLang}.

App context: The user${prefs ? ` is in ${prefs.city||prefs.country||"their area"}, speaks ${prefs.language||"English"}, has ${prefs.insurance||"unknown"} insurance.` : " has not set up a profile yet."}`;

      const messages = newHistory.map(m => ({ role: m.role==="assistant"?"assistant":"user", content: m.text }));
      const res = await fetch("/api/claude", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:400, system: systemPrompt, messages })
      });
      const data = await res.json();
      const reply = data.content.map(b=>b.text||"").join("").trim();
      setAegisMessages(h => [...h, { role:"assistant", text: reply }]);
    } catch(e) {
      setAegisMessages(h => [...h, { role:"assistant", text:"Sorry, I couldn't connect right now. Please try again in a moment." }]);
    }
    setAegisLoading(false);
  };

  const aegisDragStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const panel = document.getElementById("aegis-panel");
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    setDragOffset({ x: clientX - rect.left, y: clientY - rect.top });
    setAegisDragging(true);
  };

  const aegisDragMove = (e) => {
    if (!aegisDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const newX = clientX - dragOffset.x;
    const newY = clientY - dragOffset.y;
    const panel = document.getElementById("aegis-panel");
    const pw = panel ? panel.offsetWidth : 340;
    const ph = panel ? panel.offsetHeight : 500;
    setAegisPos({
      x: Math.max(0, Math.min(window.innerWidth - pw, newX)),
      y: Math.max(0, Math.min(window.innerHeight - ph, newY))
    });
  };

  const aegisDragEnd = () => setAegisDragging(false);

  // Save profile to Supabase profiles table
  const saveProfile = async (userId, data) => {
    const supabase = await getSupabase();
    if (!supabase || !userId) return;
    try {
      await supabase.from("profiles").upsert({
        id: userId,
        prefs: data,
        updated_at: new Date().toISOString()
      }, { onConflict: "id" });
    } catch(e) { console.error("saveProfile error:", e); }
  };

  // Load profile from Supabase profiles table
  const loadProfile = async (userId) => {
    const supabase = await getSupabase();
    if (!supabase || !userId) return null;
    try {
      const { data, error } = await supabase.from("profiles").select("prefs").eq("id", userId).single();
      if (error || !data) return null;
      return data.prefs;
    } catch(e) { return null; }
  };

  const handleLogin = async (u) => {
    setUser(u);
    const saved = await loadProfile(u.id);
    if (saved) {
      setPrefs(saved);
      setScreen("app");
      showToast("👋 Welcome back, " + u.name + "!");
    } else {
      setScreen("onboarding");
    }
  };

  const handleOnboardingComplete = async (p) => {
    setPrefs(p);
    if (user && user.id) await saveProfile(user.id, p);
    // Pre-translate if custom language
    const customL = p.language === "Other" ? p.otherLanguage : null;
    if (customL && customL.trim() && !T[customL] && !AI_TRANSLATION_CACHE[customL]) {
      await translateToLanguage(customL.trim());
    }
    setScreen("app");
  };

  const handleSaveProfile = async (p) => {
    setPrefs(p);
    if (user && user.id) await saveProfile(user.id, p);
    showToast("✅ Profile saved!");
  };

  // ── EMERGENCY NUMBER LOOKUP ─────────────────────────────────────────────────
  const EMERGENCY_NUMBERS = {
    "United States":"911","Canada":"911","United Kingdom":"999","Australia":"000",
    "New Zealand":"111","India":"112","Germany":"112","France":"15 (SAMU) / 112",
    "Spain":"112","Italy":"118","Portugal":"112","Netherlands":"112","Belgium":"112",
    "Switzerland":"144","Austria":"144","Sweden":"112","Norway":"113","Denmark":"112",
    "Finland":"112","Poland":"112","Czech Republic":"155","Hungary":"104",
    "Romania":"112","Bulgaria":"112","Greece":"166","Turkey":"112","Russia":"103",
    "China":"120","Japan":"119","South Korea":"119","Philippines":"911",
    "Indonesia":"119","Malaysia":"999","Singapore":"995","Thailand":"1669",
    "Vietnam":"115","Pakistan":"115","Bangladesh":"999","Sri Lanka":"110",
    "Nepal":"102","Mexico":"911","Brazil":"192","Argentina":"107","Colombia":"123",
    "Chile":"131","Peru":"117","Venezuela":"171","Nigeria":"199","Kenya":"999",
    "South Africa":"10177","Ghana":"193","Egypt":"123","Morocco":"15",
    "Ethiopia":"907","Tanzania":"114","Uganda":"999","Cameroon":"15",
    "Saudi Arabia":"911","UAE":"998","Israel":"101","Jordan":"911","Iraq":"122",
    "Iran":"115","Lebanon":"140","Kuwait":"112","Qatar":"999","Bahrain":"999",
  };
  const getEmergencyNumber = () => {
    if (prefs?.country && EMERGENCY_NUMBERS[prefs.country]) return EMERGENCY_NUMBERS[prefs.country];
    return "112"; // international fallback works in most countries
  };

  // First-response advice by symptom keyword
  const getEmergencyAdvice = (summary = "", specialist = "") => {
    const s = (summary + " " + specialist).toLowerCase();
    if (s.includes("heart") || s.includes("chest") || s.includes("cardiac"))
      return ["Call emergency services immediately and do NOT drive yourself.", "Chew one regular aspirin (325mg) if not allergic and you have one available.", "Loosen any tight clothing around your neck and chest.", "Sit or lie down in whatever position feels most comfortable.", "If unconscious and not breathing, begin CPR if you are trained."];
    if (s.includes("stroke") || s.includes("brain") || s.includes("facial droop") || s.includes("slurred"))
      return ["Call emergency services immediately — time is critical for stroke.", "Note the exact time symptoms started — doctors need to know this.", "Do NOT give food, water, or medication.", "Keep the person still and calm. Do not let them fall asleep.", "FAST: Face drooping, Arm weakness, Speech difficulty, Time to call."];
    if (s.includes("breath") || s.includes("airway") || s.includes("choking") || s.includes("asthma"))
      return ["Call emergency services immediately.", "Sit upright — do not lie down. Lean slightly forward.", "Use an inhaler if available (asthma) — up to 4 puffs every 4 minutes.", "Loosen any tight clothing. Stay as calm as possible.", "If airway blocked, perform abdominal thrusts (Heimlich maneuver)."];
    if (s.includes("bleed") || s.includes("blood") || s.includes("wound") || s.includes("injur"))
      return ["Call emergency services immediately.", "Apply firm direct pressure to the wound with a clean cloth.", "Do not remove the cloth — add more on top if it soaks through.", "Elevate the injured area above the heart if possible.", "Keep the person warm and still while waiting for help."];
    if (s.includes("seizure") || s.includes("convuls"))
      return ["Call emergency services if the seizure lasts more than 5 minutes.", "Clear the area of anything hard or sharp.", "Do NOT hold the person down or put anything in their mouth.", "Gently turn them onto their side to prevent choking.", "Time the seizure. Stay with them until help arrives."];
    if (s.includes("poison") || s.includes("overdose") || s.includes("toxic"))
      return ["Call emergency services immediately. Do NOT induce vomiting.", "If available, call Poison Control (US: 1-800-222-1222).", "Note what substance was taken and how much if known.", "Keep the person awake and talking if possible.", "Bring the container or medication bottle to the hospital."];
    if (s.includes("allerg") || s.includes("anaphyl"))
      return ["Call emergency services immediately.", "Use an EpiPen (epinephrine auto-injector) if available.", "Lay the person flat with legs elevated unless breathing is difficult.", "A second dose of EpiPen can be given after 5-15 minutes if needed.", "Stay with them — symptoms can return even after improvement."];
    // Generic high-urgency fallback
    return ["Call emergency services immediately and describe your symptoms clearly.", "Stay as calm as possible. Sit or lie down safely.", "Do not eat, drink, or take medication unless instructed by emergency services.", "Unlock your door if possible so help can reach you.", "Keep your phone with you and stay on the line with the dispatcher."];
  };

  const resetChecker = () => {
    setSymptomInput(""); setAiResult(null); setError(null);
    setTriageStage("input"); setFollowUpQs([]); setFollowUpAnswers([]);
    setCurrentQ(0); setCurrentAnswer(""); setWantsSameDay(null);
  };

  const startTriage = async () => {
    if (!symptomInput.trim()) return;
    setLoading(true); setError(null);
    try {
      const res = await fetch("/api/claude", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:400,
          messages:[{role:"user",content:`You are a medical triage assistant. A patient says: "${symptomInput}"\n\nGenerate exactly 3 short follow-up questions to better understand their condition. Keep questions simple and compassionate. Respond in '${appLang}'.\n\nRespond ONLY with valid JSON (no markdown):\n{"questions":["question 1","question 2","question 3"]}`}]
        })
      });
      const data = await res.json();
      const text = data.content.map(b=>b.text||"").join("").replace(/```json|```/g,"").trim();
      const parsed = JSON.parse(text);
      setFollowUpQs(parsed.questions||[]);
      setTriageStage("questions");
    } catch(e) { setError(!navigator.onLine ? "network" : e instanceof SyntaxError ? "parse" : "general"); }
    setLoading(false);
  };

  const submitAnswer = async () => {
    if (!currentAnswer.trim()) return;
    const updatedAnswers = [...followUpAnswers, {q:followUpQs[currentQ], a:currentAnswer}];
    setFollowUpAnswers(updatedAnswers);
    setCurrentAnswer("");
    if (currentQ < followUpQs.length-1) {
      setCurrentQ(q=>q+1);
    } else {
      setLoading(true);
      try {
        const conversation = updatedAnswers.map((qa,i)=>`Q${i+1}: ${qa.q}\nA${i+1}: ${qa.a}`).join("\n");
        const res = await fetch("/api/claude", {
          method:"POST", headers:{"Content-Type":"application/json"},
          body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:1000,
            messages:[{role:"user",content:`You are a medical triage assistant. Patient intake:\n\nInitial complaint: "${symptomInput}"\n\n${conversation}\n\nProvide a thorough assessment. Respond in '${appLang}'.\nRespond ONLY with valid JSON (no markdown):\n{"urgency":"low","summary":"...","specialistType":"...","reason":"...","tip":"...","keywords":["word"]}`}]
          })
        });
        const data = await res.json();
        const text = data.content.map(b=>b.text||"").join("").replace(/```json|```/g,"").trim();
        const parsed = JSON.parse(text);
        setAiResult(parsed);
        const kw = parsed.keywords||[];
        const specialistType = (parsed.specialistType||"").toLowerCase();

        // Pull user prefs for filtering
        const prefLang   = prefs && prefs.language && prefs.language !== "Other" ? prefs.language : null;
        const prefGender = prefs && prefs.doctorGender && prefs.doctorGender !== "No preference" ? prefs.doctorGender : null;
        const userNoInsurance = prefs && prefs.insurance === "No Insurance";

        // Hard filter: no-insurance users only see doctors that accept them
        const pool = userNoInsurance ? DOCTORS.filter(d => d.acceptsNoInsurance) : DOCTORS;

        // Score every doctor in the pool
        const scored = pool.map(d => {
          let score = 0;
          if (d.specialty.toLowerCase().includes(specialistType) || specialistType.includes(d.specialty.toLowerCase())) score += 10;
          const kwMatch = d.keywords.some(k => kw.some(q => k.includes(q) || q.includes(k)));
          if (kwMatch) score += 5;
          if (prefLang && d.languages.includes(prefLang)) score += 4;
          if (prefGender && d.gender === prefGender) score += 3;
          if (d.distance <= maxDistance) score += 2;
          if (d.available) score += 1;
          return { doc: d, score };
        });

        // Sort by score desc, then distance asc
        scored.sort((a, b) => b.score - a.score || a.doc.distance - b.doc.distance);

        // Take top 4 with any relevance, fallback to closest from pool
        const relevant = scored.filter(s => s.score > 0).slice(0, 4).map(s => s.doc);
        setMatchedDocs(relevant.length > 0 ? relevant : pool.slice().sort((a,b) => a.distance - b.distance).slice(0, 3));
        setTriageStage("result");
      } catch(e) { setError(!navigator.onLine ? "network" : e instanceof SyntaxError ? "parse" : "general"); }
      setLoading(false);
    }
  };

  const noInsurance = prefs && prefs.insurance==="No Insurance";

  if (screen==="landing") return <LangContext.Provider value={landingLang}><LandingScreen onGetStarted={()=>setScreen("login")} lang={landingLang} setLang={setLandingLang} /></LangContext.Provider>;
  if (screen==="login") return <LangContext.Provider value={appLang}><LoginScreen onLogin={handleLogin} lang={appLang} /></LangContext.Provider>;
  if (screen==="onboarding") return <LangContext.Provider value={appLang}><OnboardingScreen onComplete={handleOnboardingComplete} lang={appLang} /></LangContext.Provider>;

  const specialties = ["All",...new Set(DOCTORS.map(d=>d.specialty))];
  const urgencyColor = { low:"#3AAD8E", medium:"#F5A623", high:"#E05C5C" };
  const urgencyLabel = { low:"Non-urgent", medium:"See a doctor soon", high:"Seek care today" };

  return (
    <LangContext.Provider value={appLang}>
    <div style={{ fontFamily:"system-ui,sans-serif", minHeight:"100vh", background:"linear-gradient(160deg,#f8fbff,#eef4ff)", color:"#1a1a2e" }}>

      {bookingDoc && <BookingModal doc={bookingDoc} prefs={prefs} onClose={()=>setBookingDoc(null)} onConfirm={()=>{}} />}

      {toast && (
        <div style={{ position:"fixed", top:20, left:"50%", transform:"translateX(-50%)", background:"#3AAD8E", color:"#fff", padding:"10px 24px", borderRadius:30, fontSize:14, fontWeight:700, zIndex:999, boxShadow:"0 4px 20px #3AAD8E55", whiteSpace:"nowrap" }}>
          {toastMsg}
        </div>
      )}

      {/* HEADER */}
      <div style={{ background:"linear-gradient(135deg,#1a1a2e,#16213e)", padding:"14px 20px", display:"flex", alignItems:"center", justifyContent:"space-between", boxShadow:"0 4px 20px #00000033" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:36, height:36, background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>⚕</div>
          <div>
            <div style={{ color:"#fff", fontWeight:800, fontSize:18, fontFamily:"Georgia,serif" }}>MediGuide</div>
            <div style={{ color:"#4A90D9", fontSize:10, letterSpacing:1.5, fontWeight:600 }}>{t("tagline")}</div>
          </div>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:4 }}>
          {[["home","🩺",t("home")],["browse","👨‍⚕️",t("browse")],...(noInsurance?[["noinsurance","🤝",t("noIns")]]:[]),["profile","👤",t("profile")]].map(item=>(
            <button key={item[0]} onClick={()=>setTab(item[0])}
              style={{ background:tab===item[0]?"#ffffff18":"transparent", color:tab===item[0]?"#fff":"#aaa", border:"none", borderRadius:8, padding:"6px 10px", fontSize:11, cursor:"pointer", fontWeight:tab===item[0]?700:400 }}>
              {item[1]} {item[2]}
            </button>
          ))}
          <div onClick={()=>setTab("profile")} style={{ width:28, height:28, borderRadius:"50%", background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:11, fontWeight:700, marginLeft:4, cursor:"pointer" }}>
            {user?user.name.charAt(0).toUpperCase():"?"}
          </div>
        </div>
      </div>

      <div style={{ maxWidth:680, margin:"0 auto", padding:"24px 16px" }}>

        {/* HOME TAB */}
        {tab==="home" && (
          <div>
            <div style={{ textAlign:"center", marginBottom:24 }}>
              <div style={{ fontSize:48, marginBottom:10 }}>🏥</div>
              <h1 style={{ fontSize:26, fontWeight:800, fontFamily:"Georgia,serif", margin:0, lineHeight:1.2 }}>{t("findRightDoctor")}<br /><span style={{ color:"#4A90D9" }}>{t("rightNearYou")}</span></h1>
              <p style={{ color:"#666", marginTop:8, fontSize:14 }}>{t("describeSymptoms")}</p>
            </div>

            {noInsurance && (
              <div onClick={()=>setTab("noinsurance")} style={{ background:"linear-gradient(135deg,#3AAD8E,#4A90D9)", borderRadius:16, padding:"16px 20px", marginBottom:20, cursor:"pointer", display:"flex", gap:14, alignItems:"center" }}>
                <div style={{ fontSize:32 }}>🤝</div>
                <div style={{ flex:1 }}>
                  <div style={{ color:"#fff", fontWeight:800, fontSize:15, marginBottom:3 }}>{t("noInsuranceBanner")}</div>
                  <div style={{ color:"#e0fff8", fontSize:13 }}>{t("noInsuranceSub")}</div>
                </div>
              </div>
            )}

            {prefs && (prefs.country||prefs.city||prefs.insurance) && (
              <div style={{ background:"linear-gradient(135deg,#f0f7ff,#e8eeff)", border:"1.5px solid #c0d8ff", borderRadius:14, padding:"12px 16px", marginBottom:20, display:"flex", gap:10, alignItems:"center" }}>
                <span style={{ fontSize:18 }}>⚙️</span>
                <div>
                  <div style={{ fontSize:12, fontWeight:700, color:"#4A90D9", marginBottom:3 }}>{t("yourPreferences")}</div>
                  <div style={{ fontSize:12, color:"#555" }}>
                    {[prefs.country&&"🌍 "+prefs.country, prefs.city&&"🏙️ "+prefs.city, prefs.locationCode&&"📍 "+prefs.locationCode, prefs.insurance&&"🛡️ "+(prefs.insurance==="Other"?prefs.otherInsurance||"Other":prefs.insurance), prefs.language&&"🌐 "+(prefs.language==="Other"?prefs.otherLanguage||"Other":prefs.language)].filter(Boolean).join("  ·  ")}
                  </div>
                </div>
              </div>
            )}

            {/* SYMPTOM CHECKER */}
            <div style={{ background:"#fff", borderRadius:20, padding:24, boxShadow:"0 8px 32px #4A90D910", border:"1.5px solid #e8eeff", marginBottom:20 }}>

              {triageStage==="input" && (
                <>
                  <label style={{ fontWeight:700, fontSize:14, color:"#1a1a2e", display:"block", marginBottom:10 }}>{t("whatsBotheringYou")}</label>
                  <textarea value={symptomInput} onChange={e=>setSymptomInput(e.target.value)} placeholder={t("symptomPlaceholder")}
                    style={{ width:"100%", minHeight:100, border:"1.5px solid #e0e7ff", borderRadius:12, padding:"12px 14px", fontSize:14, resize:"vertical", outline:"none", fontFamily:"inherit", color:"#333", boxSizing:"border-box", lineHeight:1.6 }} />
                  <button onClick={startTriage} disabled={!symptomInput.trim()}
                    style={{ width:"100%", marginTop:12, background:symptomInput.trim()?"linear-gradient(135deg,#4A90D9,#7B5EA7)":"#ccc", color:"#fff", border:"none", borderRadius:12, padding:14, fontSize:15, fontWeight:700, cursor:symptomInput.trim()?"pointer":"not-allowed" }}>
                    {t("startAssessment")}
                  </button>
                </>
              )}

              {triageStage==="questions" && (
                <>
                  <div style={{ marginBottom:20 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, color:"#888", marginBottom:6 }}>
                      <span style={{ fontWeight:700, color:"#4A90D9" }}>{t("question")} {currentQ+1} of {followUpQs.length}</span>
                      <span style={{ cursor:"pointer", color:"#aaa" }} onClick={resetChecker}>{t("startOver")}</span>
                    </div>
                    <div style={{ height:6, background:"#e0e7ff", borderRadius:3 }}>
                      <div style={{ height:"100%", width:((currentQ/followUpQs.length)*100)+"%", background:"linear-gradient(90deg,#4A90D9,#7B5EA7)", borderRadius:3, transition:"width 0.4s" }} />
                    </div>
                  </div>
                  <div style={{ background:"#f0f7ff", border:"1.5px solid #c0d8ff", borderRadius:12, padding:"10px 14px", marginBottom:16, fontSize:13, color:"#4A90D9" }}>
                    🩺 <strong>{t("youSaid")}</strong> {symptomInput}
                  </div>
                  {followUpAnswers.map((qa,i)=>(
                    <div key={i} style={{ marginBottom:12 }}>
                      <div style={{ fontSize:13, color:"#888", marginBottom:4 }}>💬 {qa.q}</div>
                      <div style={{ background:"#f8f8f8", borderRadius:10, padding:"8px 12px", fontSize:13, color:"#333", fontWeight:600 }}>✓ {qa.a}</div>
                    </div>
                  ))}
                  <div style={{ background:"linear-gradient(135deg,#1a1a2e,#16213e)", borderRadius:14, padding:"16px 18px", marginBottom:14 }}>
                    <div style={{ fontSize:11, color:"#4A90D9", fontWeight:700, letterSpacing:1, marginBottom:8 }}>{t("followUpQuestion")}</div>
                    <div style={{ fontSize:15, fontWeight:600, color:"#fff", lineHeight:1.5 }}>{followUpQs[currentQ]}</div>
                  </div>
                  <textarea value={currentAnswer} onChange={e=>setCurrentAnswer(e.target.value)} placeholder={t("typeAnswerHere")}
                    onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&currentAnswer.trim()&&(e.preventDefault(),submitAnswer())}
                    style={{ width:"100%", minHeight:80, border:"1.5px solid #e0e7ff", borderRadius:12, padding:"12px 14px", fontSize:14, resize:"none", outline:"none", fontFamily:"inherit", color:"#333", boxSizing:"border-box", lineHeight:1.5 }} />
                  <button onClick={submitAnswer} disabled={!currentAnswer.trim()}
                    style={{ width:"100%", marginTop:10, background:currentAnswer.trim()?"linear-gradient(135deg,#4A90D9,#7B5EA7)":"#ccc", color:"#fff", border:"none", borderRadius:12, padding:14, fontSize:15, fontWeight:700, cursor:currentAnswer.trim()?"pointer":"not-allowed" }}>
                    {currentQ<followUpQs.length-1?t("nextQuestion"):t("getAssessment")}
                  </button>
                </>
              )}

              {triageStage==="result" && aiResult && (
                <div>
                  {/* ── HIGH URGENCY — EMERGENCY ── */}
                  {aiResult.urgency === "high" && (() => {
                    const emergencyNum = getEmergencyNumber();
                    const advice = getEmergencyAdvice(aiResult.summary, aiResult.specialistType);
                    return (
                      <div>
                        {/* Pulsing emergency header */}
                        <div style={{ background:"linear-gradient(135deg,#C0392B,#E05C5C)", borderRadius:16, padding:"18px 20px", marginBottom:16, textAlign:"center", boxShadow:"0 4px 24px #E05C5C55" }}>
                          <div style={{ fontSize:36, marginBottom:8 }}>🚨</div>
                          <div style={{ color:"#fff", fontWeight:800, fontSize:20, fontFamily:"Georgia,serif", marginBottom:4 }}>{t("medicalEmergency")}</div>
                          <div style={{ color:"#ffdddd", fontSize:13, marginBottom:16, lineHeight:1.5 }}>{t("emergencyDesc")}</div>
                          <a href={`tel:${emergencyNum.replace(/[^0-9]/g,"")}`}
                            style={{ display:"block", background:"#fff", color:"#C0392B", borderRadius:14, padding:"16px 24px", fontSize:22, fontWeight:800, textDecoration:"none", marginBottom:8, boxShadow:"0 4px 16px #00000033", letterSpacing:1 }}>
                            {t("callEmergency")} {emergencyNum}
                          </a>
                          <div style={{ color:"#ffdddd", fontSize:11, fontWeight:600 }}>
                            {prefs?.country ? `${t("emergencyFor")} ${prefs.country}` : t("emergencyIntl")}
                          </div>
                        </div>
                        <div style={{ background:"#fff3cd", border:"2px solid #F5A623", borderRadius:12, padding:"10px 14px", marginBottom:16, display:"flex", gap:10, alignItems:"center" }}>
                          <span style={{ fontSize:20 }}>⚠️</span>
                          <div>
                            <div style={{ fontWeight:800, fontSize:13, color:"#7A5000" }}>{t("highlyRecommended")}</div>
                            <div style={{ fontSize:12, color:"#8a6000", marginTop:2 }}>{t("highlyRecDesc")}</div>
                          </div>
                        </div>
                        <div style={{ background:"#fff", border:"1.5px solid #e0e7ff", borderRadius:14, padding:"14px 16px", marginBottom:16 }}>
                          <div style={{ fontSize:12, fontWeight:700, color:"#E05C5C", letterSpacing:1, marginBottom:10 }}>{t("whileYouWait")}</div>
                          {advice.map((step, i) => (
                            <div key={i} style={{ display:"flex", gap:10, marginBottom:8, alignItems:"flex-start" }}>
                              <div style={{ width:22, height:22, borderRadius:"50%", background:"linear-gradient(135deg,#E05C5C,#C0392B)", color:"#fff", fontSize:11, fontWeight:800, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>{i+1}</div>
                              <div style={{ fontSize:13, color:"#333", lineHeight:1.55 }}>{step}</div>
                            </div>
                          ))}
                        </div>
                        <div style={{ background:"#fff8f8", border:"1px solid #ffd0d0", borderRadius:12, padding:"12px 14px", marginBottom:12 }}>
                          <div style={{ fontSize:11, fontWeight:700, color:"#E05C5C", letterSpacing:1, marginBottom:4 }}>{t("whatAIDetected")}</div>
                          <p style={{ margin:0, fontSize:13, lineHeight:1.6, color:"#555" }}>{aiResult.summary}</p>
                        </div>
                        <button onClick={resetChecker} style={{ width:"100%", background:"#f0f7ff", border:"1.5px solid #c0d8ff", borderRadius:12, padding:12, fontSize:13, fontWeight:600, cursor:"pointer", color:"#4A90D9" }}>
                          {t("checkDifferent")}
                        </button>
                      </div>
                    );
                  })()}

                  {aiResult.urgency === "medium" && (
                    <div>
                      <div style={{ background:"linear-gradient(135deg,#E8A93A,#F5C96A)", borderRadius:16, padding:"16px 20px", marginBottom:16 }}>
                        <div style={{ display:"flex", gap:12, alignItems:"center", marginBottom:8 }}>
                          <div style={{ fontSize:32 }}>⚡</div>
                          <div>
                            <div style={{ color:"#fff", fontWeight:800, fontSize:17, fontFamily:"Georgia,serif" }}>{t("seeDocSoon")}</div>
                            <div style={{ color:"#fff8e8", fontSize:12, marginTop:2 }}>{t("seeDocSoonSub")}</div>
                          </div>
                        </div>
                      </div>
                      <p style={{ margin:"0 0 14px", fontSize:14, lineHeight:1.6, color:"#444" }}>{aiResult.summary}</p>
                      <div style={{ background:"linear-gradient(135deg,#1a1a2e,#16213e)", borderRadius:12, padding:"12px 14px", marginBottom:12 }}>
                        <div style={{ fontSize:11, color:"#4A90D9", fontWeight:700, marginBottom:4 }}>{t("specialist")}</div>
                        <div style={{ fontSize:16, fontWeight:700, color:"#fff" }}><MedTerm>{aiResult.specialistType}</MedTerm></div>
                        <div style={{ fontSize:13, color:"#aaa", marginTop:4 }}>{aiResult.reason}</div>
                      </div>
                      {aiResult.tip && <div style={{ background:"#f0fff8", border:"1.5px solid #3AAD8E", borderRadius:10, padding:"10px 12px", fontSize:13, color:"#1a6b4a", marginBottom:14 }}>💡 <strong>{t("tip")}:</strong> {aiResult.tip}</div>}
                      {wantsSameDay === null && (
                        <div style={{ background:"#f0f7ff", border:"2px solid #4A90D9", borderRadius:14, padding:"16px", marginBottom:14 }}>
                          <div style={{ fontWeight:700, fontSize:14, color:"#1a1a2e", marginBottom:6 }}>{t("sameDayQuestion")}</div>
                          <div style={{ fontSize:13, color:"#666", marginBottom:14, lineHeight:1.5 }}>{t("sameDayDesc")}</div>
                          <div style={{ display:"flex", gap:10 }}>
                            <button onClick={()=>setWantsSameDay(true)} style={{ flex:1, background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", color:"#fff", border:"none", borderRadius:10, padding:"11px 0", fontSize:14, fontWeight:700, cursor:"pointer" }}>{t("yesToday")}</button>
                            <button onClick={()=>setWantsSameDay(false)} style={{ flex:1, background:"#fff", color:"#666", border:"1.5px solid #e0e7ff", borderRadius:10, padding:"11px 0", fontSize:14, fontWeight:600, cursor:"pointer" }}>{t("notUrgent")}</button>
                          </div>
                        </div>
                      )}
                      {wantsSameDay === true && (
                        <div style={{ background:"#f0fff8", border:"1.5px solid #3AAD8E", borderRadius:12, padding:"12px 14px", marginBottom:14, fontSize:13, color:"#1a6b4a" }}>
                          ✅ {t("sameDayConfirm")}
                        </div>
                      )}
                      {wantsSameDay === false && (
                        <div style={{ background:"#f8f8f8", border:"1.5px solid #e0e7ff", borderRadius:12, padding:"12px 14px", marginBottom:14, fontSize:13, color:"#666" }}>
                          📆 {t("notUrgentConfirm")}
                        </div>
                      )}
                      <button onClick={resetChecker} style={{ width:"100%", background:"#f0f7ff", border:"1.5px solid #c0d8ff", borderRadius:12, padding:12, fontSize:13, fontWeight:600, cursor:"pointer", color:"#4A90D9" }}>
                        {t("checkDifferent")}
                      </button>
                    </div>
                  )}

                  {aiResult.urgency === "low" && (
                    <div>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                        <div>
                          <div style={{ fontSize:12, fontWeight:700, color:"#4A90D9", letterSpacing:1 }}>{t("aiAssessment")}</div>
                          <div style={{ fontSize:10, color:"#aaa", marginTop:2 }}>💡 {t("tapBlue")} <span style={{ color:"#4A90D9", borderBottom:"1px dashed #4A90D9" }}>{t("tapBlueTerm")}</span> {t("tapBlueFor")}</div>
                        </div>
                        <div style={{ background:"#3AAD8E", color:"#fff", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20 }}>Non-urgent</div>
                      </div>
                      <p style={{ margin:"0 0 14px", fontSize:14, lineHeight:1.6, color:"#444" }}>{aiResult.summary}</p>
                      <div style={{ background:"linear-gradient(135deg,#1a1a2e,#16213e)", borderRadius:12, padding:"12px 14px", marginBottom:12 }}>
                        <div style={{ fontSize:11, color:"#4A90D9", fontWeight:700, marginBottom:4 }}>{t("specialist")}</div>
                        <div style={{ fontSize:16, fontWeight:700, color:"#fff" }}><MedTerm>{aiResult.specialistType}</MedTerm></div>
                        <div style={{ fontSize:13, color:"#aaa", marginTop:4 }}>{aiResult.reason}</div>
                      </div>
                      {aiResult.tip && <div style={{ background:"#f0fff8", border:"1.5px solid #3AAD8E", borderRadius:10, padding:"10px 12px", fontSize:13, color:"#1a6b4a", marginBottom:12 }}>💡 <strong>{t("tip")}:</strong> {aiResult.tip}</div>}
                      <button onClick={resetChecker} style={{ width:"100%", background:"#f0f7ff", border:"1.5px solid #c0d8ff", borderRadius:12, padding:12, fontSize:13, fontWeight:600, cursor:"pointer", color:"#4A90D9" }}>
                        {t("checkDifferent")}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {loading && (
              <div style={{ textAlign:"center", padding:"30px 20px", background:"#fff", borderRadius:16, border:"1.5px solid #e8e8e8", marginBottom:20 }}>
                <div style={{ fontSize:36, marginBottom:10 }}>{triageStage==="input"?"💭":"🔍"}</div>
                <div style={{ fontSize:15, fontWeight:600 }}>{triageStage==="input"?t("preparingQuestions"):t("analyzingAnswers")}</div>
                <div style={{ fontSize:13, color:"#888", marginTop:4 }}>This takes just a moment</div>
              </div>
            )}
            {error && (
              <div style={{ background:"#fff0f0", border:"1.5px solid #E05C5C", borderRadius:16, padding:20, marginBottom:20 }}>
                <div style={{ display:"flex", gap:12, alignItems:"flex-start", marginBottom:14 }}>
                  <div style={{ fontSize:28, flexShrink:0 }}>
                    {error==="network" ? "📡" : error==="parse" ? "🤖" : "⚠️"}
                  </div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:15, color:"#c0392b", marginBottom:4 }}>
                      {error==="network" ? "No internet connection" : error==="parse" ? "AI response error" : "Something went wrong"}
                    </div>
                    <div style={{ fontSize:13, color:"#666", lineHeight:1.5 }}>
                      {error==="network" && "Please check your connection and try again. Your symptoms have not been lost."}
                      {error==="parse" && "The AI returned an unexpected response. This is rare — please try again."}
                      {error==="general" && "An unexpected error occurred. This may be a temporary issue — please try again in a moment."}
                    </div>
                  </div>
                </div>
                <div style={{ display:"flex", gap:8 }}>
                  <button onClick={triageStage==="questions" ? submitAnswer : startTriage}
                    style={{ flex:1, background:"#E05C5C", color:"#fff", border:"none", borderRadius:10, padding:"10px 16px", fontSize:13, fontWeight:700, cursor:"pointer" }}>
                    🔄 Try Again
                  </button>
                  <button onClick={resetChecker}
                    style={{ background:"#fff", color:"#E05C5C", border:"1.5px solid #E05C5C", borderRadius:10, padding:"10px 16px", fontSize:13, fontWeight:600, cursor:"pointer" }}>
                    Start Over
                  </button>
                </div>
              </div>
            )}

            {triageStage==="input" && (
              <>
                <div style={{ fontSize:13, fontWeight:700, color:"#888", letterSpacing:1, marginBottom:12 }}>{t("commonConditions")}</div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                  {[["🤒","Fever & Flu","I have a high fever, body aches and chills"],["💔","Chest / Heart","I feel chest tightness and shortness of breath"],["🧠","Headache","I have severe recurring migraines and dizziness"],["🤢","Stomach Issues","I have nausea, stomach pain and diarrhea"]].map(item=>(
                    <button key={item[1]} onClick={()=>setSymptomInput(item[2])} style={{ background:"#fff", border:"1.5px solid #e8e8e8", borderRadius:12, padding:"14px 12px", textAlign:"left", cursor:"pointer", display:"flex", gap:10, alignItems:"center" }}>
                      <span style={{ fontSize:22 }}>{item[0]}</span><span style={{ fontSize:13, fontWeight:600, color:"#333" }}>{item[1]}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {triageStage==="result" && matchedDocs.length>0 && aiResult?.urgency !== "high" && (
              <div style={{ marginTop:20 }}>
                <div style={{ fontSize:13, fontWeight:700, color:"#888", letterSpacing:1, marginBottom:8 }}>
                  {wantsSameDay ? t("sameDayDoctors") : t("recommendedDoctors")}
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:12 }}>
                  {aiResult?.specialistType && <span style={{ background:"#1a1a2e", color:"#4A90D9", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20 }}>🩺 {aiResult.specialistType}</span>}
                  {wantsSameDay && <span style={{ background:"#3AAD8E", color:"#fff", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20 }}>{t("sameDayOnly")}</span>}
                  {prefs?.doctorGender && prefs.doctorGender !== "No preference" && <span style={{ background:"#4A90D9", color:"#fff", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20 }}>{prefs.doctorGender === "Female" ? "👩‍⚕️" : "👨‍⚕️"} {prefs.doctorGender}</span>}
                  {prefs?.language && prefs.language !== "Other" && <span style={{ background:"#7B5EA7", color:"#fff", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20 }}>🌐 {prefs.language}</span>}
                  <span style={{ background:"#f0f0f0", color:"#666", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20 }}>📍 {t("withinDist")} {maxDistance} mi</span>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  {(wantsSameDay
                    ? [...matchedDocs].sort((a,b) => (b.available?1:0)-(a.available?1:0))
                    : matchedDocs
                  ).map((doc,i)=><DoctorCard key={doc.id} doc={doc} highlighted={i===0} onBook={setBookingDoc} userHasNoInsurance={noInsurance} onNoInsurance={()=>setTab("noinsurance")}/>)}
                </div>
                <button onClick={()=>{
                  setBrowseFromSymptoms({ specialistType: aiResult.specialistType, summary: aiResult.summary, sameDay: wantsSameDay });
                  setBrowseSearch(aiResult.specialistType || "");
                  setFilterSpec("All");
                  setTab("browse");
                }} style={{ width:"100%", marginTop:16, background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", border:"none", borderRadius:12, padding:14, fontSize:14, fontWeight:700, cursor:"pointer", color:"#fff", boxShadow:"0 4px 16px #4A90D933" }}>
                  {wantsSameDay ? t("findAvailToday") : `${t("findDocNearMe")} ${aiResult.specialistType || ""} ${t("nearMe")}`}
                </button>
              </div>
            )}
          </div>
        )}

        {/* BROWSE TAB */}
        {tab==="browse" && (
          <div>
            <h2 style={{ fontFamily:"Georgia,serif", fontSize:22, fontWeight:800, margin:"0 0 14px" }}>{t("doctorsNearYou")}</h2>

            {/* FROM SYMPTOMS BANNER */}
            {browseFromSymptoms && (
              <div style={{ background:"linear-gradient(135deg,#1a1a2e,#16213e)", borderRadius:14, padding:"14px 16px", marginBottom:14, display:"flex", gap:12, alignItems:"center" }}>
                <div style={{ fontSize:28, flexShrink:0 }}>{browseFromSymptoms.sameDay ? "📅" : "🩺"}</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:12, fontWeight:700, color:"#4A90D9", marginBottom:3 }}>
                    {browseFromSymptoms.sameDay ? t("sameDayFromCheck") : t("fromSymptomCheck")}
                  </div>
                  <div style={{ fontSize:13, color:"#fff", fontWeight:600 }}>
                    {browseFromSymptoms.sameDay ? t("showingAvailFor") : t("showingFor")}
                    <span style={{ color:"#4A90D9" }}> {browseFromSymptoms.specialistType}</span>
                  </div>
                  <div style={{ fontSize:12, color:"#aaa", marginTop:2, lineHeight:1.4 }}>{browseFromSymptoms.summary?.slice(0,100)}{browseFromSymptoms.summary?.length > 100 ? "..." : ""}</div>
                </div>
                <button onClick={()=>{ setBrowseFromSymptoms(null); setBrowseSearch(""); }}
                  style={{ background:"#ffffff15", border:"none", borderRadius:8, padding:"6px 10px", fontSize:12, color:"#aaa", cursor:"pointer", flexShrink:0 }}>
                  {t("clearFilter")}
                </button>
              </div>
            )}

            {/* SEARCH BAR */}
            <div style={{ background:"#fff", border:"1.5px solid #e0e7ff", borderRadius:14, padding:"10px 14px", marginBottom:14, display:"flex", alignItems:"center", gap:10 }}>
              <span style={{ fontSize:18, color:"#4A90D9" }}>🔍</span>
              <input value={browseSearch} onChange={e => setBrowseSearch(e.target.value)}
                placeholder={t("searchPlaceholder")}
                style={{ flex:1, border:"none", outline:"none", fontSize:14, color:"#1a1a2e", background:"transparent" }} />
              {browseSearch && (
                <button onClick={()=>setBrowseSearch("")} style={{ background:"none", border:"none", color:"#aaa", cursor:"pointer", fontSize:16, padding:0 }}>✕</button>
              )}
            </div>

            <div style={{ background:"#fff", border:"1.5px solid #e0e7ff", borderRadius:14, padding:"14px 16px", marginBottom:14, display:"flex", alignItems:"center", gap:12 }}>
              <span style={{ fontSize:20 }}>📍</span>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:12, fontWeight:700, color:"#4A90D9", marginBottom:6 }}>
                  DISTANCE — within <strong style={{ color:"#1a1a2e" }}>{maxDistance} miles</strong>
                </div>
                <input type="range" min={1} max={50} value={maxDistance} onChange={e=>setMaxDistance(Number(e.target.value))} style={{ width:"100%", accentColor:"#4A90D9", cursor:"pointer" }} />
                <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:"#aaa", marginTop:3 }}>
                  <span>1 mi</span><span>10 mi</span><span>25 mi</span><span>50 mi</span>
                </div>
              </div>
              <div style={{ background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", color:"#fff", borderRadius:10, padding:"8px 14px", fontSize:14, fontWeight:800, minWidth:52, textAlign:"center" }}>
                {maxDistance}<span style={{ fontSize:10, fontWeight:600 }}> mi</span>
              </div>
            </div>

            {noInsurance && (
              <div style={{ background:"linear-gradient(135deg,#f0fff8,#e8fff4)", border:"1.5px solid #3AAD8E", borderRadius:12, padding:"10px 14px", marginBottom:14, display:"flex", gap:10, alignItems:"center" }}>
                <span style={{ fontSize:20 }}>💚</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:12, fontWeight:700, color:"#1a6b4a", marginBottom:2 }}>{t("noInsuranceOnly")}</div>
                  <div style={{ fontSize:12, color:"#3AAD8E" }}>{t("noInsuranceOnlySub")}</div>
                </div>
              </div>
            )}
              <div style={{ background:"linear-gradient(135deg,#f0f7ff,#e8eeff)", border:"1.5px solid #c0d8ff", borderRadius:12, padding:"10px 14px", marginBottom:14, display:"flex", flexWrap:"wrap", gap:8, alignItems:"center" }}>
                <span style={{ fontSize:12, fontWeight:700, color:"#4A90D9" }}>{t("filteredByPrefs")}</span>
                {browseFromSymptoms?.sameDay && <span style={{ background:"#3AAD8E", color:"#fff", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20 }}>{t("sameDayPriority")}</span>}
                {prefs.doctorGender&&prefs.doctorGender!=="No preference"&&<span style={{ background:"#4A90D9", color:"#fff", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20 }}>{prefs.doctorGender==="Female"?"👩‍⚕️":"👨‍⚕️"} {prefs.doctorGender} doctors</span>}
                {prefs.language&&prefs.language!=="Other"&&<span style={{ background:"#7B5EA7", color:"#fff", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20 }}>🌐 Speaks {prefs.language}</span>}
                <button onClick={()=>setIgnorePrefs(p=>!p)} style={{ marginLeft:"auto", background:"none", border:"1px solid #c0d8ff", borderRadius:20, padding:"3px 10px", fontSize:11, color:"#4A90D9", cursor:"pointer", fontWeight:600 }}>
                  {ignorePrefs?"↩ Restore filters":"✕ Show all doctors"}
                </button>
              </div>
            )}

            <div style={{ display:"flex", gap:8, overflowX:"auto", paddingBottom:4, marginBottom:14 }}>
              {specialties.map(s=>(
                <button key={s} onClick={()=>setFilterSpec(s)} style={{ flexShrink:0, background:filterSpec===s?"#4A90D9":"#fff", color:filterSpec===s?"#fff":"#666", border:"1.5px solid "+(filterSpec===s?"#4A90D9":"#e8e8e8"), borderRadius:20, padding:"6px 14px", fontSize:12, fontWeight:600, cursor:"pointer" }}>{s}</button>
              ))}
            </div>

            {(()=>{
              const prefLang = prefs&&prefs.language&&prefs.language!=="Other"?prefs.language:null;
              const prefGender = prefs&&prefs.doctorGender&&prefs.doctorGender!=="No preference"?prefs.doctorGender:null;
              const searchLower = browseSearch.trim().toLowerCase();
              let filtered = DOCTORS.filter(d=>filterSpec==="All"||d.specialty===filterSpec);
              filtered = filtered.filter(d=>d.distance<=maxDistance);
              // If user has no insurance, only show doctors that accept uninsured patients
              if (noInsurance) filtered = filtered.filter(d => d.acceptsNoInsurance);
              if (searchLower) {
                filtered = filtered.filter(d =>
                  d.name.toLowerCase().includes(searchLower) ||
                  d.specialty.toLowerCase().includes(searchLower) ||
                  (d.keywords||[]).some(k=>k.toLowerCase().includes(searchLower)) ||
                  searchLower.split(" ").some(word => d.specialty.toLowerCase().includes(word) || (d.keywords||[]).some(k=>k.toLowerCase().includes(word)))
                );
              }
              if (!ignorePrefs) {
                if (prefGender) filtered=filtered.filter(d=>d.gender===prefGender);
                if (prefLang) filtered=filtered.filter(d=>d.languages.includes(prefLang));
              }
              filtered=[...filtered].sort((a,b)=>{
                // Same-day priority: if coming from symptom checker with sameDay=true, available doctors first
                if (browseFromSymptoms?.sameDay) {
                  if (a.available && !b.available) return -1;
                  if (!a.available && b.available) return 1;
                }
                if (!ignorePrefs&&prefLang){const al=a.languages.includes(prefLang);const bl=b.languages.includes(prefLang);if(al&&!bl)return -1;if(!al&&bl)return 1;}
                if (a.available&&!b.available) return -1;
                if (!a.available&&b.available) return 1;
                return a.distance-b.distance;
              });
              if (filtered.length===0) return (
                <div style={{ textAlign:"center", padding:"40px 20px", background:"#fff", borderRadius:16, border:"1.5px solid #e8e8e8" }}>
                  <div style={{ fontSize:40, marginBottom:12 }}>🔍</div>
                  <div style={{ fontWeight:700, fontSize:15, marginBottom:8 }}>
                    {searchLower ? `${t("noDocSearch")} "${browseSearch}"` : t("noDocMatch")}
                  </div>
                  <div style={{ fontSize:13, color:"#888", marginBottom:16 }}>
                    {searchLower ? t("noDocSearchSub") : t("noDocMatchSub")}
                  </div>
                  <div style={{ display:"flex", gap:8, justifyContent:"center", flexWrap:"wrap" }}>
                    {searchLower && <button onClick={()=>setBrowseSearch("")} style={{ background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", color:"#fff", border:"none", borderRadius:10, padding:"10px 20px", fontSize:13, fontWeight:700, cursor:"pointer" }}>{t("clearFilter")}</button>}
                    <button onClick={()=>setIgnorePrefs(true)} style={{ background:searchLower?"#f0f7ff":"linear-gradient(135deg,#4A90D9,#7B5EA7)", color:searchLower?"#4A90D9":"#fff", border:searchLower?"1.5px solid #c0d8ff":"none", borderRadius:10, padding:"10px 20px", fontSize:13, fontWeight:700, cursor:"pointer" }}>{t("showAllDoctors")}</button>
                  </div>
                </div>
              );
              return (
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  {filtered.map((doc,i)=><DoctorCard key={doc.id} doc={doc} highlighted={i===0&&!ignorePrefs} onBook={setBookingDoc} userHasNoInsurance={noInsurance} onNoInsurance={()=>setTab("noinsurance")}/>)}
                  <div style={{ fontSize:12, color:"#aaa", textAlign:"center", padding:"8px 0" }}>
                    {t("showingCount")} {filtered.length} {filtered.length!==1?t("doctorsCount"):t("doctorCount")}{searchLower ? ` matching "${browseSearch}"` : ""} {t("withinDist")} {maxDistance} {t("miles")}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {tab==="noinsurance" && <NoInsurancePathway />}

        {tab==="profile" && (
          <ProfilePage user={user} prefs={prefs}
            onSave={handleSaveProfile}
            onSignOut={()=>{setScreen("landing");setUser(null);setPrefs(null);setTab("home");resetChecker();}} />
        )}

      </div>
      <div style={{ textAlign:"center", padding:"20px 16px 80px", fontSize:11, color:"#bbb" }}>
        {t("disclaimer")}
      </div>

      {/* ── AEGIS AI FLOATING BUTTON ── */}
      {!aegisOpen && (
        <button onClick={()=>{ setAegisOpen(true); setAegisPos({x:null,y:null}); setAegisMinimized(false); }}
          style={{ position:"fixed", bottom:24, right:24, width:56, height:56, borderRadius:"50%", background:"linear-gradient(135deg,#1a1a2e,#16213e)", border:"2px solid #4A90D9", boxShadow:"0 4px 24px #4A90D944", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", zIndex:990 }}>
          {/* Chat bubble SVG */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#4A90D9"/>
            <circle cx="8" cy="10" r="1" fill="#fff"/>
            <circle cx="12" cy="10" r="1" fill="#fff"/>
            <circle cx="16" cy="10" r="1" fill="#fff"/>
          </svg>
        </button>
      )}

      {/* ── AEGIS AI PANEL ── */}
      {aegisOpen && (
        <div
          id="aegis-panel"
          onMouseMove={aegisDragMove} onMouseUp={aegisDragEnd}
          onTouchMove={aegisDragMove} onTouchEnd={aegisDragEnd}
          style={{
            position:"fixed",
            left: aegisPos.x !== null ? aegisPos.x : "50%",
            top:  aegisPos.y !== null ? aegisPos.y : "50%",
            transform: aegisPos.x !== null ? "none" : "translate(-50%,-50%)",
            width: aegisExpanded ? Math.min(620, window.innerWidth - 32) : 340, zIndex:995,
            borderRadius:20, overflow:"hidden",
            boxShadow:"0 12px 48px #00000055",
            background:"#1a1a2e",
            border:"1.5px solid #4A90D944",
            display:"flex", flexDirection:"column",
            maxHeight: aegisMinimized ? "auto" : aegisExpanded ? Math.min(780, window.innerHeight - 48) : 520,
            userSelect: aegisDragging ? "none" : "auto"
          }}>

          {/* HEADER — drag handle */}
          <div
            onMouseDown={aegisDragStart} onTouchStart={aegisDragStart}
            style={{ background:"linear-gradient(135deg,#0f3460,#16213e)", padding:"12px 16px", cursor:"grab", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid #ffffff11", flexShrink:0 }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:32, height:32, borderRadius:10, background:"linear-gradient(135deg,#4A90D9,#7B5EA7)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#fff"/>
                </svg>
              </div>
              <div>
                <div style={{ color:"#fff", fontWeight:800, fontSize:14, fontFamily:"Georgia,serif" }}>{t("aegisTitle")}</div>
                <div style={{ color:"#4A90D9", fontSize:10, letterSpacing:1, fontWeight:600 }}>{t("aegisSubtitle")}</div>
              </div>
            </div>
            <div style={{ display:"flex", gap:6 }}>
              <button onClick={()=>{ setAegisExpanded(e=>!e); setAegisMinimized(false); }}
                style={{ background:"#ffffff15", border:"none", borderRadius:6, width:26, height:26, cursor:"pointer", color:"#aaa", fontSize:12, display:"flex", alignItems:"center", justifyContent:"center" }}>
                {aegisExpanded ? "⊙" : "⊕"}
              </button>
              <button onClick={()=>setAegisMinimized(m=>!m)}
                style={{ background:"#ffffff15", border:"none", borderRadius:6, width:26, height:26, cursor:"pointer", color:"#aaa", fontSize:14, display:"flex", alignItems:"center", justifyContent:"center" }}>
                {aegisMinimized ? "▲" : "▼"}
              </button>
              <button onClick={()=>setAegisOpen(false)}
                style={{ background:"#ffffff15", border:"none", borderRadius:6, width:26, height:26, cursor:"pointer", color:"#aaa", fontSize:14, display:"flex", alignItems:"center", justifyContent:"center" }}>
                ✕
              </button>
            </div>
          </div>

          {!aegisMinimized && (
            <>
              {/* MESSAGES */}
              <div style={{ flex:1, overflowY:"auto", padding:"14px 14px 8px", display:"flex", flexDirection:"column", gap:10, minHeight:0 }}>

                {/* SUGGESTED STARTERS — only show if just the welcome message */}
                {aegisMessages.length === 1 && (
                  <div style={{ display:"flex", flexDirection:"column", gap:6, marginBottom:4 }}>
                    {[t("aegisStarter1"), t("aegisStarter2"), t("aegisStarter3"), t("aegisStarter4")].map(q => (
                      <button key={q} onClick={()=>aegisSend(q)}
                        style={{ background:"#ffffff0d", border:"1px solid #ffffff1a", borderRadius:10, padding:"8px 12px", fontSize:12, color:"#c0d8ff", cursor:"pointer", textAlign:"left", fontWeight:500 }}>
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                {aegisMessages.map((msg, i) => (
                  <div key={i} style={{ display:"flex", justifyContent: msg.role==="user" ? "flex-end" : "flex-start" }}>
                    <div style={{
                      maxWidth:"85%", borderRadius: msg.role==="user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                      background: msg.role==="user" ? "linear-gradient(135deg,#4A90D9,#7B5EA7)" : "#ffffff12",
                      padding:"10px 13px", fontSize:13, color:"#fff", lineHeight:1.6,
                      whiteSpace:"pre-wrap"
                    }}>
                      {msg.text.replace(/\*\*(.*?)\*\*/g, "$1")}
                    </div>
                  </div>
                ))}

                {aegisLoading && (
                  <div style={{ display:"flex", justifyContent:"flex-start" }}>
                    <div style={{ background:"#ffffff12", borderRadius:"16px 16px 16px 4px", padding:"10px 16px", display:"flex", gap:4, alignItems:"center" }}>
                      {[0,1,2].map(i => (
                        <div key={i} style={{ width:6, height:6, borderRadius:"50%", background:"#4A90D9", animation:"pulse 1.2s infinite", animationDelay: i*0.2+"s" }}/>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* DISCLAIMER */}
              <div style={{ padding:"4px 14px", fontSize:10, color:"#ffffff44", textAlign:"center" }}>
                {t("aegisDisclaimer2")}
              </div>

              {/* INPUT */}
              <div style={{ padding:"10px 12px 14px", display:"flex", gap:8, borderTop:"1px solid #ffffff11", flexShrink:0 }}>
                <input
                  value={aegisInput}
                  onChange={e=>setAegisInput(e.target.value)}
                  onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),aegisSend(aegisInput))}
                  placeholder={t("aegisPlaceholder")}
                  style={{ flex:1, background:"#ffffff0d", border:"1px solid #ffffff1a", borderRadius:10, padding:"9px 12px", fontSize:13, color:"#fff", outline:"none", fontFamily:"inherit" }}
                />
                <button onClick={()=>aegisSend(aegisInput)} disabled={!aegisInput.trim()||aegisLoading}
                  style={{ background: aegisInput.trim()&&!aegisLoading ? "linear-gradient(135deg,#4A90D9,#7B5EA7)" : "#ffffff15", border:"none", borderRadius:10, width:38, height:38, cursor: aegisInput.trim()&&!aegisLoading ? "pointer" : "not-allowed", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      )}

    </div>
    </LangContext.Provider>
  );
}