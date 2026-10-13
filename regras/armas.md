# Armas e construção modular

**Provisório para playtest — registro de 2026-10-13.** Estas são regras iniciais aprovadas para teste, sujeitas a revisão de valores, combinações e procedimentos. Pendências explícitas não são regras aprovadas.

## Base e montagem

- Uma arma começa com **2 de dano fixo e 2 espaços de propriedades**.
- O **tipo da arma define sua proficiência**, dentro dos grupos de armas de [atributos e testes](atributos-e-testes.md). Propriedades não substituem essa escolha.
- **Cortante, Perfurante e Contundente** são tipos de dano, sem efeitos passivos automáticos. Servem para interações com resistências, vulnerabilidades e requisitos de habilidades ou manobras; não se confundem com o tipo/grupo usado para proficiência.
- Cada propriedade custa **1 espaço**, exceto **Munição**, que é gratuita em espaços quando aplicável.
- Monte a arma a partir da base e das propriedades escolhidas. Valores como Leve 1, Versátil 2/3 e Pesada 4 substituem o dano base; Potente e Recarregar acrescentam dano.
- Não há aprovação de repetição de uma mesma propriedade, de novos espaços ou de restrições adicionais de combinação além das registradas abaixo. Casos não cobertos ficam em [pendências](../design/pendencias.md).

## Corpo a corpo

| Propriedade | Espaços | Regra inicial |
|---|---|---|
| Leve | 1 | Dano 1. Duas armas leves podem participar de um ataque único com duas instâncias de dano; ver procedimento abaixo. |
| Versátil | 1 | Dano 2 com uma mão ou 3 com duas mãos. |
| Pesada | 1 | Dano 4; exige duas mãos. Permite usar Golpe Devastador. |
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

**Exemplo com armadura:** duas adagas têm dano básico 1 cada. A primeira recebe +2 em bônus aplicáveis e chega a 3; a segunda permanece em 1. Contra RD 1 aplicada às instâncias:

| Instância | Cálculo | Dano recebido |
|---|---|---|
| Primeira | 3 − 1 | 2 |
| Segunda | 1 − 1 | 0 |
| **Total** | 2 + 0 | **2** |

A aplicação separada de RD é intencional: Leves devem funcionar melhor contra alvos sem proteção, enquanto dano concentrado tem vantagem contra RD. A armadura continua seguindo seu procedimento de ativação e usos limitados em [combate](combate.md); este exemplo não transforma sua RD em proteção permanente.

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
