# Tipos de dano e aplicação de RD

[Índice de regras](../README.md) · [Categoria](README.md) · [Criar personagem](../../referencias/criacao-de-personagem.md)

**Confirmado — 2026-10-19.** São dez tipos:

| Grupo | Tipos |
|---|---|
| Físicos | Contundente, Perfurante e Cortante |
| Demais | Fogo, Frio, Eletricidade, Ácido, Veneno, Profano e Radiante |

**RD física** cobre os três físicos. **RD específica** cobre somente o tipo descrito. **RD geral** cobre os dez. RD de Veneno não implica imunidade à condição Envenenado.

Armaduras básicas têm valores independentes de RD Cortante, Perfurante e Contundente, conforme a distribuição escolhida; não possuem RD uniforme contra todos os físicos. O escudo básico mantém sua RD física 2 ao Bloquear. Escamas de Draconato têm RD geral 1 limitada por usos; a origem Dracônicos tem RD elemental 2 passiva, no elemento escolhido entre Fogo, Frio, Eletricidade, Ácido e Veneno. Profano/Radiante não foram adicionados às escolhas dracônicas.

## Ordem e dano misto

1. Resolva resistências e reduções indicadas pelo efeito (por exemplo, metade em um sucesso).
2. Aplique RD compatível a cada componente. Excesso de RD de um tipo não migra para outro.
3. Aplique RD geral **uma vez por instância** sobre o dano restante.
4. Dano mínimo 0.

Ter dois tipos de dano não cria duas instâncias. O ataque combinado de duas Leves é uma instância. Ataques expressamente com múltiplas instâncias preservam a aplicação por instância e a RD passiva de armadura e a cobertura de uma reação ao ataque inteiro; proteções especiais com usos mantêm seus próprios limites.

Exemplo: uma instância de **4 cortante + 2 Fogo**, armadura leve com Cortante 2 / Perfurante 1 / Contundente 0:
- Só armadura: recebe 2 cortante + 2 Fogo = 4.
- Só resistência ao Fogo 2: recebe 4 cortante = 4.
- Armadura e resistência ao Fogo: recebe 2 cortante = 2.
- Somente Escamas gerais 1: recebe 5 no total.

Armadura convencional e Escamas/natural são alternativas por ocorrência; não somar ambas. A proteção escolhida pode combinar com resistência elemental e Bloquear compatível, pagando custos.

Pode escolher Bloquear mesmo com RD incompatível, mas gasta o PA sem redução daquele componente. O mesmo vale para um uso de proteção especial, como Escamas; armadura convencional não gasta usos. O jogador conhece sua RD e deve ter indícios do tipo do ataque. Ver [armaduras e escudos](../equipamentos/armaduras-e-escudos.md).

## Atualização de 2026-10-25

Armaduras convencionais têm RD passiva distribuída entre os três tipos físicos: leve 2/1/0, média 3/2/1, pesada 4/3/2. Para cada componente do dano, aplicar apenas o valor atribuído àquele tipo; RD 0 não reduz. As antigas tabelas de RD uniforme foram substituídas. O [ataque à Abertura parcial](aberturas.md) reduz a RD efetiva à metade para cima, salvo 1→0. [Exposto](condicoes.md#exposto) faz todo ataque ignorar completamente a RD, de qualquer fonte, sem direcionamento. Para um único tipo, combinar fontes compatíveis antes de calcular a metade; dano misto com RD geral ainda precisa de detalhamento operacional.
