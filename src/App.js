import React, { useState, useEffect } from 'react';
import LandListing from './LandListing';

const App = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // In a real app, you'd fetch this data from an API
    const mockListings = [
      { id: 1, title: "Beautiful Meadow", description: "Scenic land with mountain views", price: 250000, size: 5, image: "meadow.jpg" },
      { id: 2, title: "Forested Retreat", description: "Private wooded area perfect for a cabin", price: 180000, size: 3.5, image: "forest.jpg" },
      { id: 3, title: "Lakefront Property", description: "Prime real estate with lake access", price: 500000, size: 2, image: "lake.jpg" },
    ];
    setListings(mockListings);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Land for Sale</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.map(listing => (
          <LandListing key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
};

export default App;