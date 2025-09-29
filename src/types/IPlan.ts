import { FeatureType } from "./IFeature";

export interface PlanType {
  _id: string;
  name: string;
  description: string;
  price: string;
  yearlyDiscount: number;
  billingCycle: string;
  availableTo: string[];
  tier: string;
  features: FeatureType[];
  isActive: boolean;
  mostPopular: boolean;
}