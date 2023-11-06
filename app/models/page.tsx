import { subtitle, title } from "@/components/primitives";

export default function ModelsPage() {
    return (
        <section className="flex flex-col gap-8  min-w-full min-h-screen py-10">
			<div className="flex flex-col text-center justify-center mx-auto gap-4 xl:max-w-[800px]">
				<h2 className={title()}>Crecimiento empresarial en Colombia</h2>

				<p className={subtitle()}>Aquí puedes encontrar un dashboard interactivo el cual te permitira conocer más
					a fondo la realidad ecónomica acerca de las empresas y sectores más importante de colombia
				</p>
			</div>

			<iframe
				title="Report Section"
				className="grow min-h-full mx-auto xl:w-[1300px] xl:h-[700px]"
				src="https://app.powerbi.com/view?r=eyJrIjoiMmU0NjdiYTQtOWJiYi00ZGIzLWFmZjgtMjAxMGFhN2I3ZDFjIiwidCI6ImJhYjBiNjc5LWJkNWYtNGZlOC1iNTE2LWM2YjhiMzE3Yzc4MiIsImMiOjR9"
				allowFullScreen={true}
			></iframe>
		</section>
    )
}