const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação para criar páginas web.",
        "Uma linguagem de programação de alto nível.",
        "Um banco de dados relacional.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a sintaxe correta para comentários em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "'Este é um comentário'",
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector'?",
      respostas: [
        "Selecionar um elemento HTML pelo ID.",
        "Selecionar um elemento HTML pelo nome da classe.",
        "Selecionar um elemento HTML pelo nome da tag.",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'push()' faz em JavaScript?",
      respostas: [
        "Remove o último elemento de um array.",
        "Adiciona um elemento ao final de um array.",
        "Inverte a ordem dos elementos em um array.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "O que é 'NaN' em JavaScript?",
      respostas: [
        "'NaN' é uma função para números aleatórios.",
        "'NaN' significa 'Not a Number' e é retornado quando operações numéricas falham.",
        "'NaN' é uma função que retorna o maior número possível em JavaScript.",
      ],
      correta: 1
    },
    {
      pergunta: "Como se inicia um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i <= 5)",
        "for (i <= 5; i++)",
        "for (var i = 0; i <= 5; i++)",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'split()' em JavaScript?",
      respostas: [
        "Juntar elementos de um array em uma string.",
        "Dividir uma string em um array de substrings.",
        "Remover elementos duplicados de um array.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método usado para exibir uma mensagem de alerta em JavaScript?",
      respostas: [
        "console.log()",
        "prompt()",
        "alert()",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#Acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
     
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta 
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem)
}
