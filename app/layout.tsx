import './globals.css';
import Sidebar from '@/components/common/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">
        {/* 사이드바 */}
        <Sidebar />

        {/* 메인 컨텐츠 */}
                <main className="p-6">{children}</main>

      </body>
    </html>
  );
}
