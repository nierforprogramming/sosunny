// middleware/blockBrowser.js
export default function blockBrowser(req, res, next) {
  const accept = req.headers.accept || "";

  // Browser requests HTML by default
  if (accept.includes("text/html")) {
    return res.status(401).render("unauthorized");
  }

  next();
}
