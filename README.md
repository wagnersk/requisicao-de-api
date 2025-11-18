Simulador de Requisições com React + JSON Server

Este projeto utiliza React para a interface e JSON Server para simular um backend.
É ideal para testar fluxos de autenticação, CRUDs ou comunicação com API sem precisar de um servidor real.

------------------------------------------------------------

Como iniciar o backend (servidor fake)

No terminal, execute:
npx json-server db.json

Isto irá iniciar um servidor local que lê e responde com base no ficheiro db.json, simulando um backend real.

------------------------------------------------------------

Como iniciar o projeto React

Para iniciar o projeto com pnpm, execute:
pnpm dev

O projeto será iniciado em modo de desenvolvimento.

------------------------------------------------------------

Criar o primeiro utilizador

O sistema está mockado para funcionar com um utilizador específico.
Ao iniciar pela primeira vez, crie o primeiro utilizador com o username: hele

------------------------------------------------------------

Notas importantes

- Todo o backend é simulado através do JSON Server.
- A lógica de login e busca de dados está mockada para procurar o utilizador "hele".
- O ficheiro db.json pode ser editado para adicionar, remover ou alterar dados.
- Ideal para testes locais antes de ligar a um backend real.

------------------------------------------------------------

Se quiser, posso gerar também:
- um db.json de exemplo
- instruções avançadas
- estrutura de pastas do projeto
- endpoints configurados para o json-server