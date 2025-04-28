import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon, PhoneIcon, SearchIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Ошибка: Пользователь попытался получить доступ к несуществующему маршруту:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-3xl w-full px-6 py-12 bg-white rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-6xl font-bold text-white">404</span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <path d="M3 10h18"></path>
                  <path d="M4 10v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"></path>
                  <path d="M8 16h8"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Страница не найдена</h1>
          <p className="text-gray-600 mb-6">
            Похоже, что вы ищете дизельную электростанцию, которой нет в нашем каталоге.
            Возможно, она была перемещена или удалена.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-gray-50 rounded-lg">
              <PhoneIcon className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <h3 className="font-medium text-gray-900">Позвоните нам</h3>
              <p className="text-sm text-gray-600">Наши специалисты помогут подобрать оптимальную электростанцию</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <SearchIcon className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <h3 className="font-medium text-gray-900">Найдите модель</h3>
              <p className="text-sm text-gray-600">Воспользуйтесь поиском по каталогу дизельных электростанций</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <HomeIcon className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <h3 className="font-medium text-gray-900">Вернитесь на главную</h3>
              <p className="text-sm text-gray-600">Ознакомьтесь с нашими лучшими предложениями на главной странице</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild className="bg-yellow-500 hover:bg-yellow-600">
              <Link to="/">
                На главную страницу
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-50">
              <Link to="/catalog">
                Перейти в каталог
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            Если вам нужна консультация, позвоните нам по телефону{" "}
            <a href="tel:+78001234567" className="font-medium text-yellow-500 hover:underline">
              8 (800) 123-45-67
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
