// Copyright (c) 2025 Applied AI Systems LLC
// Licensed under the MIT License - see LICENSE file for details
// Government contractor - professional standards enforced

import './globals.css';

export const metadata = {
  title: 'Applied AI Systems - Advanced Technical Solutions',
  description:
    'Comprehensive modeling, engineering, and intelligence solutions for aerospace, defense, and government. From space physics research to enterprise architecture - specialized expertise across complex technical domains.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
