'use client';

import DashboardLayout from '../../../components/dashboard-layout';

export default function Portfolio() {
    return (
        <DashboardLayout>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Portfolio Overview
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                        <h3 className="text-lg font-semibold mb-2">
                            Total Value
                        </h3>
                        <p className="text-2xl font-bold">$10,000.00</p>
                    </div>

                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                        <h3 className="text-lg font-semibold mb-2">
                            Cash Available
                        </h3>
                        <p className="text-2xl font-bold">$8,500.00</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                        <h3 className="text-lg font-semibold mb-2">Invested</h3>
                        <p className="text-2xl font-bold">$1,500.00</p>
                    </div>

                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                        <h3 className="text-lg font-semibold mb-2">P&L</h3>
                        <p className="text-2xl font-bold">+$150.00</p>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Recent Transactions
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-600">
                            No transactions yet. Start trading to see your
                            activity here.
                        </p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
