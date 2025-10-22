import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Contacts = () => {
  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (965) 458-68-80',
      link: 'tel:+79654586880',
      description: 'Звоните с 9:00 до 20:00',
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      value: 'Написать сообщение',
      link: 'https://wa.me/79654586880',
      description: 'Отвечу в течение часа',
    },
    {
      icon: 'ExternalLink',
      title: 'Яндекс.Услуги',
      value: 'Профиль и отзывы',
      link: 'https://uslugi.yandex.ru/profile/SemenPetrenko-450371',
      description: 'Онлайн-запись и прайс',
    },
  ];

  const workingAreas = [
    'Москва и Московская область',
    'Выезд на дом',
    'Дома престарелых',
    'Реабилитационные центры',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-muted-foreground">
              Для консультации, уточнения стоимости и записи обращайтесь:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={method.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                  <Button asChild className="w-full rounded-full">
                    <a 
                      href={method.link} 
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {method.value}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="MapPin" size={28} className="text-primary" />
                  <h2 className="text-2xl font-bold">География работы</h2>
                </div>
                <ul className="space-y-3">
                  {workingAreas.map((area, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-lg text-muted-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Clock" size={28} className="text-primary" />
                  <h2 className="text-2xl font-bold">Режим работы</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-lg font-semibold mb-1">Понедельник - Воскресенье</div>
                    <div className="text-muted-foreground">9:00 - 20:00</div>
                  </div>
                  <div className="text-muted-foreground">
                    График работы индивидуален и подстраивается под ваше удобное время
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center">
            <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Запишитесь на консультацию
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Первая консультация поможет определить программу реабилитации и ответить 
              на все ваши вопросы. Свяжитесь со мной удобным способом.
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
                  Позвонить сейчас
                </a>
              </Button>
            </div>
          </div>

          <Card className="border-none shadow-lg mt-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Часто задаваемые вопросы</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-2">Как проходит первая консультация?</h4>
                  <p className="text-muted-foreground">
                    На первой встрече я провожу осмотр, собираю анамнез и составляю индивидуальную 
                    программу реабилитации, подходящую именно вам.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Сколько длится один сеанс?</h4>
                  <p className="text-muted-foreground">
                    Продолжительность сеанса зависит от программы и составляет от 40 минут до 1,5 часов.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Нужно ли специальное оборудование?</h4>
                  <p className="text-muted-foreground">
                    Все необходимое для проведения сеанса я привожу с собой. От вас требуется 
                    только удобное место для работы.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
