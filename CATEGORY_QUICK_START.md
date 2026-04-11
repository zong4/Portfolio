# ⚡ Category Quick Start Guide

## What Changed?

**Before:** 7 filter buttons based on individual tags (messy)  
**After:** 3 filter buttons based on grouped categories (clean)

---

## 🎯 Current Categories

1. **All** - Shows all 6 projects
2. **Action Games** - Fantasy Quest, Space Raiders, Racing Legends (3 projects)
3. **Strategy Games** - Puzzle Kingdom, Metropolis, Dark Halls (3 projects)

---

## ✏️ How to Customize (2 Minutes)

### Step 1: Open the File
`src/app/pages/Home.tsx`

### Step 2: Change Category Names (Line ~18)

**Current:**
```tsx
const CATEGORIES = ['All', 'Action Games', 'Strategy Games'];
```

**Change to whatever you want:**
```tsx
const CATEGORIES = ['All', 'PC/Console', 'Mobile'];
// or
const CATEGORIES = ['All', 'Recent Work', 'Past Work'];
// or
const CATEGORIES = ['All', 'Combat Design', 'Systems Design'];
```

### Step 3: Update Each Project's Category

Find each project (starts line ~26) and change:

```tsx
{
  id: 'fantasy-quest',
  title: 'Fantasy Quest',
  // ... other stuff ...
  category: 'Action Games'  // ← Change this to match your new category
},
```

**Make sure it matches exactly what you put in CATEGORIES!**

### Step 4: Save and Refresh

Done! Your new categories are live.

---

## 📋 Quick Examples

### By Platform:
```tsx
const CATEGORIES = ['All', 'PC/Console', 'Mobile'];

// Then assign:
category: 'PC/Console'  // or 'Mobile'
```

### By Time:
```tsx
const CATEGORIES = ['All', '2024-2025', '2022-2023'];

// Then assign:
category: '2024-2025'  // or '2022-2023'
```

### By Role:
```tsx
const CATEGORIES = ['All', 'Lead Designer', 'Game Designer'];

// Then assign:
category: 'Lead Designer'  // or 'Game Designer'
```

---

## 💡 Pro Tips

1. **Keep 2-4 categories total** (including 'All')
2. **Use short names** (1-3 words)
3. **Balance the split** (try to have similar numbers in each category)
4. **Category names are case-sensitive** - make sure they match exactly!

---

## ⚠️ Important Rules

1. ✅ **Always** keep 'All' as the first category
2. ✅ Each project must have exactly one category
3. ✅ Category name in project must match CATEGORIES array exactly
4. ❌ Don't use more than 4-5 categories (gets messy)

---

## 🎨 What About Tags?

**Tags still exist!** They're shown on the project cards as badges.

**Difference:**
- **Categories** = Used for filtering (clean, 2-3 options)
- **Tags** = Shown on cards as keywords (can have many)

You get the best of both worlds:
- Clean filter with few categories
- Detailed tags visible on each card

---

## ✅ Testing Checklist

After changing categories:

- [ ] Click "All" - see all projects
- [ ] Click Category 1 - see subset
- [ ] Click Category 2 - see other subset
- [ ] Check project counts on buttons
- [ ] Verify smooth animations

---

## 🚀 Benefits of New System

✅ **Cleaner UI** - Only 3 buttons instead of 7  
✅ **Easier to understand** - Clear, grouped categories  
✅ **Professional look** - Not cluttered  
✅ **Simple to customize** - Change 1 line + assign projects  
✅ **Better UX** - Users know what to expect in each category  

---

## 📚 Need More Help?

See `CATEGORY_CUSTOMIZATION_GUIDE.md` for:
- Detailed examples
- Complete scenarios
- Common mistakes
- Distribution tips
- Professional recommendations

---

## 🎯 Summary

**To change categories:**
1. Edit `CATEGORIES` array (1 line)
2. Update each project's `category` property (6 lines)
3. Save and refresh
4. Done!

**That's it!** Simple, clean, and fully customizable. 🎉
