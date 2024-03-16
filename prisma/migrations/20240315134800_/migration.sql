/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `CollectionsOnProducts` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `CollectionsOnProducts` table. All the data in the column will be lost.
  - You are about to drop the column `assignedAt` on the `CategoriesOnProducts` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `CategoriesOnProducts` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CollectionsOnProducts" (
    "productId" TEXT NOT NULL,
    "collectionId" TEXT NOT NULL,

    PRIMARY KEY ("productId", "collectionId"),
    CONSTRAINT "CollectionsOnProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CollectionsOnProducts_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CollectionsOnProducts" ("collectionId", "productId") SELECT "collectionId", "productId" FROM "CollectionsOnProducts";
DROP TABLE "CollectionsOnProducts";
ALTER TABLE "new_CollectionsOnProducts" RENAME TO "CollectionsOnProducts";
CREATE TABLE "new_CategoriesOnProducts" (
    "productId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    PRIMARY KEY ("productId", "categoryId"),
    CONSTRAINT "CategoriesOnProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CategoriesOnProducts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CategoriesOnProducts" ("categoryId", "productId") SELECT "categoryId", "productId" FROM "CategoriesOnProducts";
DROP TABLE "CategoriesOnProducts";
ALTER TABLE "new_CategoriesOnProducts" RENAME TO "CategoriesOnProducts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
