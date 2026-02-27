iimport React from "react";

export default function JLInstalacoesSite() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      {/* BOTÃO WHATSAPP */}
      <a
        href="https://wa.me/5511952020940"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "15px 20px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        WhatsApp
      </a>

      {/* HERO */}
      <section style={{ background: "#0f172a", color: "white", padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>J&L Instalações</h1>
        <p style={{ fontSize: "20px" }}>Automação • Elétrica • Instalação • Manutenção</p>
        <p>Atendemos São Paulo e Região</p>
        <a href="#orcamento" style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "15px 30px",
          background: "#2563eb",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px"
        }}>
          Solicitar Orçamento
        </a>
      </section>

      {/* SERVIÇOS */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "40px" }}>Nossos Serviços</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {[
            "Automação Residencial",
            "Instalações Elétricas",
            "Instalação de Equipamentos",
            "Manutenção Preventiva e Corretiva"
          ].map((service, index) => (
            <div key={index} style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
              <img
                src={`https://source.unsplash.com/400x250/?electrician,smart-home&sig=${index}`}
                alt={service}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{ marginTop: "15px" }}>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ORÇAMENTO */}
      <section id="orcamento" style={{ background: "#f1f5f9", padding: "60px 20px", textAlign: "center" }}>
        <h2>Solicite um Orçamento</h2>
        <form style={{ maxWidth: "500px", margin: "0 auto", display: "grid", gap: "15px" }}>
          <input type="text" placeholder="Nome" required style={{ padding: "10px" }} />
          <input type="tel" placeholder="Telefone" required style={{ padding: "10px" }} />
          <input type="email" placeholder="Email" required style={{ padding: "10px" }} />
          <textarea placeholder="Descreva o serviço desejado" rows="4" required style={{ padding: "10px" }}></textarea>
          <button type="submit" style={{ padding: "12px", background: "#2563eb", color: "white", border: "none", borderRadius: "6px" }}>
            Enviar Solicitação
          </button>
        </form>
      </section>

      {/* CONTATO */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Contato</h2>
        <p>(11) 9 5202-0940</p>
        <p>(11) 9 7376-3563</p>
        <p>jlinstalacoes@gmail.com</p>
      </section>

      <footer style={{ background: "#0f172a", color: "white", textAlign: "center", padding: "20px" }}>
        © {new Date().getFullYear()} J&L Instalações - Todos os direitos reservados
      </footer>
    </div>
  );
}
