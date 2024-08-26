import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"

const LandListing = ({ id, title, description, price, size, image }) => (
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <img src={`/api/placeholder/${350}/${200}`} alt={title} className="w-full h-[200px] object-cover mb-4" />
      <p className="text-lg font-bold">Price: ${price.toLocaleString()}</p>
      <p>Size: {size} acres</p>
    </CardContent>
    <CardFooter>
      <Button>Contact Seller</Button>
    </CardFooter>
  </Card>
);

export default LandListing;