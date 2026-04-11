# Background Design Customization Guide

The portfolio features a dynamic background system that creates unique atmospheric effects for each project using their accent colors.

## Background Variants

The `DynamicBackground` component offers 4 different visual styles:

### 1. **Ambient** (Recommended - Current Default)
```tsx
<DynamicBackground accentColor="#8B5CF6" variant="ambient" />
```
- Soft, animated glowing orbs in corners
- Breathing animation effect
- Most dynamic and premium feel
- Best for: Modern, professional portfolios

**Visual:** Subtle colored glows that pulse gently in the background

---

### 2. **Subtle**
```tsx
<DynamicBackground accentColor="#8B5CF6" variant="subtle" />
```
- Very minimal diagonal gradient
- Static, no animation
- Extremely professional and understated
- Best for: Conservative, corporate portfolios

**Visual:** Barely noticeable gradient wash from top-left

---

### 3. **Gradient**
```tsx
<DynamicBackground accentColor="#8B5CF6" variant="gradient" />
```
- Diagonal gradient with soft animation
- Gentle opacity pulsing
- Clean and modern
- Best for: Balanced visual interest

**Visual:** Soft gradient from corners with breathing effect

---

### 4. **Pattern**
```tsx
<DynamicBackground accentColor="#8B5CF6" variant="pattern" />
```
- Dot grid pattern overlay
- Technical, geometric aesthetic
- Radial gradient accent
- Best for: Game design, technical portfolios

**Visual:** Subtle dot grid with accent color

---

## How to Change Background Style

### For the Home Page

Open `src/app/pages/Home.tsx` and find this line:

```tsx
<DynamicBackground accentColor="#6366F1" variant="ambient" />
```

Change the `variant` prop to one of: `"ambient"`, `"subtle"`, `"gradient"`, or `"pattern"`

You can also change the `accentColor` to set a different color for the home page background.

### For Project Detail Pages

Open `src/app/pages/GameDetail.tsx` and find this line:

```tsx
<DynamicBackground accentColor={game.accentColor} variant="ambient" />
```

The detail pages automatically use each project's accent color. Just change the `variant` prop.

---

## Disable Background Effects

To completely remove background effects, simply delete or comment out the `<DynamicBackground />` component:

```tsx
{/* <DynamicBackground accentColor={game.accentColor} variant="ambient" /> */}
```

---

## Advanced Customization

### Adjust Opacity/Intensity

Edit `src/app/components/DynamicBackground.tsx` and modify the opacity values:

```tsx
// Current: Very subtle
className="... opacity-[0.08]"

// More visible:
className="... opacity-[0.15]"

// Less visible:
className="... opacity-[0.04]"
```

### Change Animation Speed

In `DynamicBackground.tsx`, find the `transition` prop:

```tsx
transition={{
  duration: 8,  // ← Change this (seconds)
  repeat: Infinity,
  ease: "easeInOut",
}}
```

### Add More Gradient Orbs

Copy and paste the motion.div blocks and adjust positions:

```tsx
<motion.div
  className="absolute top-1/2 right-1/3 w-1/3 h-1/3 rounded-full blur-3xl opacity-[0.05]"
  style={{
    background: `radial-gradient(circle, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4) 0%, transparent 70%)`,
  }}
  // ... animation props
/>
```

---

## Section-Specific Backgrounds

You can also add colored backgrounds to specific sections for more contrast.

### Example: Colored Section Background

```tsx
<section
  className="py-16 px-4 relative"
  style={{
    backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.02)`,
  }}
>
  {/* Section content */}
</section>
```

### Example: Gradient Section

```tsx
<section
  className="py-16 px-4 relative"
  style={{
    background: `linear-gradient(to bottom,
      transparent 0%,
      rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.03) 50%,
      transparent 100%)`,
  }}
>
  {/* Section content */}
</section>
```

---

## Design Recommendations

### For Different Portfolio Styles

**Minimalist/Clean:**
- Use `variant="subtle"` or no background
- Keep backgrounds very light

**Modern/Premium:**
- Use `variant="ambient"` (current default)
- Animated effects add polish

**Technical/Game Dev:**
- Use `variant="pattern"`
- Geometric patterns fit the theme

**Creative/Artistic:**
- Use `variant="gradient"`
- Consider increasing opacity for more color

### Color Intensity Guidelines

- **Opacity 0.02-0.05**: Barely noticeable, very professional
- **Opacity 0.06-0.10**: Subtle but present (recommended)
- **Opacity 0.11-0.20**: Noticeable, more colorful
- **Opacity 0.21+**: Very prominent, use carefully

### Performance Notes

- All background effects are GPU-accelerated
- Animations use CSS transforms for smooth performance
- Fixed positioning ensures no scroll jank
- `-z-10` keeps backgrounds behind all content

---

## Combining Effects

You can layer multiple background effects:

```tsx
<div className="min-h-screen bg-background relative">
  {/* Animated ambient */}
  <DynamicBackground accentColor={color} variant="ambient" />

  {/* Plus a subtle pattern overlay */}
  <div className="fixed inset-0 -z-9 opacity-[0.01] pointer-events-none"
    style={{
      backgroundImage: 'url("data:image/svg+xml,...")',
      backgroundSize: '40px 40px'
    }}
  />

  {/* Your content */}
</div>
```

---

## Testing Backgrounds

After making changes:

1. ✅ Check the home page appearance
2. ✅ Navigate to each project detail page
3. ✅ Verify colors work in both light and dark mode (if applicable)
4. ✅ Test on different screen sizes
5. ✅ Ensure text remains readable
6. ✅ Check animation performance

---

## Troubleshooting

**Background too visible:**
- Reduce opacity values in DynamicBackground.tsx
- Use `variant="subtle"`

**Background not visible:**
- Increase opacity values
- Check z-index (should be negative)
- Ensure background color contrast

**Animation too fast/slow:**
- Adjust `duration` in transition props
- Typical range: 6-15 seconds

**Text hard to read:**
- Reduce background opacity
- Add background blur to text sections
- Use semi-transparent card backgrounds
