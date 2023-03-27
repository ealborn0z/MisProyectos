const quotes = [
  {
    quote: "La felicidad es una mariposa que, siempre que la persigues, parece que se aleja. Pero si te sientas en silencio, puede que se posé sobre ti.",
    author: "Nathaniel Hawthorne"
  },
  {
    quote: "No hables a menos que puedas mejorar el silencio.",
    author: "Jorge Luis Borges"
  },
  {
    quote: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito.",
    author: "Albert Schweitzer"
  },
  {
    quote: "La vida es una aventura atrevida o no es nada en absoluto.",
    author: "Helen Keller"
  },
  {
    quote: "La libertad no es tener un buen amo, sino no tener ninguno.",
    author: "George B. Shaw"
  },
  {
    quote: "La mayor gloria en la vida no está en nunca caer, sino en levantarse cada vez que caemos.",
    author: "Nelson Mandela"
  }
];
  
  const quoteElement = document.getElementById("quote");
  const newQuoteButton = document.getElementById("new-quote");
  
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  return `"${randomQuote.quote}" - ${randomQuote.author}`;
}
  
function showNewQuote() {
  const randomQuote = generateRandomQuote();
  quoteElement.textContent = randomQuote;
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; 
  document.body.style.backgroundColor = randomColor;
}

  
  
newQuoteButton.addEventListener("click", showNewQuote);
  
showNewQuote();

const fecha = new Date().getFullYear();
document.getElementById("derechos").innerHTML = `© ${fecha} TuNombre. Todos los derechos reservados.`;
  
  