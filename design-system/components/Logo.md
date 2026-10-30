**Logo** — the Studio Browne identity: a hand-drawn brushstroke SB monogram paired with the Manofa wordmark. Pass `markSrc` with the correct relative path to the mark PNG.

```jsx
<Logo variant="lockup" markSrc="assets/logo-mark.png" size={44} />
<Logo variant="mark" markSrc="assets/logo-mark-light.png" tone="light" size={56} />
<Logo variant="wordmark" size={40} />
```

Use `tone="light"` on dark (espresso/ink) grounds — it pairs with `logo-mark-light.png`. Never recolor or redraw the brushstroke mark.
