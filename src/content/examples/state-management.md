---
title: "State Management"
description: "Implement a reactive state management system in RubyScript"
difficulty: "advanced"
---

# State Management in RubyScript

Learn how to create a reactive state management system similar to Vue's composition API.

```ruby
class Store
  include Observable
  
  def initialize
    @state = {}
    @computed = {}
  end
  
  def reactive(key, initial_value)
    @state[key] = initial_value
    
    # Define getter/setter methods
    define_singleton_method(key) { @state[key] }
    define_singleton_method("#{key}=") do |value|
      @state[key] = value
      notify_observers(key, value)
    end
  end
  
  def computed(key, &block)
    @computed[key] = block
    define_singleton_method(key) { @computed[key].call }
  end
end

# Usage example
store = Store.new

# Define reactive state
store.reactive(:count, 0)
store.reactive(:message, "Hello")

# Define computed property
store.computed(:doubled_count) { store.count * 2 }

# Add observer
store.add_observer do |key, value|
  puts "#{key} changed to: #{value}"
end

# Update state
store.count = 5  # Triggers observer
puts store.doubled_count  # Outputs: 10
```

## Features

- Reactive state management
- Computed properties
- Observer pattern
- Method metaprogramming
- Encapsulated state