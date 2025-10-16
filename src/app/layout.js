import { Inter } from "next/font/google";
import Script from 'next/script';

import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XMAILBOX 邮箱盒子 - 极智未来科技",
  description: "企业邮箱最佳解决方案 XMAILBOX Business Email solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh_CN">
      <body className={inter.className}>
        <LanguageProvider>
          <TransitionProvider>{children}</TransitionProvider>
        </LanguageProvider>

        <Script
        id="51.la"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"3HjiApLRunL7ivku",ck:"3HjiApLRunL7ivku"});
          `,
        }}
      />
      </body>
    </html>
  );
}
