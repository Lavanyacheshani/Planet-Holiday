import React from 'react';
import { Package, FileText, Users, TrendingUp } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function AdminDashboard() {
  const { state } = useApp();

  const stats = [
    {
      name: 'Total Packages',
      value: state.packages.length,
      icon: Package,
      color: 'bg-emerald-500',
    },
    {
      name: 'Blog Posts',
      value: state.blogPosts.length,
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      name: 'Featured Packages',
      value: state.packages.filter(pkg => pkg.featured).length,
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
    {
      name: 'Featured Posts',
      value: state.blogPosts.filter(post => post.featured).length,
      icon: Users,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to the Planet Holiday admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Packages</h2>
          <div className="space-y-4">
            {state.packages.slice(0, 5).map((pkg) => (
              <div key={pkg.id} className="flex items-center space-x-4">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{pkg.title}</h3>
                  <p className="text-sm text-gray-600">${pkg.price} • {pkg.duration}</p>
                </div>
                {pkg.featured && (
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Blog Posts</h2>
          <div className="space-y-4">
            {state.blogPosts.slice(0, 5).map((post) => (
              <div key={post.id} className="flex items-center space-x-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{post.title}</h3>
                  <p className="text-sm text-gray-600">By {post.author} • {new Date(post.date).toLocaleDateString()}</p>
                </div>
                {post.featured && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}