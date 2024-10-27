## 🍀 Charm Example

An example project demostrating how to use [Charm](https://github.com/littensy/charm) to build a Roblox game. This includes [syncing server state](src/shared/store/sync) and an implementation of [filtering player data](src/shared/store/sync/utils/filter-payload.ts).

**The libraries in this project include:**

-   🍀 [Charm](https://github.com/littensy/charm): Atomic state management
-   🧪 [Jest](https://jsdotlua.github.io/jest-lua): Testing framework ported to roblox-ts
-   🖥️ [Vide](https://centau.github.io/vide): Cutting-edge UI library
-   💎 [Lapis](https://nezuo.github.io/lapis): Immutable data store abstraction

[Check out the game →](https://www.roblox.com/games/18805522597/)

### 🚀 Getting Started

```bash
# Clone this repository
git clone https://github.com/littensy/charm-example.git
cd charm-example

# Install dependencies
pnpm install

# Build a place file
pnpm compile
pnpm build
```

### 🧪 Running Tests

> [!NOTE]
> Jest Lua depends on `debug.loadmodule` (`FFlagEnableLoadModule`) to run tests.
>
> On MacOS, you can run the following command to enable this feature:
>
> ```bash
> sh bin/jest-flag.sh
> ```

To run your unit tests, start a playtest session in [Run Mode](https://create.roblox.com/docs/studio/testing-modes#playtest-options) (`F8`).

---

<p align="center">
This project is released under the <a href="LICENSE.md">MIT License</a>.
</p>

<div align="center">

[![MIT License](https://img.shields.io/github/license/littensy/charm-example?style=for-the-badge)](LICENSE.md)

</div>
