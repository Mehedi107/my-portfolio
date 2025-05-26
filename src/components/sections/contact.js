import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export default function ContactSection() {
  return (
    <section>
      <div className="wrapper">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

        <Card className="shadow-xl">
          <CardContent className="p-8">
            <form
              action="https://formsubmit.co/your@email.com"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden field for redirect */}
              <input
                type="hidden"
                name="_next"
                value="https://yourdomain.com/thanks"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <Textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Type your message..."
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
