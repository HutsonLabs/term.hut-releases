# term.hut-releases

Public release mirror for [term.hut](https://term-hut.hutsonlabs.com). Assets
only — the source lives in a private repo.

Every release ships the same version three ways, all from
[the latest release](https://github.com/HutsonLabs/term.hut-releases/releases/latest):

| | Artifact | Notes |
|---|---|---|
| **macOS** | `term.hut_<version>_aarch64.dmg` | Apple silicon; signed and notarized |
| **Linux** | `term.hut_<version>_amd64.deb` | amd64; Debian 12+ / Ubuntu 22.04+ |
| **Container** | `ghcr.io/hutsonlabs/term.hut` | Web mode; tagged `<version>` and `latest` |

```sh
# Linux
curl -LO https://github.com/HutsonLabs/term.hut-releases/releases/latest/download/term.hut_<version>_amd64.deb
sudo apt install ./term.hut_<version>_amd64.deb

# Container — the browser terminal on :6767, no login needed to pull
docker run --rm -p 6767:6767 ghcr.io/hutsonlabs/term.hut:latest
```

The image is built in the same CI run as the deb, from that exact deb, so the
three artifacts on a release are always the same build.

## latest.json

`latest.json` and the signed `.app.tar.gz` on each release are what the macOS
app's in-place updater fetches (via `https://term-hut.hutsonlabs.com/latest.json`).
They're machine-facing — the dmg is the one to download by hand.
