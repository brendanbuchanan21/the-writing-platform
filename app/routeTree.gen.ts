/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UnauthorizedImport } from './routes/unauthorized'
import { Route as UnauthenticatedImport } from './routes/unauthenticated'
import { Route as TermsOfServiceImport } from './routes/terms-of-service'
import { Route as PurchaseImport } from './routes/purchase'
import { Route as PrivacyPolicyImport } from './routes/privacy-policy'
import { Route as LoginImport } from './routes/login'
import { Route as CancelImport } from './routes/cancel'
import { Route as IndexImport } from './routes/index'
import { Route as ProfileIndexImport } from './routes/profile/index'
import { Route as BooksIndexImport } from './routes/books/index'
import { Route as AdminIndexImport } from './routes/admin/index'
import { Route as AboutIndexImport } from './routes/about/index'
import { Route as BooksCreateImport } from './routes/books/create'
import { Route as BooksBookIdIndexImport } from './routes/books/$bookId/index'
import { Route as BooksBookIdEditImport } from './routes/books/$bookId/edit'
import { Route as BooksBookIdChaptersChapterIdImport } from './routes/books/$bookId/chapters/$chapterId'

// Create/Update Routes

const UnauthorizedRoute = UnauthorizedImport.update({
  id: '/unauthorized',
  path: '/unauthorized',
  getParentRoute: () => rootRoute,
} as any)

const UnauthenticatedRoute = UnauthenticatedImport.update({
  id: '/unauthenticated',
  path: '/unauthenticated',
  getParentRoute: () => rootRoute,
} as any)

const TermsOfServiceRoute = TermsOfServiceImport.update({
  id: '/terms-of-service',
  path: '/terms-of-service',
  getParentRoute: () => rootRoute,
} as any)

const PurchaseRoute = PurchaseImport.update({
  id: '/purchase',
  path: '/purchase',
  getParentRoute: () => rootRoute,
} as any)

const PrivacyPolicyRoute = PrivacyPolicyImport.update({
  id: '/privacy-policy',
  path: '/privacy-policy',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const CancelRoute = CancelImport.update({
  id: '/cancel',
  path: '/cancel',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileIndexRoute = ProfileIndexImport.update({
  id: '/profile/',
  path: '/profile/',
  getParentRoute: () => rootRoute,
} as any)

const BooksIndexRoute = BooksIndexImport.update({
  id: '/books/',
  path: '/books/',
  getParentRoute: () => rootRoute,
} as any)

const AdminIndexRoute = AdminIndexImport.update({
  id: '/admin/',
  path: '/admin/',
  getParentRoute: () => rootRoute,
} as any)

const AboutIndexRoute = AboutIndexImport.update({
  id: '/about/',
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any)

const BooksCreateRoute = BooksCreateImport.update({
  id: '/books/create',
  path: '/books/create',
  getParentRoute: () => rootRoute,
} as any)

const BooksBookIdIndexRoute = BooksBookIdIndexImport.update({
  id: '/books/$bookId/',
  path: '/books/$bookId/',
  getParentRoute: () => rootRoute,
} as any)

const BooksBookIdEditRoute = BooksBookIdEditImport.update({
  id: '/books/$bookId/edit',
  path: '/books/$bookId/edit',
  getParentRoute: () => rootRoute,
} as any)

const BooksBookIdChaptersChapterIdRoute =
  BooksBookIdChaptersChapterIdImport.update({
    id: '/books/$bookId/chapters/$chapterId',
    path: '/books/$bookId/chapters/$chapterId',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/cancel': {
      id: '/cancel'
      path: '/cancel'
      fullPath: '/cancel'
      preLoaderRoute: typeof CancelImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/privacy-policy': {
      id: '/privacy-policy'
      path: '/privacy-policy'
      fullPath: '/privacy-policy'
      preLoaderRoute: typeof PrivacyPolicyImport
      parentRoute: typeof rootRoute
    }
    '/purchase': {
      id: '/purchase'
      path: '/purchase'
      fullPath: '/purchase'
      preLoaderRoute: typeof PurchaseImport
      parentRoute: typeof rootRoute
    }
    '/terms-of-service': {
      id: '/terms-of-service'
      path: '/terms-of-service'
      fullPath: '/terms-of-service'
      preLoaderRoute: typeof TermsOfServiceImport
      parentRoute: typeof rootRoute
    }
    '/unauthenticated': {
      id: '/unauthenticated'
      path: '/unauthenticated'
      fullPath: '/unauthenticated'
      preLoaderRoute: typeof UnauthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/unauthorized': {
      id: '/unauthorized'
      path: '/unauthorized'
      fullPath: '/unauthorized'
      preLoaderRoute: typeof UnauthorizedImport
      parentRoute: typeof rootRoute
    }
    '/books/create': {
      id: '/books/create'
      path: '/books/create'
      fullPath: '/books/create'
      preLoaderRoute: typeof BooksCreateImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      id: '/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutIndexImport
      parentRoute: typeof rootRoute
    }
    '/admin/': {
      id: '/admin/'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminIndexImport
      parentRoute: typeof rootRoute
    }
    '/books/': {
      id: '/books/'
      path: '/books'
      fullPath: '/books'
      preLoaderRoute: typeof BooksIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/': {
      id: '/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileIndexImport
      parentRoute: typeof rootRoute
    }
    '/books/$bookId/edit': {
      id: '/books/$bookId/edit'
      path: '/books/$bookId/edit'
      fullPath: '/books/$bookId/edit'
      preLoaderRoute: typeof BooksBookIdEditImport
      parentRoute: typeof rootRoute
    }
    '/books/$bookId/': {
      id: '/books/$bookId/'
      path: '/books/$bookId'
      fullPath: '/books/$bookId'
      preLoaderRoute: typeof BooksBookIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/books/$bookId/chapters/$chapterId': {
      id: '/books/$bookId/chapters/$chapterId'
      path: '/books/$bookId/chapters/$chapterId'
      fullPath: '/books/$bookId/chapters/$chapterId'
      preLoaderRoute: typeof BooksBookIdChaptersChapterIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/cancel': typeof CancelRoute
  '/login': typeof LoginRoute
  '/privacy-policy': typeof PrivacyPolicyRoute
  '/purchase': typeof PurchaseRoute
  '/terms-of-service': typeof TermsOfServiceRoute
  '/unauthenticated': typeof UnauthenticatedRoute
  '/unauthorized': typeof UnauthorizedRoute
  '/books/create': typeof BooksCreateRoute
  '/about': typeof AboutIndexRoute
  '/admin': typeof AdminIndexRoute
  '/books': typeof BooksIndexRoute
  '/profile': typeof ProfileIndexRoute
  '/books/$bookId/edit': typeof BooksBookIdEditRoute
  '/books/$bookId': typeof BooksBookIdIndexRoute
  '/books/$bookId/chapters/$chapterId': typeof BooksBookIdChaptersChapterIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/cancel': typeof CancelRoute
  '/login': typeof LoginRoute
  '/privacy-policy': typeof PrivacyPolicyRoute
  '/purchase': typeof PurchaseRoute
  '/terms-of-service': typeof TermsOfServiceRoute
  '/unauthenticated': typeof UnauthenticatedRoute
  '/unauthorized': typeof UnauthorizedRoute
  '/books/create': typeof BooksCreateRoute
  '/about': typeof AboutIndexRoute
  '/admin': typeof AdminIndexRoute
  '/books': typeof BooksIndexRoute
  '/profile': typeof ProfileIndexRoute
  '/books/$bookId/edit': typeof BooksBookIdEditRoute
  '/books/$bookId': typeof BooksBookIdIndexRoute
  '/books/$bookId/chapters/$chapterId': typeof BooksBookIdChaptersChapterIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/cancel': typeof CancelRoute
  '/login': typeof LoginRoute
  '/privacy-policy': typeof PrivacyPolicyRoute
  '/purchase': typeof PurchaseRoute
  '/terms-of-service': typeof TermsOfServiceRoute
  '/unauthenticated': typeof UnauthenticatedRoute
  '/unauthorized': typeof UnauthorizedRoute
  '/books/create': typeof BooksCreateRoute
  '/about/': typeof AboutIndexRoute
  '/admin/': typeof AdminIndexRoute
  '/books/': typeof BooksIndexRoute
  '/profile/': typeof ProfileIndexRoute
  '/books/$bookId/edit': typeof BooksBookIdEditRoute
  '/books/$bookId/': typeof BooksBookIdIndexRoute
  '/books/$bookId/chapters/$chapterId': typeof BooksBookIdChaptersChapterIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/cancel'
    | '/login'
    | '/privacy-policy'
    | '/purchase'
    | '/terms-of-service'
    | '/unauthenticated'
    | '/unauthorized'
    | '/books/create'
    | '/about'
    | '/admin'
    | '/books'
    | '/profile'
    | '/books/$bookId/edit'
    | '/books/$bookId'
    | '/books/$bookId/chapters/$chapterId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/cancel'
    | '/login'
    | '/privacy-policy'
    | '/purchase'
    | '/terms-of-service'
    | '/unauthenticated'
    | '/unauthorized'
    | '/books/create'
    | '/about'
    | '/admin'
    | '/books'
    | '/profile'
    | '/books/$bookId/edit'
    | '/books/$bookId'
    | '/books/$bookId/chapters/$chapterId'
  id:
    | '__root__'
    | '/'
    | '/cancel'
    | '/login'
    | '/privacy-policy'
    | '/purchase'
    | '/terms-of-service'
    | '/unauthenticated'
    | '/unauthorized'
    | '/books/create'
    | '/about/'
    | '/admin/'
    | '/books/'
    | '/profile/'
    | '/books/$bookId/edit'
    | '/books/$bookId/'
    | '/books/$bookId/chapters/$chapterId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CancelRoute: typeof CancelRoute
  LoginRoute: typeof LoginRoute
  PrivacyPolicyRoute: typeof PrivacyPolicyRoute
  PurchaseRoute: typeof PurchaseRoute
  TermsOfServiceRoute: typeof TermsOfServiceRoute
  UnauthenticatedRoute: typeof UnauthenticatedRoute
  UnauthorizedRoute: typeof UnauthorizedRoute
  BooksCreateRoute: typeof BooksCreateRoute
  AboutIndexRoute: typeof AboutIndexRoute
  AdminIndexRoute: typeof AdminIndexRoute
  BooksIndexRoute: typeof BooksIndexRoute
  ProfileIndexRoute: typeof ProfileIndexRoute
  BooksBookIdEditRoute: typeof BooksBookIdEditRoute
  BooksBookIdIndexRoute: typeof BooksBookIdIndexRoute
  BooksBookIdChaptersChapterIdRoute: typeof BooksBookIdChaptersChapterIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CancelRoute: CancelRoute,
  LoginRoute: LoginRoute,
  PrivacyPolicyRoute: PrivacyPolicyRoute,
  PurchaseRoute: PurchaseRoute,
  TermsOfServiceRoute: TermsOfServiceRoute,
  UnauthenticatedRoute: UnauthenticatedRoute,
  UnauthorizedRoute: UnauthorizedRoute,
  BooksCreateRoute: BooksCreateRoute,
  AboutIndexRoute: AboutIndexRoute,
  AdminIndexRoute: AdminIndexRoute,
  BooksIndexRoute: BooksIndexRoute,
  ProfileIndexRoute: ProfileIndexRoute,
  BooksBookIdEditRoute: BooksBookIdEditRoute,
  BooksBookIdIndexRoute: BooksBookIdIndexRoute,
  BooksBookIdChaptersChapterIdRoute: BooksBookIdChaptersChapterIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/cancel",
        "/login",
        "/privacy-policy",
        "/purchase",
        "/terms-of-service",
        "/unauthenticated",
        "/unauthorized",
        "/books/create",
        "/about/",
        "/admin/",
        "/books/",
        "/profile/",
        "/books/$bookId/edit",
        "/books/$bookId/",
        "/books/$bookId/chapters/$chapterId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/cancel": {
      "filePath": "cancel.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/privacy-policy": {
      "filePath": "privacy-policy.tsx"
    },
    "/purchase": {
      "filePath": "purchase.tsx"
    },
    "/terms-of-service": {
      "filePath": "terms-of-service.tsx"
    },
    "/unauthenticated": {
      "filePath": "unauthenticated.tsx"
    },
    "/unauthorized": {
      "filePath": "unauthorized.tsx"
    },
    "/books/create": {
      "filePath": "books/create.tsx"
    },
    "/about/": {
      "filePath": "about/index.tsx"
    },
    "/admin/": {
      "filePath": "admin/index.tsx"
    },
    "/books/": {
      "filePath": "books/index.tsx"
    },
    "/profile/": {
      "filePath": "profile/index.tsx"
    },
    "/books/$bookId/edit": {
      "filePath": "books/$bookId/edit.tsx"
    },
    "/books/$bookId/": {
      "filePath": "books/$bookId/index.tsx"
    },
    "/books/$bookId/chapters/$chapterId": {
      "filePath": "books/$bookId/chapters/$chapterId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
