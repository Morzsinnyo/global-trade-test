'use client';

import { useLanguage } from '@/lib/i18n';
import { Product } from '@/types/product';
import { images } from '@/lib/images';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { lang } = useLanguage();
  const flavors = product.flavors[lang];

  return (
    <div className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold text-foreground">{product.name[lang]}</h3>
        {product.isDiaWellness && (
          <img src={images.diaWellness} alt="Dia-Wellness" className="w-8 h-auto shrink-0" />
        )}
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-3">
        {product.servingType.map((type) => (
          <span
            key={type}
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              type === 'bake-off'
                ? 'bg-primary/10 text-primary'
                : 'bg-brand-yellow/20 text-brand-dark'
            }`}
          >
            {type === 'bake-off' ? 'Bake-Off' : 'Ready-to-Serve'}
          </span>
        ))}
        {product.isDiaWellness && (
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-wellness/20 text-wellness">
            Dia-Wellness
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-4">{product.description[lang]}</p>

      {/* Details */}
      <div className="space-y-1 text-sm">
        {product.weight && (
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">{lang === 'hu' ? 'Súly:' : 'Weight:'}</span> {product.weight}
          </p>
        )}
        {product.packaging && (
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">{lang === 'hu' ? 'Csomagolás:' : 'Packaging:'}</span> {product.packaging}
          </p>
        )}
        {flavors.length > 0 && (
          <div className="pt-2">
            <p className="font-medium text-foreground text-xs uppercase tracking-wide mb-1">
              {lang === 'hu' ? 'Ízek' : 'Flavors'}
            </p>
            <div className="flex flex-wrap gap-1">
              {flavors.map((flavor) => (
                <span
                  key={flavor}
                  className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded"
                >
                  {flavor}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
