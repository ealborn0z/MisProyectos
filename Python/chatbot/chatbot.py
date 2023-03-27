from nltk.chat.util import Chat, reflections

pares = [    ['Hola', ['Hola!', 'Hola ¿cómo estás?']],
    ['¿Cómo estás?', ['Estoy bien, ¿y tú?', 'Muy bien, gracias por preguntar']],
    ['Adiós', ['Adiós!', 'Hasta luego']],
    ['¿Qué es tu nombre?', ['Mi nombre es Chatbot', 'Soy Chatbot']],
    ['¿Qué haces?', ['Estoy aquí para ayudarte', 'Estoy aquí para charlar contigo']],
    ['¿Cómo te llamas?', ['Mi nombre es Chatbot', 'Soy Chatbot']],
    ['¿Qué hora es?', ['No tengo reloj, lo siento', 'Lo siento, no sé qué hora es']],
    ['', ['Lo siento, no te he entendido', 'Podrías reformular eso, por favor?']]
]

chatbot = Chat(pares, reflections)

print('¡Hola! Soy un chatbot. ¿En qué puedo ayudarte?')
while True:
    try:
        entrada = input('> Tú: ')
        if entrada.lower() == 'salir':
            break
        respuesta = chatbot.respond(entrada)
        print('> Chatbot:', respuesta)
    except KeyboardInterrupt:
        print('¡Hasta luego!')
        break
