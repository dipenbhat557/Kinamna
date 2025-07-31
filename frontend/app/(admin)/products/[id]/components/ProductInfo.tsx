"use client";

import { useState } from "react";
import Image from "next/image";
import { Edit2, Save, X, Tag, Package, Star } from "lucide-react";
import { useProduct } from "@/fetchers/product/queries";
import { useUpdateProduct } from "@/fetchers/product/mutation";
import { useParams } from "next/navigation";

export function ProductInfo() {
  const params = useParams();
  const productId = params.id as string;
  
  const { data: product, isLoading } = useProduct(productId);
  const updateProduct = useUpdateProduct();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
  });

  useState(() => {
    if (product) {
      setEditForm({
        name: product.name,
        description: product.description,
      });
    }
    //@ts-ignore
  }, [ productId]);

  const handleSave = async () => {
    try {
      await updateProduct.mutateAsync({
        id: productId,
        data: editForm
      });
      setIsEditing(false);
    } catch (error) {
      // Error handled by mutation
    }
  };

  if (isLoading || !product) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Calculate average rating
  const averageRating =
    product.reviews.length > 0
      ? product.reviews.reduce((acc, review) => acc + review.rating, 0) /
        product.reviews.length
      : 0;

  // Calculate total stock
  const totalStock = product.variants.reduce(
    (acc, variant) => acc + variant.stock,
    0
  );

  return (
    <div className="space-y-6 p-6">
      {/* Header with Brand and Basic Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 rounded-xl overflow-hidden">
            <Image
              src={product.imageUrl || ""}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            {isEditing ? (
              <input
                type="text"
                value={editForm.name}
                onChange={(e) =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
                className="text-2xl font-semibold text-gray-900 bg-transparent border-b-2 border-[#FFC633] focus:outline-none"
              />
            ) : (
              <h1 className="text-2xl font-semibold text-gray-900">
                {product.name}
              </h1>
            )}
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm text-gray-500">
                {product.brand.name}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-500">
                {product.category.name}
              </span>
            </div>
          </div>
        </div>

        {isEditing ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(false)}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={handleSave}
              className="p-2 text-green-600 hover:text-green-700"
            >
              <Save className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <Edit2 className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main Product Info */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Product Details
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Description
              </label>
              {isEditing ? (
                <textarea
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm({ ...editForm, description: e.target.value })
                  }
                  rows={4}
                  className="w-full px-3 py-2 rounded border border-gray-200 focus:border-[#FFC633] focus:ring focus:ring-[#FFC633] focus:ring-opacity-50"
                />
              ) : (
                <p className="text-gray-700">{product.description}</p>
              )}
            </div>

            {product.sale && (
              <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                <h3 className="font-medium text-yellow-800 mb-1">
                  Active Sale
                </h3>
                <p className="text-sm text-yellow-700">
                  {product.sale.description}
                </p>
                <div className="mt-2 flex items-center gap-2 text-sm text-yellow-600">
                  <span>
                    {product.sale.isPercentage
                      ? `${product.sale.discount}% off`
                      : `$${product.sale.discount} off`}
                  </span>
                  <span>•</span>
                  <span>
                    Ends {new Date(product.sale.endDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Overview</h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Package className="w-4 h-4" />
                <span className="text-sm">Variants</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                {product.variants.length}
              </span>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Tag className="w-4 h-4" />
                <span className="text-sm">Total Stock</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                {totalStock}
              </span>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Star className="w-4 h-4" />
                <span className="text-sm">Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold text-gray-900">
                  {averageRating.toFixed(1)}
                </span>
                <span className="text-sm text-gray-500">
                  ({product.reviews.length})
                </span>
              </div>
            </div>
          </div>

          {/* Variants Summary */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Price Range
            </h3>
            <div className="space-y-2">
              {product.variants.map((variant) => (
                <div
                  key={variant.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-600">{variant.sku}</span>
                  <span className="font-medium text-gray-900">
                    ${variant.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Reviews */}
        {/* <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm md:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Reviews
          </h2>

          <div className="space-y-4">
            {product.reviews.slice(0, 3).map((review) => (
              <div key={review.id} className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-[#FFC633] fill-[#FFC633]"
                              : "text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  {review.comment && (
                    <p className="mt-1 text-gray-600">{review.comment}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
