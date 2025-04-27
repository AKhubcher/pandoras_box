import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        Your Profile
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Manage your account settings and track your AI model usage
                    </p>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors group">
                        <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">1</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">API Keys</h3>
                        <p className="text-gray-300 mb-4 border-box ">OpenAI: sk-abcdefghijklmnopqrstuvwxyz1234567890ABCD</p>
                        <Link
                            href="/models"
                            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Add Keys
                        </Link>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors group">
                        <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">0</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Enrolled Classes</h3>
                        <p className="text-gray-300 mb-4">Track your learning progress and certifications</p>
                        <Link
                            href="/learn"
                            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        >
                            View Classes
                        </Link>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors group">
                        <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">0</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Past Models</h3>
                        <p className="text-gray-300 mb-4">View your model usage history and analytics</p>
                        <Link
                            href="/models"
                            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        >
                            View History
                        </Link>
                    </div>
                </div>

                {/* Settings Section */}
                <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 mb-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                    <div className="relative">
                        <h2 className="text-3xl font-bold mb-8 text-center">Account Settings</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start gap-3 group">
                                    <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1 group-hover:bg-purple-500/70 transition-colors" />
                                    <div>
                                        <h4 className="font-bold mb-1 group-hover:text-purple-400 transition-colors">Profile Information</h4>
                                        <p className="text-gray-300">Update your personal details and preferences</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1 group-hover:bg-purple-500/70 transition-colors" />
                                    <div>
                                        <h4 className="font-bold mb-1 group-hover:text-purple-400 transition-colors">Notification Settings</h4>
                                        <p className="text-gray-300">Manage your email and in-app notifications</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start gap-3 group">
                                    <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1 group-hover:bg-purple-500/70 transition-colors" />
                                    <div>
                                        <h4 className="font-bold mb-1 group-hover:text-purple-400 transition-colors">Security Settings</h4>
                                        <p className="text-gray-300">Manage your password and two-factor authentication</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="w-6 h-6 rounded-full bg-purple-500/50 flex-shrink-0 mt-1 group-hover:bg-purple-500/70 transition-colors" />
                                    <div>
                                        <h4 className="font-bold mb-1 group-hover:text-purple-400 transition-colors">Billing & Subscription</h4>
                                        <p className="text-gray-300">View and manage your subscription plan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-gray-800/50 rounded-xl p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-pink-900/20" />
                    <div className="relative">
                        <h2 className="text-3xl font-bold mb-8 text-center text-red-400">Danger Zone</h2>
                        <div className="max-w-3xl mx-auto space-y-6">
                            <div className="bg-gray-900/50 p-6 rounded-lg group hover:bg-gray-900/70 transition-colors">
                                <h3 className="text-xl font-bold mb-4 group-hover:text-red-400 transition-colors">Clear Model History</h3>
                                <p className="text-gray-300 mb-4">Permanently delete all your model usage history</p>
                                <button className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors">
                                    Clear History
                                </button>
                            </div>

                            <div className="bg-gray-900/50 p-6 rounded-lg group hover:bg-gray-900/70 transition-colors">
                                <h3 className="text-xl font-bold mb-4 group-hover:text-red-400 transition-colors">Delete Account</h3>
                                <p className="text-gray-300 mb-4">Permanently delete your account and all associated data</p>
                                <button className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 