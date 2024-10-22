---
title: Loops
description: All you need to know about loops!
---

Loops are an important feature in all languages, and of course Ecliptix has them!

There are 3 types of loops

## While loop

While loops keep running as long as the statement given is true

Example:
```ecx
set shouldQuit: boolean = false

while(!shouldQuit){
    lock thing: null = console.ask("> ")
    console.out(thing)
    if(thing == "exit"){
        shouldQuit = true
    }
}

console.out("Hi")
```

## For loops

For loops are simple loops that are ran through an array or object

Example:
```ecx
lock arr: array = ["gaming", "ecliptix", "awesome"]

for(item | arr){
    if(item == "ecliptix"){
        console.out("Found myself at", item.index)
        break
    }

    console.out("This is not me!")
}
```

## Set loops

Set loops are loops that go around for a set amount of runs

Example:
```ecx
fun gaming(){
    console.out("I am cool")
}

console.loop(10, gaming)
```