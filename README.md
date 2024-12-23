
[![npm version](https://badge.fury.io/js/@standardkit%2Fcaas.svg?icon=si%3Anpm)](https://badge.fury.io/js/@standardkit%2Fcaas)
[![codecov](https://codecov.io/gh/standardkit/caas/graph/badge.svg?token=V91F3H7O2O)](https://codecov.io/gh/standardkit/caas)

# Case-as-a-Service
> @standardkit/caas

## Heads Up
While this package is of course amazing and groundbreaking and has definitely never been done before, 
it is subject to change since we're not quite in version 1 yet.

Feedback is always welcome just take into account this is not currently polished for random people to start using it.

So if you want to use it, but you're missing something, let me know. We'll make it happen.

## Installation

```bash
npm i @standardkit/caas
```

## Usage

### Extracting from PascalCase
```typescript
import { depascalize } from '@standardkit/caas';

const result = depascalize('CaseExample');

// ['case', 'example']
```

### Converting to camelCase

```typescript
import { camel } from '@standardkit/caas';

const result = camel(['case', 'example']);

// 'caseExample'
```


## What is it?

A utility package to change case. It currently supports:

### Supported cases

- kebab-case
- snake_case
- CONST_CASE
- camelCase
- PascalCase
- human case (maybe needs a different name)
- path/case
- Sentence case
- Title Case

### Helper functions

- capitalize: capitalizes first letter of a string
- depascalize: takes PascalCase, converts to segments (lowercase string[])


## Roadmap

- Case Detection
- Case Conversion
- Validation
- Sanitize
- Batch conversion

### Useful Case Implementations

- dot.case
- BEM\_\_case
- lowercase (Function instead of string operation for use in maps)
- UPPERCASE (Function instead of string operation for use in maps)

## License

Unlicense - Do whatever you want.

View LICENSE file for details.


## Development

Hit me up if you want to discuss anything. All feedback is welcome.

## Publishing

### Preparations
Make sure to have access to the @standardkit organization on npm, 
and login with: `npm login`

### Release

```bash
npm run release:patch
npm run release:minor
npm run release:major
```

Then, create a release on GitHub.



