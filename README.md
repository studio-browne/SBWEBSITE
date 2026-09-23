[README.md](https://github.com/user-attachments/files/32542478/README.md)
# Studio Browne

Interior design studio — Beverly Hills, CA.

The site is static: open `index.html` and everything runs from the files
beside it. No build step, no server, no dependencies to install.

## Pages

| File | |
|---|---|
| `index.html` | Home |
| `work.html` | Selected work index |
| `studio.html` | Studio / about |
| `contact.html` | Inquiry |
| `vallejo.html` | Vallejo — Pacific Heights, SF, 2020 |
| `robertson.html` | Robertson — Beverly Hills, CA, 2025 |
| `jackson.html` | Jackson — Pacific Heights, SF, 2018 |
| `filbert.html` | Filbert — Russian Hill, SF, 2018 |
| `washington.html` | Washington — Russian Hill, SF, 2017 |
| `project.html` | Blank project template |

## Layout

```
index.html …           the pages
styles.css             entry stylesheet
tokens/                color, typography, spacing, corner-frame rails
assets/                photography, video, logos
lib/                   runtime libraries, served locally
support.js             page runtime
ds-bundle.js           component bundle
design-system/         tokens, component docs, brand notes (reference)
brand-assets/          logo marks and brand fonts
.nojekyll              tells GitHub Pages to serve files as-is
```

## Hosting

GitHub Pages, from the `main` branch, root folder. Step-by-step
instructions are in `START-HERE.txt`.

## Notes

`assets/video/hero-main.mp4` is 19 MB — within GitHub's limits, but the
heaviest file here and worth compressing if the homepage feels slow.

Type is limited to three families site-wide: Manofa (display), Sorts Mill
Goudy (serif), Mulish (sans). Colors and spacing live in `tokens/`;
change them there rather than in individual pages.

© Studio Browne. Photography and written content are not licensed for reuse.
