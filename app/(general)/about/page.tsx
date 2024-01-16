import type { Metadata } from "next";


export const metadata:Metadata = {
 title: 'About Title',
 description: 'About Description',
 keywords:['About Page','Stivens']
};
export default function AboutPage() {
  return (
    <div>
      <span className="text-7xl">About Page</span>
    </div>
  );
}