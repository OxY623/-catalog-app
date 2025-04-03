import { ProductGrid } from "@/components/product-grid";
import { SearchFilters } from "@/components/search-filters";

export default function Home() {
  return (
    <div className="space-y-8">
      <SearchFilters />
      <ProductGrid />
    </div>
  );
}
