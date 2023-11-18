export const models = [
  {
    id: 1,
    title: "Clusterización",
    shortDescription: `La clusterización, un pilar esencial en el vasto campo de la analítica de datos, representa una herramienta poderosa para desentrañar la complejidad inherente a conjuntos masivos de información. Este modelo se erige como un faro en la vastedad de datos, permitiendo la identificación y agrupación de patrones similares para proporcionar una comprensión profunda y estratégica.`,
    items: [
      {
        title: "Introducción",
        content:
          "K-means es un algoritmo de aprendizaje automático no supervisado que agrupa datos en k clusters en función de características similares. Este enfoque permite explorar patrones ocultos y similitudes en conjuntos de datos financieros.",
      },
      {
        title: "Variables Utilizadas",
        content:
          "En este caso, se emplearon las siguientes variables financieras para el análisis: 'Ingresos Operacionales', 'Ganancia', 'Total Activos', y 'Total Pasivos'. Estas variables fueron seleccionadas debido a su importancia en la evaluación de la salud financiera de las empresas.",
      },
      {
        title: "Objetivo del Análisis",
        content:
          "El propósito principal de este análisis mediante K-means es identificar patrones subyacentes en los datos financieros y agrupar empresas con características similares. Esta segmentación facilita la comprensión de las dinámicas del mercado y la toma de decisiones informadas en ámbitos financieros.",
      },
      {
        title: "Aplicación Práctica",
        content:
          "Este modelo de K-means se convierte en una herramienta poderosa para el análisis de datos financieros, proporcionando una visión clara de cómo las empresas se distribuyen en el espacio de características definido por las variables seleccionadas. Esta información puede ser valiosa para la formulación de estrategias empresariales y la identificación de oportunidades y riesgos.",
      },
      {
        title: "Conclusiones",
        content:
          "En conclusión, la aplicación del algoritmo K-means a datos financieros ofrece una metodología efectiva para la segmentación y análisis de empresas. La identificación de patrones y similitudes contribuye significativamente a la comprensión del panorama empresarial, permitiendo a los analistas y tomadores de decisiones abordar problemas de manera más precisa y eficiente.",
      },
      ,
    ],
    image:
      "data:image/jpeg;base64,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/HiOZRkzzPSHwbh1PCHPTHPsXaxY+o7DsLS24LGeaFJWxDWPoeVtv9JGwfBetQ/0g/uf9JIxmPw9AolSpTp63AZ1XSxW9idrkC/qZqrEVZLTMtpE+VN9tp9SwREQEREBERAREQEREBERAREQEREBERAREQNDX8TURUejSWriHQ2cUaZYIfwtUNkVv5S1+0z8P47SrVDR56dVRmNKqjI+W9syg6Ot9MykgTV8H4biOHr5NNadXDB3fMzutZFdzUe6qjiuwubaqTYCRKeOq8TdamEVKVOmXQYqoitWF+WqtKkdaROUAtUt05DA33G+FGvlZTlZdiND/i/yOkq2I4LWdi1drIgsxClcwG1z8/u9pv63G6OFNPCBquJrgKMiWeqRoC9RuVUGt8zFb9JtOKUEqUnRw2Urrl39dO843xVtzMcrVtqXManD6tNjUwzG34SRdgP5diO37mfVPxaFUrUpOKg0so0J73N19tZIrUq+HJanerS/6wO46+4/SRcbxHDVaauQucMN1F7a9d7THaLVnmG6PS8cNdiMRiMYCrjJSOwUkD+r/wCwdtP8pdf7PMLTpecib2p3udTbP09JUaT18SctFcqbGo2g+XfsLmWrw5RpYRGFMVKtRypquSoXkJICkm33iLanXUjSXwzb2ibcQ455rWsxE/8AF7iQcBxKnWuFNmHxIws491PT+YXB6GTpuiYmNwytZjOEI2q8rfofl0+U0tXBVFNijfIEg/MS3RGk7VzCcIdtW5V/6j8unzm3VKdBGbRVUEs3YC5JO5kuReI01elUR/hZGDa20IIOsdQf5VjFcerYgWw32dM//MwBduhyIdF9z9BINHhlNc11zs/xvU5mf3Y7zTVKFTDMzYd2q0x922h9x191Fz2mfDeKqBX7XNTYfdsWB/KVH72mC9rTO97bIiIjURr90/C08RhNcI4KdcPUJKf0PvTPtde0svh/xHTxZdArU61O3mU3Gq3uAQw5WBtuPmBOb4vj9bEFqdFXp0/xAjzPe50Udgb95Y/7OeHpRerZ8zsi5vXc9N7769Z0w3n29dqZax67mNT9/EuhxETYykREBERAREQEREBERARPlmA3n1AREQEREBERA0PEeIVUreUrU6SBA/m1UdlY3fMgysigqFDElr2bbczFwyjRrM9YBExLIVd6WcZlYkU6lmC5wQt1JDZTmAY2JO9r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",
    url: "/models/1",
    dashboard:
      "https://app.powerbi.com/view?r=eyJrIjoiNGEzYTBlYjAtY2JlNi00YTdiLWI3ZWYtYzAwMzJkMmRmMmRlIiwidCI6ImJhYjBiNjc5LWJkNWYtNGZlOC1iNTE2LWM2YjhiMzE3Yzc4MiIsImMiOjR9",
  },
  {
    id: 2,
    title: "Estrella",
    shortDescription: `El modelo de estrella es un modelo de datos que se utiliza para representar entidades de un negocio, y sus relaciones. Este modelo es muy utilizado en el diseño de bases de datos relacionales, y es el modelo que se utiliza en la mayoría de los sistemas de bases de datos comerciales.`,
    items: [
      {
        title: "Principios Fundamentales:",
        content:
          "En el corazón de este modelo yace la premisa fundamental de la similitud intragrupo y la disparidad intergrupo. Al aplicar algoritmos avanzados, el sistema examina minuciosamente las características de los datos, agrupando puntos afines mientras mantiene una distancia distintiva entre los grupos. Esta metodología facilita la detección de tendencias, comportamientos y relaciones que podrían pasar desapercibidos en un análisis convencional.",
      },
      {
        title: "Aplicaciones Versátiles:",
        content:
          "Desde la segmentación de clientes hasta la optimización de procesos industriales, el modelo de clusterización encuentra su aplicabilidad en una variedad de campos. Identifica segmentos de mercado, perfiles de consumidores y anomalías en la producción, proporcionando una visión holística que orienta la toma de decisiones informadas.",
      },
      {
        title: "Escalabilidad y Adaptabilidad:",
        content:
          "Este modelo no se ve limitado por la magnitud de los datos. Su capacidad de escalabilidad le permite abordar conjuntos masivos con la misma eficacia que conjuntos más pequeños, garantizando que su utilidad no se vea comprometida por la escala de la información.",
      },
      {
        title: "Iteración Continua:",
        content:
          "La analítica de datos mediante clusterización es un proceso iterativo. A medida que evolucionan los conjuntos de datos y se generan nuevos, el modelo se ajusta para capturar patrones emergentes, proporcionando una visión dinámica y actualizada a lo largo del tiempo.",
      },
      {
        title: "Beneficios Tangibles:",
        content:
          "La implementación de este modelo no solo revela patrones ocultos, sino que también optimiza la eficiencia operativa, minimiza riesgos y fomenta la innovación. Facilita una toma de decisiones precisa al ofrecer una comprensión detallada de la estructura subyacente de los datos.",
      },
      {
        title: "Consideraciones Éticas:",
        content:
          "A medida que aprovechamos la clusterización para obtener información valiosa, es imperativo abordar las consideraciones éticas. La privacidad y la seguridad de los datos son aspectos centrales, y su protección debe ser inherente al diseño y la implementación del modelo.",
      },
      {
        title: "Perspectivas Futuras y Oportunidades:",
        content:
          "A medida que Colombia continúa su ascenso en el escenario empresarial mundial, las oportunidades para inversores, emprendedores y profesionales son vastas. La estabilidad macroeconómica, la infraestructura en desarrollo y el compromiso con la innovación posicionan a Colombia como un destino atractivo para aquellos que buscan participar en el florecimiento de una economía vibrante.",
      },
      {
        title: "En Resumen:",
        content:
          "En resumen, el modelo de análisis de datos mediante clusterización se erige como un faro en el vasto océano de información, guiándonos hacia la comprensión y la acción. Su capacidad para revelar patrones intrincados y su versatilidad hacen de este enfoque una herramienta esencial para aquellos que buscan desentrañar los misterios inherentes a conjuntos de datos complejos.",
      },
    ],
    image:
      "https://learn.microsoft.com/es-es/power-bi/guidance/media/star-schema/star-schema-example1.png",
    url: "/models/2",
    dashboard:
      "https://app.powerbi.com/view?r=eyJrIjoiMjc3YjZiNGQtMGQ2NC00ZThlLWE2ZGQtYTkwZWEwZjllNDY0IiwidCI6ImJhYjBiNjc5LWJkNWYtNGZlOC1iNTE2LWM2YjhiMzE3Yzc4MiIsImMiOjR9",
  },
];
