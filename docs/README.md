# @pelatform/icons Documentation

A comprehensive React icon library with 5926+ icons, built with TypeScript and optimized for performance.

## 📚 Documentation Index

- [Installation & Getting Started](./getting-started.md)
- [Basic Usage](./basic-usage.md)
- [Advanced Usage](./advanced-usage.md)
- [Types & TypeScript](./types.md)
- [Aliases](./aliases.md)
- [Dynamic Imports](./dynamic-imports.md)
- [API Reference](./api-reference.md)
- [Examples](./examples.md)

## 🚀 Quick Start

```bash
# Install the package
pnpm add @pelatform/icons

# Import and use icons
import { IconHeart, IconStar } from '@pelatform/icons';

function App() {
  return (
    <div>
      <IconHeart className="text-red-500" />
      <IconStar className="text-yellow-500" />
    </div>
  );
}
```

## 📦 Package Features

- ✅ **5926+ Icons** - Comprehensive icon collection
- ✅ **TypeScript Support** - Full type safety and IntelliSense
- ✅ **Tree Shaking** - Import only what you need
- ✅ **Multiple Formats** - ESM, CJS, UMD support
- ✅ **Aliases** - Alternative names for easier discovery
- ✅ **Dynamic Loading** - Load icons dynamically by name
- ✅ **Optimized Bundle** - Minified and gzipped (~422KB for all icons)
- ✅ **React 19 Compatible** - Latest React support

## 🎯 Use Cases

### 1. Direct Import (Recommended)

```tsx
import { IconArrowRight, IconUser } from '@pelatform/icons';
```

### 2. Dynamic Loading

```tsx
import { icons } from '@pelatform/icons';
import { createElement } from 'react';

const icon = createElement(icons['IconArrowRight' as keyof typeof icons]);
```

### 3. Aliases

```tsx
import { aliases } from '@pelatform/icons/aliases';
// Use alternative names for icons
```

### 4. Icon List

```tsx
import { iconNames } from '@pelatform/icons/icon-list';
// Get all available icon names
```

## 📖 Next Steps

1. [Read the Getting Started guide](./getting-started.md)
2. [Explore usage examples](./examples.md)
3. [Check the API reference](./api-reference.md)

## 🔗 Links

- [GitHub Repository](https://github.com/pelatform/icons)
- [NPM Package](https://www.npmjs.com/package/@pelatform/icons)
- [Pelatform UI](https://ui.pelatform.com/icons)
