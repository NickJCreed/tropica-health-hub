import { useState, useEffect } from 'react';
import { Search, Filter, Package, Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Mock data for now - this will connect to Supabase
const mockProducts = [
  {
    id: 1,
    name: 'Vitamin C 1000mg',
    category: 'Vitamins',
    price: 450,
    description: 'High-potency vitamin C for immune support',
    inStock: true,
    rating: 4.8,
    image: null
  },
  {
    id: 2,
    name: 'Whey Protein Isolate',
    category: 'Supplements',
    price: 2800,
    description: 'Premium whey protein for muscle building',
    inStock: true,
    rating: 4.9,
    image: null
  },
  {
    id: 3,
    name: 'Paracetamol 500mg',
    category: 'OTC Medicine',
    price: 120,
    description: 'Pain relief and fever reducer',
    inStock: true,
    rating: 4.7,
    image: null
  },
  {
    id: 4,
    name: 'Echinacea Extract',
    category: 'Natural Medicine',
    price: 680,
    description: 'Natural immune system booster',
    inStock: false,
    rating: 4.6,
    image: null
  },
  {
    id: 5,
    name: 'Omega-3 Fish Oil',
    category: 'Supplements',
    price: 890,
    description: 'Heart and brain health support',
    inStock: true,
    rating: 4.8,
    image: null
  },
  {
    id: 6,
    name: 'Probiotics Complex',
    category: 'Natural Medicine',
    price: 1250,
    description: 'Digestive health and gut balance',
    inStock: true,
    rating: 4.9,
    image: null
  }
];

const categories = ['All', 'Vitamins', 'Supplements', 'OTC Medicine', 'Natural Medicine', 'Prescription'];

const Products = () => {
  const [products] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Vitamins':
        return 'bg-golden/20 text-golden-dark border-golden/30';
      case 'Supplements':
        return 'bg-ocean/20 text-ocean-dark border-ocean/30';
      case 'OTC Medicine':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'Natural Medicine':
        return 'bg-accent/20 text-accent border-accent/30';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Products
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Healthcare Essentials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse our curated selection of high-quality medicines, supplements, and wellness products.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-primary/20 focus:border-primary"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48 border-primary/20 focus:border-primary">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="shadow-tropical hover:shadow-ocean transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="bg-gradient-to-br from-primary/5 to-ocean/5 rounded-lg h-48 flex items-center justify-center mb-4 relative overflow-hidden">
                  <Package className="h-16 w-16 text-primary/30" />
                  {!product.inStock && (
                    <Badge 
                      variant="destructive" 
                      className="absolute top-2 right-2"
                    >
                      Out of Stock
                    </Badge>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge className={getCategoryColor(product.category)}>
                      {product.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-golden text-golden" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{product.name}</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ฿{product.price.toLocaleString()}
                  </span>
                  <Button 
                    className={`${
                      product.inStock
                        ? 'bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white'
                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Inquire' : 'Out of Stock'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No products found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary to-ocean text-white shadow-tropical">
            <CardContent className="py-12 px-8">
              <h3 className="text-3xl font-bold mb-4">Need Something Specific?</h3>
              <p className="text-xl mb-6 text-white/90">
                Can't find what you're looking for? Our pharmacists are here to help you find 
                the right medication or health product for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-golden"
                >
                  Contact Pharmacist
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Visit Store
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;