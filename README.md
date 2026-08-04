# SoCa project page

Static academic project page for [SoCa](https://github.com/finalflash159/soca), a Vietnamese voice assistant with a local audio path, explicit local or remote LLM selection, evidence-aware retrieval, memory, and controlled workflows.

The page follows the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) and keeps its required template and Nerfies attribution in the footer. It has no build step and no runtime dependency beyond the static assets checked into this repository.

## Run locally

From this directory:

```bash
python3 -m http.server 4173
```

Open <http://127.0.0.1:4173>.

## Deploy

Use a static deployment with:

- framework preset: `Other`
- build command: empty
- output directory: `.`

The current metadata uses `https://soca-page.vercel.app/` as the provisional canonical URL. Update the canonical, Open Graph, Twitter, and JSON-LD URLs together when the final domain is selected.

## Content status

The page is content-complete for the static project-page slice. The benchmark figures are copied from the private release repository's tracked benchmark assets, while the two video placements deliberately use a short neutral placeholder until a real private-vault demo recording is reviewed. The placeholder must be replaced before public launch; do not describe it as a real run.

The page links to the SoCa repository's [documentation](https://github.com/finalflash159/soca/blob/main/docs/README.md) and [benchmark record](https://github.com/finalflash159/soca/blob/main/BENCHMARKS.md) instead of duplicating the system documentation here.

## License

The page template attribution and CC BY-SA 4.0 notice are retained in the footer. SoCa's source repository remains the authoritative location for its own code and data licenses.
