---
title: Output
description: All you need to know about outputting text into the screen
---

Outputting text to the screen is a straightforward thing in Ecliptix, let's have a look on how to do that!

## Project configuration

Firstly, make sure you created your `proj.yml`, then make sure to add the `io` native to the packages section.
```yaml
name: Project
packages:
  - io
version: 1.1.0
```

## Code

For a simple text output, you can use the `out` function on the `console` namespace, simply like this:
```ecx
console.out("Ecliptix is Awesome!")
```
If you want to use colors too, you'll have to add the `colors` native into the packages section, the same way we did with `io`.

Then we can simply do this:
```ecx
console.out(colors.blue("Ecliptix is awesome!"))
```
You can also use multiple colors!
```ecx
console.out(colors.blue("Ecliptix"), colors.green("is Awesome!"))
```

There are 6 available colors so far: blue, cyan, red, green, magenta and yellow!
