import React, {
  ForwardRefExoticComponent,
  FunctionComponent,
  RefAttributes,
} from 'react';
export type { ReactNode, ComponentProps, ReactElement } from 'react';

export type IconNode = [elementName: string, attrs: Record<string, string>][];

export interface IconProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

export type Icon = FunctionComponent<IconProps>;

export type PelatformIcon = ForwardRefExoticComponent<
  Omit<IconProps, 'ref'> & RefAttributes<Icon>
>;

// New icon component type
export type IconComponent = React.FC<IconProps>;

// Icon name type (kebab-case)
export type IconName = (typeof import('./icon-list').default)[number];

// Dynamic import key type
export type IconImportKey = keyof typeof import('./dynamic-imports').default;

// Icon size classes
export type IconSize =
  | 'size-3'
  | 'size-4'
  | 'size-5'
  | 'size-6'
  | 'size-7'
  | 'size-8'
  | 'size-9'
  | 'size-10'
  | 'size-11'
  | 'size-12';

// Icon variant types
export type IconVariant = 'outline' | 'filled';

// Icon category types
export type IconCategory =
  | 'animals'
  | 'arrows'
  | 'badges'
  | 'brand'
  | 'buildings'
  | 'charts'
  | 'communication'
  | 'computers'
  | 'currencies'
  | 'database'
  | 'design'
  | 'development'
  | 'devices'
  | 'document'
  | 'e-commerce'
  | 'electrical'
  | 'extensions'
  | 'food'
  | 'games'
  | 'gender'
  | 'gestures'
  | 'health'
  | 'laundry'
  | 'letters'
  | 'logic'
  | 'map'
  | 'math'
  | 'media'
  | 'mood'
  | 'nature'
  | 'numbers'
  | 'other'
  | 'photography'
  | 'shapes'
  | 'sport'
  | 'symbols'
  | 'system'
  | 'text'
  | 'vehicles'
  | 'version-control'
  | 'weather'
  | 'zodiac';

// Dynamic import function type
export type IconImportFunction = () => Promise<{ default: IconComponent }>;

// Icon metadata interface
export interface IconMetadata {
  name: IconName;
  component: string;
  category: IconCategory;
  variant: IconVariant;
  tags?: string[];
}

// Icon search options
export interface IconSearchOptions {
  category?: IconCategory;
  variant?: IconVariant;
  query?: string;
  limit?: number;
}

// Icon library configuration
export interface IconLibraryConfig {
  defaultSize?: IconSize;
  defaultClassName?: string;
  prefix?: string;
}

// Utility types for icon manipulation
export type IconNameToComponent<T extends IconName> = T extends any
  ? `Icon${Capitalize<T>}`
  : never;

export type ComponentNameToIcon<T extends string> = T extends `Icon${infer U}`
  ? Lowercase<U>
  : never;
