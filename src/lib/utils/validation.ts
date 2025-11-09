import { z } from 'zod';

const isBrowserFile = (value: unknown): value is File =>
	typeof File !== 'undefined' && value instanceof File;

const MAX_UPLOAD_SIZE = 5 * 1024 * 1024;

const pdfFileSchema = z
	.custom<File>((value) => isBrowserFile(value), {
		message: 'Bitte laden Sie Ihren Lebenslauf als PDF hoch.'
	})
	.superRefine((file, ctx) => {
		if (file.type !== 'application/pdf') {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Erlaubt sind nur PDF-Dateien.'
			});
		}
		if (file.size > MAX_UPLOAD_SIZE) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Die Datei darf maximal 5 MB groß sein.'
			});
		}
	});

const optionalPdfFileSchema = z
	.custom<File | undefined>((value) => value == null || isBrowserFile(value), {
		message: 'Bitte laden Sie eine gültige Datei hoch.'
	})
	.superRefine((file, ctx) => {
		if (!file) return;
		if (file.type !== 'application/pdf') {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Erlaubt sind nur PDF-Dateien.'
			});
		}
		if (file.size > MAX_UPLOAD_SIZE) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Die Datei darf maximal 5 MB groß sein.'
			});
		}
	})
	.transform((file) => file ?? undefined);

export const contactSchema = z.object({
	name: z.string().min(2, 'Bitte geben Sie mindestens zwei Zeichen ein.'),
	email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
	phone: z
		.string()
		.optional()
		.transform((value) => value?.trim() ?? '')
		.refine(
			(value) => value.length === 0 || /^[\d+()/\s-]{6,20}$/.test(value),
			'Bitte geben Sie eine gültige Telefonnummer ein.'
		),
	message: z.string().min(20, 'Bitte geben Sie mindestens 20 Zeichen ein.'),
	privacy: z
		.boolean()
		.refine((value) => value === true, 'Bitte akzeptieren Sie die Datenschutzbestimmungen.')
});

export const careerApplicationSchema = contactSchema
	.extend({
		positionId: z.string().min(1, 'Bitte wählen Sie eine Stelle aus.'),
		cv: pdfFileSchema,
		coverLetter: optionalPdfFileSchema.optional()
	})
	.transform((data) => ({
		...data,
		phone: data.phone?.trim() ?? '',
		message: data.message.trim()
	}));

export type ContactFormData = z.infer<typeof contactSchema>;
export type CareerApplicationFormData = z.infer<typeof careerApplicationSchema>;

