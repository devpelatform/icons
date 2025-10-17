# API Reference

Complete API documentation for @pelatform/icons.

## 📦 Package Exports

### Main Export (`@pelatform/icons`)

```tsx
import {
  // Individual icon components
  IconHeart,
  IconStar,
  IconUser,
  // ... all 5926+ icons

  // Icons object for dynamic access
  icons,
} from '@pelatform/icons';
```

### Aliases Export (`@pelatform/icons/aliases`)

```tsx
import { aliases } from '@pelatform/icons/aliases';

// Type: Record<string, string[]>
// Maps icon names to their alternative names
```

### Dynamic Imports (`@pelatform/icons/dynamic-imports`)

```tsx
import { dynamicIcons } from '@pelatform/icons/dynamic-imports';

// Type: Record<string, () => Promise<{ default: ComponentType<SVGProps<SVGSVGElement>> }>>
// Maps kebab-case icon names to dynamic import functions
```

### Icon List (`@pelatform/icons/icon-list`)

```tsx
import { iconNames } from '@pelatform/icons/icon-list';

// Type: string[]
// Array of all available icon names
```

### Types (`@pelatform/icons/types`)

```tsx
import type {
  IconComponent,
  IconName,
  IconProps,
} from '@pelatform/icons/types';
```

## 🎯 Core Types

### IconComponent

```tsx
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
```

Base type for all icon components. Extends React's SVG component with all standard SVG props.

### IconName

```tsx
type IconName = keyof typeof icons;
```

Union type of all available icon names. Provides TypeScript autocomplete and type safety.

### IconProps

```tsx
type IconProps = SVGProps<SVGSVGElement>;
```

Standard SVG element props that all icons accept.

## 🔧 Icon Components

### Individual Icons

All icons are React functional components that accept standard SVG props:

```tsx
interface IconComponentProps extends SVGProps<SVGSVGElement> {
  // Standard SVG props
  className?: string;
  style?: CSSProperties;
  width?: string | number;
  height?: string | number;
  fill?: string;
  stroke?: string;
  strokeWidth?: string | number;

  // Event handlers
  onClick?: (event: MouseEvent<SVGSVGElement>) => void;
  onMouseEnter?: (event: MouseEvent<SVGSVGElement>) => void;
  onMouseLeave?: (event: MouseEvent<SVGSVGElement>) => void;

  // Accessibility
  'aria-label'?: string;
  'aria-hidden'?: boolean;
  role?: string;

  // Data attributes
  [key: `data-${string}`]: any;
}

// Usage
<IconHeart
  className="w-6 h-6 text-red-500"
  onClick={handleClick}
  aria-label="Like this item"
  data-testid="heart-icon"
/>;
```

### Icons Object

```tsx
const icons: Record<IconName, IconComponent>;
```

Object containing all icon components, accessible by name:

```tsx
import { icons } from '@pelatform/icons';

// Access icons dynamically
const HeartIcon = icons.IconHeart;
const StarIcon = icons['IconStar'];

// Use with createElement
import { createElement } from 'react';
const icon = createElement(icons.IconHeart, { className: 'w-6 h-6' });
```

## 📋 Aliases API

### Aliases Object

```tsx
const aliases: Record<string, string[]>;
```

Maps icon names to their alternative names:

```tsx
import { aliases } from '@pelatform/icons/aliases';

// Example structure
{
  'IconHeart': ['love', 'favorite', 'like', 'romance'],
  'IconStar': ['rating', 'favorite', 'bookmark'],
  'IconUser': ['person', 'profile', 'account', 'avatar']
}
```

### Utility Functions

```tsx
// Find icons by alias
function findIconsByAlias(alias: string): string[] {
  return Object.entries(aliases)
    .filter(([_, iconAliases]) => iconAliases.includes(alias))
    .map(([iconName]) => iconName);
}

// Get aliases for icon
function getAliasesForIcon(iconName: string): string[] {
  return aliases[iconName] || [];
}

// Check if alias exists
function hasAlias(iconName: string, alias: string): boolean {
  return (aliases[iconName] || []).includes(alias);
}
```

## ⚡ Dynamic Imports API

### Dynamic Icons Object

```tsx
const dynamicIcons: Record<string, () => Promise<{ default: IconComponent }>>;
```

Maps kebab-case icon names to dynamic import functions:

```tsx
import { dynamicIcons } from '@pelatform/icons/dynamic-imports';

// Example structure
{
  'icon-heart': () => import('./icons/IconHeart'),
  'icon-star': () => import('./icons/IconStar'),
  'icon-user': () => import('./icons/IconUser')
}
```

### Loading Functions

```tsx
// Load single icon
async function loadIcon(iconName: string): Promise<IconComponent | null> {
  const kebabName = toKebabCase(iconName);

  if (kebabName in dynamicIcons) {
    const module = await dynamicIcons[kebabName]();
    return module.default;
  }

  return null;
}

// Load multiple icons
async function loadIcons(
  iconNames: string[],
): Promise<(IconComponent | null)[]> {
  return Promise.all(iconNames.map(loadIcon));
}

// Preload icons
function preloadIcons(iconNames: string[]): Promise<void> {
  const promises = iconNames.map((iconName) => {
    const kebabName = toKebabCase(iconName);
    return kebabName in dynamicIcons
      ? dynamicIcons[kebabName]()
      : Promise.resolve();
  });

  return Promise.all(promises).then(() => void 0);
}
```

## 📝 Icon List API

### Icon Names Array

```tsx
const iconNames: string[];
```

Array of all available icon names:

```tsx
import { iconNames } from '@pelatform/icons/icon-list';

// Example: ['IconHeart', 'IconStar', 'IconUser', ...]
console.log(iconNames.length); // 5926+

// Filter icons
const heartIcons = iconNames.filter((name) => name.includes('Heart'));
const arrowIcons = iconNames.filter((name) => name.includes('Arrow'));
```

### Utility Functions

```tsx
// Get total icon count
function getIconCount(): number {
  return iconNames.length;
}

// Check if icon exists
function iconExists(iconName: string): boolean {
  return iconNames.includes(iconName);
}

// Get icons by pattern
function getIconsByPattern(pattern: RegExp): string[] {
  return iconNames.filter((name) => pattern.test(name));
}

// Get random icon
function getRandomIcon(): string {
  return iconNames[Math.floor(Math.random() * iconNames.length)];
}
```

## 🎨 Styling API

### CSS Classes

Icons inherit styles from their parent and accept standard CSS classes:

```tsx
// Tailwind CSS
<IconHeart className="w-6 h-6 text-red-500 hover:text-red-700" />

// Custom CSS
<IconStar className="icon icon-large icon-yellow" />
```

### Inline Styles

```tsx
<IconUser
  style={{
    width: 24,
    height: 24,
    color: '#3b82f6',
    cursor: 'pointer',
  }}
/>
```

### CSS Variables

Icons support CSS custom properties:

```css
.icon {
  --icon-size: 1.5rem;
  --icon-color: #3b82f6;

  width: var(--icon-size);
  height: var(--icon-size);
  color: var(--icon-color);
}
```

## 🔍 Search API

### Search Functions

```tsx
import { iconNames } from '@pelatform/icons/icon-list';
import { aliases } from '@pelatform/icons/aliases';

// Basic search
function searchIcons(query: string): string[] {
  const lowercaseQuery = query.toLowerCase();

  return iconNames.filter(
    (iconName) =>
      iconName.toLowerCase().includes(lowercaseQuery) ||
      (aliases[iconName] || []).some((alias) => alias.includes(lowercaseQuery)),
  );
}

// Advanced search with scoring
interface SearchResult {
  iconName: string;
  score: number;
  matchType: 'name' | 'alias';
}

function advancedSearch(query: string): SearchResult[] {
  const results: SearchResult[] = [];
  const lowercaseQuery = query.toLowerCase();

  iconNames.forEach((iconName) => {
    // Check name match
    if (iconName.toLowerCase().includes(lowercaseQuery)) {
      results.push({
        iconName,
        score: iconName.toLowerCase() === lowercaseQuery ? 100 : 80,
        matchType: 'name',
      });
    }

    // Check alias match
    const iconAliases = aliases[iconName] || [];
    iconAliases.forEach((alias) => {
      if (alias.includes(lowercaseQuery)) {
        results.push({
          iconName,
          score: alias === lowercaseQuery ? 90 : 60,
          matchType: 'alias',
        });
      }
    });
  });

  return results.sort((a, b) => b.score - a.score);
}
```

## 🎯 Event Handling

### Standard Events

All icons support standard SVG/DOM events:

```tsx
<IconHeart
  onClick={(e) => console.log('Clicked!', e)}
  onMouseEnter={(e) => console.log('Mouse enter', e)}
  onMouseLeave={(e) => console.log('Mouse leave', e)}
  onFocus={(e) => console.log('Focused', e)}
  onBlur={(e) => console.log('Blurred', e)}
  onKeyDown={(e) => console.log('Key down', e)}
/>
```

### Custom Event Handlers

```tsx
interface IconWithEventsProps extends IconProps {
  onIconClick?: (iconName: string, event: MouseEvent) => void;
  onIconHover?: (iconName: string, event: MouseEvent) => void;
}

function IconWithEvents({
  iconName,
  onIconClick,
  onIconHover,
  ...props
}: IconWithEventsProps) {
  const IconComponent = icons[iconName as IconName];

  return (
    <IconComponent
      {...props}
      onClick={(e) => onIconClick?.(iconName, e)}
      onMouseEnter={(e) => onIconHover?.(iconName, e)}
    />
  );
}
```

## 🚀 Performance API

### Bundle Analysis

```tsx
// Get bundle information
function getBundleInfo() {
  return {
    totalIcons: iconNames.length,
    estimatedSize: `~${Math.round(iconNames.length * 0.5)}KB`,
    formats: ['ESM', 'CJS', 'UMD'],
    treeShaking: true,
  };
}

// Check if icon is loaded (for dynamic imports)
function isIconLoaded(iconName: string): boolean {
  const kebabName = toKebabCase(iconName);
  return kebabName in dynamicIcons;
}
```

### Memory Management

```tsx
// Clear icon cache (for dynamic loading)
function clearIconCache(): void {
  // Implementation depends on your caching strategy
}

// Get memory usage estimate
function getMemoryUsage(): { icons: number; cache: number } {
  return {
    icons: iconNames.length,
    cache: 0, // Depends on loaded icons
  };
}
```

## 🚀 Next Steps

- [Check out practical examples](./examples.md)
- [Learn about advanced usage](./advanced-usage.md)
- [Explore TypeScript features](./types.md)
