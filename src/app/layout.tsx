import { Providers } from "@/store/provider";
import "@/styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Indonesia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
