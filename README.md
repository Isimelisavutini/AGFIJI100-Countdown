# AGFIJI100 Countdown

Responsive animated countdown landing page for AGFIJI100.

## Structure

- `index.html` — semantic landing page markup
- `assets/css/styles.css` — responsive visual system and animations
- `assets/js/app.js` — live countdown logic

## Deployment

This is a static site and can be deployed directly to Vercel with no build command. The repository root is the output directory.

## Countdown date

The target date is configured in `assets/js/app.js`:

```js
const TARGET_DATE = new Date('2027-02-25T00:00:00+12:00');
```
