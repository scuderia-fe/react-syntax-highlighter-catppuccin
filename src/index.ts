import { flavors } from "@catppuccin/palette";
import type { CSSProperties } from "react";

const generateTheme = (flavor: keyof typeof flavors) => ({
  "hljs": {
    "display": "block",
    "overflowX": "auto",
    "padding": "0.5em",
    "background": flavors[flavor].colors.base.hex,
    "color": flavors.macchiato.colors.text.hex
  },
  "hljs-attr": {
    "color": flavors[flavor].colors.blue.hex
  },
  "hljs-attribute": {
    "color": flavors[flavor].colors.blue.hex
  },
  "hljs-keyword": {
    "color": flavors[flavor].colors["mauve"].hex,
  },
  "hljs-built_in": {
    "color": flavors[flavor].colors["red"].hex,
  },
  "hljs-type": {
    "color": flavors[flavor].colors["yellow"].hex,
  },
  "hljs-literal": {
    "color": flavors[flavor].colors["peach"].hex,
  },
  "hljs-number": {
    "color": flavors[flavor].colors["peach"].hex,
  },
  "hljs-operator": {
    "color": flavors[flavor].colors["teal"].hex,
  },
  "hljs-punctuation": {
    "color": flavors[flavor].colors["subtext1"].hex,
  },
  "hljs-property": {
    "color": flavors[flavor].colors["teal"].hex,
  },
  "hljs-regexp": {
    "color": flavors[flavor].colors["pink"].hex,
  },
  "hljs-string": {
    "color": flavors[flavor].colors["green"].hex,
  },
  "hljs-char.escape_": {
    "color": flavors[flavor].colors["green"].hex,
  },
  "hljs-subst": {
    "color": flavors[flavor].colors["subtext0"].hex,
  },
  "hljs-symbol": {
    "color": flavors[flavor].colors["flamingo"].hex,
  },
  "hljs-variable": {
    "color": flavors[flavor].colors["mauve"].hex,
  },
  "hljs-variable.language_": {
    "color": flavors[flavor].colors["mauve"].hex,
  },
  "hljs-variable.constant_": {
    "color": flavors[flavor].colors["peach"].hex,
  },
  "hljs-title": {
    "color": flavors[flavor].colors["blue"].hex,
  },
  "hljs-title.class_": {
    "color": flavors[flavor].colors["yellow"].hex,
  },
  "hljs-title.function_": {
    "color": flavors[flavor].colors["blue"].hex,
  },
  "hljs-params": {
    "color": flavors[flavor].colors["text"].hex,
  },
  "hljs-comment": {
    "color": flavors[flavor].colors["surface2"].hex,
  },
  "hljs-doctag": {
    "color": flavors[flavor].colors["red"].hex,
  },
  "hljs-meta": {
    "color": flavors[flavor].colors["peach"].hex,
  },
  "hljs-section": {
    "color": flavors[flavor].colors["blue"].hex,
  },
  "hljs-tag": {
    "color": flavors[flavor].colors["subtext0"].hex,
  },
  "hljs-name": {
    "color": flavors[flavor].colors["mauve"].hex,
  },
  "hljs-bullet": {
    "color": flavors[flavor].colors["teal"].hex,
  },
  "hljs-code": {
    "color": flavors[flavor].colors["green"].hex,
  },
  "hljs-emphasis": {
    "color": flavors[flavor].colors["red"].hex,
  },
  "hljs-strong": {
    "color": flavors[flavor].colors["red"].hex,
  },
  "hljs-formula": {
    "color": flavors[flavor].colors["teal"].hex,
  },
  "hljs-link": {
    "color": flavors[flavor].colors["sapphire"].hex,
  },
  "hljs-quote": {
    "color": flavors[flavor].colors["green"].hex,
  },
  "hljs-selector-tag": {
    "color": flavors[flavor].colors["yellow"].hex,
  },
  "hljs-selector-id": {
    "color": flavors[flavor].colors["blue"].hex,
  },
  "hljs-selector-class": {
    "color": flavors[flavor].colors["teal"].hex,
  },
  "hljs-selector-attr": {
    "color": flavors[flavor].colors["mauve"].hex,
  },
  "hljs-selector-pseudo": {
    "color": flavors[flavor].colors["teal"].hex,
  },
  "hljs-template-tag": {
    "color": flavors[flavor].colors["flamingo"].hex,
  },
  "hljs-template-variable": {
    "color": flavors[flavor].colors["flamingo"].hex,
  },
  "hljs-addition": {
    "color": flavors[flavor].colors["green"].hex,
  },
  "hljs-deletion": {
    "color": flavors[flavor].colors["red"].hex,
  },

}) satisfies { [key: string]: CSSProperties }

export const latte = generateTheme('latte');
export const mocha = generateTheme('mocha');
export const frappe = generateTheme('frappe');
export const macchiato = generateTheme('macchiato');
