/**
 * Parses a blog slug and extracts relevant information such as ID, language, and whether it's a draft or belongs to a specific rubric.
 *
 * @param blogSlug - The blog slug to be parsed.
 * @returns An object containing the parsed information from the blog slug.
 *
 * @throws If the provided blog slug is invalid and doesn't match any defined format.
 */
export const getBlogInfoBySlug = (blogSlug: string) => {
    // fach - deutsches wort für subject
    const [fach, ...rest] = blogSlug.split('/');

    // drafts, public
    if (fach === 'drafts' || fach === 'public') {
        const [lang, filename] = rest;
        const [id, ...slugrest] = filename!.split('---');

        return {
            id: id!,
            slug: slugrest.join('---'),
            lang: lang!,
            draft: fach === 'drafts',
        };
    }
    // rubrics
    else if (fach === 'rubrics') {
        const [lang, rubric, filename] = rest;
        const [id, ...slugrest] = filename!.split('---');

        return {
            id: id!,
            slug: slugrest.join('---'),
            lang: lang!,
            draft: false,
            rubric: rubric!,
        };
    } else {
        throw new Error(
            `invalid blog slug: ${fach} - define it in blogSlugTool`,
        );
    }
};
