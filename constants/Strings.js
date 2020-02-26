const s = (st, lg) => {
  return lg === "pt" ? st.pt : st.en;
};

const strings = {
  rules: {
    title: lg =>
      s(
        {
          pt: "Regras do Jogo",
          en: "Game Rules"
        },
        lg
      ),
    r1: lg =>
      s(
        {
          pt: "\u2023  O jogo pode ser jogado por 2 até 7 jogadores.",
          en: "\u2023  The game can be played by 2 up to 7 players."
        },
        lg
      ),
    r3: lg =>
      s(
        {
          pt:
            "\u2023  Ao início, são postas 5 cartas do baralho de desafios (vermelho) sobre a mesa, com as respectivas descrições viradas para cima. Cada jogador recebe 5 cartas do Baralho de Jogo (verde); O jogador que iniciará o jogo é escolhido de forma aleatória. A ordem de jogada é no sentido anti-horário. ",
          en:
            "\u2023  In the beginning, 5 cards from the chalenges deck are placed on the table. Each player takes 5 cards from the Game Deck (green one); The player who will start playing is chosen randomly. The playing order is anticlockwise."
        },
        lg
      ),

    r2: lg =>
      s(
        {
          pt:
            "\u2023  O Jogo possui 3 baralhos: de Desafios (vermelho), Bônus (azul) e de Jogo (verde).",
          en:
            "\u2023  The game has 3 decks: Chalenges (red), Bonus (blue) and Game (green)."
        },
        lg
      ),
    r4: lg =>
      s(
        {
          pt:
            "\u2023  Para poder fazer sua jogada, o jogador precisa ter uma carta do tipo Testador no seu campo.",
          en:
            "\u2023  When playing, the player needs to have a 'Tester Card' type in his/her field on the table."
        },
        lg
      ),

    r5: lg =>
      s(
        {
          pt:
            "\u2023  Quando for seu turno, o jogador pode puxar até duas cartas do Baralho de Jogo (verde) e se, E SOMENTE SE possuir uma carta do tipo Testador em seu campo, poderá escolher até cartas de desafio que estão na mesa para resolvê-las. Um jogador pode ter somente uma carta Testador em campo sem auxílio de Cartas Bônus.",
          en:
            "\u2023  In his/her turn, the player may draw up to 2 cards from the game deck (green) e if, AND ONLY IF has a Tester Card in his/her field on table, may choose up to 2 chalenge cards on the table to resolve. A player may have only one Tester in his/her field without a Bonus card effect."
        },
        lg
      ),
    r6: lg =>
      s(
        {
          pt:
            "\u2023  Para resolver uma situação, o jogador escolhe uma carta de sua mão e combina com a Carta Situação em campo. Com isso, a carta situação pode ser virada e a resposta é mostrada.",
          en:
            "\u2023  For resolving a chalenge, the player choses a Game Card (green one) from his hand and combines with the chalenge card on the table. After that, the answer on the verse of the card can be revealed."
        },
        lg
      ),
    r7: lg =>
      s(
        {
          pt:
            "\u2023  Caso o jogador acerte, ele joga o dado e se o número obtido estiver dentre os números esperados na carta desafio (no verso), o jogador ganha um ponto e pode puxar uma carta do Baralho Bônus.",
          en:
            "\u2023  If the player give a correct answer, (s)he throws the dice  and if the obtained number is present between the numbers expected on the answer of the chalenge card, (s)he gains one point and can draw a Bonus Card (blue) to his hand."
        },
        lg
      ),
    r8: lg =>
      s(
        {
          pt: "\u2023  Ganha quem chegar a 7 pontos primeiro.",
          en: "\u2023  Whoever gets to 7 points wins first."
        },
        lg
      )
  },
  warms: {
    noEnoughtPlayers: lg =>
      s(
        {
          pt: "Precisamos de pelo menos 2 jogadores...",
          en: "We need at least 2 players..."
        },
        lg
      ),
    maxPlayers: lg =>
      s(
        {
          pt: "Precisamos de pelo menos 2 jogadores...",
          en: "We need at least 2 players..."
        },
        lg
      )
  },
  popup: {
    pause: lg =>
      s(
        {
          pt: "Pausar",
          en: "Pause"
        },
        lg
      ),
    start: lg =>
      s(
        {
          pt: "Iniciar",
          en: "Start"
        },
        lg
      ),
    startMatch: lg =>
      s(
        {
          pt: "Começar a Partida?",
          en: "Start Match?"
        },
        lg
      ),
    close: lg =>
      s(
        {
          pt: "Fechar",
          en: "Close"
        },
        lg
      ),
    leave: lg =>
      s(
        {
          pt: "Sair?",
          en: "Leave?"
        },
        lg
      ),
    play: lg =>
      s(
        {
          pt: "JOGAR",
          en: "PLAY"
        },
        lg
      ),
    endMatch: lg =>
      s(
        {
          pt: "Fim da Partida",
          en: "Game Over"
        },
        lg
      ),
    decrease: lg =>
      s(
        {
          pt: "Diminuir um Ponto?",
          en: "Decrease one point?"
        },
        lg
      ),
    increase: lg =>
      s(
        {
          pt: "Aumentar um Ponto?",
          en: "Increase one point?"
        },
        lg
      ),
    cancel: lg =>
      s(
        {
          pt: "Cancelar",
          en: "Cancel"
        },
        lg
      )
  },

  ingame: {
    dice: lg =>
      s(
        {
          pt: "Dado",
          en: "Dice"
        },
        lg
      ),
    playersTitle: lg =>
      s(
        {
          pt: "JOGADORES",
          en: "PLAYERS"
        },
        lg
      ),

    closeButton: lg =>
      s(
        {
          pt: "ENCERRAR PARTIDA",
          en: "CLOSE MATCH"
        },
        lg
      )
  },
  settings: {
    title: lg =>
      s(
        {
          pt: "Quem vai jogar?",
          en: "Who is going to play?"
        },
        lg
      ),
    subtitle: lg =>
      s(
        {
          pt: "Você pode cadastrar de 2 até 7 jogadores",
          en: "You can register from 2 up to 7 players"
        },
        lg
      ),
    addButton: lg =>
      s(
        {
          pt: "ADICIONAR NOVO JOGADOR",
          en: "ADD NEW PLAYER"
        },
        lg
      ),
    startButton: lg =>
      s(
        {
          pt: "INICIAR JOGO",
          en: "START GAME"
        },
        lg
      ),
    playerTitle: lg =>
      s(
        {
          pt: "Jogador ",
          en: "Player "
        },
        lg
      ),
    placeholderPlayer: lg =>
      s(
        {
          pt: "Digite o nome do Jogador...",
          en: "Type the player's name... "
        },
        lg
      )
  },
  home: {
    painel: lg =>
      s(
        {
          pt:
            "Este é o aplicativo de ajuda do GreaTest Game. Com ele voce pode conferir as regras do Jogo, contar os pontos de cada jogador e, ainda, pode utilizar um dado virtual! Divirta-se!",
          en:
            "This is the GreaTest Game helper application. With him you can check out the rules of the game, count the points of each player and you can also use a virtual dice! Have a good time!"
        },
        lg
      ),
    button: lg =>
      s(
        {
          pt: "Criar Novo Jogo",
          en: "Create New Game"
        },
        lg
      )
  }
};

export default strings;
