
import type { Metadata } from "next";
import { Karla, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const karla = Karla({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
})

export const metadata: Metadata = {
  title: "브랜즈모어 AI - 데이터 기반 맞춤형 혁신",
  description: "임원진을 위한 실무형 AI 리더십 교육과 RAG 기반의 AI 에이전트로 미래를 선도하는 브랜즈모어 AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.difyChatbotConfig = {
              token: 'XyrDFWfBaDf7gvM9',
              baseUrl: 'http://dify.deskterior.ai',
              inputs: {
                // You can define the inputs from the Start node here
                // key is the variable name
                // e.g.
                // name: "NAME"
              },
              systemVariables: {
                // user_id: 'YOU CAN DEFINE USER ID HERE',
                // conversation_id: 'YOU CAN DEFINE CONVERSATION ID HERE, IT MUST BE A VALID UUID',
              },
              userVariables: {
                // avatar_url: 'YOU CAN DEFINE USER AVATAR URL HERE',
                // name: 'YOU CAN DEFINE USER NAME HERE',
              },
            }
          `
        }} />
        <script src="http://dify.deskterior.ai/embed.min.js" id="XyrDFWfBaDf7gvM9" defer></script>
        <style dangerouslySetInnerHTML={{
          __html: `
            #dify-chatbot-bubble-button {
              background-color: #1C64F2 !important;
            }
            #dify-chatbot-bubble-window {
              width: 24rem !important;
              height: 40rem !important;
            }
          `
        }} />
      </head>
      <body
        className={`${karla.variable} ${pacifico.variable} antialiased font-karla`}
      >
        {children}
      </body>
    </html>
  );
}
