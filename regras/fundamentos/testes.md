# Testes, pressão e graus de sucesso

[Índice de regras](../README.md) · [Categoria](README.md) · [Criar personagem](../../referencias/criacao-de-personagem.md)

**Direção confirmada; aplicação provisória para playtest — 16/11/2026.** Esta versão substitui o teto de pressão, a proficiência pela metade e o pleno pela margem natural. [Registro e alcance](../../design/decisoes.md#2026-11-16--núcleo-de-dados-ajuda-e-sandbox).

## Rolagem e pressão

Declare intenção, abordagem, atributo e proficiência antes de rolar. O método precisa ser possível na situação; mudar apenas o nome da abordagem não altera a ação. O mestre anuncia a DT e os riscos perceptíveis.

**Resultado = d20 escolhido + bônus integral de proficiência + modificadores + dados de ajuda válidos.** O atributo fornece dados, nunca um bônus somado ao resultado. Some cada bônus uma vez.

Pressão significa urgência, perigo ou interferência real. Não reduz a proficiência, não aumenta a DT automaticamente e não exige uma etapa de cálculo própria. Condições concretas podem conceder desvantagens ou outros modificadores previstos. Não cobrar o mesmo impedimento duas vezes.

## Vantagens e desvantagens

Calcule **Q = base + vantagens − desvantagens**, cancelando vantagens e desvantagens uma a uma. Em testes de atributo, a base é seu valor; em ataques, a base é 1. Não há teto universal de acúmulo nesta versão; uma mesma fonte não conta várias vezes por ser descrita de modos diferentes.

| Q | Dados | Seleção |
|---:|---|---|
| −2 | 4d20 | Menor |
| −1 | 3d20 | Menor |
| 0 | 2d20 | Menor |
| 1 | 1d20 | Único |
| 2 | 2d20 | Maior |
| 3 | 3d20 | Maior |
| 4 | 4d20 | Maior |
| 5 | 5d20 | Maior |
| 6 ou mais | Q d20 | Maior |

Para Q ≤ 0, role **2 − Q** dados e escolha o menor. Atributo 0 sem modificadores usa o menor de 2d20; com uma vantagem usa 1d20. Atributo 3 com duas desvantagens usa 1d20. Os dados descartados não produzem naturais nem efeitos.

## Dificuldades de referência

| DT | Referência |
|---:|---|
| 5 | Muito fácil, raramente precisa de teste |
| 10 | Fácil |
| 15 | Moderada; referência central de aventura |
| 20 | Difícil |
| 25 | Muito difícil |
| 30 | Excepcional |

A DT pertence à tarefa e ao mundo; não escala automaticamente com a ficha. Falta de requisito indispensável não é resolvida por um 20. DTs próprias, como Analisar contra Defesa, permanecem específicas.

Sem risco ou incerteza relevante, resolva pela descrição e cobre o tempo ou recurso necessário. Treino, ferramenta e tempo podem permitir resolução automática. Quando há teste, o natural 1 ainda falha mesmo com bônus suficiente: não declarar garantia matemática ignorando essa regra.

Fora de combate, nova tentativa nas mesmas condições exige mudança relevante ou novo custo; não repetir rolagens até conseguir. Em combate, a repetição segue o procedimento abaixo, sem dispensar requisitos como nova pista para Analisar.

## Margem de pleno

**Pleno = resultado final ≥ DT +5**, em testes que não sejam ataques. A margem pessoal 20 − atributo foi substituída. Proficiência integral já é usada em toda rolagem; pleno não devolve bônus cortado.

## Graus de sucesso

| Resultado | Efeito |
|---|---|
| Falha | Não alcança a DT, ou natural 1; consequência coerente com a situação |
| Sucesso padrão | Alcança a DT, ou natural 20 numa ação possível |
| Pleno | Sucesso cujo total alcança DT +5; evita custos condicionais anunciados da abordagem ou traz benefício pertinente |

Pleno não elimina PA, materiais obrigatórios ou riscos explicitamente mantidos pela fonte. Não inventar uma punição depois do teste apenas porque o sucesso não foi pleno. Natural 20 abaixo de DT +5 não é pleno automático.

## Extremo

**Pendente.** A antiga regra vinculada a atributo 10 e às margens naturais não se aplica ao núcleo 0–5. Atributos acima de 5 continuam concedendo dados; extremo não está ativo neste playtest. Não criar benefícios por cada cinco pontos além do pleno.

## Naturais e testes opostos

O d20 escolhido determina os naturais: **1 falha; 20 sucede**, desde que a tentativa seja possível. Não aplicar o desastre do rascunho que permitia sucesso com 1. Em ataques, preservar também o crítico específico de +2 dano; pesado/brutal dependem do total contra Defesa +5/+10.

Em oposição, compare os totais; dois naturais 20 também comparam totais. **Pendente:** a prioridade dos naturais diferentes contra os totais adversários. A aprovação de 16/11 confirmou 1/20 gerais, mas não detalhou esse conflito; anunciar e registrar a arbitragem antes do teste. Priorizar 20 sobre rolagem comum é uma possibilidade para avaliar, não uma regra aprovada.

Igualdade de totais favorece o atacante/iniciador. Sem iniciador definido, preservar o desempate existente: maior máximo da Parte da Alma utilizada e, persistindo, nova rolagem entre empatados. A proposta de empate inconclusivo da v0.1 não foi escolhida expressamente. Esquivar preserva sua comparação estrita como regra específica; ver [defesas](../combate/defesas.md).

Em oposição elegível para Forçar, resolver a possibilidade de uma rerrolagem por participante antes das consequências. Se a primeira rerrolagem mudar o vencedor, o novo perdedor ainda pode Forçar caso não tenha usado sua vez. A rolagem do adversário fica mantida. Ataques e testes contra a morte não são elegíveis.

## Repetição de ações

**Aprovado para playtest — 16/11/2026.** A segunda execução da mesma ação mecânica no próprio turno sofre 1 desvantagem; a terceira, 2; e assim por diante. Cada ação tem sua contagem, mas todos os ataques compartilham a tag Agredir. Trocar o alvo ou renomear a mesma ação não reinicia a contagem. Reinicia no próximo turno próprio.

Aplicar a penalidade aos testes da ação repetida; uma ação sem teste não ganha custo extra ou rolagem só por ser repetida. Fora do próprio turno, não recebe nem avança esse contador. Continuação do mesmo turno com PA dobrados não reinicia contagens.

Leve preserva a exceção do primeiro ataque repetido; consultar [ataques](../combate/ataques-e-dano.md). Ajudar usa somente a redução d8 → d6 → d4, sem outra penalidade de repetição. Efeitos específicos continuam definindo frequência e requisitos. Ações com várias etapas não são contadas uma vez por dado: contar a execução da ação.
