---
title: "Component System"
description: "Create a reusable component system with RubyScript"
difficulty: "advanced"
---

# Building a Component System

Learn how to create a component-based UI system in RubyScript.

```ruby
class Component
  attr_reader :props, :state
  
  def initialize(props = {})
    @props = props
    @state = {}
    @children = []
  end
  
  def set_state(new_state)
    @state.merge!(new_state)
    render
  end
  
  def mount
    before_mount
    render
    after_mount
  end
  
  def render
    raise NotImplementedError, "Components must implement render"
  end
  
  protected
  
  def before_mount; end
  def after_mount; end
end

# Example Button component
class Button < Component
  def initialize(props)
    super(props)
    @state = { clicked: false }
  end
  
  def render
    <<~HTML
      <button 
        class="#{@props[:class]}"
        onclick="#{handle_click}"
      >
        #{@props[:label]}
      </button>
    HTML
  end
  
  private
  
  def handle_click
    set_state(clicked: true)
    @props[:onClick]&.call
  end
end

# Usage
button = Button.new(
  label: "Click me!",
  class: "primary-button",
  onClick: -> { puts "Button clicked!" }
)

button.mount
```

## Features

- Component lifecycle
- Props system
- State management
- Event handling
- HTML templating