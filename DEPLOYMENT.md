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

## If the Actions page still shows a failing `pages build and deployment` run

The screenshot showing `report-build-status` with `Job is waiting for a hosted runner to come online` means GitHub is still using the Actions-based Pages deployment path. It is waiting on GitHub-hosted runner capacity and has not reached the FinSchool build code yet.

To stop that loop:

1. Cancel the currently running Pages workflow.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, change **Source** from **GitHub Actions** to **Deploy from a branch**.
4. Choose **main** and **/docs**.
5. Click **Save**.
6. Wait for GitHub Pages to publish the static `docs/index.html` site.

If GitHub automatically starts another `pages build and deployment` workflow after this, the Pages source is still set to **GitHub Actions** or the settings change was not saved.
