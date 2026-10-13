# Armas e construção modular

**Provisório para playtest — registro de 2026-10-13.** Estas são regras iniciais aprovadas para teste, sujeitas a revisão de valores, combinações e procedimentos. Pendências explícitas não são regras aprovadas.

## Base e montagem

- Uma arma construída pelo modelo modular começa com **2 de dano fixo e 2 espaços de propriedades**. **Desarmado é uma exceção: dano base 0**; sua relação com espaços e propriedades ainda está pendente.
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

**Exemplo:** resultado natural selecionado 20, proficiência +2, resultado total 22 contra Defesa 17: margem 5 dá +1 e o crítico dá +2. O golpe desarmado comum causa **0 + 1 + 2 = 3** antes de RD.

A adoção de dano base 0 não concede automaticamente propriedades Leve/Pesada, dois espaços ou o ataque com duas instâncias das armas Leves. A propriedade escolhida em Arma Natural Avançada é uma exceção expressa; empunhadura, espaços, duas instâncias naturais e habilidades de pugilista ainda precisam ser detalhados em [pendências](../design/pendencias.md).

## Corpo a corpo

| Propriedade | Espaços | Regra inicial |
|---|---|---|
| Leve | 1 | −1 de dano básico (base comum 2 resulta em 1). Duas armas leves podem participar de um ataque único com duas instâncias de dano; ver procedimento abaixo. |
| Versátil | 1 | +1 de dano com duas mãos; sem alteração com uma mão (base comum: 2/3). |
| Pesada | 1 | +2 de dano (base comum 2 resulta em 4); exige duas mãos. Permite usar Golpe Devastador. |
| Alcance | 1 | Permite ataques corpo a corpo contra alvos na distância Curta, em vez de apenas Toque. |
| Impacto | 1 | +1 de dano ao realizar um Golpe Pesado. Não aumenta o dano de todos os ataques. |
| Furtiva | 1 | Concede 1 Vantagem em testes para esconder ou ocultar a arma; não dá bônus automático em ataques furtivos. |
| Arremessável | 1 | Permite arremessar a arma contra um alvo até a distância Média. |

**Leve, Versátil e Pesada são mutuamente exclusivas:** uma arma não combina essas propriedades entre si.

### Duas armas leves

O personagem precisa empunhar **duas armas Leves, uma em cada mão**. Por **1 PA**, realiza **um único teste de ataque**. Se acertar, causa **duas instâncias separadas de dano**, uma por arma. O conjunto conta como **um ataque** para a penalidade de ataques consecutivos de −1d20.

| Componente | Primeira instância | Segunda instância |
|---|---|---|
| Dano básico | Dano básico da primeira arma | Dano básico da segunda arma |
| Bônus de Golpe Pesado/Brutal | Aplica | Não aplica |
| Bônus de crítico | Aplica | Não aplica |
| Bônus de manobras aplicáveis | Aplica | Não aplica |
| Outros bônus de dano | Aplicam-se normalmente | Não se aplicam por padrão |
| RD da armadura | Aplicada separadamente | Aplicada separadamente |

A segunda instância causa **somente o dano básico da segunda arma**, inclusive se a primeira receber crítico. Leves comuns têm dano básico 1; versões especiais ou mágicas podem ter valores superiores. Isso não define valores ou progressão de armas mágicas.

**Exemplo com armadura:** duas adagas têm dano básico 1 cada. A primeira recebe +2 em bônus aplicáveis e chega a 3; a segunda permanece em 1. Contra RD 1 aplicada às instâncias (exemplo aritmético; os modelos iniciais de armadura têm RD 2/3/4):

| Instância | Cálculo | Dano recebido |
|---|---|---|
| Primeira | 3 − 1 | 2 |
| Segunda | 1 − 1 | 0 |
| **Total** | 2 + 0 | **2** |

A aplicação separada de RD é intencional: Leves devem funcionar melhor contra alvos sem proteção, enquanto dano concentrado tem vantagem contra RD. A armadura continua seguindo seu procedimento de ativação e usos limitados em [combate](combate.md); este exemplo não transforma sua RD em proteção permanente. Um único uso cobre as duas instâncias; Defender com escudo também custa um único PA pelo ataque inteiro e pode somar sua RD à armadura. O dano de cada instância tem mínimo 0; ver [armaduras e escudos](armaduras-e-escudos.md).

Habilidades futuras poderão permitir crítico, Golpe Pesado ou outros efeitos na segunda instância, mas **nenhuma dessas habilidades foi aprovada aqui**. Testar especialmente armas mágicas, bônus de dano e efeitos que modifiquem o segundo golpe.

**Limites do registro:** a nomenclatura e os gatilhos completos de Golpe Pesado/Brutal e a implementação de 1 Vantagem precisam ser alinhados ao núcleo existente. Não confundir **Golpe Pesado** com a manobra **Golpe Devastador** nem criar uma nova transição de dados para Vantagem. A possibilidade de dividir as instâncias entre alvos não foi definida; não deduzir essa permissão.

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

Manter **−1d20 por ataque consecutivo**, conforme [combate](combate.md). A intenção é favorecer a fantasia de leves com mais golpes e pesadas com poucos golpes fortes, usando manobras e futuras habilidades. Essa intenção não cria ataques gratuitos, limite de ataques com Pesada ou habilidades ainda não aprovadas.

Armas Potente + Recarregar devem poder ser fortes: recarga e obtenção de munição fazem parte da fantasia aprovada. Isso não demonstra equilíbrio por si só. Comparar dano efetivo, acertos, PA disponíveis para defesa e desempenho em várias rodadas, conforme o [plano de playtests](../planejamento/playtests.md).

## Esclarecimento de propriedades — 2026-10-13

Os valores 1/2–3/4 são exemplos sobre a base comum 2, não valores absolutos impostos por Leve/Versátil/Pesada. Para armas naturais, o dano básico mínimo 1 vale após Leve, antes de RD; dano recebido ainda pode ser 0. Não estender automaticamente esse piso a todas as fontes de dano. Compacta mantém sua redação própria até esclarecer sua interação com bases especiais.
