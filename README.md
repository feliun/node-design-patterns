# Node.js Design Patterns

  Ten classic Node.js patterns, each runnable in one command.

  Written in 2017 for myself. Still useful in 2026 — including for the agents that now write alongside them.

  ## The patterns

  | Pattern | Use when you need to… | Run |
  |---|---|---|
  | [adapter](./patterns/adapter) | Wrap an incompatible interface so your code can consume it. | `npm run adapter` |
  | [command](./patterns/command) | Encapsulate a request as an object so it can be queued, logged, or undone. | `npm run command` |
  | [factory](./patterns/factory) | Hide object creation behind a function that decides what to instantiate. | `npm run factory` |
  | [middleware](./patterns/middleware) | Chain composable steps where each one can transform the input or short-circuit. | `npm run
  middleware` |
  | [observer](./patterns/observer) | Notify many consumers when something changes, without coupling them to the source. | `npm run
  observer` |
  | [proxy](./patterns/proxy) | Intercept access to an object to add caching, logging, lazy loading, or access control. | `npm run proxy`
   |
  | [reactor](./patterns/reactor) | Demultiplex many I/O events onto a single thread — the heart of Node itself. | `npm run reactor` |
  | [state](./patterns/state) | Let an object change its behavior cleanly as its internal state changes. | `npm run state` |
  | [strategy](./patterns/strategy) | Pick the right algorithm at runtime by swapping interchangeable implementations. | `npm run
  strategy` |
  | [streams](./patterns/streams) | Process data piece by piece instead of buffering it all in memory. | `npm run streams` |

  ## Quick start

  ```bash
  git clone https://github.com/feliun/node-design-patterns
  cd node-design-patterns
  npm install
  npm run reactor   # or any other pattern from the table above

  Each folder is self-contained. Read the source, run the example, change it, break it, run it again. That's the whole point.

  **Why this still matters**

  Patterns aren't trivia — they're vocabulary. Once you can name a problem ("I need backpressure here", "this wants an observer, not a
  callback"), you can reach for the right shape instead of reinventing it.

  That vocabulary used to live in books and senior engineers' heads. In 2026 it also lives in context windows: an agent that knows these
  ten patterns recognizes the shape of your problem and reaches for the right one — the same way a senior engineer would.

  The code is from 2017. The patterns are older than that. They still hold.

  **What's next**

  A Claude Code plugin that turns each pattern into a skill an agent invokes when the situation calls for it — so the next time you ask
  for "a job queue with backpressure" or "a pluggable validation pipeline", the right shape comes for free.

  Watch this repo as I may publish it here if it looks like an interesting idea.

  License

  ISC
