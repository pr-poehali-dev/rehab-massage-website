import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'Baby',
      title: 'Детская реабилитация',
      items: [
        'Реабилитация при ДЦП',
        'Коррекция задержки моторного развития',
        'Работа с гидроцефалией',
        'Развитие двигательных навыков',
      ],
    },
    {
      icon: 'Users',
      title: 'Взрослая реабилитация',
      items: [
        'Посттравматическое восстановление',
        'Укрепление мышечного корсета',
        'Увеличение подвижности суставов',
        'Коррекция осанки',
      ],
    },
    {
      icon: 'Heart',
      title: 'Массаж и терапия',
      items: [
        'Лечебный массаж',
        'Реабилитационный массаж',
        'Миофасциальный релиз',
        'Мануальная терапия',
      ],
    },
    {
      icon: 'Home',
      title: 'Выездное обслуживание',
      items: [
        'Сеансы на дому',
        'Работа в домах престарелых',
        'Реабилитационные центры',
        'Индивидуальный график',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Услуги</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная реабилитация и массаж для детей и взрослых
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon} size={28} className="text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-lg text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center">
            <Icon name="Star" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Подробная информация об услугах
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Полный перечень услуг, актуальные цены и возможность онлайн-записи 
              доступны на моей странице в Яндекс.Услугах
            </p>
            <Button size="lg" asChild className="rounded-full">
              <a 
                href="https://uslugi.yandex.ru/profile/SemenPetrenko-450371" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Icon name="ExternalLink" size={20} className="mr-2" />
                Перейти в Яндекс.Услуги
              </a>
            </Button>
          </div>

          <div className="mt-16 bg-secondary/50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Запись на консультацию</h2>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Свяжитесь со мной для уточнения стоимости, обсуждения программы реабилитации 
              и записи на удобное время
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full">
                <a href="https://wa.me/79654586880" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full">
                <a href="tel:+79654586880">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
