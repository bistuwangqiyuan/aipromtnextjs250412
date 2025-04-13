import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blogs - Promptate',
  description: 'Read the latest articles about AI prompt engineering, tips, and best practices.',
}

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "The Art of Prompt Engineering: A Beginner's Guide",
    excerpt: "Learn the fundamentals of prompt engineering and how to craft effective prompts for AI models.",
    date: "June 15, 2024",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "How to Use Structural Prompts for Complex Tasks",
    excerpt: "Discover how to use Promptate's Structural mode to create detailed, step-by-step instructions for AI models.",
    date: "May 28, 2024",
    readTime: "10 min read",
  },
  {
    id: 3,
    title: "Prompt Engineering for Creative Writing",
    excerpt: "Unlock your creative potential with these prompt engineering techniques specifically designed for fiction and poetry.",
    date: "May 10, 2024",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "The Future of AI Assistants and Prompt Design",
    excerpt: "Explore how prompt design is evolving and what it means for the future of human-AI collaboration.",
    date: "April 22, 2024",
    readTime: "12 min read",
  },
  {
    id: 5,
    title: "Case Study: How Promptate Improved Content Creation Efficiency",
    excerpt: "See how a marketing team used Promptate to streamline their content creation process and improve results.",
    date: "April 5, 2024",
    readTime: "9 min read",
  }
];

export default function BlogsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8">Promptate Blog</h1>
      <p className="text-lg text-gray-700 mb-10">
        Explore the latest insights, tips, and best practices for AI prompt engineering and getting the most out of AI models.
      </p>

      <div className="space-y-10">
        {blogs.map((blog) => (
          <article key={blog.id} className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              <Link href="#" className="hover:text-primary transition-colors">
                {blog.title}
              </Link>
            </h2>
            <div className="flex text-sm text-gray-500 mb-3">
              <span>{blog.date}</span>
              <span className="mx-2">•</span>
              <span>{blog.readTime}</span>
            </div>
            <p className="text-gray-600 mb-4">{blog.excerpt}</p>
            <Link
              href="#"
              className="text-primary font-medium hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          We&apos;re constantly adding new content. Check back soon for more articles!
        </p>
      </div>
    </div>
  )
}
