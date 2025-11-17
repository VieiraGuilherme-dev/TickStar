# 🌟 TickStar - Contador de Eventos

Bem-vindo ao **TickStar**! Esta é uma aplicação desenvolvida em **React** que permite aos usuários criar contadores regressivos totalmente personalizados para eventos. Com TickStar, você pode configurar o nome do evento, a data, a cor do tema e até mesmo uma imagem de fundo exclusiva.

---

##  Funcionalidades

### ✨ Crie Seu Evento
- **Título:** Insira um nome para o evento.  
- **Data:** Escolha a data do evento no formato DD-MM-YYYY.  
- **Imagem de Fundo:** Personalize o fundo com qualquer imagem via URL.  
- **Cor do Tema:** Selecione a cor que será usada nos blocos de tempo do contador.  

###  Contagem Regressiva em Tempo Real
- Atualiza automaticamente os dias, horas, minutos e segundos restantes até o evento escolhido.  
- Exibe mensagens claras caso o evento já tenha ocorrido.  
- Mostra confetti quando o evento é alcançado.  

###  Temas
- **Light** e **Dark**  
- **Space:** fundo animado com estrelas (`AnimatedBackground`)  

###  Persistência
- Os eventos são salvos no **localStorage**, mantendo-os mesmo se o usuário fechar o navegador.  

---

##  Tecnologias Utilizadas

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,js,css,html" alt="Skills: React, JavaScript, CSS, HTML" />
</p>

O Framework React foi muito importante para permitir a arquitetura SPA (Single Page Application), onde a componentização e dinamização auxiliaram num código moderno e funcional.

### Hooks implementados
- `useState` para gerenciar estados dinâmicos.  
- `useEffect` para manipulações baseadas no ciclo de vida do componente, como a atualização do contador regressivo.  

Estilização implementada com CSS moderno, usando variáveis, funções e animações.

---

## 🖼️ Preview

*(Insira aqui screenshots ou GIFs do contador em funcionamento para melhor visualização do projeto)*  

---

## 💻 Como Rodar o Projeto

1. Clone o repositório:  
```bash
git clone https://github.com/seu-usuario/tickstar.git
