import CustomCard from "@/components/Card";
import { subtitle, title } from "@/components/primitives";
import { fontQuicksand, fontRoboto } from "@/config/fonts";

import { models} from '@/mock/models';
import { Link } from "@nextui-org/react";
import { Quicksand, Roboto } from "next/font/google";

export default function ModelsPage() {
	return (
		<section className="flex flex-col gap-8 items-center  min-w-full min-h-screen py-10">
			<div className="flex flex-col mx-auto gap-4 xl:max-w-[900px]">
				<h2 className={`${fontRoboto.className} text-center text-4xl`}>Modelos</h2>

				<p className={`${fontQuicksand.className}`}>
					Aquí puedes encontrar una galería de modelos los cuales te permitiran conocer más
					a fondo la realidad ecónomica de las empresas y sectores más importante de colombia,
					haciendo uso de diferentes técnicas y herramientas de analítica de datos.
				</p>
				
				<p>
					Todos estos modelos fueron implementados utilizando datos confiables y veríficados, extraídos 
					de <Link href="https://www.datos.gov.co/Comercio-Industria-y-Turismo/10-000-Empresas-mas-Grandes-del-Pa-s/6cat-2gcs" target="_blank">datos.gov.co</Link>. Estos son de acceso público, por lo cual
					todos pueden acceder ellos.
				</p>

				<p>
					Si deseas conocer más del proceso detrás de estos resultados puedes consultarlos <Link href="/process">Aquí</Link>
				</p>
			</div>

			<div className="flex flex-col md:flex-row gap-4 lg:gap-8">
				{
					models.map((model, index) => (
						<CustomCard
							id={model.id}
							key={index}
							title={model.title}
							description={model.shortDescription}
							image={model.image}
							url={model.url}
						/>
					))
				}
			</div>
		</section>
	)
}