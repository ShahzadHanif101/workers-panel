export interface LayoutOptions {
    title: string;
    content: string;
    pageType?: "public" | "admin" | "auth";
}

export function layout({
    title,
    content,
    pageType = "public",
}: LayoutOptions): string {
    const isPublic = pageType === "public";
    const isAdmin = pageType === "admin";

    return `<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1">

<title>${title} | Workers Panel</title>

<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
rel="stylesheet">

<link
href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
rel="stylesheet">

<style>

body{
    background:#f8f9fa;
    min-height:100vh;
}

.hero{
    padding:80px 0;
}

footer{
    margin-top:80px;
    border-top:1px solid #dee2e6;
    padding:25px 0;
    color:#6c757d;
    font-size:.9rem;
}

.card{
    border:none;
    border-radius:15px;
}

.navbar-brand{
    font-weight:700;
}

</style>

</head>

<body>

${isPublic
            ? `
<nav class="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm">

<div class="container">

<a class="navbar-brand" href="/">
<i class="bi bi-cloud-fill"></i>
Workers Panel
</a>

<button
class="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbar">

<span class="navbar-toggler-icon"></span>

</button>

<div class="collapse navbar-collapse" id="navbar">

<ul class="navbar-nav ms-auto">

<li class="nav-item">
<a class="nav-link" href="/">Home</a>
</li>

<li class="nav-item">
<a class="nav-link" href="/about">About</a>
</li>

<li class="nav-item">
<a class="nav-link" href="/admin">
Admin
</a>
</li>

</ul>

</div>

</div>

</nav>
`
            : ""
        }

${isAdmin
            ? `
<nav class="navbar navbar-dark bg-dark shadow-sm">

<div class="container-fluid">

<span class="navbar-brand">

<i class="bi bi-speedometer2"></i>

Workers Panel Admin

</span>

<a href="/" class="btn btn-outline-light btn-sm">

Home

</a>

</div>

</nav>
`
            : ""
        }

<div class="container">

${content}

</div>

<footer>

<div class="container d-flex justify-content-between">

<div>

<strong>Workers Panel</strong>

</div>

<div>

Version 1.0

</div>

</div>

</footer>

<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js">
</script>

</body>

</html>`;
}