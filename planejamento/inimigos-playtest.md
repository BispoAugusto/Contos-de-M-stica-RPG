# Inimigos de playtest — lobo, cavaleiro e salamandra

**Protótipos propostos em 2026-10-25; números e procedimentos particulares ainda não aprovados nem balanceados por testes.** Conceitos solicitados: lobo perigoso, mas inferior aos outros; cavaleiro fortemente protegido com Aberturas óbvias; salamandra com escamas poderosas e pescoço vulnerável ao preparar e soltar a baforada.

As três faixas de ameaça são **relativas entre estas fichas**, não ND 1/2/3. O [ND de áreas](../design/pendencias.md#nd-de-áreas-de-exploração) ainda não tem escala calibrada. Não inferir número seguro de inimigos por jogador.

## Convenções exclusivas deste teste

- Usar Corpo/Mente/Espírito no lugar do atributo para graus de testes que não sejam ataques: pleno = DT + máximo(0, 10 − Parte); extremo apenas com Parte 10+. Teto sob pressão = 2 × Parte. **Esta aplicação numérica é hipótese local**, não resolve a pendência geral dos NPCs. Partes não são reservas gastáveis; sem Forçar dos NPCs nesta primeira versão.
- Ataques não usam esse teto nem pleno: 1d20 + proficiência. Pesado em Defesa +5 acrescenta 1 dano; brutal em Defesa +10 acrescenta 2 em vez de 1. Natural 1 falha; 20 acerta e dá +2 dano adicional.
- Ataques comuns seguem repetição normal no próprio turno: normal, 1 Desvantagem, 2 etc.; custo maior não concede acertos extras. Esquivar não rola dados. Uma reação defensiva por ocorrência, com PA disponíveis.
- Começar com PV, PA e Equilíbrio cheios. Renovar PA até o máximo da ficha ao fim da rodada, sem acumular; o início do próprio turno não renova. A atualização de 26/10 altera essa convenção de teste, preservando os máximos próprios dos NPCs. Movimento Médio custa 1 PA, salvo ação específica. A 0 PV, retirar o NPC do combate; destino narrativo decidido pela cena. São convenções de teste, não novos procedimentos gerais de morte.
- Ataque direcionado de jogador: Foco e proficiência da arma; **neste teste, usar a Defesa atual do alvo sem penalidade adicional**. Exige acesso à Abertura. Essa DT é arbitragem local. Analisar, quando indicado: 1 PA, atributo/perícia pela abordagem, com DT proposta na ficha. Pistas evidentes não cobram análise.
- RD parcial é a proteção restante: metade para cima, salvo 1→0. Somar somente fontes compatíveis antes de reduzir. Exposto faz todos os ataques ignorarem toda RD, mas não Defesa. Perfis abaixo são C/P/Cont = Cortante/Perfurante/Contundente; demais tipos RD 0, exceto onde indicado.
- Esta versão fixa PA por criatura. Não escalonar automaticamente com a quantidade de jogadores; registrar tamanho do grupo em cada teste. Recomenda-se comparar primeiro com as [fichas de Borin e Nilo](fichas-combate-2026-10-25.md), sem afirmar que os encontros são equilibrados.

## Comparação rápida

| Campo | Lobo | Legionário | Salamandra |
|---|---|---|---|
| Ameaça relativa | Menor; perigoso em grupo | Intermediária; defensor | Maior; monstro de pressão em área |
| Corpo / Mente / Espírito | 2 / 1 / 1 | 3 / 2 / 2 | 4 / 2 / 2 |
| PV | 8 | 20 | 30 |
| PA por rodada | 3 | 4 | 5 |
| Defesa base equipada | 12 | 12, inclui escudo +1 | 12 |
| Defesa com Esquiva | 14 por 1 PA | Indisponível | Indisponível |
| Equilíbrio | Não possui | 2 | 4 |
| RD completa C/P/Cont | 0/0/0 | 4/3/2 | 4/3/2 |
| RD parcial C/P/Cont | 0/0/0 | 2/2/1 | 2/2/1 |
| Outra RD completa → parcial | Nenhuma | Nenhuma | Fogo 4 → 2 |
| Enquanto Exposto | RD 0 contra ataques | RD 0 contra ataques, inclusive Bloquear | RD 0 contra ataques, inclusive Fogo |

Esses valores não são derivados automaticamente da criação dos jogadores. Ataques são próprios da ficha e não concedem itens equivalentes como saque.

## Lobo — perseguidor de matilha

**Perícias treinadas:** Golpes Desarmados 2 (+4), Esquiva 1 (+2), Vigor 1 (+2), Atletismo 1 (+2), Vigilância 1 (+2), Sobrevivência 1 (+2). Corpo para ataque/Vigor/Atletismo/Esquiva; Mente para Vigilância/Sobrevivência neste teste.

| Tipo | Ação | Procedimento proposto |
|---|---|---|
| Passiva | Pressão da matilha | Uma Vantagem em Mordida se outro lobo consciente estiver em Toque do mesmo alvo. Não acumula por quantidade de lobos. |
| Agredir — 1 PA | Mordida | Toque, 1d20+4 (Golpes Desarmados); 3 perfurante, 4 em pesado, 5 em brutal; crítico +2. |
| Manobra — 1 PA | Puxão de presa | Toque, 1d20+4, Corpo, contra Defesa; sem dano. Sucesso tenta aplicar Caído; 1/rodada. Independente, não conta na repetição de ataques. Contra Equilíbrio positivo, reduz 1 em vez de aplicar Caído; se zerar, aplica Caído. |
| Reação — 1 PA | Esquivar | Defesa 14 contra um ataque. Não melhora resistências automaticamente. |

**Comportamento:** procura alvos isolados, cerca e usa Caído para ajudar a matilha. Sugestão narrativa: abaixo de metade dos PV ou sem companheiros próximos, busca recuar se houver rota; não é fuga obrigatória.

**Proteção e criatividade:** não possui RD, então Analisar uma Abertura não oferece penetração adicional. Analisar DT 12, Mente com Vigilância ou conhecimento pertinente, pode revelar a dependência de companhia para a Vantagem. Separar os lobos elimina a condição da passiva; ocupar uma passagem pode impedir que vários alcancem o mesmo alvo. Não inventar RD só para obrigar o uso de Aberturas.

**Perigo esperado, ainda não medido:** mordida ameaça personagens leves; uma matilha cria mais turnos e pode derrubar. Golpes comuns podem ser anulados pela proteção pesada — diferença intencional para o primeiro teste. Testar um lobo e depois uma dupla separadamente; nenhum tamanho de matilha foi certificado como seguro.

## Legionário — placas robustas, juntas visíveis

**Perícias treinadas:** Espadas 2 (+4), Vigor 2 (+4), Atletismo 1 (+2), Vigilância 1 (+2), Convicção 1 (+2); proficiente em escudos e acesso 2 a armaduras. Corpo para espada/Vigor/Atletismo, Mente para Vigilância, Espírito para Convicção. Sem treino em Esquiva.

**Proteção:** armadura pesada com C4/P3/Cont2 e peso 6 espaços; escudo empunhado. Defesa sem escudo 11, com escudo 12. Sem nova penalidade de movimento; inventário e saque completo não são necessários para executar esta ficha.

| Tipo | Ação | Procedimento proposto |
|---|---|---|
| Agredir — 1 PA | Corte de guarda | Toque, 1d20+4 (Espadas); 4 cortante, 5 em pesado, 6 em brutal; crítico +2. Ataque próprio, não dano de uma espada modular comum. |
| Manobra — 1 PA | Empurrão de escudo | Toque, 1d20+4, Corpo, contra Defesa; desloca até Curto para longe se houver caminho; sem dano, 1/rodada. Independente. Contra Equilíbrio positivo, reduz 1; se zerar, desloca. |
| Reação — 1 PA | Bloquear | Após conhecer o dano, RD física adicional 2 por ocorrência. Com armadura: RD completa C6/P5/Cont4; parcial C3/P3/Cont2. Enquanto Exposto, nenhuma dessas RD protege contra ataques. |

**Aberturas óbvias:** juntas dos cotovelos, parte interna dos joelhos e junção do gorjal. São reconhecidas sem teste quando visíveis em Toque ou Curto, mas só podem ser atacadas de um alcance e ângulo que permitam alcançá-las. Ataque direcionado usa a RD parcial, mesmo em pesado ou brutal. Abertura evidente não significa Exposto.

**Como protege as falhas:** pode mover-se para uma passagem ou colocar uma junta contra uma parede, tornando aquela abordagem inacessível. O reposicionamento paga movimento normal; não fecha todas as juntas gratuitamente nem elimina o conhecimento dos jogadores. Analisar DT 12 pode apontar uma junta acessível a partir de outra posição. Se nenhuma mudança material ocorrer, repetir “protejo as juntas” não apaga a Abertura.

**Equilíbrio 2:** para estas fichas, manobra de controle bem-sucedida desgasta 1; a que zera aplica o controle fisicamente possível. Restaurar ao fim do próximo turno do cavaleiro, como no núcleo. Isso não aplica Exposto automaticamente. Habilidades/cena podem fazê-lo quando uma fonte definir aplicação, duração e saída; esta ficha não acrescenta um botão genérico de exposição total.

**Comportamento:** protege uma passagem ou pessoa, usa o escudo contra golpes fortes e tenta afastar quem procura suas juntas. O objetivo da cena deve permitir disputá-lo sem obrigar a matar o cavaleiro.

## Salamandra — escamas e garganta incandescente

**Criatura fantástica de fogo**, não o animal comum. **Perícias treinadas:** Golpes Desarmados 3 (+6), Vigor 2 (+4), Atletismo 2 (+4), Vigilância 1 (+2), Convicção 1 (+2). Corpo para ataques/Vigor/Atletismo, Mente para Vigilância, Espírito para Convicção. Sem Esquiva.

**Passiva — Escamas ígneas:** RD passiva C4/P3/Cont2 e Fogo 4; sem cargas. É proteção própria deste monstro, não o traço Escamas dos Draconatos. Não concede imunidade a Fogo, dano de contato ou resistência a outros elementos. Enquanto Exposto, ataques ignoram também a RD de Fogo.

| Tipo | Ação | Procedimento proposto |
|---|---|---|
| Agredir — 2 PA | Mordida esmagadora | Toque, 1d20+6 (Golpes Desarmados); 5 perfurante, 6 em pesado, 7 em brutal; crítico +2. Uma rolagem e uma instância. |
| Preparação — 2 PA | Inflar a garganta | Máximo 1/turno; inicia o ciclo abaixo, sinaliza a direção do cone e aplica Exposto à própria salamandra. Não pode ser usada no turno em que solta a baforada. |
| Agredir de área — 3 PA | Baforada ardente | Só no turno seguinte à preparação. Cone até Curto na direção sinalizada, inclui aliados; 6 Fogo por alvo, sem rolagem de ataque. Resistência Esquiva DT 14: falha 6, padrão 3, pleno 0; pleno do jogador usa seu Reflexo. Uma instância por alvo; RD compatível depois da resistência. |
| Reação | Nenhuma | Não possui defesa reativa nesta versão; conserva Defesa base 12. |

**Janela de exposição, proposta específica desta criatura:**

1. Ao pagar Inflar a garganta, as escamas do pescoço se afastam e uma faixa incandescente aparece. Descrever imediatamente o sinal e a direção da baforada; não exigir Analisar para percebê-los.
2. A salamandra fica **Exposta imediatamente e até o fim do próximo turno dela**, inclusive durante a baforada. Não pode preparar e disparar no mesmo turno. Enquanto Exposta, qualquer ataque ignora toda RD; o pescoço explica narrativamente a condição, mas não exige ataque direcionado.
3. Pode disparar uma vez no próximo turno, se tiver 3 PA e puder agir. Se cancelar ou não puder disparar, perde a preparação sem reembolso; permanece Exposta até o mesmo prazo. Não pode fechar o pescoço instantaneamente para negar uma ação preparada.
4. Ao fim desse turno, a garganta fecha e Exposto termina, salvo outra fonte independente que ainda mantenha a condição. Novo ciclo só pode começar em turno posterior. A direção não pode ser trocada depois da sinalização; deslocamento da criatura muda a origem do cone, não sua orientação.

Ataques preparados podem usar como gatilho o início visível da exposição, depois de pagar a preparação e antes de continuar as ações. Essa ordem é convenção deste teste; não resolve toda disputa de interrupções. As ações e reações dos jogadores continuam pagando seus próprios PA.

**Abertura parcial fora da baforada:** Analisar DT 14 por observação, Natureza ou outra abordagem pertinente revela uma junta abaixo da mandíbula. É acessível pela frente/lateral quando alcançável; ataque direcionado usa a coluna parcial. Recuar o pescoço atrás de um obstáculo real pode impedir esse ângulo, mas não apaga o conhecimento. Analisar não produz Exposto.

**Equilíbrio 4:** mesmo desgaste local de 1 por controle bem-sucedido, com efeitos e restauração do núcleo. A exposição voluntária da baforada ocorre mesmo com Equilíbrio cheio; não é preciso quebrá-lo. Quebrá-lo não causa Exposto extra nem encerra a preparação automaticamente. Um efeito que de fato impeça o disparo, como PA insuficientes ou incapacidade de agir, é respeitado.

**Comportamento:** ameaça agrupamentos, prepara o cone e obriga os jogadores a escolher entre afastar-se e aproveitar a exposição. Preparar não retira suas outras opções de ação, mas seus PA são finitos. Terreno com cobertura/rotas laterais permite responder ao sinal. Não presumir que todo fogo da cena seja um ataque coberto por Exposto.

## O que medir antes de aprovar os números

- Lobo: dano em dupla, pressão de Caído/Vantagem e se personagens leves conseguem reagir.
- Legionário: RD com escudo versus ataques direcionados; acesso real às juntas e custo de reposicionamento.
- Salamandra: quantos ataques de jogadores cabem na janela de Exposto; risco de ser eliminada antes da primeira baforada e dano da área contra grupos de tamanhos diferentes.
- Comparar encontros separados, sem somar os três inimigos como encontro equilibrado. Registrar ordem dos turnos, terreno, jogadores, PA, plenos, dano evitado, uso de Aberturas e exposição.
- As fichas não aprovam ND numérico, conversão universal dos graus de NPCs, DT geral de Analisar ou duração universal de Exposto. Não alterar o núcleo a partir de resultados sem nova decisão.
