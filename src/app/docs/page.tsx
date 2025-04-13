import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation - Promptate',
  description: 'Learn how to use Promptate to create effective AI prompts for your projects.',
}

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8">Promptate Documentation</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-4">
          Promptate is an AI prompt engineering platform that helps you create effective prompts for AI models like ChatGPT, Claude, and others.
          This documentation will help you understand how to use Promptate to get the most out of AI models.
        </p>
        <p className="mb-4">
          To get started, simply enter your basic prompt idea in the main input field on the homepage, and our AI will enhance it with the right structure and context.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Prompt Modes</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Normal Mode</h3>
          <p className="mb-2">
            Normal mode is designed for everyday use. It takes your basic prompt and enhances it with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Clear instructions</li>
            <li>Proper context</li>
            <li>Appropriate tone and style</li>
          </ul>
          <p>
            This mode is perfect for general writing, creative tasks, and information requests.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Structural Mode (Beta)</h3>
          <p className="mb-2">
            Structural mode is designed for more complex tasks. It creates prompts with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Detailed step-by-step instructions</li>
            <li>Specific formatting requirements</li>
            <li>Advanced constraints and parameters</li>
          </ul>
          <p>
            This mode is ideal for technical writing, data analysis, and specialized creative tasks.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>Be specific:</strong> The more specific your initial prompt, the better our AI can enhance it.
          </li>
          <li className="mb-2">
            <strong>Include context:</strong> Mention your audience, purpose, and desired outcome.
          </li>
          <li className="mb-2">
            <strong>Iterate:</strong> Use the generated prompt as a starting point and refine it further if needed.
          </li>
          <li className="mb-2">
            <strong>Try both modes:</strong> Experiment with both Normal and Structural modes to see which works best for your specific use case.
          </li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Example Use Cases</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Content Creation</h3>
          <p className="mb-2">
            Input: "Write about climate change"
          </p>
          <p className="mb-2">
            Enhanced prompt: "Write a comprehensive 800-word article about climate change, explaining its causes, current impacts, and potential solutions. Include scientific data and make it accessible to a general audience with a high school education. Maintain a balanced tone that conveys urgency without being alarmist."
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Creative Writing</h3>
          <p className="mb-2">
            Input: "Write a sci-fi story"
          </p>
          <p className="mb-2">
            Enhanced prompt: "Write a 1,200-word science fiction short story set 200 years in the future where humans have developed technology to transfer consciousness between bodies. Focus on a protagonist who discovers an unexpected limitation to this technology. Include themes of identity and mortality. Use vivid sensory details and a mix of dialogue and introspection."
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Is Promptate free?</h3>
          <p>
            Yes, the basic version of Promptate is free to use. We also offer premium features for advanced users.
          </p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Which AI models does Promptate work with?</h3>
          <p>
            Promptate generates prompts that work well with most modern AI models, including ChatGPT, Claude, Gemini, and others.
          </p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Can I save my prompts?</h3>
          <p>
            Currently, you can copy your generated prompts to use elsewhere. We're working on a feature to save and organize your prompts within Promptate.
          </p>
        </div>
      </section>
    </div>
  )
}
