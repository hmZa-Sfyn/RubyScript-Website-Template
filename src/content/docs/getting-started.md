---
title: "Getting Started with RubyScript"
description: "Learn how to install and start using RubyScript"
order: 1
---

# Getting Started with RubyScript

Welcome to RubyScript! This guide will help you get started with the language and its ecosystem.

## Installation

```bash
npm install -g rubyscript
```

## Your First RubyScript Program

Create a file named `hello.rs`:

```ruby
puts "Hello, RubyScript!"
```

Run it:

```bash
rs hello.rs
```

## Basic Syntax

RubyScript follows Ruby's elegant syntax while adding modern features:

```ruby
# Variables
name = "World"
age = 25

# String interpolation
greeting = "Hello, #{name}!"

# Functions
def greet(name)
  puts "Hello, #{name}!"
end

# Classes
class Person
  def initialize(name)
    @name = name
  end
  
  def say_hello
    puts "Hello, I'm #{@name}"
  end
end
```