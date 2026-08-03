import { layout } from "../views/layout";

export async function home(): Promise<Response> {
    return new Response(
        layout({
            title: "Home",

            pageType: "public",

            content: `
<section class="hero text-center">

<h1 class="display-4 fw-bold">

Workers Panel

</h1>

<p class="lead text-secondary">

Cloudflare Workers • D1 Database • Xtream Compatible

</p>

<div class="mt-4">

<a href="/admin" class="btn btn-primary btn-lg">

Admin Panel

</a>

</div>

</section>

<div class="row g-4">

<div class="col-md-3">

<div class="card shadow-sm h-100">

<div class="card-body text-center">

<h1>☁️</h1>

<h5>Cloudflare Workers</h5>

<p class="text-secondary">

Serverless Runtime

</p>

</div>

</div>

</div>

<div class="col-md-3">

<div class="card shadow-sm h-100">

<div class="card-body text-center">

<h1>🗄️</h1>

<h5>D1 Database</h5>

<p class="text-secondary">

SQLite at the Edge

</p>

</div>

</div>

</div>

<div class="col-md-3">

<div class="card shadow-sm h-100">

<div class="card-body text-center">

<h1>📺</h1>

<h5>Xtream API</h5>

<p class="text-secondary">

Smarters Compatible

</p>

</div>

</div>

</div>

<div class="col-md-3">

<div class="card shadow-sm h-100">

<div class="card-body text-center">

<h1>🚀</h1>

<h5>HTTP 302</h5>

<p class="text-secondary">

Redirect Streams

</p>

</div>

</div>

</div>

</div>

<div class="row mt-5">

<div class="col-lg-6">

<div class="card shadow-sm">

<div class="card-body">

<h4>

Project Status

</h4>

<ul>

<li>✅ Cloudflare Worker</li>

<li>✅ TypeScript</li>

<li>✅ Router</li>

<li>✅ Bootstrap Layout</li>

<li>✅ GitHub Codespaces</li>

</ul>

</div>

</div>

</div>

<div class="col-lg-6">

<div class="card shadow-sm">

<div class="card-body">

<h4>

Roadmap

</h4>

<ul>

<li>⬜ D1 Database</li>

<li>⬜ Admin Login</li>

<li>⬜ Channel CRUD</li>

<li>⬜ User CRUD</li>

<li>⬜ Xtream API</li>

<li>⬜ get.php</li>

</ul>

</div>

</div>

</div>

</div>
`,
        }),
        {
            headers: {
                "Content-Type": "text/html;charset=UTF-8",
            },
        }
    );
}