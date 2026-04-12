"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const CTA_URL = "https://discord.gg/CYcUDngnvp";

function trackLead() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead");
  }
}

const proofs = [
  {
    name: "Nordine",
    result: "90€ en 10 min",
    img: "https://image2url.com/r2/default/images/1775312304434-668be462-d466-43eb-ae55-d24617b615c6.jpeg",
  },
  {
    name: "Thomas",
    result: "100€ en 5 min",
    img: "https://image2url.com/r2/default/images/1775312921614-519c6b1c-ae58-45f5-b482-e3365ed94814.jpeg",
  },
  {
    name: "Mathis",
    result: "410€ en 2h",
    img: "https://image2url.com/r2/default/images/1775313398960-c7d4605f-6fc8-4dd7-9670-b27329d6c81c.jpeg",
  },
  {
    name: "Alexandre",
    result: "85€ en 1 min",
    img: "https://image2url.com/r2/default/images/1775313964642-8ad19fb8-7b84-4c0e-a5cb-717ad37988fe.jpeg",
  },
  {
    name: "Marko",
    result: "55€ en 2 min",
    img: "https://image2url.com/r2/default/images/1775314193748-eea34a6a-315e-4077-b2c8-efe337f1222b.jpeg",
  },
  {
    name: "Hugo",
    result: "75€ en 3 min",
    img: "https://image2url.com/r2/default/images/1775314632900-065fbb9d-c812-446c-a75d-4f84b4734e1b.jpeg",
  },
  {
    name: "Juju",
    result: "190€ en 24h",
    img: "https://image2url.com/r2/default/images/1775314901099-bb756932-1db8-4f4c-8351-a0f23d56011f.jpeg",
  },
  {
    name: "Ava",
    result: "140€ en 24h",
    img: "https://image2url.com/r2/default/images/1775315589010-f152552f-6ce4-42c9-a2ea-b47dfba8259c.jpeg",
  },
  {
    name: "Raphael",
    result: "100€ en 24h",
    img: "https://image2url.com/r2/default/images/1775315902578-e724b0bc-ecbd-4262-ba3b-1227d6e2d33e.jpeg",
  },
  {
    name: "Adam",
    result: "500€ en 24h",
    img: "https://image2url.com/r2/default/images/1775316227209-86353351-7434-42ed-bb1c-b880c6b021cf.jpeg",
  },
  {
    name: "Mathis",
    result: "535€ en 24h",
    img: "https://image2url.com/r2/default/images/1775316533393-b066910b-9a0c-422e-95ac-addd0153d5aa.jpeg",
  },
];

export default function Page() {
  return (
    <main
      style={{ backgroundColor: "#0d0d0d" }}
      className="min-h-screen font-sans"
    >
      {/* ── 1. HERO + VIDÉO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 pt-12 pb-10 text-center md:pt-20 md:pb-16">
        {/* Glow blob */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#8b5cf6]/40 bg-[#8b5cf6]/10 px-4 py-1.5 text-sm font-medium text-[#a78bfa] mb-5">
          <span className="h-2 w-2 rounded-full bg-[#8b5cf6] animate-pulse" />
          Formation 100% gratuite · Accès immédiat
        </div>

        {/* Titre */}
        <h1 className="mx-auto max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
          Ta modèle IA peut générer ses{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            premiers revenus cette semaine
          </span>
        </h1>

        {/* CTA */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <a
            href={CTA_URL}
            onClick={trackLead}
            className="btn-primary inline-block rounded-xl px-8 py-4 text-base font-bold text-white md:text-lg"
            style={{
              background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
              boxShadow: "0 0 30px rgba(139,92,246,0.45)",
              transition: "all 0.2s ease",
            }}
          >
            Rejoindre la communauté gratuite →
          </a>
          <p className="text-sm text-[#71717a]">
            Inscription gratuite · Accès immédiat
          </p>
        </div>

        {/* Vidéo VSL */}
        <div className="mx-auto mt-8 max-w-2xl">
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
            }}
          >
            <div style={{ padding: "56.25% 0 0 0", position: "relative", width: "100%", borderRadius: "12px", overflow: "hidden" }}>
              <iframe
                src="https://player.vimeo.com/video/1182360434?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="VSL Fanatic"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-sm italic text-[#71717a]">
            Dans cette vidéo : comment fonctionne Fanatic, pourquoi nos
            créateurs gagnent de l&apos;argent rapidement, et comment accéder à
            toute la formation gratuitement.
          </p>
        </div>
      </section>

      {/* ── 3. POURQUOI ÇA MARCHE ───────────────────────────────── */}
      <section className="px-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-[#8b5cf6]">
            Pourquoi ça marche
          </p>
          <h2 className="mb-12 text-center text-2xl font-bold text-white md:text-3xl">
            Tout ce qu&apos;il te faut pour te lancer,{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              au même endroit
            </span>
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {/* Bloc 1 */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{ background: "rgba(139,92,246,0.15)" }}
              >
                ⚡
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Un modèle IA qui tourne 24h/24
              </h3>
              <p className="text-sm leading-relaxed text-[#a1a1aa]">
                Ta modèle génère des revenus même quand tu dors. Pas besoin
                d&apos;être présent en permanence.
              </p>
            </div>

            {/* Bloc 2 */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{ background: "rgba(139,92,246,0.15)" }}
              >
                🔓
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Formation complète offerte
              </h3>
              <p className="text-sm leading-relaxed text-[#a1a1aa]">
                Accède à tous nos tutos, scripts et méthodes dès ton
                inscription. Rien à payer.
              </p>
            </div>

            {/* Bloc 3 */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{ background: "rgba(139,92,246,0.15)" }}
              >
                🤝
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Une communauté qui avance avec toi
              </h3>
              <p className="text-sm leading-relaxed text-[#a1a1aa]">
                Rejoins +1000 créateurs sur notre Discord. Pose tes questions,
                partage tes résultats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PREUVES SOCIALES ─────────────────────────────────── */}
      <section className="px-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-[#8b5cf6]">
            Ils l&apos;ont fait avant toi
          </p>
          <h2 className="mb-2 text-center text-2xl font-bold text-white md:text-3xl">
            Ils ont lancé leur modèle IA sur Fanatic.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Voilà ce qui s&apos;est passé.
            </span>
          </h2>
          <p className="mb-10 text-center text-sm text-[#71717a]">
            Des vrais créateurs. Des vrais résultats. En quelques heures.
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            {proofs.map((proof, i) => (
              <div key={i} className="flex flex-col gap-2" style={{ padding: "8px" }}>
                {/* Badge */}
                <div
                  className="rounded-lg px-3 py-1.5 text-center font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                    fontSize: "clamp(12px, 2.5vw, 14px)",
                  }}
                >
                  {proof.name} — {proof.result}
                </div>
                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={proof.img}
                  alt={`${proof.name} — ${proof.result}`}
                  loading="lazy"
                  className="rounded-xl"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA FINAL ────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 py-20 text-center md:py-28">
        {/* Bottom glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)",
          }}
        />

        <div
          className="relative mx-auto max-w-2xl rounded-3xl px-6 py-12 md:px-12"
          style={{
            background: "rgba(139,92,246,0.08)",
            border: "1px solid rgba(139,92,246,0.25)",
          }}
        >
          <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            Prêt à lancer ta modèle IA ?
          </h2>
          <p className="mb-8 text-base text-[#a1a1aa] md:text-lg">
            La formation est gratuite.
            <br />
            Les premiers revenus peuvent arriver dès cette semaine.
          </p>

          <a
            href={CTA_URL}
            onClick={trackLead}
            className="inline-block rounded-xl px-10 py-5 text-lg font-extrabold text-white"
            style={{
              background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
              boxShadow: "0 0 40px rgba(139,92,246,0.5)",
              transition: "all 0.2s ease",
            }}
          >
            Créer mon compte gratuitement →
          </a>

          <p className="mt-5 text-sm text-[#71717a]">
            Déjà inscrit ?{" "}
            <a
              href="https://discord.gg/CYcUDngnvp"
              className="underline hover:text-[#a1a1aa] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rejoins le Discord →
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
