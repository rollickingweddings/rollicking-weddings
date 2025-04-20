export default function BlogPage() {
  return (
    <main className="min-h-screen p-6 bg-pink-50">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">Blog</h1>
      <p className="text-center max-w-2xl mx-auto text-gray-700 mb-6">
        Discover the most fabulous, offbeat, glitter-drenched weddings from couples around the world.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5].map((post) => (
          <div key={post} className="bg-white p-4 rounded-xl shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold text-pink-600 mb-2">Blog Post {post}</h2>
            <p className="text-gray-600 text-sm">A sneak peek into wedding wonderland #{post}.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
