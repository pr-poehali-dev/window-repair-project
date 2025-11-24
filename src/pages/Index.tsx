import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Оконный сервис</h1>
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("guarantees")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Гарантии
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://t.me/+79810060716"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all hover-scale"
              aria-label="Telegram"
            >
              <Icon name="Send" size={20} />
            </a>
            <a
              href="https://wa.me/79810060716"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all hover-scale"
              aria-label="WhatsApp"
            >
              <Icon name="MessageCircle" size={20} />
            </a>
            <Button onClick={() => scrollToSection("contact")}>
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section
        id="hero"
        className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-secondary to-background"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Профессиональный ремонт окон
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Качественный ремонт и обслуживание окон любой сложности. Опыт
                работы более 10 лет. Гарантия на все виды работ.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="hover-scale"
                >
                  Заказать звонок
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("services")}
                  className="hover-scale"
                >
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/83decc6a-9594-4ac2-a208-297a6815db20/files/aef6228d-4dee-4d69-84f3-d5edb01ed684.jpg"
                alt="Ремонт окон"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Wrench",
                title: "Ремонт фурнитуры",
                description:
                  "Замена и ремонт ручек, петель, замков и другой фурнитуры окон",
              },
              {
                icon: "Wind",
                title: "Регулировка окон",
                description:
                  "Настройка геометрии створок, устранение продувания и промерзания",
              },
              {
                icon: "Droplets",
                title: "Замена уплотнителя",
                description:
                  "Установка качественного уплотнителя для защиты от влаги и холода",
              },
              {
                icon: "Square",
                title: "Замена стеклопакетов",
                description:
                  "Установка новых стеклопакетов с улучшенными характеристиками",
              },
              {
                icon: "Shield",
                title: "Утепление окон",
                description:
                  "Комплексное утепление для снижения теплопотерь в помещении",
              },
              {
                icon: "Sparkles",
                title: "Чистка и обслуживание",
                description:
                  "Профессиональная чистка, смазка механизмов и профилактика",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover-scale transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon
                      name={service.icon}
                      className="text-primary"
                      size={28}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="guarantees" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Гарантии и сертификаты
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/83decc6a-9594-4ac2-a208-297a6815db20/files/7cba54a0-6666-4330-a47b-b8a2aed8d937.jpg"
                alt="Сертификаты"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: "CheckCircle2",
                  title: "Гарантия до 5 лет",
                  description:
                    "Официальная гарантия на все виды выполненных работ",
                },
                {
                  icon: "Award",
                  title: "Сертифицированные мастера",
                  description:
                    "Все специалисты имеют соответствующие сертификаты",
                },
                {
                  icon: "FileCheck",
                  title: "Лицензированная деятельность",
                  description:
                    "Работаем официально с полным пакетом документов",
                },
                {
                  icon: "Clock",
                  title: "Быстрый выезд",
                  description: "Приедем в течение 24 часов после заявки",
                },
              ].map((guarantee, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon
                      name={guarantee.icon}
                      className="text-primary"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">
                      {guarantee.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Телефон</h3>
                  <a
                    href="tel:+79810060716"
                    className="text-primary hover:underline text-lg"
                  >
                    +7 (981) 006-07-16
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:Avg13.08@yandex.ru"
                    className="text-primary hover:underline text-lg"
                  >
                    Avg13.08@yandex.ru
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground text-lg">
                    г. Всеволожск, ул. Ленинградская, д. 22
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Режим работы</h3>
                  <p className="text-muted-foreground text-lg">
                    Пн-Вс: 8:00 - 22:00
                  </p>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  Оставьте заявку
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Опишите проблему"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 Оконный сервис. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;