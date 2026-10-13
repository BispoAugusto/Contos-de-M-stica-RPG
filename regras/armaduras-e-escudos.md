# Armaduras e escudos

**Provisório para playtest — aprovado em 2026-10-13, sujeito a revisão.** O catálogo inicial tem um modelo de cada categoria de armadura e um único escudo. São equipamentos de base para a ficha e as primeiras sessões.

## Armaduras e proficiência

A proficiência de armadura tem três níveis de acesso: **0 = leves, 1 = médias, 2 = pesadas**. Os valores da tabela são requisitos mínimos. Essa escala não concede os bônus numéricos das proficiências de testes. Na criação, 1 ponto compra um nível de acesso; escudos também estão entre as compras de [proficiência](proficiencias.md). O uso sem a proficiência em escudos ainda precisa ser definido.

| Modelo | Categoria | Proficiência mínima | RD por uso | Usos máximos |
|---|---|---|---|---|
| Armadura de couro | Leve | 0 | 2 | 3 |
| Cota de malha | Média | 1 | 3 | 3 |
| Armadura de placas | Pesada | 2 | 4 | 3 |

Os modelos iniciais não concedem bônus de Defesa nem impõem penalidades adicionais de movimento ou Destreza.

### Ativar a proteção

- Depois de conhecer o dano de um ataque recebido, pode gastar **1 uso da armadura, sem gastar PA**, para aplicar sua RD.
- Pode gastar **no máximo 1 uso por ataque recebido**. O uso protege contra todas as instâncias desse ataque, aplicando a RD separadamente a cada uma.
- O dano de cada instância pode chegar a **0**, nunca ficar negativo.
- Com os usos esgotados, a armadura continua vestida, mas não pode ativar sua RD.
- **Manutenção durante um descanso curto recupera os três usos.** Esta é a recuperação adotada neste playtest; substitui a formulação anterior “descanso curto ou manutenção”. Não há recuperação automática a cada combate.

### Exemplo com poucos PV

Pela fórmula de [combate](combate.md), Constituição 1 dá 8 PV antes de outros bônus. Um ataque que acertou e causa 5 de dano produz:

| Proteção escolhida | Dano recebido | PV restantes, começando com 8 |
|---|---|---|
| Nenhuma ativação | 5 | 3 |
| Couro, gastando 1 uso | 3 | 5 |
| Malha, gastando 1 uso | 2 | 6 |
| Placas, gastando 1 uso | 1 | 7 |

## Escudo básico

| Característica | Regra inicial |
|---|---|
| Empunhadura | Uma mão |
| Benefício constante | +1 na Defesa enquanto empunhado |
| Reação disponível | Defender |
| Custo de Defender | 1 PA |
| Proteção de Defender | RD 2 contra o ataque recebido |

A Defesa base continua **10 + Destreza**; com o escudo empunhado, fica **10 + Destreza + 1**, antes de outros modificadores. O bônus de Defesa permanece mesmo sem PA para Defender. A RD 2 exige a reação; não é uma redução passiva.

O escudo ocupa uma mão: com as duas mãos habituais, não é possível usá-lo simultaneamente com uma arma Pesada, duas Leves ou uma arma à distância que exija duas mãos. Uma Versátil pode ser usada com o escudo em sua modalidade de uma mão.

### Defender

**Reação básica disponível ao empunhar o escudo**, sem precisar aprender uma manobra separada.

1. Depois de conhecer o dano de um ataque que acertou, pode gastar **1 PA** para Defender, desde que não tenha usado Esquiva contra esse mesmo ataque.
2. Reduz em **2** o dano desse ataque. Só pode usar Defender **uma vez por ataque recebido**.
3. Pode Defender contra outros ataques enquanto houver PA e puder usar reações. Não possui uma reserva própria de usos como a armadura.
4. A redução se aplica separadamente a cada instância do ataque, com mínimo 0.
5. Pode combinar Defender com **uma ativação da armadura**: as reduções se somam, pagando **1 PA + 1 uso**.

Defender é uma reação defensiva, não um ataque. A condição Atordoado e demais impedimentos de reações continuam aplicáveis.

### Armadura e escudo juntos

Contra um ataque que acertou e causa **8 de dano**, usando malha:

| Escolha | Custo | RD aplicada | Dano recebido |
|---|---|---|---|
| Ativar apenas malha | 1 uso | 3 | 5 |
| Apenas Defender | 1 PA | 2 | 6 |
| Malha e Defender | 1 uso + 1 PA | 5 | 3 |

Placas e Defender somam **RD 6**. Contra um Golpe Devastador que cause 10 de dano, o personagem recebe **4**. O exemplo considera o ataque já acertado e os recursos disponíveis.

### Duas armas Leves

Um ataque com duas Leves tem duas instâncias, mas custa ao defensor **apenas 1 uso da armadura**, se a ativar, e **apenas 1 PA**, se usar Defender. Não se paga novamente pela segunda instância.

Exemplo: as instâncias causariam **3 e 1**. Couro (RD 2) reduz a primeira para **1** e a segunda para **0**, gastando um uso. Couro e Defender somam RD 4 e reduzem ambas a **0**, gastando um uso e um PA.

Isso preserva o procedimento de [armas](armas.md): bônus aplicáveis ficam na primeira instância; a segunda causa apenas seu dano básico antes da redução.

## Relação com outras defesas

- **Esquiva:** gasta 1 PA para aumentar a Defesa contra um ataque conforme o núcleo existente.
- **Defender:** usa o escudo e gasta 1 PA para reduzir dano após conhecer seu valor.

**Atualização aprovada para playtest em 2026-10-13:** Aparar foi removido. Contra cada ataque, o personagem escolhe **Esquiva ou Defender**, sendo necessário empunhar escudo para Defender. Não pode usar as duas reações contra o mesmo ataque, mesmo que Esquiva não evite o acerto.

A escolha vale para todas as instâncias do ataque: contra duas Leves, não pode Esquivar de uma instância e Defender da outra. Contra outro ataque, pode escolher novamente enquanto houver PA e puder reagir.

O **+1 de Defesa do escudo** é constante enquanto empunhado e continua valendo ao escolher Esquiva; não equivale a usar Defender. A ativação da **armadura** segue seu procedimento próprio e **armadura + Defender** continuam somando RD.

Exemplo: se o personagem usa Esquiva e ainda assim recebe o ataque, não pode gastar outro PA em Defender contra esse golpe. Pode ativar a armadura conforme as regras de proteção. Se sofrer outro ataque, poderá optar por Defender, desde que tenha escudo, PA e possa reagir.

## Ficha e progressão

Na ficha, registrar **proficiência de armadura, modelo, RD e usos restantes**, além do escudo e sua reação. Exemplo: “Proficiência 1; malha, RD 3, usos □ □ □; escudo, Defesa +1; Defender: 1 PA, RD 2”.

Durante campanhas, personagens poderão melhorar armaduras ou adquirir versões superiores. Novos escudos também poderão ampliar o catálogo. Essa direção de progressão está aprovada; custos, efeitos, limites e novos modelos ainda não foram definidos. O primeiro playtest usa somente os quatro modelos acima.

## Intenção de design e pontos de atenção

O mundo deve ser perigoso: pessoas comuns desprotegidas podem cair com um golpe, e personagens com poucos PV também correm esse risco. A proteção forte é intencional e se aplica igualmente a inimigos que tenham esses equipamentos.

A RD limita o dano de ataques comuns, mas golpes concentrados e o esgotamento de usos/PA preservam a ameaça. Testar a frequência de manutenção, a pressão de vários ataques, a sobrevivência antes de Ferido e a eficácia de Leves contra proteção. Ver [plano de playtests](../planejamento/playtests.md). Estes exemplos são aritméticos; não são resultados de sessões.
