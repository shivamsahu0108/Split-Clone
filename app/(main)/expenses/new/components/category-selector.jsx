"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CategorySelector = ({ categories, onChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Handle when a catgory is selected
  const handleCatgoryChange = (categroyId) => {
    selectedCategory(categroyId);

    // Only call onChange if it exists and the value has changed
    if (onChange && categroyId !== selectedCategory) {
      onChange(categroyId);
    }
  };

  // if no categories or empty categories array
  if (!categories || categories.length === 0) {
    return <div>No categories available</div>;
  }
  useEffect(() => {
    // Set default value if not already set
    if (!selectedCategory && categories.length > 0) {
      // Find a default category or use the first one
      const defaultCategory =
        categories.find((cat) => cat.default) || categories[0];

      // Set the default without triggering a re-render loop
      setTimeout(() => {
        setSelectedCategory(defaultCategory.id);
        if (onChange) {
          onChange(defaultCategory.id);
        }
      }, 0);
    }
  }, []);

  return (
    <Select value={selectedCategory} onChange={handleCatgoryChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem key={category.id} value={category.id}>
            <div className="flex items-center gap2">
              <span>{category.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategorySelector;
