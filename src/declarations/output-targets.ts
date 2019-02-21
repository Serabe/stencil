import * as d from '.';


export interface OutputTargetWww extends OutputTargetBase {
  /**
   * Webapp output target.
   */
  type: 'www';

  /**
   * The directory to write the app's JavaScript and CSS build
   * files to. The default is to place this directory as a child
   * to the `dir` config. Default: `build`
   */
  buildDir?: string;

  /**
   * The directory to write the entire application to.
   * Note, the `buildDir` is where the app's JavaScript and CSS build
   * files are written. Default: `www`
   */
  dir?: string;

  /**
   * Empty the build directory of all files and directories on first build.
   * Default: `true`
   */
  empty?: boolean;

  resourcesUrl?: string;

  /**
   * The default index html file of the app, commonly found at the
   * root of the `src` directory.
   * Default: `index.html`
   */
  indexHtml?: string;

  serviceWorker?: d.ServiceWorkerConfig | null;

  /**
   * The base url of the app, which should be a relative path.
   * Default: `/`
   */
  baseUrl?: string;

  /**
   * If prerendering should continue to crawl local links and prerender.
   * Default: `true`
   */
  prerenderUrlCrawl?: (url?: URL, prodMode?: boolean) => boolean;

  /**
   * The starting points for prerendering. This should be relative
   * paths. Default config is to starting at the index page: `/`.
   * Default: `['/']`
   */
  prerenderLocations?: string[];

  /**
   * This filter is called for every url found while crawling. Returning
   * `true` allows the URL to be crawled, and returning `false` will skip
   * the URL for prerendering. Default: `undefined`
   */
  prerenderFilter?: (url?: URL, prodMode?: boolean) => boolean;

  /**
   * Format the HTML all pretty-like. Great for debugging. Defaults to `false` in prod, `true` in dev mode;
   */
  prerenderPrettyHtml?: (url?: URL, prodMode?: boolean) => boolean;

  /**
   * Remove any excess whitespace within the HTML. Defaults to `true` in prod, `false` in dev mode;
   */
  prerenderCollapseWhitespace?: (url?: URL, prodMode?: boolean) => boolean;

  /**
   * Keep hashes in the URL while prerendering. Default: `false`
   */
  prerenderPathHash?: (url?: URL, prodMode?: boolean) => boolean;

  /**
   * Keep querystrings in the URL while prerendering. Default: `false`
   */
  prerenderPathQuery?: (url?: URL, prodMode?: boolean) => boolean;

  /**
   * Page title to give the HTML document. Default: `undefined`
   */
  prerenderTitle?: (url?: URL, prodMode?: boolean) => string;

  /**
   * The canonical link href. Default: `undefined`
   */
  prerenderCanonicalLink?: (url?: URL, prodMode?: boolean) => string;

  /**
   * The value to set for `document.cookie`. Default: `undefined`
   */
  prerenderCookie?: (url?: URL, prodMode?: boolean) => string;

  /**
   * The value to set for `document.referrer`. Default: `undefined`
   */
  prerenderReferrer?: (url?: URL, prodMode?: boolean) => string;

  /**
   * The value to set for `navigator.userAgent`. Default: `stencil/prerender`
   */
  prerenderUserAgent?: (url?: URL, prodMode?: boolean) => string;

  /**
   * The page direction value set to the HTML element `<html dir="">` `dir` attribute. Default: `undefined`
   */
  prerenderDirection?: (url?: URL, prodMode?: boolean) => 'ltr' | 'rtl' | undefined;

  /**
   * The page language value set to the HTML element `<html lang="">` `lang` attribute. Default: `undefined`
   */
  prerenderLanguage?: (url?: URL, prodMode?: boolean) => string;

  /**
   * The page language value set to the HTML element `<html lang="">`. Default: `undefined`
   */
  prerenderHeadElements?: (url?: URL, prodMode?: boolean) => d.ElementData[];
}


export interface OutputTargetDist extends OutputTargetBase {
  type: 'dist';

  buildDir?: string;
  dir?: string;
  empty?: boolean;
  resourcesUrl?: string;

  collectionDir?: string;
  typesDir?: string;
  esmLoaderPath?: string;
}


export interface OutputTargetHydrate extends OutputTargetBase {
  type: 'hydrate';
  dir?: string;
}


export interface OutputTargetWebComponent extends OutputTargetBase {
  type: 'webcomponent';

  dir?: string;
  buildDir?: string;
  resourcesUrl?: string;
  empty?: boolean;
}


export interface OutputTargetSelfContained extends OutputTargetBase {
  type: 'selfcontained';

  dir?: string;
  buildDir?: string;
  resourcesUrl?: string;
  empty?: boolean;
}


export interface OutputTargetDocsReadme extends OutputTargetBase {
  type: 'docs';

  dir?: string;
  strict?: boolean;
}


export interface OutputTargetDocsJson extends OutputTargetBase {
  type: 'docs-json';

  file: string;
  strict?: boolean;
}


export interface OutputTargetDocsCustom extends OutputTargetBase {
  type: 'docs-custom';

  generator: (docs: d.JsonDocs) => void | Promise<void>;
  strict?: boolean;
}


export interface OutputTargetStats extends OutputTargetBase {
  type: 'stats';

  file?: string;
}


export interface OutputTargetAngular extends OutputTargetBase {
  type: 'angular';

  componentCorePackage?: string;
  directivesProxyFile?: string;
  directivesArrayFile?: string;
  directivesUtilsFile?: string;
  serverModuleFile?: string;
  excludeComponents?: string[];
}


export interface OutputTargetBase {
  type: string;
}


export type OutputTargetBuild =
 | OutputTargetDist
 | OutputTargetWebComponent
 | OutputTargetWww;


export type OutputTarget =
 | OutputTargetAngular
 | OutputTargetStats
 | OutputTargetDocsJson
 | OutputTargetDocsCustom
 | OutputTargetDocsReadme
 | OutputTargetDist
 | OutputTargetHydrate
 | OutputTargetSelfContained
 | OutputTargetWebComponent
 | OutputTargetWww;
