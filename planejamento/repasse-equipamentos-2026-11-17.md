# Repasse — equipamentos de 17/11/2026

## Referência

- Repositório: BispoAugusto/Contos-de-M-stica-RPG.
- Base: main em 418b3c3a6f5e5d77c0824f4a933fc86a13d152f5.
- Branch de trabalho: regras/equipamentos-playtest-2026-11-17.
- Escopo solicitado: levar itens, armas, armaduras, escudo e itens iniciais ao repositório; adiar receitas/fabricação.
- Consultar o commit atual da branch e seu PR para a revisão exata. Não presumir que este documento signifique merge concluído.

## Conteúdo

[Índice de equipamentos](../regras/equipamentos/README.md) é o ponto de entrada. Dois capítulos novos: itens gerais/kits e equipamento inicial. Catálogo de armas, inventário, escudos, criação, proficiências, defesas, resumos e suprimentos foram harmonizados.

Armas e números operacionais são provisórios para playtest. Escudo não exige proficiência; kit básico mais três escolhas; tocha um período, lanterna dois. Forja/Culinária são profissões, Fabricação usa perícias. Espaço mínimo individual 0,5 e lotes explícitos.

## Lacunas preservadas

- RD de armaduras mantida em 1/3/5. Penalidades finais, sua acumulação e abertura universal de armadura de personagem ainda precisam de decisão.
- Lenta experimental; interações especiais, armas mistas e catalisadores continuam pendentes.
- Não publicar receitas, sistema de coleta, fabricação, preços, maestrias ou nova progressão a partir deste pacote.
- A unidade de luz não altera automaticamente frequências de encontros, atividades ou descansos.

## Verificação e publicação

Verificar links/âncoras de todos os Markdown, carga dos exemplos, custos de PA, ausência de exigência atual de proficiência de escudo e preservação de exceções históricas. Os novos capítulos são descobertos automaticamente pelo portal; não há mudança de software neste pacote.

O build configurado executa `node site/build.mjs && node site/check.mjs`. O resultado efetivamente disponível no PR deve ser consultado; este repasse não atesta execução local ou sessão de playtest.

Aguardar aprovação explícita de merge conforme [AGENTS](../AGENTS.md) e [colaboração](../design/colaboracao.md). Após aprovação, verificar main e publicação do portal.
