export interface TeacherTestimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  testimonial: string;
}

export const teacherTestimonials: TeacherTestimonial[] = [
  {
    id: 1,
    name: "Maria Eduarda",
    role: "Professora de Matemática",
    image: "/teachers/maria.webp",
    testimonial:
      "Passei a preparar minhas aulas em menos da metade do tempo. Hoje consigo dedicar muito mais atenção aos meus alunos.",
  },

  {
    id: 2,
    name: "Carlos Henrique",
    role: "Professor de História",
    image: "/teachers/carlos.webp",
    testimonial:
      "A IA faz o trabalho pesado, mas a decisão final continua sendo minha. Isso me trouxe muita confiança.",
  },

  {
    id: 3,
    name: "Ana Paula",
    role: "Coordenadora Pedagógica",
    image: "/teachers/ana.webp",
    testimonial:
      "A plataforma respeita a BNCC e organiza tudo de maneira extremamente prática.",
  },
];