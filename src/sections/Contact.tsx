import { ContactCTA } from '../components';
import { contact, site } from '../data/content';

export function Contact() {
  return (
    <div className="wrap block">
      <ContactCTA id="contact" title={contact.title} subtitle={contact.subtitle} email={site.email} buttonLabel={contact.buttonLabel} />
    </div>
  );
}
