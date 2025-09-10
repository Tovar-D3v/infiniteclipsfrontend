import React from "react";

export default function Footer({ themeClasses }) {
  return (
    <footer
      className={`border-t ${themeClasses.headerBorder} mt-20 ${themeClasses.footerBg}`}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p className={`mb-6 ${themeClasses.textSecondary} text-lg`}>
            © 2025 Infinite Clips. Todos los derechos reservados.
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <a
              href="#"
              className={`${themeClasses.textSecondary} ${themeClasses.linkHover} transition-colors duration-200 font-medium`}
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className={`${themeClasses.textSecondary} ${themeClasses.linkHover} transition-colors duration-200 font-medium`}
            >
              Términos de Servicio
            </a>
            <a
              href="#"
              className={`${themeClasses.textSecondary} ${themeClasses.linkHover} transition-colors duration-200 font-medium`}
            >
              Soporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
