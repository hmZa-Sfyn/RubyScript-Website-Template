---
title: "Command Line Tool"
description: "Build a command-line interface (CLI) tool with RubyScript"
difficulty: "beginner"
---

# Building a CLI Tool in RubyScript

Create a simple command-line tool to manage tasks.

```ruby
class TaskManager
  def initialize
    @tasks = []
  end
  
  def add_task(description)
    @tasks << { id: @tasks.length + 1, description: description, completed: false }
    puts "Task added: #{description}"
  end
  
  def list_tasks
    if @tasks.empty?
      puts "No tasks found"
      return
    end
    
    @tasks.each do |task|
      status = task[:completed] ? "✓" : " "
      puts "[#{status}] #{task[:id]}. #{task[:description]}"
    end
  end
  
  def complete_task(id)
    task = @tasks.find { |t| t[:id] == id }
    if task
      task[:completed] = true
      puts "Marked task #{id} as complete"
    else
      puts "Task not found"
    end
  end
end

# CLI interface
manager = TaskManager.new

loop do
  print "\nEnter command (add/list/complete/exit): "
  command = gets.chomp
  
  case command
  when "add"
    print "Enter task description: "
    description = gets.chomp
    manager.add_task(description)
  when "list"
    manager.list_tasks
  when "complete"
    print "Enter task ID: "
    id = gets.chomp.to_i
    manager.complete_task(id)
  when "exit"
    break
  else
    puts "Unknown command"
  end
end
```

## Features

- Interactive command loop
- Task management
- Status tracking
- Command parsing