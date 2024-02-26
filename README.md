# React Syntax highlighter cattpuccin

<div style="display: flex; gap: 10px;">
    <img alt="NPM License" src="https://img.shields.io/npm/l/react-syntax-highlighter-catppuccin"></img>
    <img alt="NPM Version" src="https://img.shields.io/npm/v/react-syntax-highlighter-catppuccin"></img>
</div>

[Catppuccin](https://github.com/catppuccin/catppuccin) themes for [React syntax highlighter](https://www.npmjs.com/package/react-syntax-highlighter).

## Getting started

Install `react-syntax-highlighter-catppuccin` with your preferred package-manager.

```shell
pnpm i -D react-syntax-highlighter-catppuccin
```

After import your preferred theme.

```tsx
import { latte } from 'react-syntax-highlighter-catppuccin'
// OR
import { macchiato } from 'react-syntax-highlighter-catppuccin'
// OR
import { frappe } from 'react-syntax-highlighter-catppuccin'
// OR
import { mocha } from 'react-syntax-highlighter-catppuccin'
```

and use inside your component.

```typescript
<ReactSyntaxHighlighter
  // ...
  style={macchiato} // or any different flavor
>
```

## License

[MIT](./LICENSE)
