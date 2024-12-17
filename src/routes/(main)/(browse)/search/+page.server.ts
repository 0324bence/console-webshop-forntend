import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    filters: async ({ request }) => {
        let redirectUrl = "/?";

        const data = await request.formData();

        //states
        const states = data.getAll("state");
        const stateString = states.join(",");
        if (stateString.length > 0) {
            redirectUrl += `stateIds=${encodeURIComponent(stateString)}&`;
        }

        //manufacturers
        const manufacturers = data.getAll("manufacturer");
        const manufacturerString = manufacturers.join(",");
        if (manufacturerString.length > 0) {
            redirectUrl += `manufacturerIds=${encodeURIComponent(manufacturerString)}&`;
        }

        //models
        const models = data.getAll("model");
        const modelString = models.join(",");
        if (modelString.length > 0) {
            redirectUrl += `modelIds=${encodeURIComponent(modelString)}&`;
        }

        //title
        const title = data.get("title");
        if (title) {
            redirectUrl += `title=${encodeURIComponent(title.toString())}&`;
        }

        return redirect(303, redirectUrl);
    }
};
