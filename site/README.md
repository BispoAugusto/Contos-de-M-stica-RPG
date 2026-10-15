# Portal de documentação

O portal reúne automaticamente todos os arquivos `.md` do repositório, incluindo subpastas, sem alterar as regras. A busca consulta títulos, caminhos e conteúdo, sem distinguir acentos. O leitor oferece sumário, links entre capítulos, download do Markdown e impressão/PDF pelo navegador. Estado do projeto, histórico e decisões têm atalhos na página inicial.

## Hospedar na Vercel

1. Entre na Vercel com sua conta GitHub e escolha **Add New → Project**.
2. Importe **BispoAugusto/Contos-de-M-stica-RPG** e conceda acesso ao repositório.
3. Use a raiz do repositório como **Root Directory** e **Other** como framework.
4. O `vercel.json` configura a instalação (`npm install --ignore-scripts`), o build (`npm run build`) e a saída (`dist`). Não são necessárias variáveis de ambiente, banco de dados ou tokens no site.
5. Clique em **Deploy**. A Vercel fornece um endereço `.vercel.app`; um domínio próprio é opcional.

Com a integração Git habilitada, novos commits na branch de produção geram uma nova publicação. Cada build relê os Markdown, incluindo arquivos novos. A atualização não acontece antes de o deploy terminar. Configure `main` como branch de produção se necessário.

Referências: [Importação Git](https://vercel.com/docs/git) e [configuração de build](https://vercel.com/docs/builds/configure-a-build).

## Executar localmente

Com Node.js 22 ou superior e npm instalados, execute na raiz:

```sh
npm install --ignore-scripts
npm run build
npm run preview
```

Abra `http://127.0.0.1:4173`. O arquivo de entrada é `site/index.html`; o HTML publicado fica em `dist/index.html`. Abrir o HTML diretamente como arquivo não carrega o catálogo: use o servidor de prévia.

## Atualizar e manter

Edite os Markdown normalmente e publique um commit. Pastas `.git`, `node_modules`, `.vercel` e `dist` são ignoradas na indexação. Datas de alteração vêm do histórico Git disponível no build; arquivos sem histórico recebem uma indicação neutra. A Vercel pode disponibilizar apenas parte do histórico Git. O conteúdo histórico não é reinterpretado como regra atual.

Os textos são convertidos com Marked e sanitizados antes da publicação. O portal não depende de chamadas à API do GitHub ou de bibliotecas externas durante a leitura. Links para arquivos não Markdown levam ao repositório.
