import { notFound } from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

interface PageProps {
    params: Promise<{
        productId: string;
        reviewId: string;
    }>;
}

export default async function ReviewDetail({ params }: PageProps) {
    const resolvedParams = await params;

    const random = getRandomInt(2);

    if (random === 1) {
        throw new Error("Error loading review");
    }

    if (parseInt(resolvedParams.reviewId) > 1000) {
        notFound();
    }
    return (
        <h1>
            Review {resolvedParams.reviewId} for product {resolvedParams.productId}
        </h1>
    );
}