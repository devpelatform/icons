# Dynamic Imports

Learn how to use dynamic imports for lazy loading and performance optimization.

## 📖 What are Dynamic Imports?

Dynamic imports allow you to load icons on-demand, reducing initial bundle size and improving performance. This is especially useful for applications with many icons or when you want to load icons based on user interactions.

## 🔧 Basic Usage

### 1. Import Dynamic Loader

```tsx
import { dynamicIcons } from '@pelatform/icons/dynamic-imports';

// dynamicIcons is an object with kebab-case keys for lazy loading
console.log(Object.keys(dynamicIcons));
// ['icon-heart', 'icon-star', 'icon-user', ...]
```

### 2. Load Icons Dynamically

```tsx
import { dynamicIcons } from '@pelatform/icons/dynamic-imports';
import { Suspense, lazy } from 'react';

function DynamicIcon({
  iconName,
  ...props
}: {
  iconName: string;
  [key: string]: any;
}) {
  // Convert PascalCase to kebab-case
  const kebabName = iconName
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');

  if (kebabName in dynamicIcons) {
    const LazyIcon = lazy(() =>
      dynamicIcons[kebabName as keyof typeof dynamicIcons](),
    );

    return (
      <Suspense
        fallback={<div className="w-6 h-6 bg-gray-200 animate-pulse rounded" />}
      >
        <LazyIcon {...props} />
      </Suspense>
    );
  }

  return null;
}

// Usage
function App() {
  return (
    <div>
      <DynamicIcon iconName="IconHeart" className="w-6 h-6 text-red-500" />
      <DynamicIcon iconName="IconStar" className="w-6 h-6 text-yellow-500" />
      <DynamicIcon iconName="IconUser" className="w-6 h-6 text-blue-500" />
    </div>
  );
}
```

## ⚡ Performance Optimization

### 1. Icon Preloader

```tsx
import { dynamicIcons } from '@pelatform/icons/dynamic-imports';

class IconPreloader {
  private preloadedIcons = new Map<string, Promise<any>>();

  preload(iconNames: string[]): Promise<void[]> {
    const promises = iconNames.map((iconName) => {
      const kebabName = this.toKebabCase(iconName);

      if (!this.preloadedIcons.has(kebabName) && kebabName in dynamicIcons) {
        const promise = dynamicIcons[kebabName as keyof typeof dynamicIcons]();
        this.preloadedIcons.set(kebabName, promise);
        return promise;
      }

      return Promise.resolve();
    });

    return Promise.all(promises);
  }

  isPreloaded(iconName: string): boolean {
    const kebabName = this.toKebabCase(iconName);
    return this.preloadedIcons.has(kebabName);
  }

  private toKebabCase(str: string): string {
    return str
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/^-/, '');
  }
}

// Usage
const preloader = new IconPreloader();

// Preload commonly used icons
preloader.preload(['IconHeart', 'IconStar', 'IconUser', 'IconSettings']);

// In your component
function App() {
  useEffect(() => {
    // Preload icons when component mounts
    preloader.preload(['IconHome', 'IconProfile', 'IconNotifications']);
  }, []);

  return (
    <div>
      {/* Icons will load faster if preloaded */}
      <DynamicIcon iconName="IconHome" />
    </div>
  );
}
```

### 2. Smart Loading Strategy

```tsx
import { dynamicIcons } from '@pelatform/icons/dynamic-imports';
import { useState, useEffect, Suspense, lazy } from 'react';

interface SmartIconProps {
  iconName: string;
  loadingStrategy?: 'immediate' | 'hover' | 'visible';
  fallback?: React.ReactNode;
  [key: string]: any;
}

function SmartIcon({
  iconName,
  loadingStrategy = 'immediate',
  fallback,
  ...props
}: SmartIconProps) {
  const [shouldLoad, setShouldLoad] = useState(loadingStrategy === 'immediate');
  const [isVisible, setIsVisible] = useState(false);

  const kebabName = iconName
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');

  // Intersection Observer for 'visible' strategy
  useEffect(() => {
    if (loadingStrategy !== 'visible') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setShouldLoad(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById(`icon-${kebabName}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [kebabName, loadingStrategy]);

  const handleMouseEnter = () => {
    if (loadingStrategy === 'hover') {
      setShouldLoad(true);
    }
  };

  if (!shouldLoad) {
    return (
      <div
        id={`icon-${kebabName}`}
        onMouseEnter={handleMouseEnter}
        className="w-6 h-6 bg-gray-200 rounded animate-pulse"
        {...props}
      />
    );
  }

  if (!(kebabName in dynamicIcons)) {
    return fallback || null;
  }

  const LazyIcon = lazy(() =>
    dynamicIcons[kebabName as keyof typeof dynamicIcons](),
  );

  return (
    <Suspense
      fallback={
        fallback || (
          <div className="w-6 h-6 bg-gray-200 animate-pulse rounded" />
        )
      }
    >
      <LazyIcon {...props} />
    </Suspense>
  );
}

// Usage
function App() {
  return (
    <div className="space-y-4">
      {/* Load immediately */}
      <SmartIcon iconName="IconHeart" loadingStrategy="immediate" />

      {/* Load on hover */}
      <SmartIcon iconName="IconStar" loadingStrategy="hover" />

      {/* Load when visible */}
      <SmartIcon iconName="IconUser" loadingStrategy="visible" />
    </div>
  );
}
```

### 3. Bundle Splitting by Category

```tsx
import { dynamicIcons } from '@pelatform/icons/dynamic-imports';

// Group icons by category for better bundle splitting
const iconCategories = {
  navigation: ['icon-home', 'icon-menu', 'icon-arrow-left', 'icon-arrow-right'],
  user: ['icon-user', 'icon-profile', 'icon-account', 'icon-avatar'],
  communication: ['icon-mail', 'icon-message', 'icon-phone', 'icon-chat'],
  media: ['icon-play', 'icon-pause', 'icon-stop', 'icon-volume'],
  interface: ['icon-close', 'icon-settings', 'icon-edit', 'icon-delete'],
};

class CategoryIconLoader {
  private loadedCategories = new Set<string>();

  async loadCategory(category: keyof typeof iconCategories): Promise<void> {
    if (this.loadedCategories.has(category)) return;

    const iconNames = iconCategories[category];
    const promises = iconNames
      .filter((iconName) => iconName in dynamicIcons)
      .map((iconName) => dynamicIcons[iconName as keyof typeof dynamicIcons]());

    await Promise.all(promises);
    this.loadedCategories.add(category);
  }

  isCategoryLoaded(category: string): boolean {
    return this.loadedCategories.has(category);
  }
}

// Usage
const categoryLoader = new CategoryIconLoader();

function NavigationComponent() {
  useEffect(() => {
    // Load navigation icons when navigation component mounts
    categoryLoader.loadCategory('navigation');
  }, []);

  return (
    <nav>
      <SmartIcon iconName="IconHome" />
      <SmartIcon iconName="IconMenu" />
    </nav>
  );
}
```

## 🎯 Advanced Patterns

### 1. Dynamic Icon Registry

```tsx
import { dynamicIcons } from '@pelatform/icons/dynamic-imports';
import { ComponentType, SVGProps } from 'react';

class DynamicIconRegistry {
  private cache = new Map<string, ComponentType<SVGProps<SVGSVGElement>>>();
  private loading = new Map<
    string,
    Promise<ComponentType<SVGProps<SVGSVGElement>>>
  >();

  async load(
    iconName: string,
  ): Promise<ComponentType<SVGProps<SVGSVGElement>> | null> {
    const kebabName = this.toKebabCase(iconName);

    // Return cached icon
    if (this.cache.has(kebabName)) {
      return this.cache.get(kebabName)!;
    }

    // Return existing loading promise
    if (this.loading.has(kebabName)) {
      return this.loading.get(kebabName)!;
    }

    // Check if icon exists
    if (!(kebabName in dynamicIcons)) {
      return null;
    }

    // Start loading
    const loadingPromise = dynamicIcons[
      kebabName as keyof typeof dynamicIcons
    ]()
      .then((module) => {
        const IconComponent = module.default;
        this.cache.set(kebabName, IconComponent);
        this.loading.delete(kebabName);
        return IconComponent;
      })
      .catch((error) => {
        this.loading.delete(kebabName);
        console.error(`Failed to load icon ${iconName}:`, error);
        return null;
      });

    this.loading.set(kebabName, loadingPromise);
    return loadingPromise;
  }

  isLoaded(iconName: string): boolean {
    const kebabName = this.toKebabCase(iconName);
    return this.cache.has(kebabName);
  }

  isLoading(iconName: string): boolean {
    const kebabName = this.toKebabCase(iconName);
    return this.loading.has(kebabName);
  }

  preload(
    iconNames: string[],
  ): Promise<(ComponentType<SVGProps<SVGSVGElement>> | null)[]> {
    return Promise.all(iconNames.map((iconName) => this.load(iconName)));
  }

  private toKebabCase(str: string): string {
    return str
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/^-/, '');
  }
}

// Usage
const iconRegistry = new DynamicIconRegistry();

function DynamicIconComponent({
  iconName,
  ...props
}: {
  iconName: string;
  [key: string]: any;
}) {
  const [IconComponent, setIconComponent] = useState<ComponentType<
    SVGProps<SVGSVGElement>
  > | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    iconRegistry.load(iconName).then((component) => {
      setIconComponent(component);
      setLoading(false);
    });
  }, [iconName]);

  if (loading) {
    return <div className="w-6 h-6 bg-gray-200 animate-pulse rounded" />;
  }

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
}
```

### 2. Icon Virtualization

```tsx
import { dynamicIcons } from '@pelatform/icons/dynamic-imports';
import { FixedSizeGrid as Grid } from 'react-window';

interface VirtualizedIconGridProps {
  iconNames: string[];
  itemSize: number;
  width: number;
  height: number;
  columnCount: number;
}

function VirtualizedIconGrid({
  iconNames,
  itemSize,
  width,
  height,
  columnCount,
}: VirtualizedIconGridProps) {
  const rowCount = Math.ceil(iconNames.length / columnCount);

  const Cell = ({ columnIndex, rowIndex, style }: any) => {
    const index = rowIndex * columnCount + columnIndex;
    const iconName = iconNames[index];

    if (!iconName) return <div style={style} />;

    return (
      <div style={style} className="flex items-center justify-center p-2">
        <SmartIcon
          iconName={iconName}
          loadingStrategy="visible"
          className="w-8 h-8"
        />
      </div>
    );
  };

  return (
    <Grid
      columnCount={columnCount}
      columnWidth={itemSize}
      height={height}
      rowCount={rowCount}
      rowHeight={itemSize}
      width={width}
    >
      {Cell}
    </Grid>
  );
}

// Usage
function IconGallery() {
  const allIconNames = Object.keys(dynamicIcons).map((kebabName) =>
    kebabName
      .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
      .replace(/^icon/, 'Icon'),
  );

  return (
    <VirtualizedIconGrid
      iconNames={allIconNames}
      itemSize={80}
      width={800}
      height={600}
      columnCount={10}
    />
  );
}
```

## 📊 Performance Monitoring

```tsx
import { dynamicIcons } from '@pelatform/icons/dynamic-imports';

class IconPerformanceMonitor {
  private loadTimes = new Map<string, number>();
  private loadCounts = new Map<string, number>();

  startLoad(iconName: string): void {
    this.loadTimes.set(iconName, performance.now());
  }

  endLoad(iconName: string): void {
    const startTime = this.loadTimes.get(iconName);
    if (startTime) {
      const loadTime = performance.now() - startTime;
      console.log(`Icon ${iconName} loaded in ${loadTime.toFixed(2)}ms`);

      const count = this.loadCounts.get(iconName) || 0;
      this.loadCounts.set(iconName, count + 1);
    }
  }

  getStats() {
    return {
      totalLoads: Array.from(this.loadCounts.values()).reduce(
        (a, b) => a + b,
        0,
      ),
      uniqueIcons: this.loadCounts.size,
      mostLoadedIcon: this.getMostLoadedIcon(),
    };
  }

  private getMostLoadedIcon(): string | null {
    let maxCount = 0;
    let mostLoaded = null;

    this.loadCounts.forEach((count, iconName) => {
      if (count > maxCount) {
        maxCount = count;
        mostLoaded = iconName;
      }
    });

    return mostLoaded;
  }
}

// Usage
const monitor = new IconPerformanceMonitor();

// Wrap dynamic loading with monitoring
function monitoredLoad(iconName: string) {
  monitor.startLoad(iconName);

  const kebabName = iconName
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');

  if (kebabName in dynamicIcons) {
    return dynamicIcons[kebabName as keyof typeof dynamicIcons]().then(
      (module) => {
        monitor.endLoad(iconName);
        return module;
      },
    );
  }

  return Promise.reject(new Error(`Icon ${iconName} not found`));
}
```

## 🚀 Next Steps

- [Explore the API reference](./api-reference.md)
- [Check out practical examples](./examples.md)
- [Learn about TypeScript features](./types.md)
