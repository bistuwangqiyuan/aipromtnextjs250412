import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© 2024 Promptate. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/docs" className="text-gray-600 hover:text-primary">
              Docs
            </Link>
            <Link href="/blogs" className="text-gray-600 hover:text-primary">
              Blogs
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-primary">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-primary">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
