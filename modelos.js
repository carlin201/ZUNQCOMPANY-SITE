/* =========================================================
   ZUNQ COMPANY — modelos.js
   Vitrine interativa de modelos + demonstrações em modal.
   Depende de script.js já carregado (usa WHATSAPP_NUMBER e
   WHATSAPP_MESSAGE, definidos lá, para os botões "Falar com a ZUNQ").
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  setupModelCards();
  setupModal();
});

// ---------- BLOCO DE CTA COMPARTILHADO ENTRE AS DEMOS ----------
function ctaBlock() {
  return `
    <div class="demo-cta">
      <p class="demo-cta__label">MODELO DEMONSTRATIVO — criado pela ZUNQ COMPANY</p>
      <h3>Gostou deste modelo?</h3>
      <p>Podemos criar uma solução personalizada para sua empresa.</p>
      <div class="demo-cta__actions">
        <a href="index.html#contato" class="btn btn--primary">Quero um projeto assim</a>
        <a href="#" class="btn btn--ghost js-demo-whats" target="_blank" rel="noopener">Falar com a ZUNQ</a>
      </div>
    </div>
  `;
}

function icon(path) {
  return `<svg class="demo-mini-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${path}</svg>`;
}

// =========================================================
// TEMPLATES DE CADA MODELO
// =========================================================
const MODELS = {
  // ---------------- LANDING PAGE ----------------
  landing: {
    title: "Landing Page — NovaTech (modelo)",
    render: () => `
      <div class="demo">
        <span class="demo-tag">MODELO DEMONSTRATIVO</span>
        <header class="demo-header">
          <span class="demo-header__logo">NovaTech</span>
          <nav class="demo-header__nav">
            <a href="#">Início</a><a href="#">Soluções</a><a href="#">Sobre</a><a href="#">Contato</a>
          </nav>
          <a href="#" class="btn btn--primary btn--sm" onclick="return false;">Falar conosco</a>
        </header>

        <section class="demo-hero">
          <h2>Tecnologia que transforma negócios.</h2>
          <p>Uma solução digital criada para empresas que querem crescer, automatizar processos e melhorar sua presença online.</p>
          <div class="demo-hero__actions">
            <a href="#" class="btn btn--primary" onclick="return false;">Conhecer solução</a>
            <a href="#" class="btn btn--ghost" onclick="return false;">Falar com especialista</a>
          </div>
        </section>

        <section class="demo-section">
          <h3 class="demo-section__title">Por que escolher a NovaTech</h3>
          <div class="demo-row3">
            <div class="demo-mini-card">
              ${icon('<path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/><circle cx="12" cy="12" r="3.2"/>')}
              <h4>Automação de processos</h4>
              <p>Reduza tarefas manuais e ganhe tempo para focar no que importa.</p>
            </div>
            <div class="demo-mini-card">
              ${icon('<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>')}
              <h4>Plataforma escalável</h4>
              <p>Cresce junto com a sua operação, sem perder performance.</p>
            </div>
            <div class="demo-mini-card">
              ${icon('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>')}
              <h4>Suporte contínuo</h4>
              <p>Acompanhamento próximo durante toda a jornada digital.</p>
            </div>
          </div>
        </section>

        <section class="demo-section demo-section--alt">
          <h3 class="demo-section__title">O que nossos clientes (fictícios) dizem</h3>
          <div class="demo-testimonials">
            <div class="demo-testimonial">
              <p>"A NovaTech reorganizou nosso atendimento e triplicou nossa capacidade de resposta." — depoimento demonstrativo.</p>
              <div class="demo-testimonial__who">
                <span class="demo-testimonial__avatar"></span>
                <span><strong>Cliente fictício A</strong><span>Empresa exemplo</span></span>
              </div>
            </div>
            <div class="demo-testimonial">
              <p>"Implementação rápida e um produto muito acima do que esperávamos." — depoimento demonstrativo.</p>
              <div class="demo-testimonial__who">
                <span class="demo-testimonial__avatar"></span>
                <span><strong>Cliente fictício B</strong><span>Empresa exemplo</span></span>
              </div>
            </div>
          </div>
        </section>

        <footer class="demo-footer">
          <span>NovaTech © modelo demonstrativo</span>
          <span>contato@novatech.exemplo</span>
        </footer>

        ${ctaBlock()}
      </div>
    `,
  },

  // ---------------- SITE INSTITUCIONAL ----------------
  site: {
    title: "Site Institucional — Sua Empresa (modelo)",
    render: () => `
      <div class="demo">
        <span class="demo-tag">MODELO DEMONSTRATIVO</span>
        <header class="demo-header">
          <span class="demo-header__logo">Sua Empresa</span>
          <nav class="demo-header__nav">
            <a href="#">Início</a><a href="#">Sobre</a><a href="#">Serviços</a><a href="#">Projetos</a><a href="#">Contato</a>
          </nav>
          <a href="#" class="btn btn--primary btn--sm" onclick="return false;">Contato</a>
        </header>

        <section class="demo-hero">
          <h2>Construindo resultados para empresas que pensam no futuro.</h2>
          <p>Um site institucional pensado para transmitir profissionalismo e gerar confiança desde o primeiro acesso.</p>
          <div class="demo-hero__actions">
            <a href="#" class="btn btn--primary" onclick="return false;">Conhecer serviços</a>
            <a href="#" class="btn btn--ghost" onclick="return false;">Falar com a equipe</a>
          </div>
        </section>

        <section class="demo-section">
          <h3 class="demo-section__title">Sobre a empresa</h3>
          <div class="demo-row3">
            <div class="demo-mini-card">
              <h4>Quem somos</h4>
              <p>Texto institucional demonstrativo apresentando a história e a missão da empresa.</p>
            </div>
            <div class="demo-mini-card">
              <h4>Nossos serviços</h4>
              <p>Espaço para detalhar as principais soluções oferecidas ao mercado.</p>
            </div>
            <div class="demo-mini-card">
              <h4>Diferenciais</h4>
              <p>Destaque dos pontos fortes que diferenciam a empresa da concorrência.</p>
            </div>
          </div>
        </section>

        <section class="demo-section demo-section--alt">
          <h3 class="demo-section__title">Projetos (exemplo)</h3>
          <div class="demo-row3">
            <div class="demo-mini-card"><h4>Projeto A</h4><p>Categoria demonstrativa</p></div>
            <div class="demo-mini-card"><h4>Projeto B</h4><p>Categoria demonstrativa</p></div>
            <div class="demo-mini-card"><h4>Projeto C</h4><p>Categoria demonstrativa</p></div>
          </div>
        </section>

        <footer class="demo-footer">
          <span>Sua Empresa © modelo demonstrativo</span>
          <span>contato@suaempresa.exemplo</span>
        </footer>

        ${ctaBlock()}
      </div>
    `,
  },

  // ---------------- CRM ----------------
  crm: {
    title: "CRM — ZUNQ CRM (modelo)",
    render: () => `
      <div class="demo">
        <span class="demo-tag">MODELO DEMONSTRATIVO</span>
        <div class="demo-app">
          <aside class="demo-app__sidebar">
            <div class="demo-app__brand">ZUNQ CRM</div>
            <nav class="demo-app__nav" data-tabs="crm">
              <button class="is-active" data-tab="dashboard"><span class="demo-app__nav-dot"></span>Dashboard</button>
              <button data-tab="leads"><span class="demo-app__nav-dot"></span>Leads</button>
              <button data-tab="clientes"><span class="demo-app__nav-dot"></span>Clientes</button>
              <button data-tab="negocios"><span class="demo-app__nav-dot"></span>Negócios</button>
              <button data-tab="tarefas"><span class="demo-app__nav-dot"></span>Tarefas</button>
              <button data-tab="relatorios"><span class="demo-app__nav-dot"></span>Relatórios</button>
              <button data-tab="config"><span class="demo-app__nav-dot"></span>Configurações</button>
            </nav>
          </aside>

          <div class="demo-app__main">
            <div class="demo-app__topbar">
              <h2>Dashboard</h2>
              <span class="demo-app__search">Pesquisar leads, clientes...</span>
            </div>

            <div class="demo-stats">
              <div class="demo-stat"><p class="demo-stat__label">Leads</p><p class="demo-stat__value">128</p></div>
              <div class="demo-stat"><p class="demo-stat__label">Clientes</p><p class="demo-stat__value">54</p></div>
              <div class="demo-stat"><p class="demo-stat__label">Negócios em andamento</p><p class="demo-stat__value is-blue">19</p></div>
              <div class="demo-stat"><p class="demo-stat__label">Conversões</p><p class="demo-stat__value is-up">32%</p></div>
            </div>

            <div class="demo-panel">
              <div class="demo-panel__head"><h3>Novos leads por semana</h3><span>últimas 8 semanas</span></div>
              <div class="demo-chart">
                <i style="height:38%"></i><i style="height:55%"></i><i style="height:44%"></i><i style="height:70%"></i>
                <i style="height:60%"></i><i style="height:82%"></i><i style="height:66%"></i><i style="height:90%"></i>
              </div>
            </div>

            <div class="demo-panel">
              <div class="demo-panel__head"><h3>Leads recentes</h3><span>7 no total</span></div>
              <div class="demo-filters">
                <span class="is-active">Todos</span><span>Em negociação</span><span>Novo</span><span>Ganho</span>
              </div>
              <table class="demo-table">
                <thead><tr><th>Nome</th><th>Empresa</th><th>Status</th><th>Valor</th><th>Data</th></tr></thead>
                <tbody>
                  <tr><td><strong>João Silva</strong></td><td>Empresa Alpha</td><td><span class="demo-badge demo-badge--blue">Em negociação</span></td><td>R$ 2.500</td><td>12/09</td></tr>
                  <tr><td><strong>Mariana Costa</strong></td><td>Beta Comércio</td><td><span class="demo-badge demo-badge--green">Ganho</span></td><td>R$ 4.800</td><td>10/09</td></tr>
                  <tr><td><strong>Pedro Almeida</strong></td><td>Gama Serviços</td><td><span class="demo-badge demo-badge--gray">Novo</span></td><td>R$ 1.200</td><td>09/09</td></tr>
                  <tr><td><strong>Carla Souza</strong></td><td>Delta Tech</td><td><span class="demo-badge demo-badge--blue">Em negociação</span></td><td>R$ 6.300</td><td>08/09</td></tr>
                  <tr><td><strong>Rafael Lima</strong></td><td>Epsilon Corp</td><td><span class="demo-badge demo-badge--yellow">Aguardando</span></td><td>R$ 3.100</td><td>05/09</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        ${ctaBlock()}
      </div>
    `,
  },

  // ---------------- SISTEMA WEB ----------------
  sistema: {
    title: "Sistema Web — Gestão Empresarial (modelo)",
    render: () => `
      <div class="demo">
        <span class="demo-tag">MODELO DEMONSTRATIVO</span>
        <div class="demo-app">
          <aside class="demo-app__sidebar">
            <div class="demo-app__brand">Gestão Empresarial</div>
            <nav class="demo-app__nav">
              <button class="is-active"><span class="demo-app__nav-dot"></span>Dashboard</button>
              <button><span class="demo-app__nav-dot"></span>Usuários</button>
              <button><span class="demo-app__nav-dot"></span>Clientes</button>
              <button><span class="demo-app__nav-dot"></span>Produtos</button>
              <button><span class="demo-app__nav-dot"></span>Pedidos</button>
              <button><span class="demo-app__nav-dot"></span>Relatórios</button>
              <button><span class="demo-app__nav-dot"></span>Configurações</button>
            </nav>
          </aside>

          <div class="demo-app__main">
            <div class="demo-app__topbar">
              <h2>Visão geral</h2>
              <span class="demo-app__search">Buscar pedido, cliente...</span>
            </div>

            <div class="demo-stats">
              <div class="demo-stat"><p class="demo-stat__label">Pedidos no mês</p><p class="demo-stat__value">312</p></div>
              <div class="demo-stat"><p class="demo-stat__label">Produtos ativos</p><p class="demo-stat__value">87</p></div>
              <div class="demo-stat"><p class="demo-stat__label">Usuários do sistema</p><p class="demo-stat__value is-blue">14</p></div>
              <div class="demo-stat"><p class="demo-stat__label">Clientes ativos</p><p class="demo-stat__value is-up">205</p></div>
            </div>

            <div class="demo-panel">
              <div class="demo-panel__head"><h3>Pedidos recentes</h3><span>hoje</span></div>
              <table class="demo-table">
                <thead><tr><th>Pedido</th><th>Cliente</th><th>Status</th><th>Total</th></tr></thead>
                <tbody>
                  <tr><td><strong>#1042</strong></td><td>Loja Central</td><td><span class="demo-badge demo-badge--green">Concluído</span></td><td>R$ 890</td></tr>
                  <tr><td><strong>#1043</strong></td><td>Distribuidora Sul</td><td><span class="demo-badge demo-badge--blue">Processando</span></td><td>R$ 2.140</td></tr>
                  <tr><td><strong>#1044</strong></td><td>Mercado União</td><td><span class="demo-badge demo-badge--yellow">Pendente</span></td><td>R$ 460</td></tr>
                  <tr><td><strong>#1045</strong></td><td>Comércio Real</td><td><span class="demo-badge demo-badge--green">Concluído</span></td><td>R$ 3.220</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        ${ctaBlock()}
      </div>
    `,
  },

  // ---------------- WEB APP (TaskFlow) ----------------
  webapp: {
    title: "Web App — TaskFlow (modelo)",
    render: () => `
      <div class="demo">
        <span class="demo-tag">MODELO DEMONSTRATIVO</span>
        <div class="demo-app">
          <aside class="demo-app__sidebar">
            <div class="demo-app__brand">TaskFlow</div>
            <nav class="demo-app__nav">
              <button class="is-active"><span class="demo-app__nav-dot"></span>Dashboard</button>
              <button><span class="demo-app__nav-dot"></span>Projetos</button>
              <button><span class="demo-app__nav-dot"></span>Tarefas</button>
              <button><span class="demo-app__nav-dot"></span>Equipe</button>
              <button><span class="demo-app__nav-dot"></span>Calendário</button>
              <button><span class="demo-app__nav-dot"></span>Perfil</button>
            </nav>
          </aside>

          <div class="demo-app__main">
            <div class="demo-app__topbar">
              <h2>Projeto: Lançamento Q4</h2>
              <span class="demo-app__search">+ Nova tarefa</span>
            </div>

            <p style="color:var(--text-faint); font-size:0.8rem; margin-bottom:16px;">Clique em uma tarefa para simular a mudança de status.</p>

            <div class="demo-kanban" id="taskflowKanban">
              <div class="demo-kanban__col">
                <div class="demo-kanban__col-head"><span>A fazer</span><span class="demo-badge demo-badge--gray">3</span></div>
                <div class="demo-task" data-status="todo"><p>Definir identidade visual da campanha</p><div class="demo-task__meta"><span class="demo-badge demo-badge--gray">A fazer</span><span class="demo-task__avatars"><span></span><span></span></span></div><p class="demo-task__hint">clique para avançar</p></div>
                <div class="demo-task" data-status="todo"><p>Escrever briefing para o time de design</p><div class="demo-task__meta"><span class="demo-badge demo-badge--gray">A fazer</span><span class="demo-task__avatars"><span></span></span></div><p class="demo-task__hint">clique para avançar</p></div>
                <div class="demo-task" data-status="todo"><p>Organizar reunião de kickoff</p><div class="demo-task__meta"><span class="demo-badge demo-badge--gray">A fazer</span><span class="demo-task__avatars"><span></span></span></div><p class="demo-task__hint">clique para avançar</p></div>
              </div>
              <div class="demo-kanban__col">
                <div class="demo-kanban__col-head"><span>Em andamento</span><span class="demo-badge demo-badge--blue">2</span></div>
                <div class="demo-task" data-status="doing"><p>Desenvolver landing page de lançamento</p><div class="demo-task__meta"><span class="demo-badge demo-badge--blue">Em andamento</span><span class="demo-task__avatars"><span></span><span></span></span></div><p class="demo-task__hint">clique para avançar</p></div>
                <div class="demo-task" data-status="doing"><p>Configurar automação de e-mails</p><div class="demo-task__meta"><span class="demo-badge demo-badge--blue">Em andamento</span><span class="demo-task__avatars"><span></span></span></div><p class="demo-task__hint">clique para avançar</p></div>
              </div>
              <div class="demo-kanban__col">
                <div class="demo-kanban__col-head"><span>Concluído</span><span class="demo-badge demo-badge--green">2</span></div>
                <div class="demo-task" data-status="done"><p>Aprovar cronograma do projeto</p><div class="demo-task__meta"><span class="demo-badge demo-badge--green">Concluído</span><span class="demo-task__avatars"><span></span></span></div></div>
                <div class="demo-task" data-status="done"><p>Selecionar fornecedores</p><div class="demo-task__meta"><span class="demo-badge demo-badge--green">Concluído</span><span class="demo-task__avatars"><span></span><span></span></span></div></div>
              </div>
            </div>
          </div>
        </div>

        ${ctaBlock()}
      </div>
    `,
    afterRender: (root) => {
      const order = ["todo", "doing", "done"];
      const labels = {
        todo: ["A fazer", "demo-badge--gray"],
        doing: ["Em andamento", "demo-badge--blue"],
        done: ["Concluído", "demo-badge--green"],
      };
      root.querySelectorAll(".demo-task[data-status]").forEach((task) => {
        task.addEventListener("click", () => {
          const current = task.getAttribute("data-status");
          const next = order[(order.indexOf(current) + 1) % order.length];
          task.setAttribute("data-status", next);
          const [label, cls] = labels[next];
          const badge = task.querySelector(".demo-badge");
          badge.className = `demo-badge ${cls}`;
          badge.textContent = label;
        });
      });
    },
  },

  // ---------------- SAAS (FlowDesk) ----------------
  saas: {
    title: "SaaS — FlowDesk (modelo)",
    render: () => `
      <div class="demo">
        <span class="demo-tag">MODELO DEMONSTRATIVO</span>
        <div class="demo-app">
          <aside class="demo-app__sidebar">
            <div class="demo-app__brand">FlowDesk</div>
            <nav class="demo-app__nav">
              <button class="is-active"><span class="demo-app__nav-dot"></span>Dashboard</button>
              <button><span class="demo-app__nav-dot"></span>Usuários</button>
              <button><span class="demo-app__nav-dot"></span>Projetos</button>
              <button><span class="demo-app__nav-dot"></span>Analytics</button>
              <button><span class="demo-app__nav-dot"></span>Configurações</button>
            </nav>
          </aside>

          <div class="demo-app__main">
            <div class="demo-app__topbar">
              <h2>Visão geral da conta</h2>
              <span class="demo-app__search">Workspace: Equipe Demo</span>
            </div>

            <div class="demo-plan">
              <div><strong>Plano atual: Profissional</strong><span>Renovação em 18 dias</span></div>
              <a href="#" class="btn btn--ghost btn--sm" onclick="return false;">Gerenciar plano</a>
            </div>

            <div class="demo-panel">
              <div class="demo-panel__head"><h3>Uso da plataforma</h3><span>ciclo atual</span></div>
              <div class="demo-usage">
                <div>
                  <div class="demo-usage-item">
                    <div class="demo-usage-item__head"><span>Usuários</span><span>18 / 25</span></div>
                    <div class="demo-usage-bar"><i style="width:72%"></i></div>
                  </div>
                  <div class="demo-usage-item">
                    <div class="demo-usage-item__head"><span>Armazenamento</span><span>34 GB / 50 GB</span></div>
                    <div class="demo-usage-bar"><i style="width:68%"></i></div>
                  </div>
                </div>
                <div>
                  <div class="demo-usage-item">
                    <div class="demo-usage-item__head"><span>Projetos ativos</span><span>9 / 15</span></div>
                    <div class="demo-usage-bar"><i style="width:60%"></i></div>
                  </div>
                  <div class="demo-usage-item">
                    <div class="demo-usage-item__head"><span>Chamadas de API</span><span>4.200 / 10.000</span></div>
                    <div class="demo-usage-bar"><i style="width:42%"></i></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="demo-panel">
              <div class="demo-panel__head"><h3>Atividade da plataforma</h3><span>últimos 8 dias</span></div>
              <div class="demo-chart">
                <i style="height:40%"></i><i style="height:52%"></i><i style="height:48%"></i><i style="height:65%"></i>
                <i style="height:58%"></i><i style="height:76%"></i><i style="height:70%"></i><i style="height:88%"></i>
              </div>
            </div>

            <div class="demo-stats">
              <div class="demo-stat"><p class="demo-stat__label">Usuários ativos</p><p class="demo-stat__value">18</p></div>
              <div class="demo-stat"><p class="demo-stat__label">Projetos</p><p class="demo-stat__value">9</p></div>
              <div class="demo-stat"><p class="demo-stat__label">Uptime</p><p class="demo-stat__value is-up">99,9%</p></div>
              <div class="demo-stat"><p class="demo-stat__label">Armazenamento</p><p class="demo-stat__value is-blue">34 GB</p></div>
            </div>
          </div>
        </div>

        ${ctaBlock()}
      </div>
    `,
  },

  // ---------------- AUTOMAÇÕES ----------------
  automacao: {
    title: "Automação — Atendimento (modelo)",
    render: () => `
      <div class="demo">
        <span class="demo-tag">MODELO DEMONSTRATIVO</span>
        <div class="demo-flow-wrap">
          <h2 style="font-family:'Space Grotesk',sans-serif; font-size:1.4rem; margin-bottom:8px;">Automação de atendimento</h2>
          <p style="color:var(--text-dim); max-width:440px; margin:0 auto 34px;">Veja como um novo lead percorre o fluxo até chegar à equipe de vendas, sem intervenção manual.</p>

          <div class="demo-flow" id="autoFlow">
            <div class="demo-flow__node" data-node="0">Novo lead <svg class="demo-flow__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg></div>
            <div class="demo-flow__connector" data-connector="0"></div>
            <div class="demo-flow__node" data-node="1">Formulário recebido <svg class="demo-flow__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg></div>
            <div class="demo-flow__connector" data-connector="1"></div>
            <div class="demo-flow__node" data-node="2">CRM <svg class="demo-flow__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg></div>
            <div class="demo-flow__connector" data-connector="2"></div>
            <div class="demo-flow__node" data-node="3">WhatsApp <svg class="demo-flow__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg></div>
            <div class="demo-flow__connector" data-connector="3"></div>
            <div class="demo-flow__node" data-node="4">Notificação <svg class="demo-flow__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg></div>
            <div class="demo-flow__connector" data-connector="4"></div>
            <div class="demo-flow__node" data-node="5">Vendedor <svg class="demo-flow__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg></div>
          </div>

          <div class="demo-flow__btn-wrap">
            <button type="button" class="btn btn--primary" id="testAutomationBtn">Testar automação</button>
          </div>

          <div class="demo-flow__log" id="autoFlowLog">
            <p class="demo-flow__log-line" data-log="0">Lead recebido</p>
            <p class="demo-flow__log-line" data-log="1"><strong>✓</strong>Dados capturados</p>
            <p class="demo-flow__log-line" data-log="2"><strong>✓</strong>Lead enviado para o CRM</p>
            <p class="demo-flow__log-line" data-log="3"><strong>✓</strong>WhatsApp acionado</p>
            <p class="demo-flow__log-line" data-log="4"><strong>✓</strong>Equipe notificada</p>
          </div>
        </div>

        ${ctaBlock()}
      </div>
    `,
    afterRender: (root) => {
      const btn = root.querySelector("#testAutomationBtn");
      const nodes = root.querySelectorAll(".demo-flow__node");
      const connectors = root.querySelectorAll(".demo-flow__connector");
      const logs = root.querySelectorAll(".demo-flow__log-line");
      let running = false;

      const reset = () => {
        nodes.forEach((n) => n.classList.remove("is-done"));
        connectors.forEach((c) => c.classList.remove("is-done"));
        logs.forEach((l) => l.classList.remove("is-shown"));
      };

      btn.addEventListener("click", () => {
        if (running) return;
        running = true;
        reset();
        btn.disabled = true;
        btn.textContent = "Executando...";

        const steps = nodes.length + connectors.length + logs.length;
        let i = 0;
        const seq = [];
        nodes.forEach((n, idx) => {
          seq.push(() => n.classList.add("is-done"));
          if (connectors[idx]) seq.push(() => connectors[idx].classList.add("is-done"));
        });
        logs.forEach((l) => seq.push(() => l.classList.add("is-shown")));

        const runStep = () => {
          if (i >= seq.length) {
            running = false;
            btn.disabled = false;
            btn.textContent = "Testar novamente";
            return;
          }
          seq[i]();
          i++;
          setTimeout(runStep, 260);
        };
        runStep();
      });
    },
  },
};

// =========================================================
// CARDS DA VITRINE
// =========================================================
function setupModelCards() {
  document.querySelectorAll(".model-card__btn, .model-card").forEach((el) => {
    el.addEventListener("click", (e) => {
      // evita abrir 2x quando o clique é no botão dentro do card
      if (el.classList.contains("model-card") && e.target.closest(".model-card__btn")) return;
      const id = el.getAttribute("data-model");
      if (id) openModal(id);
    });
  });
}

// =========================================================
// MODAL
// =========================================================
let lastFocused = null;

function setupModal() {
  const modal = document.getElementById("modelModal");
  const backdrop = document.getElementById("modelModalBackdrop");
  const closeBtn = document.getElementById("modelModalClose");
  if (!modal) return;

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
}

function openModal(id) {
  const data = MODELS[id];
  if (!data) return;

  const modal = document.getElementById("modelModal");
  const titleEl = document.getElementById("modelModalTitle");
  const bodyEl = document.getElementById("modelModalBody");

  titleEl.textContent = data.title;
  bodyEl.innerHTML = data.render();
  bodyEl.scrollTop = 0;

  wireWhatsappButtons(bodyEl);
  if (typeof data.afterRender === "function") data.afterRender(bodyEl);

  lastFocused = document.activeElement;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modelModalClose").focus();
}

function closeModal() {
  const modal = document.getElementById("modelModal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

function wireWhatsappButtons(root) {
  if (typeof WHATSAPP_NUMBER === "undefined") return;
  const msg = typeof WHATSAPP_MESSAGE !== "undefined"
    ? WHATSAPP_MESSAGE
    : "Olá, ZUNQ! Tenho interesse em criar um projeto digital para minha empresa e gostaria de conversar.";
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  root.querySelectorAll(".js-demo-whats").forEach((btn) => btn.setAttribute("href", url));
}
