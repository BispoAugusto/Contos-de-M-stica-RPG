# Mesa web — modelo de card

Primeiro componente do futuro site, solicitado em 2026-10-25. HTML/CSS sem framework, dependências, fontes remotas ou JavaScript. Não altera o portal de documentação existente em `site/` nem sua configuração de hospedagem.

Abra `index.html` diretamente no navegador. As ações usam `details`/`summary`, com expansão nativa por clique, Enter e Espaço. O layout responde à largura disponível.

## Reutilização

- Carregar `card.css`, copiar o `article.npc-card` e a pasta `assets/`. As regras do componente são prefixadas por `.npc-card`; `.card-demo`, `.demo-stage`, `.demo-label` e `.demo-hint` pertencem apenas à página demonstrativa.
- Substituir textos e valores do HTML. Em múltiplos cards, usar IDs exclusivos nos títulos, seções e barra de vida, atualizando seus `aria-labelledby` e `for`.
- Ícones originais fornecidos pelo criador, preservados em PNG transparente: Corpo vermelho, Mente azul, Espírito verde. Filtros CSS ajustam a luminosidade para fundo escuro sem editar os arquivos.
- Números de pressão = dobro do atributo; representam o **teto da proficiência sob pressão**, não um bônus extra ao ataque. Exemplo: Corpo 2 → +4. São campos estáticos neste modelo; uma futura integração deverá calculá-los a partir dos dados.
- Para vida, atualizar texto visível e os atributos `value`/`max` de `progress`. A barra é informativa, não um controle para alterar PV.
- A seção de proteções mostra RD completa e restante em Abertura parcial. Não trocar por quantidade ignorada.

O exemplo usa o lobo das [fichas propostas](../planejamento/inimigos-playtest.md): Corpo 2, Mente 1, Espírito 1, PV 8, Defesa 12/14 e 3 PA. ND permanece indefinido. Nenhum número do rascunho visual substitui a ficha. Valores de NPC e aplicação dos graus/pressão continuam hipóteses de playtest.

Este diretório contém somente o protótipo do card. Sem editor de fichas, armazenamento, autenticação, automação de combate ou publicação de um novo site nesta etapa.
