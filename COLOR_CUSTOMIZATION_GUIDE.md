# Portfolio Color Customization Guide

This portfolio features a dynamic color system where each project has its own unique accent color that creates a distinct visual identity while maintaining overall design coherence.

## How to Customize Colors

### 1. Update Project Colors in Home Page

Open `src/app/pages/Home.tsx` and find the `games` array. Each project has an `accentColor` property:

```typescript
const games = [
  {
    id: 'fantasy-quest',
    title: 'Fantasy Quest',
    // ... other properties
    accentColor: '#8B5CF6' // ← Change this hex color
  },
  // ... more projects
];
```

### 2. Update Matching Colors in Detail Pages

Open `src/app/pages/GameDetail.tsx` and update the same color in the `gamesData` object:

```typescript
const gamesData = {
  'fantasy-quest': {
    title: 'Fantasy Quest',
    // ... other properties
    accentColor: '#8B5CF6' // ← Must match the color in Home.tsx
  },
  // ... more games
};
```

**Important:** The `accentColor` must match between both files for consistency!

## Where Colors Are Applied

Each project's accent color is automatically applied to:

### On Project Cards (Home Page):
- Year badge background
- Role text
- Tag backgrounds and borders
- Border color on hover
- Subtle gradient overlay on hover

### On Detail Pages:
- Role text in header
- Primary action button background
- Secondary button borders and text
- Icon colors in info cards
- Info card borders
- Feature item checkmarks and borders
- Responsibility list borders and bullets
- Design documentation accent bars
- Achievement card gradients and trophy icons
- Screenshot caption labels

## Choosing Good Colors

### Color Psychology by Game Genre:

- **Fantasy/RPG**: Purple (#8B5CF6), Violet (#7C3AED)
- **Action/Shooter**: Blue (#3B82F6), Cyan (#06B6D4)
- **Strategy/Simulation**: Emerald (#10B981), Teal (#14B8A6)
- **Horror**: Red (#EF4444), Crimson (#DC2626)
- **Puzzle/Casual**: Amber (#F59E0B), Orange (#F97316)
- **Racing/Sports**: Pink (#EC4899), Rose (#F43F5E)

### Tips for Color Selection:

1. **Contrast**: Ensure colors work well on both light and dark backgrounds
2. **Brightness**: Use vibrant, saturated colors (avoid too dark or too light)
3. **Variety**: Choose different hues for each project to create visual distinction
4. **Harmony**: While different, colors should feel cohesive as a palette

## Color Format

- Use **hexadecimal format**: `#RRGGBB`
- Examples: `#8B5CF6`, `#3B82F6`, `#10B981`

## Testing Your Colors

After changing colors:
1. Check the home page to see how cards look with the new colors
2. Click into each project detail page to verify all elements use the color correctly
3. Test hover states on cards, buttons, and other interactive elements
4. Ensure text remains readable on colored backgrounds

## Neutral Background Colors

The portfolio uses a neutral background (`bg-background` and `bg-muted`) that adapts to light/dark mode. This ensures your accent colors always stand out while maintaining a clean, professional appearance.
