# Condições

[Índice de regras](../README.md) · [Categoria](README.md) · [Criar personagem](../../referencias/criacao-de-personagem.md)

## Estado das regras

**Provisório para playtest — aprovado pelo criador em 2026-10-12.** Caído, Agarrado, Imobilizado e Atordoado, seus procedimentos abaixo e a interação com Equilíbrio podem ser revistos após discussão e testes. A aprovação permite usar esta versão; não a torna definitiva.

**Confirmado:** salvo exceções explícitas, como Regeneração dos Namarés, Ferido bloqueia cura ao chegar à metade dos PV; tratamento remove; cura de personagem caído a 0 PV ou menos retorna 1 PV e remove Ferido. Inconsciente é estado possível após Aceitar a Queda. Ver [morte e recuperação](../recuperacao/morte-e-recuperacao.md).

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

Agarrado controla posição; Imobilizado também prejudica ataques e facilita acertos contra o alvo, mas não aplica a condição Exposto automaticamente. Agarrar não aplica automaticamente Imobilizado.

Para **imobilização feita por agarrão**, a recuperação é em etapas: gastar 1 PA remove Imobilizado, mas mantém Agarrado; escapar completamente exige outra ação de 1 PA e teste. Essa saída não é universal para correntes, teias, raízes ou outros efeitos.

O teste exato de fuga, a manobra para imobilizar, os custos de aplicação e manutenção e o procedimento para arrastar ainda precisam ser definidos. Não deduzir esses números do custo de saída.

### Atordoado

**Adaptação à renovação por turno — 2026-10-26:** no início do próximo turno, renove os PA para o valor vigente e subtraia 2, mínimo 0. Não há perda imediata ao receber a condição. A proibição de reações termina nesse início; a condição termina após o desconto, sem outra renovação de PA.

Exemplos: orçamento normal 4 resulta em 2 PA para agir; com NE 4, orçamento 3 resulta em 1 PA. Sobras ou gastos anteriores não mudam esses valores, pois a renovação ocorre antes do desconto. Não cria dívida de PA.

### Acúmulo e Equilíbrio

- Bônus e penalidades equivalentes causados por condições não se somam; aplica-se o mais severo. Por exemplo, Caído e Imobilizado concedem +2, não +4, aos ataques corpo a corpo contra o alvo.
- Reaplicar a mesma condição não multiplica suas penalidades. O procedimento de renovação de duração por reaplicação permanece pendente.
- Essa regra de acúmulo trata de condições; não substitui as regras de ataques consecutivos ou Exaustão.
- A aplicação em inimigos com Equilíbrio segue [Equilíbrio](postura.md). Restaurar Equilíbrio não remove condições já aplicadas.

## Pontos a testar ou completar

- Combinação de Agarrado, Caído e Atordoado contra personagens e inimigos com Equilíbrio.
- Custos e testes de aplicação, fuga e manutenção de contenções.
- Durações por fonte de Imobilizado e renovação de condições.
- Efeito de ±2 na chance de acerto e no dano por margem de sucesso.
- Movimento ao rastejar em conjunto com Exaustão e terreno difícil.

## Integração de 2026-10-19

Custos, durações e modificadores numéricos específicos das condições permanecem provisórios; a troca para Desvantagens vale para repetição de ataques, não converte automaticamente todos os ±2 do sistema. Fuga oposta favorece quem inicia a fuga em caso de empate; o procedimento completo de contenção ainda está pendente.

O tratamento de [descanso curto](../recuperacao/descansos.md) remove Ferido e cura automaticamente. A cura automática da Regeneração dos Namarés ocorre mesmo Ferido, sem remover a condição.

## Acúmulo e Postura

Nome anterior; consultar [Acúmulo e Equilíbrio](#acúmulo-e-equilíbrio).

## Exposto

**Aprovado para playtest — 2026-10-25.** Habilidades ou situações da cena podem deixar o alvo sob **Abertura total**: enquanto Exposto, **todo ataque contra ele ignora completamente a RD**, seja de armadura, proteção natural, elemental, geral ou reação. Não exige ataque direcionado nem descoberta individual da Abertura. Ver [Aberturas](aberturas.md).

Defesa, necessidade de acertar e possibilidade de Esquivar permanecem. Bloquear não recupera RD ignorada; efeitos adicionais da reação continuam conforme seu texto. Exposto não significa acerto automático nem remove efeitos que não sejam RD, como imunidade ou teste obrigatório. Não estender a regra de ataques automaticamente a quedas/dano ambiental.

Registrar fonte, gatilho, custo/teste quando houver, duração e condição de término. **Esses valores dependem da fonte; não foram definidos universalmente.** Conhecer uma Abertura parcial, tirar pleno/crítico, ficar Caído/Imobilizado ou chegar a Equilíbrio 0 não concede Exposto por si só. Restaurar Equilíbrio não remove condições automaticamente. A aplicação de Exposto em alvos com Equilíbrio deve ser explicitada pela fonte, sem presumir imunidade nem aplicação automática.
