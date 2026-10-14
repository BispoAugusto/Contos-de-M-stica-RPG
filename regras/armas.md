# Armas e construção modular

**Modelo modular provisório para playtest — registro de 2026-10-13; testes, repetição e duas Leves atualizados por aprovação em 2026-10-14.** Estas são regras iniciais aprovadas para teste, sujeitas a revisão de valores, combinações e procedimentos. Pendências explícitas não são regras aprovadas.

## Base e montagem

- Uma arma construída pelo modelo modular começa com **2 de dano fixo e 2 espaços de propriedades**. **Desarmado é uma exceção: dano base 0**; sua relação com espaços e propriedades ainda está pendente.
- Em um acerto, some ao dano-base **+1 por cada 5 pontos completos de margem sobre a Defesa**, o crítico natural selecionado **+2** e os demais efeitos aplicáveis já existentes. **Atributos e proficiência não somam dano diretamente por padrão**; habilidades ou regras específicas podem abrir exceções. Ver [combate](combate.md).
- O **tipo da arma define sua proficiência**, dentro dos grupos de armas de [atributos e testes](atributos-e-testes.md). Propriedades não substituem essa escolha.
- **Cortante, Perfurante e Contundente** são tipos de dano, sem efeitos passivos automáticos. Servem para interações com resistências, vulnerabilidades e requisitos de habilidades ou manobras; não se confundem com o tipo/grupo usado para proficiência.
- Cada propriedade custa **1 espaço**, exceto **Munição**, que é gratuita em espaços quando aplicável.
- Monte a arma a partir da base e das propriedades escolhidas. **Leve reduz a base em 1; Versátil acrescenta 1 com duas mãos; Pesada acrescenta 2 e exige duas mãos.** Para a base comum 2, resultam em 1, 2/3 e 4. Não substituem por valores fixos a base de armas naturais ou especiais. Potente e Recarregar também acrescentam dano.
- Não há aprovação de repetição de uma mesma propriedade, de novos espaços ou de restrições adicionais de combinação além das registradas abaixo. Casos não cobertos ficam em [pendências](../design/pendencias.md).

## Famílias de armas e proficiências

**Lista aprovada para playtest em 2026-10-13:** Espadas, Machados, Martelos, Adagas, Armas de Haste, Arcos, Bestas, Armas de Fogo, Correntes e Chicotes, e Desarmado.

Escolha a família antes das propriedades; ela determina a proficiência usada. As propriedades definem o perfil da arma, sem trocar sua família. “Correntes e Chicotes” é a identificação provisória de uma única família: **Armas Flexíveis** foi sugerido como nome, mas ainda não foi aprovado. A lista não inclui Fundas nem concede propriedades automáticas pelo nome da família.

## Desarmado

**Provisório para playtest — aprovado em 2026-10-13.**

- Golpes desarmados comuns têm **dano base 0**. Um acerto simples sem bônus pode causar 0 de dano.
- Recebem **+1 de dano a cada 5 pontos completos acima da Defesa**, como os demais ataques.
- O **crítico natural concede +2 de dano**, somado ao bônus por margem quando houver.
- **Armas naturais ou habilidades de pugilista podem conceder dano ao golpe desarmado.** Arma Natural tem base 1; Arma Natural Avançada tem base igual ao nível de Desarmado, mínimo 1, e uma propriedade corpo a corpo. Ver [traços de Corpo](origens-e-tracos.md#corpo), incluindo os campos ainda propostos. Habilidades de pugilista continuam pendentes.
- O ataque desarmado segue o custo básico de **1 PA** e a penalidade de ataques consecutivos do [combate](combate.md). O dano resultante segue as reduções aplicáveis.

| Margem de um ataque que acertou | Dano com base 0, sem crítico e sem outros bônus |
|---|---|
| 0–4 acima da Defesa | 0 |
| 5–9 acima da Defesa | 1 |
| 10–14 acima da Defesa | 2 |
| 15–19 acima da Defesa | 3 |

**Exemplo:** resultado natural selecionado 20, atributo 0 e proficiência +2, resultado total 22 contra Defesa 17: margem 5 dá +1 e o crítico dá +2. O golpe desarmado comum causa **0 + 1 + 2 = 3** antes de RD.

A adoção de dano base 0 não concede automaticamente propriedades Leve/Pesada, dois espaços ou o ataque combinado das armas Leves. A propriedade escolhida em Arma Natural Avançada é uma exceção expressa; empunhadura, espaços, combinação de duas armas naturais e habilidades de pugilista ainda precisam ser detalhados em [pendências](../design/pendencias.md).

## Corpo a corpo

| Propriedade | Espaços | Regra inicial |
|---|---|---|
| Leve | 1 | −1 de dano básico (base comum 2 resulta em 1). Uma Leve em cada mão permite sequência 0, 0, −5, −10 (seguintes −10) e ataque combinado de uma instância; ver procedimento abaixo. |
| Versátil | 1 | +1 de dano com duas mãos; sem alteração com uma mão (base comum: 2/3). |
| Pesada | 1 | +2 de dano (base comum 2 resulta em 4); exige duas mãos. Permite usar Golpe Devastador. |
| Alcance | 1 | Permite ataques corpo a corpo contra alvos na distância Curta, em vez de apenas Toque. |
| Impacto | 1 | +1 de dano ao realizar um Golpe Pesado. Não aumenta o dano de todos os ataques. |
| Furtiva | 1 | Concede 1 Vantagem em testes para esconder ou ocultar a arma; não dá bônus automático em ataques furtivos. |
| Arremessável | 1 | Permite arremessar a arma contra um alvo até a distância Média. |

**Leve, Versátil e Pesada são mutuamente exclusivas:** uma arma não combina essas propriedades entre si.

### Duas armas leves

**Confirmado em 2026-10-14; substitui o procedimento anterior de duas instâncias.**

O personagem precisa empunhar **duas armas Leves, uma em cada mão**. Por **1 PA**, realiza **uma única rolagem de ataque**. Se acertar, o dano-base do ataque combinado é:

**Dano-base da arma principal + metade do dano-base da arma secundária, arredondada para cima.**

Use as bases das armas já com suas propriedades. Acrescente os modificadores do ataque depois de formar essa base combinada:

| Componente | Aplicação no ataque combinado |
|---|---|
| Base da principal | Integral |
| Base da secundária | Metade, arredondada para cima |
| Margem sobre a Defesa | +1 por cada 5 pontos completos, uma vez |
| Crítico natural selecionado | +2, uma vez |
| Ataque Pesado/Brutal, habilidades, manobras e outros modificadores aplicáveis | Uma vez, conforme o texto de cada efeito |
| Atributo e proficiência | Não somam dano diretamente por padrão |
| RD | Uma vez sobre o dano total, com mínimo 0 |

O conjunto é **uma única instância de dano** e conta como **um ataque** na sequência. Empunhando uma Leve em cada mão, as penalidades dos ataques no turno são **0, 0, −5, −10**, com −10 nos seguintes. Ataques extras gratuitos contam normalmente, salvo texto específico.

**Exemplo com armadura:** duas adagas têm base 1 cada. A base combinada é **1 + metade de 1 arredondada para cima = 2**. Com margem 5, recebe +1; se o d20 selecionado também for um 20 natural, soma +2 uma vez, totalizando **5** antes de RD.

| Proteção ativada contra esse ataque | Cálculo | Dano recebido |
|---|---|---|
| Couro (RD 2), 1 uso | 5 − 2 | 3 |
| Couro + Defender (RD 4), 1 uso e 1 PA | 5 − 4 | 1 |
| Placas + Defender (RD 6), 1 uso e 1 PA | máximo entre 0 e 5 − 6 | 0 |

**Exemplo apenas aritmético de bases diferentes:** principal 2 e secundária 3 dão base combinada **2 + 2 = 4**. Isso não aprova valores nem progressão de armas especiais/mágicas. Bônus de margem ou crítico não são incluídos na base da secundária para depois serem somados novamente.

Armadura e Defender mantêm seus custos, usos e a escolha exclusiva entre Esquiva e Defender, conforme [armaduras e escudos](armaduras-e-escudos.md). O ataque combinado não concede dois acertos nem dois gatilhos de crítico.

**Limites do registro:** Ataque Pesado/Brutal aparece nos documentos anteriores como Golpe Pesado/Brutal; a nomenclatura e os gatilhos completos permanecem pendentes. Preservar os efeitos já registrados, inclusive Impacto, sem criar novos limiares ou confundir com **Golpe Devastador**, que exige Pesada. A implementação de Vantagem está em [atributos e testes](atributos-e-testes.md). Não foi aprovada divisão do ataque combinado entre alvos nem extensão automática a armas naturais; ver [pendências](../design/pendencias.md).

## Distância

A arma à distância padrão usa **duas mãos**, tem **alcance Médio** e parte dos mesmos **2 de dano e 2 espaços**. Usa **Munição** quando aplicável.

| Propriedade | Espaços | Regra inicial |
|---|---|---|
| Munição | 0 | Usa munição quando aplicável. É gratuita em espaços, não em aquisição: munições precisam ser compradas ou fabricadas. |
| Compacta | 1 | Dano 1 e uso com uma mão. **Proibida em arcos.** |
| Potente | 1 | +1 dano; exige duas mãos. |
| Recarregar | 1 | +2 dano; depois de cada tiro, exige recarga de 1 PA antes de outro disparo. |
| Estendida | 1 | Alcance Longo. |

A proibição específica por tipo aprovada é **Compacta em arcos**. Não acrescentar outras proibições por analogia. A interação entre Compacta (uma mão) e Potente (duas mãos) precisa de esclarecimento; não há prioridade entre seus requisitos aprovada neste registro.

### Exemplos de montagem e PA

- **Versátil + Alcance:** 2 espaços; dano 2 com uma mão ou 3 com duas. Ataca corpo a corpo até Curta.
- **Pesada + Impacto:** 2 espaços; dano 4 com duas mãos. Impacto acrescenta +1 ao realizar um Golpe Pesado, não a todo acerto.
- **Potente + Recarregar:** 2 espaços, Munição sem ocupar espaço, duas mãos, alcance Médio e dano **2 + 1 + 2 = 5**.
- **Recarregar + Estendida:** 2 espaços, dano **2 + 2 = 4**, duas mãos e alcance Longo.

Com Potente + Recarregar já carregada: **atirar (1 PA), recarregar (1 PA), atirar (1 PA)** permite dois tiros, totalizando 10 de dano base **se ambos acertarem**. Resta 1 PA, que pode ser usado para recarregar novamente; depois do segundo tiro a arma precisa de recarga para voltar a disparar. O segundo tiro continua sujeito à penalidade de ataques consecutivos: recarregar não reinicia a contagem.

## Combate e intenção de design

O ataque básico continua custando **1 PA**, inclusive com Pesada. O gasto adicional para concentrar dano vem de [Golpe Devastador](manobras.md), não de um aumento automático no custo de atacar com armas pesadas.

Aplicar as sequências numéricas **0, −5, −10, −10** e, com uma Leve em cada mão, **0, 0, −5, −10**, mantendo −10 nos seguintes, conforme [combate](combate.md). A intenção é favorecer a fantasia de leves com mais golpes e pesadas com poucos golpes fortes, usando manobras e futuras habilidades. Essa intenção não cria ataques gratuitos, limite de ataques com Pesada ou habilidades ainda não aprovadas.

Armas Potente + Recarregar devem poder ser fortes: recarga e obtenção de munição fazem parte da fantasia aprovada. Isso não demonstra equilíbrio por si só. Comparar dano efetivo, acertos, PA disponíveis para defesa e desempenho em várias rodadas, conforme o [plano de playtests](../planejamento/playtests.md).

## Esclarecimento de propriedades — 2026-10-13

Os valores 1/2–3/4 são exemplos sobre a base comum 2, não valores absolutos impostos por Leve/Versátil/Pesada. Para armas naturais, o dano básico mínimo 1 vale após Leve, antes de RD; dano recebido ainda pode ser 0. Não estender automaticamente esse piso a todas as fontes de dano. Compacta mantém sua redação própria até esclarecer sua interação com bases especiais.
