import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function BlogPost() {
  const { id } = useParams();
  const { state } = useApp();
  
  const post = state.blogPosts.find(p => p.id === id);
  const otherPosts = state.blogPosts.filter(p => p.id !== id).slice(0, 2);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-emerald-600 hover:text-emerald-700 font-semibold">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-black/70 to-black/50">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <Link
            to="/blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 group"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          
          <div className="flex items-center space-x-4 text-white/80 mb-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>{post.author}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">{post.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              return (
                <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Share & Navigation */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <p className="text-gray-600 mb-2">Share this article:</p>
                <div className="flex space-x-4">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold">Facebook</button>
                  <button className="text-blue-400 hover:text-blue-500 font-semibold">Twitter</button>
                  <button className="text-blue-800 hover:text-blue-900 font-semibold">LinkedIn</button>
                </div>
              </div>
              <Link
                to="/book-now"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">More Travel Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{new Date(relatedPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span className="text-sm">{relatedPost.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{relatedPost.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}