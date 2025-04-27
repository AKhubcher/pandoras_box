import Link from "next/link";


export default function NLPPage() {
    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                        ← Back to Home
                    </Link>
                </div>

                <h1 className="text-4xl font-bold mb-4">Natural Language Processing</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Explore our collection of NLP models that help machines understand, interpret, and generate human language.
                </p>


            </div>
        </div>
    );
} 