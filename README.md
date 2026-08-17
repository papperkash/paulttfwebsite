# The Technology Framework

Static marketing site for [www.thetechnologyframework.com](https://www.thetechnologyframework.com/).

Hosted on Azure Static Web Apps (`ttf-2026`). There is no build step: HTML, `css/`, `js/`, and `images/` are served as-is.

`staticwebapp.config.json` uses `"trailingSlash": "auto"` so folder pages 301 from `/slug` to `/slug/`, while root files (`robots.txt`, `sitemap.xml`, `llms.txt`, `BingSiteAuth.xml`) stay 200 at their unsashed paths. SWA `trailingSlash` is global and would 301 a root `*.html` file away from the `.html` URL, so `google521d6f0a2ad2eeae.html` stays in the repo and is served at that exact path by a rewrite to `gsc/google521d6f0a2ad2eeae` (the deploy workflow removes the root copy so `auto` cannot pretty-URL it). It 301s old first-pass and WordPress leftover URLs, and uses a custom 404. Canonical host is `https://www.thetechnologyframework.com` (never the Azure preview host or the apex host). Canonicals, sitemap, and internal links use trailing slashes.

The homepage is the magazine landing page. The sitemap is the 14 URLs in `docs/ttf-seo-geo-pack.md`:

- `/`
- `/fractional-head-of-it/`
- `/cyber-essentials-iso-27001/`
- `/microsoft-copilot-readiness/`
- `/azure-finops/`
- `/production-it-agent/`
- `/how-we-work/`
- `/who-we-work-with/`
- `/south-west-wealth-ifa/`
- `/pe-carve-out-it/`
- `/professional-services-it/`
- `/proof/`
- `/contact/`
- `/privacy/`

`/docs/*` is not a public page. Offers is a header disclosure menu, not a sixth page.

The Technology Framework Ltd (England 13918137) is a standalone UK practice. Named Head of IT for firms that have outgrown tickets.
