export default function VendorsPage() {
  return (
    <main className="min-h-screen p-6 bg-yellow-50">
      <h1 className="text-4xl font-bold text-center text-yellow-700 mb-8">Recommended Vendors</h1>
      <p className="text-center max-w-2xl mx-auto text-gray-700 mb-6">
        Our favorite wild and wonderful vendors, hand-picked for their sparkle.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Photographers", "Florists", "Venues", "Designers", "Planners", "DJs"].map((vendor) => (
          <div key={vendor} className="bg-white p-4 rounded-xl shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">{vendor}</h2>
            <p className="text-gray-600 text-sm">The dreamiest {vendor.toLowerCase()} to make your day magical.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
