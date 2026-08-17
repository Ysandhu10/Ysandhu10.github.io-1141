# yashitasandhu.com

Portfolio site for **Yashita Sandhu**, Social Media Analyst — social listening, paid social
measurement, and competitive benchmarking.

Static HTML on GitHub Pages. No build step, no framework, no JavaScript required to read
anything. Each route carries its own `<head>`, canonical URL, JSON-LD and Open Graph card so
crawlers and link unfurlers see the right thing before any script runs.

## Routes

| Route | What it is |
|---|---|
| `/` | Home. Case study 01 rendered fully evidenced inline. |
| `/work/share-of-voice/` | Sentiment-weighted share of voice and crisis detection across six brands. |
| `/work/paid-social/` | A/B evaluation with intervals, peeking risk, and creative fatigue. |
| `/work/content-cockpit/` | Twelve KPIs, aggregate rates, day-part timing with a sample floor. |
| `/method/` | Metric dictionary, taxonomy architecture, QA checklist. |
| `/about/` | Background, tools, experience, confidentiality position. |

## Charts

Hand-authored inline SVG, themed from the same CSS custom properties as the rest of the site, so
figures follow light and dark automatically. No chart library, no screenshots, no tool chrome.
Every headline states the finding rather than naming the axes, series are direct-labelled instead
of using a legend, and each figure carries its source, window and sample size.

## Data

Every figure on this site comes from synthetic, seeded, reproducible generators in three public
repositories. **No employer or client data appears anywhere on this site or in those repos.**

- [social-listening-engine](https://github.com/Ysandhu10/social-listening-engine) — 33 tests
- [paid-social-campaign-analyzer](https://github.com/Ysandhu10/paid-social-campaign-analyzer) — 36 tests
- [social-media-data-dashboard](https://github.com/Ysandhu10/social-media-data-dashboard) — 28 tests

Each generator plants known events at known dates, so the pipelines are tested against ground
truth rather than merely plausible.

## Local

```
python3 -m http.server 8899
```
