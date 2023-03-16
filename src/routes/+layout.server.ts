import type { LayoutServerLoad } from "./$types";


export const load: LayoutServerLoad = async ({ url }) => {
    return {
        pathname: url.pathname
    }
}