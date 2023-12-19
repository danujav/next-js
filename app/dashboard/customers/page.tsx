import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Customers',
    description: 'Customers Acme Dashboard',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function Page() {
    return <p>Customers Page</p>
}