import { Metadata } from "next";

type Props = {
    params: Promise<{
        productId: string;
    }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const resolvedParams = await params;
    const title = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${resolvedParams.productId}`);
        }, 100);
    });
    return {
        title: `Product ${title}`,
    };
};

export default async function ProductDetails({ params }: Props) {
    const resolvedParams = await params;
    return <h1>Details about product {resolvedParams.productId}</h1>;
}