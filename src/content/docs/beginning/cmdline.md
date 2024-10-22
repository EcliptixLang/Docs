---
title: "Command line"
description: "Get started with using the Ecliptix CLI"
---
Ecliptix's Command line interface is really simple. let's explain what some commands do!

## Basic commands

Starting with the simplest:

```bash
$ ecx --help
webwise Ecliptix help version 0.0.5
Usage:
ecx [file] <arguments>
Arguments:
        -h, --help: shows help menu
        -v, --version: shows language version
        -r, --repl: starts a Ecliptix REPL
        -d, --debug: starts a debug session on the file
```

The help command shows you what you can do with this executable. for example let's try -v

```bash
$ ecx -v
webwise Ecliptix version 0.0.5
```

## Advanced commands

Using the --debug is pretty useless for the end user, because it jusr sends the last returned value. for example, we have this file

main.ec

```ec
console.out("yo")
```

Running that with the debug flag will do the following:

```bash
$ ecx main.ec -d
> "yo"
{ type: 'string', value: 'yo' }
```

## REPL

Using the Ecliptix REPL in this stage needs you to already have knowledge in the language, so we're not doing that. but we are going to play with it a little:

```bash
$ ecx -r
Starting Ecliptix repl...
Lexer: loaded
Parser: loaded
Environment: loaded
Library: loaded
Ecliptix REPL v0.0.4-a
Took 3ms to start the REPL
>
```

This is what you're going to see when starting a REPL, let's see our available commands. Please note that these only exist in the REPL

```bash
> /help
All commands: 
- /exit: exit the repl
- /debug: enable debug mode
- /help: shows this menu
```

Those are our available commands, the `/debug` command is the only command that changes anything in this environment, and it's used like this

```bash
> /debug  
Toggled Debug mode!
> console.out("yo")
yo
{
  kind: 'Program',
  body: [ { kind: 'CallExpression', caller: [Object], args: [Array] } ]
}
{ type: 'string', value: 'yo' }
> 
```

As you can see, it's just sending the unparsed code and value of the snippet given. this will change soon..