const categories = [
  ['fundamentos', 'Fundamentos', ['README.md', 'visao-geral.md', 'atributos.md', 'testes.md', 'alma.md']],
  ['personagem', 'Personagem', ['README.md', 'proficiencias.md', 'pericias.md', 'idiomas.md', 'valores-da-ficha.md']],
  ['origens', 'Origens e espécies', ['README.md', 'humanos.md', 'feericos.md', 'bestiais.md', 'draconicos.md', 'verdantes.md', 'runicos.md']],
  ['combate', 'Combate', ['README.md', 'turnos-e-iniciativa.md', 'ataques-e-dano.md', 'defesas.md', 'tipos-de-dano.md', 'manobras.md', 'condicoes.md', 'postura.md']],
  ['equipamentos', 'Equipamentos', ['README.md', 'armas.md', 'armaduras-e-escudos.md', 'porte-e-inventario.md']],
  ['exploracao', 'Exploração', ['README.md', 'movimento.md', 'quedas.md']],
  ['recuperacao', 'Descanso e sobrevivência', ['README.md', 'descansos.md', 'exaustao.md', 'morte-e-recuperacao.md']],
];
const starting = ['README.md', 'referencias/criacao-de-personagem.md', 'regras/README.md', 'referencias/guia-rapido.md', 'referencias/glossario.md', 'ESTADO-DO-PROJETO.md'];
export function navigationFor(id, markdown) {
  if (markdown.includes('<!-- navegacao:compatibilidade -->')) {
    return { group: 'Links anteriores', groupOrder: 99, order: 99, compatibility: true, development: false };
  }
  const start = starting.indexOf(id);
  if (start >= 0) return { group: 'Comece aqui', groupOrder: 0, order: start, compatibility: false, development: false };
  for (const [index, [folder, title, chapters]] of categories.entries()) {
    if (id.startsWith('regras/' + folder + '/')) {
      const order = chapters.indexOf(id.slice(('regras/' + folder + '/').length));
      return { group: title, groupOrder: index + 1, order: order < 0 ? 99 : order, compatibility: false, development: false };
    }
  }
  const section = id.split('/')[0];
  const group = section === 'planejamento' ? 'Planejamento' : section === 'site' ? 'Sobre o portal' : 'Projeto e histórico';
  const groupOrder = section === 'planejamento' ? 9 : section === 'site' ? 10 : 8;
  return { group, groupOrder, order: 99, compatibility: false, development: true };
}
