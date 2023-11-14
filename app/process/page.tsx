import { fontRoboto, fontQuicksand } from "@/config/fonts"
import { Link } from "@nextui-org/react"

export default function Process() {
    return (
        <div className="flex flex-col gap-8 px-4 xl:px-[15%] pt-5 pb-14">
            <h2 className={`${fontRoboto.className} text-2xl text-center`}>¿Comó lo hacemos?</h2>

            {/* <p className={`${fontQuicksand.className} text-lg`}>
						Somos un proyecto dedicado y especializado en hacer seguimiento y realizar análisis
						a los datos oficiales presentados por las empresas colombianas, para de esta forma crear herramientas
						útiles para identificar insights claves a la hora de tomar decisiones acertadas en el contexto de la gestión
						empresarial
					</p> */}
            {/* <p className={`${fontQuicksand.className} text-lg`}>
            
            </p> */}

            <h2 className={`${fontRoboto.className} text-xl`}>Extracción de datos</h2>

            <p className={`${fontQuicksand.className} text-lg`}>
                Todos estos modelos fueron implementados utilizando datos confiables y veríficados, extraídos
                de <Link href="https://www.datos.gov.co/Comercio-Industria-y-Turismo/10-000-Empresas-mas-Grandes-del-Pa-s/6cat-2gcs" target="_blank">datos.gov.co</Link>. Estos son de acceso público, por lo cual
                todos pueden acceder ellos.
            </p>

            <h2 className={`${fontRoboto.className} text-xl`}>Limpieza y filtrado</h2>

            <p className={`${fontQuicksand.className} text-lg`}>
                Realizamos un proceso de filtrado y limpieza de datos para eliminar datos anormales que pueden alterar o generar resultados erróneos, de esta forma
                garantizamos seguridad y certeza en los resultados obtenidos.
            </p>

            <h2 className={`${fontRoboto.className} text-xl`}>Aplicación de modelos y técnicas de análitica de datos y Machine Learning</h2>

            <p className={`${fontQuicksand.className} text-lg`}>
                Mediante el empleo de diversas técnicas de análisis de datos como clusterización, procesamos todos los datos y generamos información útil que puede ser 
                de gran ayuda para describir la realidad de muchos sectores y empresas de la economía Colombiana, generando un valor agregado y siendo de vital importancia a
                la hora de tomar decisiones acertadas para impulsar el crecimiento empresarial en el país
            </p>
        </div>

    )
}