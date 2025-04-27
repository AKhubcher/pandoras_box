import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    Your Profile
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
                        <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl">0</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">API Keys</h3>
                        <Link href="models" className="text-red-100">
                            Search now!
                        </Link>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
                        <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl">0</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Enrolled Classes</h3>
                        <Link href="/learn" className="text-purple-300">
                            Join Now!
                        </Link>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
                        <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl">0</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Past Models</h3>
                        <Link href="models" className="text-blue-300">
                            Start using our Models!
                        </Link>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-center">Settings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1" />
                                <p className="text-purple-300">Change Avatar</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1" />
                                <p className="text-purple-300">Change Name</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1" />
                                <p className="text-red-300">Clear Model History</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1" />
                                <p className="text-red-600">Delete Account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 