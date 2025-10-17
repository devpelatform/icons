# Types & TypeScript

Complete TypeScript support and type definitions for @pelatform/icons.

## 📝 Type Definitions

### 1. Icon Component Types

```tsx
import { ComponentType, SVGProps } from 'react';

// Base icon component type
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

// All icons are of this type
import { IconHeart } from '@pelatform/icons';
// IconHeart: IconComponent
```

### 2. Icon Names Type

```tsx
import { icons } from '@pelatform/icons';

// Get all icon names as a union type
type IconName = keyof typeof icons;

// Usage
function renderIcon(iconName: IconName) {
  const IconComponent = icons[iconName];
  return <IconComponent />;
}

// TypeScript will provide autocomplete for all icon names
renderIcon('IconHeart'); // ✅ Valid
renderIcon('IconStar'); // ✅ Valid
renderIcon('InvalidIcon'); // ❌ TypeScript error
```

### 3. Icon Props Type

```tsx
import { SVGProps } from 'react';

// Standard SVG props that all icons accept
type IconProps = SVGProps<SVGSVGElement>;

// Extended icon props with custom properties
interface ExtendedIconProps extends IconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'danger';
}

function CustomIcon({ size = 'md', color, ...props }: ExtendedIconProps) {
  // Implementation
}
```

## 🎯 Type-Safe Icon Usage

### 1. Dynamic Icon Loading with Types

```tsx
import { icons } from '@pelatform/icons';
import { createElement, ComponentType, SVGProps } from 'react';

type IconName = keyof typeof icons;
type IconProps = SVGProps<SVGSVGElement>;

interface DynamicIconProps extends IconProps {
  name: IconName;
}

function DynamicIcon({ name, ...props }: DynamicIconProps): JSX.Element | null {
  if (name in icons) {
    return createElement(icons[name], props);
  }
  return null;
}

// Usage with full type safety
function App() {
  return (
    <div>
      <DynamicIcon name="IconHeart" className="w-6 h-6" /> {/* ✅ Type-safe */}
      <DynamicIcon name="InvalidIcon" /> {/* ❌ TypeScript error */}
    </div>
  );
}
```

### 2. Icon Registry with Types

```tsx
import { icons } from '@pelatform/icons';
import { ComponentType, SVGProps } from 'react';

type IconName = keyof typeof icons;
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

class TypedIconRegistry {
  private iconMap = new Map<string, IconComponent>();

  register(alias: string, iconName: IconName): void {
    this.iconMap.set(alias, icons[iconName]);
  }

  get(alias: string): IconComponent | undefined {
    return this.iconMap.get(alias);
  }

  has(alias: string): boolean {
    return this.iconMap.has(alias);
  }

  getAll(): Record<string, IconComponent> {
    return Object.fromEntries(this.iconMap);
  }
}

// Usage
const registry = new TypedIconRegistry();
registry.register('heart', 'IconHeart'); // ✅ Type-safe
registry.register('star', 'IconStar'); // ✅ Type-safe
registry.register('invalid', 'InvalidIcon'); // ❌ TypeScript error
```

### 3. Icon Component Factory

```tsx
import { icons } from '@pelatform/icons';
import { forwardRef, ComponentType, SVGProps } from 'react';

type IconName = keyof typeof icons;

interface IconFactoryOptions {
  defaultSize?: string;
  defaultClassName?: string;
  displayName?: string;
}

function createIconComponent(
  iconName: IconName,
  options: IconFactoryOptions = {},
): ComponentType<SVGProps<SVGSVGElement>> {
  const { defaultSize = '24', defaultClassName = '', displayName } = options;

  const IconComponent = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    (
      { className = '', width = defaultSize, height = defaultSize, ...props },
      ref,
    ) => {
      const IconElement = icons[iconName];
      return (
        <IconElement
          ref={ref}
          className={`${defaultClassName} ${className}`.trim()}
          width={width}
          height={height}
          {...props}
        />
      );
    },
  );

  IconComponent.displayName = displayName || `Icon(${iconName})`;

  return IconComponent;
}

// Usage
const HeartIcon = createIconComponent('IconHeart', {
  defaultSize: '20',
  defaultClassName: 'text-red-500',
  displayName: 'HeartIcon',
});

const StarIcon = createIconComponent('IconStar', {
  defaultSize: '16',
  defaultClassName: 'text-yellow-500',
});
```

## 🔍 Type Utilities

### 1. Icon Name Utilities

```tsx
import { icons } from '@pelatform/icons';

type IconName = keyof typeof icons;

// Get icon names by category (if you have category info)
type ArrowIconNames = Extract<IconName, `IconArrow${string}`>;
type UserIconNames = Extract<IconName, `IconUser${string}`>;

// Filter icon names
type FilterIconNames<T extends string> = Extract<IconName, `Icon${T}${string}`>;

// Usage
type HeartIcons = FilterIconNames<'Heart'>; // 'IconHeart', 'IconHeartFilled', etc.
type StarIcons = FilterIconNames<'Star'>; // 'IconStar', 'IconStarFilled', etc.
```

### 2. Icon Props Utilities

```tsx
import { SVGProps, ComponentProps } from 'react';
import { IconHeart } from '@pelatform/icons';

// Get props type for a specific icon
type HeartIconProps = ComponentProps<typeof IconHeart>;

// Create a union of common props
type CommonIconProps = Pick<
  SVGProps<SVGSVGElement>,
  'className' | 'style' | 'width' | 'height' | 'fill' | 'stroke'
>;

// Extended props with custom properties
interface StyledIconProps extends CommonIconProps {
  variant?: 'solid' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent';
}
```

### 3. Icon Collection Types

```tsx
import { icons } from '@pelatform/icons';
import { ComponentType, SVGProps } from 'react';

type IconName = keyof typeof icons;
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

// Type for icon collections
interface IconCollection {
  [key: string]: IconComponent;
}

// Type for icon mapping
type IconMapping = Record<string, IconName>;

// Type for icon categories
interface IconCategory {
  name: string;
  icons: IconName[];
  description?: string;
}

// Usage
const navigationIcons: IconCollection = {
  home: icons.IconHome,
  user: icons.IconUser,
  settings: icons.IconSettings,
};

const iconMapping: IconMapping = {
  home: 'IconHome',
  profile: 'IconUser',
  config: 'IconSettings',
};

const categories: IconCategory[] = [
  {
    name: 'Navigation',
    icons: ['IconHome', 'IconUser', 'IconSettings'],
    description: 'Icons for navigation elements',
  },
];
```

## 🎨 Advanced Type Patterns

### 1. Conditional Icon Rendering

```tsx
import { icons } from '@pelatform/icons';
import { ReactElement } from 'react';

type IconName = keyof typeof icons;

interface ConditionalIconProps {
  condition: boolean;
  trueIcon: IconName;
  falseIcon: IconName;
  className?: string;
}

function ConditionalIcon({
  condition,
  trueIcon,
  falseIcon,
  ...props
}: ConditionalIconProps): ReactElement {
  const iconName = condition ? trueIcon : falseIcon;
  const IconComponent = icons[iconName];
  return <IconComponent {...props} />;
}

// Usage
function ToggleButton({ isOn }: { isOn: boolean }) {
  return (
    <ConditionalIcon
      condition={isOn}
      trueIcon="IconEye"
      falseIcon="IconEyeOff"
      className="w-5 h-5"
    />
  );
}
```

### 2. Icon Variant System

```tsx
import { icons } from '@pelatform/icons';
import { ComponentType, SVGProps } from 'react';

type IconName = keyof typeof icons;

interface IconVariant {
  solid?: IconName;
  outline?: IconName;
  filled?: IconName;
}

type VariantType = keyof IconVariant;

interface VariantIconProps extends SVGProps<SVGSVGElement> {
  variant: VariantType;
  iconSet: IconVariant;
}

function VariantIcon({ variant, iconSet, ...props }: VariantIconProps) {
  const iconName = iconSet[variant];
  if (!iconName || !(iconName in icons)) return null;

  const IconComponent = icons[iconName];
  return <IconComponent {...props} />;
}

// Usage
const heartVariants: IconVariant = {
  solid: 'IconHeart',
  outline: 'IconHeartOutline',
  filled: 'IconHeartFilled',
};

function App() {
  return (
    <div>
      <VariantIcon variant="solid" iconSet={heartVariants} />
      <VariantIcon variant="outline" iconSet={heartVariants} />
      <VariantIcon variant="filled" iconSet={heartVariants} />
    </div>
  );
}
```

### 3. Type-Safe Icon Builder

```tsx
import { icons } from '@pelatform/icons';
import { createElement, SVGProps } from 'react';

type IconName = keyof typeof icons;

class IconBuilder {
  private iconName: IconName;
  private props: SVGProps<SVGSVGElement> = {};

  constructor(iconName: IconName) {
    this.iconName = iconName;
  }

  size(width: number | string, height?: number | string) {
    this.props.width = width;
    this.props.height = height || width;
    return this;
  }

  className(className: string) {
    this.props.className = className;
    return this;
  }

  color(color: string) {
    this.props.fill = color;
    return this;
  }

  style(style: React.CSSProperties) {
    this.props.style = { ...this.props.style, ...style };
    return this;
  }

  build() {
    return createElement(icons[this.iconName], this.props);
  }
}

// Usage
function App() {
  const heartIcon = new IconBuilder('IconHeart')
    .size(24)
    .className('text-red-500')
    .style({ cursor: 'pointer' })
    .build();

  return <div>{heartIcon}</div>;
}
```

## 📚 Type Exports

The package exports these types for your use:

```tsx
// Import types from the package
import type {
  IconComponent,
  IconName,
  IconProps,
} from '@pelatform/icons/types';

// Use in your components
function MyComponent({ iconName }: { iconName: IconName }) {
  // Implementation
}
```

## 🚀 Next Steps

- [Learn about aliases](./aliases.md)
- [Explore dynamic imports](./dynamic-imports.md)
- [Check out examples](./examples.md)
