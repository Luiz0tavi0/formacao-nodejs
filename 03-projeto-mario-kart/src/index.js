const player1 = {
  NOME: 'Mario',
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0
}
const player2 = {
  NOME: 'Luigi',
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0
}

async function roolDice() {
  return Math.ceil(Math.random() * 6);
}
async function getRandonBlock() {
  let random = Math.random();
  let result
  switch (true) {
    case (random < 1.0 / 3):
      result = 'RETA'
      break;
    case (random < 2.0 / 3):
      result = 'CURVA'
      break;
    default:
      result = 'CONFRONTO';
  }
  return result;

}
async function logRowResult(
  characterName, block, diceResult, attribute
) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`
  )

}
async function placeRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // sortear bloco
    let diceResult1 = await roolDice();
    let diceResult2 = await roolDice();

    let block = await getRandonBlock();
    console.log(`Bloco: ${block}`);

    //teste de habilidade
    let totalTestSkill1 = 0
    let totalTestSkill2 = 0

    if (block === 'RETA') {
      totalTestSkill1 = character1.VELOCIDADE + diceResult1
      totalTestSkill2 = character2.VELOCIDADE + diceResult2
      await logRowResult(character1.NOME, 'velocidade', diceResult1, character1.VELOCIDADE)
      await logRowResult(character2.NOME, 'velocidade', diceResult2, character2.VELOCIDADE)
    }

    if (block === 'CURVA') {
      totalTestSkill1 = character1.MANOBRABILIDADE + diceResult1
      totalTestSkill2 = character2.MANOBRABILIDADE + diceResult2
      await logRowResult(character1.NOME, 'manobrabilidade', diceResult1, character1.MANOBRABILIDADE)
      await logRowResult(character2.NOME, 'manobrabilidade', diceResult2, character2.MANOBRABILIDADE)
    }
    if (block === 'CONFRONTO') {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;
      console.log(`${character1.NOME} confrontou ${character2.NOME}! 🥊`);
      logRowResult(
        character1.NOME,
        'poder',
        diceResult1,
        character1.PODER
      )
      logRowResult(
        character2.NOME,
        'poder',
        diceResult2,
        character2.PODER
      )
      if (powerResult2 === powerResult1)
        console.log("Confronto empatado! Nenhum ponto foi perdido");
      else {
        const damageRound = Math.ceil(Math.random() * 2);
        const emojiRepresentation = (damageRound === 1) ? '🐢' : '💣';
        const winner = (powerResult1 > powerResult2) ? character1 : character2;
        const loser = (powerResult1 < powerResult2) ? character1 : character2;

        const efectiveDamage = Math.max(0, loser.PONTOS - damageRound);
        loser.PONTOS -= efectiveDamage;

        console.log(
          `${winner.NOME} venceu o confronto! ${loser.NOME} perdeu ${efectiveDamage} ponto ${emojiRepresentation}`
        );
        winner.PONTOS++;
        console.log(`${winner.NOME} marcou um ponto`);
      }

    }
    console.log('_______________________________________________________');
  }
}
async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);
  if (character1.PONTOS > character2.PONTOS)
    console.log(`${character1.NOME} venceu a corrida! Parabéns! 🎉`);
  else if (character2.PONTOS > character1.PONTOS)
    console.log(`${character2.NOME} venceu a corrida! Parabéns! 🎉`);
  else
    console.log("A corrida terminou em empate.");
}

(async function main() {
  console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);
  await placeRaceEngine(player1, player2);
  await declareWinner(player1, player2);

})()