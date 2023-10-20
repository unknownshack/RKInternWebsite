// jquery-extensions.d.ts
declare module 'jquery' {
  interface JQuery {
    animateNumber(options: any, duration: number, complete?: Function): JQuery;
  }
}
