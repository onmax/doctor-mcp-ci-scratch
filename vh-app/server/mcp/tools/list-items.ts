import { defineMcpTool } from 'vite-hub/mcp'
import { z } from 'zod'

export default defineMcpTool({
  description: 'List items, a page at a time.',
  input: z.object({ limit: z.number().int().min(1).max(50), cursor: z.string().optional() }),
  annotations: { title: 'List items', readOnlyHint: true },
  handler: ({ limit }) => ({ items: Array.from({ length: limit }, (_, i) => i) }),
})
