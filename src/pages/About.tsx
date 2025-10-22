import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const About = () => {
  const methods = [
    {
      icon: 'Activity',
      title: 'Укрепление мышц',
      description: 'Повышение мышечной силы и эластичности тканей',
    },
    {
      icon: 'Waves',
      title: 'Восстановление движений',
      description: 'Увеличение объема движений в суставах',
    },
    {
      icon: 'Target',
      title: 'Коррекция дисбаланса',
      description: 'Исправление мышечного дисбаланса и постуры',
    },
    {
      icon: 'TrendingUp',
      title: 'Реабилитация',
      description: 'Восстановление после длительного вынужденного положения',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Обо мне</h1>
            <p className="text-xl text-muted-foreground">
              Профессиональный подход к восстановлению здоровья
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/5fa6cb48-f79f-4bbe-a3a9-8484747546c9/files/7ea9b0ce-06b5-43f0-b5ab-145de7c05142.jpg"
                alt="Детская реабилитация"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Профессиональный профиль</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Здравствуйте, меня зовут Семен и я дипломированный массажист и реабилитолог 
                с медицинским образованием.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Обладаю широким опытом в реабилитации детей с двигательными нарушениями, 
                задержкой моторного развития, ДЦП, гидроцефалией. Индивидуальный подход 
                к каждому маленькому пациенту позволяет достигать значимых результатов.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Методики работы со взрослыми
            </h2>
            <div className="bg-card rounded-3xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">Посттравматическая реабилитация</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Специализируюсь на комплексном восстановлении пациентов после травм и 
                длительной иммобилизации. Применяю проверенные методики для достижения 
                максимальных результатов.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {methods.map((method, index) => (
                <Card 
                  key={index}
                  className="border-none shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={method.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                        <p className="text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-secondary/50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Формат работы</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={28} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Выездная работа</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Провожу сеансы на дому у пациента, в домах престарелых и реабилитационных 
                    центрах. Это обеспечивает максимальный комфорт и удобство для пациентов.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="MessageSquare" size={28} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Контакты и консультация</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Для уточнения стоимости услуг, записи на консультацию и ответов на все 
                    вопросы свяжитесь со мной удобным способом.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="rounded-full">
                      <a href="https://wa.me/79654586880" target="_blank" rel="noopener noreferrer">
                        <Icon name="MessageCircle" size={18} className="mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="rounded-full">
                      <a href="tel:+79654586880">
                        <Icon name="Phone" size={18} className="mr-2" />
                        Позвонить
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
