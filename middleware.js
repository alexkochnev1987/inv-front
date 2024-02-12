const { NextRequest, NextResponse } = require('next/server');

const PUBLIC_FILE = /\.(.*)$/;

async function middleware(req) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.locale === 'default') {
    const locale = req.cookies.get('NEXT_LOCALE')?.value || 'ru';

    const redirectUrl = new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url);
    return NextResponse.redirect(redirectUrl);
  }
}

module.exports = { middleware };
