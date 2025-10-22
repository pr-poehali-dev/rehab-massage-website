import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Петренко Семен Васильевич</h3>
            <p className="text-muted-foreground">
              Дипломированный массажист и реабилитолог с медицинским образованием
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-2">
              <a
                href="tel:+79654586880"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={18} />
                +7 (965) 458-68-80
              </a>
              <a
                href="https://wa.me/79654586880"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="MessageCircle" size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <a
              href="https://uslugi.yandex.ru/profile/SemenPetrenko-450371"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="ExternalLink" size={18} />
              Яндекс.Услуги
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Петренко Семен Васильевич. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
