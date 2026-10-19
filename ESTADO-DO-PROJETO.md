# Estado do projeto — 2026-10-19

**CdM RPG**: sistema autoral d20, nove atributos, reservas de Corpo/Mente/Espírito, quatro PA por turno, distâncias narrativas e exaustão persistente.

## Confirmado nesta integração

- Nove atributos: Potência, Reflexo, Resiliência; Raciocínio, Foco, Percepção; Vontade, Influência, Sintonia. Cada um começa 1, +4 pontos redistribuíveis até 0, máximo inicial 3; limite normal 10, excedido apenas por itens/magias. Progressão posterior adiada.
- **1d20 + proficiência + modificadores, sem somar atributo**. Sob pressão, só o bônus de proficiência é limitado a 2 × atributo. Abordagem pode mudar o atributo sugerido.
- Padrão na DT; pleno em DT + máximo(0, 10 − atributo); extremo desbloqueado em 10, DT +20 − atributo. Todo sucesso com atributo 10+ é pleno, sem converter falhas em sucessos.
- Naturais 1/20, Vantagens/Desvantagens cumulativas com cancelamento, desempates e opostos descritos em [testes](regras/atributos-e-testes.md).
- Alma máxima = média arredondada para cima dos três atributos + bônus de espécie. Forçar por 1 Alma, ou 1 PE se a reserva estiver vazia, uma vez por teste, preservando dados/modificadores e aceitando novo resultado. Morte não pode ser forçada.
- PV base 6 +2 × máximo de Corpo; Defesa 10 + Reflexo; carga base do porte +2 × Potência.
- Pleno dá Golpe Pesado +1 dano; extremo dá Golpe Brutal +2 em vez de +1; crítico 20 natural +2 adicional. Sem progressão contínua de dano por blocos de cinco.
- Repetição no turno: normal, 1/2/3... Desvantagens; ataque combinado de duas Leves: normal, normal, 1/2... Desvantagens. Contagem compartilhada, benefício só no ataque com ambas; fora do turno não conta/não penaliza.
- Duas Leves: 1 PA, uma rolagem, menor proficiência das duas, uma instância, base principal + metade da secundária para cima.
- Corpo a corpo usa Potência, Leve permite Reflexo; distância/arremesso usam Foco. Golpe Devastador exige aprendizado e Pesada, inclusive arremessada, até 3 PA adicionais por +2 dano cada.
- Quatro resistências (Vigor, Lucidez, Convicção, Esquiva), quinze gerais incluindo Fluxo e oito conhecimentos incluindo Espiritualismo. Performance substitui Atuação; Liderança retirada em favor de Persuasão. Profissionais são lista aberta.
- Curto de 1h: duas atividades diferentes entre recuperar uma reserva, tratar feridas ou manter armadura. Alma recupera metade máxima para cima. Tratamento próprio 2 + Resiliência; de outro 2 + bônus de Medicina. Remove Ferido, automático, um tratamento por paciente/descanso.
- Morte: 1d20 puro, sem bônus/penalidades ou rerrolagem; DT 10 +5 por nova tentativa na cena, sucesso 1 PV, falha morte; natural 20 sempre sucede.
- Falta de alimentação, hidratação ou sono impede redução de PE no longo e gera 1 PE por requisito faltante. Namarés precisam beber e molhar-se: falta de banho conta como sede, sem penalidade duplicada.
- Dez tipos de dano; proteção inicial física, Escamas geral 1, resistência dracônica elemental 2. Teste obrigatório do efeito é separado da ação defensiva; só uma reação defensiva por ocorrência. Aplicar RD compatível por componente e geral uma vez por instância.
- Origens são seis categorias raciais, com 14 espécies; uma característica de origem, duas de espécie, distribuição de Alma e porte separado. Misturas permitidas exceto **Gnomos e Fadas**.

## Provisório para playtest

- **5 PP iniciais**, máximo nível 2; conhecimentos/idiomas dois níveis por ponto dentro da categoria. Comum fluente gratuito. Humanos +2 PP em qualquer categoria.
- Lista de perícias e atributos sugeridos; a abrangência de Espiritualismo ainda precisa de detalhamento.
- Valores modulares de armas, dano desarmado comum 0, armaduras físicas 2/3/4 com três usos e acesso 0/1/2; escudo +1 Defesa e Defender 1 PA/RD física 2. Compacta/Potente incompatíveis.
- Recuperação completa de vida/Alma e remoção de Ferido no longo de 8h; PE/NE seguem recuperação normal se condições adequadas.
- Bases de carga 3/5/10/20, inventário por espaços, modificadores físicos de porte e detalhes de quedas.
- Valores/traços de espécies conforme [catálogo atual](regras/origens-e-tracos.md), incluindo Robustez anã +3 PV, conjunto de Dríades/Arborídeos e divisão dos Gnomos.
- Condições, tabela de NE, manobras e Postura preservam suas aprovações de playtest anteriores. Não converter todos os modificadores situacionais em Desvantagens por analogia.

## Proposto e pendente

Distribuição de Alma dos Golias **+2 Corpo/+1 Espírito** foi apresentada para conferência e continua explicitamente proposta. A integração não promove propostas silenciosamente.

Gnomos: dividir/reunir 1 PA (reunião paga por uma parte), ficha anterior anotada, recursos pela metade para cima, dois conjuntos de ações, distância máxima Média, porte uma categoria menor; corpo entre dois que chega a 0 morre, escolhas contra a morte só no único corpo. **Recomposição de recursos após gastos/dano e perda definitiva de uma parte permanece pendente**.

Progressão e conjuração serão tratadas com habilidades. Fabricação e equipamentos iniciais ficam para depois da integração. Não foram inventados ET, receitas, recursos de Mana, equipamentos ou benefícios de progressão. Outras lacunas preservadas em [pendências](design/pendencias.md).

## Progresso e próximas etapas

Núcleo, combate, Alma, descanso, espécies e referências foram migrados documentalmente; guias de [criação](referencias/criacao-de-personagem.md) e [consulta rápida](referencias/guia-rapido.md) refletem esta versão. O portal existente consome os Markdown, sem nova implementação de site ou ficha.

Próxima etapa: desenvolver habilidades/progressão/conjuração, retomar fabricação/equipamentos e montar fichas para playtest, sem tratar a migração como validação de balanceamento. Ver [roadmap](planejamento/roadmap.md) e [plano de sessões](planejamento/playtests.md).

## Histórico e alcance

As regras substituídas de seis atributos aditivos, repetição numérica, dano contínuo por margem e compra de traços não são vigentes. [Decisões](design/decisoes.md), [changelog](CHANGELOG.md) e [catálogo histórico](design/catalogo-origens-historico.md) preservam o contexto. Nenhum playtest de mesa foi realizado nesta integração.
