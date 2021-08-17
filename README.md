# Trality Animal Challenge

Welcome to the Trality Animal Challenge! You've been contacted by a passionate biology professor to help him out prototying a voting tool
for her students. The goal is simple: she wants to determine favourite animals of her students and gather some statistics in the process. Your goal
is to take this repository and finish her initial setup.

## Setup

Run

```bash
yarn start
```

in the root folder, then 

```bash
cd challenge && yarn install && yarn start
```

in the `challenge` folder. 

## Goal

You're not allowed to install additional packages related to state management (e.g. Redux, Mobx, etc.) except those already included in `package.json` and `challenge/package.json`.

Individual Goals include:

- [ ] Continents, areas and animal votes should be aggregated and their votes displayed correctly (no negative votes allowed)
- [ ] The statistics section should show a correct aggregate over all continents, areas and animals
- [ ] The `Download Statistics` button should trigger a JSON-download of the current votes in the format of `animals.json`
- [ ] The `Reset Statistics` button should reset all votes to the values in `animals.json`
- [ ] All votes should persist after refreshing the browser (same browser only)
- [ ] Optional Bonus Goal: Votes synchronise across different browser tabs
- [ ] Optional Bonus Goal: Adapt the pages' style similar to www.trality.com. Feel free to use any styling or animation library, package or framework.
- [ ] Optional Bonus Goal: Add Jest-based unit tests for the component adaptations you've made.

## Deliverable

Your deliverable is `animal-challenge.zip`. E-mail it to jakub@trality.com. The zip-file should include the updated folders and files
of this git repository minus `.git`, `.dist` and `node_modules` folders. In addition to achievement of goals, we will evaluate coding style, suitable usage of React in general and your implementation of state handling. 

