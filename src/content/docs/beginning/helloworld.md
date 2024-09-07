---
title: Hello World
description: your first ecliptix project!
---

Here you're going to learn how to make your first ecliptix program, it's just a simple program that displays "Hello World" on the console.

## First steps

Firstly, we're going to set up our project environment, it's pretty simple!

```sh

$ ecx init
Created proj.yml!

```

This will create a new file called `proj.yml`, it contains all your project information, like the packages you're using, the project name, and the version.

let's make our main.ec (or main.ecx if you want to use types)

```ecx
console.out("Hello World")
```

That's all you need, it's that simple :D
Let's run it and see what's going to happen!

```sh

$ ecx main.ec
Hello World

```
