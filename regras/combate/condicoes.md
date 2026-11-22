# Condições

[Índice de regras](../README.md) · [Categoria](README.md) · [Criar personagem](../../jogador/criacao-de-personagem.md)

## Estado das regras

Caído, Agarrado, Imobilizado e Atordoado, seus procedimentos abaixo e a interação com Equilíbrio podem ser revistos após discussão e testes. A aprovação permite usar esta versão; não a torna definitiva.

a 0 PV ou menos, entra em Morrendo, não age e mantém PV negativos. Resistir não restaura 1 PV. A primeira cura normal remove Ferido sem recuperar PV nem encerrar Sangramento; outra cura pode fazê-lo. Procedimento médico e retorno de Morrendo seguem [morte e recuperação](../recuperacao/morte-e-recuperacao.md), com as pendências ali identificadas.

A condição **Caído** significa estar no chão; não significa, por si só, estar inconsciente ou a 0 PV.

## Condições de combate — versão para playtest

| Condição | Efeito | Saída |
|---|---|---|
| Caído | −2 nos próprios ataques corpo a corpo; ataques corpo a corpo contra você recebem +2. Rastejar permite deslocamento Curto por 1 PA. | Levantar por 1 PA, sem teste, se nada impedir. |
| Agarrado | Não pode se deslocar por conta própria. Pode continuar atacando e usando suas defesas. O agarrador mantém uma mão ou membro apropriado ocupado. | Gastar 1 PA para tentar escapar; também termina se for solto ou se a ligação física for rompida. |
| Imobilizado | Não pode se deslocar nem levantar; −2 nos próprios ataques e +2 nos ataques recebidos. Não elimina automaticamente todas as reações. | Depende da origem: escapar da contenção, romper amarras, destruir uma teia etc. |
| Atordoado | No início do próximo turno, renova os PA normalmente e desconta até 2, mínimo 0. Não pode reagir até esse início. Depois, age com o saldo restante. | Termina quando essa redução é aplicada. |
| Exposto | Abertura total: todo ataque contra o alvo ignora completamente sua RD, sem precisar ser direcionado. | Duração e saída dependem da habilidade ou situação que aplicou; sem duração universal definida. |

### Caído

- Levantar não provoca Ataque de Oportunidade por padrão. O gatilho atual dessa manobra é sair do alcance da arma.
- Proteção contra ataques à distância não integra esta versão; sua inclusão fica para discussão.
- Estar Caído não impede por si só usar outras ações e habilidades.

### Agarrado e Imobilizado

Ao começar seu turno, quem agarra decide se continua segurando o alvo. Se continuar, gasta **1 PA**, sem teste. Se soltar, encerra Agarrado. Enquanto o mantém agarrado, pode arrastá-lo consigo ao gastar movimento, desde que o caminho comporte ambos.

Para escapar, gaste **1 PA** e faça um teste oposto contra o agarrador. Quem tenta se soltar vence em empate. A diferença de porte pode conceder vantagem ou desvantagem. **Provisório para playtest:** quando o porte importar, o menor recebe uma Desvantagem por categoria de diferença nesse teste, em lugar do ônus da tabela geral de porte.

**Imobilizar não é manobra básica.** Agarrar por si só não aplica Imobilizado. A fonte que concede Imobilizado define como sair. Para imobilização especificamente produzida por agarrão, gastar 1 PA remove Imobilizado e mantém Agarrado. Escapar por completo exige a tentativa de fuga separada.

### Atordoado

**Adaptação à renovação por turno — 2026-10-26:** no início do próximo turno, renove os PA para o valor vigente e subtraia 2, mínimo 0. Não há perda imediata ao receber a condição. A proibição de reações termina nesse início; a condição termina após o desconto, sem outra renovação de PA.

Exemplo: orçamento normal 4 resulta em 2 PA para agir. O exemplo antigo de NE 4 foi retirado com a revisão de exaustão de 18/11. Sobras ou gastos anteriores não mudam esses valores, pois a renovação ocorre antes do desconto. Não cria dívida de PA.

### Acúmulo e Equilíbrio

- Bônus e penalidades equivalentes causados por condições não se somam; aplica-se o mais severo. Por exemplo, Caído e Imobilizado concedem +2, não +4, aos ataques corpo a corpo contra o alvo.
- Reaplicar a mesma condição não multiplica suas penalidades.
- Essa regra de acúmulo trata de condições; não substitui as regras de ataques consecutivos ou Exaustão.
- A aplicação em inimigos com Equilíbrio segue [Equilíbrio](postura.md). Restaurar Equilíbrio não remove condições já aplicadas.

## Integração de 2026-10-19

Custos, durações e modificadores numéricos específicos das condições permanecem provisórios; a troca para Desvantagens vale para repetição de ataques, não converte automaticamente todos os ±2 do sistema.

O tratamento de [descanso curto](../recuperacao/descansos.md) remove Ferido e cura automaticamente. A cura automática da Regeneração dos Namarés ocorre apenas enquanto o Namaré estiver livre de Ferido e Morrendo.

## Acúmulo e Postura

Nome anterior; consultar [Acúmulo e Equilíbrio](#acúmulo-e-equilíbrio).

## Exposto

**Aprovado para playtest — 2026-10-25.** Habilidades ou situações da cena podem deixar o alvo sob **Abertura total**: enquanto Exposto, **todo ataque contra ele ignora completamente a RD**, seja de armadura, proteção natural, elemental, geral ou reação. Não exige ataque direcionado nem descoberta individual da Abertura. Ver [Aberturas](aberturas.md).

Defesa, necessidade de acertar e possibilidade de Esquivar permanecem. Bloquear não recupera RD ignorada; efeitos adicionais da reação continuam conforme seu texto. Exposto não significa acerto automático nem remove efeitos que não sejam RD, como imunidade ou teste obrigatório. Não estender a regra de ataques automaticamente a quedas/dano ambiental.

Registrar fonte, gatilho, custo/teste quando houver, duração e condição de término. **Esses valores dependem da fonte; não foram definidos universalmente.** Conhecer uma Abertura parcial, tirar pleno/crítico, ficar Caído/Imobilizado ou chegar a Equilíbrio 0 não concede Exposto por si só. Restaurar Equilíbrio não remove condições automaticamente. A aplicação de Exposto em alvos com Equilíbrio deve ser explicitada pela fonte, sem presumir imunidade nem aplicação automática.

## Sangramento — 2026-11-04

Sangramento pode vir de fontes específicas; não é efeito automático do tipo Cortante. Não tem duração fixa nem teste periódico genérico para terminar: persiste até morrer, receber cura que o encerre ou tratamento de Medicina DT 15. Se estiver Ferido, a primeira cura normal remove apenas Ferido; é necessária outra cura ou Medicina para encerrar o Sangramento. Venenos e efeitos semelhantes também não ganham um teste genérico de cancelamento: uma tentativa exige meio ou justificativa apropriada. Ver [morte e recuperação](../recuperacao/morte-e-recuperacao.md#medicina-fora-do-descanso).

## Vulnerável

Todos os ataques contra um alvo Vulnerável têm 1 Vantagem. A fonte determina a duração. Um acerto com as armas naturais de uma Fera aplica a condição até o início do próximo turno dela. Exposto afeta RD e segue sua própria regra.

## Observações de playtest

- Provisório para playtest — aprovado pelo criador em 2026-10-12.
- A aplicação inicial do agarrão ainda precisa de custo e teste definidos.
- O procedimento de renovação de duração por reaplicação permanece pendente.
- Fuga oposta favorece quem inicia a fuga em caso de empate; o procedimento completo de contenção ainda está pendente.
- Valor do dano, momento de aplicação, acúmulo e requisitos das fontes continuam pendentes.

## Pontos a testar ou completar

- Combinação de Agarrado, Caído e Atordoado contra personagens e inimigos com Equilíbrio.
- Custos e testes de aplicação, fuga e manutenção de contenções.
- Durações por fonte de Imobilizado e renovação de condições.
- Efeito de ±2 na chance de acerto e no dano por margem de sucesso.
- Movimento ao rastejar em conjunto com Exaustão e terreno difícil.

