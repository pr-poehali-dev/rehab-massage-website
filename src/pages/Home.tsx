import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Home = () => {
  const specializations = [
    {
      icon: 'Baby',
      title: 'Детская реабилитация',
      description: 'ДЦП, задержка моторного развития, гидроцефалия',
    },
    {
      icon: 'Heart',
      title: 'Взрослая реабилитация',
      description: 'Посттравматическое восстановление, укрепление мышц, увеличение объема движений',
    },
    {
      icon: 'Home',
      title: 'Выезд на дом',
      description: 'Работа на дому, в домах престарелых и реабилитационных центрах',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Петренко Семен Васильевич
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Дипломированный массажист и реабилитолог с медицинским образованием
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">Реабилитация детей с двигательными нарушениями</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">Посттравматическая реабилитация взрослых и пожилых</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">Выезд на дом и в учреждения</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="rounded-full">
                  <a href="https://wa.me/79654586880" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Записаться на консультацию
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

            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/5fa6cb48-f79f-4bbe-a3a9-8484747546c9/files/b9c2f834-edb5-4f17-a045-03c3a76f3676.jpg"
                alt="Массаж и реабилитация"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Ключевые специализации
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Индивидуальный подход к каждому пациенту
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={spec.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{spec.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://cdn.poehali.dev/projects/5fa6cb48-f79f-4bbe-a3a9-8484747546c9/files/7df7fb95-6966-48fe-91cd-39518d2b9f16.jpg"
                alt="Реабилитация"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">
                Опыт и профессионализм
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Широкий опыт работы в реабилитации детей с различными двигательными нарушениями, 
                задержкой моторного развития, ДЦП и гидроцефалией.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Специализируюсь на посттравматической реабилитации взрослых: укрепление мышц, 
                восстановление объема движений в суставах, коррекция мышечного дисбаланса.
              </p>
              <Button size="lg" asChild className="rounded-full">
                <a href="/about">
                  Подробнее обо мне
                  <Icon name="ArrowRight" size={20} className="ml-2" />
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

export default Home;
