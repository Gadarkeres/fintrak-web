# 💸 Painel Financeiro Pessoal

Um sistema de controle financeiro pessoal com gráficos, cadastro e listagem de despesas, visualização de saldo e login com autenticação via token (cookies). Desenvolvido em **React + Ant Design + TypeScript** no frontend, com backend em **Fastify + Prisma + PostgreSQL**.

---

## ✅ Funcionalidades (Requisitos Funcionais)

### MVP (Mínimo Viável)

* [x] Interface com layout dark mode como padrão
* [x] Header fixo com abas de navegação

  * [x] Aba "Dashboard" com gráficos de despesas
  * [x] Aba "Lista de Despesas" (tabela)
  * [x] Aba "Nova Despesa" (formulário)
* [x] Cadastro de despesas

  * [x] Valor, nome, data, categoria, tipo (fixa, variável)
* [x] Listagem de despesas em tabela

  * [x] Ordenar por data/valor
* [x] Gráfico de pizza por categoria
* [x] Cálculo de saldo total

### Versão pós-MVP

* [ ] Autenticação de usuário com JWT em cookies
* [ ] Cadastro e login
* [ ] Dados separados por usuário
* [ ] Exportar despesas para CSV ou JSON
* [ ] Filtros avançados (por mês, categoria, valor mínimo/máximo)

---

## 📐 Requisitos Não Funcionais

* Interface responsiva (mobile-first, semelhante a apps como Nubank/C6)
* Dark mode padrão (com opção de light mode futura)
* Persistência dos dados no PostgreSQL via Prisma ORM
* Backend estruturado em Node.js + Express
* API RESTful protegida por autenticação JWT (cookies HTTPOnly)
* Versionamento com Git e hospedagem no GitHub

---

## 🧠 Regras de Negócio

* Usuário não autenticado (na fase MVP) pode usar o sistema, mas dados serão locais
* Cada despesa deve conter:

  * Nome (obrigatório)
  * Valor (obrigatório, maior que zero)
  * Data (obrigatória)
  * Categoria (opcional)
  * Tipo: fixa ou variável
* Gráfico de pizza sempre exibe a soma de valores por categoria no mês atual
* O saldo é calculado com base na diferença entre receitas e despesas

---

## 🧱 Stack do Projeto

### Frontend

* [Vite](https://vitejs.dev/)
* [React + TypeScript](https://react.dev/)
* [Ant Design (antd)](https://ant.design/)
* \[React Router DOM]
* \[Zustand] para estado global (ex: usuário logado, despesas carregadas)
* \[Chart.js] ou \[Recharts] para gráficos
* \[React Hook Form + Zod] para formulários
* \[js-cookie] para manipulação de cookies

### Backend

* \[Node.js + Express]
* \[Prisma ORM]
* \[PostgreSQL]
* \[JWT] para autenticação
* \[cookie-parser] para ler token via cookies
* \[bcrypt] para hash de senha

---

## 🗂 Estrutura Inicial de Pastas (Frontend)

```
src/
├── components/
├── pages/
├── services/
├── store/ (zustand)
├── utils/
├── App.tsx
└── main.tsx
```

---

## 🚀 Como Rodar Localmente

**Em breve**: instruções para clonar e rodar o frontend + backend.

---

## 📌 To-do imediato

* [ ] Criar layout com Header + abas
* [ ] Implementar tema dark (AntD Custom Theme)
* [ ] Mockar lista de despesas
* [ ] Criar UI dos formulários e das tabelas
* [ ] Criar estrutura inicial do backend com Express e Prisma

---

## 🧑‍💻 Autor

Matheus Rafael
