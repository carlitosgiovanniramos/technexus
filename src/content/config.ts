import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    unit_tag: z.string().optional(),
    category: z.string().default('General'),
    duration: z.string().optional(),
    author_name: z.string().default('Equipo TechNexus'),
    created_at: z.string(),
    image_url: z.string().default('/img/tienda.png'),
    theme: z.enum(['light', 'dark']).default('dark').optional(),
    hero_style: z.enum(['banner', 'contained', 'wide']).default('contained').optional(),
    featured: z.boolean().default(false),
    
    // Structured data for academic tasks and technical posts (optional)
    introduccion: z.string().optional(),
    sections: z.object({
      requerimientos_intro: z.string().optional(),
      requerimientos_funcionales: z.array(z.string()).optional(),
      requerimientos_no_funcionales: z.array(z.string()).optional(),
      planificacion: z.array(z.object({
        nombre: z.string(),
        rol: z.string(),
        foto: z.string()
      })).optional(),
      bocetos_mano_intro: z.string().optional(),
      bocetos_mano: z.array(z.object({
        titulo: z.string(),
        imagen: z.string()
      })).optional(),
      prototipo_interactivo: z.string().optional(),
      bocetos_digitales_intro: z.string().optional(),
      bocetos_digitales_admin: z.array(z.object({
        titulo: z.string(),
        descripcion: z.string(),
        screen_id: z.string().optional()
      })).optional(),
      bocetos_digitales_cliente: z.array(z.object({
        titulo: z.string(),
        descripcion: z.string(),
        screen_id: z.string().optional()
      })).optional(),
      conclusiones: z.array(z.string()).optional()
    }).optional()
  })
});

export const collections = {
  blog: blogCollection,
};
