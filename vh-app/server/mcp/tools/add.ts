import { defineMcpTool } from 'vite-hub/mcp'
import { z } from 'zod'

export default defineMcpTool({
  description: 'Add two numbers.',
  input: z.object({ a: z.number(), b: z.number() }),
  annotations: { title: 'Add', readOnlyHint: true },
  handler: ({ a, b }) => ({ sum: a + b }),
})
