# Armas e construção modular

**Provisório para playtest — registro de 2026-10-13.** Estas são regras iniciais aprovadas para teste, sujeitas a revisão de valores, combinações e procedimentos. Pendências explícitas não são regras aprovadas.

## Base e montagem

- Uma arma começa com **2 de dano fixo e 2 espaços de propriedades**.
- O **tipo da arma define sua proficiência**, dentro dos grupos de armas de [atributos e testes](atributos-e-testes.md). Propriedades não substituem essa escolha.
- Cada propriedade custa **1 espaço**, exceto **Munição**, que é gratuita em espaços quando aplicável.
- Monte a arma a partir da base e das propriedades escolhidas. Valores como Leve 1, Versátil 2/3 e Pesada 4 substituem o dano base; Potente e Recarregar acrescentam dano.
- Não há aprovação de repetição de uma mesma propriedade, de novos espaços ou de restrições adicionais de combinação além das registradas abaixo. Casos não cobertos ficam em [pendências](../design/pendencias.md).

## Corpo a corpo

| Propriedade | Espaços | Regra inicial |
|---|---|---|
| Leve | 1 | Dano 1. Duas armas leves podem participar de um ataque único com duas instâncias de dano; ver procedimento abaixo. |
| Versátil | 1 | Dano 2 com uma mão ou 3 com duas mãos. |
| Pesada | 1 | Dano 4; exige duas mãos. Permite usar Golpe Devastador. |
| Alcance | 1 | Incluída no conjunto aprovado; efeito exato pendente de recuperação das decisões anteriores. |
| Impacto | 1 | Incluída no conjunto aprovado; efeito exato pendente de recuperação das decisões anteriores. |
| Furtiva | 1 | Incluída no conjunto aprovado; efeito exato pendente de recuperação das decisões anteriores. |
| Arremessável | 1 | Incluída no conjunto aprovado; efeito exato pendente de recuperação das decisões anteriores. |

**Leve, Versátil e Pesada são mutuamente exclusivas:** uma arma não combina essas propriedades entre si.

### Duas armas leves

O núcleo aprovado é **um único ataque com duas armas leves e duas instâncias de dano**, uma por arma, de dano base 1 cada. O custo do ataque básico é 1 PA, e esse ataque conta uma vez para a penalidade de ataques consecutivos.

O histórico acessível não contém o procedimento completo anteriormente discutido. A aplicação de bônus de margem, crítico, outros bônus, redução de dano e efeitos por acerto às duas instâncias precisa ser recuperada antes de fechar a redação. Não presumir duplicação de bônus nem fundir as instâncias em um único dano 2. O número de rolagens e a escolha de alvos também precisam ser recuperados; “ataque único” não resolve por si só esses detalhes.

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

- **Versátil + Alcance:** 2 espaços; dano 2 com uma mão ou 3 com duas. O efeito de Alcance continua pendente de recuperação.
- **Pesada + Impacto:** 2 espaços; dano 4 com duas mãos. O efeito de Impacto não foi quantificado neste registro.
- **Potente + Recarregar:** 2 espaços, Munição sem ocupar espaço, duas mãos, alcance Médio e dano **2 + 1 + 2 = 5**.
- **Recarregar + Estendida:** 2 espaços, dano **2 + 2 = 4**, duas mãos e alcance Longo.

Com Potente + Recarregar já carregada: **atirar (1 PA), recarregar (1 PA), atirar (1 PA)** permite dois tiros, totalizando 10 de dano base **se ambos acertarem**. Resta 1 PA, que pode ser usado para recarregar novamente; depois do segundo tiro a arma precisa de recarga para voltar a disparar. O segundo tiro continua sujeito à penalidade de ataques consecutivos: recarregar não reinicia a contagem.

## Combate e intenção de design

O ataque básico continua custando **1 PA**, inclusive com Pesada. O gasto adicional para concentrar dano vem de [Golpe Devastador](manobras.md), não de um aumento automático no custo de atacar com armas pesadas.

Manter **−1d20 por ataque consecutivo**, conforme [combate](combate.md). A intenção é favorecer a fantasia de leves com mais golpes e pesadas com poucos golpes fortes, usando manobras e futuras habilidades. Essa intenção não cria ataques gratuitos, limite de ataques com Pesada ou habilidades ainda não aprovadas.

Armas Potente + Recarregar devem poder ser fortes: recarga e obtenção de munição fazem parte da fantasia aprovada. Isso não demonstra equilíbrio por si só. Comparar dano efetivo, acertos, PA disponíveis para defesa e desempenho em várias rodadas, conforme o [plano de playtests](../planejamento/playtests.md).
