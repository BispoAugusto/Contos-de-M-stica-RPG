# Colaboração entre conversas

O chat central de direção criativa reúne as questões que dependem do criador e registra a resposta com seu alcance. Chats de trabalho investigam, propõem e preparam alterações no GitHub dentro do escopo recebido. A [hierarquia das fontes](../AGENTS.md#fontes-por-assunto) orienta a consulta em cada conversa.

## Status e aprovação

| Status | Aplicação |
|---|---|
| **Confirmado** | Decisão explícita do criador, válida no alcance aprovado. |
| **Provisório para playtest** | Aplicação experimental autorizada pelo criador, sujeita a revisão. “Confirmado pelo criador para playtest” confirma a autorização de testar, com vigência provisória. |
| **Proposto** | Sugestão ou hipótese sem aprovação. Se usada em análise ou simulação, identifique a hipótese no resultado. |
| **Pendente** | Questão ainda sem decisão. Uma pendência pode coexistir com propostas de solução ou com outros pontos aprovados no mesmo assunto. |

Para pedir decisão ao criador, apresente o trecho afetado, a mudança proposta, os efeitos previstos, a questão exata a decidir e se a aplicação solicitada é geral ou só para playtest. Registre a data, a referência à mensagem ou conversa quando acessível e uma síntese fiel do que foi aprovado, incluindo limites e pontos excluídos. Diante de uma resposta ambígua, mantenha o status anterior e peça confirmação apenas do ponto em aberto. Discussão, silêncio, exemplos, resultados de simulação e aprovação editorial não promovem uma proposta a regra. Aprovação de conteúdo e autorização de merge são decisões distintas.

## Repasse entre chats

Ao encerrar ou transferir uma tarefa, deixe um repasse curto no chat central ou para a conversa seguinte. Inclua links e âncoras para recuperar os detalhes no GitHub. O repasse precisa ser compreensível mesmo quando o próximo chat não tiver acesso à conversa original.

- **Objetivo e escopo** — tarefa, limites e resultado esperado.
- **Referência de trabalho** — branch, SHA da base, SHA do trabalho e link do PR, se houver. Indique se a alteração está em revisão ou integrada.
- **Fontes e resultado** — capítulos e decisões consultados, arquivos alterados e verificações feitas. Em playtest, indique se houve sessão, simulação ou somente preparação.
- **Status e decisão** — itens afetados, status de cada um, referência da aprovação quando houver e pergunta exata que falta responder.
- **Próximo passo** — ação que o próximo chat pode executar e dependências de outras branches ou conversas.

Ao retomar, abra os links, confira a base e compare o trabalho pendente com a `main`. Se outra conversa mexeu no mesmo trecho, preserve o trabalho existente e esclareça a sobreposição antes de editar. Atualize a referência no repasse seguinte.

## Atualizar uma regra após aprovação

1. Confira a aprovação e seu alcance. Atualize o capítulo normativo e identifique a substituição nos trechos conflitantes das revisões aplicáveis. Preserve o histórico e as partes da regra fora da aprovação.
2. Na mesma alteração, registre a decisão datada em [decisões](decisoes.md) com link ao capítulo, resuma seu efeito no [estado do projeto](../ESTADO-DO-PROJETO.md) e inclua uma entrada breve no [changelog](../CHANGELOG.md). Use referências em vez de copiar a regra inteira.
3. Atualize [pendências](pendencias.md) e [ideias futuras](ideias-futuras.md) quando o status mudar. Revise roadmap, guias, fichas, exemplos e cenários afetados. Se algum material ainda precisar de migração, identifique-o em pendências.
4. Confira o diff, links, escopo e status na branch. Encaminhe a alteração para revisão com o repasse. O merge depende de autorização explícita.
