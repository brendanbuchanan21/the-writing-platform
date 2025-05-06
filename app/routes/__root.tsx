import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { HeadContent, Scripts } from "@tanstack/react-router";
import * as React from "react";
import { type QueryClient } from "@tanstack/react-query";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import { NotFound } from "~/components/NotFound";
import appCss from "~/styles/app.css?url";
import { seo } from "~/utils/seo";
import { Header } from "~/routes/-components/header";
import { FooterSection } from "~/routes/-components/footer";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Toast } from "~/components/ui/toast";
import { Toaster } from "~/components/ui/toaster";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        ...seo({
          title: "ViennaMata",
          description: "A collection of books by Vienna Mata.",
        }),
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
        { rel: "icon", href: "/favicon.ico" },
      ],
      scripts: [
        {
          src: "https://umami-production-101d.up.railway.app/script.js",
          defer: true,
          "data-website-id": "bde4216e-7d46-49e4-8bfc-7f28d5a0ba17",
        },
      ],
    }),
    errorComponent: (props) => {
      return (
        <RootDocument>
          <DefaultCatchBoundary {...props} />
        </RootDocument>
      );
    },
    notFoundComponent: () => <NotFound />,
    component: RootComponent,
  }
);

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const routerState = useRouterState();
  const prevPathnameRef = React.useRef("");

  React.useEffect(() => {
    const currentPathname = routerState.location.pathname;
    const pathnameChanged = prevPathnameRef.current !== currentPathname;

    if (pathnameChanged && routerState.status === "pending") {
      NProgress.start();
      prevPathnameRef.current = currentPathname;
    }

    if (routerState.status === "idle") {
      NProgress.done();
    }
  }, [routerState.status, routerState.location.pathname]);

  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
        <style>{`
          #nprogress .bar {
            background: #22c55e !important;
            height: 3px;
          }
          #nprogress .peg {
            box-shadow: 0 0 10px #22c55e, 0 0 5px #22c55e;
          }
          #nprogress .spinner-icon {
            display: none;
          }
        `}</style>
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <Toaster />
        <main className="pt-[80px] pb-16 min-h-screen">{children}</main>
        <FooterSection />
        <TanStackRouterDevtools position="bottom-right" />
        <ReactQueryDevtools buttonPosition="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}
