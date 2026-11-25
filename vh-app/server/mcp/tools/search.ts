import { defineMcpTool } from 'vite-hub/mcp'
import { z } from 'zod'

export default defineMcpTool({
  description: 'Search the catalog. ' + 'Use precise terms and narrow filters to keep results small. '.repeat(90),
  input: z.object({ term: z.string() }),
  annotations: { title: 'Search', readOnlyHint: true },
  handler: () => ({ hits: [] }),
})
