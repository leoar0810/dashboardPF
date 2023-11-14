"use client";
import { fontQuicksand, fontRoboto, fontdmSerif } from "@/config/fonts";
import { models } from "@/mock/models";
import { useEffect, useState } from "react";

export default function ModelDetail({ params }: any) {
    const [model, setModel] = useState<any>();

    useEffect(() => {
        const model = models.find(m => m.id == params.id);

        if (!model) return;

        setModel(model)
    }, [])


    return (
        <main className="px-8 lg:px-10 flex flex-col gap-4 py-8">
            <h3 className={`${fontRoboto.className} text-center text-4xl`}>
                {model?.title}
            </h3>

            <p className={`${fontQuicksand.className}text-base`}>{model?.description}</p>

            {
                model?.items.map((item: { title: string, content: string }, index: any) => (
                    <>
                        <h4 className={`${fontRoboto.className} text-xl font-medium `}>{item.title}</h4>
                        <p className={`${fontQuicksand.className}`}>{item.content}</p>
                    </>
                ))
            }
            <iframe
                title="Report Section"
                className="grow min-h-full mx-auto xl:w-[1300px] xl:h-[700px]"
                src={model?.dashboard}
                allowFullScreen={true}
            ></iframe>
        </main>
    )
}