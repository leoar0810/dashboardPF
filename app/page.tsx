import EnterpriseCard from "@/components/EnterpriseCard";
import { title, subtitle } from "@/components/primitives";
import { fontQuicksand, fontRoboto } from "@/config/fonts";
import { max_ganancias } from "@/mock/enterpises";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

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

				<h4 className={`${fontRoboto.className} text-2xl`}>Noticías destacadas</h4>
				
				<div>
					<New />
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

function Section(props: { title: string, content: string }) {
	return (
		<>
			<h2 className={`${fontRoboto.className} text-xl`}>{props.title}</h2>
			<p className={`${fontQuicksand.className} text-lg`}>{props.content}</p>
		</>
	)
}

function New() {
	return (
		<div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
			<Card className="col-span-12 sm:col-span-4 h-[300px]">
				<CardHeader className="absolute z-10 top-1 flex-col !items-start">
					{/* <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p> */}
					<a href="https://mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/282196:MinTIC-presento-el-programa-Inicia-con-TIC-en-Riochacha" target="_blank" className="text-white font-medium text-large">MinTIC presentó el programa "Inicia con TIC" en Riochacha</a>
				</CardHeader>
				<Image
					removeWrapper
					alt="Card background"
					className="z-0 w-full h-full object-cover"
					src="https://www.mintic.gov.co/portal/715/articles-282198_foto_marquesina.jpg"
				/>
			</Card>
			{/* <NewCard
				title="Fabrica de productividad"
				content="Accede a la fabrica de productividad"
				image="/news/1.jpeg"
				url="https://www.camarabaq.org.co/fabricas-de-productividad-2023/"
			/> */}
			<Card className="col-span-12 sm:col-span-4 h-[300px]">
				<CardHeader className="absolute z-10 top-1 flex-col !items-start">
					<a href="https://www.minhacienda.gov.co/webcenter/portal/SaladePrensa/pages_DetalleNoticia?documentId=WCC_CLUSTER-232540" className="text-white font-medium text-large">Incremento del impuesto predial</a>
				</CardHeader>
				<Image
					removeWrapper
					alt="Card background"
					className="z-0 w-full h-full object-cover"
					src="https://www.minhacienda.gov.co/webcenter/ShowProperty?nodeId=%2FConexionContent%2Fwcc_cluster-232541%2F%2FidcPrimaryFile&revision=latestreleased"
				/>
			</Card>
			<Card className="col-span-12 sm:col-span-4 h-[300px]">
				<CardHeader className="absolute z-10 top-1 flex-col !items-start">
					<a href="https://www.minhacienda.gov.co/webcenter/portal/Minhacienda#!0" target="_blank" className="text-white font-medium text-large">Colombia emitio bonos sociales por 2500 USD</a>
				</CardHeader>
				<Image
					removeWrapper
					alt="Card background"
					className="z-0 w-full h-full object-cover"
					src="https://www.minhacienda.gov.co/webcenter/ShowProperty?nodeId=%2FConexionContent%2Fwcc_cluster-232438%2F%2FidcPrimaryFile&revision=latestreleased"
				/>
			</Card>
			<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
				<CardHeader className="absolute z-10 top-1 flex-col items-start">
					<p className="text-tiny text-white/60 uppercase font-bold">New</p>
					<h4 className="text-white font-medium text-2xl">Hagamos Negocios</h4>
				</CardHeader>
				<Image
					removeWrapper
					alt="Card example background"
					className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
					src="https://www.camarabaq.org.co/wp-content/uploads/2023/10/Story-Negocios-Mas-Internacionales-05.jpg"
				/>
				<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
					<div>
						<p className="text-black text-tiny">¿Quieres exportar tus productos?. Conectate con mercado extranjeros y locales</p>
					</div>
					<Button className="text-tiny" color="primary" radius="full" size="sm">
						<a href="https://www.hagamosnegocios.com/" target="_blank">
							Ver más
						</a>
					</Button>
				</CardFooter>
			</Card>
			<Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
				{/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
					<p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
					<h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
				</CardHeader> */}
				<Image
					removeWrapper
					alt="Relaxing app background"
					className="z-0 w-full h-full object-cover"
					src="https://www.camarabaq.org.co/wp-content/uploads/2023/10/Negocios-Productivos_web-3.jpg"
				/>
				<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
					<div className="flex flex-grow gap-2 items-center">
						{/* <Image
							alt="Breathing app icon"
							className="rounded-full w-10 h-11 bg-black"
							src="/images/breathing-app-icon.jpeg"
						/> */}
						<div className="flex flex-col">
							<p className="text-tiny text-white/60">Negocios +Productivos</p>
							<p className="text-tiny text-white/60">Accede al curso.</p>
						</div>
					</div>
					<Button radius="full" size="sm"><a href="https://www.camarabaq.org.co/negocios-mas-productivos">Ver más</a></Button>
				</CardFooter>
			</Card>
		</div>
	)
}


function NewCard(props: { image: string, url: string, title: string, content: string }) {
	return (
		<Card isFooterBlurred className="h-[300px] col-span-12 sm:col-span-7 min-w-[300px] grow">
			{/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
            </CardHeader> */}
			<Image
				removeWrapper
				alt="Relaxing app background"
				className="z-0 w-full h-full object-cover"
				src={props.image}
			/>
			<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
				<div className="flex flex-grow gap-2 items-center">
					<Image
						alt="Breathing app icon"
						className="rounded-full w-10 h-11 bg-black"
						src="/images/breathing-app-icon.jpeg"
					/>
					<div className="flex flex-col">
						<p className="text-tiny text-white/60">{props.title}</p>
						<p className="text-tiny text-white/60">{props.content}</p>
					</div>
				</div>
				<Button radius="full" size="sm">
					<a href={props.url} target="_blank">
						Ver más
					</a></Button>
			</CardFooter>
		</Card>
	)
}