export default async function Docs({
    params,
}: {
    params: Promise<{
        slug: string[];
    }>;
}) {
    const resolvedParams = await params;

    if (resolvedParams.slug?.length === 2) {
        return (
            <h1>
                Viewing docs for feature {resolvedParams.slug[0]} and concept {resolvedParams.slug[1]}
            </h1>
        );
    } else if (resolvedParams.slug?.length === 1) {
        return <h1>Viewing docs for feature {resolvedParams.slug[0]}</h1>;
    }
    return <h1>Docs home page</h1>;
}