import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lance ta modèle IA sur Fanatic",
  description:
    "Formation gratuite + plateforme dédiée aux créateurs IA. Rejoins +1000 créateurs qui génèrent des revenus avec leur modèle IA.",
  openGraph: {
    title: "Lance ta modèle IA sur Fanatic",
    description:
      "Formation gratuite + plateforme dédiée aux créateurs IA",
    url: "https://creators.fanaticplace.fr",
    siteName: "Fanatic",
    images: [
      {
        url: "https://image2url.com/r2/default/images/1775312304434-668be462-d466-43eb-ae55-d24617b615c6.jpeg",
        width: 1200,
        height: 630,
        alt: "Fanatic - Créateurs IA",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lance ta modèle IA sur Fanatic",
    description: "Formation gratuite + plateforme dédiée aux créateurs IA",
    images: [
      "https://image2url.com/r2/default/images/1775312304434-668be462-d466-43eb-ae55-d24617b615c6.jpeg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* META PIXEL CODE */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* /META PIXEL CODE */}
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
