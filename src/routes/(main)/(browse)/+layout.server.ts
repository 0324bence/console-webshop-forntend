import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import apiPath from "$lib/apiPath";
import type { User } from "$lib/types/User";

export const load: LayoutServerLoad = async ({ cookies }) => {};
