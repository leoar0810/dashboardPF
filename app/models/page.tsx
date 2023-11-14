import CustomCard from "@/components/Card";
import { subtitle, title } from "@/components/primitives";

import { models} from '@/mock/models';

export default function ModelsPage() {
	return (
		<section className="flex flex-col gap-8 items-center  min-w-full min-h-screen py-10">
			<div className="flex flex-col text-center justify-center mx-auto gap-4 xl:max-w-[800px]">
				<h2 className={title()}>Modelos</h2>

				<p className={subtitle()}>
					Aquí puedes encontrar una galería de modelos los cuales te permitiran conocer más
					a fondo la realidad ecónomica acerca de las empresas y sectores más importante de colombia,
					haciendo uso de diferentes técnicas y herramientas de analítica de datos. 
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