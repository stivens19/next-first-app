import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Pricing Page',
 description: 'Pricing Page',
};
export default function PricingPage() {
    return (
      <div>
        <span className="text-7xl">Pricing</span>
      </div>
    );
  }