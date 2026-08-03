import { home } from "../routes/home";

export async function router(request: Request): Promise<Response> {
    const url = new URL(request.url);

    switch (url.pathname) {
        case "/":
            return home();

        default:
            return new Response("404 - Not Found", {
                status: 404,
            });
    }
}