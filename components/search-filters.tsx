"use client";

import { useStore } from "@/libs/store";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SearchFilters() {
  const { setSearchQuery, setSelectedCategory, products } = useStore();

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Input
        placeholder="Search products..."
        className="sm:max-w-[300px]"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Select onValueChange={setSelectedCategory}>
        <SelectTrigger className="sm:max-w-[200px]">
          <SelectValue placeholder="All categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="null">All categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
