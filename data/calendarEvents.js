const events = [
   { d: 8, m: 8, y: 2022, event: 'Bienvenida y presentación\nde la materia\nLugar: Auditorio CyT' },
   { d: 10, m: 8, y: 2022, event: '¿Cómo se tiene una idea de emprendimiento?\nLugar: Auditorio CyT', expires: 'Entregables:\nFormulario presentación\nde la materia' },
   { d: 12, m: 8, y: 2022, expires: 'Entregables:\nFormulario charla\nde ideas de emprendimiento' },
   { d: 15, m: 8, y: 2022, event: 'Festivo' },
   { d: 17, m: 8, y: 2022, event: 'Charla:\nroles de personalidad\nLugar: Auditorio CyT' },
   { d: 19, m: 8, y: 2022, expires: 'Entregables:\nFormulario charla roles de personalidad,\nEncuesta de conocimientos previos' },
   { d: 22, m: 8, y: 2022, event: 'Charla:\n7 tipos de innovación\nLugar: Auditorio CyT', expires: 'Inicia zona de búsqueda de expertos' },
   { d: 24, m: 8, y: 2022, event: 'Charla: 6 roles de compañia\nLugar: Auditorio CyT,\nluego salones\nde clase 2do piso', expires: 'Entregables:\nFormulario charla 7 tipos de innovación' },
   { d: 26, m: 8, y: 2022, expires: 'Entregables:\nFormulario charla 6 roles de compañia,\nInscripción de ideas de emprendimiento' },
   { d: 29, m: 8, y: 2022, event: 'Feria de ideas de emprendimiento\nLugar: Salones 2do piso CyT' },
   { d: 31, m: 8, y: 2022, event: 'Charla:\nBases de un pitch\nLugar: Auditorio CyT' },
   { d: 19, m: 8, y: 2022, expires: 'Entregables:\nFormulario charla roles de personalidad,\nEncuesta de conocimientos previos' },
   { d: 2, m: 9, y: 2022, expires: 'Entregables:\nFormulario charla\nbases de un pitch' },
   { d: 5, m: 9, y: 2022, event: 'Mentoría\nLugar: Salones 2do piso CyT' },
   { d: 7, m: 9, y: 2022, event: 'Charla: Marketing (1ra hora)\nMentoría (2da hora)\nLugar: Auditorio CyT,\nluego salones\nde clase 2do piso', expires: 'Entregables:\nActa de compromiso' },
   { d: 9, m: 9, y: 2022, expires: 'Entregables:\nFormulario charla\nde Marketing' },
   { d: 12, m: 9, y: 2022, event: 'Mentoría\n Lugar: Salones 2do piso CyT' },
   { d: 14, m: 9, y: 2022, event: 'Charla diseño de proyecto\nLugar: Auditorio CyT,\nluego salones\nde clase 2do piso' },
   { d: 15, m: 9, y: 2022, expires: 'Fin zona de búsqueda\nde expertos e invitados especiales\n\nEntregables:\nFormulario charla\ndiseño de proyecto' },
   { d: 19, m: 9, y: 2022, expires: 'Inicio zona de inversión en asesores' },
   { d: 26, m: 9, y: 2022, event: 'Charla:\nprototipado y TRL\nLugares: Auditorio CyT,\nEdificio 401, Paraninfo A y B' },
   { d: 28, m: 9, y: 2022, event: 'Mentoría\nLugar: Salones 2do piso CyT' },
   { d: 30, m: 9, y: 2022, expires: 'Entregables:\nFormulario charla\nprototipado y TRL' },
   { d: 3, m: 10, y: 2022, event: 'Reto de Piso:\n Pitch 1.0 (infografía)\nLugar: Salones 2do piso CyT' },
   { d: 5, m: 10, y: 2022, event: 'Charla:\nConstrucción del\nBuyer persona (1a hora)\nMentoría (2da hora)\nLugar: Auditorio CyT,\nluego salones\nde clase 2do piso' },
   { d: 7, m: 10, y: 2022, expires: 'Fin zona de inversión en asesores piso 1\n\nEntregables:\nFormulario charla\nconstrucción Buyer persona' },
   { d: 10, m: 10, y: 2022, event: 'Mentoría\nLugar: Salones 2do piso CyT' },
   { d: 12, m: 10, y: 2022, event: 'Asesorías de Prototipado\nLugar: Salones', expires: 'Entregables:\nPrimera entrega\ntrabajo escrito' },
   { d: 17, m: 10, y: 2022, event: 'Festivo' },
   { d: 19, m: 10, y: 2022, event: 'Mentoría\nLugar: Salones 2do piso CyT', expires: 'Entregables:\nEvaluación de desempeño 1,\nTrabajo en equipo' },
   { d: 20, m: 10, y: 2022, expires: 'Fin zona de\nbúsqueda de expertos' },
   { d: 24, m: 10, y: 2022, event: 'Mentoría\n Lugar: Salones 2do piso CyT', expires: 'Inicio zona de\ninversión en asesores' },
   { d: 26, m: 10, y: 2022, event: 'Charla:\nModelos de negocio y pricing (1a hora)\nMonitoria (2da hora)\nLugar: Auditorio CyT,\nluego salones\nde clase 2do piso' },
   { d: 28, m: 10, y: 2022, expires: 'Entregables:\nFormulario charla\nmodelos de negocio y pricing' },
   { d: 31, m: 10, y: 2022, event: 'Charla:\nPitch de ventas\nLugar: Auditorio CyT' },
   { d: 2, m: 11, y: 2022, event: 'Reto de piso:\nPitch 2.0\nLugar: Salones 2do piso CyT' },
   { d: 4, m: 11, y: 2022, expires: 'Fin zona de\ninversión asesores\n\nEntregables:\nFormulario charla\npitch de ventas,\nPrimera entrega página web WIX' },
   { d: 7, m: 11, y: 2022, event: 'Festivo', expires: 'Inicio zona de\nbúsqueda de expertos' },
   { d: 9, m: 11, y: 2022, event: 'Mentoría\nLugar: Salones 2do piso CyT' },
   { d: 14, m: 11, y: 2022, event: 'Festivo' },
   { d: 16, m: 11, y: 2022, event: 'Charla de emprendimiento\nLugar: Auditorio CyT', expires: 'Entregables:\nPágina web WIX,\nvídeo de 1 min y póster' },
   { d: 17, m: 11, y: 2022, expires: 'Fin zona de\nbúsqueda de expertos\n\nEntregables:\nFormulario charla\nde emprendimiento' },
   { d: 21, m: 11, y: 2022, event: 'Mentoría\nLugar: Salones 2do piso CyT', expires: 'Inicio zona inversión\nde asesores\nEntregables: Trabajo escrito final (también subirlo a página WIX)' },
   { d: 23, m: 11, y: 2022, event: 'Feria: Ingenia Futuro\nLugar: Plaza', expires: 'Evaluación pitch final, página web y prototipo' },
   { d: 27, m: 11, y: 2022, expires: 'Encuesta de percepción de la asignatura' },
   { d: 28, m: 11, y: 2022, event: 'Gran Final\nLugar: Auditorio CyT' },
   { d: 30, m: 11, y: 2022, event: 'Mentoría de retroalimentación\nLugar: Salones 2do piso CyT', expires: 'Entregables:\nEvaluación de desempeño 2,\nNota apreciativa del mentor' },
]

export default events