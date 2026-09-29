# AGENTS.md

<!-- D4VD-PERSONAL-REPO-START -->
## David-owned repository defaults

This is a David-owned Git repository.

Global engineering policy and Codex defaults come from:

- `~/.codex/AGENTS.md`
- `~/.codex/config.toml`

Keep this repository's `AGENTS.md` focused on project-specific behavior and tighter constraints.

### Working defaults

- Inspect before changing.
- Prefer the smallest meaningful, provable change.
- Preserve unrelated work.
- Use existing repository conventions and tooling.
- For regressions, prove the failing behavior before fixing it.
- Do not weaken tests merely to obtain a pass.
- Do not expose or modify credentials or secrets.
- Do not commit or push unless explicitly requested.

### Repository tooling

When present and relevant, prefer existing project tooling such as:

- `.ai/`
- `.ai/repo-index.md`
- `.ai/doctor.sh`
- `.codex/`
- `docs/codex/`

### Validation

After code or configuration changes:

1. run the nearest relevant validation
2. run repository validation tooling when applicable
3. report changed files and exact validation results
4. report material remaining risks

<!-- D4VD-PERSONAL-REPO-END -->
