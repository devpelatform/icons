# Aliases

Learn how to use icon aliases for easier discovery and alternative naming.

## 📖 What are Aliases?

Aliases provide alternative names for icons, making them easier to find and use. For example, `IconHeart` might have aliases like `love`, `favorite`, `like`, making it discoverable through multiple search terms.

## 🔧 Basic Usage

### 1. Import Aliases

```tsx
import { aliases } from '@pelatform/icons/aliases';

// aliases is an object mapping icon names to their alternative names
console.log(aliases);
// {
//   'IconHeart': ['love', 'favorite', 'like', 'romance'],
//   'IconStar': ['rating', 'favorite', 'bookmark'],
//   'IconUser': ['person', 'profile', 'account', 'avatar'],
//   ...
// }
```

### 2. Find Icons by Alias

```tsx
import { aliases } from '@pelatform/icons/aliases';
import { icons } from '@pelatform/icons';

function findIconByAlias(searchTerm: string): string[] {
  const foundIcons: string[] = [];

  Object.entries(aliases).forEach(([iconName, iconAliases]) => {
    if (iconAliases.includes(searchTerm.toLowerCase())) {
      foundIcons.push(iconName);
    }
  });

  return foundIcons;
}

// Usage
const heartIcons = findIconByAlias('love');
console.log(heartIcons); // ['IconHeart', 'IconHeartFilled', ...]

const userIcons = findIconByAlias('profile');
console.log(userIcons); // ['IconUser', 'IconUserCircle', ...]
```

### 3. Reverse Alias Lookup

```tsx
import { aliases } from '@pelatform/icons/aliases';

function getAliasesForIcon(iconName: string): string[] {
  return aliases[iconName] || [];
}

// Usage
const heartAliases = getAliasesForIcon('IconHeart');
console.log(heartAliases); // ['love', 'favorite', 'like', 'romance']
```

## 🔍 Search and Discovery

### 1. Icon Search Component

```tsx
import { aliases } from '@pelatform/icons/aliases';
import { icons } from '@pelatform/icons';
import { iconNames } from '@pelatform/icons/icon-list';
import { useState, useMemo } from 'react';

function IconSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = useMemo(() => {
    if (!searchTerm) return [];

    const term = searchTerm.toLowerCase();
    const results = new Set<string>();

    // Search in icon names
    iconNames.forEach((iconName) => {
      if (iconName.toLowerCase().includes(term)) {
        results.add(iconName);
      }
    });

    // Search in aliases
    Object.entries(aliases).forEach(([iconName, iconAliases]) => {
      if (iconAliases.some((alias) => alias.includes(term))) {
        results.add(iconName);
      }
    });

    return Array.from(results);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search icons (try 'love', 'profile', 'home'...)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4"
      />

      <div className="grid grid-cols-6 gap-4">
        {searchResults.slice(0, 24).map((iconName) => {
          const IconComponent = icons[iconName as keyof typeof icons];
          const iconAliases = aliases[iconName] || [];

          return (
            <div
              key={iconName}
              className="flex flex-col items-center p-3 border rounded-lg"
            >
              <IconComponent className="w-8 h-8 mb-2" />
              <div className="text-xs font-medium text-center mb-1">
                {iconName.replace('Icon', '')}
              </div>
              <div className="text-xs text-gray-500 text-center">
                {iconAliases.slice(0, 2).join(', ')}
              </div>
            </div>
          );
        })}
      </div>

      {searchResults.length === 0 && searchTerm && (
        <div className="text-center text-gray-500 py-8">
          No icons found for "{searchTerm}"
        </div>
      )}
    </div>
  );
}
```

### 2. Fuzzy Search with Aliases

```tsx
import { aliases } from '@pelatform/icons/aliases';
import { iconNames } from '@pelatform/icons/icon-list';

function fuzzySearch(searchTerm: string, threshold: number = 0.6): string[] {
  const term = searchTerm.toLowerCase();
  const results: Array<{ iconName: string; score: number }> = [];

  iconNames.forEach((iconName) => {
    let maxScore = 0;

    // Check icon name
    const nameScore = calculateSimilarity(term, iconName.toLowerCase());
    maxScore = Math.max(maxScore, nameScore);

    // Check aliases
    const iconAliases = aliases[iconName] || [];
    iconAliases.forEach((alias) => {
      const aliasScore = calculateSimilarity(term, alias);
      maxScore = Math.max(maxScore, aliasScore);
    });

    if (maxScore >= threshold) {
      results.push({ iconName, score: maxScore });
    }
  });

  return results
    .sort((a, b) => b.score - a.score)
    .map((result) => result.iconName);
}

function calculateSimilarity(str1: string, str2: string): number {
  // Simple similarity calculation (you can use more sophisticated algorithms)
  if (str2.includes(str1)) return 1;
  if (str1.includes(str2)) return 0.8;

  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;

  if (longer.length === 0) return 1;

  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

function levenshteinDistance(str1: string, str2: string): number {
  const matrix = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1.length + 1).fill(null));

  for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator,
      );
    }
  }

  return matrix[str2.length][str1.length];
}

// Usage
const results = fuzzySearch('luv'); // Might find 'IconHeart' through 'love' alias
```

## 🎯 Practical Examples

### 1. Icon Picker with Aliases

```tsx
import { aliases } from '@pelatform/icons/aliases';
import { icons } from '@pelatform/icons';
import { useState } from 'react';

interface IconPickerProps {
  onSelect: (iconName: string) => void;
  selectedIcon?: string;
}

function IconPicker({ onSelect, selectedIcon }: IconPickerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Group icons by common aliases
  const categories = {
    all: Object.keys(icons),
    navigation: findIconsByAliases(['home', 'menu', 'arrow', 'navigation']),
    user: findIconsByAliases(['user', 'person', 'profile', 'account']),
    communication: findIconsByAliases(['mail', 'message', 'chat', 'phone']),
    media: findIconsByAliases(['play', 'pause', 'music', 'video']),
    interface: findIconsByAliases(['button', 'close', 'settings', 'edit']),
  };

  function findIconsByAliases(searchAliases: string[]): string[] {
    const foundIcons = new Set<string>();

    Object.entries(aliases).forEach(([iconName, iconAliases]) => {
      if (
        searchAliases.some((searchAlias) =>
          iconAliases.some((alias) => alias.includes(searchAlias)),
        )
      ) {
        foundIcons.add(iconName);
      }
    });

    return Array.from(foundIcons);
  }

  const filteredIcons =
    categories[selectedCategory as keyof typeof categories] || [];

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search icons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />

        <div className="flex space-x-2">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded text-sm ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-8 gap-2 max-h-96 overflow-y-auto">
        {filteredIcons
          .filter(
            (iconName) =>
              !searchTerm ||
              iconName.toLowerCase().includes(searchTerm.toLowerCase()) ||
              (aliases[iconName] || []).some((alias) =>
                alias.includes(searchTerm.toLowerCase()),
              ),
          )
          .map((iconName) => {
            const IconComponent = icons[iconName as keyof typeof icons];
            const isSelected = selectedIcon === iconName;

            return (
              <button
                key={iconName}
                onClick={() => onSelect(iconName)}
                className={`p-2 border rounded hover:bg-gray-100 ${
                  isSelected ? 'border-blue-500 bg-blue-50' : ''
                }`}
                title={`${iconName} (${(aliases[iconName] || []).join(', ')})`}
              >
                <IconComponent className="w-6 h-6 mx-auto" />
              </button>
            );
          })}
      </div>
    </div>
  );
}

// Usage
function App() {
  const [selectedIcon, setSelectedIcon] = useState<string>('');

  return (
    <div>
      <IconPicker onSelect={setSelectedIcon} selectedIcon={selectedIcon} />
      {selectedIcon && <div className="mt-4">Selected: {selectedIcon}</div>}
    </div>
  );
}
```

### 2. Alias-Based Icon Mapping

```tsx
import { aliases } from '@pelatform/icons/aliases';
import { icons } from '@pelatform/icons';

// Create a reverse mapping from aliases to icon names
function createAliasMap() {
  const aliasMap = new Map<string, string[]>();

  Object.entries(aliases).forEach(([iconName, iconAliases]) => {
    iconAliases.forEach((alias) => {
      if (!aliasMap.has(alias)) {
        aliasMap.set(alias, []);
      }
      aliasMap.get(alias)!.push(iconName);
    });
  });

  return aliasMap;
}

const aliasMap = createAliasMap();

// Function to get icon by alias
function getIconByAlias(alias: string, preferredIndex: number = 0) {
  const iconNames = aliasMap.get(alias.toLowerCase());
  if (!iconNames || iconNames.length === 0) return null;

  const iconName = iconNames[preferredIndex] || iconNames[0];
  return icons[iconName as keyof typeof icons];
}

// Usage
function AliasBasedIcon({
  alias,
  ...props
}: {
  alias: string;
  [key: string]: any;
}) {
  const IconComponent = getIconByAlias(alias);

  if (!IconComponent) {
    console.warn(`No icon found for alias: ${alias}`);
    return null;
  }

  return <IconComponent {...props} />;
}

// Usage examples
function App() {
  return (
    <div>
      <AliasBasedIcon alias="love" className="w-6 h-6 text-red-500" />
      <AliasBasedIcon alias="profile" className="w-6 h-6 text-blue-500" />
      <AliasBasedIcon alias="home" className="w-6 h-6 text-green-500" />
    </div>
  );
}
```

## 📊 Alias Statistics

```tsx
import { aliases } from '@pelatform/icons/aliases';

function getAliasStatistics() {
  const stats = {
    totalIcons: Object.keys(aliases).length,
    totalAliases: Object.values(aliases).flat().length,
    averageAliasesPerIcon: 0,
    mostAliasedIcon: '',
    mostAliasedCount: 0,
    commonAliases: new Map<string, number>(),
  };

  // Calculate statistics
  Object.entries(aliases).forEach(([iconName, iconAliases]) => {
    if (iconAliases.length > stats.mostAliasedCount) {
      stats.mostAliasedCount = iconAliases.length;
      stats.mostAliasedIcon = iconName;
    }

    iconAliases.forEach((alias) => {
      stats.commonAliases.set(alias, (stats.commonAliases.get(alias) || 0) + 1);
    });
  });

  stats.averageAliasesPerIcon = stats.totalAliases / stats.totalIcons;

  return stats;
}

// Usage
const stats = getAliasStatistics();
console.log('Alias Statistics:', stats);
```

## 🚀 Next Steps

- [Learn about dynamic imports](./dynamic-imports.md)
- [Explore the API reference](./api-reference.md)
- [Check out examples](./examples.md)
