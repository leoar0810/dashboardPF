import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
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
				src="https://app.powerbi.com/view?r=eyJrIjoiMjc3YjZiNGQtMGQ2NC00ZThlLWE2ZGQtYTkwZWEwZjllNDY0IiwidCI6ImJhYjBiNjc5LWJkNWYtNGZlOC1iNTE2LWM2YjhiMzE3Yzc4MiIsImMiOjR9"
				allowFullScreen={true}
			></iframe>
			{/* <div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Make&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
				<br />
				<h1 className={title()}>
					websites regardless of your design experience.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Beautiful, fast and modern React UI library.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div> */}
		</section>
	);
}
