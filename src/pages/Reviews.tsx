import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const stats = [
    { value: '50+', label: 'Довольных пациентов' },
    { value: '5★', label: 'Средняя оценка' },
    { value: '7+', label: 'Лет опыта' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Отзывы</h1>
            <p className="text-xl text-muted-foreground">
              Мнения моих пациентов — лучшая награда за мою работу
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="border-none shadow-lg text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 mb-12 animate-fade-in">
            <div className="text-center">
              <Icon name="MessageSquare" size={48} className="text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Реальные отзывы на Яндекс.Услугах
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Все отзывы моих пациентов собраны на официальной странице в Яндекс.Услугах. 
                Там вы можете прочитать подробные истории восстановления и результаты работы.
              </p>
              <Button size="lg" asChild className="rounded-full">
                <a 
                  href="https://uslugi.yandex.ru/profile/SemenPetrenko-450371" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Icon name="ExternalLink" size={20} className="mr-2" />
                  Читать все отзывы
                </a>
              </Button>
            </div>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Почему пациенты выбирают меня
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Профессионализм</h4>
                    <p className="text-muted-foreground">
                      Медицинское образование и регулярное повышение квалификации
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Индивидуальный подход</h4>
                    <p className="text-muted-foreground">
                      Программа реабилитации разрабатывается для каждого пациента отдельно
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Home" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Выезд на дом</h4>
                    <p className="text-muted-foreground">
                      Удобство и комфорт — провожу сеансы в привычной для пациента обстановке
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Видимые результаты</h4>
                    <p className="text-muted-foreground">
                      Пациенты отмечают улучшения уже после первых сеансов
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 bg-secondary/50 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Готовы начать восстановление?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Свяжитесь со мной для консультации и записи
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full">
                <a href="https://wa.me/79654586880" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
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

export default Reviews;
