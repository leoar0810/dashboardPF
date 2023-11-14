import EnterpriseCard from "@/components/EnterpriseCard";
import { title, subtitle } from "@/components/primitives";
import { fontQuicksand, fontRoboto } from "@/config/fonts";
import { max_ganancias } from "@/mock/enterpises";
import { Image } from "@nextui-org/react";

export default function Home() {
	return (
		<section className="flex flex-col gap-2 min-w-full min-h-screen ">

			<div className="w-full">
				<img
					// removeWrapper
					alt="Relaxing app background"
					className="z-0 w-full  h-[300px] object-cover"
					src="https://images.pexels.com/photos/14751274/pexels-photo-14751274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				/>
			</div>

			<div className="flex flex-col gap-8 px-4 xl:px-[15%] pt-5 pb-14">

				<div className="flex flex-col gap-4 ">
					<h2 className={`${fontRoboto.className} text-2xl text-center`}>Crecimiento empresarial en Colombia</h2>

					{/* <p className={`${fontQuicksand.className} text-lg`}>
						Somos un proyecto dedicado y especializado en hacer seguimiento y realizar análisis
						a los datos oficiales presentados por las empresas colombianas, para de esta forma crear herramientas
						útiles para identificar insights claves a la hora de tomar decisiones acertadas en el contexto de la gestión
						empresarial
					</p> */}
					<p className={`${fontQuicksand.className} text-lg`}>
						El crecimiento empresarial en Colombia ha experimentado un notable impulso en las últimas décadas, marcando una transformación significativa en el panorama económico del país. Este fenómeno se ha visto favorecido por una combinación de factores, que incluyen políticas gubernamentales orientadas al fomento de la inversión, mejoras en la infraestructura, estabilidad macroeconómica y un aumento en la participación de Colombia en el comercio internacional.
					</p>

					<Section 
						title="Factores Impulsores del Crecimiento Empresarial"
						content="Este crecimiento se ha visto favorecido por diversas variables, como las políticas gubernamentales orientadas al fomento de la inversión, mejoras en la infraestructura y la estabilidad macroeconómica. Además, la participación activa de Colombia en el comercio internacional ha ampliado las oportunidades para las empresas locales"
					/>
				
					<Section
						title="Importancia del Conocimiento Preciso"
						content="La importancia de contar con conocimiento certero sobre el crecimiento empresarial radica en la capacidad de las empresas para adaptarse y capitalizar oportunidades. La comprensión precisa de tendencias del mercado, cambios en la demanda y avances tecnológicos es esencial para la toma de decisiones estratégicas informadas."
					/>
					
					<Section
						title="Gestión de Riesgos y Decisiones Financieras Sólidas"
						content="El conocimiento certero también es crucial para gestionar riesgos y tomar decisiones financieras sólidas. Identificar y mitigar riesgos potenciales, como cambios legislativos o volatilidades económicas, es esencial para garantizar la estabilidad operativa y financiera."
					/>
			
				</div>

				<h4 className={`${fontRoboto.className} text-2xl`}>Empresas más relevantes</h4>

				<div className="flex flex-col gap-4 md:flex-row overflow-x-scroll grow pb-4">
					{
						max_ganancias.map((enterprise, index) => (
							<EnterpriseCard
								earns={enterprise.earns}
								image={enterprise.image}
								name={enterprise.name}
								url={enterprise.url}
								key={index}
							/>
						))
					}
				</div>
			</div>

			{/* <iframe
				title="Report Section"
				className="grow min-h-full mx-auto xl:w-[1300px] xl:h-[700px]"
				src="https://app.powerbi.com/view?r=eyJrIjoiMjc3YjZiNGQtMGQ2NC00ZThlLWE2ZGQtYTkwZWEwZjllNDY0IiwidCI6ImJhYjBiNjc5LWJkNWYtNGZlOC1iNTE2LWM2YjhiMzE3Yzc4MiIsImMiOjR9"
				allowFullScreen={true}
			></iframe> */}
		</section>
	);
}

export function Section(props: { title: string, content: string}) {
	return (
		<>
		<h2 className={`${fontRoboto.className} text-xl`}>{props.title}</h2>
		<p className={`${fontQuicksand.className} text-lg`}>{props.content}</p>
		</>
	)
}
