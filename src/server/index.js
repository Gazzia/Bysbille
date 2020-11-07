import koa from "koa";
import send from "koa-send";
import serve from "koa-static";
import session from "koa-session";
import {sockt} from "../stores.js";

const PORT = 3000;

const app = new koa();

// Serve static assets
//app.use(serve("public"));

app.use(serve("public"));

//Serve index.html file
app.use(async (ctx, next) => {
	await send(ctx, "index.html", {root: "public"});
	return next();
});

//app.keys = ["im a newer secret"];

// app.use(session(app));
// app.use(async (ctx) => {
// 	if (ctx.path === "/favicon.ico") return;

// 	let counter = ctx.session.counter || 0;
// 	counter = ++counter;
// 	ctx.session.counter = counter;
// 	ctx.body = "Compteur" + counter + "fois";
// });

app.listen(PORT, () => console.log("> Server listening at http://localhost:" + PORT));
