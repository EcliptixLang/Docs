---
title: Input
description: All you need to know about taking user input
---

To take any kind of input from the user, you can easily just use the `ask` function from the `console` namespace.

## Taking input

To take an input, you can use it like this:
```ecx
console.out("Hello", console.ask("What's your name?\n> "))
```
It'll show something like this:
```sh
$ ecx input.ec
What's your name?
> Sky
Hello Sky
```

## Variables

If you want to save your input on a variable, you can use the following setup:

```
lock (variable name): (type) = ask("question")
```

you can choose any name for your variable, and for the types.. it's a different story.

### Available types
There are a few available types to choose from:
- string: You expect a string of text from the user
- number: You expect a numeric value from the user
- shell: You expect a shell command to return the value the user wants
- boolean: You expect the user to answer with either true, false, yes or no
- array: You expect a list of items, either seperated with a comma (,) or a semicolon (;)
- null: Ignore the type, get anything

You can choose any type you want from these and it'll work just fine!

### Examples
Asking for a person's age:
```ecx
lock age: number = console.ask("How old are you?\n> ")
if(!age){
    console.out("I don't think that's a valid number...")
}

console.out(age, "is an awesome age to be in!")
```
Asking for a person's opinion:
```ecx
lock opinion: boolean = console.ask("Does pineapple belong on pizza?\n> ")
if(!opinion){
    console.out("Not having an opinion is sad..")
}

console.out("Well i agree with you! My answer is also", opinion)
```
Getting a review
```ecx
lock review: null = console.ask("How would you review this language?\n> ")

console.out(review)
```