/**
 * Medição opcional, ligada só quando os IDs são informados no build.
 * Fica fora do componente cliente para a política de privacidade (página estática) saber
 * se há ou não ferramentas de medição e descrever apenas o que realmente existe.
 * Antes de ligar: a revisão do titular pede avaliação específica (assuntos de saúde, BPC,
 * criminal e família não devem ser comunicados a plataformas de anúncio).
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
export const ANALYTICS_ENABLED = Boolean(GA_ID || PIXEL_ID);
