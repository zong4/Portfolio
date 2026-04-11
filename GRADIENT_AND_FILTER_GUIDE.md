# 🎨 Gradient Background & Project Filter Guide

## What's New

Your portfolio homepage now features:
1. **Beautiful gradient background** with animated orbs
2. **Interactive project filter** to browse by category
3. **Glass morphism effects** on sections
4. **Smooth animations** when filtering

---

## 🌈 Gradient Background System

### Current Design

The main page features a **multi-layered gradient background**:

**Base Layer:**
- Light mode: Violet → Indigo → Purple gradient
- Dark mode: Dark gradient with same colors
- Smooth color transitions

**Animated Orbs:**
- Two large gradient orbs (top-right, bottom-left)
- Gentle floating animation
- Creates depth and visual interest

### Location
`src/app/pages/Home.tsx` - Lines 101-132

---

## 🎨 Customizing the Gradient Colors

### Change Base Gradient Colors

Find this line in `Home.tsx`:

```tsx
<div className="fixed inset-0 -z-10 bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950" />
```

**Available Tailwind gradient colors:**

**Warm Tones:**
```tsx
from-rose-50 via-pink-50 to-purple-50          // Pink to Purple
from-orange-50 via-amber-50 to-yellow-50       // Warm sunset
from-red-50 via-rose-50 to-pink-50             // Red to Pink
```

**Cool Tones:**
```tsx
from-blue-50 via-cyan-50 to-teal-50            // Ocean blue
from-sky-50 via-blue-50 to-indigo-50           // Sky blue
from-cyan-50 via-teal-50 to-emerald-50         // Aqua green
```

**Nature Tones:**
```tsx
from-emerald-50 via-green-50 to-lime-50        // Forest green
from-lime-50 via-yellow-50 to-amber-50         // Sunshine
```

**Professional:**
```tsx
from-slate-50 via-gray-50 to-zinc-50           // Neutral gray
from-blue-50 via-slate-50 to-gray-50           // Cool professional
```

### Change Animated Orb Colors

Find the two `motion.div` sections (lines 106 and 120):

```tsx
// Top-right orb
background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
//                                         ↑ Change these RGB values

// Bottom-left orb
background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
```

**Common colors in RGB:**
- Purple: `139, 92, 246`
- Indigo: `99, 102, 241`
- Blue: `59, 130, 246`
- Cyan: `6, 182, 212`
- Emerald: `16, 185, 129`
- Pink: `236, 72, 153`
- Rose: `244, 63, 94`

### Adjust Orb Animation Speed

Change the `duration` values:

```tsx
transition={{
  duration: 15,  // ← Change this (seconds)
  repeat: Infinity,
  ease: "easeInOut",
}}
```

**Recommendations:**
- **Slow & Calm:** 15-20 seconds
- **Balanced:** 10-15 seconds (current)
- **Energetic:** 5-10 seconds

### Disable Animated Orbs

Simply comment out or remove the two `motion.div` blocks for the orbs.

---

## 🔍 Project Filter System

### How It Works

**Categories Available:**
- All (shows all projects)
- RPG
- Puzzle
- Action
- Simulation
- Horror
- Racing

**Features:**
- Click category to filter projects
- Shows project count per category
- Smooth animations when filtering
- Active category highlighted
- Glassmorphism button design

### Location
`src/app/pages/Home.tsx` - Lines 96-98 (state) and 214-245 (UI)

---

## 🎛️ Customizing the Filter

### Add/Remove Categories

Edit the `categories` array in `Home.tsx`:

```tsx
const categories = ['All', 'RPG', 'Puzzle', 'Action', 'Simulation', 'Horror', 'Racing'];
//                          ↑ Add or remove categories here
```

**Important:** Categories must match the tags in your game data!

### Change Filter Colors

Find the filter buttons section and update the `style` prop:

```tsx
style={{
  backgroundColor: selectedFilter === category
    ? 'rgba(99, 102, 241, 0.15)'  // ← Active background
    : 'rgba(255, 255, 255, 0.5)',  // ← Inactive background
  border: selectedFilter === category
    ? '2px solid rgba(99, 102, 241, 0.5)'  // ← Active border
    : '2px solid rgba(0, 0, 0, 0.1)',      // ← Inactive border
  color: selectedFilter === category
    ? '#6366F1'  // ← Active text color
    : 'inherit',
}}
```

### Change Filter Button Style

**Pill Style (Current):**
```tsx
className="px-5 py-2.5 rounded-full ..."
```

**Rounded Rectangle:**
```tsx
className="px-5 py-2.5 rounded-lg ..."
```

**Sharp Edges:**
```tsx
className="px-5 py-2.5 rounded ..."
```

### Adjust Filter Animation

Change hover and tap effects:

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}  // ← Hover size
  whileTap={{ scale: 0.95 }}    // ← Click size
```

**More subtle:**
```tsx
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

**More dramatic:**
```tsx
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
```

### Hide Project Count

Remove this code from the button:

```tsx
{category !== 'All' && (
  <span className="ml-2 opacity-60">
    ({games.filter(g => g.tags.includes(category)).length})
  </span>
)}
```

---

## 🪟 Glass Morphism Effects

### Hero Section Glass Effect

```tsx
<div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-transparent dark:from-black/50 dark:via-black/20 dark:to-transparent backdrop-blur-sm" />
```

**Adjust opacity:**
- `from-white/50` → `from-white/70` (more opaque)
- `from-white/50` → `from-white/30` (more transparent)

**Adjust blur:**
- `backdrop-blur-sm` → `backdrop-blur-md` (more blur)
- `backdrop-blur-sm` → `backdrop-blur-none` (no blur)

### Expertise Section Glass Effect

```tsx
<div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-lg" />
```

**Available blur levels:**
- `backdrop-blur-sm` - Subtle
- `backdrop-blur` - Moderate
- `backdrop-blur-lg` - Strong (current)
- `backdrop-blur-xl` - Very strong

---

## 🎨 Complete Color Scheme Examples

### Ocean Theme

```tsx
// Base gradient
from-blue-50 via-cyan-50 to-teal-50

// Orb colors (RGB)
Top orb: 59, 130, 246 (blue)
Bottom orb: 6, 182, 212 (cyan)

// Filter active color
backgroundColor: 'rgba(6, 182, 212, 0.15)'
border: '2px solid rgba(6, 182, 212, 0.5)'
color: '#06B6D4'
```

### Sunset Theme

```tsx
// Base gradient
from-orange-50 via-rose-50 to-purple-50

// Orb colors (RGB)
Top orb: 236, 72, 153 (pink)
Bottom orb: 251, 146, 60 (orange)

// Filter active color
backgroundColor: 'rgba(251, 146, 60, 0.15)'
border: '2px solid rgba(251, 146, 60, 0.5)'
color: '#FB923C'
```

### Forest Theme

```tsx
// Base gradient
from-emerald-50 via-green-50 to-lime-50

// Orb colors (RGB)
Top orb: 16, 185, 129 (emerald)
Bottom orb: 34, 197, 94 (green)

// Filter active color
backgroundColor: 'rgba(16, 185, 129, 0.15)'
border: '2px solid rgba(16, 185, 129, 0.5)'
color: '#10B981'
```

### Professional Minimal

```tsx
// Base gradient
from-slate-50 via-gray-50 to-zinc-50

// Orb colors (RGB)
Top orb: 100, 116, 139 (slate)
Bottom orb: 71, 85, 105 (slate darker)

// Filter active color
backgroundColor: 'rgba(100, 116, 139, 0.15)'
border: '2px solid rgba(100, 116, 139, 0.5)'
color: '#64748B'
```

---

## 🔧 Advanced Customizations

### Add More Orbs

Copy a motion.div block and change position:

```tsx
<motion.div
  className="fixed top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-15 -z-10"
  style={{
    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
  }}
  animate={{
    scale: [1, 1.3, 1],
    rotate: [0, 180, 0],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
```

### Different Filter Layouts

**Centered:**
```tsx
<div className="flex flex-wrap gap-3 justify-center">
```

**Left-aligned:**
```tsx
<div className="flex flex-wrap gap-3 justify-start">
```

**Right-aligned:**
```tsx
<div className="flex flex-wrap gap-3 justify-end">
```

**Vertical sidebar style:**
```tsx
<div className="flex flex-col gap-2">
```

### Add Filter Dropdown (Alternative)

Replace button list with a dropdown select:

```tsx
<select
  value={selectedFilter}
  onChange={(e) => setSelectedFilter(e.target.value)}
  className="px-4 py-2 rounded-lg border-2 backdrop-blur-md"
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: '2px solid rgba(99, 102, 241, 0.3)',
  }}
>
  {categories.map(category => (
    <option key={category} value={category}>
      {category}
    </option>
  ))}
</select>
```

---

## 📱 Responsive Behavior

The filter automatically adjusts:
- **Desktop:** Horizontal pills
- **Tablet:** Wraps to multiple rows
- **Mobile:** Centered, wrapping pills

All animations and gradients work seamlessly across devices.

---

## ⚡ Performance Tips

1. **Reduce animation complexity** if performance is slow:
   - Lower duration values
   - Remove extra orbs
   - Reduce blur intensity

2. **Optimize for mobile**:
   - Current design is already optimized
   - GPU-accelerated animations

3. **Browser compatibility**:
   - Works in all modern browsers
   - Graceful degradation in older browsers

---

## 🎯 Quick Reference

**Files Modified:**
- `src/app/pages/Home.tsx` - Main page with gradient & filter

**Key Sections:**
- Lines 101-132: Gradient background
- Lines 96-98: Filter state
- Lines 214-245: Filter UI
- Lines 247-275: Filtered projects grid

**Dependencies:**
- Motion (Framer Motion) - Already installed
- React hooks (useState) - Built-in

---

## 🐛 Troubleshooting

**Filter not working:**
- Check that categories match game tags exactly
- Verify React import at top of file
- Ensure useState is called correctly

**Gradient not visible:**
- Check z-index values (should be -z-10)
- Verify gradient colors have sufficient contrast
- Try increasing opacity values

**Animations stuttering:**
- Reduce animation duration
- Lower blur intensity
- Remove extra orbs

**Glass effect too strong:**
- Reduce backdrop-blur levels
- Lower opacity in bg-white/XX values
- Remove backdrop-blur entirely

---

## 📚 Related Guides

- `COLOR_CUSTOMIZATION_GUIDE.md` - Project accent colors
- `BACKGROUND_CUSTOMIZATION_GUIDE.md` - Background variants
- `BACKGROUND_DESIGN_SHOWCASE.md` - Background examples
