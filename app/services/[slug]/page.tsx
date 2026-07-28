import { notFound } from "next/navigation";
import { getService } from "@/lib/utils/getService";

import { services } from "@/lib/data/services";

import { Metadata } from "next";

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {

    const { slug } = await params;

    const service = getService(slug);

    if (!service) {
        return {};
    }

    return {
        title: service.seoTitle,
        description: service.metaDescription,
    };
}

export function generateStaticParams() {

    return services.map(service => ({
        slug: service.slug,
    }));

}

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ServicePage({
    params,
}: Props) {

    const { slug } = await params;

    const service = getService(slug);

    if (!service) {
        notFound();
    }

    return (

        <main className="mx-auto max-w-5xl px-6 py-32">

            <h1 className="text-6xl font-bold text-[#123B63]">
                {service.title}
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600">
                {service.heroDescription}
            </p>

        </main>

    );
}