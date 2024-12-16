---
title: "Building a Web Server"
description: "Create a simple HTTP server with RubyScript's built-in HTTP module"
difficulty: "intermediate"
---

# Building a Web Server in RubyScript

Learn how to create a basic HTTP server using RubyScript's built-in HTTP module.

```ruby
require 'http_server'

class App < HTTPServer
  def initialize
    super(port: 3000)
    
    # Define routes
    get '/' do
      response.json({ message: 'Welcome to RubyScript!' })
    end
    
    get '/users/:id' do |params|
      response.json({ user_id: params[:id] })
    end
  end
end

# Start the server
App.new.start
```

## How it Works

1. We import the `http_server` module
2. Create a new class that inherits from `HTTPServer`
3. Define routes using a Rails-like DSL
4. Handle requests with JSON responses
5. Start the server on port 3000

## Key Features

- Built-in routing system
- JSON response helpers
- Path parameters
- Query string parsing
- Static file serving