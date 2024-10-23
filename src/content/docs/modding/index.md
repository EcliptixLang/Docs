---
title: First looks
description: Learn how to create your first Ecliptix mod!
---
import { Card, CardGrid } from '@astrojs/starlight/components';

<CardGrid>
    <Card title="Warning" icon="error">
		This is not yet ready for production
    </Card>
</CardGrid>

Creating an Ecliptix mod is a simple and straightforward process! All you need to be able to create a mod is:
- Javascript knowledge
- Ecliptix installed
- [Bun](https://bun.sh) or any node.js packer

That's all you'll need, firstly we start by initializing a new project:

```sh
$ blue init --dev
Package name: 
> MyPackage
Package version: 
> 1.0.0
Package entry point: 
> entry.js
-> Initialized project!
```

You'll have 2 new files created for you, `package.ecc` and `entry.js`. those are where everything will be set up