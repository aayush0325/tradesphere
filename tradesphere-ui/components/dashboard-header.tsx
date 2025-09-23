'use client';

import { useUser, SignOutButton } from '@clerk/nextjs';
import { LogOut, User } from 'lucide-react';

export default function DashboardHeader() {
    const { user } = useUser();

    return (
        <header className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold text-gray-900">
                            TradeSphere
                        </h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <User className="h-4 w-4" />
                            <span>{user?.firstName || 'User'}</span>
                        </div>

                        <SignOutButton>
                            <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors">
                                <LogOut className="h-4 w-4" />
                                <span>Logout</span>
                            </button>
                        </SignOutButton>
                    </div>
                </div>
            </div>
        </header>
    );
}
