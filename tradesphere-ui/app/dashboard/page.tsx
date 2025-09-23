'use client';

import { useEffect, useState } from 'react';
import { useUser, useAuth } from '@clerk/nextjs';
import DashboardLayout from '../../components/dashboard-layout';

export default function Dashboard() {
    const { user, isLoaded } = useUser();
    const { getToken } = useAuth();
    const [syncStatus, setSyncStatus] = useState<
        'loading' | 'success' | 'error' | null
    >(null);

    useEffect(() => {
        const syncUser = async () => {
            if (!isLoaded || !user) return;

            try {
                setSyncStatus('loading');
                const sessionToken = await getToken();

                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'}/api/v1/users/sync`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${sessionToken}`,
                        },
                        body: JSON.stringify({
                            name: user.fullName || user.firstName || 'User',
                            email: user.primaryEmailAddress?.emailAddress || '',
                        }),
                    }
                );

                const data = await response.json();

                if (response.ok) {
                    setSyncStatus('success');
                } else {
                    console.error('Sync failed:', data);
                    setSyncStatus('error');
                }
            } catch (error) {
                console.error('Failed to sync user:', error);
                setSyncStatus('error');
            }
        };

        syncUser();
    }, [isLoaded, user]);

    return (
        <DashboardLayout>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Welcome to TradeSphere, {user?.firstName || 'Trader'}!
                </h1>

                <div className="mb-6">
                    {syncStatus === 'loading' && (
                        <div className="flex items-center text-blue-600">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                            Syncing your account...
                        </div>
                    )}
                    {syncStatus === 'success' && (
                        <div className="text-green-600">
                            ✓ Account synced successfully
                        </div>
                    )}
                    {syncStatus === 'error' && (
                        <div className="text-red-600">
                            ⚠ Failed to sync account. Please try again.
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">
                            Virtual Portfolio
                        </h3>
                        <p className="text-blue-100">
                            Start with $10,000 virtual cash and build your
                            portfolio
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">
                            Live Market Data
                        </h3>
                        <p className="text-green-100">
                            Access real-time stock prices and market information
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">
                            Trading Strategies
                        </h3>
                        <p className="text-purple-100">
                            Test and refine your trading strategies safely
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex gap-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Start Trading
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        View Portfolio
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
}
