import { useCurrentLanguage, useLanguage } from "../../context/context";

export const useTranslator = (language, word) => {
  const translations = {
    Español: {
      Timer: "Temporizador",
      "Set Time": "Establecer Tiempo",
      "Start Timer": "Iniciar Temporizador",
      "Restart Timer": "Reiniciar Temporizador",
      "Pause Timer": "Pausar Temporizador",
      "Done!": "¡Tiempo!",
      "Change Background": "Cambiar Fondo",
      "Set Alarm": "Establecer Alarma",
      "Set Music": "Establecer Música",
      "Set Language": "Establecer Lenguaje",
      Nature: "Naturaleza",
      Anime: "Anime",
      Cafe: "Cafetería",
      Jazz: "Jazz",
      Running: "Correr",
      Success: "Éxito",
      Gradients: "Gradientes",
      Solid: "Sólidos",
      Alarms: "Alarmas",
      Alarm: "Alarma",
      Sounds: "Sonidos",
      Classical: "Clásica",
      Languages: "Lenguajes",
      Silence: "Silencio",
      Accept: "Aceptar",
      India: "India",
      English: "Inglés",
      Spanish: "Español",
      Portuguese: "Portugués",
      Hindi: "Hindi",
      "Focus Timer": "Temporizador para la concentración",
      "About us": "Sobre nosotros",
      "Welcome to Focus Timer, your essential tool for enhancing concentration and maximizing productivity. In a world filled with distractions, we provide a customizable platform designed to help you focus on what truly matters. Whether you're studying, working, or engaging in a creative project, Focus Timer is here to elevate your efficiency and keep you on track.":
        "Bienvenido a Focus Timer, tu herramienta esencial para mejorar la concentración y maximizar la productividad. En un mundo lleno de distracciones, proporcionamos una plataforma personalizable diseñada para ayudarte a enfocarte en lo que realmente importa. Ya sea que estés estudiando, trabajando o involucrándote en un proyecto creativo, Focus Timer está aquí para elevar tu eficiencia y mantenerte en el camino.",
      "Elevate Your Productivity": "Eleva tu productividad",
      "At Focus Timer, we understand the importance of personalized focus sessions. Our tool allows you to:":
        "En Focus Timer, entendemos la importancia de las sesiones de concentración personalizadas. Nuestra herramienta te permite:",
      "Set Custom Concentration Times:":
        "Establece tiempos de concentración personalizados:",
      "Tailor your focus intervals to match your workflow. Whether you prefer the classic Pomodoro Technique or custom durations, you have full control.":
        "Ajusta tus intervalos de enfoque para que coincidan con tu flujo de trabajo. Ya sea que prefieras la técnica Pomodoro clásica o duraciones personalizadas, tienes el control total.",
      "Choose Your Background:": "Elige tu fondo:",
      "Immerse yourself in an environment that inspires you. Select from a variety of backgrounds to create the perfect ambiance for your focus sessions.":
        "Sumérgete en un entorno que te inspire. Selecciona entre una variedad de fondos para crear la atmósfera perfecta para tus sesiones de concentración.",
      "Select Alarm Types:": "Selecciona tipos de alarma:",
      "Stay on schedule with customizable alarms. Choose the sounds that best suit your preferences to gently signal the end of each session.":
        "Mantente en el horario con alarmas personalizables. Elige los sonidos que mejor se adapten a tus preferencias para señalar suavemente el final de cada sesión.",
      "Enjoy Background Music:": "Disfruta de música de fondo:",
      "Enhance your concentration with our curated background music options. Find the perfect soundtrack to keep you engaged and minimize distractions.":
        "Mejora tu concentración con nuestras opciones de música de fondo seleccionadas. Encuentra la banda sonora perfecta para mantenerte comprometido y minimizar las distracciones.",
      "Global Accessibility": "Accesibilidad global",
      "We believe productivity tools should be accessible to everyone, everywhere. Focus Timer supports multiple languages to cater to our global community:":
        "Creemos que las herramientas de productividad deben ser accesibles para todos, en todas partes. Focus Timer admite múltiples idiomas para atender a nuestra comunidad global:",
      "Switch effortlessly between languages and make Focus Timer truly your own, no matter where you are in the world.":
        "Cambia sin esfuerzo entre idiomas y haz que Focus Timer sea realmente tuyo, sin importar dónde te encuentres en el mundo.",
      "Why Choose Focus Timer?": "¿Por qué elegir Focus Timer?",
      "Break tasks into manageable intervals to maintain high levels of focus and achieve more in less time.":
        "Divide tareas en intervalos manejables para mantener altos niveles de enfoque y lograr más en menos tiempo.",
      "Personalized Experience:": "Experiencia personalizada:",
      "Customize every aspect of your focus sessions to align with your preferences and optimize your productivity.":
        "Personaliza cada aspecto de tus sesiones de concentración para alinearlas con tus preferencias y optimizar tu productividad.",
      "User-Friendly Interface:": "Interfaz amigable:",
      "Our intuitive design ensures you can set up and start your focus sessions with ease.":
        "Nuestro diseño intuitivo asegura que puedas configurar y comenzar tus sesiones de enfoque con facilidad.",
      "Multi-Device Compatibility:": "Compatibilidad multidispositivo:",
      "Access Focus Timer from any device with a web browser—be it your computer, tablet, or smartphone.":
        "Accede a Focus Timer desde cualquier dispositivo con un navegador web, ya sea tu computadora, tableta o teléfono inteligente.",
      "Our Mission": "Nuestra misión",
      "At Focus Timer, our mission is to empower individuals to reach their full potential by providing tools that foster deep concentration and effective time management. We are committed to helping you overcome distractions and accomplish your goals with confidence.":
        "En Focus Timer, nuestra misión es empoderar a las personas para que alcancen su máximo potencial brindando herramientas que fomentan la concentración profunda y una gestión efectiva del tiempo. Estamos comprometidos a ayudarte a superar las distracciones y lograr tus objetivos con confianza.",
      "Get Started Today": "Comienza hoy",
      "Visit focustimeritisfocustime.com to embark on your journey toward unparalleled focus and efficiency.":
        "Visita focustimeritisfocustime.com para embarcarte en tu viaje hacia un enfoque y eficiencia sin igual.",
      "Embrace the power of tailored focus sessions and unlock your productivity potential with Focus Timer—where every second counts.":
        "Abraza el poder de las sesiones de enfoque personalizadas y desbloquea tu potencial de productividad con Focus Timer, donde cada segundo cuenta.",
      "Waterfall and Cliff": "Cascada y acantilado",
      "Rocky River Gorge": "Desfiladero rocoso del río",
      "Display case showcasing assorted pastries.":
        "Vitrina mostrando surtido de pasteles.",
      "Croissant on a white plate.": "Croissant en un plato blanco.",
      "Coffee machine with brewing equipment.":
        "Máquina de café con equipo de preparación.",
      "Couple discussing the coffee shop.":
        "Pareja discutiendo sobre la cafetería.",
      "Person running on a beach with the ocean waves behind them.":
        "Persona corriendo en una playa con las olas del océano detrás.",
      "Girl in a field with a cross under a cloudy sky":
        "Chica en un campo con una cruz bajo un cielo nublado.",
      "Bright star shining in a deep night sky.":
        "Estrella brillante resplandeciendo en un cielo nocturno profundo.",
      "Silhouetted figure gazing at a colorful sunset.":
        "Figura en silueta contemplando un colorido atardecer.",
      "Character with a sword standing among mountains.":
        "Personaje con una espada de pie entre montañas.",
      "Cityscape glowing with lights at night.":
        "Paisaje urbano brillando con luces por la noche.",
      "Character with fiery red hair surrounded by flames.":
        "Personaje con cabello rojo ardiente rodeado de llamas.",
      "Silhouette walking down a path lined with trees.":
        "Silueta caminando por un sendero bordeado de árboles.",
      "Person with green hair staring at a full moon.":
        "Persona con cabello verde mirando fijamente una luna llena.",
      "A woman standing under a radiant sunset.":
        "Una mujer de pie bajo un atardecer radiante.",
      "A soft blend transitioning from pink to yellow tones.":
        "Una suave mezcla que pasa de tonos rosados a amarillos.",
      "Shades of blue fading into light green hues.":
        "Tonos azules desvaneciéndose en matices verde claro.",
      "Orange tones merging into a deep red.":
        "Tonos naranjas fusionándose en un rojo intenso.",
      "A calm transition from purple to teal.":
        "Una transición tranquila de púrpura a verde azulado.",
      "Vibrant green fading into sunny yellow.":
        "Verde vibrante desvaneciéndose en amarillo soleado.",
      "Rich purple blending into magenta.":
        "Púrpura intenso fusionándose en magenta.",
      "Dark Teal": "Verde azulado oscuro",
      "Muted Brown – A soft brown color with earthy undertones.":
        "Marrón apagado: un marrón suave con matices terrosos.",
      "Dark Purple – A bold, dark purple with a sophisticated feel.":
        "Morado oscuro: un morado audaz y elegante.",
      "Snowy Mountain Lake": "Lago montañoso nevado",
      "Sunset Over River": "Atardecer sobre el río",
      "Dock on Lake": "Muelle en el lago",
      "Mountain Peak": "Cima de la montaña",
      "Rocky Mountain Range": "Cordillera rocosa",
      "Group of musicians playing string instruments in an orchestra.":
        "Grupo de músicos tocando instrumentos de cuerda en una orquesta.",
      "Elderly man performing with a flute.":
        "Hombre mayor tocando una flauta.",
      "Close-up of piano keys from an artistic perspective.":
        "Primer plano de teclas de piano desde una perspectiva artística.",
      "Musician playing piano in a dimly lit atmosphere.":
        "Músico tocando el piano en un ambiente tenuemente iluminado.",
      "Saxophonist performing outdoors.": "Saxofonista actuando al aire libre.",
      "Glass of cold drink topped with whipped cream.":
        "Vaso de bebida fría cubierta con crema batida.",
      "Open laptop on a cafe table.":
        "Portátil abierto en una mesa de cafetería.",
      "Desert Dunes": "Dunas del desierto",
      "Northern Lights": "Auroras boreales",
      "Saxophonist playing next to a music stand indoors.":
        "Saxofonista tocando junto a un atril en interiores.",
      "Close-up of hands skillfully playing a saxophone.":
        "Primer plano de manos tocando hábilmente un saxofón.",
      "Saxophonist performing in a dark, moody setting.":
        "Saxofonista actuando en un ambiente oscuro y melancólico.",
      "Saxophonist playing under blue lighting.":
        "Saxofonista tocando bajo iluminación azul.",
      "Piano shown in a straightforward view.":
        "Piano mostrado en una vista directa.",
      "Man skillfully playing a violin.":
        "Hombre tocando un violín con destreza.",
      "Woman passionately playing a violin.":
        "Mujer tocando un violín con pasión.",
      "Individual jogging through a grassy area surrounded by greenery.":
        "Persona corriendo por un área con césped rodeada de vegetación.",
      "Two people running on a bridge with an urban skyline in the background.":
        "Dos personas corriendo en un puente con un horizonte urbano de fondo.",
      "Runner moving across a sandy beach with water in view.":
        "Corredor moviéndose por una playa arenosa con agua a la vista.",
      "Person jogging near a modern building.":
        "Persona corriendo cerca de un edificio moderno.",
      "Runner surrounded by trees in a park or forest setting.":
        "Corredor rodeado de árboles en un parque o bosque.",
      "Taj Mahal – Iconic white marble mausoleum in Agra.":
        "Taj Mahal: icónico mausoleo de mármol blanco en Agra.",
      "Historical structure – Majestic fort or palace from India's royal past.":
        "Estructura histórica: majestuoso fuerte o palacio del pasado real de India.",
      "Holi powders – Brightly colored powders representing the festival of Holi.":
        "Polvos de Holi: polvos de colores brillantes que representan el festival de Holi.",
      "Golden Temple – Sacred Sikh site radiating peace and devotion.":
        "Templo Dorado: sitio sagrado sij que irradia paz y devoción.",
      "Ancient temple sculptures – Intricate carvings from India’s cultural heritage.":
        "Esculturas de templos antiguos: intrincados grabados del patrimonio cultural de India.",
      "Elephant in nature – Majestic elephant in its natural habitat.":
        "Elefante en la naturaleza: majestuoso elefante en su hábitat natural.",
      "Focus Timer -- Elevate Your Focus, Increase Your Productivity":
        "Focus Timer -- Eleva tu enfoque, aumenta tu productividad.",
    },

    português: {
      Timer: "Temporizador",
      "Set Time": "Definir Tempo",
      "Start Timer": "Iniciar Temporizador",
      "Restart Timer": "Reiniciar Temporizador",
      "Pause Timer": "Pausar Temporizador",
      "Done!": "Terminou!",
      "Change Background": "Alterar plano de fundo",
      "Set Alarm": "Definir alarme",
      "Set Music": "Definir música",
      "Set Language": "Definir idioma",
      Nature: "Natureza",
      Anime: "Anime",
      Cafe: "Cafeteria",
      Jazz: "Jazz",
      Running: "Corrida",
      Success: "Sucesso",
      Gradients: "Gradientes",
      Solid: "Sólido",
      Alarms: "Alarmes",
      Alarm: "Alarme",
      Sounds: "Sons",
      Classical: "Clássico",
      Languages: "Línguas",
      Silence: "Silêncio",
      Accept: "Aceitar",
      India: "Índia",
      English: "Inglês",
      Spanish: "Espanhol",
      Portuguese: "Português",
      "Focus Timer": "Temporizador de foco",
      "About us": "Sobre nós",
      "Welcome to Focus Timer, your essential tool for enhancing concentration and maximizing productivity. In a world filled with distractions, we provide a customizable platform designed to help you focus on what truly matters. Whether you're studying, working, or engaging in a creative project, Focus Timer is here to elevate your efficiency and keep you on track.":
        "Bem-vindo ao Focus Timer, sua ferramenta essencial para melhorar a concentração e maximizar a produtividade. Em um mundo cheio de distrações, oferecemos uma plataforma personalizável projetada para ajudar você a se concentrar no que realmente importa. Seja você um estudante, um trabalhador ou esteja se envolvendo em um projeto criativo, o Focus Timer está aqui para aumentar sua eficiência e mantê-lo no caminho certo.",
      "Elevate Your Productivity": "Eleve sua produtividade",
      "At Focus Timer, we understand the importance of personalized focus sessions. Our tool allows you to:":
        "No Focus Timer, entendemos a importância das sessões de foco personalizadas. Nossa ferramenta permite que você:",
      "Set Custom Concentration Times:":
        "Defina tempos de concentração personalizados:",
      "Tailor your focus intervals to match your workflow. Whether you prefer the classic Pomodoro Technique or custom durations, you have full control.":
        "Ajuste seus intervalos de foco para corresponder ao seu fluxo de trabalho. Quer você prefira a técnica Pomodoro clássica ou durações personalizadas, você tem controle total.",
      "Choose Your Background:": "Escolha seu plano de fundo:",
      "Immerse yourself in an environment that inspires you. Select from a variety of backgrounds to create the perfect ambiance for your focus sessions.":
        "Mergulhe em um ambiente que o inspira. Selecione entre uma variedade de planos de fundo para criar o ambiente perfeito para suas sessões de foco.",
      "Select Alarm Types:": "Selecione tipos de alarme:",
      "Stay on schedule with customizable alarms. Choose the sounds that best suit your preferences to gently signal the end of each session.":
        "Mantenha-se no cronograma com alarmes personalizáveis. Escolha os sons que melhor se adequam às suas preferências para sinalizar suavemente o fim de cada sessão.",
      "Enjoy Background Music:": "Desfrute de música de fundo:",
      "Enhance your concentration with our curated background music options. Find the perfect soundtrack to keep you engaged and minimize distractions.":
        "Aprimore sua concentração com nossas opções de música de fundo selecionadas. Encontre a trilha sonora perfeita para mantê-lo envolvido e minimizar distrações.",
      "Global Accessibility": "Acessibilidade global",
      "We believe productivity tools should be accessible to everyone, everywhere. Focus Timer supports multiple languages to cater to our global community:":
        "Acreditamos que as ferramentas de produtividade devem ser acessíveis a todos, em qualquer lugar. O Focus Timer suporta vários idiomas para atender à nossa comunidade global:",
      "Switch effortlessly between languages and make Focus Timer truly your own, no matter where you are in the world.":
        "Alterne facilmente entre idiomas e faça do Focus Timer verdadeiramente seu, não importa onde você esteja no mundo.",
      "Why Choose Focus Timer?": "Por que escolher o Focus Timer?",
      "Break tasks into manageable intervals to maintain high levels of focus and achieve more in less time.":
        "Divida tarefas em intervalos gerenciáveis para manter altos níveis de foco e alcançar mais em menos tempo.",
      "Personalized Experience:": "Experiência personalizada:",
      "Customize every aspect of your focus sessions to align with your preferences and optimize your productivity.":
        "Personalize todos os aspectos de suas sessões de foco para alinhar com suas preferências e otimizar sua produtividade.",
      "User-Friendly Interface:": "Interface amigável:",
      "Our intuitive design ensures you can set up and start your focus sessions with ease.":
        "Nosso design intuitivo garante que você possa configurar e iniciar suas sessões de foco com facilidade.",
      "Multi-Device Compatibility:":
        "Compatibilidade com múltiplos dispositivos:",
      "Access Focus Timer from any device with a web browser—be it your computer, tablet, or smartphone.":
        "Acesse o Focus Timer de qualquer dispositivo com um navegador web—seja seu computador, tablet ou smartphone.",
      "Our Mission": "Nossa missão",
      "At Focus Timer, our mission is to empower individuals to reach their full potential by providing tools that foster deep concentration and effective time management. We are committed to helping you overcome distractions and accomplish your goals with confidence.":
        "No Focus Timer, nossa missão é capacitar indivíduos a alcançar seu pleno potencial, fornecendo ferramentas que promovem profunda concentração e gerenciamento eficaz do tempo. Estamos comprometidos em ajudá-lo a superar distrações e alcançar seus objetivos com confiança.",
      "Get Started Today": "Comece hoje",
      "Visit focustimeritisfocustime.com to embark on your journey toward unparalleled focus and efficiency.":
        "Visite focustimeritisfocustime.com para embarcar em sua jornada rumo a um foco e eficiência incomparáveis.",
      "Embrace the power of tailored focus sessions and unlock your productivity potential with Focus Timer—where every second counts.":
        "Abrace o poder de sessões de foco personalizadas e desbloqueie seu potencial de produtividade com o Focus Timer—onde cada segundo conta.",
      "Waterfall and Cliff": "Cachoeira e penhasco",
      "Rocky River Gorge": "Desfiladeiro rochoso do rio",
      "Display case showcasing assorted pastries.":
        "Vitrine exibindo diversos doces.",
      "Croissant on a white plate.": "Croissant em um prato branco.",
      "Coffee machine with brewing equipment.":
        "Máquina de café com equipamento de preparo.",
      "Couple discussing the coffee shop.":
        "Casal conversando sobre a cafeteria.",
      "Person running on a beach with the ocean waves behind them.":
        "Pessoa correndo em uma praia com as ondas do oceano atrás.",
      "Girl in a field with a cross under a cloudy sky":
        "Garota em um campo com uma cruz sob um céu nublado.",
      "Bright star shining in a deep night sky.":
        "Estrela brilhante brilhando em um céu noturno profundo.",
      "Silhouetted figure gazing at a colorful sunset.":
        "Figura em silhueta contemplando um pôr do sol colorido.",
      "Character with a sword standing among mountains.":
        "Personagem com uma espada em pé entre montanhas.",
      "Cityscape glowing with lights at night.":
        "Paisagem urbana brilhando com luzes à noite.",
      "Character with fiery red hair surrounded by flames.":
        "Personagem com cabelo vermelho flamejante cercado por chamas.",
      "Silhouette walking down a path lined with trees.":
        "Silhueta caminhando por um caminho ladeado por árvores.",
      "Person with green hair staring at a full moon.":
        "Pessoa com cabelo verde olhando para uma lua cheia.",
      "A woman standing under a radiant sunset.":
        "Uma mulher em pé sob um pôr do sol radiante.",
      "A soft blend transitioning from pink to yellow tones.":
        "Uma mistura suave que passa de tons de rosa para amarelo.",
      "Shades of blue fading into light green hues.":
        "Tons de azul desbotando em matizes de verde claro.",
      "Orange tones merging into a deep red.":
        "Tons de laranja se fundindo em um vermelho intenso.",
      "A calm transition from purple to teal.":
        "Uma transição calma do roxo ao azul petróleo.",
      "Vibrant green fading into sunny yellow.":
        "Verde vibrante desbotando em amarelo ensolarado.",
      "Rich purple blending into magenta.":
        "Roxo intenso se misturando com magenta.",
      "Dark Teal": "Azul petróleo escuro",
      "Muted Brown – A soft brown color with earthy undertones.":
        "Marrom suave: um tom de marrom com matizes terrosos.",
      "Dark Purple – A bold, dark purple with a sophisticated feel.":
        "Roxo escuro: um roxo forte e sofisticado.",
      "Snowy Mountain Lake": "Lago de montanha nevado",
      "Sunset Over River": "Pôr do sol sobre o rio",
      "Dock on Lake": "Píer no lago",
      "Mountain Peak": "Pico da montanha",
      "Rocky Mountain Range": "Cordilheira rochosa",
      "Group of musicians playing string instruments in an orchestra.":
        "Grupo de músicos tocando instrumentos de corda em uma orquestra.",
      "Elderly man performing with a flute.": "Homem idoso tocando flauta.",
      "Close-up of piano keys from an artistic perspective.":
        "Close das teclas de piano em uma perspectiva artística.",
      "Musician playing piano in a dimly lit atmosphere.":
        "Músico tocando piano em um ambiente com pouca luz.",
      "Saxophonist performing outdoors.": "Saxofonista tocando ao ar livre.",
      "Glass of cold drink topped with whipped cream.":
        "Copo de bebida gelada coberto com chantilly.",
      "Open laptop on a cafe table.": "Laptop aberto em uma mesa de café.",
      "Desert Dunes": "Dunas do deserto",
      "Northern Lights": "Auroras boreais",
      "Saxophonist playing next to a music stand indoors.":
        "Saxofonista tocando ao lado de um suporte de partituras em um ambiente interno.",
      "Close-up of hands skillfully playing a saxophone.":
        "Close das mãos tocando habilmente um saxofone.",
      "Saxophonist performing in a dark, moody setting.":
        "Saxofonista tocando em um ambiente escuro e melancólico.",
      "Saxophonist playing under blue lighting.":
        "Saxofonista tocando sob luz azul.",
      "Piano shown in a straightforward view.":
        "Piano mostrado em uma visão direta.",
      "Man skillfully playing a violin.": "Homem tocando violino habilmente.",
      "Woman passionately playing a violin.":
        "Mulher tocando violino com paixão.",
      "Individual jogging through a grassy area surrounded by greenery.":
        "Pessoa correndo em uma área gramada cercada por vegetação.",
      "Two people running on a bridge with an urban skyline in the background.":
        "Duas pessoas correndo em uma ponte com um horizonte urbano ao fundo.",
      "Runner moving across a sandy beach with water in view.":
        "Corredor se movendo por uma praia de areia com água à vista.",
      "Person jogging near a modern building.":
        "Pessoa correndo perto de um edifício moderno.",
      "Runner surrounded by trees in a park or forest setting.":
        "Corredor cercado por árvores em um parque ou floresta.",
      "Taj Mahal – Iconic white marble mausoleum in Agra.":
        "Taj Mahal: icônico mausoléu de mármore branco em Agra.",
      "Historical structure – Majestic fort or palace from India's royal past.":
        "Estrutura histórica: majestoso forte ou palácio do passado real da Índia.",
      "Holi powders – Brightly colored powders representing the festival of Holi.":
        "Pós de Holi: pós coloridos brilhantes que representam o festival de Holi.",
      "Golden Temple – Sacred Sikh site radiating peace and devotion.":
        "Templo Dourado: local sagrado sikh que irradia paz e devoção.",
      "Ancient temple sculptures – Intricate carvings from India’s cultural heritage.":
        "Esculturas de templos antigos: entalhes intrincados do patrimônio cultural da Índia.",
      "Elephant in nature – Majestic elephant in its natural habitat.":
        "Elefante na natureza: majestoso elefante em seu habitat natural.",
      "Focus Timer -- Elevate Your Focus, Increase Your Productivity":
        "Focus Timer -- Eleve seu foco, aumente sua produtividade",
    },

    हिंदी: {
      Timer: "टाइमर",
      "Set Time": "समय निर्धारित करें",
      "Start Timer": "टाइमर शुरू करें",
      "Restart Timer": "टाइमर रिसेट करें",
      "Pause Timer": "टाइमर रोकें",
      "Done!": "समाप्त!",
      "Change Background": "पृष्ठभूमि बदलें",
      "Set Alarm": "अलार्म सेट करें",
      "Set Music": "संगीत सेट करें",
      "Set Language": "भाषा सेट करें",
      Nature: "प्रकृति",
      Anime: "एनीमे",
      Cafe: "कैफे",
      Jazz: "जैज",
      Running: "दौड़ना",
      Success: "सफलता",
      Gradients: "ग्रेडिएंट्स",
      Solid: "ठोस",
      Alarms: "अलार्म",
      Alarm: "अलार्म",
      Sounds: "ध्वनियाँ",
      Classical: "शास्त्रीय",
      Languages: "भाषाएँ",
      Silence: "अलार्म बंद करें",
      Accept: "स्वीकार",
      India: "भारत",
      English: "अंग्रेज़ी",
      Spanish: "स्पेनिश",
      Portuguese: "पुर्तगाली",
      Hindi: "हिंदी",
      "Focus Timer": "फोकस टाइमर",
      "About us": "हमारे बारे में",
      "Welcome to Focus Timer, your essential tool for enhancing concentration and maximizing productivity. In a world filled with distractions, we provide a customizable platform designed to help you focus on what truly matters. Whether you're studying, working, or engaging in a creative project, Focus Timer is here to elevate your efficiency and keep you on track.":
        "फोकस टाइमर में आपका स्वागत है, जो आपकी एकाग्रता बढ़ाने और उत्पादकता को अधिकतम करने के लिए एक आवश्यक उपकरण है। एक दुनिया में जो विकर्षणों से भरी हुई है, हम एक अनुकूलनशील मंच प्रदान करते हैं जो आपको वास्तव में महत्वपूर्ण चीज़ों पर ध्यान केंद्रित करने में मदद करता है। चाहे आप अध्ययन कर रहे हों, काम कर रहे हों, या एक रचनात्मक परियोजना में लगे हों, फोकस टाइमर यहां आपकी दक्षता को बढ़ाने और आपको ट्रैक पर रखने के लिए है।",
      "Elevate Your Productivity": "अपनी उत्पादकता बढ़ाएं",
      "At Focus Timer, we understand the importance of personalized focus sessions. Our tool allows you to:":
        "फोकस टाइमर में, हम व्यक्तिगत ध्यान सत्रों के महत्व को समझते हैं। हमारा उपकरण आपको यह करने की अनुमति देता है:",
      "Set Custom Concentration Times:": "कस्टम एकाग्रता समय सेट करें:",
      "Tailor your focus intervals to match your workflow. Whether you prefer the classic Pomodoro Technique or custom durations, you have full control.":
        "अपने फोकस अंतराल को अपने वर्कफ़्लो के अनुरूप बनाएं। चाहे आप क्लासिक पोमोडोरो तकनीक पसंद करें या कस्टम अवधि, आपके पास पूर्ण नियंत्रण है।",
      "Choose Your Background:": "अपना बैकग्राउंड चुनें:",
      "Immerse yourself in an environment that inspires you. Select from a variety of backgrounds to create the perfect ambiance for your focus sessions.":
        "अपने आप को एक ऐसे वातावरण में डुबोएं जो आपको प्रेरित करता है। अपनी ध्यान सत्रों के लिए सही माहौल बनाने के लिए विभिन्न पृष्ठभूमियों में से चुनें।",
      "Select Alarm Types:": "अलार्म प्रकार चुनें:",
      "Stay on schedule with customizable alarms. Choose the sounds that best suit your preferences to gently signal the end of each session.":
        "कस्टमाइज़ेबल अलार्म के साथ समय पर रहें। प्रत्येक सत्र के अंत का संकेत देने के लिए अपनी पसंद के अनुसार सर्वोत्तम ध्वनि चुनें।",
      "Enjoy Background Music:": "बैकग्राउंड संगीत का आनंद लें:",
      "Enhance your concentration with our curated background music options. Find the perfect soundtrack to keep you engaged and minimize distractions.":
        "हमारे चयनित बैकग्राउंड संगीत विकल्पों के साथ अपनी एकाग्रता बढ़ाएँ। आपको व्यस्त रखने और विकर्षणों को कम करने के लिए सही साउंडट्रैक खोजें।",
      "Global Accessibility": "वैश्विक उपलब्धता",
      "We believe productivity tools should be accessible to everyone, everywhere. Focus Timer supports multiple languages to cater to our global community:":
        "हम मानते हैं कि उत्पादकता उपकरण सभी के लिए, हर जगह सुलभ होने चाहिए। फोकस टाइमर हमारी वैश्विक समुदाय की सेवा के लिए कई भाषाओं का समर्थन करता है:",
      "Switch effortlessly between languages and make Focus Timer truly your own, no matter where you are in the world.":
        "भाषाओं के बीच आसानी से स्विच करें और फोकस टाइमर को वास्तव में अपना बनाएं, चाहे आप दुनिया में कहीं भी हों।",
      "Why Choose Focus Timer?": "फोकस टाइमर क्यों चुनें?",
      "Break tasks into manageable intervals to maintain high levels of focus and achieve more in less time.":
        "उच्च स्तर के ध्यान को बनाए रखने और कम समय में अधिक हासिल करने के लिए कार्यों को प्रबंधनीय अंतराल में विभाजित करें।",
      "Personalized Experience:": "व्यक्तिगत अनुभव:",
      "Customize every aspect of your focus sessions to align with your preferences and optimize your productivity.":
        "अपने ध्यान सत्रों के प्रत्येक पहलू को अपनी पसंद के अनुसार अनुकूलित करें और अपनी उत्पादकता को अनुकूलित करें।",
      "User-Friendly Interface:": "यूज़र-फ्रेंडली इंटरफ़ेस:",
      "Our intuitive design ensures you can set up and start your focus sessions with ease.":
        "हमारा सहज डिज़ाइन सुनिश्चित करता है कि आप आसानी से अपने ध्यान सत्रों को सेट अप और शुरू कर सकते हैं।",
      "Multi-Device Compatibility:": "मल्टी-डिवाइस संगतता:",
      "Access Focus Timer from any device with a web browser—be it your computer, tablet, or smartphone.":
        "किसी भी वेब ब्राउज़र के साथ किसी भी डिवाइस से फोकस टाइमर का उपयोग करें—चाहे आपका कंप्यूटर, टैबलेट या स्मार्टफोन हो।",
      "Our Mission": "हमारा मिशन",
      "At Focus Timer, our mission is to empower individuals to reach their full potential by providing tools that foster deep concentration and effective time management. We are committed to helping you overcome distractions and accomplish your goals with confidence.":
        "फोकस टाइमर में, हमारा मिशन है कि हम गहरी एकाग्रता और प्रभावी समय प्रबंधन को बढ़ावा देने वाले उपकरण प्रदान करके व्यक्तियों को अपने पूर्ण क्षमता तक पहुँचने में सशक्त बनाएं। हम आपको विकर्षणों को दूर करने और आत्मविश्वास के साथ अपने लक्ष्यों को हासिल करने में मदद करने के लिए प्रतिबद्ध हैं।",
      "Get Started Today": "आज ही शुरू करें",
      "Visit focustimeritisfocustime.com to embark on your journey toward unparalleled focus and efficiency.":
        "अतुलनीय ध्यान और दक्षता की ओर अपनी यात्रा शुरू करने के लिए focustimeritisfocustime.com पर जाएँ।",
      "Embrace the power of tailored focus sessions and unlock your productivity potential with Focus Timer—where every second counts.":
        "अनुकूलित ध्यान सत्रों की शक्ति को अपनाएं और फोकस टाइमर के साथ अपनी उत्पादकता क्षमता को अनलॉक करें—जहाँ हर सेकंड मायने रखता है।",
      "Waterfall and Cliff": "झरना और चट्टान",
      "Rocky River Gorge": "चट्टानी नदी घाटी",
      "Display case showcasing assorted pastries.":
        "विभिन्न पेस्ट्री प्रदर्शित करता शोकेस।",
      "Croissant on a white plate.": "सफेद प्लेट पर क्रोइसां।",
      "Coffee machine with brewing equipment.": "कॉफी मशीन के साथ उपकरण।",
      "Couple discussing the coffee shop.":
        "युगल कॉफी शॉप पर चर्चा कर रहे हैं।",
      "Person running on a beach with the ocean waves behind them.":
        "व्यक्ति समुद्र तट पर दौड़ रहा है जिसके पीछे समुद्र की लहरें हैं।",
      "Girl in a field with a cross under a cloudy sky":
        "एक बादलों वाले आकाश के नीचे एक क्रॉस के साथ खेत में लड़की।",
      "Bright star shining in a deep night sky.":
        "गहरे रात के आसमान में चमकता हुआ तारा।",
      "Silhouetted figure gazing at a colorful sunset.":
        "सिल्हूट आकृति रंगीन सूर्यास्त को देख रही है।",
      "Character with a sword standing among mountains.":
        "तलवार के साथ चरित्र पहाड़ों के बीच खड़ा है।",
      "Cityscape glowing with lights at night.":
        "रात में रोशनी के साथ चमकता हुआ शहर।",
      "Character with fiery red hair surrounded by flames.":
        "लपटों से घिरे आग जैसे लाल बालों वाला चरित्र।",
      "Silhouette walking down a path lined with trees.":
        "पेड़ों की कतार वाले रास्ते पर चलते हुए सिल्हूट।",
      "Person with green hair staring at a full moon.":
        "हरा बालों वाला व्यक्ति पूर्णिमा को देख रहा है।",
      "A woman standing under a radiant sunset.":
        "एक महिला चमकते सूर्यास्त के नीचे खड़ी है।",
      "A soft blend transitioning from pink to yellow tones.":
        "गुलाबी से पीले टोन में परिवर्तित होता हुआ नरम मिश्रण।",
      "Shades of blue fading into light green hues.":
        "नीले रंग के शेड हल्के हरे रंग में बदल रहे हैं।",
      "Orange tones merging into a deep red.":
        "नारंगी टोन गहरे लाल में मिल रहे हैं।",
      "A calm transition from purple to teal.":
        "बैंगनी से हरे-नीले में शांत परिवर्तन।",
      "Vibrant green fading into sunny yellow.":
        "चमकीला हरा रंग पीले धूप में बदल रहा है।",
      "Rich purple blending into magenta.":
        "गहरा बैंगनी मैजेंटा में मिल रहा है।",
      "Dark Teal": "गहरा हरा-नीला",
      "Muted Brown – A soft brown color with earthy undertones.":
        "म्यूट ब्राउन – मुलायम भूरा रंग धरती जैसे अंडरटोन के साथ।",
      "Dark Purple – A bold, dark purple with a sophisticated feel.":
        "डार्क पर्पल – साहसिक, गहरा बैंगनी परिष्कृत अनुभव के साथ।",
      "Snowy Mountain Lake": "बर्फ से ढका पहाड़ी झील",
      "Sunset Over River": "नदी के ऊपर सूर्यास्त",
      "Dock on Lake": "झील पर गोदी",
      "Mountain Peak": "पर्वत की चोटी",
      "Rocky Mountain Range": "चट्टानी पर्वत श्रृंखला",
      "Group of musicians playing string instruments in an orchestra.":
        "एक ऑर्केस्ट्रा में तार वाद्य यंत्र बजाने वाले संगीतकारों का समूह।",
      "Elderly man performing with a flute.":
        "एक बुजुर्ग आदमी बांसुरी बजाते हुए।",
      "Close-up of piano keys from an artistic perspective.":
        "कलात्मक दृष्टिकोण से पियानो की कुंजियों का क्लोज़-अप।",
      "Musician playing piano in a dimly lit atmosphere.":
        "अल्प प्रकाश वाले वातावरण में पियानो बजाता हुआ संगीतकार।",
      "Saxophonist performing outdoors.": "बाहर सैक्सोफोन बजाता हुआ संगीतकार।",
      "Glass of cold drink topped with whipped cream.":
        "फेंटे हुए क्रीम के साथ ठंडे पेय का गिलास।",
      "Open laptop on a cafe table.": "कैफे की मेज पर खुला लैपटॉप।",
      "Desert Dunes": "रेगिस्तान के टीले",
      "Northern Lights": "उत्तरी रोशनी",
      "Saxophonist playing next to a music stand indoors.":
        "संगीत स्टैंड के पास इनडोर सैक्सोफोन बजाते हुए।",
      "Close-up of hands skillfully playing a saxophone.":
        "हाथों का क्लोज़-अप जो सैक्सोफोन को कुशलता से बजा रहे हैं।",
      "Saxophonist performing in a dark, moody setting.":
        "अंधेरे, भावनात्मक वातावरण में सैक्सोफोन बजाते हुए।",
      "Saxophonist playing under blue lighting.":
        "नीली रोशनी के नीचे सैक्सोफोन बजाते हुए।",
      "Piano shown in a straightforward view.": "पियानो सीधा दिखाया गया।",
      "Man skillfully playing a violin.": "पुरुष कुशलता से वायलिन बजाते हुए।",
      "Woman passionately playing a violin.":
        "महिला पूरी भावनाओं से वायलिन बजाते हुए।",
      "Individual jogging through a grassy area surrounded by greenery.":
        "व्यक्ति हरी-भरी हरियाली से घिरे घास के क्षेत्र में दौड़ रहा है।",
      "Two people running on a bridge with an urban skyline in the background.":
        "पृष्ठभूमि में शहरी क्षितिज के साथ पुल पर दौड़ते हुए दो लोग।",
      "Runner moving across a sandy beach with water in view.":
        "रेतीले समुद्र तट पर दौड़ते हुए धावक जिसके सामने पानी है।",
      "Person jogging near a modern building.":
        "आधुनिक इमारत के पास जॉगिंग करता हुआ व्यक्ति।",
      "Runner surrounded by trees in a park or forest setting.":
        "एक पार्क या जंगल में पेड़ों से घिरा हुआ धावक।",
      "Taj Mahal – Iconic white marble mausoleum in Agra.":
        "ताजमहल – आगरा में प्रतिष्ठित सफेद संगमरमर का मकबरा।",
      "Historical structure – Majestic fort or palace from India's royal past.":
        "ऐतिहासिक संरचना – भारत के शाही अतीत का भव्य किला या महल।",
      "Holi powders – Brightly colored powders representing the festival of Holi.":
        "होली के रंग – होली त्योहार को दर्शाते हुए चमकीले रंगीन पाउडर।",
      "Golden Temple – Sacred Sikh site radiating peace and devotion.":
        "स्वर्ण मंदिर – शांति और भक्ति को दर्शाता पवित्र सिख स्थान।",
      "Ancient temple sculptures – Intricate carvings from India’s cultural heritage.":
        "प्राचीन मंदिर मूर्तियां – भारत की सांस्कृतिक धरोहर की जटिल नक्काशी।",
      "Elephant in nature – Majestic elephant in its natural habitat.":
        "प्रकृति में हाथी – अपने प्राकृतिक आवास में शानदार हाथी।",
      "Focus Timer -- Elevate Your Focus, Increase Your Productivity":
        "फ़ोकस टाइमर -- अपना ध्यान बढ़ाएँ, अपनी उत्पादकता बढ़ाएँ।",
    },
  };

  return language === "English" ? word : translations[language]?.[word] || word;
};
