**CornerFrame** — the studio's signature page shell. Large serif brand letters (S / B) pinned to the viewport corners with the brushstroke mark bottom-left, and vertical STUDIO / WORK labels as the only nav. Content scrolls inside; the frame stays fixed.

```jsx
<CornerFrame
  markSrc="assets/logo-mark.png"
  tone="ink"
  onHome={() => go("home")}
  onLeft={() => go("studio")}
  onRight={() => go("work")}
>
  {/* full-viewport scroll-snap panels */}
</CornerFrame>
```

Use `tone="light"` when the panel behind the corners is dark or full-bleed imagery. Pair with full-viewport color-block panels for the full effect.
