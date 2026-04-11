# 📂 Category Customization Guide

## Overview

Your portfolio now uses a **simple, clean category system** with only 2-3 categories instead of many tags. This makes the filter look cleaner and is much easier to customize.

---

## ✅ Current Setup

### Categories (3 total):
1. **All** (6 projects) - Shows everything
2. **Action Games** (3 projects) - Fantasy Quest, Space Raiders, Racing Legends
3. **Strategy Games** (3 projects) - Puzzle Kingdom, Metropolis, Dark Halls

### Why This Is Better:
- ✅ Clean, minimal appearance
- ✅ Only 3 buttons instead of 7
- ✅ Easier to understand
- ✅ Simple to customize
- ✅ Better visual balance

---

## 🔧 How to Modify Categories

### Location
Open: `src/app/pages/Home.tsx`

### Step 1: Change Category Names

Find this section (around line 18):

```tsx
const CATEGORIES = ['All', 'Action Games', 'Strategy Games'];
```

**Change the category names:**

```tsx
// Example 1: By platform
const CATEGORIES = ['All', 'PC/Console', 'Mobile'];

// Example 2: By role
const CATEGORIES = ['All', 'Lead Designer', 'Systems Designer'];

// Example 3: By year
const CATEGORIES = ['All', '2024-2025', '2022-2023'];

// Example 4: By focus area
const CATEGORIES = ['All', 'Combat Design', 'Systems Design'];

// Example 5: By team size
const CATEGORIES = ['All', 'AAA Projects', 'Indie Projects'];
```

**Rules:**
- ⚠️ Always keep 'All' as the first item
- ✅ Use 2-4 categories total (including 'All')
- ✅ Use clear, descriptive names
- ✅ Keep names short (2-3 words max)

### Step 2: Assign Projects to Categories

Find each project in the games array (starts around line 26) and change the `category` property:

```tsx
{
  id: 'fantasy-quest',
  title: 'Fantasy Quest',
  // ... other properties ...
  category: 'Action Games' // ← Change this to match your new categories
},
```

**Important:** The category value must **exactly match** one of the categories in the CATEGORIES array (except 'All').

---

## 📝 Complete Examples

### Example 1: Platform-Based Categories

```tsx
const CATEGORIES = ['All', 'PC/Console', 'Mobile'];

const games = [
  {
    // Fantasy Quest
    category: 'PC/Console'
  },
  {
    // Puzzle Kingdom
    category: 'Mobile'
  },
  {
    // Space Raiders
    category: 'PC/Console'
  },
  {
    // Metropolis
    category: 'PC/Console'
  },
  {
    // Dark Halls
    category: 'PC/Console'
  },
  {
    // Racing Legends
    category: 'Mobile'
  }
];
```

### Example 2: Role-Based Categories

```tsx
const CATEGORIES = ['All', 'Lead/Senior Roles', 'Designer Roles'];

const games = [
  {
    // Fantasy Quest - Lead Game Designer
    category: 'Lead/Senior Roles'
  },
  {
    // Puzzle Kingdom - Game Designer
    category: 'Designer Roles'
  },
  {
    // Space Raiders - Systems Designer
    category: 'Designer Roles'
  },
  // ... etc
];
```

### Example 3: Time-Based Categories

```tsx
const CATEGORIES = ['All', 'Recent (2024-2025)', 'Earlier (2022-2023)'];

const games = [
  {
    // Fantasy Quest - 2025
    category: 'Recent (2024-2025)'
  },
  {
    // Puzzle Kingdom - 2024
    category: 'Recent (2024-2025)'
  },
  {
    // Space Raiders - 2024
    category: 'Recent (2024-2025)'
  },
  {
    // Metropolis - 2023
    category: 'Earlier (2022-2023)'
  },
  {
    // Dark Halls - 2023
    category: 'Earlier (2022-2023)'
  },
  {
    // Racing Legends - 2022
    category: 'Earlier (2022-2023)'
  }
];
```

### Example 4: Design Focus Categories

```tsx
const CATEGORIES = ['All', 'Combat & Mechanics', 'Systems & Economy'];

const games = [
  {
    // Fantasy Quest - Combat focus
    category: 'Combat & Mechanics'
  },
  {
    // Puzzle Kingdom - Systems focus
    category: 'Systems & Economy'
  },
  {
    // Space Raiders - Mechanics focus
    category: 'Combat & Mechanics'
  },
  {
    // Metropolis - Economy focus
    category: 'Systems & Economy'
  },
  {
    // Dark Halls - Mechanics focus
    category: 'Combat & Mechanics'
  },
  {
    // Racing Legends - Mechanics focus
    category: 'Combat & Mechanics'
  }
];
```

---

## 🎨 Distribution Tips

### Balanced Distribution (Recommended)

Try to keep categories roughly balanced:

✅ **Good:**
- All (6)
- Action Games (3)
- Strategy Games (3)

✅ **Also Good:**
- All (6)
- PC/Console (4)
- Mobile (2)

❌ **Less Ideal:**
- All (6)
- Category 1 (5)
- Category 2 (1)

**Why?** Unbalanced categories make one button less useful.

### If You Have Many Projects

**3 categories work best for 6-9 projects:**
- All
- Category 1 (3-5 projects)
- Category 2 (3-5 projects)

**4 categories work for 10+ projects:**
- All
- Category 1 (3-4 projects)
- Category 2 (3-4 projects)
- Category 3 (3-4 projects)

**Avoid 5+ categories** - it starts looking messy again!

---

## 🚀 Quick Change Checklist

When changing categories:

1. ✅ Update `CATEGORIES` array with new names
2. ✅ Update each project's `category` property
3. ✅ Check that category names match exactly (case-sensitive!)
4. ✅ Test each filter button
5. ✅ Verify project counts are correct

---

## 🎯 What About Tags?

**Tags are still there!** They're displayed on each project card, but they're **not used for filtering anymore**.

**Tags now serve as:**
- Visual indicators on cards
- Keywords for the project
- Additional context

**Categories are used for:**
- Filtering projects
- Organization

This separation means:
- You can have many specific tags on cards (RPG, Combat Design, Narrative, etc.)
- But only 2-3 clean categories for filtering
- Best of both worlds!

---

## 💡 Category Selection Tips

### By Platform
**Best for:** Mixed portfolio (mobile + console/PC)
**Example:** All, PC/Console, Mobile

### By Role
**Best for:** Career progression showcase
**Example:** All, Lead/Senior, Designer

### By Year
**Best for:** Recent vs. past work
**Example:** All, Recent, Earlier

### By Specialization
**Best for:** Highlighting expertise areas
**Example:** All, Combat Design, Systems Design

### By Genre
**Best for:** Diverse game types (current setup)
**Example:** All, Action, Strategy

### By Project Scale
**Best for:** AAA vs indie experience
**Example:** All, AAA, Indie

---

## ⚠️ Common Mistakes

### Mistake 1: Category Name Doesn't Match
```tsx
const CATEGORIES = ['All', 'Action Games'];

// Wrong - typo/different name
category: 'Action Game'  // Missing 's'

// Correct
category: 'Action Games'  // Exact match
```

### Mistake 2: Forgetting 'All'
```tsx
// Wrong - 'All' must be first
const CATEGORIES = ['Action', 'Strategy', 'All'];

// Correct
const CATEGORIES = ['All', 'Action', 'Strategy'];
```

### Mistake 3: Too Many Categories
```tsx
// Too many - looks messy
const CATEGORIES = ['All', 'Cat1', 'Cat2', 'Cat3', 'Cat4', 'Cat5', 'Cat6'];

// Better - clean and simple
const CATEGORIES = ['All', 'Category 1', 'Category 2'];
```

---

## 🧪 Testing Your Changes

After modifying categories:

1. **Refresh the page**
2. **Click "All"** - See all 6 projects
3. **Click Category 1** - See subset of projects
4. **Click Category 2** - See other subset
5. **Verify counts** - Numbers on buttons should be correct
6. **Check animations** - Projects should animate smoothly

---

## 📊 Visual Comparison

### Before (7 buttons - messy):
```
[All (6)] [RPG (1)] [Puzzle (1)] [Action (1)] 
[Simulation (1)] [Horror (1)] [Racing (1)]
```

### After (3 buttons - clean):
```
[All (6)]  [Action Games (3)]  [Strategy Games (3)]
```

**Much cleaner and easier to understand!**

---

## 🎨 Styling Notes

The category buttons automatically:
- Adapt to your category names
- Show correct project counts
- Highlight the active category
- Animate when switching
- Match your gradient theme

**No styling changes needed!**

---

## 💼 Professional Recommendations

### For Job Applications:
Use **specialization categories**:
- All
- Combat & Action Design
- Systems & Economy Design

### For General Portfolio:
Use **genre categories** (current setup):
- All
- Action Games
- Strategy Games

### For Diverse Experience:
Use **platform categories**:
- All
- PC/Console
- Mobile

### For Career Growth Story:
Use **role categories**:
- All
- Lead Positions
- Designer Positions

---

## 🔄 Making Changes

### Quick 2-Minute Change:

1. Open `src/app/pages/Home.tsx`
2. Find line ~18: `const CATEGORIES = [...]`
3. Change category names
4. Search for `category:` in the file (6 occurrences)
5. Update each project's category
6. Save and refresh!

**That's it!** Clean, simple, and you're done.

---

## ✨ Summary

**Old System:**
- ❌ 7 filter buttons (1 tag per game type)
- ❌ Looked cluttered
- ❌ Hard to understand at a glance

**New System:**
- ✅ 3 filter buttons (grouped categories)
- ✅ Clean and professional
- ✅ Easy to customize
- ✅ Better user experience

**You have complete control:**
- Change category names in 1 line
- Assign projects to categories
- Everything else updates automatically!

---

**Need help?** All changes happen in one file: `src/app/pages/Home.tsx`

Look for the big comment blocks - they guide you through everything! 🎯
