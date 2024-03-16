/*
  Warnings:

  - Made the column `cartId` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "cartId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "items" TEXT NOT NULL,
    CONSTRAINT "Order_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("cartId", "createdAt", "email", "id", "items", "status", "total", "updatedAt") SELECT "cartId", "createdAt", "email", "id", "items", "status", "total", "updatedAt" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
CREATE UNIQUE INDEX "Order_cartId_key" ON "Order"("cartId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
