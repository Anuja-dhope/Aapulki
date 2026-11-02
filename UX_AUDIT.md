# Aapulki UX audit

Stack: static single-page site (`index.html`, `script.js`, `style.css`). Vanilla JS, hash routing (`V` views in `script.js`), state in `localStorage` (`aap`, `aapf`, `aaps`, `aapo`, `aapo_*`). No package.json, build step, linter or backend. `aapulki.html` is an older standalone copy that `index.html` does not link to.

Baseline before any change (Chromium via Playwright, 26 routes at 375/768/1280px): 0 console errors, no real horizontal overflow, 858 tap targets under 44px, axe WCAG A/AA: `link-in-text-block` only.

## Final status

All changes are on branch `ux-improvements`. Files: `script.js`, `style.css`, `index.html`, `UX_AUDIT.md`.

| # | Item | Final status | Notes |
|---|------|--------------|-------|
| 1 | My Orders: current and previous | Done | Checkout orders appear here; linked from header, Profile, footer and confirmation |
| 1 | Order details | Done | ID, products, quantity, address, payment, totals |
| 1 | Delivery timeline, estimate, status | Done | Six stages, simulated from time since order |
| 1 | Cancel before Shipped | Done | Confirmation prompt; shows Cancelled |
| 1 | Help / Contact Support | Done, simulated | Request is saved on the order; nobody is contacted, and the UI says so |
| 2 | No hardcoded details | Done | Checkout and Profile |
| 2 | Phone and PIN validation, inline errors | Done | Text errors linked to fields; focus moves to the first problem |
| 2 | Go back without losing details | Done | Saved as typed; new Review step with Edit links |
| 2 | Payment labelled | Done | "Demo payment – no real charge" |
| 2 | False SMS / tracking claims | Removed | |
| 3 | Remove with Undo | Done | Also when quantity goes below 1 |
| 3 | Quantity updates totals | Done | Unit and line prices shown |
| 3 | Subtotal, delivery, final total | Done | Shared by cart, checkout and orders |
| 3 | Empty cart: Continue Shopping | Done | |
| 4 | Sorting | Done | Price both ways, Popularity (sample review count) |
| 4 | Delivery estimate on cards | Done | |
| 4 | Filter chips and Clear All | Done | Browse and Gift Finder picks |
| 4 | Filters persist on back | Done | Also survives reload; scroll restored on Browse |
| 4 | Consistent cards | Done | One shared card, 4:3 images |
| 5 | Back / edit, answers preserved | Already existed, extended | Edit answers from results and return directly |
| 5 | Progress indicator | Already existed | "Step n of 4" |
| 5 | No-match alternatives | Done | Relaxes one preference at a time, each labelled |
| 5 | "Why this matches" | Done | Cites only the answers a gift matches |
| 6 | Character counter | Done | 45/150 format; limit was already 150 |
| 6 | Card preview | Already existed | Now states nothing is in the cart yet |
| 6 | Personalisation retained | Done | Card text now reaches cart and order |
| 6 | Selected options shown | Done | Live summary on both steps |
| 7 | Empty wishlist, cart, search, occasions | Done | Each with a working action |
| 7 | Success / error messages | Done | Text and icon, with distinct warning style |
| 8 | Keyboard, modals | Done | Tested keyboard-only through the purchase flow |
| 8 | Focus indicators | Done | |
| 8 | Labels and linked errors | Done | |
| 8 | Contrast (WCAG AA) | Done | Automated axe checks only; palette unchanged |
| 8 | Text size / contrast settings everywhere | Done | Fixed high contrast under OS dark mode |
| 8 | 44px tap targets | Done | 858 undersized at baseline, 0 now |
| 8 | Reduced motion | Done | |
| 8 | Alt text | Done | Placeholder photos are named as placeholders |
| 9 | Consistent styling, prominent actions | Done | |
| 9 | Fixed image ratio | Done | |
| 9 | Hover states | Done | |
| 9 | Responsive at 375 / 768 / 1280 | Done | |
| 9 | Home priorities | Done | Gift Finder, then occasions; voice search moved lower |

## Verification

Chromium via Playwright, with the test scripts kept outside this project.

- Flow scripts passed: checkout, cart, empty states and feedback, orders, browsing, Gift Finder, personalisation, keyboard-only purchase, older saved data, Marathi and Hindi.
- Sweep of 29 routes at 375 / 768 / 1280px in light, dark, high contrast (both), extra-large text, senior and simple modes: 0 overflow, 0 undersized tap targets, 0 console errors. axe WCAG A/AA, at 375 and 1280px: 0 violations.
- ESLint with a temporary config: 0 errors. Two warnings are false positives, for handlers called from inline form attributes.
- Not tested: real phones, Safari, Firefox, or a screen reader. Google Fonts were blocked during tests, so text widths may differ slightly with Nunito loaded.

## Audit before implementation

| # | Item | Status | Evidence | Files |
|---|------|--------|----------|-------|
| 1 | My Orders, details, timeline, cancel, support | Missing | Order form navigates to a static screen with a hardcoded ID; no order is stored | script.js |
| 2 | Checkout: no hardcoded details | Missing | Prefilled with a named person, phone and address; Profile too | script.js |
| 2 | Phone / PIN validation, inline errors | Missing | Only native `required` | script.js |
| 2 | Go back without losing details | Missing | Form values are never stored | script.js |
| 2 | Simulated payment label | Missing | No label anywhere | script.js |
| 2 | Remove false SMS / tracking claim | Missing | "Tracking link & SMS confirmation sent" | script.js |
| 3 | Remove with confirm / undo | Missing | Removes immediately | script.js |
| 3 | Quantity updates totals | Done | Works; unit vs line price unclear | script.js |
| 3 | Subtotal / delivery / total | Partial | Present; delivery date is hardcoded | script.js |
| 3 | Empty cart "Continue Shopping" | Partial | Empty state links to the Finder instead | script.js |
| 4 | Sorting | Missing | `R.sort` exists but has no UI; Browse has none | script.js |
| 4 | Delivery estimate on cards | Partial | Recommendations only | script.js |
| 4 | Filter chips + Clear All | Missing | Browse has category buttons only | script.js |
| 4 | Filters persist on back | Partial | In memory only, shared between Browse and picks | script.js |
| 4 | Consistent cards | Partial | Four card variants, 150px and 180px image heights | script.js, style.css |
| 5 | Back / edit, answers preserved | Done | `aapf` storage; chips link to earlier steps | script.js |
| 5 | Progress indicator | Done | "Step n of 4" | script.js |
| 5 | No-match help with alternatives | Partial | Message and actions, no alternative gifts | script.js |
| 5 | "Why this matches" | Partial | Interests and occasion only; reads badly for "Other" | script.js |
| 6 | Character counter | Partial | "n of 150 characters" | script.js |
| 6 | Card preview before cart | Done | Live preview and preview step | script.js |
| 6 | Personalisation retained | Partial | Kept in `aapo`, but greeting text is dropped when added to cart | script.js |
| 6 | Selected options clearly shown | Partial | Only on the final preview | script.js |
| 7 | Empty wishlist | Partial | No "Explore Gifts" | script.js |
| 7 | No search results + Clear Filters | Missing | No search on Browse | script.js |
| 7 | No upcoming occasions | Partial | Filtered list only; none on home | script.js |
| 7 | Toasts | Partial | Icon is always a check; cart and order actions missing | script.js |
| 8 | Keyboard, modals | Partial | Native `<dialog>`, but modal headings unlabelled and focus lost on re-render | script.js |
| 8 | Focus indicators | Partial | Present; weak on inputs | style.css |
| 8 | Labels | Partial | Icon buttons use `title` only; quantity buttons unlabelled | script.js |
| 8 | Contrast settings on every page | Partial | High contrast is ignored when the OS is in dark mode (CSS specificity) | style.css |
| 8 | Tap targets 44px | Partial | 858 undersized at baseline | style.css |
| 8 | Reduced motion | Done | Pseudo `::after` not covered | style.css |
| 8 | Alt text | Partial | Name only; five products use another product's photo | script.js |
| 9 | Visual consistency, prominence, fixed image ratio | Partial | See cards above | script.js, style.css |
| 9 | Responsive | Partial | Home is long; Find a Gift competes with voice search | script.js, style.css |

### Defects found outside the list, in the same flows (all fixed)

- `order-success` empties the cart as a side effect of rendering.
- Gifts that cannot be personalised still show the switch, and it adds ₹149 at cart.
- Cart defaults to festive wrapping while the preview shows kraft.
- Fake actions: Profile "Edit Name" / "Manage Addresses", Gift Together "link copied", Corporate "contact you in 2 hours".
- Unsupported claims: "updated live", "Secure checkout · Free returns", occasion reminders.
- Occasion day counts are static, so they are wrong after the seed date.
- A first visit starts with a cart item and saved gifts the user never added.
- "See gifts for this week" link ignores its filter; the product page's image views differ only in background colour.
- User-entered occasion and recipient text is written to the page unescaped.
