---
title: "Async Data Fetching"
description: "Learn how to fetch and process data asynchronously in RubyScript"
difficulty: "intermediate"
---

# Async Data Fetching in RubyScript

Modern web applications often need to fetch data from APIs. Here's how to do it in RubyScript.

```ruby
# Define an async function to fetch user data
async def fetch_user(id)
  response = await HTTP.get("https://api.example.com/users/#{id}")
  return response.json if response.ok?
  raise "Failed to fetch user: #{response.status}"
end

# Process multiple users concurrently
async def process_users(user_ids)
  # Use Promise.all for concurrent requests
  users = await Promise.all(
    user_ids.map { |id| fetch_user(id) }
  )
  
  # Process the results
  users.each do |user|
    puts "Processing user: #{user[:name]}"
  end
end

# Usage
begin
  await process_users([1, 2, 3])
rescue => e
  puts "Error: #{e.message}"
end
```

## Key Concepts

- Async/await syntax
- Promise-based concurrency
- Error handling
- HTTP requests
- JSON processing