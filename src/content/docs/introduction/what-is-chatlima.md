---
title: What is ChatLima?
---

ChatLima is an open-source AI chatbot app powered by Model Context Protocol (MCP), built with Next.js and the AI SDK by Vercel. It is a minimalistic MCP client with a good feature set.

This project is a fork of [scira-mcp-chat](https://github.com/zaidmukaddam/scira-mcp-chat) by Zaid Mukaddam, with additional features and modifications by Garth Scaysbrook.

## Features
- All features from the original scira-mcp-chat.
- Additional Models
- Google Auth
- Web Enabled Search (Openrouter)
- Additional Themes
- Streaming text responses powered by the [AI SDK by Vercel](https://sdk.vercel.ai/docs), allowing multiple AI providers to be used interchangeably with just a few lines of code.
- Full integration with [Model Context Protocol (MCP)](https://modelcontextprotocol.io) servers to expand available tools and capabilities.
- Multiple MCP transport types (SSE, stdio, and Streamable HTTP) for connecting to various tool providers.
- Built-in tool integration for extending AI capabilities.
- Reasoning model support.
- [shadcn/ui](https://ui.shadcn.com/) components for a modern, responsive UI powered by [Tailwind CSS](https://tailwindcss.com).
- Built with the latest [Next.js](https://nextjs.org) App Router.

## MCP Server Configuration

This application supports connecting to Model Context Protocol (MCP) servers to access their tools. You can add and manage MCP servers through the settings icon in the chat interface.

### Adding an MCP Server

1. Click the settings icon (⚙️) next to the model selector in the chat interface.
2. Enter a name for your MCP server.
3. Select the transport type:
    - **SSE (Server-Sent Events)**: For HTTP-based remote servers
    - **stdio (Standard I/O)**: For local servers running on the same machine
    - **Streamable HTTP**: For HTTP-based remote servers using Streamable HTTP
4. Click "Add Server"
5. Click "Enable Server" to activate the server for the current chat session.

#### SSE Configuration

If you select SSE transport:
1. Enter the server URL (e.g., `https://mcp.example.com/token/sse`)

#### Streamable HTTP Configuration

If you select Streamable http transport:
1. Enter the server URL (e.g., `https://mcp.example.com/token/mcp`)

#### stdio Configuration

If you select stdio transport:
(Note: This requires the MCP server software to be running locally on your machine, e.g., within an application like Cursor or VSCode.)
1. Enter the command to execute (e.g., `npx`)
2. Enter the command arguments (e.g., `-y @modelcontextprotocol/server-google-maps`)
    - You can enter space-separated arguments or paste a JSON array

### Available MCP Servers

You can use any MCP-compatible server with this application. Here are some examples:

- [Composio](https://composio.dev/mcp) - Provides search, code interpreter, and other tools
- [Zapier MCP](https://zapier.com/mcp) - Provides access to Zapier tools
- [Smithery](https://smithery.ai/) - A registry of various MCPs including tools for search, memory, and more.
- Any MCP server using stdio transport with npx and python3 on localhost

## License
This project is licensed under the Apache License 2.0.

## Acknowledgments
- Original project by Zaid Mukaddam (https://github.com/zaidmukaddam/scira-mcp-chat) 