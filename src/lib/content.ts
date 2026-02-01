import fs from "fs";
import path from "path";
import { Cruise, Product, SiteContent } from "./types";

const contentDir = path.join(process.cwd(), "content");

export function getCruises(): Cruise[] {
  const filePath = path.join(contentDir, "en", "cruises.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function getCruise(slug: string): Cruise | undefined {
  const cruises = getCruises();
  return cruises.find((c) => c.slug === slug);
}

export function getProducts(): Product[] {
  const filePath = path.join(contentDir, "ja", "products.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function getProduct(slug: string): Product | undefined {
  const products = getProducts();
  return products.find((p) => p.slug === slug);
}

export function getSiteContent(locale: "en" | "ja"): SiteContent {
  const filePath = path.join(contentDir, locale, "site-content.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}
