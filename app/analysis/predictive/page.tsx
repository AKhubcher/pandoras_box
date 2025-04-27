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

                <h1 className="text-4xl font-bold mb-4">Predictive Analytics</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Forecast trends and patterns in data
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <h1>Coming Soon!</h1>
                </div>
            </div>
        </div>
    );
} 