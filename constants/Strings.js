const s = (st, lg) => {
  return lg === "pt" ? st.pt : st.en;
};

const strings = {
  popup: {
    start: lg =>
      s(
        {
          pt: "Iniciar",
          en: "Start"
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
      )
  },

  ingame: {
    playersTitle: lg =>
      s(
        {
          pt: "JOGADORES?",
          en: "PLAYERS?"
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
