import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  Line,
  Bar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const BankingDashboard = () => {
  // Weekly activity data
  const weeklyData = [
    { name: 'Mon', deposit: 200, withdraw: 400 },
    { name: 'Tue', deposit: 150, withdraw: 300 },
    { name: 'Wed', deposit: 250, withdraw: 300 },
    { name: 'Thu', deposit: 300, withdraw: 400 },
    { name: 'Fri', deposit: 200, withdraw: 150 },
    { name: 'Sat', deposit: 250, withdraw: 300 },
    { name: 'Sun', deposit: 300, withdraw: 350 },
  ];

  // Balance history data
  const balanceData = [
    { name: 'Jul', balance: 400 },
    { name: 'Aug', balance: 500 },
    { name: 'Sep', balance: 600 },
    { name: 'Oct', balance: 400 },
    { name: 'Nov', balance: 500 },
    { name: 'Dec', balance: 450 },
    { name: 'Jan', balance: 600 },
  ];

  // Expense statistics data
  const expenseData = [
    { name: 'Entertainment', value: 25 },
    { name: 'Bill Expense', value: 15 },
    { name: 'Others', value: 35 },
    { name: 'Investment', value: 25 },
  ];

  // Recent transactions
  const recentTransactions = [
    { type: 'Deposit', from: 'my Card', amount: -350, date: '20 January 2023' },
    { type: 'Deposit', from: 'Paypal', amount: 2500, date: '20 January 2023' },
    { type: 'Transfer', from: 'Jenni Wilson', amount: 5400, date: '23 January 2023' },
  ];

  // Quick transfer contacts
  const quickTransfers = [
    { name: 'Lisa Bator', role: 'CEO' },
    { name: 'Randy Press', role: 'Director' },
    { name: 'Workman', role: 'Designer' },
  ];

  return (
    <div className="p-6 space-y-6 bg-[#EFF3F9]">
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6">
          <div className="bg-blue-600 rounded-lg p-6 text-white">
            <div className="text-sm">Balance</div>
            <div className="text-2xl font-bold">$5,756</div>
            <div className="mt-4">
              <div className="text-sm">CARD HOLDER</div>
              <div>Eddy Cinema</div>
              <div className="mt-2 text-xl">3778 **** **** 1234</div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Recent Transaction</h2>
          <div className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{transaction.from}</div>
                  <div className="text-sm text-gray-500">{transaction.date}</div>
                </div>
                <div className={`font-medium ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weekly Activity Chart */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Weekly Activity</h2>
          <BarChart width={500} height={300} data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="deposit" fill="#82ca9d" />
            <Bar dataKey="withdraw" fill="#8884d8" />
          </BarChart>
        </div>

        {/* Expense Statistics */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Expense Statistics</h2>
          <PieChart width={500} height={300}>
            <Pie
              data={expenseData}
              cx={250}
              cy={150}
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Quick Transfer */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Quick Transfer</h2>
          <div className="flex space-x-4">
            {quickTransfers.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
                <div className="text-sm font-medium">{contact.name}</div>
                <div className="text-xs text-gray-500">{contact.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Balance History */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Balance History</h2>
          <LineChart width={500} height={300} data={balanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="balance" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default BankingDashboard;