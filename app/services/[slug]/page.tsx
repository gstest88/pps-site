import { notFound } from "next/navigation";
import { getService } from "@/lib/utils/getService";

import { services } from "@/lib/data/services";


import { Metadata } from "next";

import Navbar from "@/app/components/layout/Navbar";
import ServiceProcess from "@/app/components/services/ServiceProcess";
import ServiceHero from "@/app/components/services/ServiceHero";
import ServiceBenefits from "@/app/components/services/ServiceBenefits";
import ServiceProblems from "@/app/components/services/ServiceProblems";
import ServiceFAQ from "@/app/components/services/ServiceFAQ";
import Footer from "@/app/components/layout/Footer";
import RelatedServices from "@/app/components/services/RelatedServices";

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

       <>
    <Navbar />

    <ServiceHero service={service} />

    <ServiceProcess service={service} />

    <ServiceBenefits service={service} />

    <ServiceProblems service={service} />

    <ServiceFAQ service={service} />

    <RelatedServices service={service} />

    <Footer />
</>

    );
}