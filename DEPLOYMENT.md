# GitHub Pages Deployment

The prior GitHub Actions runs failed before project code executed, with GitHub reporting `Failed to resolve action download info` and `Service Unavailable`. That is an Actions infrastructure/download problem, not a Vite compile error.

To avoid marketplace action downloads entirely, this repository now includes a static fallback site in `docs/`.

## Recommended Pages setting

In GitHub:

1. Open **Settings → Pages**.
2. Set **Source** to **Deploy from a branch**.
3. Select branch **main**.
4. Select folder **/docs**.
5. Save.

GitHub Pages will then serve `docs/index.html` directly without running the failing Actions workflow.

## React app development

The React/Vite source is still available in `src/` for continued platform development. When Actions service availability is stable, the project can switch back to an Actions-based Vite build.
